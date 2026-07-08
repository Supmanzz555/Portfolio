import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Supmanzz
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            About
          </Link>
          <Link href="/projects" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
