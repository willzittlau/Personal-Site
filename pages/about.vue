<template>
  <div>
    <div class="journal">
      <h1>Who Am I?</h1>
      <hr />
    </div>
    <div class="mdpage">
      <nuxt-content :document="mdContent" />
    </div>
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
h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
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
</style>
</style>