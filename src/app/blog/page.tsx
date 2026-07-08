import Link from "next/link"
import { getAllPosts } from "@/lib/content"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedSection"

export default function Blog() {
  const posts = getAllPosts()

  return (
    <FadeInUp>
      <div className="mx-auto max-w-2xl px-4 py-16">
        <h1 className="mb-2 text-3xl font-bold">Blog</h1>
        <p className="mb-10 text-zinc-600 dark:text-zinc-400">
          Thoughts on AI, data engineering, and building things.
        </p>

        {posts.length === 0 ? (
          <p className="text-zinc-500">No posts yet. Coming soon.</p>
        ) : (
          <StaggerContainer>
            <div className="space-y-8">
              {posts.map((post) => (
                <StaggerItem key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block border-b border-zinc-200 pb-6 last:border-0 dark:border-zinc-800"
                  >
                    <p className="text-xs text-zinc-500">{post.date}</p>
                    <h2 className="mt-1 text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {post.title}
                    </h2>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {post.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {post.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        )}
      </div>
    </FadeInUp>
  )
}
