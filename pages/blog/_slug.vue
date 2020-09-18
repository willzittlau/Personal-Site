<template>
  <div>
    <div class="header-block">
      <div class="project-header">
        <h1 class="project-title">{{article.title}}</h1>
      </div>
      <div class="project-info">
        <div class="update-container">
          <span class="label">Last updated:</span>
          {{ formatDate(article.updatedAt) }}
        </div>
        <div class="time-container">
          <span class="label">Time:</span>
          {{article.readingTime}}
        </div>
        <div class="tags-container">
          <div class="categories">
            <span class="label">Tags:</span>
            <span class="category" v-for="tag of article.tags" :key="tag.id">
              <NuxtLink :to="'/tags/' + tag">{{ tag }}&nbsp;</NuxtLink>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="blogpost">
      <nuxt-content :document="article" />
    </div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <div class="comments">
          <Disqus />
        </div>
      </div>
      <div class="column"></div>
    </div>
    <PrevNext :prev="prev" :next="next" />
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
  async asyncData({ $content, error, params }) {
    try {
      const article = await $content("articles", params.slug).fetch();
      const [prev, next] = await $content("articles")
        .only(["title", "slug"])
        .sortBy("createdAt", "desc")
        .surround(params.slug)
        .fetch();
      return { article, prev, next };
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
.comments{
  margin-top: 4rem;
}
.header-block {
  margin: 0px 10vw 0px 10vw;
}
.blogpost {
  margin: 3vw 10vw 0px 10vw;
  min-height: 100vh;
  display: flex;
}
.label {
  margin: 0px;
}
.category a {
  color: rgb(75, 75, 75);
}
.project-header {
  padding: 10vh 0 2rem 0;
}
.project-title {
  font-size: 3rem;
  padding: 0;
  font-weight: 650;
}
.project-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.project-info > div {
  margin-right: 4rem;
}
.project-info > div:last-of-type {
  margin: 0;
}
.category:after {
  content: ", ";
}
.category:last-of-type:after {
  content: "";
}
</style>