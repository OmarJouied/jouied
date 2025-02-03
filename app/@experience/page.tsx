import Experience from "../components/Experience";
import { LanguageProvider } from "../contexts/LanguageContext";
import { getJobs } from "../lib/getJobs";

export default async function ExperiencePage({ searchParams }: { searchParams: { lang?: string; open: string; } }) {
  const lang = searchParams.lang || 'ar' as any;
  const open = searchParams.open || 'ar' as any;
  const jobs = await getJobs(lang);

  return (
    <LanguageProvider initialLang={lang}>
      <Experience jobs={jobs} />
      {open && <h1>open</h1>}
    </LanguageProvider>
  )
}

