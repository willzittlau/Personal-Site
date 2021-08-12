<template>
  <section id="masonry-container">
    <br />
    <vue-masonry-wall :items="items" :options="options" @append="append">
      <template v-slot:default="{ item }">
        <div class="Item">
          <a target="_blank" :href="item.url">
            <img :src="item.url" />
            <div class="Content">
              <h5 class="center">{{ item.title }}</h5>
            </div>
          </a>
        </div>
      </template>
    </vue-masonry-wall>
  </section>
</template>

<script>
import VueMasonryWall from "vue-masonry-wall";
import imgData from "../content/media.json";
export default {
  name: "Masonry",
  components: { VueMasonryWall },
  data() {
    return {
      options: {
        width: 500,
        height: 600,
        padding: {
          2: 8,
          default: 12,
        },
      },
      items: imgData,
    };
  },
};
</script>

<style scoped>
a {
  color: #505050;
}
#masonry-container {
  padding: 0 24px;
}
.Item {
  overflow: hidden;
  border-radius: 4px;
  width: 100%;
  background: #f5f5f5;
  border-radius: 4px;
}
.Content {
  padding: 20px;
}
img {
  width: 100%;
  height: 100%;
  line-height: 0;
  display: block;
  object-fit: cover;
}
.center {
  font-weight: 500;
  text-align: center;
}
</style>