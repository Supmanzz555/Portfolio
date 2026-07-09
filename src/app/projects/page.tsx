import { getAllProjects } from "@/lib/content"
import { FadeInUp } from "@/components/AnimatedSection"
import ProjectFilter from "./client"

export default function Projects() {
  const projects = getAllProjects()

  return (
    <FadeInUp>
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-2 text-3xl font-bold">Projects</h1>
        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          A selection of projects I&apos;ve built.
        </p>

        <ProjectFilter projects={projects} />
      </div>
    </FadeInUp>
  )
}
