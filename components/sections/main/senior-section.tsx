'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import placeholderImg from '../../../public/aktuelles_termine.webp'

const termine = [
  {
    ort: 'Seniorenbegegnung Diersburg',
    info: '1× im Monat, Mittwoch · 14:30 – 17:30 Uhr',
    detail: 'Foyer der Gemeindehalle Diersburg',
  },
  {
    ort: 'Seniorenbegegnung Hofweier',
    info: '14-täglich, Dienstag · 14:00 – 17:00 Uhr',
    detail: 'Bürgerhaus Hofweier',
  },
  {
    ort: 'Seniorenbegegnung Niederschopfheim',
    info: '14-täglich, Dienstag · 14:00 – 17:00 Uhr',
    detail: 'Haus der Begegnung Niederschopfheim',
  },
  {
    ort: 'Marktcafé',
    info: 'Jeden Freitag (Wochenmarkt) · 9:00 – 12:00 Uhr',
    detail: 'Bürgerhaus Hofweier',
  },
  {
    ort: 'Spieletreff',
    info: '1× im Monat, Dienstag · 14:00 – 17:00 Uhr',
    detail: 'Haus der Begegnung Niederschopfheim',
  },
]

export function SeniorSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.15 }}
      id="senior"
      className="bg-[#E8F0DC] py-16 px-6 lg:px-12"
    >
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
        {/* Left */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#2D5A3D] mb-6">
            Offene Seniorenarbeit
          </h2>
          <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-md">
            <Image
              src={placeholderImg}
              alt="Seniorenveranstaltung – Generationen Netzwerk Hohberg"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-5 flex items-start gap-2 text-[#3D5260] italic text-[0.9rem]">
            <span>
              Genaue Termine entnehmen Sie bitte dem Gemeindeblatt{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.hohberg.de/de/gemeinde/mitteilungsblatt/online-lesen"
                className="inline-flex items-center gap-1 text-[#2D5A3D] font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                HOHBERG Nachrichten <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </span>
          </div>
        </div>

        {/* Right – Terminkarten */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:pt-16">
          {termine.map((t) => (
            <div
              key={t.ort}
              className="bg-white rounded-xl p-5 shadow-sm border border-[#C4D4B0]"
            >
              <p className="font-bold text-[#2D5A3D] text-base">{t.ort}</p>
              <p className="text-[#3D5260] text-sm mt-1">{t.info}</p>
              <p className="text-[#6B7280] text-sm">{t.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
