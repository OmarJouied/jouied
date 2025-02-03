import Skills from "../components/Skills";
import { LanguageProvider } from "../contexts/LanguageContext";
import { getSkills } from "../lib/getSkills";

export default async function SkillsPage({ searchParams }: { searchParams: { lang?: string; open: string; } }) {
  const lang = searchParams.lang || 'ar' as any;
  const open = searchParams.open || 'ar' as any;
  const skills = await getSkills();

  return (
    <LanguageProvider initialLang={lang}>
      <Skills skills={skills} />
      {open && <h1>open</h1>}
    </LanguageProvider>
  )
}

