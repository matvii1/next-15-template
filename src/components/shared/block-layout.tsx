import { capitalizeFirstLetter } from '@/lib/utils'

interface BlockLayoutProps {
  children: React.ReactNode
  subtitle: string
  title: string
  description: string
  id?: string
}

export default function BlockLayout({
  children,
  subtitle,
  title,
  description,
  id,
}: BlockLayoutProps) {
  return (
    <div className="container relative flex flex-col gap-10 md:flex-row" id={id}>
      <div className="md:max-w-[280px]">
        <p className="mt-4 text-sm font-bold text-orange">
          {capitalizeFirstLetter(subtitle)}
        </p>
        <p className="mt-2 font-noto text-2xl font-bold md:text-4xl">{title}</p>
        <p className="mt-5 text-justify">{description}</p>
      </div>
      {children}
    </div>
  )
}
