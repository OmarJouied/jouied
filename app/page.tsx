import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { Language, LanguageProvider } from "./contexts/LanguageContext";


export default async function Home({ searchParams }: { searchParams: Promise<{ lang?: Language }> }) {
  const lang = (await searchParams).lang || 'ar' as Language;

  return (
    <LanguageProvider initialLang={lang}>
      <Header />
      <Hero />
      <ScrollToTopButton />
    </LanguageProvider>
  )
}

