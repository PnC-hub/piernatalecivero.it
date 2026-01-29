<template>
  <div class="site">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <h1 class="site-title">
          <NuxtLink to="/">Dott. Piernatale Civero</NuxtLink>
        </h1>
        <p class="site-subtitle">Esperto in Gnatologia, Posturologia ed Riequilibrio dell'Occlusione</p>
      </div>
    </header>

    <!-- Article -->
    <article v-if="article" class="article">
      <!-- Article Header -->
      <header class="article-header">
        <div class="container">
          <nav class="breadcrumb">
            <NuxtLink to="/">Home</NuxtLink>
            <span>/</span>
            <NuxtLink to="/blog">Blog</NuxtLink>
            <span>/</span>
            <span>{{ article.title }}</span>
          </nav>
        </div>
      </header>

      <!-- Featured Image -->
      <div class="article-image">
        <img :src="article.image" :alt="article.title" />
      </div>

      <!-- Article Content -->
      <div class="article-content">
        <div class="container container-narrow">
          <div class="article-meta">
            <span class="article-date">{{ article.date }}</span>
            <span class="article-category">{{ article.category }}</span>
          </div>
          <h1>{{ article.title }}</h1>
          <div class="article-body" v-html="article.content"></div>

          <!-- Author -->
          <div class="article-author">
            <img src="/images/piernatale-civero.png" alt="Dott. Piernatale Civero" />
            <div>
              <strong>Dott. Piernatale Civero</strong>
              <p>Esperto in Gnatologia, Posturologia ed Riequilibrio dell'Occlusione</p>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- 404 -->
    <div v-else class="not-found">
      <div class="container">
        <h1>Articolo non trovato</h1>
        <p>L'articolo che stai cercando non esiste.</p>
        <NuxtLink to="/blog" class="btn btn-primary">Torna al Blog</NuxtLink>
      </div>
    </div>

    <!-- Related Articles -->
    <section v-if="article && relatedArticles.length" class="related-section">
      <div class="container">
        <h2>Articoli correlati</h2>
        <div class="related-grid">
          <article v-for="related in relatedArticles" :key="related.slug" class="related-card">
            <NuxtLink :to="`/blog/${related.slug}`">
              <img :src="related.image" :alt="related.title" />
            </NuxtLink>
            <div class="related-content">
              <span class="related-category">{{ related.category }}</span>
              <h3><NuxtLink :to="`/blog/${related.slug}`">{{ related.title }}</NuxtLink></h3>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Hai bisogno di una consulenza?</h2>
        <p>Prenota una visita con il Dott. Civero per un approccio personalizzato.</p>
        <a href="https://pazienti.geniusmile.com/paziente/index/nuovo/?centro=2" class="btn btn-primary" target="_blank">
          Prenota una visita
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-social">
          <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </a>
          <a href="https://x.com/" target="_blank" aria-label="X">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
        <NuxtLink to="/" class="footer-title">Dott. Piernatale Civero - Esperto in Gnatologia, Posturologia ed Riequilibrio dell'Occlusione</NuxtLink>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { getArticleBySlug, getAllArticles } from '~/data/articles'

const route = useRoute()
const slug = route.params.slug as string

const article = getArticleBySlug(slug)

const relatedArticles = computed(() => {
  if (!article) return []
  return getAllArticles()
    .filter(a => a.slug !== slug)
    .slice(0, 3)
})

if (article) {
  useHead({
    title: `${article.title} - Dott. Piernatale Civero`,
    meta: [
      {
        name: 'description',
        content: article.excerpt
      },
      {
        property: 'og:title',
        content: `${article.title} - Dott. Piernatale Civero`
      },
      {
        property: 'og:description',
        content: article.excerpt
      },
      {
        property: 'og:image',
        content: article.image
      }
    ]
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap');

:root {
  --primary: #1a5f7a;
  --primary-dark: #134b61;
  --primary-light: #e8f4f8;
  --secondary: #2c3e50;
  --accent: #c9a962;
  --text: #333333;
  --text-light: #666666;
  --text-muted: #999999;
  --bg: #ffffff;
  --bg-light: #f8f9fa;
  --bg-cream: #faf8f5;
  --border: #e0e0e0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  line-height: 1.7;
}

h1, h2, h3 {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 600;
  line-height: 1.3;
}

a {
  color: var(--primary);
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  color: var(--primary-dark);
}

img {
  max-width: 100%;
  height: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.container-narrow {
  max-width: 800px;
}

/* Header */
.header {
  background: var(--bg);
  padding: 20px 0;
  text-align: center;
  border-bottom: 1px solid var(--border);
}

.logo img {
  height: 80px;
  width: auto;
  margin-bottom: 10px;
}

.site-title {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.site-title a {
  color: var(--secondary);
}

.site-subtitle {
  font-size: 0.95rem;
  color: var(--text-light);
  font-weight: 400;
}

/* Article Header */
.article-header {
  background: var(--bg-light);
  padding: 30px 0;
}

.breadcrumb {
  font-size: 0.9rem;
  color: var(--text-light);
}

.breadcrumb a {
  color: var(--primary);
}

.breadcrumb span {
  margin: 0 0.5rem;
}

/* Article Image */
.article-image {
  width: 100%;
  max-height: 500px;
  overflow: hidden;
}

.article-image img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

/* Article Content */
.article-content {
  padding: 60px 0;
}

.article-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}

.article-date {
  color: var(--text-muted);
}

.article-category {
  background: var(--primary-light);
  color: var(--primary);
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-weight: 600;
}

.article-content h1 {
  font-size: 2.5rem;
  color: var(--secondary);
  margin-bottom: 2rem;
}

.article-body {
  font-size: 1.1rem;
  line-height: 1.8;
}

.article-body h2 {
  font-size: 1.75rem;
  color: var(--secondary);
  margin: 2rem 0 1rem;
}

.article-body h3 {
  font-size: 1.35rem;
  color: var(--secondary);
  margin: 1.5rem 0 1rem;
}

.article-body p {
  margin-bottom: 1.5rem;
  color: var(--text);
}

.article-body blockquote {
  background: var(--bg-cream);
  border-left: 4px solid var(--primary);
  padding: 1.5rem 2rem;
  margin: 2rem 0;
  font-style: italic;
  font-size: 1.15rem;
  color: var(--text-light);
}

.article-body ul, .article-body ol {
  margin: 1.5rem 0;
  padding-left: 2rem;
}

.article-body li {
  margin-bottom: 0.5rem;
}

/* Author */
.article-author {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}

.article-author img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.article-author strong {
  display: block;
  font-size: 1.1rem;
  color: var(--secondary);
  margin-bottom: 0.25rem;
}

.article-author p {
  font-size: 0.9rem;
  color: var(--text-light);
  margin: 0;
}

/* Related Section */
.related-section {
  padding: 60px 0;
  background: var(--bg-light);
}

.related-section h2 {
  font-size: 1.75rem;
  color: var(--secondary);
  text-align: center;
  margin-bottom: 2rem;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.related-card {
  background: var(--bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s;
}

.related-card:hover {
  transform: translateY(-5px);
}

.related-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.related-content {
  padding: 1.25rem;
}

.related-category {
  display: inline-block;
  background: var(--primary-light);
  color: var(--primary);
  padding: 0.2rem 0.6rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.related-card h3 {
  font-size: 1.1rem;
  color: var(--secondary);
}

.related-card h3 a {
  color: inherit;
}

.related-card h3 a:hover {
  color: var(--primary);
}

/* Not Found */
.not-found {
  padding: 100px 0;
  text-align: center;
}

.not-found h1 {
  font-size: 2rem;
  color: var(--secondary);
  margin-bottom: 1rem;
}

.not-found p {
  color: var(--text-light);
  margin-bottom: 2rem;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: var(--primary);
  text-align: center;
}

.cta-section h2 {
  font-size: 2rem;
  color: white;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.8);
  margin-bottom: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s;
  border: 2px solid transparent;
}

.btn-primary {
  background: white;
  color: var(--primary);
  border-color: white;
}

.btn-primary:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: white;
  transform: translateY(-2px);
}

/* Footer */
.footer {
  background: var(--secondary);
  padding: 40px 0;
  text-align: center;
}

.footer-social {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.footer-social a {
  color: rgba(255,255,255,0.7);
  transition: color 0.2s;
}

.footer-social a:hover {
  color: white;
}

.footer-title {
  color: rgba(255,255,255,0.6);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 992px) {
  .related-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .article-image img {
    height: 300px;
  }

  .article-content h1 {
    font-size: 1.75rem;
  }

  .article-body {
    font-size: 1rem;
  }

  .article-author {
    flex-direction: column;
    text-align: center;
  }
}
</style>
