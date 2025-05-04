'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { TestimonialType } from '../models/Testimonial'

function TestimonialCard({ testimonial, index }: { testimonial: TestimonialType; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-md"
    >
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={testimonial.image || "/placeholder.svg"}
          alt={testimonial.name}
          width={60}
          height={60}
          className="rounded-full w-12 h-12 md:w-14 md:h-14"
        />
        <div>
          <h3 className="font-semibold text-base md:text-lg text-white">{testimonial.name}</h3>
          <p className="text-xs md:text-sm text-gray-400">{testimonial.role} {t('at')} {testimonial.company}</p>
        </div>
      </div>
      <p className="text-sm md:text-base text-gray-300 italic">&quot;{testimonial.text}&quot;</p>
    </motion.div>
  )
}

export default function Testimonials({ testimonials }: { testimonials: TestimonialType[] }) {
  const { t, language } = useLanguage()
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  return (
    <div className={`container mx-auto px-4 lg:px-8 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center font-heading text-white">{t('testimonials.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            index={prefersReducedMotion ? 0 : index}
          />
        ))}
      </div>
    </div>
  )
}

