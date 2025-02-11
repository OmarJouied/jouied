import About from "../components/About";
import AboutForm from "../components/AboutForm";
import { Language, LanguageProvider } from "../contexts/LanguageContext";
import { getAbout } from "../lib/getAbout";

export default async function AboutPage({ searchParams }: { searchParams: Promise<{ lang?: Language; open?: string; }> }) {
  const lang = (await searchParams).lang || 'ar' as Language;
  const open = (await searchParams).open;
  const about = await getAbout(lang);
  console.log({ open, lang })
  return (
    <LanguageProvider initialLang={lang}>
      <About about={about} />
      {open === "about-form-omar" && <AboutForm />}
    </LanguageProvider>
  )
}

