import Testimonials from "../components/Testimonials";
import { LanguageProvider } from "../contexts/LanguageContext";
import { getTestimonials } from "../lib/getTestimonials";

export default async function TestimonialsPage({ searchParams }: { searchParams: { lang?: string; open: string; } }) {
  const lang = searchParams.lang || 'ar' as any;
  const open = searchParams.open || 'ar' as any;
  const testimonials = await getTestimonials(lang);

  return (
    <LanguageProvider initialLang={lang}>
      <Testimonials testimonials={testimonials} />
      {open && <h1>open</h1>}
    </LanguageProvider>
  )
}

