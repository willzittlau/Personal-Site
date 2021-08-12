<template>
  <div>
    <Hero />
    <div class="journal">
      <h1>Featured</h1>
      <hr />
    </div>
    <div class="projects">
      <div class="project" v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img :src="article.img" :alt="article.alt" class="thumbnail" />
          <h3 class="project-title">{{ article.title }}</h3>
          <div class="categories">
            <span class="category" v-for="tag of article.tags" :key="tag.id">{{tag}}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="journal">
      <h1>Recent Posts</h1>
      <hr />
      <ul>
        <li v-for="recent of recents" :key="recent.slug">
          <NuxtLink class="journal-post" :to="{ name: 'blog-slug', params: { slug: recent.slug } }">
            <div>
              <h2 class="journal-title">{{ recent.title }}</h2>
              <p class="journal-excerpt">{{ recent.description }}</p>
              <span class="journal-excerpt">
                {{ formatDate(recent.createdAt) }} &bull;
                {{ recent.readingTime }}
              </span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <SocialFeed />
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
    const recents = await $content("articles", { deep: true })
      .limit(3)
      .sortBy("createdAt", "desc")
      .fetch();
    return {
      articles,
      recents,
    };
  },
};
</script>

<style scoped>
hr {
  width: 30%;
}
ul {
  width: 100%;
}
.journal {
  max-width: 100vw;
  min-width: 75vw;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
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
  font-size: 1.5rem;
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
h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
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
  margin: 1rem 0 0.5rem 0;
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