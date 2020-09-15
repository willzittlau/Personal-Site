<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-four-fifths">
      <div class="center">
        <h1>Social Feed</h1>
        <hr />
      </div>
      <iframe
        src="https://cdn.lightwidget.com/widgets/be81feae99b65198bc97a51d2a396594.html"
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
.center {
  max-width: 100vw;
  min-width: 75vw;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
}
hr {
  width: 40%;
}
h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
}
.columns {
  margin-bottom: 0.25rem;
}
</style>