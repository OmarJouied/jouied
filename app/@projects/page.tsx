import Projects from "../components/Projects";
import { LanguageProvider } from "../contexts/LanguageContext";
import { getProjects } from "../lib/getProjects";

export default async function ProjectsPage({ searchParams }: { searchParams: { lang?: string; open: string; } }) {
  const lang = searchParams.lang || 'ar' as any;
  const open = searchParams.open || 'ar' as any;
  const projects = await getProjects(lang);

  return (
    <LanguageProvider initialLang={lang}>
      <Projects projects={projects} />
      {open && <h1>open</h1>}
    </LanguageProvider>
  )
}

