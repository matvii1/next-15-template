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
    <div className="relative flex gap-10" id={id}>
      <div className="max-w-[280px]">
        <p className="mt-4 text-sm font-bold text-orange">{subtitle}</p>
        <p className="mt-2 font-noto text-4xl font-bold">{title}</p>
        <p className="mt-5 text-justify">{description}</p>
      </div>
      {children}
    </div>
  )
}
