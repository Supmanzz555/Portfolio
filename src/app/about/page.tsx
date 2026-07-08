import { getPageContent } from "@/lib/content"
import { MapPin, Mail } from "lucide-react"
import GitHubIcon from "@/components/GitHubIcon"
import LinkedInIcon from "@/components/LinkedInIcon"
import Markdown from "react-markdown"
import { FadeInUp } from "@/components/AnimatedSection"
import SkillsGrid from "@/components/SkillsGrid"
import PublicationCard from "@/components/PublicationCard"
import ExperienceSection from "@/components/ExperienceSection"

export default function About() {
  const data = getPageContent("about")
  if (!data) return null

  const publication = {
    title: "Detection of AI-Generated vs. Real Human Images Using Anatomical Subregions (Hands, Eyes, Nose) with Image Processing and Deep Learning",
    authors: "M. Phaiphon et al.",
    venue: "IEEE Xplore",
    year: "2025",
    doi: "10.1109/11298059",
    url: "https://ieeexplore.ieee.org/document/11298059",
  }

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
            href="https://www.linkedin.com/in/maenrat-phaiphon-0963b8377"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <LinkedInIcon size={14} />
            Maenrat Phaiphon
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

        <div className="mt-12">
          <h2 className="mb-4 text-xl font-semibold">Publications</h2>
          <PublicationCard pub={publication} />
        </div>

        <ExperienceSection />

        <SkillsGrid />
      </div>
    </FadeInUp>
  )
}
