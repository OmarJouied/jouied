import Testimonials from "../components/Testimonials";
import TestimonialForm from "../components/TestimonialForm";
import { Language, LanguageProvider } from "../contexts/LanguageContext";
import { getTestimonials } from "../lib/getTestimonials";

export default async function TestimonialsPage({ searchParams }: { searchParams: Promise<{ lang?: Language; open: string; }> }) {
  const lang = (await searchParams).lang || 'ar' as Language;
  const open = (await searchParams).open;
  const testimonials = await getTestimonials(lang);

  return (
    <LanguageProvider initialLang={lang}>
      <Testimonials testimonials={testimonials} />
      {open && <TestimonialForm />}
    </LanguageProvider>
  )
}

