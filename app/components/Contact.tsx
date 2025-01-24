'use client'

import { Github, Linkedin, MessageCircle, Phone } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useCallback, useEffect, useRef, useState } from 'react'
import { submitContactForm } from '../actions/contact'

type CachedMessage = {
  name: string;
  email: string;
  message: string;
  timestamp: number;
}

const CACHE_KEY = 'contactFormCache'
const CACHE_EXPIRY = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

export default function Contact() {
  const { t, language } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string[]>>({})
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    // Clear expired cache entries on component mount
    clearExpiredCache()
  }, []);

  const clearExpiredCache = useCallback(() => {
    const cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '[]') as CachedMessage[]
    const now = Date.now()
    const updatedCache = cache.filter(item => now - item.timestamp < CACHE_EXPIRY)
    localStorage.setItem(CACHE_KEY, JSON.stringify(updatedCache))
  }, []);

  const isMessageInCache = useCallback((name: string, email: string, message: string) => {
    const cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '[]') as CachedMessage[]
    return cache.some(item =>
      item.name === name &&
      item.email === email &&
      item.message === message
    )
  }, []);

  const addMessageToCache = useCallback((name: string, email: string, message: string) => {
    const cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '[]') as CachedMessage[]
    cache.push({ name, email, message, timestamp: Date.now() })
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache))
  }, []);

  const handleSubmit = useCallback(async function (formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    if (isMessageInCache(name, email, message)) {
      setErrors({ message: [t('contact.errors.duplicateMessage')] })
      return
    }

    setIsLoading(true)
    setErrors({})
    const result = await submitContactForm(formData)
    setIsLoading(false)
    if (result.success) {
      setIsSuccess(true)
      setHasSubmitted(true)
      addMessageToCache(name, email, message)
      if (formRef.current) {
        formRef.current.reset()
      }
    } else if (result.errors) {
      setErrors(result.errors)
    }
  }, []);

  const resetForm = useCallback(() => {
    setIsSuccess(false)
    setHasSubmitted(false)
    setErrors({})
    if (formRef.current) {
      formRef.current.reset()
    }
  }, []);

  return (
    <section id="contact" className={`scroll-mt-6 md:scroll-mt-8 py-16 md:py-20 bg-gray-800 text-white ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center font-heading">{t('contact.title')}</h2>
        {isSuccess ? (
          <div className="max-w-lg mx-auto mb-8 text-center">
            <p className="text-green-400 mb-4">{t('contact.successMessage')}</p>
            <button
              onClick={resetForm}
              className="bg-primary hover:bg-gray-700 text-white px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm md:text-base"
            >
              {t('contact.sendAnother')}
            </button>
          </div>
        ) : (
          <form ref={formRef} action={handleSubmit} className="max-w-lg mx-auto mb-16">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm md:text-base">{t('contact.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 md:px-4 md:py-2 rounded-full bg-gray-700 text-white text-sm md:text-base"
                required
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
                disabled={hasSubmitted}
              />
              {errors.name && <p id="name-error" className="mt-1 text-red-400 text-sm">{t(errors.name[0])}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm md:text-base">{t('contact.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 md:px-4 md:py-2 rounded-full bg-gray-700 text-white text-sm md:text-base"
                required
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
                disabled={hasSubmitted}
              />
              {errors.email && <p id="email-error" className="mt-1 text-red-400 text-sm">{t(errors.email[0])}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 text-sm md:text-base">{t('contact.message')}</label>
              <textarea
                id="message"
                name="message" rows={6}
                className="w-full px-3 py-2 md:px-4 md:py-2 rounded-3xl bg-gray-700 text-white text-sm md:text-base resize-none"
                required
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
                disabled={hasSubmitted}
              />
              {errors.message && <p id="message-error" className="mt-1 text-red-400 text-sm">{t(errors.message[0])}</p>}
            </div>
            {errors.server && errors.server.length > 0 && (
              <div className="mb-4 text-center">
                {errors.server.map((error, index) => (
                  <p key={index} className="text-red-400 text-sm">{t(error)}</p>
                ))}
              </div>
            )}
            <div className="flex">
              <button
                type="submit"
                className="bg-secondary text-primary px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm md:text-base"
                disabled={isLoading || hasSubmitted}
              >
                {isLoading ? t('contact.sending') : hasSubmitted ? t('contact.sent') : t('contact.send')}
              </button>
            </div>
          </form>
        )}
        <div className="flex justify-center items-center gap-4">
          {/* <a
            href="https://www.linkedin.com/in/omar-jouied-687307251"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors p-2 rounded-full hover:bg-gray-700"
          >
            <Linkedin size={24} />
            <span className="sr-only">{t('contact.linkedin')}</span>
          </a>
          <a
            href="https://www.github.com/OmarJouied"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors p-2 rounded-full hover:bg-gray-700"
          >
            <Github size={24} />
            <span className="sr-only">{t('contact.github')}</span>
          </a>
          <a
            href="tel:+212701258175"
            className="text-white hover:text-accent transition-colors p-2 rounded-full hover:bg-gray-700"
          >
            <Phone size={24} />
            <span className="sr-only">{t('contact.phone')}</span>
          </a>
          <a
            href="https://wa.me/212701258175"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors p-2 rounded-full hover:bg-gray-700"
          >
            <MessageCircle size={24} />
            <span className="sr-only">{t('contact.whatsapp')}</span>
          </a> */}
          <a
            href="https://www.linkedin.com/in/omar-jouied-687307251"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col items-center text-white hover:text-accent transition-colors p-2 rounded-full hover:bg-gray-700 group"
          >
            <Linkedin size={24} />
            <span className="text-xs sm:text-sm mt-1 absolute top-full sm:-translate-y-full group-hover:translate-y-0 sm:opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all">{t('contact.linkedinTitle')}</span>
            <span className="sr-only">{t('contact.linkedin')}</span>
          </a>
          <a
            href="https://www.github.com/OmarJouied"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col items-center text-white hover:text-accent transition-colors p-2 rounded-full hover:bg-gray-700 group"
          >
            <Github size={24} />
            <span className="text-xs sm:text-sm mt-1 absolute top-full sm:-translate-y-full group-hover:translate-y-0 sm:opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all">{t('contact.githubTitle')}</span>
            <span className="sr-only">{t('contact.github')}</span>
          </a>
          <a
            href="tel:+212701258175"
            className="relative flex flex-col items-center text-white hover:text-accent transition-colors p-2 rounded-full hover:bg-gray-700 group"
          >
            <Phone size={24} />
            <span className="text-xs sm:text-sm mt-1 absolute top-full sm:-translate-y-full group-hover:translate-y-0 sm:opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all">{t('contact.phoneTitle')}</span>
            <span className="sr-only">{t('contact.phone')}</span>
          </a>
          <a
            href="https://wa.me/212701258175"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col items-center text-white hover:text-accent transition-colors p-2 rounded-full hover:bg-gray-700 group"
          >
            <MessageCircle size={24} />
            <span className="text-xs sm:text-sm mt-1 absolute top-full sm:-translate-y-full group-hover:translate-y-0 sm:opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all">{t('contact.whatsappTitle')}</span>
            <span className="sr-only">{t('contact.whatsapp')}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
