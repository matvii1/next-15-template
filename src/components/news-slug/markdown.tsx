import Markdown from 'markdown-to-jsx'
import { useLocale } from 'next-intl'

import { NewsItem } from '@/data/news'
import { Locale } from '@/i18n/routing'

interface MarkdownProps {
  newsItem: NewsItem
}

export default function MarkdownContent({ newsItem }: MarkdownProps): React.JSX.Element {
  const locale = useLocale() as Locale

  return (
    <div className="prose mt-10 max-w-none">
      <Markdown>{newsItem.translations[locale].content}</Markdown>
    </div>
  )
}
