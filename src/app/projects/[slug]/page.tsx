import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import GitHubIcon from "@/components/GitHubIcon"
import Markdown from "react-markdown"
import { getAllProjects, getProjectBySlug } from "@/lib/content"
import { notFound } from "next/navigation"
import { FadeInUp } from "@/components/AnimatedSection"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.frontmatter.title} | Maenrat Phaiphon (Man)`,
    description: project.frontmatter.description,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const { frontmatter, content } = project

  return (
    <FadeInUp>
      <div className="mx-auto max-w-2xl px-4 py-16">
        <Link
          href="/projects"
          className="mb-8 flex items-center gap-1.5 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <ArrowLeft size={14} />
          Back to projects
        </Link>

        <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          {frontmatter.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {frontmatter.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={frontmatter.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-fit items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
        >
          <GitHubIcon size={16} />
          View on GitHub
        </a>

        <div className="prose prose-zinc mt-10 max-w-none dark:prose-invert">
          <Markdown>{content}</Markdown>
        </div>
      </div>
    </FadeInUp>
  )
}
