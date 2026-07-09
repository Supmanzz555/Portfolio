# Portfolio — Maenrat P.

Personal portfolio site built with Next.js, deployed on Vercel.

## Stack

| Layer | Tech |
|-------|------|
| **Framework** | Next.js 16 (App Router, TypeScript) |
| **Styling** | Tailwind CSS |
| **Content** | Markdown files with gray-matter |
| **CMS** | Decap CMS (Git-based, at `/admin`) |
| **Animations** | Framer Motion |
| **Icons** | Lucide React + custom SVGs |
| **Hosting** | Vercel (free tier, auto-deploy from GitHub) |

## Pages

| Route | Content |
|-------|---------|
| `/` | Hero, featured projects |
| `/about` | Bio, contact, publication, experience, education, skills |
| `/projects` | Project grid |
| `/projects/[slug]` | Project detail |
| `/blog` | Blog listing |
| `/blog/[slug]` | Blog post |
| `/contact` | Email, GitHub, LinkedIn |
| `/admin` | Decap CMS admin UI |

## Features

- Dark/light mode toggle with system preference detection
- Scroll-triggered animations (FadeInUp, stagger reveal)
- Static site generation (SSG) for all pages
- Responsive design
- Decap CMS for editing content via browser
- SEO meta tags per page

## Content Structure

```
content/
├── projects/     # Project markdown files
├── blog/         # Blog posts
└── pages/        # Static pages (about)
```

## Run Locally

```bash
npm install
npm run dev
```
