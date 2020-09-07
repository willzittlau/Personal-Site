<template>
  <div class="container journal">
    <h1>Tags: {{ $route.params.slug }}</h1>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink class="journal-post" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <div>
            <h2 class="journal-title">{{ article.title }}</h2>
            <p class="journal-excerpt">{{ article.description }}</p>
            <span class="journal-excerpt">
              {{ formatDate(article.createdAt) }} &bull;
              {{ article.readingTime }}
            </span>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  async asyncData({ params, error, $content }) {
    try {
      const articles = await $content("articles", { deep: true })
        .where({ tags: { $contains: params.slug } })
        .sortBy("createdAt", "desc")
        .fetch();
      return { articles };
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
  max-width: 100vw;
  min-width: 75vw;
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
  transform: translateX(3rem);
}
.journal-post h1,
.journal-post h2 {
  margin: 0;
  padding: 0;
}
.journal-title {
  font-size: 2rem;
  color: rgb(50, 50, 50);
  font-weight: 600;
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