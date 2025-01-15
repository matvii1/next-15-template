'use client'

import { useTranslations } from 'next-intl'

import { cn } from '@/lib/utils'

import SocialLinks from '../shared/social-links'
import ShapeRound from '../ui/shapes/shape-round'
import ShapeTree from '../ui/shapes/shape-tree'

export default function Hero(): React.JSX.Element {
  const t = useTranslations('homepage.hero')

  return (
    <div className="relative mt-20 h-[500px] overflow-hidden bg-pink p-3">
      <div className="flex h-full flex-col items-center justify-between rounded-2xl bg-white py-10">
        <h1 className="mx-auto mt-[50px] max-w-[60%] space-x-3 text-center font-noto text-5xl">
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

      <ShapeTree className="absolute -bottom-5 left-10 w-[100px] text-pink" />
      <ShapeRound className="absolute -right-2 -top-2 w-[80px] text-pink" />
    </div>
  )
}
