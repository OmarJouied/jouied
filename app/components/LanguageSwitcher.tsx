'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { ChevronDown } from 'lucide-react'

export const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'ar', name: 'العربية' }
]

export default function LanguageSwitcher({ setIsMenuOpen }: { setIsMenuOpen?: (state: any) => void }) {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleLanguageChange = (lang: 'en' | 'fr' | 'ar') => {
    setLanguage(lang)
    setIsOpen(false)
    setIsMenuOpen?.(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`flex items-center space-x-1 bg-secondary text-primary px-3 py-2 rounded-md hover:bg-opacity-90 transition-colors ${language === 'ar' ? 'flex-row-reverse' : ''}`}
      >
        <span>{languages.find(lang => lang.code === language)?.name}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute mt-2 py-2 w-48 bg-primary rounded-md shadow-[0_0_.5rem_#0009] z-20 ${language === 'ar' ? 'md:left-0' : 'md:right-0'}`}
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code as 'en' | 'fr' | 'ar')}
                className="block w-full text-left px-4 py-2 text-sm text-secondary hover:bg-secondary hover:text-primary transition-colors"
                transition={{ duration: 0.2 }}
              >
                {lang.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

