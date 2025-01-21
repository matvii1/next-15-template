'use client'

import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRef, useState } from 'react'

import SupportButton from '@/components/ui/support-button'
import { Messages } from '@/i18n/types'
import { cn } from '@/lib/utils'

import LocaleSwitcherSelect from './locale-select'
import MobileMenu from './mobile-menu'

export const links: {
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
    <div>
      <motion.section
        animate="visible"
        className={cn(
          'fixed inset-x-0 z-50 flex h-[70px] w-full items-center border-b bg-white transition-all duration-500 md:h-[84px]',
          {
            'top-0': !hidden,
            '-top-[100%]': hidden,
          }
        )}
        initial="hidden"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <Image
              alt="logo"
              className="h-[32px] w-[80px] object-cover md:h-[52px] md:w-[140px]"
              height={200}
              src={'/images/logos/logo-orange.png'}
              width={534}
            />
          </Link>
          <nav className="left-1/2 hidden lg:block xl:absolute xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2">
            <ul className="flex items-center gap-4 rounded-full border border-grey-stroke p-3 px-8">
              {links.map((item) => {
                return (
                  <li key={item.href}>
                    <Link className="transition-all hover:text-orange" href={item.href}>
                      {t(item.label)}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="hidden items-center gap-2 divide-gray-300 lg:flex">
            <SupportButton variant="small" />

            <div className="h-[32px] w-px bg-gray-200"></div>

            <div className="shrink-0">
              <LocaleSwitcherSelect />
            </div>
          </div>

          <MobileMenu />
        </div>
      </motion.section>
      <div className="h-[70px] md:h-[107px]"></div>
    </div>
  )
}
