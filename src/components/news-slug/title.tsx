import { useLocale } from 'next-intl'

import { NewsItem } from '@/data/news'
import { Locale } from '@/i18n/routing'

interface NewsTitleProps {
  newsItem: NewsItem
}

export default function NewsTitle({ newsItem }: NewsTitleProps): React.JSX.Element {
  const locale = useLocale() as Locale

  return (
    <h1 className="mb-4 mt-5 text-3xl font-bold tracking-tight md:text-4xl">
      {newsItem.translations[locale].title}
    </h1>
  )
}
