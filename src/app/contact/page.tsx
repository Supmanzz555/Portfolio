import { Mail } from "lucide-react"
import GitHubIcon from "@/components/GitHubIcon"
import LinkedInIcon from "@/components/LinkedInIcon"
import { FadeInUp } from "@/components/AnimatedSection"

export default function Contact() {
  return (
    <FadeInUp>
      <div className="mx-auto max-w-2xl px-4 py-16">
        <h1 className="mb-2 text-3xl font-bold">Contact</h1>
        <p className="mb-10 text-zinc-600 dark:text-zinc-400">
          Get in touch — I&apos;d love to hear from you.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:phaiphon.m@gmail.com"
            className="flex items-center gap-3 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            <Mail size={20} className="text-zinc-500" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                phaiphon.m@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://github.com/Supmanzz555"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            <GitHubIcon size={20} />
            <div>
              <p className="font-medium">GitHub</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                github.com/Supmanzz555
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/maenrat-phaiphon-0963b8377"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            <LinkedInIcon size={20} />
            <div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Maenrat Phaiphon
              </p>
            </div>
          </a>
        </div>
      </div>
    </FadeInUp>
  )
}
