import { format } from 'date-fns'
import { enUS, uk } from 'date-fns/locale'
import { Calendar, Clock } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

import { Locale } from '@/i18n/routing'
import { capitalizeFirstLetter, cn } from '@/lib/utils'

export function CalendarDate({
  date,
  className,
}: {
  date: string
  className?: string
}): React.JSX.Element {
  const locale = useLocale() as Locale

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Calendar className="size-4" />
      <time dateTime={date}>
        {capitalizeFirstLetter(
          format(new Date(date), 'MMMM d, yyyy', {
            locale: locale === 'en' ? enUS : uk,
          })
        )}
      </time>
    </div>
  )
}

export function ClockTime({
  readTime,
  className,
}: {
  readTime: number
  className?: string
}): React.JSX.Element {
  const t = useTranslations('shared')

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Clock className="size-4" />
      <span>
        {readTime} {t('minutes')}
      </span>
    </div>
  )
}
