export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Månevann AS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#f9fafb' },
      { hid: 'og:image', property: 'og:image', content: 'https://xn--mnevann-exa.no/share.png' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon" type="image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon" type="image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#1e3a8a' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/fonts.css',
    '@/assets/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://sitemap.nuxtjs.org/guide/setup
    '@nuxtjs/sitemap'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'vue-plausible'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-vsc-dark-plus.css'
      }
    }
  },

  sitemap: {
    hostname: 'https://xn--mnevann-exa.no/',
    gzip: true,
    routes: async () => {
      const { $content } = require('@nuxt/content')

      const articles = await $content('articles')
        .only(['slug'])
        .fetch()

      return articles.map(article => `/articles/${article.slug}`)
    }
  },

  plausible: {
    // apiHost: 'https://insights.moonwater.no',
    domain: 'moonwater.no'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
