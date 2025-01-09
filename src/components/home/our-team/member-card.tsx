interface MemberCardProps {
  name: string
  description: string
}

export default function MemberCard({
  name,
  description,
}: MemberCardProps): React.JSX.Element {
  return (
    <div className="flex max-w-[350px] flex-col">
      <div className="h-[350px] rounded-2xl bg-slate-200"></div>
      <div className="p-2">
        <p className="mt-2 font-bold">{name}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}
