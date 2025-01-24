import { Metadata } from 'next'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import ScrollToTopButton from './components/ScrollToTopButton'

export const metadata: Metadata = {
  title: 'Omar Jouied - Web Developer & Next.js Specialist',
  description: 'Portfolio of Omar Jouied, a web developer specializing in Next.js and modern web technologies.',
}

export default function Home({ searchParams }: { searchParams: { lang?: string } }) {
  const lang = searchParams.lang || 'ar' as any;

  return (
    <LanguageProvider initialLang={lang}>
      <main className={`min-h-screen ${lang !== 'ar' ? 'ltr' : 'rtl'}`}>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
        <ScrollToTopButton />
      </main>
    </LanguageProvider>
  )
}

