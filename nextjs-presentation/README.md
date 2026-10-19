# Next.js App Router — Interactive Web Presentation & Course

A complete, standalone, interactive web presentation and full-stack course teaching modern **Next.js 15+ (App Router)** from React fundamentals to production deployment.

---

## Overview

- **Format:** Standalone Modern Web Presentation (Pure HTML5, Tailwind CSS, Vanilla JavaScript).
- **Architecture:** Zero-build frontend; runs directly by opening `index.html` in any modern web browser.
- **Language Support:** Bilingual **English** (EN) and natural **Khmer** (ខ្មែរ) with instant runtime toggling and persistence via `localStorage`.
- **Content Scope:** 75 in-depth slides organized across 29 curriculum sections, featuring architecture diagrams, interactive component simulators, code blocks with instant copy, and real production patterns.
- **Icons & Styling:** 100% vector SVG icons (strictly zero emojis), developer dark mode with high contrast, and 0px border-radius design system.

---

## Quick Start

Open `index.html` directly in your browser:

```bash
# Direct browser opening (Linux)
xdg-open index.html

# Or start a local static server
python3 -m http.server 8080
# Visit http://localhost:8080 in your browser
```

---

## Features

- **75 Interactive Slides:** Step-by-step progression covering App Router, Server Components, Server Actions, PostgreSQL integration, authentication, and deployment.
- **Instant Language Switcher:** Toggle between English and natural Khmer with a single click (`EN | ខ្មែរ`) or press the top navigation button. State persists automatically across browser reloads.
- **Interactive Component Simulators:**
  - Client Component state simulator (Slide 23).
  - Server Action mutation form simulator with simulated database persistence (Slide 39).
  - Live `searchParams` URL query string simulator (Slide 40).
- **Full Keyboard Navigation:** Comprehensive keyboard shortcuts for frictionless lecturing and self-paced study.
- **Instant Search (`Ctrl + K`):** Real-time search modal indexing all 75 slide titles, categories, and keywords in both languages.
- **Table of Contents Overview (`O` / `G`):** Modal grid displaying all curriculum sections for rapid jumping.
- **Code Block Copy:** Dedicated one-click copy buttons on all code listings and terminal mockups with visual confirmation.
- **Theme Switcher (`T`):** Seamless toggle between developer dark theme and clean light theme.
- **Fullscreen Presentation Mode (`F`):** Native HTML5 fullscreen integration.

---

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `→` / `Space` / `PageDown` / `L` / `J` | Next slide |
| `←` / `Backspace` / `PageUp` / `H` / `K` / `P` | Previous slide |
| `Home` | First slide (Slide 01) |
| `End` | Last slide (Slide 75) |
| `Ctrl + K` / `Cmd + K` | Open presentation search modal |
| `O` / `G` | Toggle table of contents overview |
| `?` | Toggle keyboard shortcuts modal |
| `F` | Toggle fullscreen mode |
| `T` | Toggle dark/light theme |
| `Esc` | Close any active modal dialog |

---

## Course Curriculum (29 Sections &bull; 75 Slides)

1. **Section 01 — Web to Next.js (Slides 01–05):** From React to Production, Learning Roadmap, What is Next.js, React vs Next.js, Production Use Cases.
2. **Section 02 — Requirements (Slides 06–07):** Prerequisites Checklist, React Fundamentals (Components, Props, State, Hooks).
3. **Section 03 — Create Next.js Project (Slides 08–10):** Environment Requirements, `create-next-app` CLI Prompts, Starting Dev Server & Fast Refresh.
4. **Section 04 — Project Structure (Slides 11–13):** App Router Directory Tree, `app/page.tsx` Route Entry, `app/layout.tsx` Root Shell.
5. **Section 05 — Routing (Slides 14–16):** File-System Routing, Nested Routes, Dynamic Routes (`[id]`).
6. **Section 06 — Navigation (Slides 17–18):** `next/link` Component, Active Links with `usePathname()`.
7. **Section 07 — Components (Slides 19–21):** Reusable Component Functions, Props & TypeScript, Component Architecture.
8. **Section 08 — Server & Client Components (Slides 22–25):** Server Components Default, Client Components (`"use client"`), Direct Comparison, Decision Tree.
9. **Section 09 — Styling (Slides 26–27):** Tailwind CSS Integration, Responsive Breakpoints.
10. **Section 10 — Data Fetching (Slides 28–30):** Server Fetching (`async/await`), Direct Database Access, PostgreSQL & Neon Connection.
11. **Section 11 — Rendering (Slides 31–33):** Rendering Strategies (Static, Dynamic, Streaming), Static vs Dynamic, Streaming UI & Suspense.
12. **Section 12 — Loading & Errors (Slides 34–36):** `loading.tsx` Skeletons, `error.tsx` Boundaries, `notFound()` & `not-found.tsx`.
13. **Section 13 — Server Actions / Mutations (Slides 37–39):** Reads vs Writes, Server Action Concept (`"use server"`), Form + Server Action Flow.
14. **Section 14 — Search & Pagination (Slide 40):** URL Search Parameters (`searchParams`), Bookmarkable State.
15. **Section 15 — Authentication (Slides 41–42):** Session Architecture & HttpOnly Cookies, Public vs Protected Routes (`middleware.ts`).
16. **Section 16 — Environment Variables (Slide 43):** Server-Only Secrets vs `NEXT_PUBLIC_*` Variables.
17. **Section 17 — SEO & Metadata (Slides 44–45):** Metadata API, Sitemaps, Robots, Open Graph Cards.
18. **Section 18 — Images & Fonts (Slides 46–47):** `next/image` Optimization, `next/font` Self-Hosting & Zero CLS.
19. **Section 19 — API / Backend (Slides 48–49):** Unified Full-Stack Architecture, Route Handlers (`route.ts`).
20. **Section 20 — Security (Slides 50–51):** Input Validation with Zod, Parameterized SQL, Client vs Server Security Boundary.
21. **Section 21 — Project Architecture (Slide 52):** Real SaaS Structure & Route Groups (`(auth)`, `(dashboard)`).
22. **Section 22 — Build a Real Project: TaskFlow (Slides 53–56):** TaskFlow Blueprint, Routes, PostgreSQL Schema, End-to-End Data Flow.
23. **Section 23 — Performance (Slides 57–58):** Why Next.js is Fast, Pushing `"use client"` to Leaf Nodes.
24. **Section 24 — Deployment (Slides 59–62):** Production Build, Git Workflow, Vercel Integration, Develop-Preview-Ship Cycle.
25. **Section 25 — Common Mistakes (Slides 63–66):** Everything Is Client Anti-Pattern, Leaking Secrets, No Server Validation, Messy Folders.
26. **Section 26 — Debugging (Slides 67–68):** DevTools & Server Logs, Common Next.js Runtime Errors & Fixes.
27. **Section 27 — Final Architecture (Slide 69):** Master Architecture Diagram.
28. **Section 28 — Cheat Sheet (Slides 70–72):** CLI Commands, Special Files Summary, Core Concepts Reference.
29. **Section 29 — Final Challenge & Roadmap (Slides 73–75):** TaskFlow Capstone Checklist, Full-Stack Developer Roadmap, Final Graduation Message.

---

## Technology Stack & Credits

| Technology | Role | Documentation |
|---|---|---|
| **HTML5** | Semantic structure & document layout | [developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) |
| **Tailwind CSS** | Utility-first styling framework | [tailwindcss.com](https://tailwindcss.com) |
| **Vanilla JavaScript (ES6+)** | Dynamic state, search, navigation & i18n | [developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| **Next.js** | Subject full-stack web framework | [nextjs.org](https://nextjs.org) |
| **Google Fonts** | Typography (Plus Jakarta Sans, Noto Sans Khmer, JetBrains Mono) | [fonts.google.com](https://fonts.google.com) |
| **Neon** | Serverless PostgreSQL database architecture | [neon.tech](https://neon.tech) |
| **Vercel** | Cloud edge deployment platform | [vercel.com](https://vercel.com) |

---

## File Structure

```text
nextjs-presentation/
├── index.html        # Complete 75-slide presentation application
├── app.js            # Controller, bilingual translation dictionaries & search engine
└── README.md         # Documentation, syllabus & reference manual
```
