import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'

import BaseLayout from '@/components/layout/base-layout'
import { Locale, routing } from '@/i18n/routing'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = params

  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  // enable static rendering
  setRequestLocale(locale)

  return <BaseLayout locale={locale}>{children}</BaseLayout>
}
