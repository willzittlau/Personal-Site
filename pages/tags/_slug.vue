<template>
  <div class="container">
    <h1>Tags: {{ $route.params.slug }}</h1>
    <ul>
      <li v-for="post of posts" :key="post.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: post.slug } }">
          <img :src="post.img" />
          <div>
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ params, error, $content }) {
    try {
      const posts = await $content("articles", { deep: true })
        .where({ tags: { $contains: params.slug } })
        .fetch();
      return { posts };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Page could not be found",
      });
    }
  }
}
</script>