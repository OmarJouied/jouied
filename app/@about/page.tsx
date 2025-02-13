import About from "../components/About";
import { Language, LanguageProvider } from "../contexts/LanguageContext";
import { getAbout } from "../lib/getAbout";

export default async function AboutPage({ searchParams }: { searchParams: Promise<{ lang?: Language; }> }) {
  const lang = (await searchParams).lang || 'ar' as Language;
  const about = await getAbout(lang);

  return (
    <LanguageProvider initialLang={lang}>
      <About about={about} />
    </LanguageProvider>
  )
}

