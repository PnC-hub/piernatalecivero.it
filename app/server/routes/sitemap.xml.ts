export default defineEventHandler(() => {
  const baseUrl = 'https://piernatalecivero.it'
  const now = new Date().toISOString().split('T')[0]

  const pages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/gnatologia', priority: '0.9', changefreq: 'monthly' },
    { loc: '/implantologia', priority: '0.9', changefreq: 'monthly' },
    { loc: '/ortodonzia', priority: '0.9', changefreq: 'monthly' },
    { loc: '/riabilitazione-complessa', priority: '0.9', changefreq: 'monthly' },
    { loc: '/contatti', priority: '0.8', changefreq: 'monthly' },
    { loc: '/blog', priority: '0.7', changefreq: 'weekly' },
    { loc: '/blog/gnatologia-e-denti-dritti', priority: '0.6', changefreq: 'monthly' },
    { loc: '/blog/occlusione-e-postura', priority: '0.6', changefreq: 'monthly' },
    { loc: '/blog/esperto-gnatologia-ruolo', priority: '0.6', changefreq: 'monthly' },
    { loc: '/blog/migliorare-postura-odontoiatria', priority: '0.6', changefreq: 'monthly' },
    { loc: '/blog/biomeccanica-salute-orale', priority: '0.6', changefreq: 'monthly' },
    { loc: '/blog/gnatologo-monterotondo-quando-serve', priority: '0.6', changefreq: 'monthly' },
    { loc: '/blog/impianti-dentali-riequilibrio-gnatologico', priority: '0.6', changefreq: 'monthly' },
    { loc: '/blog/bruxismo-cause-trattamento', priority: '0.6', changefreq: 'monthly' },
    { loc: '/blog/ortodonzia-adulti-gnatologia', priority: '0.6', changefreq: 'monthly' },
    { loc: '/blog/dolore-mandibola-atm-sintomi', priority: '0.6', changefreq: 'monthly' },
    { loc: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { loc: '/cookie-policy', priority: '0.3', changefreq: 'yearly' },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${baseUrl}${p.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  })
})
