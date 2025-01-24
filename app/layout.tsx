import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Omar Jouied Portfolio',
  description: 'Web Developer & Next.js Specialist',
}

export default function RootLayout({
  children,
  experience,
}: {
  children: React.ReactNode;
  experience: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <main className="min-h-screen">
          {children}
          {experience}
        </main>
      </body>
    </html>
  )
}

