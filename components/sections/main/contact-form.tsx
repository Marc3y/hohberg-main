'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Loader2, Send } from 'lucide-react'
import { sendContactEmail } from '@/app/actions/contact'

const schema = z.object({
  name: z.string().min(2, 'Bitte geben Sie Ihren Namen ein.'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein.'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Ihre Nachricht ist zu kurz (mindestens 10 Zeichen).'),
})

type FormData = z.infer<typeof schema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const result = await sendContactEmail(data)
      if (result.success) {
        toast.success('Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns bald bei Ihnen.')
        reset()
      } else {
        toast.error(result.error ?? 'Ein Fehler ist aufgetreten.')
      }
    } catch {
      toast.error('Ein unerwarteter Fehler ist aufgetreten.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-semibold text-[#3D5260]">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Ihr vollständiger Name"
          {...register('name')}
          className="w-full rounded-lg border border-[#C4D4B0] bg-white px-4 py-3 text-[#1C1C1C] placeholder-[#9CA3AF] focus:border-[#4A7C59] focus:outline-none focus:ring-2 focus:ring-[#4A7C59]/20 transition-colors"
        />
        {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-semibold text-[#3D5260]">
          E-Mail-Adresse <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="ihre@email.de"
          {...register('email')}
          className="w-full rounded-lg border border-[#C4D4B0] bg-white px-4 py-3 text-[#1C1C1C] placeholder-[#9CA3AF] focus:border-[#4A7C59] focus:outline-none focus:ring-2 focus:ring-[#4A7C59]/20 transition-colors"
        />
        {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-semibold text-[#3D5260]">
          Telefon <span className="text-[#9CA3AF] font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="07808 / 0000"
          {...register('phone')}
          className="w-full rounded-lg border border-[#C4D4B0] bg-white px-4 py-3 text-[#1C1C1C] placeholder-[#9CA3AF] focus:border-[#4A7C59] focus:outline-none focus:ring-2 focus:ring-[#4A7C59]/20 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-[#3D5260]">
          Ihre Nachricht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Wie können wir Ihnen helfen?"
          {...register('message')}
          className="w-full rounded-lg border border-[#C4D4B0] bg-white px-4 py-3 text-[#1C1C1C] placeholder-[#9CA3AF] focus:border-[#4A7C59] focus:outline-none focus:ring-2 focus:ring-[#4A7C59]/20 transition-colors resize-none"
        />
        {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#C97A20] px-8 py-4 font-semibold text-white hover:bg-[#A8641A] focus:outline-none focus:ring-2 focus:ring-[#C97A20]/40 disabled:opacity-60 transition-colors"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Wird gesendet…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Nachricht senden
          </>
        )}
      </button>
    </form>
  )
}
