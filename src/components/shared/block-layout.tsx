interface BlockLayoutProps {
  children: React.ReactNode
  subtitle: string
  title: string
  description: string
}

export default function BlockLayout({
  children,
  subtitle,
  title,
  description,
}: BlockLayoutProps) {
  return (
    <div className="flex gap-10">
      <div className="max-w-[280px]">
        <p className="mt-4 text-sm font-bold text-orange">{subtitle}</p>
        <p className="mt-2 font-noto text-4xl font-bold">{title}</p>
        <p className="mt-5 text-justify">{description}</p>
      </div>
      {children}
    </div>
  )
}
