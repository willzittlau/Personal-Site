<template>
  <div class="journal">
    <h1>Press</h1>
    <hr />
    <ul>
      <li>
        <a
          class="journal-post"
          href="https://www.iheartradio.ca/am-1150/audio-video/will-zittlau-biking-across-canada-1.15835280?mode=Article&fbclid=IwAR2y9L86Rz8CblG3GTGWQ7If6apNJ2tVhKAx7Znx9rTknJjhy5lSHf45GpU"
          target="_blank"
        >
          <div>
            <h2 class="journal-title">The Early Edition - AM1150 News</h2>
            <p class="journal-excerpt">Radio podcast - Bike across Canada</p>
          </div>
        </a>
      </li>
      <li>
        <a
          class="journal-post"
          href="https://www.iheartradio.ca/virginradio/vancouver/trending/ubc-grad-pedalling-in-the-path-of-his-father-by-biking-across-canada-1.15394560?fbclid=IwAR1-cBTDhBDd_MoWUlsJo-uF3TdBKydTi6KdrYar-2cRLFrJ5MvHNPlNtTw"
          target="_blank"
        >
          <div>
            <h2 class="journal-title">Virgin Radio Vancouver</h2>
            <p class="journal-excerpt">
              Phone Interview / Article - Bike across Canada
            </p>
          </div>
        </a>
      </li>
      <li>
        <a
          class="journal-post"
          href="https://www.660citynews.com/video/2021/06/20/cycling-across-canada-to-honour-a-fathers-legacy/?fbclid=IwAR2PNqq-Q0cgOT463l0J2KN6MzugXecXS6yhunYjh-b2UGcq5flP0U6xdiA"
          target="_blank"
        >
          <div>
            <h2 class="journal-title">City News Calgary</h2>
            <p class="journal-excerpt">
              Zoom Interview / Video - Bike across Canada
            </p>
          </div>
        </a>
      </li>
      <li>
        <a
          class="journal-post"
          href="https://www.castanet.net/news/Kelowna/341843/Kelowna-man-cycles-across-Canada-to-recreate-his-father-s-journey-decades-earlier?fbclid=IwAR0gkcJiXbr3yfDK0nQWifOKI6NpsRwg_fdJkPIiLak-X5jqMrqCrPwCJQk"
          target="_blank"
        >
          <div>
            <h2 class="journal-title">Castanet Kelowna</h2>
            <p class="journal-excerpt">
              In-Person Interview - Bike across Canada
            </p>
          </div>
        </a>
      </li>
      <li>
        <a
          class="journal-post"
          href="https://www.pressreader.com/canada/the-daily-courier/20210804/281788517108396?fbclid=IwAR2HcRdzjHwyX5egEp6UmW6-zd_oLDxpMDh9gUh8PGrUeAPutXAHj_smvy8"
          target="_blank"
        >
          <div>
            <h2 class="journal-title">The Daily Courier Kelowna</h2>
            <p class="journal-excerpt">
              Phone Interview / Article - Bike across Canada
            </p>
          </div>
        </a>
      </li>
      <li>
        <a
          class="journal-post"
          href="https://www.revelstokereview.com/community/avid-skier-learns-coding-to-create-text-messaging-service-for-rogers-pass-backcountry-users/"
          target="_blank"
        >
          <div>
            <h2 class="journal-title">Revelstoke Review</h2>
            <p class="journal-excerpt">
              Phone Interview / Article - Rogers Pass SMS service
            </p>
          </div>
        </a>
      </li>
    </ul>
    <br /><br />
    <h1>Brands I've worked with</h1>
    <hr />
    <div class="row">
      <div class="column">
        <img src="/assets/specialized.png" alt="Specialized Canada"/>
      </div>
      <div class="column">
        <img src="/assets/freshair.png" alt="Fresh Air" />
      </div>
      <div class="column">
        <img src="/assets/okbikeski.png" alt="Okanagan Bike & Ski" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Will Zittlau - Media",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Will Zittlau - Media",
      },
    ],
  },
};
</script>

<style scoped>
.column {
  float: left;
  width: 100%;
  padding: 5px;
}

/* Clear floats after image containers */
.row::after {
  content: "";
  clear: both;
  display: table;
}
hr {
  width: 30%;
}
.journal {
  max-width: 100vw;
  min-width: 75vw;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
}
.journal img {
  height: 100px;
}
h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
}
ul {
  width: 100%;
}
.journal-post {
  display: block;
  padding: 1rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
}
.journal-post > * {
  transition: transform 0.5s ease;
}
.journal-post:hover {
  background-color: #f8f8f8;
}
.journal-post:hover > * {
  transform: translateX(3rem);
}
.journal-post h1,
.journal-post h2 {
  margin: 0;
  padding: 0;
}
.journal-title {
  font-size: 1.5rem;
  color: rgb(50, 50, 50);
  font-weight: 600;
}
.journal-excerpt {
  color: black;
}
@media (min-width: 560px) {
  .journal-post {
    padding: 1rem 0;
  }
  .container.journal {
    min-width: 100vw;
  }
}
@media (min-width: 860px) {
  .journal-post {
    padding: 1rem 0;
  }
  .container.journal {
    min-width: 100vw;
  }
  .column {
    width: 33.33%;
  }
  .journal img {
  height: 200px;
}
}
</style>