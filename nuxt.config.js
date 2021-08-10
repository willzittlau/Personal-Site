export default {
  generate: {
    fallback: true
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "spa",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Will Zittlau",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Will Zittlau - Skiing, Climbing, Running, Backpacking, Biking & More."
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png"
      }
    ]
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-vs.css'
      }
    }
  },
  /*
   ** Global CSS
   */
  css: [{ src: "~assets/main.css", lang: "css" }],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {src: "~/plugins/disqus", mode: 'client'}
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-178094069-1'
    }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    "@nuxtjs/bulma",
    "@nuxt/content",
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["faGithub", "faInstagram", "faLinkedin", "faStrava", "faTiktok"]
          },
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["faChevronUp"]
          }
        ]
      }
    ]
  ],
  hooks: {
    "content:file:beforeInsert": document => {
      if (document.extension === ".md") {
        const { text } = require("reading-time")(document.text);

        document.readingTime = text;
      }
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  }
};
