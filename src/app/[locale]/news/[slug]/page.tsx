import { notFound } from 'next/navigation'

import MarkdownContent from '@/components/news-slug/markdown'
import NewsTitle from '@/components/news-slug/title'
import BackButton from '@/components/shared/back-button'
import { CalendarDate, ClockTime } from '@/components/shared/time'
import { news } from '@/data/news'
interface NewsPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function NewsPage({
  params,
}: NewsPageProps): Promise<React.JSX.Element> {
  const { slug } = await params
  const foundNews = news.find((item) => item.slug === slug)

  if (!foundNews) {
    return notFound()
  }

  return (
    <article>
      {foundNews.image && <div className="h-[400px] w-full bg-gray-400"></div>}

      <div className="-translate-y-10 rounded-t-2xl bg-white pt-5">
        <div className="container xl:max-w-[1200px]">
          <BackButton />

          <NewsTitle newsItem={foundNews} />

          <div className="flex flex-wrap gap-4 text-slate-500">
            <CalendarDate date={foundNews.date} />

            <ClockTime readTime={foundNews.readTime} />
          </div>

          <MarkdownContent newsItem={foundNews} />
        </div>
      </div>
    </article>
  )
}
