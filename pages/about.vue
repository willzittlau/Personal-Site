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
  head: {
    title: "Will Zittlau - About",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Will Zittlau - About me",
      },
    ],
  },
};
</script>

<style scoped>
.mdpage {
  margin: 0px 10vw 0px 10vw;
  display: flex;
}
</style>