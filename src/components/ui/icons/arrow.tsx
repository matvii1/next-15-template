import { cn } from '@/lib/utils'

export default function Arrow({ className }: { className?: string }): React.JSX.Element {
  return (
    <svg
      className={cn('size-4', className)}
      fill="none"
      height="19"
      viewBox="0 0 20 19"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.44437 14.8801L14.6798 3.95679"
        stroke="#EB6225"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M15.3224 11.6586L14.9723 3.64467L6.43372 4.36931"
        stroke="#EB6225"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}
