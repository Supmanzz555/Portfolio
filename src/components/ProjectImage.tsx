const gradients: Record<string, string> = {
  AI: "from-violet-500 to-purple-700",
  "Data Engineering": "from-cyan-500 to-blue-700",
}

const defaultGrad = "from-zinc-500 to-zinc-700"

export default function ProjectImage({
  title,
  category,
}: {
  title: string
  category?: string
}) {
  const grad = gradients[category ?? ""] ?? defaultGrad

  return (
    <div
      className={`flex h-44 items-center justify-center rounded-t-xl bg-gradient-to-br ${grad}`}
    >
      <span className="text-2xl font-bold tracking-tight text-white/90">
        {title}
      </span>
    </div>
  )
}
