import Projects from "../components/Projects";
import { Language, LanguageProvider } from "../contexts/LanguageContext";
import { getProjects } from "../lib/getProjects";

export default async function ProjectsPage({ searchParams }: { searchParams: Promise<{ lang?: Language; open: string; }> }) {
  const lang = (await searchParams).lang || 'ar' as Language;
  const open = (await searchParams).open;
  const projects = await getProjects(lang);

  return (
    <LanguageProvider initialLang={lang}>
      <Projects projects={projects} />
      {/* {open && <h1>open</h1>} */}
    </LanguageProvider>
  )
}

