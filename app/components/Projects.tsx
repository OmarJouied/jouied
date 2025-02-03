'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { ProjectType } from '../models/Project'

function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-gray-900 rounded-lg shadow-md overflow-hidden"
    >
      <Image src={project.image || "/placeholder.svg"} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-sm md:text-base text-gray-400 mb-4">{project.description}</p>
        <div className="flex justify-between">
          <a href={project.liveLink} className="text-accent font-semibold hover:underline text-xs md:text-sm">{t('projects.viewProject')}</a>
          <a href={project.sourceLink} className="text-accent font-semibold hover:underline text-xs md:text-sm">{t('projects.sourceLink')}</a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects({ projects }: { projects: ProjectType[] }) {
  const { t, language } = useLanguage()

  return (
    <div className={`container mx-auto px-4 lg:px-8 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center font-heading text-white">{t('projects.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

