// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Planify - Travel Planner',
      meta: [
        { name: 'description', content: 'Crea e condividi itinerari di viaggio dinamici!' }
      ]
    }
  },
  css: ['@/assets/styles/main.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
});
