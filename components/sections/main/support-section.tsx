'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import placeholderImg from '../../../public/wir_bieten_weiter.webp'

const angebote = [
  'Hilfe im Haus',
  'Rasenmähen und leichte Gartenarbeit',
  'Hund ausführen',
  'Einkäufe erledigen',
  'Babysitten (ab 14 Jahren, mit vorherigem Babykurs)',
  'Nachhilfe',
  'Botengänge',
]

export function SupportSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.15 }}
      id="support"
      className="bg-[#E8F0DC] py-16 px-6 lg:px-12"
    >
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#2D5A3D] mb-6">
            Weitere Unterstützung
          </h2>
          <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-md">
            <Image
              src={placeholderImg}
              alt="Weitere Unterstützungsangebote – Generationen Netzwerk Hohberg"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:pt-20">
          <p className="text-lg font-semibold text-[#2D5A3D]">
            Neben dem Ambulanten Dienst bieten wir weitere Unterstützungen an:
          </p>
          <ul className="flex flex-col gap-3">
            {angebote.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#4A7C59] mt-0.5 shrink-0" />
                <span className="text-[#3D5260] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-2 bg-white rounded-xl p-5 border border-[#C4D4B0]">
            <p className="text-[#3D5260] text-sm leading-relaxed">
              <strong className="text-[#2D5A3D]">Taschengeldbörse:</strong> Diese Unterstützungen
              werden teilweise von Jugendlichen ab 13 Jahren angeboten.
            </p>
            <p className="text-[#3D5260] text-sm leading-relaxed mt-2">
              Informationen erhalten Sie zu den Öffnungszeiten in der Geschäftsstelle.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
