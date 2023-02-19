export default {
  server: {
    port: 3333, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'daily-lunch-order-checker',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  axios: {
    proxy: true
  },

  proxy: {
    //'/api': 'https://benef-api.frontline.cassems.com.br/auth/signin',
    //'/api/': 'https://benef-api.frontline.cassems.com.br',
    '/api/': { target: 'https://benef-api.frontline.cassems.com.br', pathRewrite: {'^/api/': ''} },
    //'/api2/': 'http://api.another-website.com'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/axios',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/proxy'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
