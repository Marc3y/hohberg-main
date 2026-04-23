'use server'

import nodemailer from 'nodemailer'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Bitte geben Sie Ihren Namen ein.'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein.'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Ihre Nachricht ist zu kurz (mindestens 10 Zeichen).'),
})

export type ContactFormData = z.infer<typeof contactSchema>

export async function sendContactEmail(
  data: ContactFormData,
): Promise<{ success: boolean; error?: string }> {
  const parsed = contactSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: 'Ungültige Formulardaten.' }
  }

  const { name, email, phone, message } = parsed.data

  const smtpConfigured =
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS

  if (!smtpConfigured) {
    return {
      success: false,
      error: 'E-Mail-Dienst ist derzeit nicht konfiguriert. Bitte kontaktieren Sie uns direkt: kontakt@bw-generationennetzwerk.de',
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      replyTo: email,
      to: 'dirk.stegner@bw-generationennetzwerk.de',
      subject: `Kontaktanfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}${phone ? `\nTelefon: ${phone}` : ''}\n\nNachricht:\n${message}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        <hr />
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    })

    return { success: true }
  } catch {
    return {
      success: false,
      error: 'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.',
    }
  }
}
