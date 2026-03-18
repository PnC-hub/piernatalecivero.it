export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.nome || !body.telefono) {
    throw createError({ statusCode: 400, statusMessage: 'Nome e telefono sono obbligatori' })
  }

  const apiKey = process.env.GENIUSMILE_API_KEY
  if (!apiKey) {
    throw createError({ statusCode: 500, statusMessage: 'Configurazione API mancante' })
  }

  // Splitta "Nome Cognome" in nome + cognome separati
  const parti = (body.nome as string).trim().split(/\s+/)
  const nome = parti[0]
  const cognome = parti.length > 1 ? parti.slice(1).join(' ') : parti[0]

  const motivoVisita = [body.servizio, body.messaggio].filter(Boolean).join(' — ') || 'Prima visita'

  const res = await $fetch<any>('https://api.geniusmile.com/api/v1/leads/rispondosempre', {
    method: 'POST',
    headers: {
      'X-API-Key': apiKey,
      'X-Centro-Id': '2',
      'Content-Type': 'application/json',
    },
    body: {
      nome,
      cognome,
      cellulare: body.telefono,
      email: body.email || '',
      motivo_visita: motivoVisita,
      fonte: 'form',
      url_sorgente: body.pagina || 'piernatalecivero.it',
    },
  })

  return { success: true, message: res?.message ?? 'Richiesta inviata' }
})
