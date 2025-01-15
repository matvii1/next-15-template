'use client'

import { useScroll, motion, useTransform, useSpring } from 'motion/react'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import ShapeWheel from '@/components/ui/shapes/shape-wheel'

export default function AboutUs(): React.JSX.Element {
  const t = useTranslations()
  const target = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target,
    offset: ['start end', 'end start'],
  })

  const spring = useSpring(scrollYProgress, { stiffness: 100, damping: 12 })

  const rotate = useTransform(spring, [0, 1], [0, 360])
  const move = useTransform(spring, [0, 1], ['0%', '350%'])

  return (
    <div className="space-y-5" id="about">
      <h2 className="font-noto text-4xl font-bold">{t('homepage.about.title')}</h2>

      <div className="flex items-stretch gap-8">
        <div className="h-[400px] flex-1 rounded-2xl bg-light-orange"></div>

        <div className="flex min-h-full flex-1 flex-col justify-between">
          <div>
            <p className="font-bold">
              <span className="rounded-md bg-green p-1 px-1.5 font-bold uppercase text-white">
                {t('shared.mamaPoruch')}
              </span>{' '}
              —{' '}
              <span className="text-orange">
                {t('homepage.about.description.subdescription')}
              </span>
            </p>
            <span className="mt-2 inline-block text-justify">
              {t('homepage.about.description.content')}
            </span>
          </div>

          <motion.div
            className="size-[100px]"
            ref={target}
            style={{ rotate: rotate, translateX: move }}
          >
            <ShapeWheel className="-bottom-5 left-10 w-[100px] text-pink" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
