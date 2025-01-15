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
      <div className="flex-1 space-y-10">
        <p className="font-noto text-2xl font-bold md:text-4xl">{t('title')}</p>
        <motion.ul
          className="flex flex-col gap-4"
          initial="hidden"
          variants={{
            hidden: {},
            visible: {
              transition: {
                type: 'spring',
                stiffness: 100,
                staggerChildren: 0.2,
              },
            },
          }}
          viewport={{ once: true }}
          whileInView="visible"
        >
          {goalKeys.map((goalKey) => (
            <motion.li
              className="flex items-center gap-3"
              key={goalKey}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Arrow className="size-6 shrink-0" />
              <p className="text-base lg:text-lg">{t(`goals.${goalKey}`)}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="hidden min-h-full w-max md:block">
        <motion.div
          className="top-[200px]"
          ref={targetRef}
          style={{ rotate: cloudAnimationRotate }}
        >
          <ShapeCloud />
        </motion.div>
      </div>
      <motion.div
        className="absolute right-5 top-0"
        ref={targetRef}
        style={{ rotate: cloudAnimationRotate }}
      >
        <ShapeCloud className="size-[44px]" />
      </motion.div>
    </div>
  )
}
