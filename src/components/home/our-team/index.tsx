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
      <div className="flex flex-1 flex-col items-center gap-6 md:flex-row">
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
        className="absolute bottom-0 left-4 hidden size-[100px] cursor-pointer md:block"
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
      <ShapeHalfCircle className="absolute right-6 top-8 size-[40px] -scale-x-100 md:hidden" />
    </BlockLayout>
  )
}
