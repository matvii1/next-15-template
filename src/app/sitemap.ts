import { MetadataRoute } from 'next'

import { news } from '@/data/news'
import { routing } from '@/i18n/routing'

type SitemapPage = {
  path: string
  changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority?: number
}

function generateSitemapEntry(page: SitemapPage): MetadataRoute.Sitemap[0][] {
  return routing.locales.map((language) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/${language}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency || 'monthly',
    priority: page.priority || 0.5,
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/news']

  const pages: SitemapPage[] = staticPages.map((page) => ({
    path: page,
    priority: 1,
    changeFrequency: 'monthly',
  }))

  const dynamicPages: SitemapPage[] = news.map((newsItem) => ({
    path: `/news/${newsItem.slug}`,
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  return [...pages, ...dynamicPages].flatMap(generateSitemapEntry)
}
