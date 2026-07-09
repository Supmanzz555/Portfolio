"use client"

import { useState, useMemo } from "react"
import ProjectCard from "@/components/ProjectCard"
import { StaggerContainer, StaggerItem } from "@/components/AnimatedSection"
import type { ProjectFrontmatter } from "@/lib/content"

export default function ProjectFilter({ projects }: { projects: ProjectFrontmatter[] }) {
  const [active, setActive] = useState<string | null>(null)

  const allCategories = Array.from(
    new Set(projects.map((p) => p.category).filter(Boolean) as string[])
  ).sort()

  const filtered = useMemo(
    () => (active ? projects.filter((p) => p.category === active) : projects),
    [active, projects]
  )

  return (
    <>
      {allCategories.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActive(null)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              !active
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800"
            }`}
          >
            All
          </button>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <StaggerContainer>
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((p) => (
            <StaggerItem key={p.slug}>
              <ProjectCard project={p} />
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-zinc-500">
          No projects in this category yet.
        </p>
      )}
    </>
  )
}
