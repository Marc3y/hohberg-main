'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Phone, Mail, Globe, Clock } from 'lucide-react'
import { ContactForm } from './contact-form'
import placeholderImg from '../../../public/kontakt.webp'

export function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.1 }}
      id="contact"
      className="bg-[#F8F6F1] py-16 px-6 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#2D5A3D] mb-10 text-center">
          Wir freuen uns auf Ihren Kontakt
        </h2>

        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          {/* Left – Info card + image */}
          <div className="w-full lg:w-1/2 flex-shrink-0 flex flex-col gap-6">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
              <Image
                src={placeholderImg}
                alt="Kontakt – Generationen Netzwerk Hohberg"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#C4D4B0] flex flex-col gap-4">
              <div>
                <p className="font-bold text-[#1C1C1C]">Dirk Stegner</p>
                <p className="text-[#6B7280] text-sm">1. Vorsitzender</p>
              </div>

              <div className="w-full h-px bg-[#E8F0DC]" />

              <div className="flex flex-col gap-3 text-[0.9rem]">
                <a
                  href="mailto:dirk.stegner@bw-generationennetzwerk.de"
                  className="flex items-center gap-3 text-[#3D5260] hover:text-[#2D5A3D] transition-colors"
                >
                  <Mail className="h-4 w-4 text-[#C97A20] shrink-0" />
                  dirk.stegner@bw-generationennetzwerk.de
                </a>
                <a
                  href="tel:078087556"
                  className="flex items-center gap-3 text-[#3D5260] hover:text-[#2D5A3D] transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#C97A20] shrink-0" />
                  07808 / 7556
                </a>
                <div className="flex items-start gap-3 text-[#3D5260]">
                  <MapPin className="h-4 w-4 text-[#C97A20] shrink-0 mt-0.5" />
                  <span>
                    Hauptstr. 63
                    <br />
                    77749 Hohberg-Niederschopfheim
                  </span>
                </div>
                <div className="flex items-start gap-3 text-[#3D5260]">
                  <Clock className="h-4 w-4 text-[#C97A20] shrink-0 mt-0.5" />
                  <span>
                    <span className="font-medium">Öffnungszeiten:</span>
                    <br />
                    Mo, Di & Do · 8:30 – 11:30 Uhr
                  </span>
                </div>
                <a
                  href="https://www.bw-generationennetzwerk.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#3D5260] hover:text-[#2D5A3D] transition-colors"
                >
                  <Globe className="h-4 w-4 text-[#C97A20] shrink-0" />
                  www.bw-generationennetzwerk.de
                </a>
              </div>
            </div>
          </div>

          {/* Right – Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-[#C4D4B0]">
              <h3 className="text-xl font-bold text-[#2D5A3D] mb-6">Schreiben Sie uns</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
