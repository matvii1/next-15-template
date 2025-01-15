'use client'

import { Download } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'

import TreeArrowSingle from '@/components/ui/shapes/shape-tree-arrow-single'
import { cn } from '@/lib/utils'

export default function Reports(): React.JSX.Element {
  const t = useTranslations('homepage.reports')

  return (
    <div className="relative flex min-h-[200px] gap-10">
      <div className="basis-3/5">
        <p className="text-sm font-bold text-orange">{t('subtitle')}</p>
        <p className="font-noto text-4xl font-bold">{t('title')}</p>
      </div>

      <ul className="flex basis-2/5 flex-col gap-4">
        {new Array(2).fill(0).map((_, i) => (
          <li
            className={cn(
              'flex max-w-[450px] items-center justify-between gap-2 rounded-2xl border border-grey-stroke bg-transparent px-6 py-4 text-2xl',
              {
                'bg-[#F6BE59]': i === 1,
              }
            )}
            key={i}
          >
            <p>{t('buttonText', { year: 2024 })}</p>
            <Download />
          </li>
        ))}
      </ul>

      <div className="absolute bottom-0 left-0 flex items-center">
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
    </div>
  )
}
