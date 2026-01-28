export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4
  },

  site: {
    url: 'https://piernatalecivero.it',
    name: 'Piero Natale Civero',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'it' },
      title: 'Piero Natale Civero | Imprenditore Digitale & Software Architect',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Piero Natale Civero - Imprenditore digitale, software architect e founder di Geniusmile. Trasformo idee in prodotti digitali scalabili.'
        },
        { property: 'og:title', content: 'Piero Natale Civero | Imprenditore Digitale' },
        { property: 'og:description', content: 'Imprenditore digitale, software architect e founder di Geniusmile. Trasformo idee in prodotti digitali scalabili.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://piernatalecivero.it' },
        { property: 'og:locale', content: 'it_IT' },
      ],
      link: [
        { rel: 'canonical', href: 'https://piernatalecivero.it' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  },

  nitro: {
    preset: 'node-server',
    output: {
      dir: 'output',
      serverDir: 'output/server',
      publicDir: 'output/public'
    }
  }
})
