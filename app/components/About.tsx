'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function About() {
  const { t, language } = useLanguage()

  return (
    <section id="about" className={`scroll-mt-6 md:scroll-mt-8 py-16 md:py-20 bg-gray-900 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center font-heading text-white">{t('about.title')}</h2>
        <p className="text-base md:text-lg max-w-3xl mx-auto text-center text-gray-300">
          {t('about.content')}
        </p>
      </div>
    </section>
  )
}

