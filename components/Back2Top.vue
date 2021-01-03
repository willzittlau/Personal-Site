<template>
  <div class="columns is-mobile">
    <div class="column"></div>
    <div class="column is-narrow">
      <button class="button is-outlined" v-show="visible">
        <a @click="scrollTop" v-show="visible">
          <fa :icon="['fas', 'chevron-up']" style="font-size: 20px" />Top
        </a>
      </button>
    </div>
    <div class="column is-narrow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 12);
    },
    scrollListener: function (e) {
      this.visible = window.scrollY > 150;
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy: function () {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style scoped>
a {
  color: rgb(85, 85, 85) !important;
}
button:hover {
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.25);
  transform: scale(1.05);
}
</style>