// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    head: {
      title: "Lina's fashion shop",
    },
  },

  devServer: {
    port: 7777,
  },

  css: ["./app/assets/css/fons.css"],

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],

  tailwindcss: {
    config: {
      theme: {
        extend: {
          container: {
            center: true,
            padding: "10px 0",
          },
        },
      },
    },
  },
});
