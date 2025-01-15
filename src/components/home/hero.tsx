'use client'

import { useTranslations } from 'next-intl'

import { cn } from '@/lib/utils'

import SocialLinks from '../shared/social-links'
import ShapeRound from '../ui/shapes/shape-round'
import ShapeTree from '../ui/shapes/shape-tree'

export default function Hero(): React.JSX.Element {
  const t = useTranslations('homepage.hero')

  return (
    <div className="sm:container md:mt-20">
      <div className="relative mx-auto overflow-hidden bg-pink p-3">
        <div className="flex h-full min-h-[400px] flex-col items-center justify-between rounded-2xl bg-white px-3 py-4 lg:min-h-[500px] lg:p-10">
          <h1 className="mx-auto mt-[50px] space-x-3 text-center font-noto text-2xl md:text-3xl lg:max-w-[60%] lg:text-5xl">
            {t('title')
              .split(' ')
              .map((word, index) => (
                <span
                  className={cn('inline-block', {
                    'font-bold text-orange': index === 1,
                  })}
                  key={index}
                >
                  {word}
                </span>
              ))}
          </h1>

          <div className="flex flex-col items-center gap-4">
            <a className="text-sm underline" href="mailto:go.mama.poruch@gmail.com">
              go.mama.poruch@gmail.com
            </a>

            <SocialLinks />
          </div>
        </div>

        <ShapeTree className="absolute -bottom-0 left-5 w-[40px] text-pink md:-bottom-5 md:left-10 md:w-[100px]" />
        <ShapeRound className="absolute right-0 top-0 w-[30px] text-pink md:-right-2 md:-top-2 md:w-[80px]" />
      </div>
    </div>
  )
}
