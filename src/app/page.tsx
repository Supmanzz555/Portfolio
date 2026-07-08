import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import GitHubIcon from "@/components/GitHubIcon"
import ProjectCard from "@/components/ProjectCard"
import { getAllProjects } from "@/lib/content"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedSection"

export default function Home() {
  const projects = getAllProjects().filter((p) => p.featured)

  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <FadeInUp>
        <section className="mb-24">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Maenrat Phaiphon (Man)</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            AI Engineer focused on Generative AI, Data Engineering, and building intelligent systems.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              View Projects
            </Link>
            <a
              href="https://github.com/Supmanzz555"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
          </div>
        </section>
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <Link
              href="/projects"
              className="flex items-center gap-1 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              View all <ArrowUpRight size={14} />
            </Link>
          </div>
          <StaggerContainer>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <StaggerItem key={p.slug}>
                  <ProjectCard project={p} />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </section>
      </FadeInUp>
    </div>
  )
}
