'use client'

import { Label } from '@/components/ui/label'
import { useLanguage } from '../contexts/LanguageContext'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { languages } from './LanguageSwitcher'
import { Button } from '@/components/ui/button'
import { useActionState } from 'react'
import aboutMe from '../actions/about-me'

export default function AboutForm() {
  const { t, language } = useLanguage();
  // const [state, action, isPending] = useActionState(aboutMe, { error: "error", errorTextarea: "" });

  return (
    <div className={`container mx-auto px-4 lg:px-8 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center font-heading text-white">{t('about.title')} Form</h2>
      <form className="text-base md:text-lg max-w-3xl mx-auto text-center text-gray-300 flex flex-col gap-4">
        <Label>
          <Select defaultValue={language || 'ar'}>
            <SelectTrigger>
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent className='bg-gray-900'>
              <SelectGroup>
                <SelectLabel>{t('about.lang-label')}</SelectLabel>
                {
                  languages
                    .map(language => (
                      <SelectItem key={language.name} value={language.code}>{language.name}</SelectItem>
                    ))
                }
              </SelectGroup>
            </SelectContent>
          </Select>
        </Label>
        <Textarea rows={8} placeholder={`${t('about.title')}...`} />
        <Button type='submit'>
          {t('about.save')}
        </Button>
      </form>
    </div>
  )
}

