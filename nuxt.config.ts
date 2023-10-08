// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  ssr: false,
  image: {
    provider: "netlify",
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dkz244x00/image/upload/",
    },
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
    "@nuxtjs/cloudinary",
  ],
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  },
  runtimeConfig: {
    // Private keys are only available on the server
    // Public keys that are exposed to the client
    public: {
      CLOUDINARY_UPLOAD_PRESET: process.env.CLOUDINARY_UPLOAD_PRESET,
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    },
  },
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
