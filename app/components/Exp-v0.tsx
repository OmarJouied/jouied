import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getJobs, Job } from '../lib/getJobs'

function ExperienceItem({ job, index }: { job: Job; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
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

export default async function Experience() {
  const { t, language } = useLanguage()
  const jobs = await getJobs()

  return (
    <section id="experience" className={`py-16 md:py-20 bg-gray-800 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center font-heading text-white">{t('experience.title')}</h2>
        <div className="max-w-3xl mx-auto">
          {jobs.map((job, index) => (
            <ExperienceItem key={job._id} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

