<template>
  <footer class="site-footer">
    <div class="columns is-gapless is-centered is-vcentered">
      <div class="column is-one-quarter has-text-centered">
        <span>
          <a href="https://www.strava.com/athletes/8709142">
            <fa :icon="['fab', 'strava']" style="font-size: 30px" />&nbsp;&nbsp;&nbsp;
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/willzittlau/">
            <fa :icon="['fab', 'instagram']" style="font-size: 30px" />&nbsp;&nbsp;&nbsp;
          </a>
        </span>
        <span>
          <a href="https://github.com/willzittlau">
            <fa :icon="['fab', 'github']" style="font-size: 30px" />&nbsp;&nbsp;&nbsp;
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/will-zittlau/">
            <fa :icon="['fab', 'linkedin']" style="font-size: 30px" />&nbsp;&nbsp;&nbsp;
          </a>
        </span>
      </div>
      <br />
      <div class="column is-half has-text-centered">
        &copy; {{ new Date().getFullYear() }} Will Zittlau
        <br />
        <span>
          <a href="https://nuxtjs.org/">
            <img width="100" height="18" src="~/static/built-with-nuxt-light.svg" />
          </a>
        </span>
        and made with
        <span style="color: #e25555;">&#9829;</span>
      </div>
      <br />
      <div class="column has-text-centered"></div>
      <div class="column has-text-centered">
        <a href="https://www.netlify.com">
          <img
            src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
            alt="Deploys by Netlify"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
a {
  color: rgb(85, 85, 85);
}
footer {
  background: #eee;
  padding: 15px 15px;
  text-align: center;
  transition: 0.5s ease all;
}
</style>