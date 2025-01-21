'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import SocialLinks from '@/components/shared/social-links'
import { Messages } from '@/i18n/types'
import { capitalizeFirstLetter } from '@/lib/utils'

const footerNavigation: {
  title: keyof Messages['shared']
  links: {
    title: string
    href: string | keyof Messages['shared']
    translate?: boolean
  }[]
}[] = [
  {
    title: 'contacts',
    links: [
      {
        title: 'go.mama.poruch@gmail.com',
        href: 'mailto:go.mama.poruch@gmail.com',
        translate: false,
      },
      {
        title: '+380 99 999 99 99',
        href: 'tel:+380999999999',
        translate: false,
      },
    ],
  },
  {
    title: 'documents',
    links: [
      {
        title: 'documents',
        href: '/documents',
        translate: true,
      },
    ],
  },
  {
    title: 'about-us',
    links: [
      {
        title: 'about',
        href: '/about',
        translate: true,
      },
      {
        title: 'team',
        href: '/team',
        translate: true,
      },
      {
        title: 'goals',
        href: '/goals',
        translate: true,
      },
      {
        title: 'news',
        href: '/news',
        translate: true,
      },
    ],
  },
]

export default function Footer(): React.JSX.Element {
  const t = useTranslations('shared')
  const tFooter = useTranslations('footer')

  return (
    <footer className="mt-[130px] p-2">
      <div className="flex flex-col rounded-3xl border border-grey-stroke p-3 lg:h-[400px]">
        <div className="container mt-[30px] grid flex-1 grid-cols-1 gap-y-10 lg:grid-cols-12">
          <div className="col-span-full lg:col-span-3">
            <Image
              alt="logo"
              className="w-[280px]"
              height={500}
              src={'/images/logos/logo-orange.png'}
              width={500}
            />
          </div>

          <div className="col-span-full flex flex-col justify-between gap-5 md:flex-row lg:col-start-5 xl:col-start-7">
            {footerNavigation.map((item) => {
              return (
                <div key={item.title}>
                  <p className="text-2xl font-bold">
                    {capitalizeFirstLetter(t(item.title))}
                  </p>
                  <ul className="mt-2 flex flex-col gap-2 md:mt-6 md:gap-4">
                    {item.links.map((link) => {
                      return (
                        <li key={link.href}>
                          <a
                            className="transition-colors hover:text-orange"
                            href={link.href}
                          >
                            {link.translate ? t(link.title as never) : link.title}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
          <p className="col-span-6">{tFooter('description')}</p>
        </div>

        <p className="container mt-10 rounded-full text-center text-sm md:hidden">
          {tFooter('copyright', { year: new Date().getFullYear() })}
        </p>

        <div className="container mt-4 flex justify-center self-end rounded-full border border-grey-stroke p-2.5 px-4 md:justify-between">
          <p className="hidden rounded-full text-sm md:block">
            {tFooter('copyright', { year: new Date().getFullYear() })}
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
