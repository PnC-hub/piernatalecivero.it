<template>
  <div>
    <Head>
      <title>Blog - Dott. Piernatale Civero | Gnatologia e Implantologia a Monterotondo</title>
      <meta name="description" content="Articoli su gnatologia, implantologia, ortodonzia e salute orale. Approfondimenti dal Dott. Piernatale Civero, esperto in gnatologia per riabilitazioni di casi complessi di implantologia e ortodonzia a Monterotondo." />
      <link rel="canonical" href="https://piernatalecivero.it/blog" />
    </Head>

    <section class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <span>Blog</span>
        </nav>
        <h1>Blog</h1>
        <p>Approfondimenti su gnatologia, implantologia, ortodonzia e salute orale per fare scelte consapevoli sulla tua salute.</p>
      </div>
    </section>

    <section class="blog-list-section">
      <div class="container">
        <div class="blog-list">
          <article v-for="article in articles" :key="article.slug" class="blog-item">
            <NuxtLink :to="`/blog/${article.slug}`" class="blog-item-image">
              <img :src="article.image" :alt="article.title" />
            </NuxtLink>
            <div class="blog-item-content">
              <div class="blog-item-meta">
                <span class="blog-item-date">{{ article.date }}</span>
                <span class="blog-item-category">{{ article.category }}</span>
              </div>
              <h2><NuxtLink :to="`/blog/${article.slug}`">{{ article.title }}</NuxtLink></h2>
              <p>{{ article.excerpt }}</p>
              <NuxtLink :to="`/blog/${article.slug}`" class="read-more">Leggi l'articolo &rarr;</NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-primary" style="text-align:center;">
      <div class="container">
        <h2 style="color:#fff;margin-bottom:1rem;">Hai una Domanda sulla Tua Salute Orale?</h2>
        <p style="color:rgba(255,255,255,0.85);margin-bottom:2rem;">Contattaci per un consulto personalizzato con il Dott. Civero.</p>
        <NuxtLink to="/contatti" class="btn btn-white">Richiedi Informazioni</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getAllArticles } from '~/data/articles'
const articles = getAllArticles()
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--bg-cream) 100%);
  padding: 60px 0;
  text-align: center;
}
.breadcrumb { margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--text-light); }
.breadcrumb a { color: var(--primary); }
.breadcrumb span { margin: 0 0.5rem; }
.page-header h1 { font-size: 2.5rem; color: var(--secondary); margin-bottom: 1rem; }
.page-header p { font-size: 1.1rem; color: var(--text-light); max-width: 600px; margin: 0 auto; }
.blog-list-section { padding: 60px 0; }
.blog-list { display: flex; flex-direction: column; gap: 40px; }
.blog-item { display: grid; grid-template-columns: 300px 1fr; gap: 30px; padding-bottom: 40px; border-bottom: 1px solid var(--border); }
.blog-item:last-child { border-bottom: none; padding-bottom: 0; }
.blog-item-image img { width: 100%; height: 200px; object-fit: cover; border-radius: 10px; transition: transform 0.3s; }
.blog-item-image:hover img { transform: scale(1.03); }
.blog-item-content { display: flex; flex-direction: column; justify-content: center; }
.blog-item-meta { display: flex; gap: 1rem; margin-bottom: 0.75rem; font-size: 0.85rem; }
.blog-item-date { color: var(--text-muted); }
.blog-item-category { background: var(--primary-light); color: var(--primary); padding: 0.2rem 0.75rem; border-radius: 50px; font-weight: 600; }
.blog-item h2 { font-size: 1.5rem; color: var(--secondary); margin-bottom: 0.75rem; }
.blog-item h2 a { color: inherit; }
.blog-item h2 a:hover { color: var(--primary); }
.blog-item p { color: var(--text-light); margin-bottom: 1rem; line-height: 1.6; }
.read-more { display: inline-flex; align-items: center; gap: 0.5rem; font-weight: 600; color: var(--primary); }
@media (max-width: 768px) {
  .blog-item { grid-template-columns: 1fr; }
  .blog-item-image img { height: 180px; }
  .page-header h1 { font-size: 1.75rem; }
}
</style>
