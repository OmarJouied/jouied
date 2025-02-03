import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { LanguageProvider } from "./contexts/LanguageContext";


export default function Home({ searchParams }: { searchParams: { lang?: string } }) {
  const lang = searchParams.lang || 'ar' as any;

  return (
    <LanguageProvider initialLang={lang}>
      <Header />
      <Hero />
      <ScrollToTopButton />
    </LanguageProvider>
  )
}

