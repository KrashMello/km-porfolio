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
      meta: [
        { hid: 'description', name: 'description', content: 'Joel Soteldo desarrollador con mas de 5 años de experiencia en el desarrollo web' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      title: 'KrashMello | Portfolio',
      htmlAttrs: {
        lang: 'es',
      }
    }
  },
  vite: { plugins: [tailwindcss(),], },
  css: ['~/assets/css/main.css'],
})
