import fs from "fs"
import path from "path"

const contentDir = path.join(process.cwd(), "content")

export interface ProjectFrontmatter {
  title: string
  description: string
  tech: string[]
  github: string
  slug: string
  featured?: boolean
}

export interface PageFrontmatter {
  title: string
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  if (!match) return { frontmatter: {}, content: fileContent }

  const frontmatterLines = match[1].trim()
  const frontmatter: Record<string, unknown> = {}
  const content = fileContent.replace(match[0], "").trim()

  for (const line of frontmatterLines.split("\n")) {
    const [key, ...rest] = line.split(":")
    if (key && rest.length) {
      const value = rest.join(":").trim()
      if (value.startsWith("[")) {
        frontmatter[key.trim()] = JSON.parse(value.replace(/'/g, '"'))
      } else {
        frontmatter[key.trim()] = value.replace(/^["']|["']$/g, "")
      }
    }
  }

  return { frontmatter, content }
}

export function getAllProjects(): ProjectFrontmatter[] {
  const projectsDir = path.join(contentDir, "projects")
  if (!fs.existsSync(projectsDir)) return []
  const files = fs.readdirSync(projectsDir)
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(projectsDir, f), "utf-8")
      const { frontmatter } = parseFrontmatter(raw)
      return { ...frontmatter, slug: f.replace(".md", "") } as ProjectFrontmatter
    })
    .sort((a, b) => (a.featured ? -1 : 1))
}

export function getProjectBySlug(slug: string) {
  const filePath = path.join(contentDir, "projects", `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, "utf-8")
  const { frontmatter, content } = parseFrontmatter(raw)
  return { frontmatter: { ...frontmatter, slug } as ProjectFrontmatter, content }
}

export function getPageContent(slug: string) {
  const filePath = path.join(contentDir, "pages", `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, "utf-8")
  const { frontmatter, content } = parseFrontmatter(raw)
  return { frontmatter: frontmatter as unknown as PageFrontmatter, content }
}
