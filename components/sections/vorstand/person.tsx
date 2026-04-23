'use client'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

interface PersonProps {
  title: string
  description: string
  img: StaticImageData
}

export const Person = ({ title, description, img }: PersonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.15 }}
      className="w-full flex flex-col-reverse sm:flex-row items-center sm:items-start gap-8 border-b border-[#C4D4B0] pb-10"
    >
      <div className="flex-1 flex flex-col gap-4 text-center sm:text-left">
        <p className="font-bold text-[#2D5A3D] text-lg">{title}</p>
        <p className="text-[#3D5260] leading-relaxed">{description}</p>
      </div>
      <div className="shrink-0 w-48 h-48 relative overflow-hidden rounded-2xl shadow-md">
        <Image className="object-cover" alt={title} src={img} fill sizes="192px" />
      </div>
    </motion.div>
  )
}

export default Person
