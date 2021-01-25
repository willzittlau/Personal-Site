---
title: "How to make an Investment Dashboard in Notion"
createdAt: "2021-01-24"
description: "TradingView widgets + Notion = 🚀🚀🚀"
img: "https://i.imgur.com/ScsMofC.png"
alt: "Notion investment dashboard"
featured: "no"
tags:
  - coding
  - notion
  - javascript
  - projects
---

**A live demo of this dashboard can be found here: https://www.notion.so/willzittlau/Investment-Dashboard-Demo-f22b54702f1a45a6865636b12241b1b9**

I recently started using Notion for my personal Wiki, which has led me to exploring embeddable widgets as they're just super simple static pages rendered into Notion. This summer I also started investing, which is what eventually led to this project. The idea started after I found this (https://github.com/saman/notion-quote) which renders a random quote every time you load the page. I love this for my dashboard when I log in every morning. [TradingView](https://www.tradingview.com/) is a free website that lets you create embeddable widgets with auto generated code. I used the markup from the quotes project to create the light/dark themes, and then combined the widgets from [TradingView](https://www.tradingview.com/) to create fully functioning investment widgets for my Notion.

This post will run you through a quick tutorial to let you render your own widgets, (photo below) so lets get started! *Note: Basic coding experience required, as you have to self-host the widget*!

![Imgur](https://i.imgur.com/B7ogaFg.png)

First off, head to https://www.tradingview.com/widget/ and pick the widget you're wanting to make. This example will be using the "Market Data Widget". Click "Get Widget" and start playing around with the settings. I just delete all of the defaults and start from a blank template. As you play around with the settings, you'll notice the embed code on the left changes. This is the script tag that will load our widget. Pick whatever stocks you want to add, just make sure to select `"Transparent background"` in order for our themes to work. Keep the page open/copy the embed code for the next step.

![Imgur](https://i.imgur.com/vKKS8AG.png)

Next, go to Github and fork [this project](https://github.com/willzittlau/notion-stockwidget) (shameless plug). Pull the code, open your favorite text-editor and open `index.html`. The only files that we care about are `index.html`, and `data.json` as the CSS and js just generate the light/dark buttons and toggle the theme. In the html, there will be a comment `<!-- TradingView Widget BEGIN -->` and then some code until another `<!-- TradingView Widget BEGIN -->` comment. Select the entire block until the first`<!-- TradingView Widget END -->` and replace it with the embed code that you created. Do this with the second code block as well.  **This is the most important step:** Directly under the first commend, add an `id="light"` to the very first div. This will look like `<div class="tradingview-widget-container" id="light">`.  Now, scroll down just before before the `<!-- TradingView Widget END -->` and **MAKE SURE THAT YOU CHANGE THE KEY-VALUE PAIR TO** `"colorTheme": "light"`. Great! Halfway there. Repeat the process with the second code block, but this time set `id="dark"` and `"colorTheme": "dark`. If you can, run the script on localhost to see how the widget looks. the light/dark button will be rendered in the bottom right corner of the screen.

```html
// index.html snippet
	}
        ],
          "showSymbolLogo": true,
          "colorTheme": "dark", // Make sure colorTheme matches id
          "isTransparent": true,
          "locale": "en"
        }
      </script>
    </div>
    <!-- TradingView Widget END -->
    <!-- TradingView Widget BEGIN -->
    <div class="tradingview-widget-container" id="light"> //Add "id" here!
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright">
        <a href="https://www.tradingview.com" rel="noopener" target="_blank"
          ><span class="blue-text">Market Data</span></a
        >
        by TradingView
      </div>
      <script
        type="text/javascript"
        src="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"
        async>
      {
        "width": "100%",
        "height": "600",
        "symbolsGroups": [
        {
          "name": "Stocks",
          "symbols": [
            {
              "name": "NASDAQ:AMZN",
              "displayName": "AMZN - Amazon"
            },
```

If everything looks good, awesome! your widget is done. What about the `data.json`? If you noticed, the embed code generated is just a couple divs + a script tag with some json data as payload. I just copy paste this json section to `data.json` so I can make quick changes in my text editor. The format is super simple, example data looks like:

```json
// data.json
{
  "width": "100%", //sets width
  "height": "600", //sets height
  "symbolsGroups": [
    {
      "name": "Stocks", //new section inside widget
      "symbols": [
        {
          "name": "NASDAQ:AMZN",
          "displayName": "AMZN - Amazon" // specific stock
        },
        {
          "name": "TSX:BB",
          "displayName": "BB - Blackberry"
        },
        {
          "name": "NYSE:GME",
          "displayName": "GME - Gamestop"
        }
      ]
    }
  ], //shows stock info
  "showSymbolLogo": true,
  "colorTheme": "dark", //color theme
  "isTransparent": true, //transparent bg
  "locale": "en" //language
}
```

Commit the changes and push your code. Awesome. Your widget is looking good, now to host it. I recommend [Netlify](https://netlify.com/) as its free, has one click deploys from git, and has been awesome to use so far for all of my static sites. Click new site from Github, choose the repo, and deploy! Now copy paste the generated URL into your Notion as an embed and your done! 👏

Thanks for reading this far! The widget created in this tutorial is here: https://boring-bartik-a3d13c.netlify.app/. For a TickerTape widget, an example can be found here: https://upbeat-snyder-ee9dcf.netlify.app/. Market Movers (US and TSX) can be found here: https://app.netlify.com/sites/vigilant-hodgkin-b84e3d/overview, https://app.netlify.com/sites/quizzical-brown-c7fc74/overview.

As always, all of these projects live on my [Github](https://github.com/willzittlau). Hopefully you find this helpful!

![Imgur](https://i.imgur.com/ScsMofC.png)