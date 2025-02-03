import Contact from "../components/Contact";
import { LanguageProvider } from "../contexts/LanguageContext";

export default async function ContactPage({ searchParams }: { searchParams: { lang?: string } }) {
  const lang = searchParams.lang || 'ar' as any;

  return (
    <LanguageProvider initialLang={lang}>
      <Contact />
    </LanguageProvider>
  )
}

