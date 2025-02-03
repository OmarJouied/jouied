"use client"

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { languages } from "@/app/components/LanguageSwitcher"

const TestimonialForm = () => {
  const handleSubmit: ((formData: FormData) => void | Promise<void>) = () => {

  }

  return (
    <section className="py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-lg lg:text-4xl text-center mb-8 lg:mb-12">Testimonial Form</h2>
        <form action={handleSubmit} className="flex flex-col gap-4">
          <Select>
            <SelectTrigger className="flex-1 capitalize">
              <SelectValue placeholder={`اختر لغة الكتابة`} />
            </SelectTrigger>
            <SelectContent className="bg-primary">
              <SelectGroup>
                {languages.map(lang => <SelectItem key={lang.code} className="capitalize" value={lang.code}>{lang.name}</SelectItem>)}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input />
          <Input />
          <Textarea rows={8} className="resize-none" />
        </form>
      </div>
    </section>
  )
}

export default TestimonialForm