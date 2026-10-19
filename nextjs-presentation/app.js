const totalSlides = 75;
let currentSlideIndex = 0;
let currentLang = localStorage.getItem('nextjs_pres_lang') || 'en';
let currentTheme = localStorage.getItem('nextjs_pres_theme') || 'dark';

const currentSlideLabel = document.getElementById('current-slide-num');
const totalSlidesLabel = document.getElementById('total-slides-num');
const progressFill = document.getElementById('progress-bar-fill');
const currentPartBadge = document.getElementById('current-part-badge');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const overviewModal = document.getElementById('overview-modal');
const shortcutsModal = document.getElementById('shortcuts-modal');
const searchModal = document.getElementById('search-modal');
const overviewGrid = document.getElementById('overview-grid');
const slideJumpSelect = document.getElementById('slide-jump-select');
const btnLangToggle = document.getElementById('btn-lang-toggle');
const btnThemeToggle = document.getElementById('btn-theme-toggle');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const searchData = [
  { id: 1, cat: "SECTION 01", title: "Next.js: From React to Production", kw: "intro fullstack overview react production architecture" },
  { id: 2, cat: "SECTION 01", title: "What You Will Learn", kw: "roadmap routing server components data database auth deployment" },
  { id: 3, cat: "SECTION 01", title: "What Is Next.js?", kw: "definition react framework fullstack capabilities metadata optimization" },
  { id: 4, cat: "SECTION 01", title: "React vs Next.js", kw: "comparison library vs framework file-system routing conventions" },
  { id: 5, cat: "SECTION 01", title: "When Should You Use Next.js?", kw: "use cases saas dashboard e-commerce cms admin marketing" },
  { id: 6, cat: "SECTION 02", title: "Before Learning Next.js", kw: "prerequisites html css javascript react fundamentals" },
  { id: 7, cat: "SECTION 02", title: "React Fundamentals You Need", kw: "components props state events hooks jsx server client" },
  { id: 8, cat: "SECTION 03", title: "Install Requirements", kw: "node.js package manager pnpm npm editor terminal" },
  { id: 9, cat: "SECTION 03", title: "Create a Next.js Application", kw: "create-next-app typescript eslint tailwind app router src alias" },
  { id: 10, cat: "SECTION 03", title: "Start Development Server", kw: "npm run dev localhost 3000 fast refresh hmr" },
  { id: 11, cat: "SECTION 04", title: "Next.js Project Structure", kw: "project structure app public package.json tsconfig next.config" },
  { id: 12, cat: "SECTION 04", title: "app/page.tsx", kw: "page.tsx route entry default export main jsx" },
  { id: 13, cat: "SECTION 04", title: "app/layout.tsx", kw: "layout.tsx root layout shared ui html body children" },
  { id: 14, cat: "SECTION 05", title: "File-System Routing", kw: "routing folders about contact page.tsx paths" },
  { id: 15, cat: "SECTION 05", title: "Nested Routes", kw: "nested routes dashboard users settings hierarchy" },
  { id: 16, cat: "SECTION 05", title: "Dynamic Routes", kw: "dynamic routes [id] params promise async page" },
  { id: 17, cat: "SECTION 06", title: "Link Component", kw: "next/link client-side navigation prefetch href" },
  { id: 18, cat: "SECTION 06", title: "Navigation Architecture", kw: "navigation tree home products dashboard about" },
  { id: 19, cat: "SECTION 07", title: "What Is a Component?", kw: "component reusable ui function button jsx" },
  { id: 20, cat: "SECTION 07", title: "Props", kw: "props arguments children typescript interface typing" },
  { id: 21, cat: "SECTION 07", title: "Component Architecture", kw: "components folder ui modularity button card modal navbar" },
  { id: 22, cat: "SECTION 08", title: "Server Components", kw: "server components default app router async data zero bundle" },
  { id: 23, cat: "SECTION 08", title: "Client Components", kw: "use client client components usestate useeffect events counter" },
  { id: 24, cat: "SECTION 08", title: "Server vs Client", kw: "comparison data fetching vs interaction browser apis" },
  { id: 25, cat: "SECTION 08", title: "Choosing Server or Client", kw: "decision tree diagram when to use client boundaries" },
  { id: 26, cat: "SECTION 09", title: "Tailwind CSS in Next.js", kw: "tailwind css styling utilities rounded p-6 shadow" },
  { id: 27, cat: "SECTION 09", title: "Responsive UI", kw: "responsive grid breakpoints sm md lg mobile-first" },
  { id: 28, cat: "SECTION 10", title: "Fetching Data", kw: "data fetching async await fetch api server-side" },
  { id: 29, cat: "SECTION 10", title: "Database Access", kw: "database direct query server component sql security" },
  { id: 30, cat: "SECTION 10", title: "PostgreSQL & Cloud DBs", kw: "postgresql neon prisma drizzle supabase cloud db" },
  { id: 31, cat: "SECTION 11", title: "Rendering in Next.js", kw: "rendering strategies static dynamic streaming ssr ssg" },
  { id: 32, cat: "SECTION 11", title: "Static vs Dynamic", kw: "static build cache dynamic request fresh data" },
  { id: 33, cat: "SECTION 11", title: "Streaming & Suspense", kw: "streaming suspense loading skeleton progressive render" },
  { id: 34, cat: "SECTION 12", title: "loading.tsx", kw: "loading.tsx instant loading states automatic suspense" },
  { id: 35, cat: "SECTION 12", title: "error.tsx", kw: "error.tsx error boundaries reset recovery use client" },
  { id: 36, cat: "SECTION 12", title: "notFound() & not-found.tsx", kw: "notfound not-found.tsx 404 missing resource handling" },
  { id: 37, cat: "SECTION 13", title: "Reading vs Changing Data", kw: "mutations read vs write crud get post" },
  { id: 38, cat: "SECTION 13", title: "Server Action Concept", kw: "use server server actions formdata mutations validation" },
  { id: 39, cat: "SECTION 13", title: "Form + Server Action", kw: "form action revalidatepath database submit flow" },
  { id: 40, cat: "SECTION 14", title: "URL Search Parameters", kw: "searchparams query page url state filters shareable" },
  { id: 41, cat: "SECTION 15", title: "Authentication Architecture", kw: "auth session login cookies protected routes jwt" },
  { id: 42, cat: "SECTION 15", title: "Public vs Protected Routes", kw: "middleware authorization public login dashboard" },
  { id: 43, cat: "SECTION 16", title: "Environment Variables", kw: ".env.local next_public_ secrets server-only security" },
  { id: 44, cat: "SECTION 17", title: "Metadata API", kw: "metadata generatemetadata title description head" },
  { id: 45, cat: "SECTION 17", title: "SEO Best Practices", kw: "seo open graph sitemap robots canonical structured data" },
  { id: 46, cat: "SECTION 18", title: "next/image", kw: "next/image webp avif lazy loading layout shift responsive" },
  { id: 47, cat: "SECTION 18", title: "next/font", kw: "next/font google fonts self-hosting zero cls layout shift" },
  { id: 48, cat: "SECTION 19", title: "Next.js as Full Stack", kw: "full stack frontend backend server actions route handlers" },
  { id: 49, cat: "SECTION 19", title: "Route Handlers", kw: "route.ts api endpoints get post response.json rest" },
  { id: 50, cat: "SECTION 20", title: "Security Basics", kw: "security never trust client validate server least privilege" },
  { id: 51, cat: "SECTION 20", title: "Client vs Server Security", kw: "untrusted client trusted server secrets access" },
  { id: 52, cat: "SECTION 21", title: "Real Application Structure", kw: "folder architecture (auth) dashboard lib actions db" },
  { id: 53, cat: "SECTION 22", title: "TaskFlow Architecture", kw: "taskflow real project saas app router postgresql" },
  { id: 54, cat: "SECTION 22", title: "TaskFlow Routes", kw: "taskflow routes /login /register /dashboard/tasks" },
  { id: 55, cat: "SECTION 22", title: "TaskFlow Database", kw: "taskflow database users tasks foreign keys schema" },
  { id: 56, cat: "SECTION 22", title: "TaskFlow Data Flow", kw: "taskflow flow user form action validate db ui" },
  { id: 57, cat: "SECTION 23", title: "Why Next.js Can Be Fast", kw: "performance server render streaming code splitting caching" },
  { id: 58, cat: "SECTION 23", title: "Avoid Unnecessary Client Components", kw: "architecture leaf components push use client down" },
  { id: 59, cat: "SECTION 24", title: "Production Build", kw: "npm run build production start static vs dynamic" },
  { id: 60, cat: "SECTION 24", title: "GitHub Workflow", kw: "git commit git push github repository version control" },
  { id: 61, cat: "SECTION 24", title: "Vercel Deployment", kw: "vercel deployment git integration preview branches" },
  { id: 62, cat: "SECTION 24", title: "Develop -> Preview -> Ship", kw: "workflow develop push preview pr merge ship" },
  { id: 63, cat: "SECTION 25", title: "Mistake: Everything Is Client", kw: "anti-pattern excessive use client bundle size" },
  { id: 64, cat: "SECTION 25", title: "Mistake: Exposing Secrets", kw: "anti-pattern next_public_ leaked database passwords" },
  { id: 65, cat: "SECTION 25", title: "Mistake: No Server Validation", kw: "anti-pattern client-only validation bypassed" },
  { id: 66, cat: "SECTION 25", title: "Mistake: Poor Folder Architecture", kw: "anti-pattern chaotic folders components2 structure" },
  { id: 67, cat: "SECTION 26", title: "Debugging Next.js", kw: "debugging devtools terminal logs react devtools" },
  { id: 68, cat: "SECTION 26", title: "Common Errors & Fixes", kw: "hydration mismatch window undefined module not found" },
  { id: 69, cat: "SECTION 27", title: "Modern Next.js Architecture", kw: "master architecture user pages components api server db" },
  { id: 70, cat: "SECTION 28", title: "Next.js Commands Cheat Sheet", kw: "cheat sheet create-next-app dev build start" },
  { id: 71, cat: "SECTION 28", title: "Next.js Special Files", kw: "cheat sheet page layout loading error not-found route" },
  { id: 72, cat: "SECTION 28", title: "Next.js Core Concepts", kw: "cheat sheet app router server client actions streaming" },
  { id: 73, cat: "SECTION 29", title: "Final Challenge: Build Your Own SaaS", kw: "challenge taskflow saas full-stack checklist" },
  { id: 74, cat: "SECTION 29", title: "Development Roadmap", kw: "roadmap html css js react nextjs database auth production" },
  { id: 75, cat: "SECTION 29", title: "Final Message", kw: "quote conclusion fundamentals architecture production" }
];

const translations = {
  en: {
    ui_brand: "Next.js Mastery",
    ui_tag: "FULL-STACK COURSE",
    ui_slide: "Slide",
    ui_of: "of",
    ui_prev: "Previous",
    ui_next: "Next",
    ui_start: "Start Presentation",
    ui_overview: "Contents",
    ui_shortcuts: "Shortcuts",
    ui_search: "Search",
    ui_search_placeholder: "Search slides, code, concepts... (Ctrl+K)",
    ui_search_no_results: "No slides found matching your query.",
    ui_overview_title: "Table of Contents (75 Slides)",
    ui_shortcuts_title: "Keyboard Shortcuts",
    ui_copy: "Copy",
    ui_copied: "Copied!",
    ui_theme_toggle: "Toggle Theme (T)",
    ui_fullscreen_toggle: "Toggle Fullscreen (F)",
    ui_back_home: "All Lessons",
    ui_close: "Close (Esc)",

    s1_title: "Next.js<br><span class=\"text-blue-400\">From React to Production</span>",
    s1_sub: "Build modern full-stack web applications",
    s1_desc: "A comprehensive developer course taking you from core React principles to building, securing, and deploying enterprise-grade full-stack web applications with the Next.js App Router.",

    s2_title: "What You Will Learn",
    s2_sub: "The progressive learning curve from component basics to full-stack production",

    s3_title: "What Is Next.js?",
    s3_sub: "The official React framework for production-grade full-stack web applications",

    s4_title: "React vs Next.js",
    s4_sub: "Understanding the difference between a UI library and a full-stack framework",

    s5_title: "When Should You Use Next.js?",
    s5_sub: "Ideal production use cases across modern web development",

    s6_title: "Before Learning Next.js",
    s6_sub: "The essential foundational knowledge needed to succeed",

    s7_title: "React Fundamentals You Need",
    s7_sub: "Key React mental models used throughout the Next.js App Router",

    s8_title: "Install Requirements",
    s8_sub: "Preparing your local development environment",

    s9_title: "Create a Next.js Application",
    s9_sub: "Bootstrapping a modern project with create-next-app",

    s10_title: "Start Development Server",
    s10_sub: "Running your application with Fast Refresh",

    s11_title: "Next.js Project Structure",
    s11_sub: "Understanding the role of every core file and folder",

    s12_title: "app/page.tsx",
    s12_sub: "How page files define unique accessible routes",

    s13_title: "app/layout.tsx",
    s13_sub: "Defining shared root structure, fonts, and persistent UI",

    s14_title: "File-System Routing",
    s14_sub: "Folders define URL paths automatically without manual route config",

    s15_title: "Nested Routes",
    s15_sub: "Organizing deep dashboards and sub-pages logically",

    s16_title: "Dynamic Routes",
    s16_sub: "Handling variable URL segments with [id] and async params",

    s17_title: "Link Component",
    s17_sub: "Fast client-side navigation with automated background prefetching",

    s18_title: "Navigation Architecture",
    s18_sub: "Visualizing the route hierarchy of a web application",

    s19_title: "What Is a Component?",
    s19_sub: "Reusable, self-contained building blocks of user interface",

    s20_title: "Props",
    s20_sub: "Passing data cleanly between components with TypeScript types",

    s21_title: "Component Architecture",
    s21_sub: "Organizing reusable UI components into a maintainable hierarchy",

    s22_title: "Server Components",
    s22_sub: "The default App Router paradigm: async rendering with 0kB client JS",

    s23_title: "Client Components",
    s23_sub: "Opting into browser interactivity with the 'use client' directive",

    s24_title: "Server vs Client",
    s24_sub: "Side-by-side comparison of responsibilities and capabilities",

    s25_title: "Choosing Server or Client",
    s25_sub: "A simple decision framework for component architecture",

    s26_title: "Tailwind CSS in Next.js",
    s26_sub: "Utility-first styling built directly into your JSX templates",

    s27_title: "Responsive UI",
    s27_sub: "Creating mobile-first responsive grid layouts with Tailwind breakpoints",

    s28_title: "Fetching Data",
    s28_sub: "Direct async/await data fetching inside Server Components",

    s29_title: "Database Access",
    s29_sub: "Querying databases directly from the server without intermediate REST APIs",

    s30_title: "PostgreSQL & Cloud DBs",
    s30_sub: "Connecting modern relational databases to Next.js",

    s31_title: "Rendering in Next.js",
    s31_sub: "Static rendering, dynamic rendering, and streaming architectures",

    s32_title: "Static vs Dynamic",
    s32_sub: "Choosing between build-time caching and on-demand server rendering",

    s33_title: "Streaming & Suspense",
    s33_sub: "Breaking slow pages into fast, parallel streaming chunks",

    s34_title: "loading.tsx",
    s34_sub: "Instant skeleton loading screens powered by React Suspense",

    s35_title: "error.tsx",
    s35_sub: "Isolating runtime errors with client error boundaries and retry logic",

    s36_title: "notFound() & not-found.tsx",
    s36_sub: "Gracefully handling missing items and displaying dedicated 404 UI",

    s37_title: "Reading vs Changing Data",
    s37_sub: "Separating data fetching from data mutations",

    s38_title: "Server Action Concept",
    s38_sub: "Secure server-side mutations invoked directly from forms and buttons",

    s39_title: "Form + Server Action",
    s39_sub: "The complete lifecycle of a server-side mutation with revalidation",

    s40_title: "URL Search Parameters",
    s40_sub: "Managing search, filters, and pagination with shareable URL state",

    s41_title: "Authentication Architecture",
    s41_sub: "Session management, secure cookies, and route protection",

    s42_title: "Public vs Protected Routes",
    s42_sub: "Enforcing authorization with Next.js Middleware",

    s43_title: "Environment Variables",
    s43_sub: "Managing secrets securely: server-only vs NEXT_PUBLIC_* variables",

    s44_title: "Metadata API",
    s44_sub: "Defining static and dynamic SEO meta tags in layout and page files",

    s45_title: "SEO Best Practices",
    s45_sub: "Optimizing title, description, Open Graph, and search crawlability",

    s46_title: "next/image",
    s46_sub: "Automatic WebP compression, lazy loading, and zero layout shift",

    s47_title: "next/font",
    s47_sub: "Zero layout shift with self-hosted Google Fonts at build time",

    s48_title: "Next.js as Full Stack",
    s48_sub: "Unifying frontend UI, backend logic, and database operations",

    s49_title: "Route Handlers",
    s49_sub: "Building custom REST and webhook API endpoints with route.ts",

    s50_title: "Security Basics",
    s50_sub: "Core security principles for production web applications",

    s51_title: "Client vs Server Security",
    s51_sub: "Why the client cannot be trusted and how the server protects data",

    s52_title: "Real Application Structure",
    s52_sub: "Scalable folder organization for real production SaaS projects",

    s53_title: "TaskFlow Architecture",
    s53_sub: "High-level system design of our production task management project",

    s54_title: "TaskFlow Routes",
    s54_sub: "Route layout: authentication, dashboard, tasks, and settings",

    s55_title: "TaskFlow Database",
    s55_sub: "Relational schema modeling users and assigned tasks",

    s56_title: "TaskFlow Data Flow",
    s56_sub: "End-to-end data lifecycle from user submission to UI revalidation",

    s57_title: "Why Next.js Can Be Fast",
    s57_sub: "Architectural factors contributing to world-class web performance",

    s58_title: "Avoid Unnecessary Client Components",
    s58_sub: "Keeping client JavaScript minimal by pushing 'use client' to the leaves",

    s59_title: "Production Build",
    s59_sub: "Creating optimized bundles with npm run build and npm run start",

    s60_title: "GitHub Workflow",
    s60_sub: "Version controlling and collaborating with Git and GitHub",

    s61_title: "Vercel Deployment",
    s61_sub: "Automated continuous deployment and preview branch environments",

    s62_title: "Develop -> Preview -> Ship",
    s62_sub: "The modern software development lifecycle from branch to production",

    s63_title: "Mistake 1: Everything Is Client",
    s63_sub: "Why adding 'use client' to every file defeats the framework's advantages",

    s64_title: "Mistake 2: Exposing Secrets",
    s64_sub: "The dangerous difference between server secrets and NEXT_PUBLIC_*",

    s65_title: "Mistake 3: No Server Validation",
    s65_sub: "Why client-side form validation is never enough on its own",

    s66_title: "Mistake 4: Poor Folder Architecture",
    s66_sub: "Avoiding chaotic directory sprawl in growing applications",

    s67_title: "Debugging Next.js",
    s67_sub: "Systematic diagnostic tools for client and server code",

    s68_title: "Common Errors & Fixes",
    s68_sub: "Recognizing hydration mismatches, missing modules, and undefined window",

    s69_title: "Modern Next.js Architecture",
    s69_sub: "Complete end-to-end full-stack architectural overview",

    s70_title: "Next.js Commands Cheat Sheet",
    s70_sub: "Essential CLI commands for project lifecycle management",

    s71_title: "Next.js Special Files",
    s71_sub: "Reference guide to reserved filenames in the App Router",

    s72_title: "Next.js Core Concepts",
    s72_sub: "Quick review of the foundational technologies powering modern Next.js",

    s73_title: "Final Challenge: Build Your Own SaaS",
    s73_sub: "Put your knowledge into practice by building the TaskFlow application",

    s74_title: "Development Roadmap",
    s74_sub: "Your progressive path from web fundamentals to full-stack mastery",

    s75_title: "Congratulations: Course Mastery!",
    s75_sub: "Learn the fundamentals. Understand the architecture. Build real applications. Ship to production."
  },

  km: {
    ui_brand: "Next.js Mastery",
    ui_tag: "វគ្គសិក្សា FULL-STACK",
    ui_slide: "ស្លាយ",
    ui_of: "នៃ",
    ui_prev: "ថយក្រោយ",
    ui_next: "បន្ទាប់",
    ui_start: "ចាប់ផ្ដើមបទបង្ហាញ",
    ui_overview: "មាតិកា",
    ui_shortcuts: "ផ្លូវកាត់ក្តារចុច",
    ui_search: "ស្វែងរក",
    ui_search_placeholder: "ស្វែងរកស្លាយ កូដ ឬគំនិតសំខាន់ៗ... (Ctrl+K)",
    ui_search_no_results: "មិនមានស្លាយត្រូវគ្នានឹងពាក្យស្វែងរកឡើយ។",
    ui_overview_title: "មាតិកាស្លាយទាំងអស់ (៧៥ ស្លាយ)",
    ui_shortcuts_title: "ផ្លូវកាត់ក្តារចុច",
    ui_copy: "ចម្លង",
    ui_copied: "បានចម្លង!",
    ui_theme_toggle: "ប្តូរពណ៌ Theme (T)",
    ui_fullscreen_toggle: "ពេញអេក្រង់ (F)",
    ui_back_home: "មេរៀនទាំងអស់",
    ui_close: "បិទ (Esc)",

    s1_title: "Next.js<br><span class=\"text-blue-400\">ពី React ទៅកាន់ Production</span>",
    s1_sub: "បង្កើត modern full-stack web application ពេញលេញ",
    s1_desc: "វគ្គសិក្សាដ៏ទូលំទូលាយដែលនាំអ្នកពីមូលដ្ឋានគ្រឹះ React រហូតដល់ការកសាង ការពារសុវត្ថិភាព និងដាក់ឱ្យដំណើរការ full-stack web application កម្រិតសហគ្រាសជាមួយ Next.js App Router។",

    s2_title: "អ្វីដែលអ្នកនឹងរៀនក្នុងវគ្គនេះ",
    s2_sub: "ផែនទីបង្ហាញផ្លូវនៃការសិក្សាពីកម្រិតដំបូងរហូតដល់ Production",

    s3_title: "Next.js ជាអ្វី?",
    s3_sub: "React framework ផ្លូវការសម្រាប់បង្កើត full-stack web application ក្នុង Production",

    s4_title: "ការប្រៀបធៀប React និង Next.js",
    s4_sub: "ស្វែងយល់ពីភាពខុសគ្នារវាង UI Library និង Full-Stack Framework",

    s5_title: "ពេលណាគួរជ្រើសរើសប្រើ Next.js?",
    s5_sub: "ករណីប្រើប្រាស់ជាក់ស្តែងក្នុងពិភព web development ទំនើប",

    s6_title: "ចំណេះដឹងដែលត្រូវមានមុនរៀន Next.js",
    s6_sub: "មូលដ្ឋានគ្រឹះចាំបាច់ដែលជួយឱ្យអ្នករៀន Next.js បានជោគជ័យ",

    s7_title: "មូលដ្ឋានគ្រឹះ React ដែលអ្នកត្រូវការ",
    s7_sub: "គំនិតស្នូលក្នុង React ដែលត្រូវបានប្រើប្រាស់ពេញមួយ Next.js App Router",

    s8_title: "តម្រូវការដំឡើងប្រព័ន្ធ (Environment)",
    s8_sub: "ការរៀបចំកុំព្យូទ័ររបស់អ្នកសម្រាប់សរសេរ Next.js",

    s9_title: "ការបង្កើតគម្រោង Next.js ដំបូង",
    s9_sub: "បង្កើត Project ថ្មីដោយប្រើប្រាស់ឧបករណ៍ផ្លូវការ create-next-app",

    s10_title: "បើកដំណើរការ Development Server",
    s10_sub: "ដំណើរការ App លើម៉ាស៊ីនផ្ទាល់ជាមួយប្រព័ន្ធ Fast Refresh ដ៏រហ័ស",

    s11_title: "រចនាសម្ព័ន្ធ Folder នៃគម្រោង Next.js",
    s11_sub: "ស្វែងយល់ពីតួនាទីនៃ Folder និង File សំខាន់ៗនីមួយៗ",

    s12_title: "ស្វែងយល់អំពី app/page.tsx",
    s12_sub: "របៀបដែល file page.tsx បង្កើតផ្លូវ Route លើ Browser",

    s13_title: "ស្វែងយល់អំពី Root Layout (app/layout.tsx)",
    s13_sub: "ការកំណត់រចនាសម្ព័ន្ធរួម <html>, <body>, Fonts និង Shared UI",

    s14_title: "ប្រព័ន្ធផ្លូវ Routing ផ្អែកលើ File-System",
    s14_sub: "ឈ្មោះ Folder ក្លាយជាផ្លូវ URL ដោយស្វ័យប្រវត្តិកាត់បន្ថយការកំណត់ Route ដោយដៃ",

    s15_title: "ការរៀបចំផ្លូវ Nested Routes",
    s15_sub: "រៀបចំទំព័រ Dashboard និងទំព័ររងៗឱ្យមានរបៀបរៀបរយ",

    s16_title: "ការបង្កើតផ្លូវ Dynamic Routes [id]",
    s16_sub: "គ្រប់គ្រង URL ដែលមានតម្លៃប្រែប្រួលតាមរយៈ [id] និង async params",

    s17_title: "សមាសភាគ Link Component",
    s17_sub: "ការរុករកទំព័រលឿនរហ័សតាម client-side ជាមួយការទាញទិន្នន័យទុកជាមុន (Prefetching)",

    s18_title: "ស្ថាបត្យកម្មរុករកទំព័រ (Navigation Tree)",
    s18_sub: "ការមើលឃើញឋានានុក្រមផ្លូវនៃ Web Application ទាំងមូល",

    s19_title: "តើអ្វីទៅជា Component?",
    s19_sub: "ប្លុកសំណង់ UI ដែលអាចប្រើឡើងវិញបាន និងមានលក្ខណៈឯករាជ្យ",

    s20_title: "ការបញ្ជូនទិន្នន័យតាមរយៈ Props",
    s20_sub: "ការបញ្ជូន Data រវាង Components ជាមួយ TypeScript Types យ៉ាងត្រឹមត្រូវ",

    s21_title: "ការរៀបចំ Folder Components",
    s21_sub: "រៀបចំ UI Components ឱ្យមានរបៀប ងាយស្រួលថែទាំក្នុងគម្រោងធំ",

    s22_title: "ស្វែងយល់អំពី Server Components",
    s22_sub: "ស្តង់ដារលំនាំដើមក្នុង App Router៖ Render លើ Server និងមិនបញ្ជូន JS ទៅ Client (0kB)",

    s23_title: "ស្វែងយល់អំពី Client Components ('use client')",
    s23_sub: "ការបើកដំណើរការអន្តរកម្មលើ Browser តាមរយៈពាក្យបញ្ជា 'use client'",

    s24_title: "ប្រៀបធៀប Server និង Client Components",
    s24_sub: "ការប្រៀបធៀបតួនាទី និងសមត្ថភាពជាក់ស្តែងទល់មុខគ្នា",

    s25_title: "វិធីសាស្ត្រសម្រេចចិត្តជ្រើសរើស Server ឬ Client",
    s25_sub: "ដ្យាក្រាមសម្រេចចិត្តដ៏សាមញ្ញសម្រាប់ស្ថាបត្យកម្ម Component របស់អ្នក",

    s26_title: "ការប្រើប្រាស់ Tailwind CSS ក្នុង Next.js",
    s26_sub: "ការរចនា UI លឿនរហ័សតាមរយៈ Utility Classes នៅក្នុង JSX ផ្ទាល់",

    s27_title: "ការរចនា UI បត់បែនតាមឧបករណ៍ (Responsive)",
    s27_sub: "បង្កើត Layout បត់បែនតាមទូរស័ព្ទ និងកុំព្យូទ័រតាមរយៈ Tailwind Breakpoints",

    s28_title: "ការទាញយកទិន្នន័យ (Data Fetching)",
    s28_sub: "ប្រើប្រាស់ async/await ទាញយកទិន្នន័យដោយផ្ទាល់ក្នុង Server Components",

    s29_title: "ការតភ្ជាប់ Database ដោយផ្ទាល់ពី Server",
    s29_sub: "ទាញយកទិន្នន័យពី Database ដោយផ្ទាល់ដោយមិនបាច់ឆ្លងកាត់ REST API កណ្តាល",

    s30_title: "ស្ថាបត្យកម្ម PostgreSQL & Modern Databases",
    s30_sub: "ការតភ្ជាប់ Next.js ជាមួយ Cloud Databases ទំនើបៗដូចជា Neon, Supabase, Prisma",

    s31_title: "យុទ្ធសាស្ត្រ Rendering ក្នុង Next.js",
    s31_sub: "ស្វែងយល់អំពី Static rendering, Dynamic rendering និង Streaming",

    s32_title: "ការប្រៀបធៀប Static និង Dynamic Rendering",
    s32_sub: "ជ្រើសរើសរវាងការ Render ទុកជាមុនពេល Build និងការ Render ភ្លាមៗពេលមាន Request",

    s33_title: "ដំណើរការ Streaming និង React Suspense",
    s33_sub: "បំបែកទំព័រយឺតៗឱ្យបញ្ជូនទិន្នន័យមកជាដំណាក់កាលៗប្រកបដោយភាពរលូន",

    s34_title: "ការបង្ហាញ Loading UI ជាមួយ loading.tsx",
    s34_sub: "បង្កើតផ្ទាំង Skeleton Loading ភ្លាមៗតាមរយៈប្រព័ន្ធ React Suspense ស្វ័យប្រវត្តិ",

    s35_title: "ការគ្រប់គ្រងកំហុសជាមួយ error.tsx",
    s35_sub: "ការពារមិនឱ្យគាំង App ទាំងមូលជាមួយ Error Boundary និងប៊ូតុង Reset សាកល្បងឡើងវិញ",

    s36_title: "ការគ្រប់គ្រងទំព័រ 404 ជាមួយ not-found.tsx",
    s36_sub: "ហៅអនុគមន៍ notFound() និងបង្ហាញ UI ស្អាតបាតពេលរកទិន្នន័យមិនឃើញ",

    s37_title: "ភាពខុសគ្នារវាងការអាន និងការកែប្រែទិន្នន័យ",
    s37_sub: "បែងចែកឱ្យច្បាស់រវាងការ Fetch Data (Read) និងការកែប្រែទិន្នន័យ (Mutations)",

    s38_title: "គំនិតចម្បងនៃ Server Actions ('use server')",
    s38_sub: "ការកែប្រែទិន្នន័យលើ Server ដោយផ្ទាល់តាមរយៈ Form និង Button ដោយសុវត្ថិភាព",

    s39_title: "ការបញ្ជូន Form ជាមួយ Server Action",
    s39_sub: "វដ្តជីវិតពេញលេញ៖ Form → Server Action → Validation → Database → UI",

    s40_title: "ការគ្រប់គ្រង Search និង Filter តាម URL Search Params",
    s40_sub: "រក្សាទុកស្ថានភាពស្វែងរកក្នុង URL ដើម្បីងាយស្រួល Share Link និង Bookmark",

    s41_title: "ស្ថាបត្យកម្មប្រព័ន្ធផ្ទៀងផ្ទាត់ Authentication",
    s41_sub: "ការគ្រប់គ្រង Session, សុវត្ថិភាព Cookies និងការការពារទំព័រ Dashboard",

    s42_title: "ការការពារផ្លូវ Protected Routes ជាមួយ Middleware",
    s42_sub: "ការត្រួតពិនិត្យសិទ្ធិ Authorization មុនពេលអនុញ្ញាតឱ្យចូលកាន់ Dashboard",

    s43_title: "ការគ្រប់គ្រង Environment Variables និងលេខសម្ងាត់",
    s43_sub: "ការពារលេខសម្ងាត់៖ ភាពខុសគ្នារវាង Server-only និង NEXT_PUBLIC_*",

    s44_title: "ការកំណត់ Metadata API ក្នុង Next.js",
    s44_sub: "កំណត់ Title, Description និង SEO Tags ក្នុង Layout និង Page",

    s45_title: "គោលការណ៍ SEO សម្រាប់បង្កើនចំណាត់ថ្នាក់ស្វែងរក",
    s45_sub: "រៀបចំ Open Graph, Sitemap, Robots និង Canonical URL ឱ្យត្រូវស្តង់ដារ",

    s46_title: "ការបង្កើនប្រសិទ្ធភាពរូបភាពជាមួយ next/image",
    s46_sub: "បង្រួមរូបភាព WebP ស្វ័យប្រវត្តិ ទាញយករូបភាពពេល Scroll និងការពារកុំឱ្យរំកិល Layout",

    s47_title: "ការបង្កើនប្រសិទ្ធភាព Font ជាមួយ next/font",
    s47_sub: "ទាញយក Google Fonts មករក្សាទុកក្នុង Server ពេល Build ការពារកុំឱ្យ Layout ញាក់ (Zero CLS)",

    s48_title: "Next.js ជាប្រព័ន្ធ Full-Stack ពេញលេញ",
    s48_sub: "រួមបញ្ចូលគ្នាទាំង Frontend UI, Backend Logic និង Database ក្នុងគម្រោងតែមួយ",

    s49_title: "ការបង្កើត API Endpoints ជាមួយ Route Handlers (route.ts)",
    s49_sub: "សរសេរ REST API និង Webhooks តាមរយៈ GET, POST, PUT, DELETE ជាមួយ Response.json()",

    s50_title: "គោលការណ៍សុវត្ថិភាពមូលដ្ឋានក្នុង Web App",
    s50_sub: "ក្បួនសុវត្ថិភាពសំខាន់ៗដែល Developer គ្រប់រូបត្រូវតែដឹងក្នុង Production",

    s51_title: "ព្រំដែនសុវត្ថិភាពរវាង Client និង Server",
    s51_sub: "ហេតុអ្វីមិនត្រូវទុកចិត្ត Client និងរបៀបដែល Server ការពារទិន្នន័យ",

    s52_title: "រចនាសម្ព័ន្ធគម្រោងខ្នាតធំជាក់ស្តែង (Production App)",
    s52_sub: "ការរៀបចំ Folder ឱ្យមានរបៀបរៀបរយសម្រាប់គម្រោង SaaS ធំៗ",

    s53_title: "គម្រោង TaskFlow៖ ស្ថាបត្យកម្មប្រព័ន្ធ",
    s53_sub: "ស្ថាបត្យកម្មរួមនៃកម្មវិធី Task Management កម្រិត Production",

    s54_title: "គម្រោង TaskFlow៖ បណ្តាញផ្លូវទំព័រ (Routes)",
    s54_sub: "រៀបចំផ្លូវ Authentication, Dashboard, Tasks និង Settings",

    s55_title: "គម្រោង TaskFlow៖ តារាងទិន្នន័យ Database",
    s55_sub: "រចនាសម្ព័ន្ធតារាង Users និង Tasks ជាមួយ Foreign Keys និង Timestamps",

    s56_title: "គម្រោង TaskFlow៖ លំហូរទិន្នន័យ End-to-End",
    s56_sub: "ដំណើរការទិន្នន័យពីពេលចុច Submit រហូតដល់ទិន្នន័យបង្ហាញលើ UI ឡើងវិញ",

    s57_title: "ហេតុអ្វី Next.js អាចដំណើរការបានលឿន?",
    s57_sub: "កត្តាស្ថាបត្យកម្មដែលធ្វើឱ្យ Web Application មានល្បឿនលឿនកម្រិតពិភពលោក",

    s58_title: "ជៀសវាងការប្រើ 'use client' ច្រើនជ្រុល",
    s58_sub: "រក្សា Client JavaScript ឱ្យនៅតិចបំផុតដោយរុញ 'use client' ទៅកាន់ចុងមែកធាង UI",

    s59_title: "ការបង្កើត Production Build (npm run build)",
    s59_sub: "ការបង្រួមកូដឱ្យល្អិតល្អន់ និងការដំណើរការ Production Server ជាមួយ npm run start",

    s60_title: "ការភ្ជាប់គម្រោងជាមួយ Git & GitHub",
    s60_sub: "ការគ្រប់គ្រងកំណែកូដ និងការធ្វើការងារជាក្រុមតាមរយៈ Git Repository",

    s61_title: "ការដាក់ឱ្យដំណើរការលើ Vercel (Deployment)",
    s61_sub: "ការ Deploy ដោយស្វ័យប្រវត្តិតាមរយៈ Git Integration និង Preview Branches",

    s62_title: "ខ្សែសង្វាក់ការងារ Develop → Preview → Ship",
    s62_sub: "វដ្តជីវិតនៃការអភិវឌ្ឍ Software ទំនើបពី Feature Branch រហូតដល់ Live Production",

    s63_title: "កំហុសទី ១៖ ដាក់ 'use client' គ្រប់កន្លែង",
    s63_sub: "ហេតុអ្វីការប្រើ 'use client' ច្រើនជ្រុលបំផ្លាញគុណសម្បត្តិនៃ Server Components",

    s64_title: "កំហុសទី ២៖ បែកធ្លាយលេខសម្ងាត់តាម NEXT_PUBLIC_",
    s64_sub: "គ្រោះថ្នាក់ដ៏ធ្ងន់ធ្ងរនៃការដាក់ Database Password ចូលទៅក្នុង NEXT_PUBLIC_*",

    s65_title: "កំហុសទី ៣៖ គ្មានការផ្ទៀងផ្ទាត់លើ Server",
    s65_sub: "ហេតុអ្វីការត្រួតពិនិត្យលើ Browser មិនគ្រប់គ្រាន់ក្នុងការការពារប្រព័ន្ធ",

    s66_title: "កំហុសទី ៤៖ រៀបចំ Folder ច្របូកច្របល់",
    s66_sub: "ជៀសវាងការដាក់ឈ្មោះ Folder ច្របូកច្របល់ (ឧ. components2, new-components)",

    s67_title: "វិធីសាស្ត្រ Debug កំហុសក្នុង Next.js",
    s67_sub: "ឧបករណ៍ និងយុទ្ធសាស្ត្រដោះស្រាយបញ្ហាកូដទាំងលើ Client និង Server",

    s68_title: "កំហុសទូទៅ និងដំណោះស្រាយជាក់ស្តែង",
    s68_sub: "របៀបដោះស្រាយ Hydration Mismatch, Window is undefined និង Module not found",

    s69_title: "ដ្យាក្រាមស្ថាបត្យកម្ម Next.js ទំនើប",
    s69_sub: "ទិដ្ឋភាពទូទៅនៃស្ថាបត្យកម្ម Full-Stack តាំងពី User រហូតដល់ Database",

    s70_title: "តារាងពាក្យបញ្ជា Next.js សំខាន់ៗ (CLI)",
    s70_sub: "តារាងសង្ខេបពាក្យបញ្ជា CLI សម្រាប់ការគ្រប់គ្រងវដ្តជីវិតនៃ Project",

    s71_title: "តារាងឯកសារពិសេសក្នុង App Router",
    s71_sub: "តារាងសង្ខេបឈ្មោះ File ពិសេសៗក្នុង Next.js App Router",

    s72_title: "សង្ខេបគំនិតស្នូលក្នុង Next.js",
    s72_sub: "ការរំលឹកឡើងវិញនូវបច្ចេកវិទ្យាស្នូលដែលទ្រទ្រង់ Next.js ទំនើប",

    s73_title: "ការប្រកួតប្រជែងចុងក្រោយ៖ បង្កើត SaaS ដោយខ្លួនឯង",
    s73_sub: "អនុវត្តចំណេះដឹងរបស់អ្នកដោយការកសាងកម្មវិធី TaskFlow ពេញលេញ",

    s74_title: "ផែនទីបង្ហាញផ្លូវឆ្ពោះទៅ Full-Stack Developer",
    s74_sub: "ជំហានរីកចម្រើនពីមូលដ្ឋានគ្រឹះ Web រហូតដល់ស្ទាត់ជំនាញ Full-Stack",

    s75_title: "អបអរសាទរ៖ អ្នកបានបញ្ចប់វគ្គ Next.js!",
    s75_sub: "រៀនមូលដ្ឋានឱ្យរឹងមាំ។ យល់ពី Architecture។ បង្កើត Application ពិតប្រាកដ។ ហើយ Deploy ទៅ Production។"
  }
};

function setTheme(theme) {
  if (theme !== 'light' && theme !== 'dark') theme = 'dark';
  currentTheme = theme;
  localStorage.setItem('nextjs_pres_theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const sunIcons = document.querySelectorAll('#theme-icon-sun');
  const moonIcons = document.querySelectorAll('#theme-icon-moon');
  if (theme === 'light') {
    sunIcons.forEach(el => { el.style.display = 'block'; });
    moonIcons.forEach(el => { el.style.display = 'none'; });
  } else {
    sunIcons.forEach(el => { el.style.display = 'none'; });
    moonIcons.forEach(el => { el.style.display = 'block'; });
  }
}

function toggleTheme() {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'km') lang = 'en';
  currentLang = lang;
  localStorage.setItem('nextjs_pres_lang', lang);
  document.documentElement.setAttribute('lang', lang);
  if (lang === 'km') {
    document.body.classList.add('lang-km');
  } else {
    document.body.classList.remove('lang-km');
  }

  const langLabel = document.getElementById('lang-label-text');
  if (langLabel) {
    langLabel.textContent = lang === 'km' ? 'ខ្មែរ' : 'EN';
  }

  applyTranslations(lang);
  populateSlideSelect();
  renderOverviewGrid();
  updateSlideView(currentSlideIndex, false);
}

function toggleLanguage() {
  setLanguage(currentLang === 'en' ? 'km' : 'en');
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  for (let i = 1; i <= totalSlides; i++) {
    const slide = document.getElementById('slide-' + i);
    if (!slide) continue;

    const titleEl = slide.querySelector('.slide-title');
    if (titleEl && dict['s' + i + '_title']) {
      titleEl.innerHTML = dict['s' + i + '_title'];
    }

    const subEl = slide.querySelector('.slide-subtitle');
    if (subEl && dict['s' + i + '_sub']) {
      subEl.innerHTML = dict['s' + i + '_sub'];
    }
  }
}

function populateSlideSelect() {
  if (!slideJumpSelect) return;
  slideJumpSelect.innerHTML = '';
  const dict = translations[currentLang] || translations.en;

  for (let i = 1; i <= totalSlides; i++) {
    const opt = document.createElement('option');
    opt.value = i - 1;
    let titleText = dict['s' + i + '_title'] || ('Slide ' + i);
    titleText = titleText.replace(/<[^>]*>?/gm, '');
    opt.textContent = `${i}. ${titleText}`;
    if (i - 1 === currentSlideIndex) opt.selected = true;
    slideJumpSelect.appendChild(opt);
  }
}

function renderOverviewGrid() {
  if (!overviewGrid) return;
  overviewGrid.innerHTML = '';
  const dict = translations[currentLang] || translations.en;

  for (let i = 1; i <= totalSlides; i++) {
    const card = document.createElement('div');
    card.className = 'overview-card' + (i - 1 === currentSlideIndex ? ' active' : '');
    let titleText = dict['s' + i + '_title'] || ('Slide ' + i);
    titleText = titleText.replace(/<[^>]*>?/gm, '');
    const metaItem = searchData.find(item => item.id === i);
    const catText = metaItem ? metaItem.cat : 'SECTION';

    card.innerHTML = `
      <div class="ov-header">
        <span class="ov-num">${i < 10 ? '0' + i : i}</span>
        <span class="ov-cat">${catText}</span>
      </div>
      <div class="ov-title">${titleText}</div>
    `;

    card.addEventListener('click', () => {
      goToSlide(i - 1);
      closeModal(overviewModal);
    });

    overviewGrid.appendChild(card);
  }
}

function updateSlideView(index, smooth = false) {
  if (index < 0) index = 0;
  if (index >= totalSlides) index = totalSlides - 1;
  currentSlideIndex = index;

  const slides = document.querySelectorAll('.slide-item');
  slides.forEach((s, idx) => {
    if (idx === currentSlideIndex) {
      s.classList.add('active');
    } else {
      s.classList.remove('active');
    }
  });

  if (currentSlideLabel) currentSlideLabel.textContent = currentSlideIndex + 1;
  if (totalSlidesLabel) totalSlidesLabel.textContent = totalSlides;
  if (progressFill) {
    const pct = ((currentSlideIndex + 1) / totalSlides) * 100;
    progressFill.style.width = pct + '%';
  }

  const activeSlide = document.getElementById('slide-' + (currentSlideIndex + 1));
  if (activeSlide && currentPartBadge) {
    const part = activeSlide.getAttribute('data-part') || 'NEXT.JS APPS';
    currentPartBadge.textContent = part;
  }

  if (slideJumpSelect) {
    slideJumpSelect.value = currentSlideIndex;
  }

  if (btnPrev) btnPrev.disabled = currentSlideIndex === 0;
  if (btnNext) btnNext.disabled = currentSlideIndex === totalSlides - 1;

  if (window.location.hash !== '#slide-' + (currentSlideIndex + 1)) {
    history.replaceState(null, '', '#slide-' + (currentSlideIndex + 1));
  }

  const viewport = document.querySelector('.slide-viewport');
  if (viewport) viewport.scrollTop = 0;
}

function nextSlide() {
  if (currentSlideIndex < totalSlides - 1) {
    updateSlideView(currentSlideIndex + 1);
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    updateSlideView(currentSlideIndex - 1);
  }
}

function goToSlide(index) {
  updateSlideView(index);
}

function toggleModal(modal) {
  if (!modal) return;
  if (modal.classList.contains('open')) {
    closeModal(modal);
  } else {
    openModal(modal);
  }
}

function openModal(modal) {
  if (!modal) return;
  closeModal(overviewModal);
  closeModal(shortcutsModal);
  closeModal(searchModal);
  modal.classList.add('open');

  if (modal === searchModal && searchInput) {
    searchInput.value = '';
    renderSearchResults('');
    setTimeout(() => searchInput.focus(), 60);
  }
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('open');
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }
}

function renderSearchResults(query) {
  if (!searchResults) return;
  searchResults.innerHTML = '';
  const q = query.trim().toLowerCase();
  const dict = translations[currentLang] || translations.en;

  const matches = searchData.filter(item => {
    if (!q) return true;
    const transTitle = (dict['s' + item.id + '_title'] || '').toLowerCase();
    const transSub = (dict['s' + item.id + '_sub'] || '').toLowerCase();
    const enTitle = item.title.toLowerCase();
    const kw = item.kw.toLowerCase();
    const cat = item.cat.toLowerCase();

    return enTitle.includes(q) || transTitle.includes(q) || transSub.includes(q) || kw.includes(q) || cat.includes(q) || String(item.id) === q;
  });

  if (matches.length === 0) {
    const noResText = dict.ui_search_no_results || 'No slides found matching your query.';
    searchResults.innerHTML = `<div class="search-empty">${noResText}</div>`;
    return;
  }

  matches.forEach((item, idx) => {
    const row = document.createElement('div');
    row.className = 'search-item' + (idx === 0 ? ' selected' : '');
    let titleText = dict['s' + item.id + '_title'] || item.title;
    titleText = titleText.replace(/<[^>]*>?/gm, '');

    row.innerHTML = `
      <div class="search-item-left">
        <span class="search-badge">${item.id < 10 ? '0' + item.id : item.id}</span>
        <div>
          <div class="search-item-title">${titleText}</div>
          <div class="search-item-cat">${item.cat}</div>
        </div>
      </div>
      <div class="search-item-action">Jump →</div>
    `;

    row.addEventListener('click', () => {
      goToSlide(item.id - 1);
      closeModal(searchModal);
    });

    searchResults.appendChild(row);
  });
}

function initSearch() {
  if (!searchInput) return;
  searchInput.addEventListener('input', (e) => {
    renderSearchResults(e.target.value);
  });

  searchInput.addEventListener('keydown', (e) => {
    const items = searchResults.querySelectorAll('.search-item');
    if (!items.length) return;
    let selectedIdx = Array.from(items).findIndex(el => el.classList.contains('selected'));

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (selectedIdx < items.length - 1) {
        if (selectedIdx >= 0) items[selectedIdx].classList.remove('selected');
        items[selectedIdx + 1].classList.add('selected');
        items[selectedIdx + 1].scrollIntoView({ block: 'nearest' });
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (selectedIdx > 0) {
        items[selectedIdx].classList.remove('selected');
        items[selectedIdx - 1].classList.add('selected');
        items[selectedIdx - 1].scrollIntoView({ block: 'nearest' });
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIdx >= 0 && items[selectedIdx]) {
        items[selectedIdx].click();
      }
    }
  });
}

function initCopyButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-copy') || e.target.closest('.copy-btn');
    if (!btn) return;
    e.preventDefault();

    let codeText = '';
    const codeBox = btn.closest('.code-box') || btn.closest('.terminal-window') || btn.closest('.terminal-mockup');
    if (codeBox) {
      const codeEl = codeBox.querySelector('code') || codeBox.querySelector('.terminal-body') || codeBox.querySelector('.term-body');
      if (codeEl) {
        codeText = codeEl.innerText.trim();
      }
    }

    if (!codeText) {
      codeText = btn.getAttribute('data-code') || '';
    }

    if (codeText) {
      navigator.clipboard.writeText(codeText).then(() => {
        const origHtml = btn.innerHTML;
        const dict = translations[currentLang] || translations.en;
        const copiedMsg = dict.ui_copied || 'Copied!';
        btn.innerHTML = `<svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" style="display:inline-block;vertical-align:-1px;margin-right:2px;"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>${copiedMsg}`;
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = origHtml;
          btn.classList.remove('copied');
        }, 2000);
      }).catch(() => {});
    }
  });
}

function initSimulators() {
  const counterBtn = document.getElementById('sim-counter-btn');
  const counterVal = document.getElementById('sim-counter-val');
  if (counterBtn && counterVal) {
    let count = 0;
    counterBtn.addEventListener('click', () => {
      count++;
      counterVal.textContent = count;
      counterBtn.classList.add('bg-blue-600');
      setTimeout(() => counterBtn.classList.remove('bg-blue-600'), 150);
    });
  }

  const searchParamInput = document.getElementById('sim-search-input');
  const searchUrlPreview = document.getElementById('sim-url-preview');
  if (searchParamInput && searchUrlPreview) {
    searchParamInput.addEventListener('input', (e) => {
      const val = encodeURIComponent(e.target.value.trim());
      searchUrlPreview.textContent = val ? `/dashboard/invoices?query=${val}&page=1` : `/dashboard/invoices`;
    });
  }

  const taskForm = document.getElementById('sim-task-form');
  const taskInput = document.getElementById('sim-task-input');
  const taskList = document.getElementById('sim-task-list');
  const taskStatus = document.getElementById('sim-task-status');
  if (taskForm && taskInput && taskList) {
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = taskInput.value.trim();
      if (!text) return;
      if (taskStatus) taskStatus.textContent = 'Executing Server Action (saving to DB)...';
      setTimeout(() => {
        const item = document.createElement('div');
        item.className = 'flex items-center justify-between p-2 bg-slate-900 border border-slate-800 text-xs text-slate-200';
        item.innerHTML = `<span>${text}</span><span class="text-green-400 font-mono text-[10px] flex items-center gap-1">Saved to DB <svg class="w-3 h-3 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg></span>`;
        taskList.prepend(item);
        taskInput.value = '';
        if (taskStatus) taskStatus.textContent = 'Server Action complete • revalidatePath() updated UI';
      }, 400);
    });
  }
}

function handleHashChange() {
  const hash = window.location.hash;
  if (!hash) return;
  const match = hash.match(/slide-(\d+)/);
  if (match) {
    const idx = parseInt(match[1], 10) - 1;
    if (idx >= 0 && idx < totalSlides) {
      goToSlide(idx);
    }
  }
}

document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
    if (e.key === 'Escape') {
      if (searchModal) closeModal(searchModal);
      if (overviewModal) closeModal(overviewModal);
      if (shortcutsModal) closeModal(shortcutsModal);
      e.target.blur();
    }
    return;
  }

  if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
    e.preventDefault();
    toggleModal(searchModal);
    return;
  }

  if (searchModal && searchModal.classList.contains('open')) {
    if (e.key === 'Escape') {
      closeModal(searchModal);
      e.preventDefault();
    }
    return;
  }

  if (overviewModal && overviewModal.classList.contains('open')) {
    if (e.key === 'Escape' || e.key === 'o' || e.key === 'O' || e.key === 'g' || e.key === 'G') {
      closeModal(overviewModal);
      e.preventDefault();
    }
    return;
  }

  if (shortcutsModal && shortcutsModal.classList.contains('open')) {
    if (e.key === 'Escape' || e.key === '?') {
      closeModal(shortcutsModal);
      e.preventDefault();
    }
    return;
  }

  switch (e.key) {
    case 'ArrowRight':
    case 'Space':
    case 'PageDown':
    case 'l':
    case 'L':
    case 'j':
    case 'J':
      e.preventDefault();
      nextSlide();
      break;

    case 'ArrowLeft':
    case 'PageUp':
    case 'Backspace':
    case 'h':
    case 'k':
    case 'p':
      e.preventDefault();
      prevSlide();
      break;

    case 'Home':
      e.preventDefault();
      goToSlide(0);
      break;

    case 'End':
      e.preventDefault();
      goToSlide(totalSlides - 1);
      break;

    case 'f':
    case 'F':
      e.preventDefault();
      toggleFullscreen();
      break;

    case 't':
    case 'T':
      e.preventDefault();
      toggleTheme();
      break;

    case 'o':
    case 'O':
    case 'g':
    case 'G':
      e.preventDefault();
      toggleModal(overviewModal);
      break;

    case '?':
      e.preventDefault();
      toggleModal(shortcutsModal);
      break;

    case 'Escape':
      if (searchModal) closeModal(searchModal);
      if (overviewModal) closeModal(overviewModal);
      if (shortcutsModal) closeModal(shortcutsModal);
      break;
  }
});

function initPresentationApp() {
  if (btnPrev) btnPrev.addEventListener('click', prevSlide);
  if (btnNext) btnNext.addEventListener('click', nextSlide);

  const langToggleBtns = document.querySelectorAll('#btn-lang-toggle');
  langToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleLanguage);
  });

  const themeToggleBtns = document.querySelectorAll('#btn-theme-toggle');
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
  setTheme(currentTheme);

  if (slideJumpSelect) {
    slideJumpSelect.addEventListener('change', (e) => {
      goToSlide(parseInt(e.target.value, 10));
    });
  }

  const btnOverview = document.getElementById('btn-overview');
  if (btnOverview) {
    btnOverview.addEventListener('click', () => toggleModal(overviewModal));
  }

  const btnShortcuts = document.getElementById('btn-shortcuts');
  if (btnShortcuts) {
    btnShortcuts.addEventListener('click', () => toggleModal(shortcutsModal));
  }

  const btnSearch = document.getElementById('btn-search');
  if (btnSearch) {
    btnSearch.addEventListener('click', () => toggleModal(searchModal));
  }

  const btnFullscreen = document.getElementById('btn-fullscreen');
  if (btnFullscreen) {
    btnFullscreen.addEventListener('click', toggleFullscreen);
  }

  const closeBtns = document.querySelectorAll('.modal-close');
  closeBtns.forEach(b => {
    b.addEventListener('click', () => {
      if (overviewModal) closeModal(overviewModal);
      if (shortcutsModal) closeModal(shortcutsModal);
      if (searchModal) closeModal(searchModal);
    });
  });

  [overviewModal, shortcutsModal, searchModal].forEach(m => {
    if (m) {
      m.addEventListener('click', (e) => {
        if (e.target === m) {
          closeModal(m);
        }
      });
    }
  });

  const startBtns = document.querySelectorAll('.btn-start-course');
  startBtns.forEach(btn => {
    btn.addEventListener('click', nextSlide);
  });

  initCopyButtons();
  initSimulators();
  initSearch();

  setLanguage(currentLang);

  window.addEventListener('hashchange', handleHashChange);
  if (window.location.hash) {
    handleHashChange();
  } else {
    updateSlideView(0, false);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPresentationApp);
} else {
  initPresentationApp();
}

