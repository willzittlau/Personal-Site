<template>
  <!-- Bulma navbar -->
  <nav class="navbar is-white">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <!--Logo / home ref -->
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" id="logo" to="/">
        <img src="~assets/400x400-logo.png" alt="Will Zittlau logo" />
      </NuxtLink>
      <!--Hamburger for mobile, vue binding for onclick-->
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        @click="isOpen = !isOpen"
        v-bind:class="{ 'is-active': isOpen }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <!-- Other links -->
    <div class="navbar-menu" v-bind:class="{ 'is-active': isOpen }">
      <div class="navbar-start">
        <Search class="navbar-item" />
      </div>
      <div
        class="navbar-end"
        id="mobile-list"
        @click="isOpen = !isOpen"
        v-bind:class="{ 'is-active': isOpen }"
      >
        <NuxtLink class="navbar-item underline" to="/about">About</NuxtLink>
        <div class="navbar-item has-dropdown is-hoverable">
          <NuxtLink class="navbar-link underline" to="/blog">Blog</NuxtLink>
          <div class="navbar-dropdown is-boxed is-right">
            <NuxtLink class="navbar-item underline" to="/tags/skiing">Skiing</NuxtLink>
            <NuxtLink class="navbar-item underline" to="/tags/biking">Biking</NuxtLink>
            <NuxtLink class="navbar-item underline" to="/tags/running">Running</NuxtLink>
            <NuxtLink class="navbar-item underline" to="/tags/climbing">Climbing</NuxtLink>
            <NuxtLink class="navbar-item underline" to="/tags/hiking">Hiking</NuxtLink>
            <NuxtLink class="navbar-item underline" to="/tags/projects">Projects</NuxtLink>
          </div>
        </div>
        <NuxtLink class="navbar-item underline" to="/contact">Contact</NuxtLink>
        <NuxtLink class="navbar-item underline" to="/media">Media</NuxtLink>
        <NuxtLink class="navbar-item underline" to="press">Press</NuxtLink>
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

.navbar-link:not(.is-arrowless):after{
  border-color: black;
}
</style>