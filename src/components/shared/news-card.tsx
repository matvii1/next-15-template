'use client'

import Markdown from 'markdown-to-jsx'
import { motion } from 'motion/react'
import { useLocale } from 'next-intl'

import { NewsItem } from '@/data/news'
import { Link, Locale } from '@/i18n/routing'

import Arrow from '../ui/icons/arrow'

import { CalendarDate, ClockTime } from './time'
interface NewsCardProps {
  item: NewsItem
}

export default function NewsCard({ item }: NewsCardProps): React.JSX.Element {
  const locale = useLocale() as Locale

  return (
    <div
      className="flex h-full min-h-[340px] flex-col justify-between rounded-3xl px-4 py-5 shadow-md"
      key={item.id}
    >
      <div>
        <CalendarDate className="text-gray-500" date={item.date} />

        <Link href={`/news/${item.id}`}>
          <p className="mt-2 text-xl font-bold">{item.translations[locale].title}</p>
        </Link>

        <div className="mt-6 line-clamp-5 text-sm text-slate-500">
          <Markdown>{item.translations[locale].content}</Markdown>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <ClockTime className="text-gray-500" readTime={item.readTime} />

        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href={`/news/${item.slug}`}>
            <Arrow className="size-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
