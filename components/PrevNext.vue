<template>
  <div class="columns is-mobile">
    <div class="column is-one-quarter"></div>
    <div class="column is-one-quarter">
      <div class="postdir">
        <h2>Next Post:</h2>
        <NuxtLink
          v-if="prev"
          :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        >{{ prev.title }}</NuxtLink>
        <span v-else>&nbsp;</span>
      </div>
    </div>
    <div class="column is-one-quarter">
      <div class="postdir">
        <h2>Previous Post:</h2>
        <NuxtLink
          v-if="next"
          :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        >{{ next.title }}</NuxtLink>
        <span v-else>&nbsp;</span>
      </div>
    </div>
    <div class="column is-one-quarter"></div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
};
</script>

<style scoped>
.postdir {
  display: block;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
}
a {
  color: black;
}
a:hover {
  text-decoration: underline;
}
h2 {
  font-weight: bold;
  color: black;
}
</style>