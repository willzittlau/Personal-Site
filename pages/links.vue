<template>
  <body>
    <img
      id="userPhoto"
      src="https://willzittlau.com/favicon.png"
      alt="Animated GIF image of Clyde D'Souza"
    />
    <div id="bio">
      <h2>Will Zittlau</h2>
      <span class="location">
        <fa :icon="['fas', 'map-marker-alt']" />
        BC, Canada
      </span>
      <br />
      <br />
      <h6>Exploring & sharing the human experience.</h6>
    </div>
    <div id="links">
      <a class="link" href="mailto:contact@willzittlau.com" target="_blank">
        <img src="/assets/email.png" alt="email" width="40" height="40" />
        Email Enquiries
      </a>
      <a
        class="link"
        href="https://www.instagram.com/willzittlau/"
        target="_blank"
      >
        <img src="/assets/instagram.png" alt="instagram" width="40" height="40" />
        Instagram
      </a>
      <a class="link" href="https://tiktok.com/@willzittlau" target="_blank">
        <img
          src="/assets/tiktok.png"
          alt="tiktok"
          width="40"
          height="40"
        />TikTok</a
      >
      <a
        class="link"
        href="https://www.strava.com/athletes/8709142"
        target="_blank"
      >
        <img
          src="/assets/strava.png"
          alt="strava"
          width="40"
          height="40"
        />Strava</a
      >
      <a class="link" href="https://willzittlau.com/" target="_blank">
        <img src="/assets/pen.png" alt="blog" width="40" height="40" />Personal Blog</a
      >
      <a class="link" href="https://getaccountable.ca" target="_blank"
        ><img
          src="/assets/accountable.png"
          alt="accountable"
          width="40"
          height="40"
        />Mobile app I'm building</a
      >
      <a class="link" href="https://www.paypal.me/willzittlau" target="_blank"
        ><img src="/assets/coffee.png" alt="coffee" width="40" height="40" />Buy
        me a coffee</a
      >
    </div>
    <div id="socialLinks">
      <span>
        <a href="https://tiktok.com/@willzittlau">
          <fa
            :icon="['fab', 'tiktok']"
            style="font-size: 35px"
          />&nbsp;&nbsp;&nbsp;
        </a>
      </span>
      <span>
        <a href="https://www.instagram.com/willzittlau/">
          <fa
            :icon="['fab', 'instagram']"
            style="font-size: 35px"
          />&nbsp;&nbsp;&nbsp;
        </a>
      </span>
      <span>
        <a href="https://www.strava.com/athletes/8709142">
          <fa
            :icon="['fab', 'strava']"
            style="font-size: 35px"
          />&nbsp;&nbsp;&nbsp;
        </a>
      </span>
      <span>
        <a href="https://github.com/willzittlau">
          <fa
            :icon="['fab', 'github']"
            style="font-size: 35px"
          />&nbsp;&nbsp;&nbsp;
        </a>
      </span>
      <span>
        <a href="https://www.linkedin.com/in/will-zittlau/">
          <fa
            :icon="['fab', 'linkedin']"
            style="font-size: 35px"
          />&nbsp;&nbsp;&nbsp;
        </a>
      </span>
      <span>
        <a href="mailto:contact@willzittlau.com">
          <fa
            :icon="['fas', 'envelope']"
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
export default {
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
  --accentColor: #3e3e3e;
  --accentHoverColor: #3e3e3e;
  --font: "Roboto", sans-serif;
}
body {
  height: 100vh;
  padding: 8px;
  background-color: var(--bgColor);
  font-family: var(--font);
}
#userPhoto {
  width: 120px;
  height: 120px;
  display: block;
  margin: 35px auto 20px;
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
}
footer a {
  font-size: medium;
  color: var(--accentColor);
  text-decoration: none;
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99);
}
footer a:hover {
  color: var(--accentHoverColor);
  border-bottom: 1px dashed var(--accentHoverColor);
  padding-bottom: 2px;
}
</style>