import { Poppins, Ubuntu } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

import './globals.css'
import { cn } from '@/lib/utils'

import type { ReactNode } from 'react'

const UbuntuFont = Ubuntu({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-ubuntu',
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
}

export default async function RootLayout({ children }: Props) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={cn(
          `overflow-x-hidden antialiased`,
          PoppinsFont.className,
          UbuntuFont.variable
        )}
      >
        <NextTopLoader height={5} showSpinner={false} />
        <main className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  )
}
