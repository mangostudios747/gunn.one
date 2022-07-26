import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    nitro: {
      preset: 'firebase'
    },
    css: ["@/assets/main.css"],
    build: {
      postcss: {
        postcssOptions: require("./postcss.config.js"),
      },
    },
    buildModules : [
      '@nuxt-hero-icons/solid/nuxt',
      '@nuxt-hero-icons/outline/nuxt'
    ]
  });
  