'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const skills = [
  "Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB",
  "PostgreSQL", "GraphQL", "REST APIs", "AWS", "Docker", "Git"
]

export default function Skills() {
  const { t, language } = useLanguage()

  return (
    <section id="skills" className={`scroll-mt-6 md:scroll-mt-8 py-16 md:py-20 bg-gray-900 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center font-heading text-white">{t('skills.title')}</h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="bg-gray-700 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base font-semibold cursor-pointer"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#4C51BF", // This is the primary color
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

