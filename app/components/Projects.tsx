'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, featuring server-side rendering and API routes.",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A React-based task management application with real-time updates using WebSockets.",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Blog CMS",
    description: "A custom content management system for blogs, built with Next.js and GraphQL.",
    image: "/placeholder.svg",
    link: "#"
  }
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
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
      <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-sm md:text-base text-gray-400 mb-4">{project.description}</p>
        <a href={project.link} className="text-primary font-semibold hover:underline text-sm md:text-base">{t('projects.viewProject')}</a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { t, language } = useLanguage()

  return (
    <section id="projects" className={`scroll-mt-6 md:scroll-mt-8 py-16 md:py-20 bg-gray-800 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center font-heading text-white">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

