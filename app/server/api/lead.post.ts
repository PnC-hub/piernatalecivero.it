import { createTransport } from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.nome || !body.telefono) {
    throw createError({ statusCode: 400, message: 'Nome e telefono sono obbligatori' })
  }

  const transporter = createTransport({
    host: process.env.SMTP_HOST || 'localhost',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER || 'noreply@piernatalecivero.it',
      pass: process.env.SMTP_PASS || '',
    },
    tls: { rejectUnauthorized: false }
  })

  const htmlBody = `
    <h2>Nuovo contatto dal sito piernatalecivero.it</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Nome</td><td style="padding:8px;border:1px solid #ddd;">${body.nome}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefono</td><td style="padding:8px;border:1px solid #ddd;">${body.telefono}</td></tr>
      ${body.email ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${body.email}</td></tr>` : ''}
      ${body.servizio ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Servizio</td><td style="padding:8px;border:1px solid #ddd;">${body.servizio}</td></tr>` : ''}
      ${body.messaggio ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Messaggio</td><td style="padding:8px;border:1px solid #ddd;">${body.messaggio}</td></tr>` : ''}
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Pagina</td><td style="padding:8px;border:1px solid #ddd;">${body.pagina || 'Non specificata'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Data</td><td style="padding:8px;border:1px solid #ddd;">${new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome' })}</td></tr>
    </table>
  `

  await transporter.sendMail({
    from: `"Sito Dott. Civero" <${process.env.SMTP_USER || 'noreply@piernatalecivero.it'}>`,
    to: 'rec.monterotondo@smiledoc.it',
    cc: 'direzione@smiledoc.it',
    subject: `[Dott. Civero] Nuovo contatto - ${body.nome}`,
    html: htmlBody,
  })

  return { success: true }
})
