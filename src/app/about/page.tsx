import { getPageContent } from "@/lib/content"
import { MapPin, Mail } from "lucide-react"
import GitHubIcon from "@/components/GitHubIcon"
import Markdown from "react-markdown"
import { FadeInUp } from "@/components/AnimatedSection"
import SkillsGrid from "@/components/SkillsGrid"

export default function About() {
  const data = getPageContent("about")
  if (!data) return null

  return (
    <FadeInUp>
      <div className="mx-auto max-w-2xl px-4 py-16">
        <h1 className="mb-8 text-3xl font-bold">{data.frontmatter.title}</h1>

        <div className="mb-8 flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} />
            Thailand
          </span>
          <a
            href="https://github.com/Supmanzz555"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <GitHubIcon size={14} />
            Supmanzz555
          </a>
          <a
            href="mailto:phaiphon.m@gmail.com"
            className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <Mail size={14} />
            phaiphon.m@gmail.com
          </a>
        </div>

        <div className="prose prose-zinc max-w-none dark:prose-invert">
          <Markdown>{data.content}</Markdown>
        </div>

        <SkillsGrid />
      </div>
    </FadeInUp>
  )
}
