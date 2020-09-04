<template>
<div class="mdpage">
  <nuxt-content :document="mdContent" />
</div>
</template>

<script>
export default {
  components: {},
  async asyncData({ $content }) {
    const mdContent = await $content('pages/about').fetch();
    return { mdContent };
  }
}
</script>