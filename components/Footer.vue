<template>
  <footer class="site-footer">
    &copy; {{ new Date().getFullYear() }} Will Zittlau
    <br />
    <span>
      <a href="https://nuxtjs.org/">
        <img width="100" height="18" src="~/static/built-with-nuxt-light.svg" />
      </a>
    </span>
    and made with
    <span style="color: #e25555;">&#9829;</span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background: #eee;
  padding: 15px 15px;
  text-align: center;
  transition: 0.5s ease all;
}
</style>