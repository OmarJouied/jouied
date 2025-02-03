'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { AboutType } from '../models/About'

export default function About({ about }: { about: AboutType }) {
  const { t, language } = useLanguage()

  return (
    <div className={`container mx-auto px-4 lg:px-8 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center font-heading text-white">{t('about.title')}</h2>
      <p className="text-base md:text-lg max-w-3xl mx-auto text-center text-gray-300">
        {about?.description ?? ""}
      </p>
    </div>
  )
}

