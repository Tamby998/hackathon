// import i18n from './config/i18n';
export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hackathon',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/i18n',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  router: {
    base: process.env.CORE_DIR || '/',
    // middleware: 'i18n'
  },
  loading: { color: 'cyan' },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Doc: https://github.com/nuxt-community/color-mode-module
    "@nuxtjs/color-mode",
    '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // [
    //   'nuxt-i18n',
    //   {
    //     vueI18nLoader: true,
    //     defaultLocale: 'fr',
    //      locales: [
    //       {
    //          code: 'en',
    //          name: 'English'
    //       },
    //       {
    //          code: 'fr',
    //          name: 'Français'
    //       }
    //     ],
    //     vueI18n: i18n,
    //     strategy: 'prefix',
    //     seo: true
    //   }
    //  ],
  ],

  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  purgeCSS: {
    whitelist: ["dark-mode"],
    mode: 'postcss'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
      // https://go.nuxtjs.dev/axios
      "@nuxtjs/axios",
      "@nuxtjs/auth-next",
      'nuxt-tv-toast',
      // '@nuxtjs/i18n',
  ],
  auth: {
    strategies: {
      local: {
//      scheme: "refresh",
        token: {
          property: "token",
          global: true,
          required: true,
          type: "Bearer"
        },
        user: {
          property: "user",
          autoFetch: true
        },
//      refreshToken: {  // it sends request automatically when the access token expires, and its expire time has set on the Back-end and does not need to we set it here, because is useless
//        property: "refresh_token",
//        data: "refresh_token",
//      },
        endpoints: {
          login: { url: "/login", method: "post" },
//        refresh: { url: "/api/auth/refresh-token", method: "post" },
          logout: false, //  we don't have an endpoint for our logout in our API and we just remove the token from localstorage
          user: { url: "/user/current", method: "get" }
        },
      }
    },
    redirect: {
      home: false,
      logout: false
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.ETCRM_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
  },
  target: 'static'
}
