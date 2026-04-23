'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import placeholderImg from '../../../public/ambulanter_dienst.webp'

const leistungen = [
  'Hilfe im Haushalt und beim Einkaufen',
  'Besuchsdienst',
  'Betreuung bei Abwesenheit von Angehörigen',
  'Begleitung bei Behördengängen, Arztbesuchen und Besorgungen',
  'Fahrdienst',
  'Hilfe bei der Körperpflege',
  'Beratung hinsichtlich möglicher Pflegeleistungen sowie der Abrechnung mit der Pflegekasse',
]

export function AmbulantSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.15 }}
      id="ambulant"
      className="bg-[#F8F6F1] py-16 px-6 lg:px-12"
    >
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row-reverse items-start gap-10 lg:gap-16">
        {/* Image (right on desktop) */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#2D5A3D] mb-6">Ambulanter Dienst</h2>
          <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-md">
            <Image
              src={placeholderImg}
              alt="Ambulanter Dienst – Generationen Netzwerk Hohberg"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-5 text-[#3D5260] leading-relaxed text-base">
            Sicher fällt es oft schwer, fremde Hilfe anzunehmen. Weil wir das wissen, stellen wir
            uns auf Sie ein. Zu unserem Team gehören geschulte, engagierte Mitarbeiterinnen und
            Mitarbeiter, die Zeit haben, flexibel und einfühlsam sind. Umsicht und Diskretion sind
            dabei selbstverständlich.
          </p>
        </div>

        {/* List (left on desktop) */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:pt-20">
          <p className="text-lg font-semibold text-[#2D5A3D]">Unser Angebot umfasst:</p>
          <ul className="flex flex-col gap-3">
            {leistungen.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#4A7C59] mt-0.5 shrink-0" />
                <span className="text-[#3D5260] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  )
}
