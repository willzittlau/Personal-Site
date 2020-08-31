<template>
  <div class="error-500">
    <h1>500 - Internal Error</h1>
    <p>You managed to break a static site!</p>
    <p>
      Return <span>
        <div class="buttons are-small" style="display: inline;">
          <button class="button is-outlined">
            <NuxtLink to="/">Home</NuxtLink>
          </button>
        </div>
      </span> or reload the browser to fix.
    </p>
  </div>
</template>

<script>
export default {
  name: "error-500",
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