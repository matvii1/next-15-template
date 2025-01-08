import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export default function Twitter({
  className,
  ...props
}: ComponentProps<'svg'>): React.JSX.Element {
  return (
    <svg
      className={cn('size-[14px] fill-none', className)}
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.025 0.655998H13.172L8.482 6.03L14 13.344H9.68L6.294 8.909L2.424 13.344H0.275L5.291 7.594L0 0.656998H4.43L7.486 4.71L11.025 0.655998ZM10.27 12.056H11.46L3.78 1.877H2.504L10.27 12.056Z"
        fill="currentColor"
      />
    </svg>
  )
}
