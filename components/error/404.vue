<template>
  <div class="container">
    <br />
    <br />
    <h1>404 -This page doesn’t exist.</h1>
    <p>The link you clicked on may be broken or no longer exist.</p>
    <p>
      Return
      <span>
        <div class="buttons are-small" style="display: inline;">
          <button class="button is-outlined">
            <NuxtLink to="/">Home</NuxtLink>
          </button>
        </div>
      </span> or go to the last page you visited.
    </p>
  </div>
</template>

<script>
export default {
  name: "error-404",
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
a {
  color: rgb(0, 0, 0) !important;
}
</style>