import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import ProjectImage from "./ProjectImage"
import type { ProjectFrontmatter } from "@/lib/content"

export default function ProjectCard({ project }: { project: ProjectFrontmatter }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group overflow-hidden rounded-xl border border-zinc-200 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
    >
      <ProjectImage title={project.title} category={project.category} />
      <div className="p-5 pt-4">
        <div className="flex items-start justify-between">
          <div>
            {project.category && (
              <p className="text-xs font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {project.category}
              </p>
            )}
            <h3 className="font-semibold">{project.title}</h3>
          </div>
          <ArrowUpRight
            size={16}
            className="mt-1 shrink-0 text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
        <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
