import ProjectCard from "@/components/ProjectCard"
import { getAllProjects } from "@/lib/content"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedSection"

export default function Projects() {
  const projects = getAllProjects()

  return (
    <FadeInUp>
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-2 text-3xl font-bold">Projects</h1>
        <p className="mb-10 text-zinc-600 dark:text-zinc-400">
          A selection of projects I&apos;ve built.
        </p>

        <StaggerContainer>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <StaggerItem key={p.slug}>
                <ProjectCard project={p} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </FadeInUp>
  )
}
