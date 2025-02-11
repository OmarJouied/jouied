'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { JobType } from '../models/Job';

function ExperienceItem({ job, index, lang }: { job: JobType; index: number; lang: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: lang === 'ar' ? 50 : -50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="mb-8"
    >
      <h3 className="text-xl font-semibold text-white">{job.title}</h3>
      <p className="text-lg text-gray-300">{job.company}</p>
      <p className="text-sm text-gray-400 mb-2">{job.period}</p>
      <ul className="list-disc list-inside">
        {job.description.map((item, i) => (
          <li key={i} className="text-gray-300">{item}</li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Experience({ jobs }: { jobs: JobType[] }) {
  const { t, language } = useLanguage();

  return (
    <div className={`container mx-auto px-4 lg:px-8 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center font-heading text-white">{t('experience.title')}</h2>
      <div className="max-w-3xl mx-auto">
        {jobs.map((job, index) => (
          <ExperienceItem key={index} job={job} index={index} lang={language} />
        ))}
      </div>
    </div>
  )
}
