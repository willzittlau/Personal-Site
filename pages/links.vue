<template>
  <body>
    <img
      id="userPhoto"
      src="https://willzittlau.com/favicon.png"
      alt="Will Zittlau"
    />
    <div id="bio">
      <h2>Will Zittlau</h2>
      <span class="location">
        <fa :icon="['fas', 'map-marker-alt']" />
        BC, Canada
      </span>
      <br />
      <br />
      <h6>adventure & endurance athlete</h6>
      <h6>🏃‍♂️&nbsp;🚴‍♂️&nbsp;🏔️⁣</h6>
    </div>
    <div id="links">
      <a
        v-for="data in $options.linkData.main"
        :key="data.id"
        class="link"
        target="_blank"
        :href="data.url"
      >
        <img
          :src="'/assets/' + data.img + '.png'"
          :alt="data.img"
          width="40"
          height="40"
        />
        {{ data.title }}
      </a>
    </div>
    <div id="socialLinks">
      <span v-for="data in $options.linkData.icon" :key="data.id">
        <a :href="data.url">
          <fa
            :icon="[data.type, data.name]"
            style="font-size: 35px"
          />&nbsp;&nbsp;&nbsp;
        </a>
      </span>
    </div>
    <footer>
      <a href="https://willzittlau.com" target="_blank">www.willzittlau.com</a>
    </footer>
  </body>
</template>

<script>
import linkData from "../content/links.json";
export default {
  linkData: linkData,
  layout: "links",
  head: {
    title: "Will Zittlau - Links",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Will Zittlau - Links",
      },
    ],
  },
};
</script>

<style scoped>
* {
  --bgColor: white;
  --accentColor: #2f2f2f;
  --accentHoverColor: #2f2f2f;
  --font: "Roboto", sans-serif;
}
body {
  background: linear-gradient(
    0deg,
    rgba(210, 210, 210, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  padding: 8px;
  background-color: var(--bgColor);
  font-family: var(--font);
}
#userPhoto {
  width: 120px;
  height: 120px;
  display: block;
  margin: 10px auto 20px;
  border: 3px solid black;
  border-radius: 50%;
}
.location svg {
  margin-right: 4px;
}
#bio {
  display: block;
  width: 100%;
  text-align: center;
  color: #000000de;
}
#bio h2 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.25;
}

#socialLinks,
#links {
  width: auto;
  display: block;
  margin: 27px auto;
}

#socialLinks {
  max-width: 360px;
  font-size: 24px;
  text-align: center;
  margin-bottom: 18px;
  font-weight: 100;
}
#socialLinks a {
  color: var(--accentColor);
  transition: all 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99);
  margin-right: 18px;
}
#socialLinks a:last-child {
  margin-right: 0;
}
#socialLinks a:hover {
  color: var(--accentHoverColor);
}

#links {
  max-width: 600px;
}
.link {
  display: block;
  background-color: var(--accentColor);
  color: var(--bgColor);
  text-align: center;
  margin-bottom: 16px;
  padding: 17px;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99);
  border: solid var(--accentColor) 2px;
  border-radius: 100px;
}
.link img {
  display: inline;
  margin: -9px;
  float: left;
}
.link:hover {
  background-color: var(--bgColor);
  color: var(--accentColor);
}
h6 {
  font-size: 18px;
}
footer {
  text-align: center;
  padding-bottom: 24px;
}
footer a {
  font-size: medium;
  color: #000;
  text-decoration: none;
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99);
}
footer a:hover {
  color: #000;
  border-bottom: 1px dashed var(--accentHoverColor);
  padding-bottom: 2px;
}
</style>