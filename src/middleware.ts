import { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { routing } from './i18n/routing'

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware(routing)

  const response = handleI18nRouting(request)
  return response
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(ua|en)/:path*',
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
}
