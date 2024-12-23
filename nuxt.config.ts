// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/eslint', '@nuxt/ui', '@vueuse/nuxt'],
  ssr: false,
  devtools: { enabled: true },
  ui: {
    global: true,
  },
  compatibilityDate: '2024-11-01',
})