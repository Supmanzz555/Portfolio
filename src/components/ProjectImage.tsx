import Image from "next/image"

const gradients: Record<string, string> = {
  AI: "from-violet-500 to-purple-700",
  "Data Engineering": "from-cyan-500 to-blue-700",
}

const defaultGrad = "from-zinc-500 to-zinc-700"

export default function ProjectImage({
  title,
  category,
  src,
}: {
  title: string
  category?: string
  src?: string
}) {
  if (src) {
    return (
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 672px"
        />
      </div>
    )
  }

  const grad = gradients[category ?? ""] ?? defaultGrad

  return (
    <div
      className={`flex aspect-[16/9] items-center justify-center rounded-xl bg-gradient-to-br ${grad}`}
    >
      <span className="text-2xl font-bold tracking-tight text-white/90">
        {title}
      </span>
    </div>
  )
}
