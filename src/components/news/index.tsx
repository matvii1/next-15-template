import { useTranslations } from 'next-intl'

import { news } from '@/data/news'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'

import NewsCard from '../shared/news-card'
import Arrow from '../ui/icons/arrow'

export default function News(): React.JSX.Element {
  const t = useTranslations('homepage.news')

  return (
    <div className="container space-y-10">
      <div>
        <p className="text-sm font-bold text-orange">{t('subtitle')}</p>
        <p className="font-noto text-2xl font-bold md:text-4xl">{t('title')}</p>
      </div>

      <ul className="flex flex-col gap-4 md:flex-row">
        {news.slice(0, 3).map((item) => {
          return <NewsCard item={item} key={item.id} />
        })}
      </ul>

      <div className="flex justify-end">
        <Link
          className={cn(
            'flex w-max items-center gap-[2px] rounded-full border border-orange px-2 py-1 text-sm font-medium text-orange'
          )}
          href="/news"
        >
          <span>{t('viewAll')}</span>
          <Arrow className="size-5" />
        </Link>
      </div>
    </div>
  )
}
