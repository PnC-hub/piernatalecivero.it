export default defineEventHandler((event) => {
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/gnatologia', priority: '0.9', changefreq: 'monthly' },
    { url: '/implantologia', priority: '0.9', changefreq: 'monthly' },
    { url: '/ortodonzia', priority: '0.9', changefreq: 'monthly' },
    { url: '/riabilitazione-complessa', priority: '0.9', changefreq: 'monthly' },
    { url: '/contatti', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/cookie-policy', priority: '0.3', changefreq: 'yearly' },
  ]

  // Blog articles
  const blogSlugs = [
    'gnatologia-e-denti-dritti',
    'occlusione-e-postura',
    'bruxismo-cause-e-rimedi',
    'implantologia-computer-guidata',
    'ortodonzia-adulti',
    'dolore-mandibola-cosa-fare',
    'riabilitazione-orale-complessa',
    'gnatologia-e-cefalee'
  ]

  blogSlugs.forEach(slug => {
    pages.push({ url: `/blog/${slug}`, priority: '0.7', changefreq: 'monthly' })
  })

  const today = new Date().toISOString().split('T')[0]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>https://piernatalecivero.it${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  setResponseHeader(event, 'content-type', 'application/xml')
  return xml
})
