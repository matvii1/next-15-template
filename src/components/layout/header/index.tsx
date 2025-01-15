'use client'

import { useMotionValueEvent, useScroll } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRef, useState } from 'react'

import { Messages } from '@/i18n/types'
import { cn } from '@/lib/utils'

import LocaleSwitcherSelect from './locale-select'

const links: {
  label: keyof Messages['shared']
  href: string
}[] = [
  {
    label: 'about',
    href: '/#about',
  },
  {
    label: 'news',
    href: '/news',
  },
  {
    label: 'team',
    href: '/#team',
  },
  {
    label: 'goals',
    href: '/#goals',
  },
]

export default function Header(): React.JSX.Element {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const lastRef = useRef(0)

  useMotionValueEvent(scrollY, 'change', (current) => {
    const diff = current - lastRef.current

    if (scrollY.get() < 100) {
      setHidden(false)
      lastRef.current = current

      return
    }

    if (Math.abs(diff) > 10) {
      setHidden(diff > 0)
    }

    lastRef.current = current
  })

  const t = useTranslations('shared')

  return (
    <>
      <section
        className={cn(
          'fixed inset-x-0 z-50 h-[107px] w-full border-b bg-white py-6 transition-all duration-500',
          {
            'top-0': !hidden,
            '-top-[100%]': hidden,
          }
        )}
      >
        <div className="container flex items-center justify-between">
          <Image
            alt="logo"
            className="h-[52px] w-[140px] object-cover"
            height={500}
            src={'/images/logos/logo-orange.png'}
            width={500}
          />
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
      <div className="h-[107px]"></div>
    </>
  )
}
