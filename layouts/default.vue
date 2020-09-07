<template>
  <div id="site">
    <Header />
    <Nuxt />
    <div id="wrapper"></div>
    <Back2Top />
    <Footer />
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

/* Next two are for sticky footer */
#site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#wrapper {
  flex: 1;
}
</style>
