import ProjectCard from "@/components/ProjectCard"
import { getAllProjects } from "@/lib/content"

export default function Projects() {
  const projects = getAllProjects()

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-2 text-3xl font-bold">Projects</h1>
      <p className="mb-10 text-zinc-600 dark:text-zinc-400">
        A selection of projects I&apos;ve built.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  )
}
