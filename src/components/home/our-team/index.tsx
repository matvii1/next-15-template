import { useTranslations } from 'next-intl'

import BlockLayout from '@/components/shared/block-layout'

import MemberCard from './member-card'

export default function OurTeam(): React.JSX.Element {
  const t = useTranslations('homepage.our-team')
  const membersArray = ['yaroslava', 'mihail'] as const

  return (
    <BlockLayout
      description={t('description')}
      subtitle={t('subtitle')}
      title={t('title')}
    >
      <div className="flex flex-1 items-center gap-6">
        {membersArray.map((memberKey) => {
          return (
            <MemberCard
              description={t(`members.${memberKey}.description`)}
              key={memberKey}
              name={t(`members.${memberKey}.name`)}
            />
          )
        })}
      </div>
    </BlockLayout>
  )
}
