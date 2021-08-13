<template>
  <div class="hero">
    <h1 class="hero-title">Hi, my name's Will.</h1>
      <vue-typed-js
        :strings="['Adventurer', 'Athlete', 'Storyteller', 'Creative', 'Developer']"
        :loop="true"
        :typeSpeed="100"
        :backSpeed="30"
        :backDelay="800"
      >
        <h1 class="hero-secondary typing"></h1>
      </vue-typed-js>
    <h3 class="hero-tagline">Exploring and sharing the human experience.</h3>
  </div>
</template>

<script>
export default {};
</script>

<style>
.hero {
  text-align: center;
  width: 600px;
  max-width: 100%;
  margin: 0 auto;
  padding: 3rem 0 1rem 0;
}
.hero-title {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0 0 0.25rem 0;
}
.hero-title p,
.hero-subtitle p {
  margin: 0;
  padding: 0;
}
.hero-tagline {
  font-size: 1.15em;
  font-weight: 400;
  line-height: 1.68;
  opacity: 0.6;
  padding: 0;
  margin: 0;
}
.hero-secondary {
  font-size: 2em;
  font-weight: 500;
  padding: 0;
  margin: 0 0 0.5rem 0;
  opacity: 0.9;
}
.typed-cursor {
  font-size: 2rem;
  opacity: 1;
  -webkit-animation: blink 0.7s infinite;
  -moz-animation: blink 0.7s infinite;
  animation: blink 0.7s infinite;
  font-weight: 700;
  padding: 0;
  margin: 0 0 0.5rem 0;
    opacity: 0.9;
}
.typed-element {
  margin: auto;
}
</style>