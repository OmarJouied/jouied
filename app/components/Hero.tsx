'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import Link from 'next/link'

export default function Hero() {
  const { t, language } = useLanguage()

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const id = target.getAttribute('href')?.slice(1)
      if (id) {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    const link = document.querySelector('.hero-cta')!;
    link.addEventListener('click', handleScroll)

    return () => {
      link.removeEventListener('click', handleScroll)
    }
  }, [])

  return (
    <section className={`bg-primary text-secondary scroll-mt-6 md:scroll-mt-8 py-16 md:py-20 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-y-8">
        <div className="md:w-1/2">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl mb-6 font-heading font-bold text-secondary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            {t('hero.title')}
          </motion.h2>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.1 }}
          >
            {t('hero.subtitle')}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.2 }}
          >
            {t('hero.description')}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.3 }}
          >
            <a href="#contact" className="w-full sm:w-fit text-center hero-cta bg-secondary text-primary px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-block">
              {t('hero.cta')}
            </a>
            <Link
              href={`/omar-jouied-cv-${language}.pdf`}
              className="w-full sm:w-fit text-center download-cv bg-accent text-primary px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-block"
              target='_blank'
              download
            >
              {t('hero.downloadCV')}
            </Link>
          </motion.div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: 0.2 }}
          >
            <Image
              src="/jouied.jpg"
              alt="Omar Jouied"
              width={300}
              height={300}
              className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

