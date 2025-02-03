import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Omar Jouied - Software Developer & Web Developer Specialist',
  description: 'Portfolio of Omar Jouied, a software developer and web developer specializing with modern web technologies.',
}

export default function RootLayout({
  children,
  about,
  experience,
  skills,
  projects,
  testimonials,
  contact
}: {
  children: React.ReactNode;
  about: React.ReactNode;
  experience: React.ReactNode;
  skills: React.ReactNode;
  projects: React.ReactNode;
  testimonials: React.ReactNode;
  contact: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <main className="min-h-screen">
          {children}
          <section id="about" className="scroll-mt-8 md:scroll-mt-12 py-16 md:py-20 bg-gray-900">
            {about}
          </section>
          <section id="experience" className="scroll-mt-8 md:scroll-mt-12 py-16 md:py-20 bg-gray-800 overflow-hidden">
            {experience}
          </section>
          <section id="skills" className="scroll-mt-8 md:scroll-mt-12 py-16 md:py-20 bg-gray-900">
            {skills}
          </section>
          <section id="projects" className="scroll-mt-8 md:scroll-mt-12 py-16 md:py-20 bg-gray-800">
            {projects}
          </section>
          <section id="testimonials" className="scroll-mt-8 md:scroll-mt-12 py-16 md:py-20 bg-gray-900">
            {testimonials}
          </section>
          {contact}
        </main>
      </body>
    </html>
  )
}

