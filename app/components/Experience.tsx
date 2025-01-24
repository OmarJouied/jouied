'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getJobs, Job } from '../lib/getJobs';

// interface Job {
//   title: string;
//   company: string;
//   period: string;
//   description: string[];
// }

// const jobs: Job[] = [
//   {
//     title: "Senior Web Developer",
//     company: "TechCorp Inc.",
//     period: "2021 - Present",
//     description: [
//       "Lead a team of 5 developers in building large-scale web applications using Next.js and React",
//       "Implemented server-side rendering and static site generation, improving site performance by 40%",
//       "Mentored junior developers and conducted code reviews to ensure high-quality deliverables"
//     ]
//   },
//   {
//     title: "Full Stack Developer",
//     company: "WebSolutions Ltd.",
//     period: "2018 - 2021",
//     description: [
//       "Developed and maintained multiple client websites using React and Node.js",
//       "Integrated third-party APIs and implemented RESTful services",
//       "Optimized database queries, resulting in a 30% reduction in page load times"
//     ]
//   },
//   {
//     title: "Junior Web Developer",
//     company: "StartUp Innovations",
//     period: "2016 - 2018",
//     description: [
//       "Assisted in the development of responsive web applications using HTML, CSS, and JavaScript",
//       "Collaborated with the design team to implement pixel-perfect UI components",
//       "Participated in daily stand-ups and sprint planning meetings"
//     ]
//   }
// ];

function ExperienceItem({ job, index, lang }: { job: Job; index: number; lang: string }) {
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

export default async function Experience({ jobs }: { jobs: Job[] }) {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className={`scroll-mt-8 md:scroll-mt-12 py-16 md:py-20 bg-gray-800 ${language === 'ar' ? 'rtl' : 'ltr'} overflow-hidden`}>
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center font-heading text-white">{t('experience.title')}</h2>
        <div className="max-w-3xl mx-auto">
          {jobs.map((job, index) => (
            <ExperienceItem key={index} job={job} index={index} lang={language} />
          ))}
        </div>
      </div>
    </section>
  )
}
