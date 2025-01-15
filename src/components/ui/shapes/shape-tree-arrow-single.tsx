import { cn } from '@/lib/utils'

interface TreeArrowSingleProps {
  className?: string
}

export default function TreeArrowSingle({
  className,
}: TreeArrowSingleProps): React.JSX.Element {
  return (
    <svg
      className={cn('h-[35px] w-[18px] fill-none', className)}
      viewBox="0 0 18 35"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M0.736572 17.5V0L17.4053 17.5L0.736572 35V17.5Z"
        fill="#009676"
        fillRule="evenodd"
      />
    </svg>
  )
}
