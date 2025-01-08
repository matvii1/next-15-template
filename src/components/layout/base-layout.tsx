import { Noto_Serif, Poppins } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

import Header from './header'

const NotoSerifFont = Noto_Serif({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-noto-serif',
  weight: ['400', '500', '600', '700', '800'],
})

const PoppinsFont = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
  fallback: ['sans-serif'],
})

type Props = {
  children: ReactNode
  locale: string
}

export default async function BaseLayout({ children, locale }: Props) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body
        className={cn(
          `scroll-smooth antialiased`,
          PoppinsFont.className,
          NotoSerifFont.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <footer className="container">footer</footer>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
