import Contact from "../components/Contact";
import { Language, LanguageProvider } from "../contexts/LanguageContext";

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ lang?: Language }> }) {
  const lang = (await searchParams).lang || 'ar' as Language;

  return (
    <LanguageProvider initialLang={lang}>
      <Contact />
    </LanguageProvider>
  )
}

