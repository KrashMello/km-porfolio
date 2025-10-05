import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt'
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      title: 'KrashMello | Portfolio',
      description: 'Portfolio de KrashMello',
      htmlAttrs: {
        lang: 'es',
      }
    }
  },
  vite: { plugins: [tailwindcss(),], },
  css: ['~/assets/css/main.css'],
})
