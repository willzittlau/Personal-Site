<template>
  <div>
    <Hero />
    <Featured />
    <SocialFeed />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 250);
    });
  },
};
</script>