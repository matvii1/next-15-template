import Image from 'next/image'
import { useTranslations } from 'next-intl'

import BlockLayout from '@/components/shared/block-layout'
import Arrow from '@/components/ui/icons/arrow'

const partners = [
  {
    title: 'International Inclusion Foundation',
    image: '/images/partners/iif.png',
    href: '/',
  },
  {
    title: 'SEB',
    image: '/images/partners/seb.png',
    href: '/',
  },
]

export default function OurPartners(): React.JSX.Element {
  const t = useTranslations('homepage.our-partners')

  return (
    <BlockLayout
      description={t('description')}
      id="partners"
      subtitle={t('subtitle')}
      title={t('title')}
    >
      <div className="flex flex-1 flex-col items-center gap-6 md:flex-row">
        {partners.map((partner) => {
          return (
            <div
              className="relative flex h-[250px] w-full items-center justify-center rounded-3xl bg-[#F3EFF9] p-6 md:h-[300px] md:w-[280px]"
              key={partner.title}
            >
              <div className="flex flex-col items-center gap-2">
                <Image
                  alt={partner.title}
                  className="w-[130px] md:w-[170px]"
                  height={200}
                  src={partner.image}
                  width={200}
                />
                <p className="text-center text-xl font-bold">{partner.title}</p>
              </div>

              <a className="absolute bottom-2 right-2 cursor-pointer p-1" href="#">
                <Arrow className="size-5" />
              </a>
            </div>
          )
        })}
      </div>
    </BlockLayout>
  )
}
