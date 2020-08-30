<template>
<!-- Bulma navbar -->
  <nav class="navbar is-white">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <!--Logo / home ref -->
    <div class="navbar-brand">
      <a class="navbar-item" id="logo" href="/">
        <img src="~/static/400x400-logo.png" />
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
      <div class="navbar-end">
        <a class="navbar-item" href="/about">About</a>
        <a class="navbar-item" href="#">Projects</a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="###">Blog</a>
          <div class="navbar-dropdown is-boxed is-right">
            <a class="navbar-item" href="#">Skiing</a>
            <a class="navbar-item" href="#">Biking</a>
            <a class="navbar-item" href="#">Running</a>
            <a class="navbar-item" href="#">Climbing</a>
            <a class="navbar-item" href="#">Hiking</a>
          </div>
        </div>
        <a class="navbar-item" href="#">Contact</a>
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
<style>
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