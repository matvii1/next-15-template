interface MemberCardProps {
  name: string
  description: string
}

export default function MemberCard({
  name,
  description,
}: MemberCardProps): React.JSX.Element {
  return (
    <div className="flex flex-col md:max-w-[350px]">
      <div className="h-[260px] rounded-2xl bg-slate-200 md:h-[350px]"></div>
      <div className="p-2">
        <p className="mt-2 font-bold">{name}</p>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  )
}
