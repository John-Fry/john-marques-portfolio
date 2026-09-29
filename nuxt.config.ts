export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'John Marques | Full-stack Developer',
      meta: [
        { name: 'description', content: 'Full-stack developer building interfaces, APIs and web products.' },
        { name: 'theme-color', content: '#050505' }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      htmlAttrs: { lang: 'en' }
    }
  },
  compatibilityDate: '2026-08-23'
})
