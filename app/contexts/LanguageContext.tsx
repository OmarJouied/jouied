'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import enTranslations from '../locales/en.json'
import frTranslations from '../locales/fr.json'
import arTranslations from '../locales/ar.json'

export type Language = 'en' | 'fr' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

const translations = {
  en: enTranslations,
  fr: frTranslations,
  ar: arTranslations,
}

export const LanguageProvider: React.FC<{ children: React.ReactNode; initialLang: Language }> = ({ children, initialLang }) => {
  const [language, setLanguage] = useState<Language>(initialLang)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const lang = searchParams.get('lang') as Language
    if (['en', 'fr', 'ar'].includes(lang)) {
      setLanguage(lang)
    }
  }, [searchParams])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    const params = new URLSearchParams(searchParams.toString())
    params.set('lang', lang)
    router.push(`?${params.toString()}`)
  }

  const t = (key: string) => {
    return key.split('.').reduce((o, i) => o?.[i], translations[language] as any) || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

