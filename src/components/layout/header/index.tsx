import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { Messages } from '@/i18n/types'

import LocaleSwitcherSelect from './locale-select'

const links: {
  label: keyof Messages['header']
  href: string
}[] = [
  {
    label: 'about',
    href: '/about',
  },
  {
    label: 'news',
    href: '/news',
  },
  {
    label: 'team',
    href: '/team',
  },
  {
    label: 'goals',
    href: '/goals',
  },
]

export default function Header(): React.JSX.Element {
  const t = useTranslations('header')
  return (
    <>
      <section className="fixed inset-x-0 top-0 z-50 w-full border-b bg-white py-6">
        <div className="container flex items-center justify-between">
          <Image alt="logo" height={51} src={'/images/header-logo.svg'} width={136} />

          <nav>
            <ul className="flex items-center gap-4 rounded-full border border-grey-stroke p-4 px-8">
              {links.map((item) => {
                return (
                  <li key={item.href}>
                    <Link href={item.href}>{t(item.label)}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <LocaleSwitcherSelect />
        </div>
      </section>
      <div className="h-[85px]"></div>
    </>
  )
}
