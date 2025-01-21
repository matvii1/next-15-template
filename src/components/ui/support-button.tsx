import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { cn } from '@/lib/utils'

interface SupportButtonProps {
  variant?: 'default' | 'small'
}

export default function SupportButton({
  variant = 'default',
}: SupportButtonProps): React.JSX.Element {
  const t = useTranslations('shared')

  const tLong = t('support-long')
  const tShort = t('support-short')

  const variantText = variant === 'small' ? tShort : tLong

  return (
    <div
      className={cn(
        'group/interactive relative w-auto cursor-pointer overflow-hidden rounded-full border border-white bg-orange p-2 px-6 text-center text-xl font-bold text-white hover:border-orange md:text-2xl',
        {
          'text-base md:text-base': variant === 'small',
        }
      )}
    >
      <div className="flex items-center gap-2">
        <div className="size-2 shrink-0 rounded-full bg-white transition-all duration-300 md:group-hover/interactive:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 md:group-hover/interactive:translate-x-12 md:group-hover/interactive:opacity-0">
          {variantText}
        </span>
      </div>

      <div
        className={cn(
          'absolute top-0 z-10 flex size-full translate-x-12 items-center justify-center gap-2 text-2xl font-bold text-orange opacity-0 transition-all duration-300 md:group-hover/interactive:-translate-x-5 md:group-hover/interactive:opacity-100',
          {
            'text-base': variant === 'small',
          }
        )}
      >
        <span>{variantText}</span>
        <ArrowRight />
      </div>
    </div>
  )
}
