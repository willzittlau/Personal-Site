<template>
<!-- Bulma navbar -->
  <nav class="navbar is-white">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <!--Logo / home ref -->
    <div class="navbar-brand">
      <a class="navbar-item" id="logo" href="/">
        <img src="~assets/400x400-logo.png" />
      </a>
    <!--Hamburger for mobile, vue binding for onclick-->
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        @click="isOpen = !isOpen"
        v-bind:class="{'is-active': isOpen}"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <!-- Other links -->
    <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
      <div class="navbar-start">
      <Search class="navbar-item"/>
    </div>
      <div class="navbar-end">
        <NuxtLink class="navbar-item" to="/about">About</NuxtLink>
        <NuxtLink class="navbar-item" to="/tags/projects">Projects</NuxtLink>
        <div class="navbar-item has-dropdown is-hoverable">
          <NuxtLink class="navbar-link" to="/blog">Blog</NuxtLink>
          <div class="navbar-dropdown is-boxed is-right">
            <NuxtLink class="navbar-item" to="/tags/skiing">Skiing</NuxtLink>
            <NuxtLink class="navbar-item" to="/tags/biking">Biking</NuxtLink>
            <NuxtLink class="navbar-item" to="/tags/running">Running</NuxtLink>
            <NuxtLink class="navbar-item" to="/tags/climbing">Climbing</NuxtLink>
            <NuxtLink class="navbar-item" to="/tags/hiking">Hiking</NuxtLink>
          </div>
        </div>
        <NuxtLink class="navbar-item" to="/contact">Contact</NuxtLink>
        <a class="navbar-item" href="/download/will-zittlau-cv.pdf" target="_blank">CV</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  </nav>
</template>

<!-- Vue binding script-->
<script>
export default {
  data: function () {
    return {
      isOpen: false,
    };
  },
};
</script>


<!-- Override Bulma defaults-->
<style scoped>
.navbar-burger span {
  width: 25px;
}

.navbar-burger {
  width: 100px;
  height: 100px;
}

.navbar-item img {
  max-height: 100px;
}

.navbar-item#logo:hover {
  background-color: white !important;
}
</style>