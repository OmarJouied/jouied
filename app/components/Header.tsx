'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Languages, LanguagesIcon, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import { links } from '../contants'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hash, setHash] = useState("")
  const { t, language } = useLanguage()

  useEffect(() => {
    setHash(window.location.hash)
    const closeMenu = (e: Event) => {
      setHash(((e.currentTarget as any).href as string).match(/\#(\w+)/)?.[0] ?? "")
      setIsMenuOpen(false)
    }

    const links = document.querySelectorAll('header a')
    links.forEach(link => {
      link.addEventListener('click', closeMenu)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', closeMenu)
      })
    }
  }, [])

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <header className={`bg-primary text-secondary shadow-[0_0_.5rem_#0009] py-4 sticky top-0 z-10 ${language !== 'ar' ? 'ltr' : 'rtl'}`}>
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-heading">OJ</Link>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <AnimatePresence>
          {(isMenuOpen || (typeof window !== "undefined" && window.innerWidth >= 768)) && (
            <motion.ul
              className={`md:flex md:space-x-6 ${isMenuOpen
                ? 'absolute top-full left-0 right-0 bg-primary p-4 space-y-4 shadow-[0_.25rem_.25rem_#0009]'
                : 'hidden'
                } md:static md:bg-transparent md:p-0 md:space-y-0`}
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              {links.map(link => (
                <li key={link.href}>
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    href={link.href}
                    className={`px-3 py-1 md:px-4 md:py-2 rounded-3xl transition-colors block ${hash === link.href ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'}`}
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
              <li className="md:hidden mt-4">
                <LanguageSwitcher />
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  )
}

