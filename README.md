# Fullstack Developer Curriculum

A modern, developer-grade curriculum and interactive presentation platform designed to take students and developers from their very first line of local version control all the way to building production-ready web applications with Next.js, Tailwind CSS, and Shadcn UI.

## Structure & Modules

The platform is structured into a central **Curriculum Hub (`index.html`)** that launches 5 dedicated, interactive fullscreen presentation decks:

| # | Module | Deck | Description | Topics |
|---|---|---|---|---|
| **01** | **Git** | [git.html](html/git.html) | Local Version Control Fundamentals | `init`, `status`, `add`, `commit`, `log`, `branch`, `.gitignore`, mental model |
| **02** | **GitHub** | [github.html](html/github.html) | Cloud Repositories & Collaboration | Remotes, SSH/HTTPS, `push -u`, `pull`, `clone`, Pull Requests, verified repo |
| **03** | **Next.js** | [nextjs.html](html/nextjs.html) | Modern Fullstack React Framework | App Router, Server vs Client components, nested layouts, route handlers, SSR |
| **04** | **Tailwind CSS** | [tailwindcss.html](html/tailwindcss.html) | Modern Utility-First Styling | Sizing scale, flexbox/grid, mobile-first breakpoints, dark mode, transitions |
| **05** | **Shadcn UI** | [shadcn.html](html/shadcn.html) | Accessible Component Architecture | Radix primitives, CLI init, component ownership, `cn()`, CVA variants, dialogs |

## Key Features

- **Central Home Hub (`index.html`):** Clean developer dashboard displaying all 5 modules, visual roadmap pipeline, topic tags, and quick-launch actions.
- **Dedicated Interactive Presentation Decks:** Each lesson features its own slide deck with full keyboard navigation and touch gestures.
- **Developer-Grade Dual Themes (Dark & Light Mode):** Clean GitHub-inspired visual palette. Switch anytime with the header button or press <kbd>T</kbd>.
- **Fullscreen Presentation Mode:** Press <kbd>F</kbd> or click the Fullscreen button on any lesson deck to expand into a distraction-free presentation experience.
- **Realistic UI Mockups & Visual Examples:** Real screenshots including GitHub repository creation forms, verified remote repo pages, and architecture flowcharts.
- **Authentic Terminal & Code Blocks:** Realistic prompt sessions with color-coded commands and one-click copy buttons.
- **Bilingual Support (EN / KM):** One-click toggle between English and Khmer (ភាសាខ្មែរ) with native typography via Google Fonts Kantumruy Pro.
- **Zero External Dependencies:** Built with pure HTML5, Vanilla CSS, and lightweight Vanilla JavaScript.

## Installation & Setup

No installation or external packages required. Clone or navigate to the directory:

```bash
cd /mnt/storage/Personal/Lesson
```

## Makefile Commands

| Command | Description |
|---|---|
| `make run` | Starts a local HTTP server on port 3000 (`http://localhost:3000`) |
| `make serve` | Alias for `make run` |

To run on a custom port:

```bash
make run PORT=8080
```

Alternatively, open `index.html` directly in any web browser.

## Keyboard Shortcuts

### Home Page Hub (`index.html`)

| Key | Action |
|---|---|
| `1` | Jump to Lesson 01: Git (`html/git.html`) |
| `2` | Jump to Lesson 02: GitHub (`html/github.html`) |
| `3` | Jump to Lesson 03: Next.js (`html/nextjs.html`) |
| `4` | Jump to Lesson 04: Tailwind CSS (`html/tailwindcss.html`) |
| `5` | Jump to Lesson 05: Shadcn UI (`html/shadcn.html`) |
| `T` | Toggle Light / Dark theme |

### Presentation Decks

| Key | Action |
|---|---|
| `→`, `Space`, `L`, `PageDown` | Advance to next slide |
| `←`, `Backspace`, `H`, `PageUp` | Return to previous slide |
| `Home` | Jump to first slide |
| `End` | Jump to last slide |
| `H` | Return to Curriculum Home (`../index.html`) |
| `F` | Toggle fullscreen mode |
| `T` | Toggle Light / Dark theme |
| `O` or `G` | Toggle visual slide overview grid |
| `?` | Toggle keyboard shortcuts modal |
| `Esc` | Close any open modal |

## Technology Stack & Credits

| Technology | Role | Website |
|---|---|---|
| **HTML5** | Semantic slide markup and document hierarchy | [developer.mozilla.org/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) |
| **CSS3** | Vanilla styling, dual theme (dark & light), responsive layouts, print rules | [developer.mozilla.org/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) |
| **JavaScript (ES6+)** | Presentation transitions, keyboard routing, theme and language persistence | [developer.mozilla.org/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| **Next.js** | Modern fullstack React framework (curriculum module) | [nextjs.org](https://nextjs.org/) |
| **Tailwind CSS** | Utility-first CSS styling engine (via Tailwind Play CDN) and curriculum subject | [tailwindcss.com](https://tailwindcss.com/) |
| **Shadcn UI** | Accessible component architecture (curriculum module) | [ui.shadcn.com](https://ui.shadcn.com/) |
| **Git** | Distributed version control system (curriculum module) | [git-scm.com](https://git-scm.com/) |
| **GitHub** | Cloud Git repository hosting platform (curriculum module) | [github.com](https://github.com/) |
| **Python 3** | Lightweight built-in local development server | [python.org](https://www.python.org/) |

## Project Structure

```text
Lesson/
├── Makefile          # Project runner targets (make run, make serve)
├── README.md         # Documentation and technology stack
├── html/             # Interactive presentation decks
│   ├── git.html          # Lesson 01: Git Local Version Control
│   ├── github.html       # Lesson 02: GitHub Cloud Repositories & Collaboration
│   ├── nextjs.html       # Lesson 03: Next.js React Framework
│   ├── tailwindcss.html  # Lesson 04: Tailwind CSS Utility-First Styling
│   └── shadcn.html       # Lesson 05: Shadcn UI Accessible Components
├── images/           # UI mockups, visual diagrams, and flag assets
│   ├── en.png            # English language flag button icon
│   ├── git_flow_hero.jpg
│   ├── github_new_repo_ui.jpg
│   ├── github_repo_view.jpg
│   └── km.png            # Khmer language flag button icon
├── index.html        # Curriculum Home Page Hub (all 5 lessons)
├── script.js         # Shared presentation engine & router
├── styles.css        # Shared design system (light & dark mode, <=20px spacing)
└── translations.js   # English and Khmer localization dictionary
```
