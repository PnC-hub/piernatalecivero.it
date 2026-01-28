export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4
  },

  site: {
    url: 'https://piernatalecivero.it',
    name: 'Dott. Piernatale Civero - Esperto in Gnatologia, Posturologia ed Riequilibrio dell\'Occlusione',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'it' },
      title: 'Dott. Piernatale Civero - Esperto in Gnatologia, Posturologia ed Riequilibrio dell\'Occlusione',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Il Dott. Piernatale Civero unisce gnatologia, posturologia e biomeccanica per un approccio personalizzato che migliora la salute orale e il benessere generale.'
        },
        { property: 'og:title', content: 'Dott. Piernatale Civero - Esperto in Gnatologia, Posturologia ed Riequilibrio dell\'Occlusione' },
        { property: 'og:description', content: 'Il Dott. Piernatale Civero unisce gnatologia, posturologia e biomeccanica per un approccio personalizzato che migliora la salute orale e il benessere generale.' },
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
