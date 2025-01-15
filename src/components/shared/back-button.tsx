'use client'

import { ArrowLeftIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'

export default function BackButton(): React.JSX.Element {
  const t = useTranslations('shared')

  return (
    <Link
      className={cn(
        'flex w-max items-center gap-[2px] rounded-full border border-orange px-2 py-1 text-sm font-medium text-orange'
      )}
      href={'..'}
    >
      <ArrowLeftIcon className="size-4" />
      <span>{t('back')}</span>
    </Link>
  )
}
