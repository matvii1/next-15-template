import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mama Poruch',
  description:
    'We unite the education system with the family institute for the benefit of every child',
  alternates: {
    canonical: 'https://mama-poruch.org',
    languages: {
      'uk-UA': '/ua',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'Mama Poruch',
    description:
      'We unite the education system with the family institute for the benefit of every child',
    url: 'https://mama-poruch.org',
    siteName: 'Mama Poruch',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: '/images/logos/logo-orange.png',
        width: 500,
        height: 300,
        alt: 'Mama Poruch',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
