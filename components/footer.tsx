'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../public/logo.png'
import { Facebook, Instagram } from 'lucide-react'

export function Footer() {
  const pathname = usePathname()

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (pathname !== '/') {
      window.location.href = '/#contact'
    } else {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#2D5A3D] text-white">
      <div className="mx-auto max-w-7xl px-8 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image src={logoImg} alt="Generationen Netzwerk Hohberg Logo" width={80} />
            <p className="text-white/70 text-sm text-center md:text-left">
              Betreutes Wohnen – Generationen Netzwerk Hohberg e.V.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[0.9rem]">
            <Link href="/datenschutz" className="text-white/80 hover:text-white transition-colors">
              Datenschutz
            </Link>
            <Link href="/impressum" className="text-white/80 hover:text-white transition-colors">
              Impressum
            </Link>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="text-white/80 hover:text-white transition-colors"
            >
              Kontakt
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/betreuteswohnen.generationennetzwerkhohberg.7"
              aria-label="Facebook"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/generationennetzwerkhohberg/"
              aria-label="Instagram"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
