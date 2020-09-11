import colors from 'vuetify/es5/util/colors'
import webpack from 'webpack'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: 'FGO Calculator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'keywords',
        content: 'FGO,邪ンヌ,アルトリア,オルタ,Wオルタ,計算,宝具,NP'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Wオルタと一緒に計算！ FGO Calculator by @destino591211'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@destino591211' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'FGO Calculator'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://fgo-damage-calculation.web.app/'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Wオルタと一緒に計算！ FGO Calculator by @destino591211'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://fgo-damage-calculation.web.app/icon.png'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'FGO Calculator Wオルタと一緒に計算！'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vee-validate'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-165731113-1' // 自身のアナリティクスコード
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  manifest: {
    name: 'FGO Calculator',
    short_name: 'Wオルタと計算',
    title: 'FGO Calculator(Wオルタと一緒に計算)',
    'og:title': 'FGO Calculator',
    description: 'Wオルタと一緒に計算をしよう！',
    'og:description': 'Wオルタと一緒に計算をしよう！',
    lang: 'ja',
    theme_color: '#000000',
    background_color: '#000000',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ],
    transpile: ['vee-validate/dist/rules']
  }
}
