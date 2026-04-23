'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useActiveSection } from '@/hooks/scroll-spy'
import { scrollToHashWithOffset } from './scroll-to-hash'

const navItems = [
  { label: 'Startseite', href: '/' },
  { label: 'Aktuelles & Termine', href: '#senior' },
  { label: 'Ambulanter Dienst', href: '#ambulant' },
  { label: 'Weitere Angebote', href: '#support' },
  { label: 'Kontakt', href: '#contact' },
  { label: 'Vorstandschaft', href: '/vorstand' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const activeSection = useActiveSection(['ambulant', 'support', 'contact', 'senior'])

  const handleLinkClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith('#')) {
      if (pathname !== '/') {
        window.location.href = `/${href}`
      } else {
        scrollToHashWithOffset(href)
      }
    }
  }

  const isActive = (item: (typeof navItems)[0]) => {
    if (item.href.startsWith('#')) {
      return activeSection === item.href.replace('#', '')
    }
    if (item.href === '/') {
      return pathname === '/' && !activeSection
    }
    if (item.href === '/vorstand') {
      return pathname.includes('vorstand')
    }
    return false
  }

  return (
    <nav className="sticky top-0 z-40 bg-[#2D5A3D] shadow-md">
      <div className="mx-auto max-w-7xl px-6">
        {/* Desktop */}
        <ul className="hidden md:flex items-center justify-center">
          {navItems.map((item) => {
            const active = isActive(item)
            const finalHref =
              item.href.startsWith('#') && pathname !== '/' ? `/${item.href}` : item.href

            return (
              <li key={item.label}>
                {item.href.startsWith('#') ? (
                  <Link
                    href={finalHref}
                    onClick={(e) => {
                      if (pathname === '/') {
                        e.preventDefault()
                        handleLinkClick(item.href)
                      }
                    }}
                    className={`block px-5 py-4 text-[0.78rem] tracking-wider font-semibold uppercase transition-all duration-200 border-b-2 ${
                      active
                        ? 'text-[#F5B945] border-[#F5B945]'
                        : 'text-white/90 border-transparent hover:text-white hover:border-white/40'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    href={finalHref}
                    onClick={() => {
                      if (item.href === '/') window.location.href = item.href
                    }}
                    className={`block px-5 py-4 text-[0.78rem] tracking-wider font-semibold uppercase transition-all duration-200 border-b-2 ${
                      active
                        ? 'text-[#F5B945] border-[#F5B945]'
                        : 'text-white/90 border-transparent hover:text-white hover:border-white/40'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center justify-between py-4">
          <span className="text-white font-semibold text-[0.9rem] tracking-wide">
            Generationen Netzwerk Hohberg
          </span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            className="text-white p-1"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="md:hidden pb-4 border-t border-white/20 pt-2">
            {navItems.map((item) => {
              const active = isActive(item)
              const finalHref =
                item.href.startsWith('#') && pathname !== '/' ? `/${item.href}` : item.href

              return (
                <li key={item.label}>
                  {item.href.startsWith('#') ? (
                    <Link
                      href={finalHref}
                      onClick={(e) => {
                        if (pathname === '/') {
                          e.preventDefault()
                          handleLinkClick(item.href)
                        } else {
                          setIsOpen(false)
                        }
                      }}
                      className={`block px-4 py-3 text-[0.95rem] font-medium transition-colors ${
                        active ? 'text-[#F5B945]' : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      href={finalHref}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-[0.95rem] font-medium transition-colors ${
                        active ? 'text-[#F5B945]' : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </nav>
  )
}
