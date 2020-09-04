<template>
  <div>
    <div class="container journal">
      <ul>
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink class="journal-post" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <img :src="article.img" />
            <div>
              <h2 class="journal-title">{{ article.title }}</h2>
              <p class="journal-excerpt">{{ article.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>

<style scoped>
.container.journal {
  max-width: 720px;
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
  color: var(--color-contrast-1);
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