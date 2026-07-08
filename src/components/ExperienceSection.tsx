import { Briefcase, GraduationCap } from "lucide-react"

const experience = [
  {
    type: "work",
    title: "Data Scientist",
    org: "Medihealth Act (Health tech startup) · Contract",
    date: "Nov 2025 – Feb 2026",
    highlights: [
      "Designed AI-powered workforce scheduling backend using Google OR-Tools, reducing schedule generation from hours to ~5 minutes, deployed at a Bangkok hospital",
      "Built Looker Studio dashboards with SQL to analyze user behavior and support business decisions",
      "Conducted system testing and UAT to identify bugs and edge cases before release",
    ],
  },
  {
    type: "work",
    title: "Deep Learning Researcher",
    org: "Silpakorn University (IEEE ICSEC 2025)",
    date: "May 2025 – Nov 2025",
    highlights: [
      "Developed and benchmarked 27 deep learning classifiers across CNN, EfficientNet-B0, and ResNet50 using TensorFlow and PyTorch for AI-generated image detection",
      "Built a FastAPI + Gradio inference service integrating multiple classifiers into a unified prediction pipeline",
      "Co-authored an IEEE ICSEC 2025 publication, achieving 97% classification accuracy",
    ],
  },
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Silpakorn University",
    date: "2021 – 2025",
    highlights: [
      "Supported a Java programming course as a lab assistant",
      "Selected for Japan Scholarship Program — international academic exchange",
    ],
  },
]

export default function ExperienceSection() {
  return (
    <div className="mt-12 space-y-10">
      <div>
        <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
          <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
          Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp) => (
            <div
              key={exp.title}
              className="relative border-l-2 border-zinc-200 pl-5 dark:border-zinc-700"
            >
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-blue-500 bg-white dark:bg-zinc-950" />
              <p className="text-xs font-medium text-blue-600 dark:text-blue-400">{exp.date}</p>
              <h3 className="mt-0.5 font-semibold">{exp.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{exp.org}</p>
              <ul className="mt-2 space-y-1">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-zinc-600 dark:text-zinc-400">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
          <GraduationCap size={20} className="text-blue-600 dark:text-blue-400" />
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="relative border-l-2 border-zinc-200 pl-5 dark:border-zinc-700"
            >
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-blue-500 bg-white dark:bg-zinc-950" />
              <p className="text-xs font-medium text-blue-600 dark:text-blue-400">{edu.date}</p>
              <h3 className="mt-0.5 font-semibold">{edu.degree}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{edu.school}</p>
              <ul className="mt-2 space-y-1">
                {edu.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-zinc-600 dark:text-zinc-400">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
