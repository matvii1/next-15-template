'use client'

import { useScroll, useSpring, useTransform } from 'motion/react'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import Arrow from '@/components/ui/icons/arrow'
import ShapeCloud from '@/components/ui/shapes/shape-cloud'

export default function Goals(): React.JSX.Element {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const springValue = useSpring(scrollYProgress, { stiffness: 100, damping: 10 })
  const cloudAnimationRotate = useTransform(springValue, [0, 1], [0, 360])

  const t = useTranslations('homepage.goals')
  const goalKeys = [
    'goal1',
    'goal2',
    'goal3',
    'goal4',
    'goal5',
    'goal6',
    'goal7',
  ] as const

  return (
    <div className="container relative flex gap-6" id="goals">
      <div className="flex-1 space-y-5">
        <p className="font-noto text-2xl font-bold md:text-4xl">{t('title')}</p>
        <ul className="flex flex-col gap-4">
          {goalKeys.map((goalKey, i) => (
            <motion.li
              className="flex items-center gap-3"
              initial="hidden"
              key={goalKey}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 100,
                    delay: i * 0.1,
                    duration: 0.1,
                  },
                },
              }}
              viewport={{ once: true }}
              whileInView="visible"
            >
              <Arrow className="size-6 shrink-0" />
              <p className="text-base lg:text-lg">{t(`goals.${goalKey}`)}</p>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="hidden min-h-full w-max md:block">
        <motion.div
          className="sticky top-[200px]"
          ref={targetRef}
          style={{ rotate: cloudAnimationRotate }}
        >
          <ShapeCloud />
        </motion.div>
      </div>

      <motion.div
        className="absolute right-5 top-0 md:hidden"
        ref={targetRef}
        style={{ rotate: cloudAnimationRotate }}
      >
        <ShapeCloud className="size-[44px]" />
      </motion.div>
    </div>
  )
}
