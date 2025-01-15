'use client'

import { useTranslations } from 'next-intl'

import BackButton from '@/components/shared/back-button'
import NewsCard from '@/components/shared/news-card'
import { news } from '@/data/news'
import { capitalizeFirstLetter } from '@/lib/utils'

export default function NewsPage(): React.JSX.Element {
  const t = useTranslations('shared')

  return (
    <div className="container mt-10">
      <BackButton />

      <p className="mt-4 font-noto text-2xl font-bold md:text-4xl">
        {capitalizeFirstLetter(t('news'))}
      </p>

      <div className="mt-10 grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-4">
        {news.map((item) => {
          return <NewsCard item={item} key={item.id} />
        })}
      </div>
    </div>
  )
}
