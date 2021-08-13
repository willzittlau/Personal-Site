<template>
  <footer class="site-footer">
    <div class="columns is-gapless is-centered is-vcentered">
      <div class="column is-one-quarter has-text-centered">
        <span v-for="data in $options.linkData.icon" :key="data.id">
          <a :href="data.url">
            <fa
              :icon="[data.type, data.name]"
              style="font-size: 32px"
            />&nbsp;&nbsp;&nbsp;
          </a>
        </span>
      </div>
      <br />
      <div class="column is-half has-text-centered">
        &copy; {{ new Date().getFullYear() }} Will Zittlau
        <br />
        <span>
          <a href="https://nuxtjs.org/">
            <img
              width="100"
              height="18"
              src="~assets/built-with-nuxt-light.svg"
              alt="Built with Nuxt"
            />
          </a>
        </span>
        and made with
        <span style="color: #e25555">&#9829;</span>
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
import linkData from "../content/links.json";
export default {
  linkData: linkData,
  name: "Footer",
};
</script>

<style scoped>
a {
  color: rgb(85, 85, 85);
}
footer {
  background: #eee;
  padding: 22px 15px;
  text-align: center;
  transition: 0.5s ease all;
}
</style>