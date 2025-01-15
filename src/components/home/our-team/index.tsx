import * as motion from 'motion/react-client'
import { useTranslations } from 'next-intl'

import BlockLayout from '@/components/shared/block-layout'
import ShapeHalfCircle from '@/components/ui/shapes/shape-half-circle'

import MemberCard from './member-card'

export default function OurTeam(): React.JSX.Element {
  const t = useTranslations('homepage.our-team')
  const membersArray = ['yaroslava', 'mihail'] as const

  return (
    <BlockLayout
      description={t('description')}
      id="team"
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

      <motion.div
        className="absolute bottom-0 left-4 size-[100px] cursor-pointer"
        transition={{
          type: 'spring',
          damping: 8,
        }}
        viewport={{ once: true }}
        whileInView={{
          rotate: [-120, -45, 0],
        }}
        whileTap={{
          rotate: [0, 360],
        }}
      >
        <ShapeHalfCircle />
      </motion.div>
    </BlockLayout>
  )
}
