import { Mail } from "lucide-react"
import GitHubIcon from "./GitHubIcon"
import LinkedInIcon from "./LinkedInIcon"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-6 text-sm text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Maenrat P. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Supmanzz555"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-800 dark:hover:text-zinc-200"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/maenrat-phaiphon-0963b8377"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-800 dark:hover:text-zinc-200"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="mailto:phaiphon.m@gmail.com"
            className="hover:text-zinc-800 dark:hover:text-zinc-200"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
