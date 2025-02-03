'use client'

import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { SkillType } from '../models/Skill'
import { useRef } from 'react'

const SkillCard = ({ name, index }: { name: string; index: number; }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.span
      key={name}
      className="bg-gray-700 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base font-semibold cursor-pointer"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{
        scale: 1.1,
        backgroundColor: "#4C51BF", // This is the primary color
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {name}
    </motion.span>
  )
}

export default function Skills({ skills }: { skills: SkillType[] }) {
  const { t, language } = useLanguage()

  return (
    <div className={`container mx-auto px-4 lg:px-8 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center font-heading text-white">{t('skills.title')}</h2>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {skills.map(({ name }, index) => (
          <SkillCard key={name} name={name} index={index} />
        ))}
      </div>
    </div>
  )
}

