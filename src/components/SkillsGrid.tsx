import {
  Code2,
  Database,
  Sparkles,
  Search,
  MessageSquare,
  FileText,
  Cpu,
  Network,
  Zap,
  ArrowLeftRight,
  GitBranch,
  Terminal,
  BookOpen,
  Coffee,
  Brain,
  Layers,
  Scan,
  BarChart3,
  Palette,
  Cloud,
  Globe,
  AppWindow,
  Container,
  FileJson,
} from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: Code2 },
      { name: "Java", icon: Coffee },
      { name: "SQL", icon: Database },
      { name: "JavaScript", icon: FileJson },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Generative AI", icon: Sparkles },
      { name: "RAG", icon: Search },
      { name: "LLMs", icon: MessageSquare },
      { name: "NLP", icon: FileText },
      { name: "Agentic Systems", icon: Cpu },
      { name: "TensorFlow", icon: Brain },
      { name: "Keras", icon: Layers },
      { name: "Computer Vision", icon: Scan },
      { name: "Statistical ML", icon: BarChart3 },
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      { name: "Apache Kafka", icon: Network },
      { name: "Apache Spark", icon: Zap },
      { name: "ETL Pipelines", icon: ArrowLeftRight },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: Code2 },
      { name: "CSS", icon: Palette },
      { name: "Vue.js", icon: AppWindow },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Cloudflare", icon: Cloud },
      { name: "AWS", icon: Globe },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Linux", icon: Terminal },
      { name: "Jupyter", icon: BookOpen },
      { name: "Docker", icon: Container },
    ],
  },
]

export default function SkillsGrid() {
  return (
    <div className="mt-10 space-y-8">
      {skillCategories.map((cat) => (
        <div key={cat.title}>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            {cat.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => {
              const Icon = skill.icon
              return (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600"
                >
                  <Icon size={16} className="text-blue-600 dark:text-blue-400" />
                  {skill.name}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
