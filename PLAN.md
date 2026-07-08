# Portfolio Plan — Supmanzz

## Stack
- **Framework:** Next.js (React) + TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Decap CMS (Git-based, content in markdown)
- **Hosting:** Vercel (free tier, 24/7)
- **Goal:** Land a job (professional tone)

## Branding
- **Tone:** Professional, clean, modern — optimized for recruiters
- **Color scheme:** Dark/Light mode toggle (Tailwind `dark:` class)
- **Tagline:** *"AI Engineer | Data & Gen AI"*
- **Identity:** Supmanzz (Phai phon M.) — Thailand
- **Email:** phaiphon.m@gmail.com
- **GitHub:** github.com/Supmanzz555

## Pages

| Page | Content |
|------|---------|
| Home | Hero (name, tagline, CTA buttons), 3 featured project cards, GitHub stats |
| About | Bio, location, skills/tags grid (Python, Gen AI, RAG, Data Engineering, NLP, Kafka, Spark, SQL, Java), interests, GitHub link |
| Projects | Detail pages for dLoan, social-lens, Data_Copilot — description, tech stack badges, GitHub link |
| Contact | Email link, GitHub profile, contact form |
| Resume | Placeholder section — "Coming soon" |

## Featured Projects (Top 3)

| Repo | Why |
|------|-----|
| dLoan (Python) | Agentic Gen AI — hottest skill in market |
| social-lens (Python) | End-to-end data pipeline (Kafka, Spark) — data engineering |
| Data_Copilot (Python) | RAG + SQL copilot — LLMs with databases |

## Content Management
- Decap CMS configured in `public/admin/config.yml`
- Collections: Projects, About page
- Content stored as markdown in `content/`
- Save → commit to GitHub → Vercel auto-deploys

## Deploy Flow
```
Edit via Decap CMS → commits to GitHub → Vercel auto-builds → site updates live
```

## Hosting
- **Vercel** — Free tier, unlimited 24/7 uptime, 100GB bandwidth/mo
- **Custom domain:** Free `*.vercel.app` subdomain (or buy own domain later)
