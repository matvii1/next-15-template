import { useTranslations } from 'next-intl'

import { Link } from '@/i18n/routing'

export default function NotFound(): React.JSX.Element {
  const t = useTranslations()
  return (
    <div className="flex h-[80dvh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold text-orange">{t('errors.notFound')}</h1>

        <Link
          className="inline-block rounded-xl bg-orange p-2 font-semibold uppercase text-white transition-colors duration-300 hover:bg-orange/80"
          href={'/'}
        >
          {t('shared.home')}
        </Link>
      </div>
    </div>
  )
}
