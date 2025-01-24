import Experience from "../components/Experience";
import { LanguageProvider } from "../contexts/LanguageContext";
import { getJobs } from "../lib/getJobs";

export default async function ExperiencePage({ searchParams }: { searchParams: { lang?: string } }) {
  const lang = searchParams.lang || 'ar' as any;
  const jobs = await getJobs();

  return (
    <LanguageProvider initialLang={lang}>
      <Experience jobs={jobs} />
    </LanguageProvider>
  )
}

