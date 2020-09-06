<template>
  <div>
    <Hero />
    <h1>Featured</h1>
    <div class="projects">
      <div class="project" v-for="article of articles" :key="article.slug">
        <NuxtLink class="journal-post" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <img
                :src="article.img"
                :alt="article.alt"
                class="thumbnail"
            />
          <h3 class="project-title">{{ article.title }}</h3>
          <div class="categories">
                <span class="category" v-for="tag of article.tags" :key="tag.id"> {{tag}}</span>
            </div>
        </NuxtLink>
      </div>
    </div>
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
  async asyncData({ $content }) {
    const articles = await $content("articles", { deep: true })
      .where({ featured: { $contains: "yes" } })
      .sortBy("updatedAt", "desc")
      .fetch();
    return {
      articles,
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  padding-bottom: 1rem;
}
.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
}
.project {
  grid-column: auto / span 2;
  text-align: center;
}
.project-link {
  text-decoration: none;
}
.thumbnail {
  height: 560px;
  object-fit: cover;
  transition: all 0.15s ease;
  box-shadow: 0 0 40px -20px rgba(0, 0, 0, 0.25);
}
.project-title {
  font-size: 1.5rem !important;
  font-weight: 500;
  color: rgb(85, 85, 85);
  margin: 1rem 0 1rem 0;
}
.categories {
  font-size: 0.8rem;
  color: var(--color-contrast-1);
}
.category {
  margin-right: 0.8rem;
  color: black;
}
.category:last-of-type {
  margin: 0;
}
.project:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.25);
}
@media (min-width: 920px) {
  .project {
    grid-column: auto / span 1;
  }
  .project:nth-child(3n + 1) {
    grid-column: auto / span 2;
  }
}
</style>