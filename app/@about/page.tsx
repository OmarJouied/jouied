import About from "../components/About";
import { LanguageProvider } from "../contexts/LanguageContext";
import { getAbout } from "../lib/getAbout";

export default async function AboutPage({ searchParams }: { searchParams: { lang?: string; open: string; } }) {
  const lang = searchParams.lang || 'ar' as any;
  const open = searchParams.open || 'ar' as any;
  const about = await getAbout(lang);
  console.log({ about, lang })
  return (
    <LanguageProvider initialLang={lang}>
      <About about={about} />
      {open && <h1>open</h1>}
    </LanguageProvider>
  )
}

