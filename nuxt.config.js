export default {
  //https://nuxtjs.org/deployments/netlify/
  generate: {
    fallback: true,
  },

  //https://explorers.netlify.com/learn/get-started-with-nuxt/nuxt-generate-and-deploy
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  // https://tailwind-elements.com/docs/standard/integrations/nuxt-integration
  head: {
    script: [
      {
        //src: "https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js",
      },
    ],
    title: 'daily-lunch-order-checker',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/postcss8', '@nuxtjs/tailwindcss'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/tailwindcss'],

  axios: {
    proxy: false,
    proxyHeaders: true,
  },

  proxy: {
    '/api/': {
      target: 'https://benef-api.frontline.cassems.com.br',
      pathRewrite: { '^/api/': '' },
    },
    '/foodapi': {
      target: 'https://lunch-api-server.onrender.com',
      pathRewrite: { '^/foodapi': '/' },
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
