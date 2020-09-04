<template>
  <div class="container journal">
    <h1>Tags: {{ $route.params.slug }}</h1>
    <ul>
      <li v-for="post of posts" :key="post.slug">
        <NuxtLink class="journal-post" :to="{ name: 'blog-slug', params: { slug: post.slug } }">
          <div>
            <h2 class="journal-title">{{ post.title }}</h2>
            <p class="journal-excerpt">{{ post.description }}</p>
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
  },
};
</script>

<style scoped>
ul {
  width: 100%;
}
.container.journal {
  width: 1000px;
}
.journal-hero {
  padding: 1rem 0;
  text-align: center;
  color: grey;
}
.journal-header {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
}
.journal-post {
  display: block;
  padding: 1rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
}
.journal-post > * {
  transition: transform 0.5s ease;
}
.journal-post:hover {
  background-color: #f8f8f8;
}
.journal-post:hover > * {
  transform: translateX(4rem);
}
.journal-post h1,
.journal-post h2 {
  margin: 0;
  padding: 0;
}
.journal-title {
  font-size: 2rem;
  color: black;
}
.journal-excerpt {
  color: black;
}
@media (min-width: 560px) {
  .journal-post {
    padding: 1rem 0;
  }
}
@media (min-width: 860px) {
  .journal-post {
    padding: 1rem 0;
  }
}
</style>