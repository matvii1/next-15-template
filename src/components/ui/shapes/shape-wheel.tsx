import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export default function ShapeWheel({
  className,
  ...props
}: ComponentProps<'svg'>): React.JSX.Element {
  return (
    <svg
      className={cn('fill-none', className)}
      viewBox="0 0 103 103"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M51.5 0L51.51 51.4493L71.2083 3.92019L51.5287 51.4572L87.9159 15.084L51.5428 51.4713L99.0798 31.7917L51.5507 51.49L103 51.5L51.5507 51.51L99.0798 71.2083L51.5428 51.5287L87.9159 87.9159L51.5287 51.5428L71.2083 99.0798L51.51 51.5507L51.5 103L51.49 51.5507L31.7917 99.0798L51.4713 51.5428L15.084 87.9159L51.4572 51.5287L3.92019 71.2083L51.4493 51.51L0 51.5L51.4493 51.49L3.92019 31.7917L51.4572 51.4713L15.084 15.084L51.4713 51.4572L31.7917 3.92019L51.49 51.4493L51.5 0Z"
        fill=""
        stroke="#4F4F4F"
        strokeWidth="4"
      />
    </svg>
  )
}
