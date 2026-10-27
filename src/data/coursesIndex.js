export const courses = [
  {
    id: "git",
    lessonKey: "l1",
    title: "Git: Local Version Control",
    module: "MODULE 01",
    level: "Beginner",
    desc: "Master local version control on your machine. Learn repository initialization, file tracking, staging, commits, branches, and the 4-layer mental model.",
    meta: "8 Lessons • Local Machine",
    category: "foundations",
    iconColor: "text-orange-600 dark:text-orange-500",
    iconBg: "bg-orange-500/10 border-orange-500/20",
    tags: [
      "git init",
      "git status",
      "git add",
      "git commit",
      "git branch",
      ".gitignore",
    ],
  },
  {
    id: "github",
    lessonKey: "l2",
    title: "GitHub: Cloud Repositories & Collaboration",
    module: "MODULE 02",
    level: "Beginner",
    desc: "Connect local projects to the cloud. Configure remotes, push code, handle branches, clone repositories, and collaborate with teams using Pull Requests.",
    meta: "8 Lessons • Cloud & Remote",
    category: "foundations",
    iconColor: "text-slate-900 dark:text-white",
    iconBg: "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700",
    tags: [
      "git remote",
      "git push",
      "git pull",
      "clone",
      "pull request",
      "fork",
    ],
  },
  {
    id: "nextjs",
    lessonKey: "l3",
    title: "Next.js: The React Framework for the Web",
    module: "MODULE 03",
    level: "Intermediate",
    desc: "Build modern fullstack web applications with React 19 and the Next.js App Router. Master Server Components, file-based routing, nested layouts, and API routes.",
    meta: "75 Slides • React Fullstack",
    category: "frontend",
    iconColor: "text-slate-900 dark:text-white",
    iconBg: "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700",
    tags: [
      "app router",
      "server components",
      "client components",
      "layouts",
      "routing",
      "api routes",
    ],
  },
  {
    id: "tailwindcss",
    lessonKey: "l4",
    title: "Tailwind CSS: Modern Utility-First Styling",
    module: "MODULE 04",
    level: "Beginner / Intermediate",
    desc: "Style clean, responsive, production interfaces without leaving your HTML. Learn utility classes, flexbox/grid layouts, responsive breakpoints, and dark mode.",
    meta: "12 Slides • Modern CSS",
    category: "frontend",
    iconColor: "text-sky-500 dark:text-sky-400",
    iconBg: "bg-sky-500/10 border-sky-500/20",
    tags: [
      "utility-first",
      "flexbox",
      "grid",
      "responsive",
      "dark mode",
      "arbitrary values",
    ],
  },
  {
    id: "shadcn",
    lessonKey: "l5",
    title: "Shadcn UI: Accessible Component Architecture",
    module: "MODULE 05",
    level: "Intermediate",
    desc: "Assemble accessible, production-grade component systems using Radix UI primitives, Tailwind CSS, and the modern CLI. Customize design tokens with ease.",
    meta: "12 Slides • Component System",
    category: "frontend",
    iconColor: "text-slate-900 dark:text-white",
    iconBg: "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700",
    tags: ["radix ui", "components", "cli", "cva", "cn()", "accessibility"],
  },
  {
    id: "postgres",
    lessonKey: "l6",
    title: "PostgreSQL & Neon Database",
    module: "MODULE 06",
    level: "Intermediate / Production",
    desc: "Master relational database architecture, psql CLI, data modeling, indexes, ACID transactions, migrations, and serverless PostgreSQL with Neon branching.",
    meta: "72 Slides • Relational & Serverless",
    category: "backend",
    iconColor: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    tags: [
      "psql",
      "sql queries",
      "relations",
      "indexes",
      "transactions",
      "neon branch",
    ],
  },
  {
    id: "vercel",
    lessonKey: "l7",
    title: "Vercel & Web Deployment",
    module: "MODULE 07",
    level: "Intermediate / Production",
    desc: "Master real-world Next.js web deployment from GitHub to Vercel. Configure Neon PostgreSQL, custom domains, DNS records, HTTPS, and production rollbacks.",
    meta: "72 Slides • Cloud & Production",
    category: "devops",
    iconColor: "text-slate-900 dark:text-white",
    iconBg: "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700",
    tags: [
      "vercel deploy",
      "git integration",
      "env vars",
      "domains",
      "serverless",
      "rollbacks",
    ],
  },
  {
    id: "cloudflare",
    lessonKey: "l9",
    title: "Cloudflare: Global Edge Infrastructure",
    module: "MODULE 08",
    level: "Intermediate / Production",
    desc: "From your first domain and DNS records to global CDN, WAF, Workers, R2 storage, SSL/TLS, and edge deployment for resilient web systems.",
    meta: "65 Slides • Global Edge",
    category: "devops",
    iconColor: "text-amber-600 dark:text-orange-500",
    iconBg: "bg-orange-500/10 border-orange-500/20",
    tags: [
      "dns",
      "cdn caching",
      "waf rules",
      "workers",
      "r2 storage",
      "zero trust",
    ],
  },
  {
    id: "prompting",
    lessonKey: "l8",
    title: "Prompt Engineering & AI Development",
    module: "MODULE 09",
    level: "Advanced / AI-Assisted",
    desc: "Master prompt engineering, logical reasoning, codebase analysis, and safe coding agent workflows. Learn to evaluate evidence, plan architecture, and verify results.",
    meta: "75 Slides • AI & Engineering",
    category: "ai",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    tags: [
      "reasoning",
      "system prompts",
      "code agents",
      "verification",
      "task breakdown",
      "anti-patterns",
    ],
  },
];

export async function loadCourseData(courseId) {
  switch (courseId) {
    case "git":
      return (await import("./courses/git.json")).default;
    case "github":
      return (await import("./courses/github.json")).default;
    case "nextjs":
      return (await import("./courses/nextjs.json")).default;
    case "tailwindcss":
      return (await import("./courses/tailwindcss.json")).default;
    case "shadcn":
      return (await import("./courses/shadcn.json")).default;
    case "postgres":
      return (await import("./courses/postgres.json")).default;
    case "vercel":
      return (await import("./courses/vercel.json")).default;
    case "prompting":
      return (await import("./courses/prompting.json")).default;
    case "cloudflare":
      return (await import("./courses/cloudflare.json")).default;
    default:
      throw new Error(`Unknown course: ${courseId}`);
  }
}
