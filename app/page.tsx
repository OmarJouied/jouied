import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { Language, LanguageProvider } from "./contexts/LanguageContext";


export default function Home({ searchParams }: { searchParams: { lang?: Language } }) {
  const lang = searchParams.lang || 'ar' as Language;

  return (
    <LanguageProvider initialLang={lang}>
      <Header />
      <Hero />
      <ScrollToTopButton />
    </LanguageProvider>
  )
}

