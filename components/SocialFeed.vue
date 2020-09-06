<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-four-fifths">
      <h1>Social Feed</h1>
      <iframe
        src="//lightwidget.com/widgets/be81feae99b65198bc97a51d2a396594.html"
        scrolling="no"
        allowtransparency="true"
        class="lightwidget-widget"
        style="width:100%;border:0;overflow:hidden;"
      ></iframe>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
// };
export default {
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "https://cdn.lightwidget.com/widgets/lightwidget.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 4rem;
  margin-bottom: 0.5rem;
}
.columns {
  margin-bottom: 0.25rem;
}
</style>