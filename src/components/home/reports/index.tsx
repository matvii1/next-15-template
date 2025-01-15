'use client'

import { Download } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'

import TreeArrowSingle from '@/components/ui/shapes/shape-tree-arrow-single'
import { cn } from '@/lib/utils'

export default function Reports(): React.JSX.Element {
  const t = useTranslations('homepage.reports')

  return (
    <div className="container relative flex min-h-[200px] flex-col gap-10 md:flex-row">
      <div className="basis-3/5">
        <p className="text-sm font-bold text-orange">{t('subtitle')}</p>
        <p className="font-noto text-2xl font-bold md:text-4xl">{t('title')}</p>
      </div>

      <ul className="flex basis-2/5 flex-col gap-2 lg:gap-4">
        {new Array(2).fill(0).map((_, i) => (
          <li
            className={cn(
              'flex max-w-[450px] items-center justify-between gap-2 rounded-2xl border border-grey-stroke bg-transparent px-3 py-2 lg:px-6 lg:py-4',
              {
                'bg-[#F6BE59]': i === 1,
              }
            )}
            key={i}
          >
            <p className="text-lg lg:text-2xl">{t('buttonText', { year: 2024 })}</p>
            <Download className="shrink-0" />
          </li>
        ))}
      </ul>

      <div className="absolute bottom-0 left-0 hidden items-center md:flex">
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            animate={{ x: 20, opacity: [1, 0] }}
            initial={{ x: -20, opacity: 0 }}
            key={index}
            transition={{
              duration: 3,
              repeatDelay: 2,
              repeat: Infinity,
              delay: index * 0.1,
            }}
          >
            <TreeArrowSingle />
          </motion.div>
        ))}
      </div>
      <div className="flex items-center pl-5 md:hidden">
        {[0, 1, 2, 3].map((index) => (
          <TreeArrowSingle className="-ml-3 size-6 shrink-0" key={index} />
        ))}
      </div>
    </div>
  )
}
