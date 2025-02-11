import About from "../components/About";
import AboutForm from "../components/AboutForm";
import { LanguageProvider } from "../contexts/LanguageContext";
import { getAbout } from "../lib/getAbout";

export default async function AboutPage({ searchParams }: { searchParams: { lang?: string; open?: string; } }) {
  const lang = searchParams.lang || 'ar' as any;
  const open = searchParams.open;
  const about = await getAbout(lang);
  console.log({ open, lang })
  return (
    <LanguageProvider initialLang={lang}>
      <About about={about} />
      {open === "about-form-omar" && <AboutForm />}
    </LanguageProvider>
  )
}

