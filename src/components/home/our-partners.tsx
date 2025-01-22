import Image from 'next/image'
import { useTranslations } from 'next-intl'

import BlockLayout from '@/components/shared/block-layout'
import Arrow from '@/components/ui/icons/arrow'

const partners = [
  {
    title: 'International Inclusion Foundation',
    image: '/images/partners/iif.png',
    href: 'https://iif-inclusion.org/',
  },
  {
    title: 'SEB',
    image: '/images/partners/seb.png',
    href: '',
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
      <div className="flex flex-1 flex-col items-center gap-6 lg:flex-row lg:items-stretch">
        {partners.map((partner) => {
          return (
            <a
              className="relative flex h-[250px] w-full items-center justify-center rounded-3xl bg-[#F3EFF9] p-6 md:h-[300px] md:w-[280px]"
              href={partner.href}
              key={partner.title}
              target="_blank"
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

              <Arrow className="absolute bottom-6 right-6 size-5 md:bottom-4 md:right-4" />
            </a>
          )
        })}
      </div>
    </BlockLayout>
  )
}
