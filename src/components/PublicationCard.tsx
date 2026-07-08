import { ExternalLink, Award } from "lucide-react"

interface Publication {
  title: string
  authors: string
  venue: string
  year: string
  doi: string
  url: string
}

export default function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
          <Award size={16} />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            IEEE Publication
          </p>
          <h3 className="mt-1 text-base font-semibold leading-snug">{pub.title}</h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{pub.authors}</p>
          <p className="text-sm text-zinc-500">
            {pub.venue}, {pub.year}
          </p>
          <a
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <ExternalLink size={14} />
            View on IEEE Xplore
          </a>
        </div>
      </div>
    </div>
  )
}
