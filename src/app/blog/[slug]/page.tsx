import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Markdown from "react-markdown"
import { getAllPosts, getPostBySlug } from "@/lib/content"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.frontmatter.title} | Maenrat Phaiphon (Man)`,
    description: post.frontmatter.description,
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { frontmatter, content } = post

  return (
    <article className="mx-auto max-w-2xl px-4 py-16">
      <Link
        href="/blog"
        className="mb-8 flex items-center gap-1.5 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        <ArrowLeft size={14} />
        Back to blog
      </Link>

      <p className="text-xs text-zinc-500">{frontmatter.date}</p>
      <h1 className="mt-1 text-3xl font-bold">{frontmatter.title}</h1>
      <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
        {frontmatter.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {frontmatter.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="prose prose-zinc mt-10 max-w-none dark:prose-invert">
        <Markdown>{content}</Markdown>
      </div>
    </article>
  )
}
