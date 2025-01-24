'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechInnovate",
    image: "/placeholder.svg",
    text: "Omar's expertise in Next.js transformed our web application. His ability to deliver high-quality code on time is impressive."
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "DataDrive Solutions",
    image: "/placeholder.svg",
    text: "Working with Omar was a pleasure. His deep understanding of React and attention to detail resulted in a seamless user experience for our platform."
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "CreativeStack",
    image: "/placeholder.svg",
    text: "Omar's full-stack skills and problem-solving abilities made him an invaluable asset to our team. He consistently exceeded our expectations."
  }
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
          src={testimonial.image}
          alt={testimonial.name}
          width={60}
          height={60}
          className="rounded-full w-12 h-12 md:w-14 md:h-14"
        />
        <div>
          <h3 className="font-semibold text-base md:text-lg text-white">{testimonial.name}</h3>
          <p className="text-xs md:text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
        </div>
      </div>
      <p className="text-sm md:text-base text-gray-300 italic">"{testimonial.text}"</p>
    </motion.div>
  )
}

export default function Testimonials() {
  const { t, language } = useLanguage()
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  return (
    <section id="testimonials" className={`scroll-mt-8 md:scroll-mt-12 py-16 md:py-20 bg-gray-900 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 lg:px-8">
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
    </section>
  )
}

