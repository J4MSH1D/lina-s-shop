// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  devServer: {
    port: 7777,
  },

  modules: ["@nuxtjs/tailwindcss"],

  tailwindcss: {
    config: {
      theme: {
        extend: {
          container: {
            center: true,
          },
        },
      },
    },
  },
});
