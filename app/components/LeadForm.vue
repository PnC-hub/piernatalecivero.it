<template>
  <div class="lead-form-wrapper" :class="{ 'lead-form-inline': variant === 'inline', 'lead-form-sidebar': variant === 'sidebar', 'lead-form-hero': variant === 'hero', 'lead-form-bottom': variant === 'bottom' }">
    <div v-if="!submitted" class="lead-form">
      <h3 v-if="title" class="lead-form-title">{{ title }}</h3>
      <p v-if="subtitle" class="lead-form-subtitle">{{ subtitle }}</p>
      <form @submit.prevent="handleSubmit">
        <div class="form-row">
          <div class="form-group">
            <input v-model="form.nome" type="text" placeholder="Nome e Cognome *" required class="form-input" />
          </div>
          <div class="form-group">
            <input v-model="form.telefono" type="tel" placeholder="Telefono *" required class="form-input" />
          </div>
        </div>
        <div v-if="showEmail" class="form-group">
          <input v-model="form.email" type="email" placeholder="Email" class="form-input" />
        </div>
        <div v-if="showServizio" class="form-group">
          <select v-model="form.servizio" class="form-input form-select">
            <option value="">Seleziona il servizio di interesse</option>
            <option value="Gnatologia e Riequilibrio Occlusione">Gnatologia e Riequilibrio Occlusione</option>
            <option value="Implantologia">Implantologia</option>
            <option value="Ortodonzia">Ortodonzia</option>
            <option value="Riabilitazione Complessa">Riabilitazione Complessa</option>
            <option value="Posturologia e Biomeccanica">Posturologia e Biomeccanica</option>
            <option value="Visita Specialistica">Visita Specialistica</option>
          </select>
        </div>
        <div v-if="showMessage" class="form-group">
          <textarea v-model="form.messaggio" placeholder="Descrivi brevemente la tua situazione..." rows="3" class="form-input form-textarea"></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-form" :disabled="loading">
          <span v-if="loading" class="spinner"></span>
          {{ loading ? 'Invio in corso...' : buttonText }}
        </button>
        <p class="form-privacy">Inviando il modulo acconsenti al trattamento dei dati personali ai sensi del GDPR.</p>
      </form>
    </div>
    <div v-else class="lead-form-success">
      <div class="success-icon">&#10003;</div>
      <h3>Richiesta Inviata</h3>
      <p>Verrai ricontattato dal nostro studio entro 24 ore lavorative.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  subtitle?: string
  variant?: 'inline' | 'sidebar' | 'hero' | 'bottom'
  showEmail?: boolean
  showServizio?: boolean
  showMessage?: boolean
  buttonText?: string
  pagina?: string
  servizio?: string
}>(), {
  title: 'Richiedi un Consulto',
  subtitle: '',
  variant: 'inline',
  showEmail: true,
  showServizio: true,
  showMessage: true,
  buttonText: 'Richiedi Informazioni',
  pagina: 'Homepage',
  servizio: ''
})

const form = reactive({
  nome: '',
  telefono: '',
  email: '',
  messaggio: '',
  servizio: props.servizio
})

const loading = ref(false)
const submitted = ref(false)

async function handleSubmit() {
  loading.value = true
  try {
    await $fetch('/api/lead', {
      method: 'POST',
      body: {
        ...form,
        pagina: props.pagina
      }
    })
    submitted.value = true
  } catch (e) {
    alert('Si è verificato un errore. Puoi chiamarci direttamente al 06 90625768.')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.lead-form-wrapper {
  background: var(--bg);
  border-radius: 12px;
  overflow: hidden;
}
.lead-form-hero {
  background: rgba(255,255,255,0.97);
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  padding: 2rem;
  max-width: 480px;
}
.lead-form-inline {
  background: var(--primary-light);
  padding: 2.5rem;
  border-radius: 12px;
}
.lead-form-sidebar {
  background: var(--bg);
  padding: 1.5rem;
  border: 2px solid var(--primary);
  border-radius: 12px;
  position: sticky;
  top: 20px;
}
.lead-form-bottom {
  background: var(--secondary);
  padding: 2.5rem;
  border-radius: 12px;
}
.lead-form-bottom .lead-form-title {
  color: #fff;
}
.lead-form-bottom .lead-form-subtitle {
  color: rgba(255,255,255,0.8);
}
.lead-form-bottom .form-privacy {
  color: rgba(255,255,255,0.6);
}
.lead-form-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.5rem;
  color: var(--secondary);
  margin-bottom: 0.5rem;
}
.lead-form-subtitle {
  color: var(--text-light);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.form-group {
  margin-bottom: 12px;
}
.form-input {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: 'Open Sans', sans-serif;
  transition: border-color 0.2s, box-shadow 0.2s;
  background: #fff;
}
.form-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(26,95,122,0.1);
}
.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
}
.form-textarea {
  resize: vertical;
  min-height: 80px;
}
.btn-form {
  width: 100%;
  padding: 16px;
  font-size: 1.05rem;
  justify-content: center;
  margin-top: 4px;
}
.form-privacy {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 10px;
  text-align: center;
}
.spinner {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  margin-right: 8px;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
.lead-form-success {
  text-align: center;
  padding: 2rem;
}
.success-icon {
  width: 60px;
  height: 60px;
  background: #27ae60;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 1rem;
}
.lead-form-success h3 {
  font-family: 'Playfair Display', Georgia, serif;
  color: var(--secondary);
  margin-bottom: 0.5rem;
}
.lead-form-success p {
  color: var(--text-light);
}
@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  .lead-form-hero {
    max-width: 100%;
  }
}
</style>
