import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export default function Twitter({
  className,
  ...props
}: ComponentProps<'svg'>): React.JSX.Element {
  return (
    <svg
      className={cn('size-[16px] fill-none', className)}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.5 0.666668H12.5C15.1667 0.666668 17.3333 2.83333 17.3333 5.5V12.5C17.3333 13.7819 16.8241 15.0113 15.9177 15.9177C15.0113 16.8241 13.7819 17.3333 12.5 17.3333H5.5C2.83333 17.3333 0.666664 15.1667 0.666664 12.5V5.5C0.666664 4.21812 1.17589 2.98874 2.08231 2.08232C2.98874 1.17589 4.21812 0.666668 5.5 0.666668ZM5.33333 2.33333C4.53768 2.33333 3.77462 2.64941 3.21201 3.21201C2.6494 3.77462 2.33333 4.53768 2.33333 5.33333V12.6667C2.33333 14.325 3.675 15.6667 5.33333 15.6667H12.6667C13.4623 15.6667 14.2254 15.3506 14.788 14.788C15.3506 14.2254 15.6667 13.4623 15.6667 12.6667V5.33333C15.6667 3.675 14.325 2.33333 12.6667 2.33333H5.33333ZM13.375 3.58333C13.6513 3.58333 13.9162 3.69308 14.1116 3.88843C14.3069 4.08378 14.4167 4.34873 14.4167 4.625C14.4167 4.90127 14.3069 5.16622 14.1116 5.36157C13.9162 5.55692 13.6513 5.66667 13.375 5.66667C13.0987 5.66667 12.8338 5.55692 12.6384 5.36157C12.4431 5.16622 12.3333 4.90127 12.3333 4.625C12.3333 4.34873 12.4431 4.08378 12.6384 3.88843C12.8338 3.69308 13.0987 3.58333 13.375 3.58333ZM9 4.83333C10.1051 4.83333 11.1649 5.27232 11.9463 6.05372C12.7277 6.83512 13.1667 7.89493 13.1667 9C13.1667 10.1051 12.7277 11.1649 11.9463 11.9463C11.1649 12.7277 10.1051 13.1667 9 13.1667C7.89493 13.1667 6.83512 12.7277 6.05372 11.9463C5.27232 11.1649 4.83333 10.1051 4.83333 9C4.83333 7.89493 5.27232 6.83512 6.05372 6.05372C6.83512 5.27232 7.89493 4.83333 9 4.83333ZM9 6.5C8.33696 6.5 7.70107 6.76339 7.23223 7.23223C6.76339 7.70107 6.5 8.33696 6.5 9C6.5 9.66304 6.76339 10.2989 7.23223 10.7678C7.70107 11.2366 8.33696 11.5 9 11.5C9.66304 11.5 10.2989 11.2366 10.7678 10.7678C11.2366 10.2989 11.5 9.66304 11.5 9C11.5 8.33696 11.2366 7.70107 10.7678 7.23223C10.2989 6.76339 9.66304 6.5 9 6.5Z"
        fill="currentColor"
      />
    </svg>
  )
}
