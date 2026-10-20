# Fullstack Developer Curriculum

A modern, developer-grade curriculum and interactive presentation platform built with **React**, **Vite**, and **Tailwind CSS**. Designed to take students and developers from their very first line of local version control all the way to building production-ready web applications with Next.js, Tailwind CSS, Shadcn UI, PostgreSQL with Neon Database, Vercel, Cloudflare, and AI Prompt Engineering.

## Structure & Modules

The platform is structured into a central **Curriculum Hub (`#/`)** that launches 9 dedicated, interactive fullscreen presentation decks:

| # | Module | Route | Description | Topics |
|---|---|---|---|---|
| **01** | **Git** | `#/course/git` | Local Version Control Fundamentals (23 Slides) | `init`, `status`, `add`, `commit`, `log`, `branch`, `.gitignore`, 4-layer mental model |
| **02** | **GitHub** | `#/course/github` | Cloud Repositories & Collaboration (18 Slides) | Remotes, SSH/HTTPS, `push -u`, `pull`, `clone`, Pull Requests, verified repo |
| **03** | **Next.js** | `#/course/nextjs` | Modern Fullstack React Framework (75 Slides) | App Router, Server Components, Server Actions, PostgreSQL, Neon, Auth, Vercel |
| **04** | **Tailwind CSS** | `#/course/tailwindcss` | Modern Utility-First Styling (12 Slides) | Sizing scale, flexbox/grid, mobile-first breakpoints, dark mode, transitions |
| **05** | **Shadcn UI** | `#/course/shadcn` | Accessible Component Architecture (12 Slides) | Radix primitives, CLI init, component ownership, `cn()`, CVA variants, dialogs |
| **06** | **PostgreSQL & Neon** | `#/course/postgres` | Relational & Serverless Database Architecture (72 Slides) | psql CLI, DDL/DML, data types, UUID, relationships, joins, indexes, ACID, migrations, Neon branching, pooling |
| **07** | **Vercel & Web Deployment** | `#/course/vercel` | Modern Web & Next.js Production Deployment (72 Slides) | Git CI/CD, Preview vs Production, Neon PostgreSQL integration, custom domains, DNS, HTTPS, rollbacks |
| **08** | **Cloudflare** | `#/course/cloudflare` | Global Edge Infrastructure (65 Slides) | Domains, DNS, CDN caching, SSL/TLS, WAF security, Workers, R2 storage, edge routing |
| **09** | **Prompt Engineering** | `#/course/prompting` | Critical Thinking & AI-Assisted Development (75 Slides) | Prompt formula, context management, analysis before coding, task decomposition, safe coding agents, verification |

## Key Features

- **Central Home Hub (`#/`):** Clean developer dashboard displaying all 9 modules, live search & topic filtering, category tabs, and roadmap strip.
- **Dedicated Interactive Presentation Decks (`#/course/:id`):** Each lesson features its own slide deck with smooth keyboard navigation and touch gestures.
- **Developer-Grade Dual Themes (Dark & Light Mode):** Clean GitHub-inspired visual palette. Switch anytime with the header button or press <kbd>T</kbd>.
- **Fullscreen Presentation Mode:** Press <kbd>F</kbd> or click the Fullscreen button on any lesson deck to expand into a distraction-free presentation experience.
- **Realistic UI Mockups & Visual Examples:** Screenshots including GitHub repository creation forms, verified remote repo pages, and architecture flowcharts.
- **Authentic Terminal & Code Blocks:** Realistic prompt sessions with color-coded commands and one-click copy buttons.
- **Bilingual Support (EN / KM):** One-click toggle between English and Khmer (ភាសាខ្មែរ) with native typography via Google Fonts Kantumruy Pro.
- **Fast Build & Instant HMR:** Powered by Vite and React for ultra-fast local development and lightweight production bundles.

## Installation & Setup

Ensure **Node.js** (v18+) and **pnpm** are installed:

```bash
# Install dependencies
pnpm install

# Start local development server
pnpm run dev
```

## Makefile Commands

| Command | Description |
|---|---|
| `make install` | Installs project dependencies using `pnpm install` |
| `make dev` | Starts the local Vite development server on port 3000 (`http://localhost:3000`) |
| `make build` | Builds the production bundle to `dist/` |
| `make preview` | Previews the production build locally on port 3000 |
| `make run` | Alias for `make dev` |
| `make serve` | Alias for `make dev` |

To run on a custom port:

```bash
make dev PORT=8080
```

## Keyboard Shortcuts

### Presentation Decks

| Key | Action |
|---|---|
| `→`, `Space`, `L` | Advance to next slide |
| `←`, `Backspace`, `H` | Return to previous slide |
| `Home` | Jump to first slide |
| `End` | Jump to last slide |
| `F` | Toggle fullscreen mode |
| `T` | Toggle Light / Dark theme |
| `O` or `G` | Toggle visual slide overview grid |
| `?` | Toggle keyboard shortcuts modal |
| `Esc` | Close any open modal |

## Technology Stack & Credits

| Technology | Role | Website |
|---|---|---|
| **React** | Component-driven UI library for the application | [react.dev](https://react.dev/) |
| **Vite** | Next-generation frontend tooling and bundler | [vite.dev](https://vite.dev/) |
| **Tailwind CSS** | Utility-first CSS styling engine | [tailwindcss.com](https://tailwindcss.com/) |
| **pnpm** | Fast, disk-space efficient package manager | [pnpm.io](https://pnpm.io/) |
| **PostCSS & Autoprefixer** | CSS processing and vendor prefixing pipeline | [postcss.org](https://postcss.org/) |

## Project Structure

```text
Lesson/
├── Makefile                # Project runner targets (make install, dev, build, preview)
├── README.md               # Documentation and technology stack
├── index.html              # Vite HTML root mounting point
├── package.json            # Project manifest, scripts, and dependencies
├── pnpm-lock.yaml          # Pnpm lockfile
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS theme, typography, and color tokens
├── vite.config.js          # Vite configuration with React plugin
├── public/                 # Static assets
├── images/                 # Course illustrations, diagrams, and flag assets
├── html/                   # Standalone interactive browser presentations (Cloudflare, Next.js, etc.)
├── js/                     # Standalone deck scripts and bilingual translation dictionaries
└── src/                    # React application source code
    ├── main.jsx            # React root application entry
    ├── App.jsx             # Hash-based router and root providers
    ├── index.css           # Global Tailwind utilities, theme styles, and fullscreen rules
    ├── context/            # React context providers
    │   ├── ThemeContext.jsx    # Dark/light theme management
    │   └── LanguageContext.jsx # Bilingual EN / KM translation management
    ├── components/         # Shared UI components
    │   ├── Navbar.jsx          # Hub navigation header
    │   ├── Footer.jsx          # Hub footer
    │   └── CourseIcons.jsx     # Course SVG icons
    ├── pages/              # Main view pages
    │   ├── HomePage.jsx        # Curriculum Hub with live search, filters, and roadmap
    │   └── SlideViewer.jsx     # Course viewer delegate
    ├── courses/            # Native React course presentation decks
    │   ├── index.js            # Course registry and code-split loaders
    │   ├── common/             # Shared CourseViewer shell, SlideHeader, TerminalBlock, ImageFrame
    │   ├── git/                # Git course (GitCourse.jsx + slides.jsx)
    │   ├── github/             # GitHub course (GithubCourse.jsx + slides.jsx)
    │   ├── nextjs/             # Next.js course (NextjsCourse.jsx + slides.jsx)
    │   ├── tailwindcss/        # Tailwind CSS course (TailwindCourse.jsx + slides.jsx)
    │   ├── shadcn/             # Shadcn UI course (ShadcnCourse.jsx + slides.jsx)
    │   ├── postgres/           # PostgreSQL & Neon course (PostgresCourse.jsx + slides.jsx)
    │   ├── vercel/             # Vercel & Deployment course (VercelCourse.jsx + slides.jsx)
    │   ├── cloudflare/         # Cloudflare course (CloudflareCourse.jsx + slides.jsx)
    │   └── prompting/          # Prompt Engineering course (PromptingCourse.jsx + slides.jsx)
    └── data/               # Course metadata, slides, and localization
        ├── translations.json   # Bilingual EN / KM dictionary for all modules
        ├── translations.js     # Translation helper exports
        └── coursesIndex.js     # Curriculum course list and metadata
```
