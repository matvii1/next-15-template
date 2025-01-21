import { Poppins, Ubuntu } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import NextTopLoader from 'nextjs-toploader'
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

import Appear from '../ui/appear'

import Footer from './footer'
import Header from './header'

const NotoSerifFont = Ubuntu({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-noto-serif',
  weight: ['400', '500', '700'],
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
    <html className="scroll-pt-[120px] scroll-smooth" lang={locale}>
      <body
        className={cn(
          `overflow-x-hidden antialiased`,
          PoppinsFont.className,
          NotoSerifFont.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>

          <NextTopLoader color="#F6BE59" height={5} showSpinner={false} />
          <main className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Appear>
              <Footer />
            </Appear>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
