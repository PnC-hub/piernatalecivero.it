<template>
  <div class="site">
    <SiteHeader />
    <main>
      <NuxtPage />
    </main>
    <SiteFooter />
    <StickyCta />
    <ExitPopup />
    <WhatsAppButton />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap');

:root {
  --primary: #1a5f7a;
  --primary-dark: #134b61;
  --primary-light: #e8f4f8;
  --secondary: #2c3e50;
  --accent: #c9a962;
  --text: #333;
  --text-light: #666;
  --text-muted: #999;
  --bg: #fff;
  --bg-light: #f8f9fa;
  --bg-cream: #faf8f5;
  --border: #e0e0e0;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  color: var(--text);
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 600;
  line-height: 1.3;
}

a {
  color: var(--primary);
  text-decoration: none;
  transition: color 0.2s;
}
a:hover { color: var(--primary-dark); }

img { max-width: 100%; height: auto; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  border: 2px solid transparent;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
}
.btn-primary {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
}
.btn-primary:hover {
  background: var(--primary-dark);
  border-color: var(--primary-dark);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(26,95,122,0.3);
}
.btn-outline {
  background: transparent;
  border-color: var(--primary);
  color: var(--primary);
}
.btn-outline:hover {
  background: var(--primary);
  color: #fff;
}
.btn-white {
  background: #fff;
  border-color: #fff;
  color: var(--primary);
}
.btn-white:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}

.section { padding: 80px 0; }
.section-light { background: var(--bg-light); }
.section-cream { background: var(--bg-cream); }
.section-primary { background: var(--primary); }
.section-dark { background: var(--secondary); }

.section-header { text-align: center; margin-bottom: 3rem; }
.section-header h2 { font-size: 2.25rem; color: var(--secondary); margin-bottom: 1rem; }
.section-header p { color: var(--text-light); font-size: 1.05rem; max-width: 700px; margin: 0 auto; }

@media (max-width: 768px) {
  .section { padding: 50px 0; }
  .section-header h2 { font-size: 1.75rem; }
}
</style>
