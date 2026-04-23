'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Logo } from '@/components/logo'
import placeholderImg from '../../../public/startseite.webp'

export function HeroSection() {
  return (
    <section className="bg-[#F8F6F1] py-14 px-6 lg:px-12">
      <h1 className="sr-only">Betreutes Wohnen – Generationen Netzwerk Hohberg e.V.</h1>
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full lg:w-1/2 flex-shrink-0"
        >
          <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={placeholderImg}
              alt="Generationen Netzwerk Hohberg – Menschen aller Altersgruppen gemeinsam"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col gap-8"
        >
          <Logo />
          <div className="flex flex-col gap-5">
            <p className="text-lg lg:text-xl font-semibold text-[#2D5A3D] leading-relaxed">
              Unser Verein steht für den Austausch zwischen Menschen aller Altersgruppen.
            </p>
            <p className="text-base lg:text-lg text-[#3D5260] leading-relaxed">
              Wir wollen eine Plattform schaffen, auf der Jung und Alt voneinander lernen und sich
              gegenseitig unterstützen können.
            </p>
            <p className="text-base lg:text-lg text-[#3D5260] leading-relaxed">
              Wir wollen soziale Brücken zwischen den Generationen bauen – und natürlich gemeinsam
              Spaß haben.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
