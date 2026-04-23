'use client'

import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'
import logoImg from '../public/logo.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function TopBar() {
  return (
    <div className="bg-[#F9F7BF] text-[#1C1C1C]">
      {/* Desktop */}
      <div className="hidden xl:flex mx-auto max-w-7xl items-center justify-between px-8 py-3">
        <div className="flex items-center gap-6 text-[0.85rem]">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://maps.app.goo.gl/CjiNuvHwUDCirXpYA"
            className="flex items-center gap-2 hover:text-[#2D5A3D] transition-colors"
          >
            <MapPin className="h-5 w-5 text-[#C97A20] shrink-0" />
            <span>Hauptstr. 63, 77749 Hohberg-Niederschopfheim</span>
          </a>
          <a
            href="tel:078087556"
            className="flex items-center gap-2 hover:text-[#2D5A3D] transition-colors"
          >
            <Phone className="h-5 w-5 text-[#C97A20] shrink-0" />
            <span>07808 / 7556</span>
          </a>
          <a
            href="mailto:kontakt@bw-generationennetzwerk.de"
            className="flex items-center gap-2 hover:text-[#2D5A3D] transition-colors"
          >
            <Mail className="h-5 w-5 text-[#C97A20] shrink-0" />
            <span>kontakt@bw-generationennetzwerk.de</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/betreuteswohnen.generationennetzwerkhohberg.7"
            aria-label="Facebook"
            className="hover:opacity-80 transition-opacity"
          >
            <Facebook className="h-5 w-5 text-[#C97A20]" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/generationennetzwerkhohberg/"
            aria-label="Instagram"
            className="hover:opacity-80 transition-opacity"
          >
            <Instagram className="h-5 w-5 text-[#C97A20]" />
          </motion.a>
          <a href="/" className="ml-2">
            <Image src={logoImg} alt="Generationen Netzwerk Hohberg Logo" width={72} />
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex xl:hidden items-center justify-center gap-6 px-4 py-3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://maps.app.goo.gl/CjiNuvHwUDCirXpYA"
          aria-label="Standort auf Karte öffnen"
          className="hover:opacity-70 transition-opacity"
        >
          <MapPin className="h-6 w-6 text-[#C97A20]" />
        </a>
        <a
          href="tel:078087556"
          aria-label="Anrufen: 07808 7556"
          className="hover:opacity-70 transition-opacity"
        >
          <Phone className="h-6 w-6 text-[#C97A20]" />
        </a>
        <a
          href="mailto:kontakt@bw-generationennetzwerk.de"
          aria-label="E-Mail schreiben"
          className="hover:opacity-70 transition-opacity"
        >
          <Mail className="h-6 w-6 text-[#C97A20]" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/betreuteswohnen.generationennetzwerkhohberg.7"
          aria-label="Facebook"
          className="hover:opacity-70 transition-opacity"
        >
          <Facebook className="h-6 w-6 text-[#C97A20]" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/generationennetzwerkhohberg/"
          aria-label="Instagram"
          className="hover:opacity-70 transition-opacity"
        >
          <Instagram className="h-6 w-6 text-[#C97A20]" />
        </a>
      </div>
    </div>
  )
}
