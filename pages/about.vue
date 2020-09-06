<template>
  <div class="mdpage">
    <nuxt-content :document="mdContent" />
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData({ $content }) {
    const mdContent = await $content("pages/about").fetch();
    return { mdContent };
  },
};
</script>

<style scoped>
.mdpage {
  margin: 0px 10vw 0px 10vw;
  min-height: 100vh;
  display: flex;
}
</style>