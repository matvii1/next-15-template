import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

const locales = ['en', 'ua'] as const
export type Locale = (typeof locales)[number]

export const routing = defineRouting({
  locales,
  defaultLocale: 'ua',
})

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
