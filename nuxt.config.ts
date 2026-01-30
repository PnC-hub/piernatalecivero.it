export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4
  },

  site: {
    url: 'https://piernatalecivero.it',
    name: 'Dott. Piernatale Civero - Esperto in Gnatologia per Riabilitazioni Complesse a Monterotondo',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'it' },
      title: 'Dott. Piernatale Civero - Esperto in Gnatologia per Riabilitazioni Complesse a Monterotondo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Il Dott. Piernatale Civero è esperto in gnatologia per riabilitazioni complesse tramite l\'implantologia e l\'ortodonzia a Monterotondo. Oltre 20 anni di esperienza nella risoluzione di casi complessi.'
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'geo.region', content: 'IT-RM' },
        { name: 'geo.placename', content: 'Monterotondo' },
        { property: 'og:title', content: 'Dott. Piernatale Civero - Esperto in Gnatologia per Riabilitazioni Complesse a Monterotondo' },
        { property: 'og:description', content: 'Esperto in gnatologia per riabilitazioni complesse tramite l\'implantologia e l\'ortodonzia. Risolve casi che altri non affrontano.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://piernatalecivero.it' },
        { property: 'og:locale', content: 'it_IT' },
        { property: 'og:site_name', content: 'Dott. Piernatale Civero' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dentist',
            name: 'Dott. Piernatale Civero',
            description: 'Esperto in gnatologia per riabilitazioni complesse tramite l\'implantologia e l\'ortodonzia a Monterotondo',
            url: 'https://piernatalecivero.it',
            telephone: '+390690625768',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Via Monte Circeo 12',
              addressLocality: 'Monterotondo',
              addressRegion: 'RM',
              postalCode: '00015',
              addressCountry: 'IT'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 42.053,
              longitude: 12.618
            },
            areaServed: [
              { '@type': 'City', name: 'Monterotondo' },
              { '@type': 'City', name: 'Mentana' },
              { '@type': 'City', name: 'Fonte Nuova' },
              { '@type': 'City', name: 'Guidonia' },
              { '@type': 'City', name: 'Tivoli' },
              { '@type': 'City', name: 'Palombara Sabina' },
              { '@type': 'City', name: 'Fiano Romano' },
              { '@type': 'City', name: 'Capena' },
              { '@type': 'City', name: 'Castelnuovo di Porto' },
              { '@type': 'City', name: 'Morlupo' }
            ],
            medicalSpecialty: ['Gnatologia', 'Implantologia', 'Ortodonzia'],
            openingHours: ['Mo-Fr 09:00-19:00', 'Sa 09:00-13:00'],
            priceRange: '€€'
          })
        }
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
  },

  routeRules: {
    '/': { prerender: true },
    '/gnatologia': { prerender: true },
    '/implantologia': { prerender: true },
    '/ortodonzia': { prerender: true },
    '/riabilitazione-complessa': { prerender: true },
    '/contatti': { prerender: true },
    '/blog': { prerender: true },
    '/blog/**': { prerender: true }
  }
})
