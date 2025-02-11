import Skills from "../components/Skills";
import { Language, LanguageProvider } from "../contexts/LanguageContext";
import { getSkills } from "../lib/getSkills";

export default async function SkillsPage({ searchParams }: { searchParams: Promise<{ lang?: Language; open: string; }> }) {
  const lang = (await searchParams).lang || 'ar' as Language;
  const open = (await searchParams).open || 'ar' as Language;
  const skills = await getSkills();

  return (
    <LanguageProvider initialLang={lang}>
      <Skills skills={skills} />
      {open && <h1>open</h1>}
    </LanguageProvider>
  )
}

