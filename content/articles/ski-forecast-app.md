---
title: "Ski Forecast App"
createdAt: "2020-011-13"
description: "Avalanche Canada + Spot WX Forecasts"
img: "https://i.imgur.com/PobEovnh.png"
alt: "Ski Forecast app"
featured: "yes"
tags:
  - projects
  - coding
  - python
  - flask
  - skiing
---

***This is post 2/2 in a two part project. to view the other half of this project click [here](https://willzittlau.com/blog/ski-forecast-api).***

Well, it's about time to make part two of this project. The past month has been busy (I landed my first dev job!!!) so I haven't had as much time to focus on the blog. But, now that I've been out skiing and Avy Canada has started up their forecasts again it was time to finish this post. In part one I covered the API which powers the backend of this app, so here I'll focus on how the UI is generated. 

Once again Flask is used, and the app is launched to Heroku (no surprises here) at https://skiforecast.herokuapp.com . The main idea was to have two categories, backcountry and resort, and to streamline my decision making process midweek when I'm looking at where to ski on the weekend. The landing page is dead simple, with some extremely minimal CSS through one of the lighter frameworks out there, Pure CSS, to generate styling for all of the links. Click on one of the areas and the app gets a lot more fun.

To generate all the pages, the API is called on initial load. Clicking on an area triggers another request to Avalanche Canada's API as well as a function which scrapes data from SpotWX. The two most forecast models I use the most are HRDPS and NAM, so these are what get pulled. I need to do some major cleanup for organization, but for now all of the scripts are (in?)conveniently placed in `scripts.py`. My `app.py` route for the forecasts page looks something like this:

``` python
# app.py
@app.route("/<area_name>", methods =['GET'])
def forecast(area_name):
    # Query API to dynamically generate site
    areas = requests.get('https://skiforecast-api.herokuapp.com/api/v1/areas', auth=(os.environ['API_User'], os.environ['API_KEY'])) #(userpass(), userpass()))
    areas = areas.json()
    # Generate page if it exists in API
    for area in areas:
        if str(area_name) == area["name"]:
            # Code graphs in here
            # Get str vars to pass to functions
            name = area["name"]
            area_type = area["area_type"]
            avalanche_forecast = area["avalanche_forecast"]
            coordinates = area["coordinates"]
            tz_info = area["tz_info"]
            NAM_elevation = area["NAM_elevation"]
            HRDPS_elevation = area["HRDPS_elevation"]
            # Call functions to get data
            map_coordinates = get_map_coordinates(coordinates)
            avy_data = get_avy_forecast(avalanche_forecast)
            weather_data = get_HRDPS_weather(coordinates, tz_info)
            NAM_data = get_NAM_weather(coordinates, tz_info)
            # Create weather graphs
            HRDPS_plot = create_HRDPS_graph(weather_data)
            NAM_plot = create_NAM_graph(NAM_data)
            # Create avalanche info
            avy_danger = get_avy_danger(avy_data)
            avy_problems = get_avy_problems(avy_data)
            # Create forecast summary for end of page
            summary = []
            summary.append("<h3>Highlights:</h3>" + avy_data["highlights"])
            summary.append("<h3>Avalanche Summary:</h3>" + avy_data["avalancheSummary"])
            summary.append("<h3>Snowpack Summary:</h3>" + avy_data["snowpackSummary"])
            summary.append("<h3>Regional Summary:</h3>" + avy_data["weatherForecast"])
            # Return template and vars to pass to Jinja
            return render_template('forecast.html', 
                                    title = create_header(area["name"]) + ' - Will\'s Weather Forecast', 
                                    header = create_header(area["name"]), 
                                    map_coordinates = map_coordinates,
                                    HRDPS_plot = HRDPS_plot, 
                                    NAM_plot = NAM_plot, 
                                    summary = summary, 
                                    avy_danger = avy_danger, 
                                    avy_problems = avy_problems, 
                                    confidence = avy_data["confidence"], 
                                    date_issued = 'Date Issued: '+ avy_data["dateIssued"][:10], 
                                    NAM_elevation = NAM_elevation,
                                    HRDPS_elevation = HRDPS_elevation,)
    # Requested route doesn't exist in API
    else:
        abort (404)
```

The takeaways from this are a) I'm passing in the route as a variable so that each page will get its own unique URL, b) Once the API is called, I find the specific entry which matches the request to return the data from and c) I start calling a lot of functions from this data which then gets returned to the render template so that it can be easily injected as HTML. When you open up an forecast page this is what it looks like:

![Imgur](https://i.imgur.com/PobEovnh.png)

As you can see, there's three main sections: the map, the weather graphs, and the avalanche summary. We'll go through each component one by one. The title is generated through the area name pulled from the API, which is also how the url route is created (it is saved in kebab case for easy url routing and then filtered through Python's `.title()` and `.replace('-', ' ')` string methods). The maps integration was actually dead simple, being cheap I didn't sign up through Google's API as it needed a credit card and instead found a third party website (https://www.embedgooglemap.co/). played with the HTML outputs and realized that I could simply pass in my coordinates needed for SpotWX to change the map data for each area. The src variable is is set through a regex in `scripts.py` to give me `src = 'https://maps.google.com/maps?width=100%%25&amp;height=500&amp;hl=en&amp;q=%s&amp;t=p&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed' % map_coordinates` 

```html
{# forecasts.html #}
<!--Google map embed-->
<div class="map">
	<iframe width="100%" height="500" 
	frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
	src="{{ map_coordinates | safe }}"></iframe>
</div>
```

Next up was arguably the hard part, which was generating weather graphs from the supplied data. First off, SpotWX gets requested with `requests.get('https://spotwx.com/products/grib_index.php?model=gem_lam_continental&%s&tz=%s&display=table' % (coordinates, tz_info))` This is passed through a function which scrapes the relevant data and throws it into a pandas data frame and converts the data types. (Example below is for HRDPS forecast, same process for NAM)

```python
# scripts.py
def get_HRDPS_weather(coordinates, tz_info):
    # Query SpotWX
    response = requests.get('https://spotwx.com/products/grib_index.php?model=gem_lam_continental&%s&tz=%s&display=table' % (coordinates, tz_info)).text
    soup = BeautifulSoup(response, "lxml")
    scripts = str(soup.find_all('script', text = re.compile("var aDataSet =")))
    # Regex parsing
    m = re.search(r'\[.*\](?= )', scripts)
    m = m.group(0)
    data = re.findall(r'\[(.*?)\]', m)
    df = []
    for sets in data:
        sets = sets.split('\',\'')
        for s in sets:
            s = s.replace('\'', '')
        df.append(sets)
    # Create df and drop unwanted colmuns
    df = pd.DataFrame(columns = ["DATETIME", "DATE", "TIME", "TMP", 
                    "DPT", "RH", "WS", "WD", "APCP", "CLOUD", 
                    "SLP", "PTYPE", "RQP", "SQP", "FQP", "IQP", 
                    "WS925", "WD925", "TMP850", "WS850", "WD850", "4LFTX"], data = df)
    # Correct data types from str input
    df["DATETIME"] = ''
    for i in range (0,len(df['TIME'])):
        df.at[i, 'WD'] = convert_compass(df.at[i, 'WD'])
        df.at[i, 'TMP'] = float(df.at[i, 'TMP'])
        df.at[i, 'WS'] = float(df.at[i, 'WS'])
        df.at[i, 'CLOUD'] = float(df.at[i, 'CLOUD'])
        df.at[i, 'RQP'] = float(df.at[i, 'RQP'])
        df.at[i, 'SQP'] = float(df.at[i, 'SQP'])
        df.at[i, 'FQP'] = float(df.at[i, 'FQP'])
        df.at[i, 'IQP'] = float(df.at[i, 'IQP'])
        df.at[i, 'DATE'] = datetime.datetime.strptime(df.at[i, 'DATE'], '%Y/%m/%d').date()
        df.at[i, 'TIME'] = datetime.datetime.strptime(df.at[i, 'TIME'], '%H:%M').time()
        df.at[i, 'DATETIME'] = datetime.datetime.combine(df.at[i, 'DATE'], df.at[i, 'TIME'])
    return df
```

Next this cleaned data set can be passed to Bokeh, which is what I used to generate the plots. It's quite a wall of text, so I'll try to run through it to explain a bit better. Each graph has three pages (Temperature, Precipitation, Wind/Cloud), which is what the `p1, p2, p3` variables are for. These pages have plots, which is what the `glyph_1, glyph_1a` represent. The reason there are two glyphs for each data set is that one creates the line between points while the other creates the circular point. Finally, Bokeh programmatically creates JS functions to enable interactivity with the graph, an example being `HoverTool` . This creates tooltips at each data point to give some more info. I decided to add datetime as well as precise numeric value for each point, and some even include extras such as windspeed direction, which is created through another simple function which follows this basic logic for every 22.5 degrees: `if 22.5 <= int(direction) <= 67.5: direction = str(direction) + u'\N{DEGREE SIGN}' + ' NE'` Finally, the entire graph is returned as html so it can be injected with Jinja through `{{HRDPS_plot | safe}}`. I then made a simple JS function bound to a button that lets the user toggle between the two graphs.

```python
# scripts.py
def create_HRDPS_graph(df):
    source = ColumnDataSource(df)

    p1 = figure(x_axis_type='datetime', plot_width=600, plot_height=300, toolbar_location=None, sizing_mode='scale_width')
    p1.title.text = '48H Temperature'
    p1.xaxis.axis_label = 'Date/Time'
    p1.yaxis.axis_label = 'Temperature \N{DEGREE SIGN}C'

    glyph_1 = p1.line(x= 'DATETIME', y='TMP',source=source, legend_label='Temperature', color='OrangeRed', line_width=1.5)
    glyph_1a = p1.scatter(x= 'DATETIME', y='TMP',source=source, line_color="darkRed", fill_color="OrangeRed", size=4)

    hover1 = HoverTool(renderers=[glyph_1], tooltips=[('\N{DEGREE SIGN}C', '@TMP'), 
                                                        ('Time', '@DATETIME{%F %T}')], formatters={'@DATETIME': 'datetime'})
    p1.add_tools(hover1)

    tab1 = Panel(child=p1, title="Temperature")

    p2 = figure(x_axis_type='datetime', plot_width=600, plot_height=300, toolbar_location=None, sizing_mode='scale_width')
    p2.title.text = '48H Precipitation'
    p2.xaxis.axis_label = 'Date/Time'
    p2.yaxis.axis_label = 'Amount (mm/cm)'

    glyph_1 = p2.line(x= 'DATETIME', y='RQP',source=source, legend_label='Total Rain', color='blue', line_width=1.5)
    glyph_1a = p2.scatter(x= 'DATETIME', y='RQP',source=source, line_color="darkblue", fill_color="blue", size=4)
    glyph_2 = p2.line(x= 'DATETIME', y='SQP',source=source, legend_label='Total Snow', color='lavender', line_width=1.5)
    glyph_2a = p2.scatter(x= 'DATETIME', y='SQP',source=source, line_color="lightsteelblue", fill_color="lavender", size=4)

    p2.varea(x='DATETIME', y1='SQP', source=source, color='GhostWhite', alpha=0.5)
    band = Band(base='DATETIME', upper='RQP', source=source, level='overlay', fill_alpha=0.3, fill_color='SkyBlue')
    p2.add_layout(band)

    hover2a = HoverTool(renderers=[glyph_1], tooltips=[('mm Rain', '@RQP'), ('mm Freezing Rain', '@FQP'), 
                                                        ('Time', '@DATETIME{%F %T}')], formatters={'@DATETIME': 'datetime'})
    hover2b = HoverTool(renderers=[glyph_2], tooltips=[('cm Snow', '@SQP'), ('mm Ice/Hail', '@IQP'), 
                                                        ('Time', '@DATETIME{%F %T}')], formatters={'@DATETIME': 'datetime'})
    p2.add_tools(hover2a, hover2b)

    tab2 = Panel(child=p2, title="Precipitation")

    p3 = figure(x_axis_type='datetime', plot_width=600, plot_height=300, toolbar_location=None, sizing_mode='scale_width')
    p3.title.text = '48H Wind/Cloud'
    p3.xaxis.axis_label = 'Date/Time'
    p3.yaxis.axis_label = 'Speed (km/h) / % Coverage'

    glyph_1 = p3.line(x= 'DATETIME', y='WS',source=source, legend_label='Wind Speed', color='green', line_width=1.5)
    glyph_1a = p3.scatter(x= 'DATETIME', y='WS',source=source, line_color="darkgreen", fill_color="green", size=4)
    glyph_2 = p3.line(x= 'DATETIME', y='CLOUD',source=source, legend_label='Cloud Cover', color='grey', line_width=1.5)
    glyph_2a = p3.scatter(x= 'DATETIME', y='CLOUD',source=source, line_color="darkgrey", fill_color="grey", size=4)

    band = Band(base='DATETIME', upper='CLOUD', source=source, level='underlay', fill_alpha=0.3, fill_color='lightgrey')
    p3.add_layout(band)

    hover3a = HoverTool(renderers=[glyph_1], tooltips=[('Wind Speed', '@WS'), ('Wind Direction', '@WD'), 
                                                        ('Time', '@DATETIME{%F %T}')], formatters={'@DATETIME': 'datetime'})
    hover3b = HoverTool(renderers=[glyph_2], tooltips=[('% Coverage', '@CLOUD'), 
                                                        ('Time', '@DATETIME{%F %T}')], formatters={'@DATETIME': 'datetime'})
    p3.add_tools(hover3a, hover3b)

    tab3 = Panel(child=p3, title="Wind/Cloud")

    plot = Tabs(tabs=[tab1, tab2 , tab3])

    html = file_html(plot, CDN)
    return html
```

The avalanche forecast part is a bit easier because Avalanche Canada packages the data quite nicely in their API. The hardest part was just parsing through each key-value pair to figure out what was relevant to me. Here's an example of the dataset that gets returned by the query:

``` json
//Avcan API response.json
{"id":"PC-3_2020-11-13T1600_92b8d678-ae68-4c3c-a082-d6774f59db5c","region":"glacier","forecaster":"Percy Woods","dateIssued":"2020-11-13T16:00:00Z","validUntil":"2020-11-14T16:00:00Z","bulletinTitle":"Avalanche Bulletin - Glacier National Park","highlights":"<p class=\"p_CC664AAA\"><span class=\"s_AA239A9B\">Watch for soft storm slabs and sluffing on the November 5th crust. Steep solar aspects in the alpine may harbour pockets of windslab on sun crust.</span></p>","confidence":"Moderate - Due to the number of field observations","dangerRatings":[{"date":"2020-11-13T16:00:00.000Z","dangerRating":{"alp":"2:Moderate","tln":"2:Moderate","btl":"1:Low"}},{"date":"2020-11-14T16:00:00.000Z","dangerRating":{"alp":"2:Moderate","tln":"2:Moderate","btl":"1:Low"}},{"date":"2020-11-15T16:00:00.000Z","dangerRating":{"alp":"2:Moderate","tln":"1:Low","btl":"1:Low"}}],"problems":[{"type":"Storm Slabs","elevations":["Alp","Tln"],"aspects":["N","NE","E","S","SE","SW","NW","W"],"likelihood":"Likely - Possible","expectedSize":{"min":"1.0","max":"2.0"},"comment":"<p class=\"p_CC664AAA\"><span class=\"s_AA239A9B\"> Watch for soft storm slabs forming over the Nov 5 crust at and above treeline where wind effect may amplify their sensitivity to human triggering.</span></p>","travelAndTerrainAdvice":"<ul class='ttalist'><li>The new snow will require several days to settle and stabilize.</li></ul>","icons":{"elevations":"https://www.avalanche.ca/assets/images/Elevation/Elevation-0-1-1_EN.png","aspects":"https://www.avalanche.ca/assets/images/Compass/compass-1-1-1-1-1-1-1-1_EN.png","likelihood":"https://www.avalanche.ca/assets/images/Likelihood/Likelihood-4_EN.png","expectedSize":"https://www.avalanche.ca/assets/images/size/Size-10-20_EN.png"}},{"type":"Wind Slabs","elevations":["Alp","Tln"],"aspects":["NE","E","SE","S","W","SW","NW","N"],"likelihood":"Likely - Possible","expectedSize":{"min":"1.0","max":"2.0"},"comment":"<p class=\"p_CC664AAA\"><span class=\"s_AA239A9B\"> Last weekend's outflow wind formed small pockets of windslab on immediate lees. These sit on a firm crust to 2500m and higher on steep solar aspects.</span></p>","travelAndTerrainAdvice":"<ul class='ttalist'><li>Keep an eye out for reverse loading created by northerly winds last weekend.</li></ul>","icons":{"elevations":"https://www.avalanche.ca/assets/images/Elevation/Elevation-0-1-1_EN.png","aspects":"https://www.avalanche.ca/assets/images/Compass/compass-1-1-1-1-1-1-1-1_EN.png","likelihood":"https://www.avalanche.ca/assets/images/Likelihood/Likelihood-4_EN.png","expectedSize":"https://www.avalanche.ca/assets/images/size/Size-10-20_EN.png"}}],"avalancheSummary":"<p class=\"p_CC664AAA\"><span class=\"s_AA239A9B\">One size 1.5 avalanche was observed yesterday initiating off of 8812 Peak and running into the ski line of 8812 Bowl. </span></p>","snowpackSummary":"<p class=\"p_CC664AAA\"><span class=\"s_AA239A9B\">Today's storm snow will add to the 15cm+ snow over the Nov 5th crust. At treeline the meter plus snowpack consists of a series of crusts with weaker snow between crusts. The strong Nov 5th crust reaches as high as 2500m. At upper alpine elevations last weekend's strong N'ly winds caused reverse loading of storm snow onto S'ly lee slopes.</span></p>","weatherForecast":"<p class=\"p_CC664AAA\"><span class=\"s_AA239A9B\">Cloudy with scattered flurries and 4cm of accumulation. Alpine temps should reach -6C accompanied by S'ly winds in the 15-30kmh range. Freezing level is expected to rise to 1300m. Temperatures are forecast to cool tonight into tomorrow with continued light snowfall. </span></p>","dangerMode":"Regular season","iconSet":[{"from":"0001-01-01T00:00:00Z","to":"9999-12-31T00:00:00Z","ratings":{"alp":2,"tln":2,"btl":1},"iconType":"RATINGS"}],"owner":"parks-canada"}
```

To parse this object I made three functions to get weather, forecast and problems. I just pre-made the HTML in each function so that once again it can easily be passed to Jinja and leave my `forecasts.html` page relatively clean. I also made another simple regex function to replace abbreviations from the API such as "alp" into "Alpine" so everything can be read in plain English. On the Forecast Danger ratings, I wanted to copy Avalanche Canada's coloring of the ratings in each table so I used a JS function to do that on page load (included below the Python scripts)

```python
# scripts.py
def get_avy_forecast(avalanche_forecast):
    # Query Avcan API
    response = requests.get('https://www.avalanche.ca/api/forecasts/%s.json' % avalanche_forecast) #prod
    #response = requests.get('https://www.avalanche.ca/api/bulletin-archive/2020-01-07/%s.json' % avalanche_forecast) #testing
    data = response.json()
    return data

def get_avy_danger(avy_data):
    # Parse API data and create HTML strings to pass to Jinja
    danger_list = avy_data["dangerRatings"]
    date =[]
    # Write the 3 forecast days
    for danger_date in danger_list:
        string = '<h4>' + danger_date["date"][:10] + '</h4>'
        date.append(string)
    danger = []
    # Rename keys
    for dangers in danger_list:
        dangers['dangerRating']['Alpine'] = dangers['dangerRating'].pop('alp')
        dangers['dangerRating']['Treeline'] = dangers['dangerRating'].pop('tln')
        dangers['dangerRating']['Below Treeline'] = dangers['dangerRating'].pop('btl')
        danger.append(dangers['dangerRating'])
    return date, danger

def get_avy_problems(avy_data):
    # Create html string to pass to jinja from API data
    problems_list = []
    problems_data = avy_data["problems"]
    # Write problem type and expected size
    for problem in problems_data:
        output_string = '<h4><u>' + problem["type"] + '</u></h4>' + '<p><b>Expected Size = </b>'
        for key, value in problem["expectedSize"].items():
            output_string += key.title() + ': ' + value + ', '
        # Write Likelihood and Aspects
        output_string += '<b>Likelihood = </b>' + problem["likelihood"] + '</p><p><b>Aspects = </b>'
        for aspect in problem["aspects"]:
            output_string += aspect + ', '
        # Write elevations
        output_string += '<b>Elevations = </b>'
        for elevation in problem["elevations"]:
            elevation = convert_elevtxt(elevation)
            output_string += elevation + ', '
        # Clean up final output string
        output_string = output_string[:-2]
        output_string += '</p><p>' + problem["comment"] + '</p>'
        problems_list.append(output_string)
    return problems_list
```

```javascript
document.addEventListener("DOMContentLoaded", function () {

  const elevations = document.querySelectorAll(".elev");
  const dangers = document.querySelectorAll(".danger");

  elevations.forEach(function (elevation) {
    switch (elevation.innerHTML) {
      case " Alpine ":
        elevation.style.background = "AliceBlue";
        break;
      case " Treeline ":
        elevation.style.background = "#c1d831";
        break;
      case " Below Treeline ":
        elevation.style.background = "SeaGreen";
        break;
    }
  });

  dangers.forEach(function (danger) {
    switch (danger.innerHTML) {
      case " 5:Extreme ":
        danger.style.background = "black";
        danger.style.color = "white";
        break;
      case " 4:High ":
        danger.style.background = "red";
        break;
      case " 3:Considerable ":
        danger.style.background = "orange";
        break;
      case " 2:Moderate ":
        danger.style.background = "yellow";
        break;
      case " 1:Low ":
        danger.style.background = "green";
        break;
      default:
        danger.style.background = "white";
    }
  });
});
```

If you've stuck through this far, all of these functions are called upon a GET request to the page, and sent to the render template where it gets tied together in`forecasts.html` page, giving us the final result!!!

``` html
{# forecasts.html #}
<!--Inherit from base template-->
{%extends 'base.html'%}
<!--Body-->
{%block content%}
    <h1><u> {{header}} </u></h1>
    <!--Google map embed-->
    <div class="map">
        <iframe width="100%" height="500" 
        frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
        src="{{ map_coordinates | safe }}"></iframe>
    </div>
    <!--Weather forecast section-->
    <div class = "weather">
        <div class ="weathergraph">
            <h2>Weather Graphs</h2>
            <!--Hide/Show buttons-->
            <div class= "button-block">
                <button class="pure-button" onclick="toggle_HRDPS();toggle_NAM();">Toggle 48H/3.5D Forecasts</button>   
                <!--Hide/Show buttons <button class="pure-button" onclick="show_historical()">Hide/Show NAM</button> -->
            </div>
            <div class="pure-g">
                <!--Forecast Graph-->
                <div class="pure-u-1">
                    <div class="l-box" id="48H" align="center">
                        <h3>48H Forecast (GEM-LAM, 2.5km res)</h3>
                        {{HRDPS_plot | safe}}
                        <p>Model elevation: {{HRDPS_elevation}}</p>
                    </div>
                    <div class="l-box" id="72H" align="center" style="display:none;">
                        <h3>3.5 Day Forecast (NAM, 12km res)</h3>
                        {{NAM_plot | safe}}
                        <p>Model elevation: {{NAM_elevation}}</p>
                </div>
            </div>
        </div>
        <div class="weather_summary">
            {{summary[3] | safe}}
        </div>
    </div>
    <!--Avy forecast section-->
    <div class = "avalanche">
        <div class ="avytitle">
            <h2> Avalanche Forecast</h2>
            <p>{{date_issued}}</p>
        </div>
        <!--Danger Ratings Forecast-->
        <div class="dangerratings">
            <h3>Danger Ratings:</h3>
            <div class="pure-g">
            <!--Day1-->
                <div class="pure-u-1 pure-u-md-1-3">
                    {{avy_danger[0][0] | safe}}
                    <table class="pure-table pure-table-bordered" id="day1">
                    {% for key, value in avy_danger[1][0].items() %}
                        <tr>
                            <td class="elev"> {{key}} </td>
                            <td class="danger"> {{value}} </td>
                        </tr>
                    {% endfor %}
                    </table>
                </div>
            <!--Day2-->
                <div class="pure-u-1 pure-u-md-1-3">
                    {{avy_danger[0][1] | safe}}
                    <table class="pure-table pure-table-bordered" id="day2">
                    {% for key, value in avy_danger[1][1].items() %}
                        <tr>
                            <td class="elev"> {{key}} </td>
                            <td class="danger"> {{value}} </td>
                        </tr>
                    {% endfor %}
                    </table>
                </div>
            <!--Day3-->
                <div class="pure-u-1 pure-u-md-1-3">
                    {{avy_danger[0][2] | safe}}
                    <table class="pure-table pure-table-bordered" id="day3">
                    {% for key, value in avy_danger[1][2].items() %}
                        <tr>
                            <td class="elev"> {{key}} </td>
                            <td class="danger"> {{value}} </td>
                        </tr>
                    {% endfor %}
                    </table>
                </div>
            </div><br>
        </div>
        <!--Problems-->
        <h3>Problems:</h3>
        {% for problem in avy_problems %}
            <div class ="avyproblem">
                {{problem | safe}}
            </div>
        {% endfor %}
        <!--Confidence-->
        <div class="confidence">
            <p><b>Confidence: </b> {{confidence}}</p>
        </div>
        <!--Highlights-->
        <div class="highlights">
            {{summary[0] | safe}}
        </div>
        <!--Weather / Snowpack Summary-->
        <div class="pure-g">
            <div class="pure-u-1 pure-u-md-1-2">
                <div class="avy_summary">
                    {{summary[1] | safe}}
                </div>
            </div>
            <div class="pure-u-1 pure-u-md-1-2">
                <div class="snow_summary">
                    {{summary[2] | safe}}
                </div>
            </div>
        </div>
    </div>
    <br>
    <!--Return Home-->
    <a href="{{ url_for('index') }}"><button class="pure-button"> Return Home </button></a>
{%endblock%}
<!--JS block-->
{%block javascript%}
<script type="text/javascript" src = "{{ url_for('static', filename='tablecolor.js') }}"></script>
<script type="text/javascript" src = "{{ url_for('static', filename='graphs.js') }}"></script>
{%endblock%}
```

These was easily my longest post I've made so thanks for making it through. Realistically, this project is also likely what got me my first job in the industry so I'm double stoked on the process and how the final result turned out. I've already been using it for pre-season and I love how it ties everything together, no more bookmark folders with 30 different area forecasts and flipping between sites. I'd love to add historical data in the future but at least its completely functional in its current scope. If anyone ends up using this for beta and planning, definitely let me know, I'll be super stoked! On that note, if you would like an area added please let me know and I'll be more than happy to do that for you. As always, the source code can be found [here](https://github.com/willzittlau/ski-forecast).

&#10052;&#10052;&#10052; BRING ON WINTER &#10052;&#10052;&#10052;