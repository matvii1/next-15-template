'use client'

import { ArrowRight } from 'lucide-react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRef, useState } from 'react'

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
    <motion.div>
      <motion.section
        animate="visible"
        className={cn(
          'fixed inset-x-0 z-50 flex h-[70px] w-full items-center border-b bg-white transition-all duration-500 md:h-[107px]',
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
              height={500}
              src={'/images/logos/logo-orange.png'}
              width={500}
            />
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-4 rounded-full border border-grey-stroke p-4 px-8">
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
          <div className="hidden items-center gap-2 divide-x divide-gray-300 lg:flex">
            <Link
              className={cn(
                'group/interactive relative block w-auto cursor-pointer overflow-hidden rounded-full border border-gray-200 bg-orange p-2 px-6 text-center text-base font-bold text-white'
              )}
              href={'/'}
            >
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-white transition-all duration-300 md:group-hover/interactive:scale-[100.8]"></div>
                <span className="inline-block transition-all duration-300 md:group-hover/interactive:translate-x-12 md:group-hover/interactive:opacity-0">
                  Підтримати
                </span>
              </div>

              <div className="absolute top-0 z-10 flex size-full translate-x-12 items-center justify-center gap-2 text-base font-bold text-orange opacity-0 transition-all duration-300 md:group-hover/interactive:-translate-x-5 md:group-hover/interactive:opacity-100">
                <span>Підтримати</span>
                <ArrowRight />
              </div>
            </Link>

            <LocaleSwitcherSelect />
          </div>

          <MobileMenu />
        </div>
      </motion.section>
      <div className="h-[70px] md:h-[107px]"></div>
    </motion.div>
  )
}
