<template>
  <Teleport to="body">
    <div v-if="show" class="exit-overlay" @click.self="close">
      <div class="exit-popup">
        <button class="exit-close" @click="close">&times;</button>
        <div v-if="!submitted" class="exit-content">
          <h3>Aspetta! Non Andare Via</h3>
          <p>Hai un problema dentale complesso? Descrivi la tua situazione e il Dott. Civero valuterà personalmente il tuo caso.</p>
          <form @submit.prevent="handleSubmit">
            <div class="exit-form-row">
              <input v-model="form.nome" type="text" placeholder="Nome *" required class="exit-input" />
              <input v-model="form.telefono" type="tel" placeholder="Telefono *" required class="exit-input" />
            </div>
            <input v-model="form.email" type="email" placeholder="Email" class="exit-input" />
            <textarea v-model="form.messaggio" placeholder="Descrivi brevemente il tuo problema..." rows="2" class="exit-input exit-textarea"></textarea>
            <button type="submit" class="exit-btn" :disabled="loading">
              {{ loading ? 'Invio...' : 'Richiedi un Consulto' }}
            </button>
            <p class="exit-privacy">I tuoi dati sono protetti. <NuxtLink to="/privacy">Privacy Policy</NuxtLink></p>
          </form>
        </div>
        <div v-else class="exit-success">
          <div class="exit-success-icon">&#10003;</div>
          <h3>Richiesta Inviata!</h3>
          <p>Verrai ricontattato entro 24 ore lavorative.</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const show = ref(false)
const submitted = ref(false)
const loading = ref(false)
const triggered = ref(false)

const form = reactive({
  nome: '',
  telefono: '',
  email: '',
  messaggio: ''
})

onMounted(() => {
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 10 && !triggered.value && !sessionStorage.getItem('exitShown')) {
      triggered.value = true
      show.value = true
      sessionStorage.setItem('exitShown', 'true')
    }
  })
})

function close() {
  show.value = false
}

async function handleSubmit() {
  loading.value = true
  try {
    await $fetch('/api/lead', {
      method: 'POST',
      body: {
        ...form,
        pagina: 'Exit Popup'
      }
    })
    submitted.value = true
    setTimeout(() => { show.value = false }, 3000)
  } catch {
    alert('Errore. Chiamaci al 06 90625768.')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.exit-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.exit-popup {
  background: #fff;
  border-radius: 16px;
  max-width: 500px;
  width: 90%;
  padding: 2.5rem;
  position: relative;
  box-shadow: 0 30px 80px rgba(0,0,0,0.3);
  animation: slideUp 0.3s;
}
@keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
.exit-close {
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.75rem;
  color: #999;
  cursor: pointer;
  line-height: 1;
}
.exit-close:hover { color: #333; }
.exit-content h3 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.5rem;
  color: var(--secondary);
  margin-bottom: 0.75rem;
}
.exit-content p {
  color: var(--text-light);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
.exit-form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 10px;
}
.exit-input {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.9rem;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 10px;
}
.exit-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(26,95,122,0.1);
}
.exit-textarea { resize: vertical; min-height: 60px; }
.exit-btn {
  width: 100%;
  padding: 14px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  transition: background 0.2s;
}
.exit-btn:hover { background: var(--primary-dark); }
.exit-btn:disabled { opacity: 0.7; cursor: not-allowed; }
.exit-privacy {
  font-size: 0.7rem;
  color: #999;
  text-align: center;
  margin-top: 8px;
}
.exit-privacy a { color: var(--primary); }
.exit-success { text-align: center; padding: 1rem 0; }
.exit-success-icon {
  width: 60px; height: 60px; background: #27ae60; color: #fff;
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-size: 1.5rem; margin: 0 auto 1rem;
}
.exit-success h3 { font-family: 'Playfair Display', serif; color: var(--secondary); margin-bottom: 0.5rem; }
.exit-success p { color: var(--text-light); }
@media (max-width: 768px) {
  .exit-form-row { grid-template-columns: 1fr; }
  .exit-popup { padding: 1.5rem; }
}
</style>
