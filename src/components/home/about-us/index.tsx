import { useTranslations } from 'next-intl'

export default function AboutUs(): React.JSX.Element {
  const t = useTranslations()

  return (
    <div className="space-y-5">
      <h2 className="font-noto text-4xl font-bold">{t('homepage.about.title')}</h2>

      <div className="flex gap-8">
        <div className="h-[400px] flex-1 rounded-2xl bg-light-orange"></div>

        <div className="flex-1">
          <p className="font-bold">
            <span className="rounded-md bg-green p-1 px-1.5 font-bold uppercase text-white">
              {t('shared.mamaPoruch')}
            </span>{' '}
            —{' '}
            <span className="text-orange">
              {t('homepage.about.description.subdescription')}
            </span>
          </p>
          <span className="mt-2 inline-block text-justify">
            {t('homepage.about.description.content')}
          </span>

          {/* <ShapeWheel className="-bottom-5 left-10 w-[100px] text-pink" /> */}
        </div>
      </div>
    </div>
  )
}
