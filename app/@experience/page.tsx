import Experience from "../components/Experience";
import { Language, LanguageProvider } from "../contexts/LanguageContext";
import { getJobs } from "../lib/getJobs";

export default async function ExperiencePage({ searchParams }: { searchParams: Promise<{ lang?: Language; open: string; }> }) {
  const lang = (await searchParams).lang || 'ar' as Language;
  const open = (await searchParams).open;
  const jobs = await getJobs(lang);

  return (
    <LanguageProvider initialLang={lang}>
      <Experience jobs={jobs} />
      {/* {open && <h1>open</h1>} */}
    </LanguageProvider>
  )
}

