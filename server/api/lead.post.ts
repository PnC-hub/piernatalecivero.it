import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { nome, telefono, email, messaggio, pagina, servizio } = body

  if (!nome || !telefono) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Nome e telefono sono obbligatori'
    })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'localhost',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true,
    auth: {
      user: process.env.SMTP_USER || 'noreply@piernatalecivero.it',
      pass: process.env.SMTP_PASS || ''
    }
  })

  const serviceLine = servizio ? `<strong>Servizio di interesse:</strong> ${servizio}<br>` : ''
  const emailLine = email ? `<strong>Email:</strong> ${email}<br>` : ''
  const messageLine = messaggio ? `<strong>Messaggio:</strong><br>${messaggio}<br>` : ''

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1a5f7a; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h2 style="margin: 0;">Nuova Richiesta dal Sito piernatalecivero.it</h2>
      </div>
      <div style="background: #f8f9fa; padding: 24px; border: 1px solid #e0e0e0;">
        <p style="margin: 0 0 16px;">
          <strong>Nome:</strong> ${nome}<br>
          <strong>Telefono:</strong> ${telefono}<br>
          ${emailLine}
          ${serviceLine}
          ${messageLine}
        </p>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;">
        <p style="margin: 0; color: #666; font-size: 13px;">
          <strong>Origine:</strong> piernatalecivero.it<br>
          <strong>Pagina:</strong> ${pagina || 'Homepage'}<br>
          <strong>Data:</strong> ${new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome' })}
        </p>
      </div>
    </div>
  `

  try {
    await transporter.sendMail({
      from: `"Sito Dott. Civero" <${process.env.SMTP_USER || 'noreply@piernatalecivero.it'}>`,
      to: 'rec.monterotondo@smiledoc.it',
      cc: 'direzione@smiledoc.it',
      subject: `[piernatalecivero.it] Nuova richiesta da ${nome}`,
      html: htmlBody
    })

    return { success: true, message: 'Richiesta inviata con successo' }
  } catch (error: any) {
    console.error('Email send error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Errore nell\'invio della richiesta'
    })
  }
})
