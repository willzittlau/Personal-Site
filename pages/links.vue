<template>
  <div class="journal">
    <h1>Links</h1>
    <hr />
  </div>
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
h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
}
</style>