# Fullstack Developer Curriculum & Documentation Platform

A modern, developer-grade documentation and learning platform built with **React**, **Vite**, and **Tailwind CSS**. Designed to take developers from their first line of local version control all the way to building and deploying production-ready web applications with Next.js, Tailwind CSS, Shadcn UI, PostgreSQL with Neon Database, Vercel, Cloudflare, and AI Prompt Engineering.

Inspired by the usability, clean typography, and information architecture of modern documentation platforms such as Next.js Documentation, shadcn/ui, GitBook, Vite, and Tailwind CSS Documentation.

## Structure & Curriculum Modules

The platform is structured into a central **Curriculum Hub (`#/`)** and a **Modern Documentation Platform (`#/docs/:courseId/:lessonId`)** comprising 433 comprehensive lessons across 9 modules:

| #      | Module                  | Docs Route             | Lessons    | Description & Core Focus                                                                                                          |
| ------ | ----------------------- | ---------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **01** | **Git**                 | `#/docs/git/1`         | 8 Lessons  | Local Version Control Fundamentals: `init`, `status`, `add`, `commit`, `log`, `branch`, `merge`, `.gitignore`, 4-layer mental model |
| **02** | **GitHub**              | `#/docs/github/1`      | 22 Lessons | Cloud Repositories & Collaboration: Remotes, SSH/HTTPS keys, `push -u`, `pull`, `clone`, Pull Requests, verified repos            |
| **03** | **Next.js**             | `#/docs/nextjs/1`      | 75 Lessons | Modern Fullstack React Framework: App Router, Server Components, Server Actions, PostgreSQL, Neon, Auth, Vercel                   |
| **04** | **Tailwind CSS**        | `#/docs/tailwindcss/1` | 12 Lessons | Modern Utility-First Styling: Sizing scale, flexbox/grid, mobile-first breakpoints, dark mode, transitions                        |
| **05** | **Shadcn UI**           | `#/docs/shadcn/1`      | 12 Lessons | Accessible Component Architecture: Radix primitives, CLI init, component ownership, `cn()`, CVA variants, dialogs                 |
| **06** | **PostgreSQL & Neon**   | `#/docs/postgres/1`    | 72 Lessons | Relational & Serverless Database Architecture: psql CLI, DDL/DML, relationships, joins, indexes, ACID, migrations, Neon branching |
| **07** | **Vercel & Deployment** | `#/docs/vercel/1`      | 72 Lessons | Modern Web Production Deployment: Git CI/CD, Preview vs Production, Neon integration, custom domains, DNS, HTTPS, rollbacks       |
| **08** | **Cloudflare**          | `#/docs/cloudflare/1`  | 85 Lessons | Global Edge Infrastructure: Domains, DNS, CDN caching, SSL/TLS, WAF security, Workers, R2 storage, edge routing                   |
| **09** | **Prompt Engineering**  | `#/docs/prompting/1`   | 75 Lessons | Critical Thinking & AI Development: Prompt formula, context management, analysis before coding, safe coding agents, verification  |

_Note: Backward-compatible routes (e.g. `#/course/:courseId/:slideNum`) automatically resolve to the documentation platform._

## Key Features & Architecture

- **Documentation Layout Shell:**
  - **Sticky Top Navigation Bar:** Compact 56px header with Synergy Docs branding, active course dropdown switcher, instant search trigger, EN/KM toggle, dark/light theme switch, and mobile drawer toggle.
  - **Dynamic Hierarchical Left Sidebar:** Data-driven tree rendering courses, sections, and lessons. Supports independent expand/collapse, auto-expands parent section of the active lesson, highlights active route, includes desktop collapsed slim-icon mode and mobile drawer overlay.
  - **Central Reading Canvas:** Natural vertical document flow (no slide height constraints), breadcrumbs navigation, lesson metadata, heading anchor links with copy-link support, terminal blocks, callouts, and previous/next lesson pagination.
  - **Right-side Table of Contents (TOC):** Sticky on wide screens (`xl:block`), dynamically indexes headings (`h2`, `h3`, `h4`), highlights active heading on scroll, and supports smooth click-to-scroll.
- **Global Command Palette Search (`Ctrl+K` / `Cmd+K`):** Real-time client-side search indexing across all 448 lessons in both English and Khmer, with keyboard navigation (`↑`, `↓`, `Enter`, `Esc`).
- **Strict 4px Design System:** Exact 4px corner radius (`rounded` / `rounded-[4px]`) on all UI elements (buttons, inputs, cards, callouts, code blocks, dropdowns). Clean hairline borders with no unnecessary heavy shadows or glassmorphism.
- **Bilingual Support (EN / KM):** Complete localization across navigation, content, headings, breadcrumbs, search, and controls. Native Khmer typography powered by Google Fonts Kantumruy Pro with zero diacritic clipping.
- **Developer-Grade Dual Themes (Dark & Light Mode):** Dark mode (slate-900/900 surfaces, slate-800 borders) and Light mode (slate-50/white surfaces, slate-200 borders) with persistent `localStorage` preference.
- **Fast Code-Split Bundling:** Each course's lesson content is lazy-loaded on demand via Vite dynamic imports, keeping the initial payload lightweight.

## Installation & Setup

Ensure **Node.js** (v18+) and **pnpm** are installed:

```bash
# Install dependencies
pnpm install

# Start local development server
pnpm run dev
```

## Makefile Commands

| Command        | Description                                                                     |
| -------------- | ------------------------------------------------------------------------------- |
| `make install` | Installs project dependencies using `pnpm install`                              |
| `make dev`     | Starts the local Vite development server on port 3000 (`http://localhost:3000`) |
| `make build`   | Builds the production bundle to `dist/`                                         |
| `make preview` | Previews the production build locally on port 3000                              |
| `make run`     | Alias for `make dev`                                                            |
| `make serve`   | Alias for `make dev`                                                            |

To run on a custom port:

```bash
make dev PORT=8080
```

## Keyboard Shortcuts

| Shortcut           | Action                                        |
| ------------------ | --------------------------------------------- |
| `Ctrl+K` / `Cmd+K` | Open global documentation search              |
| `[`                | Toggle desktop left sidebar collapse / expand |
| `Esc`              | Close search modal or mobile drawer           |
| `T`                | Toggle Light / Dark theme                     |
| `↑` / `↓`          | Navigate search results                       |
| `Enter`            | Select active search result                   |

## Technology Stack & Credits

| Technology                 | Role                                            | Website                                     |
| -------------------------- | ----------------------------------------------- | ------------------------------------------- |
| **React**                  | Component-driven UI library for the application | [react.dev](https://react.dev/)             |
| **Vite**                   | Next-generation frontend tooling and bundler    | [vite.dev](https://vite.dev/)               |
| **Tailwind CSS**           | Utility-first CSS styling engine                | [tailwindcss.com](https://tailwindcss.com/) |
| **Lucide React**           | Clean, tree-shakeable modern icon suite         | [lucide.dev](https://lucide.dev/)           |
| **pnpm**                   | Fast, disk-space efficient package manager      | [pnpm.io](https://pnpm.io/)                 |
| **PostCSS & Autoprefixer** | CSS processing and vendor prefixing pipeline    | [postcss.org](https://postcss.org/)         |

## Project Structure

```text
Lesson/
├── Makefile                # Project runner targets (make install, dev, build, preview)
├── README.md               # Documentation and architecture guide
├── desc.md                 # UI, design system, and style guide
├── index.html              # Vite HTML root mounting point
├── package.json            # Project manifest, scripts, and dependencies
├── pnpm-lock.yaml          # Pnpm lockfile
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS theme, typography, and color tokens
├── vite.config.js          # Vite configuration with React plugin
├── public/                 # Static assets (images, flags, logos)
└── src/                    # React application source code
    ├── main.jsx            # React root application entry
    ├── App.jsx             # Hash-based router with docs & course support
    ├── index.css           # Global Tailwind utilities, theme styles, and docs layout rules
    ├── context/            # React context providers
    │   ├── ThemeContext.jsx    # Dark/light theme management
    │   └── LanguageContext.jsx # Bilingual EN / KM translation management
    ├── components/         # Shared and documentation UI components
    │   ├── docs/               # Modern Documentation Platform components
    │   │   ├── Callout.jsx         # Semantic callout alert boxes (info, tip, warning, danger, success)
    │   │   ├── CodeBlock.jsx       # Syntax code block with copy button and language tag
    │   │   ├── DocsBreadcrumbs.jsx # Hierarchical breadcrumbs location trail
    │   │   ├── DocsHeader.jsx      # Compact sticky top navigation header
    │   │   ├── DocsPage.jsx        # Central documentation reading page coordinator
    │   │   ├── DocsPagination.jsx  # Previous / Next lesson navigation cards
    │   │   ├── DocsSearchModal.jsx # Command palette search (Ctrl+K)
    │   │   ├── DocsSidebar.jsx     # Dynamic left sidebar navigation tree
    │   │   └── DocsTableOfContents.jsx # Right-side on-this-page heading navigation
    │   ├── ui/                 # Reusable Radix UI primitives (Button, Badge, Card, Input)
    │   ├── Navbar.jsx          # Hub navigation header
    │   ├── Footer.jsx          # Hub footer
    │   └── CourseIcons.jsx     # Course Lucide icons
    ├── pages/              # Main view pages
    │   └── HomePage.jsx        # Curriculum Hub with live search, filters, and roadmap
    ├── courses/            # Native React course presentation decks
    │   ├── slidesRegistry.js   # Code-split dynamic loaders for course slides
    │   ├── common/             # Shared slide components (TerminalBlock, ImageFrame, SlideHeader)
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
        ├── docsNavigation.js   # Canonical documentation navigation and search model
        ├── translations.js     # Translation helper exports
        ├── translations/       # Modular bilingual dictionaries (common, git, github, etc.)
        └── coursesIndex.js     # Curriculum course list and metadata
```
