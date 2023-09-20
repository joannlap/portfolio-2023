// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  ssr: false,
  image: {
    provider: "netlify",
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [["defineStore", "definePiniaStore"]],
      },
    ],
    "@nuxtjs/google-fonts",
    "@nuxt/image-edge",
  ],
  css: ["normalize.css/normalize.css"],
  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/style/_globals.scss" as *;`,
        },
      },
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: true,
    },
  },
  googleFonts: {
    prefetch: true,
    families: {
      Inter: [400, 600, 700, 800],
    },
  },
});
