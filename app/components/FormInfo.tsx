"use client"

import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { languages } from './LanguageSwitcher'
import { Button } from '@/components/ui/button'
import { ReactNode, useActionState, useMemo } from 'react'
import { links } from '../contants'
import { notFound } from 'next/navigation'
import actionInfo from '../actions/action-info'

export default function FormInfo({ target, children }: { target: string; children: ReactNode }) {
  const [targetSimplify] = useMemo(() => target.split('-'), []);
  const [state, action, isPending] = useActionState(actionInfo, { error: "error", errorTextarea: "", target: targetSimplify });
  console.log({ targetSimplify })
  if (!links.slice(0, -1).find(link => link.href.slice(1) === targetSimplify)) {
    notFound();
  }

  return (
    <div className={`min-h-screen container mx-auto px-4 lg:px-8 py-3 lg:py-6 flex flex-col`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center font-heading text-white capitalize">{targetSimplify} form</h2>
      <form action={action} className="text-base md:text-lg max-w-3xl mx-auto text-center text-gray-300 flex flex-col gap-4 flex-1 w-full">
        <Label>
          <Select defaultValue={'ar'} name='lang'>
            <SelectTrigger>
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent className='bg-gray-900'>
              <SelectGroup>
                <SelectLabel></SelectLabel>
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
        {children}
        <Button type='submit' disabled={isPending}>
          save
        </Button>
      </form>
    </div>
  )
}

