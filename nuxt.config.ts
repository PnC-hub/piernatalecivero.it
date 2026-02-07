export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4
  },

  site: {
    url: 'https://piernatalecivero.it',
    name: 'Dott. Piernatale Civero - Esperto in Gnatologia per Implantologia e Ortodonzia Complessa',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'it' },
      title: 'Gnatologo Monterotondo | Dott. Civero - Gnatologia per Implantologia e Ortodonzia Complessa',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Il Dott. Piernatale Civero è esperto in gnatologia per riabilitazioni di casi complessi di implantologia e ortodonzia a Monterotondo. Riequilibrio gnatologico per risultati duraturi e estetica superiore.'
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'geo.region', content: 'IT-RM' },
        { name: 'geo.placename', content: 'Monterotondo' },
        { name: 'author', content: 'Dott. Piernatale Civero' },
        { property: 'og:title', content: 'Gnatologo Monterotondo | Dott. Civero - Gnatologia per Implantologia e Ortodonzia Complessa' },
        { property: 'og:description', content: 'Esperto in gnatologia per riabilitazioni di casi complessi di implantologia e ortodonzia. Riequilibrio gnatologico per risultati duraturi e estetica superiore.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://piernatalecivero.it' },
        { property: 'og:locale', content: 'it_IT' },
        { property: 'og:site_name', content: 'Dott. Piernatale Civero' },
        { property: 'og:image', content: 'https://piernatalecivero.it/images/og-image.png' },
        { property: 'og:image:width', content: '1536' },
        { property: 'og:image:height', content: '1024' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Gnatologo Monterotondo | Dott. Civero' },
        { name: 'twitter:description', content: 'Esperto in gnatologia per implantologia e ortodonzia complessa a Monterotondo.' },
        { name: 'twitter:image', content: 'https://piernatalecivero.it/images/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
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
            description: 'Esperto in gnatologia per riabilitazioni di casi complessi di implantologia e ortodonzia a Monterotondo. Il riequilibrio gnatologico prima di ogni trattamento implantologico e ortodontico garantisce risultati più duraturi nel tempo e un\'estetica superiore.',
            url: 'https://piernatalecivero.it',
            telephone: '+390690625768',
            image: 'https://piernatalecivero.it/images/dott-civero-portrait.png',
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
              { '@type': 'City', name: 'Morlupo' },
              { '@type': 'City', name: 'Roma Nord' },
              { '@type': 'City', name: 'Rignano Flaminio' }
            ],
            medicalSpecialty: ['Gnatologia', 'Implantologia', 'Ortodonzia', 'Riabilitazione Orale'],
            openingHours: ['Mo-Fr 10:00-19:00'],
            priceRange: '€€',
            sameAs: []
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
    },
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/gnatologia': { prerender: true },
    '/implantologia': { prerender: true },
    '/ortodonzia': { prerender: true },
    '/riabilitazione-complessa': { prerender: true },
    '/contatti': { prerender: true },
    '/grazie': { prerender: true },
    '/blog': { prerender: true },
    '/blog/**': { prerender: true },
    '/privacy': { prerender: true },
    '/cookie-policy': { prerender: true }
  }
})
