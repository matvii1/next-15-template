'use client'

import { useParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useTransition } from 'react'

import UkraineFlag from '@/components/ui/icons/ukraine'
import UsaFlag from '@/components/ui/icons/usa'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Locale, routing, usePathname, useRouter } from '@/i18n/routing'

const flagMap: Record<Locale, React.ReactNode> = {
  en: <UsaFlag />,
  ua: <UkraineFlag />,
}

export default function LocaleSwitcherSelect() {
  const locale = useLocale()
  const t = useTranslations('inputs')

  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(value: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: value }
      )
    })
  }

  return (
    <Select defaultValue={locale} disabled={isPending} onValueChange={onSelectChange}>
      <SelectTrigger className="w-full min-w-[150px]">
        <div className="flex items-center gap-2">
          {flagMap[locale as Locale]}
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent id="locale-switcher">
        {routing.locales.map((cur) => (
          <SelectItem customItemIndicator={flagMap[cur as Locale]} key={cur} value={cur}>
            {t(`locales.${cur}`)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
