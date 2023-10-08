// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [["defineStore", "definePiniaStore"]],
      },
    ],
    '@nuxtjs/strapi'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/style/_globals.scss" as *;`,
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      strapiToken: process.env.NUXT_PUBLIC_STRAPI_SECRET_TOKEN,
      strapi: {
        url: process.env.NUXT_PUBLIC_STRAPI_API_URL,
        prefix: '/api',
        version: 'v4',
        cookie: {},
        cookieName: 'strapi_jwt'
      },  
    }
  }
})
