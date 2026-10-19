const vercelTranslations = {
  en: {
    ui_brand: "Vercel & Web Deployment",
    ui_slide: "Slide",
    ui_of: "of",
    ui_grid: "Grid",
    ui_shortcuts: "Shortcuts",
    ui_theme: "Theme",
    ui_fullscreen: "Fullscreen",
    ui_prev: "Previous",
    ui_next: "Next",
    ui_start: "Start Course",
    ui_search_placeholder: "Search deployment concepts, commands, topics (Ctrl + K)...",
    ui_search_empty: "No matching deployment topics found.",
    ui_copied: "Copied!",
    ui_copy: "Copy",
    ui_sim_label: "SIMULATION ONLY",
    ui_sim_title: "Interactive Deployment Simulator",
    ui_dns_sim_title: "Interactive Domain & DNS Simulator",
    ui_checklist_title: "Production Deployment Checklist",
    ui_reset_checklist: "Reset Checklist",

    part_1: "PART 01: INTRODUCTION TO DEPLOYMENT",
    part_2: "PART 02: WHAT IS VERCEL?",
    part_3: "PART 03: CREATE A VERCEL ACCOUNT",
    part_4: "PART 04: PREPARE PROJECT FOR DEPLOYMENT",
    part_5: "PART 05: CREATE GITHUB REPOSITORY",
    part_6: "PART 06: IMPORT REPO INTO VERCEL",
    part_7: "PART 07: FIRST DEPLOYMENT",
    part_8: "PART 08: PREVIEW VS PRODUCTION",
    part_9: "PART 09: AUTOMATIC DEPLOYMENTS",
    part_10: "PART 10: ENVIRONMENT VARIABLES",
    part_11: "PART 11: DEPLOY NEXT.JS CORRECTLY",
    part_12: "PART 12: CONNECT NEON POSTGRESQL",
    part_13: "PART 13: CONFIGURE CUSTOM DOMAIN",
    part_14: "PART 14: HTTPS & SECURITY",
    part_15: "PART 15: DEPLOYMENTS & ROLLBACKS",
    part_16: "PART 16: LOGS & TROUBLESHOOTING",
    part_17: "PART 17: PERFORMANCE & OPTIMIZATION",
    part_18: "PART 18: PLAN LIMITS & COSTS",
    part_19: "PART 19: GUIDED PROJECT: TASKFLOW",
    part_20: "PART 20: PRODUCTION CHECKLIST",
    part_21: "PART 21: COMMON MISTAKES",
    part_22: "PART 22: FINAL CHEAT SHEET",

    s1_badge: "MODULE 06 • PRODUCTION INFRASTRUCTURE",
    s1_title: "Vercel & Web Deployment<br><span class=\"title-accent\">From Zero to Production Masterclass</span>",
    s1_tagline: "“Deploy, scale, and maintain high-performance fullstack web applications”",
    s1_callout: "A comprehensive developer guide from setting up your Vercel account to deploying Next.js with Neon PostgreSQL and custom domains.",

    s2_title: "What is Deployment?",
    s2_sub: "Transitioning code from your local computer to the global internet",

    s3_title: "The Production Deployment Pipeline",
    s3_sub: "Architectural path from developer code to global visitors",

    s4_title: "Static Websites vs Fullstack Applications",
    s4_sub: "Understanding execution models: Static Files, SSR, and Serverless APIs",

    s5_title: "What is Vercel?",
    s5_sub: "The native cloud platform for Next.js and the modern web",

    s6_title: "Core Platform Capabilities",
    s6_sub: "Git automation, Global Edge Network, Serverless functions, and instant previews",

    s7_title: "What Happens During a Vercel Build?",
    s7_sub: "Behind the scenes of containerized build runners and artifact generation",

    s8_title: "Supported Frameworks on Vercel",
    s8_sub: "First-class support for Next.js, Astro, Remix, SvelteKit, Vite, and static HTML",

    s9_title: "Creating Your Vercel Account",
    s9_sub: "Step-by-step signup via GitHub integration on vercel.com",

    s10_title: "Personal Account vs Team Workspace",
    s10_sub: "Understanding account scopes, team collaboration, and permissions",

    s11_title: "Navigating the Vercel Dashboard",
    s11_sub: "Overview of Projects, Deployments, Domains, Integrations, and Analytics",

    s12_title: "Preparing a Next.js Project for Deployment",
    s12_sub: "Verifying package.json scripts, dependencies, and local build integrity",

    s13_title: "Local Build Verification",
    s13_sub: "Catching compilation and type errors before pushing to GitHub",

    s14_title: "Environment Variables Audit",
    s14_sub: "Keeping secrets in .env.local and out of version control",

    s15_title: "Git Repository Health Check",
    s15_sub: "Clean working tree, .gitignore rules, and production branch alignment",

    s16_title: "Creating a GitHub Repository",
    s16_sub: "Setting up a public or private repository for project hosting",

    s17_title: "Pushing Code to GitHub",
    s17_sub: "Connecting local repository to remote origin with git push",

    s18_title: "Verifying Repository on GitHub",
    s18_sub: "Checking branches, commits, and ensuring no secrets leaked",

    s19_title: "Importing a Project into Vercel",
    s19_sub: "Connecting your GitHub account and selecting the repository",

    s20_title: "Framework Detection & Root Directory",
    s20_sub: "Automatic Next.js detection and monorepo path configuration",

    s21_title: "Build and Output Settings",
    s21_sub: "Understanding default presets and custom build commands",

    s22_title: "Configuring Initial Environment Variables",
    s22_sub: "Supplying production keys before triggering the first build",

    s23_title: "The First Deployment Lifecycle",
    s23_sub: "From git push to active URL in under 60 seconds",

    s24_title: "Inspecting Live Build Logs",
    s24_sub: "Real-time streaming output, dependency caching, and build steps",

    s25_title: "Deployment URLs & Production Aliases",
    s25_sub: "Understanding vercel.app domains and canonical aliases",

    s26_title: "Post-Deployment Verification",
    s26_sub: "Testing client hydration, API routes, and network requests",

    s27_title: "Preview Deployments vs Production",
    s27_sub: "Isolated staging environments for every branch and pull request",

    s28_title: "Git Branching Workflow for Vercel",
    s28_sub: "Main branch for production, feature branches for preview testing",

    s29_title: "Pull Request Previews & Team Feedback",
    s29_sub: "Automated Vercel bot comments, preview URLs, and visual inspection",

    s30_title: "Promoting Previews to Production",
    s30_sub: "Instant traffic switch with zero rebuilds and zero downtime",

    s31_title: "Automatic Deployments via Git Push",
    s31_sub: "How webhooks trigger instant builds whenever code is pushed",

    s32_title: "GitHub Commit Status Checks",
    s32_sub: "Vercel deployment checks integrated into GitHub Pull Requests",

    s33_title: "Deploy Hooks for External Triggers",
    s33_sub: "Triggering builds from CMS publishing events and webhooks",

    s34_title: "Environment Variables Mental Model",
    s34_sub: "Separating configuration from code across development stages",

    s35_title: "Environment Scope: Dev, Preview, Production",
    s35_sub: "Targeting distinct databases and API keys per deployment stage",

    s36_title: "The NEXT_PUBLIC_* Security Boundary",
    s36_sub: "Preventing client bundle leakage of private server secrets",

    s37_title: "Managing Variables in Vercel Dashboard",
    s37_sub: "Adding, editing, masking, and bulk uploading environment variables",

    s38_title: "The Redeployment Requirement",
    s38_sub: "Why updated environment variables require a new deployment",

    s39_title: "Next.js App Router on Vercel",
    s39_sub: "Server Components, Client Components, and Edge routing",

    s40_title: "Static vs Dynamic Rendering Modes",
    s40_sub: "Controlling cache headers and server rendering behavior",

    s41_title: "Server Actions & Route Handlers",
    s41_sub: "Executing secure backend mutations on serverless functions",

    s42_title: "Image Optimization & Global Edge",
    s42_sub: "Next.js image resizing, WebP conversion, and CDN distribution",

    s43_title: "Fullstack Architecture: Vercel + Neon",
    s43_sub: "Serverless web frontend connecting to serverless PostgreSQL",

    s44_title: "Obtaining Neon Connection Strings",
    s44_sub: "Pooled connections with sslmode=require for serverless queries",

    s45_title: "Configuring DATABASE_URL in Vercel",
    s45_sub: "Setting up separate database instances for preview and production",

    s46_title: "Database Migration Strategy",
    s46_sub: "Safely applying schema migrations before application deployment",

    s47_title: "Custom Domain Mental Model",
    s47_sub: "Apex domains vs subdomains and how DNS routing operates",

    s48_title: "DNS Record Types: A vs CNAME",
    s48_sub: "Configuring 76.76.21.21 for root and cname.vercel-dns.com for subdomains",

    s49_title: "Step-by-Step Registrar Configuration",
    s49_sub: "Adding DNS records in Namecheap, Cloudflare, or GoDaddy",

    s50_title: "Preserving Email DNS Records",
    s50_sub: "Avoiding email disruption by protecting MX, SPF, DKIM, and DMARC",

    s51_title: "DNS Propagation & Automatic SSL",
    s51_sub: "Let's Encrypt TLS certificate generation and HTTPS enforcement",

    s52_title: "HTTPS & Transport Security",
    s52_sub: "HSTS headers, modern TLS cipher suites, and redirect rules",

    s53_title: "Application Hardening on Vercel",
    s53_sub: "Content Security Policy (CSP), rate limiting, and input sanitization",

    s54_title: "Secret Auditing & Remediation",
    s54_sub: "Scanning repositories for leaks and rotating compromised credentials",

    s55_title: "Immutable Deployments",
    s55_sub: "Why every build is a permanent, immutable snapshot",

    s56_title: "Instant Rollback Workflow",
    s56_sub: "Restoring a previous working deployment in seconds",

    s57_title: "The Code vs Database Rollback Discrepancy",
    s57_sub: "Why rolling back code does NOT undo database schema changes",

    s58_title: "Build Logs vs Runtime Logs",
    s58_sub: "Differentiating compile-time failures from production exceptions",

    s59_title: "Diagnosing Common Build Failures",
    s59_sub: "Missing dependencies, TypeScript errors, and incorrect root directory",

    s60_title: "Diagnosing Runtime 500 Errors",
    s60_sub: "Database timeouts, connection exhaustion, and uncaught exceptions",

    s61_title: "The 5-Step Systematic Debugging Flow",
    s61_sub: "Reproduce -> Read Log -> Isolate Error -> Patch -> Verify",

    s62_title: "Build Performance & Turbopack",
    s62_sub: "Utilizing build caching, package deduplication, and fast compilation",

    s63_title: "Serverless Optimization & Connection Pooling",
    s63_sub: "Preventing cold starts and connection limits with Neon Serverless driver",

    s64_title: "Vercel Plan Limits & Cost Management",
    s64_sub: "Understanding Hobby vs Pro bandwidth, function duration, and spending controls",

    s65_title: "Guided Project: TaskFlow Architecture",
    s65_sub: "Production blueprint for Next.js, Neon PostgreSQL, and Vercel",

    s66_title: "Interactive Deployment Simulator",
    s66_sub: "Simulate connecting repos, setting env vars, building, and deploying",

    s67_title: "Interactive Domain & DNS Simulator",
    s67_sub: "Experiment with Apex, CNAME, and SSL verification live",

    s68_title: "Interactive Production Checklist",
    s68_sub: "Comprehensive interactive checklist saved to your browser",

    s69_title: "Top 10 Costly Deployment Mistakes",
    s69_sub: "Critical errors developers make and exact steps to avoid them",

    s70_title: "Production Verification & Health Checks",
    s70_sub: "End-to-end testing of auth, database CRUD, and responsiveness",

    s71_title: "Vercel Deployment Cheat Sheet",
    s71_sub: "Quick reference guide for CLI, Git commands, DNS values, and rules",

    s72_title: "Course Summary & Master Architecture",
    s72_sub: "Congratulations! You have mastered production web deployments on Vercel"
  },
  km: {
    ui_brand: "Vercel & ការ Deploy គេហទំព័រ",
    ui_slide: "ស្លាយ",
    ui_of: "នៃ",
    ui_grid: "តារាង",
    ui_shortcuts: "ផ្លូវកាត់",
    ui_theme: "រចនាប័ទ្ម",
    ui_fullscreen: "ពេញអេក្រង់",
    ui_prev: "ថយក្រោយ",
    ui_next: "បន្ទាប់",
    ui_start: "ចាប់ផ្តើមវគ្គសិក្សា",
    ui_search_placeholder: "ស្វែងរកមេរៀន ពាក្យបញ្ជា ឬប្រធានបទ (Ctrl + K)...",
    ui_search_empty: "មិនមានលទ្ធផលស្វែងរកដែលត្រូវគ្នាឡើយ។",
    ui_copied: "បានចម្លង!",
    ui_copy: "ចម្លង",
    ui_sim_label: "ការក្លែងធ្វើសាកល្បងប៉ុណ្ណោះ",
    ui_sim_title: "ឧបករណ៍ក្លែងធ្វើការ Deploy ជាក់ស្តែង",
    ui_dns_sim_title: "ឧបករណ៍ក្លែងធ្វើការកំណត់ Domain & DNS",
    ui_checklist_title: "តារាងត្រួតពិនិត្យមុនពេលបញ្ចេញទៅ Production",
    ui_reset_checklist: "កំណត់តារាងឡើងវិញ",

    part_1: "ផ្នែកទី ០១៖ សេចក្តីផ្តើមអំពីការ DEPLOY",
    part_2: "ផ្នែកទី ០២៖ តើអ្វីជា VERCEL?",
    part_3: "ផ្នែកទី ០៣៖ ការបង្កើតគណនី VERCEL",
    part_4: "ផ្នែកទី ០៤៖ រៀបចំគម្រោងសម្រាប់ DEPLOY",
    part_5: "ផ្នែកទី ០៥៖ បង្កើត GITHUB REPOSITORY",
    part_6: "ផ្នែកទី ០៦៖ ភ្ជាប់គម្រោងចូល VERCEL",
    part_7: "ផ្នែកទី ០៧៖ ការ DEPLOY លើកដំបូង",
    part_8: "ផ្នែកទី ០៨៖ PREVIEW VS PRODUCTION",
    part_9: "ផ្នែកទី ០៩៖ ការ DEPLOY ដោយស្វ័យប្រវត្តិ",
    part_10: "ផ្នែកទី ១០៖ ការគ្រប់គ្រង ENVIRONMENT VARIABLES",
    part_11: "ផ្នែកទី ១១៖ ការ DEPLOY NEXT.JS យ៉ាងត្រឹមត្រូវ",
    part_12: "ផ្នែកទី ១២៖ ការភ្ជាប់ NEON POSTGRESQL",
    part_13: "ផ្នែកទី ១៣៖ ការកំណត់ CUSTOM DOMAIN ផ្ទាល់ខ្លួន",
    part_14: "ផ្នែកទី ១៤៖ ប្រព័ន្ធសុវត្ថិភាព HTTPS",
    part_15: "ផ្នែកទី ១៥៖ ការពិនិត្យ DEPLOYMENT & ROLLBACK",
    part_16: "ផ្នែកទី ១៦៖ ការពិនិត្យ LOGS & ដោះស្រាយបញ្ហា",
    part_17: "ផ្នែកទី ១៧៖ ការបង្កើនល្បឿន និង PERFORMANCE",
    part_18: "ផ្នែកទី ១៨៖ ដែនកំណត់ PLAN និងការគ្រប់គ្រងចំណាយ",
    part_19: "ផ្នែកទី ១៩៖ គម្រោងអនុវត្តផ្ទាល់៖ TASKFLOW",
    part_20: "ផ្នែកទី ២០៖ តារាងផ្ទៀងផ្ទាត់ PRODUCTION CHECKLIST",
    part_21: "ផ្នែកទី ២១៖ កំហុសទូទៅដែលត្រូវប្រុងប្រយ័ត្ន",
    part_22: "ផ្នែកទី ២២៖ តារាងសង្ខេបពាក្យបញ្ជា (CHEAT SHEET)",

    s1_badge: "ម៉ូឌុល ០៦ • ស្ថាបត្យកម្ម PRODUCTION",
    s1_title: "Vercel & ការ Deploy គេហទំព័រ<br><span class=\"title-accent\">ពីកម្រិតដំបូងរហូតដល់ Production Masterclass</span>",
    s1_tagline: "“Deploy, ពង្រីកទំហំ និងថែទាំគេហទំព័រ Fullstack ដែលមានល្បឿនលឿនកម្រិតខ្ពស់”",
    s1_callout: "មគ្គុទ្ទេសក៍ពេញលេញសម្រាប់អ្នកអភិវឌ្ឍន៍ ចាប់ពីការបង្កើតគណនី Vercel រហូតដល់ការ deploy Next.js ភ្ជាប់ Neon PostgreSQL និង Domain ផ្ទាល់ខ្លួន។",

    s2_title: "តើការ Deploy មានន័យដូចម្តេច?",
    s2_sub: "ការផ្ទេរកូដពីម៉ាស៊ីនកុំព្យូទ័រផ្ទាល់ខ្លួនរបស់អ្នក ទៅកាន់ប្រព័ន្ធអ៊ីនធឺណិតទូទាំងពិភពលោក",

    s3_title: "វដ្តដំណើរការនៃការបញ្ចេញកូដ (Pipeline)",
    s3_sub: "ស្ថាបត្យកម្មតាំងពីកូដក្នុងកុំព្យូទ័ររហូតដល់អ្នកទស្សនាទូទាំងសកលលោក",

    s4_title: "គេហទំព័រ Static និង Fullstack Web Applications",
    s4_sub: "ស្វែងយល់ពីរបៀបដំណើរការ៖ Static Files, Server-Side Rendering (SSR), និង Serverless APIs",

    s5_title: "តើអ្វីជា Vercel?",
    s5_sub: "Cloud Platform ឈានមុខគេដែលបង្កើតឡើងយ៉ាងពិសេសសម្រាប់ Next.js និងគេហទំព័រទំនើប",

    s6_title: "លក្ខណៈពិសេសស្នូលរបស់ Vercel",
    s6_sub: "ការតភ្ជាប់ Git ដោយស្វ័យប្រវត្តិ, បណ្តាញ Global Edge Network, Serverless Functions, និងការ Preview ភ្លាមៗ",

    s7_title: "តើមានអ្វីកើតឡើងនៅពេល Vercel កំពុង Build?",
    s7_sub: "ដំណើរការនៅពីក្រោយខ្នងនៃប្រព័ន្ធ Build Runner ឯករាជ្យ និងការបង្កើត File សម្រេច",

    s8_title: "Frameworks ផ្សេងៗដែល Vercel គាំទ្រ",
    s8_sub: "គាំទ្រយ៉ាងពេញលេញសម្រាប់ Next.js, Astro, Remix, SvelteKit, Vite, និង Static HTML",

    s9_title: "ការបង្កើតគណនី Vercel",
    s9_sub: "ការចុះឈ្មោះមួយជំហានម្តងៗតាមរយៈគណនី GitHub នៅលើ vercel.com",

    s10_title: "គណនីផ្ទាល់ខ្លួន (Personal) និង Team Workspace",
    s10_sub: "ស្វែងយល់ពីទំហំគណនី, ការសហការជាក្រុម, និងសិទ្ធិអនុញ្ញាត (Permissions)",

    s11_title: "ការស្វែងយល់ពីផ្ទាំងបញ្ជា (Vercel Dashboard)",
    s11_sub: "ស្គាល់ទំព័រ Projects, Deployments, Domains, Integrations, និងស្ថិតិ Analytics",

    s12_title: "ការរៀបចំគម្រោង Next.js មុនពេល Deploy",
    s12_sub: "ផ្ទៀងផ្ទាត់ពាក្យបញ្ជាក្នុង package.json, dependencies, និងការ build សាកល្បង",

    s13_title: "ការ Build សាកល្បងលើម៉ាស៊ីនផ្ទាល់ខ្លួន",
    s13_sub: "ស្វែងរក និងជួសជុលបញ្ហា Compilation និង TypeScript មុនពេល push ទៅ GitHub",

    s14_title: "ការត្រួតពិនិត្យ Environment Variables",
    s14_sub: "រក្សាលេខកូដសម្ងាត់ក្នុង .env.local និងហាមដាច់ខាតមិនឱ្យ push ចូល Git",

    s15_title: "ការពិនិត្យស្ថានភាព Git Repository",
    s15_sub: "ធានាថាកូដបាន commit ស្អាត, មានឯកសារ .gitignore, និងនៅលើ branch ត្រឹមត្រូវ",

    s16_title: "ការបង្កើត Repository លើ GitHub",
    s16_sub: "រៀបចំបង្កើត Public ឬ Private repository សម្រាប់ផ្ទុកកូដគម្រោង",

    s17_title: "ការ Push កូដឡើងទៅ GitHub",
    s17_sub: "ភ្ជាប់គម្រោងក្នុងកុំព្យូទ័រទៅកាន់ GitHub តាមរយៈពាក្យបញ្ជា git push",

    s18_title: "ការផ្ទៀងផ្ទាត់នៅលើ GitHub",
    s18_sub: "ពិនិត្យមើល branch, ប្រវត្តិនៃ commits, និងធានាថាមិនមានលេខសម្ងាត់ធ្លាយឡើយ",

    s19_title: "ការភ្ជាប់ និង Import គម្រោងចូល Vercel",
    s19_sub: "ភ្ជាប់គណនី GitHub របស់អ្នក និងជ្រើសរើស repository ដែលចង់ deploy",

    s20_title: "ការសម្គាល់ Framework និង Root Directory",
    s20_sub: "Vercel រកឃើញ Next.js ដោយស្វ័យប្រវត្តិ និងការកំណត់ផ្លូវបើជា Monorepo",

    s21_title: "ការកំណត់ Build Command និង Output Directory",
    s21_sub: "ស្វែងយល់ពីតម្លៃ Default Preset និងការកំណត់ពាក្យបញ្ជា build ផ្ទាល់ខ្លួន",

    s22_title: "ការបញ្ចូល Environment Variables ដំបូង",
    s22_sub: "ផ្តល់តម្លៃ key សម្ងាត់សម្រាប់ production មុនពេលដំណើរការ build ដំបូង",

    s23_title: "វដ្តជីវិតនៃការ Deploy លើកដំបូង",
    s23_sub: "ពីការចុច Deploy រហូតទទួលបាន URL ដំណើរការក្នុងរយៈពេលក្រោម ៦០ វិនាទី",

    s24_title: "ការអាន និងពិនិត្យ Live Build Logs",
    s24_sub: "ទស្សនាការបង្ហាញលទ្ធផលជាក់ស្តែង, ការប្រើ cache នៃ dependency, និងដំណាក់កាលនីមួយៗ",

    s25_title: "ស្វែងយល់ពី Deployment URLs និង Domains",
    s25_sub: "ស្វែងយល់ពីអាសយដ្ឋាន vercel.app និង canonical production alias",

    s26_title: "ការផ្ទៀងផ្ទាត់គុណភាពក្រោយពេល Deploy",
    s26_sub: "ការធ្វើតេស្ត Client Hydration, API Routes, និងល្បឿនផ្ទុកទិន្នន័យលើបណ្តាញ",

    s27_title: "ភាពខុសគ្នារវាង Preview និង Production",
    s27_sub: "ប្រព័ន្ធតេស្តកូដឯករាជ្យសម្រាប់គ្រប់ branch និង Pull Request ទាំងអស់",

    s28_title: "យុទ្ធសាស្ត្រ Git Branch សម្រាប់ Vercel",
    s28_sub: "ប្រើប្រាស់ main branch សម្រាប់ Production និង feature branch សម្រាប់ Preview",

    s29_title: "Pull Request Previews និងការផ្តល់យោបល់ជាក្រុម",
    s29_sub: "ការ comment ស្វ័យប្រវត្តិនៃ Vercel Bot, តំណភ្ជាប់ URL តេស្ត, និងការត្រួតពិនិត្យ UI",

    s30_title: "ការលើកកម្ពស់ Preview ទៅជា Production",
    s30_sub: "ការផ្លាស់ប្តូរចរាចរណ៍អ្នកទស្សនាភ្លាមៗដោយមិនបាច់ build ឡើងវិញ និងគ្មានការរអាក់រអួល",

    s31_title: "ការ Deploy ដោយស្វ័យប្រវត្តិតាមរយៈ Git Push",
    s31_sub: "របៀបដែល Webhooks ចាប់ផ្តើម build ភ្លាមៗរាល់ពេលអ្នករុញកូដទៅ GitHub",

    s32_title: "ការពិនិត្យស្ថានភាពលើ GitHub Commit Status",
    s32_sub: "ការផ្ទៀងផ្ទាត់ស្ថានភាពនៃ Vercel Deployment ផ្ទាល់នៅក្នុង GitHub Pull Request",

    s33_title: "ការប្រើប្រាស់ Deploy Hooks ពីប្រភពខាងក្រៅ",
    s33_sub: "ការកេះឱ្យ Vercel build ឡើងវិញនៅពេលមានការផ្សាយមាតិកាថ្មីពី Headless CMS",

    s34_title: "គំរូយល់ដឹងអំពី Environment Variables",
    s34_sub: "ការបែងចែកការកំណត់ចេញពីកូដកម្មវិធីតាមដំណាក់កាលនីមួយៗ",

    s35_title: "វិសាលភាព (Scope): Dev, Preview, Production",
    s35_sub: "ការបំបែក database និង API key ដាច់ដោយឡែកពីគ្នាតាមបរិស្ថាននីមួយៗ",

    s36_title: "ព្រំដែនសុវត្ថិភាពនៃ NEXT_PUBLIC_*",
    s36_sub: "ការទប់ស្កាត់កុំឱ្យកូដសម្ងាត់របស់ Server ធ្លាយចូលទៅកាន់ browser របស់អ្នកប្រើប្រាស់",

    s37_title: "ការគ្រប់គ្រង Variables លើ Vercel Dashboard",
    s37_sub: "ការបន្ថែម, កែប្រែ, លាក់កូដសម្ងាត់, និងការ upload ឯកសារ .env ជាដុំ",

    s38_title: "តម្រូវការចាំបាច់ក្នុងការ Redeploy ឡើងវិញ",
    s38_sub: "មូលហេតុដែលការកែប្រែ Environment Variables តម្រូវឱ្យមានការ build ថ្មីជានិច្ច",

    s39_title: "ការដំណើរការ Next.js App Router លើ Vercel",
    s39_sub: "ស្ថាបត្យកម្ម Server Components, Client Components, និងការបញ្ជូនទិន្នន័យលើ Edge",

    s40_title: "ទម្រង់នៃការ Render: Static vs Dynamic",
    s40_sub: "ការគ្រប់គ្រង Cache Headers និងឥរិយាបថនៃការបង្កើតទំព័រលើ Server",

    s41_title: "Server Actions និង Route Handlers",
    s41_sub: "ការសរសេរកូដរក្សាទុកទិន្នន័យនៅលើ Serverless Functions ប្រកបដោយសុវត្ថិភាព",

    s42_title: "ការបង្កើនប្រសិទ្ធភាពរូបភាព និង Global Edge",
    s42_sub: "ការបង្រួមទំហំរូបភាព, ការបម្លែងជា WebP, និងការចែកចាយតាមបណ្តាញ CDN សកល",

    s43_title: "ស្ថាបត្យកម្ម Fullstack: Vercel + Neon",
    s43_sub: "ការតភ្ជាប់រវាង Serverless Web Frontend ជាមួយ Serverless PostgreSQL Database",

    s44_title: "ការយក Connection String ពី Neon",
    s44_sub: "ការប្រើប្រាស់ Pooled Connection ជាមួយ sslmode=require សម្រាប់ Serverless Queries",

    s45_title: "ការបញ្ចូល DATABASE_URL ទៅក្នុង Vercel",
    s45_sub: "ការកំណត់ Database ដាច់ដោយឡែកពីគ្នាសម្រាប់ដំណាក់កាល Preview និង Production",

    s46_title: "យុទ្ធសាស្ត្រនៃការ Run Database Migrations",
    s46_sub: "ការផ្លាស់ប្តូរ Schema លើ Database ឱ្យបានជោគជ័យមុនពេល deploy កូដថ្មី",

    s47_title: "ស្វែងយល់អំពី Custom Domain ផ្ទាល់ខ្លួន",
    s47_sub: "ភាពខុសគ្នារវាង Apex Domain និង Subdomain និងរបៀបដែលប្រព័ន្ធ DNS ដំណើរការ",

    s48_title: "ប្រភេទនៃកំណត់ត្រា DNS: A Record vs CNAME",
    s48_sub: "ការកំណត់ 76.76.21.21 សម្រាប់ Root Domain និង cname.vercel-dns.com សម្រាប់ Subdomain",

    s49_title: "ការកំណត់ DNS មួយជំហានម្តងៗលើ Registrar",
    s49_sub: "ការបញ្ចូលកំណត់ត្រា DNS លើ Namecheap, Cloudflare, ឬ GoDaddy",

    s50_title: "ការការពារកុំឱ្យបាត់បង់ប្រព័ន្ធអ៊ីមែល (Email DNS)",
    s50_sub: "ការប្រុងប្រយ័ត្នក្នុងការថែរក្សាកំណត់ត្រា MX, SPF, DKIM, និង DMARC កុំឱ្យខូច",

    s51_title: "ការរង់ចាំ DNS Propagation និង SSL ស្វ័យប្រវត្តិ",
    s51_sub: "ការបង្កើតវិញ្ញាបនបត្រ Let's Encrypt TLS និងការបើក HTTPS ដោយស្វ័យប្រវត្តិ",

    s52_title: "ប្រព័ន្ធសុវត្ថិភាព HTTPS និងការបញ្ជូនទិន្នន័យ",
    s52_sub: "ការប្រើប្រាស់ HSTS headers, កូដសម្ងាត់ទំនើប TLS, និងការបង្វែរ HTTP ទៅ HTTPS",

    s53_title: "ការពង្រឹងប្រព័ន្ធសុវត្ថិភាពកម្មវិធីលើ Vercel",
    s53_sub: "ការកំណត់ Content Security Policy (CSP), ការគ្រប់គ្រង Rate Limiting, និងការច្រោះទិន្នន័យ",

    s54_title: "ការស្វែងរក និងទប់ស្កាត់ការធ្លាយកូដសម្ងាត់",
    s54_sub: "ការ scan កូដក្នុង repository និងការផ្លាស់ប្តូរលេខសម្ងាត់ថ្មីជាបន្ទាន់",

    s55_title: "គោលការណ៍ Immutable Deployments",
    s55_sub: "មូលហេតុដែលគ្រប់ការ build ទាំងអស់ត្រូវបានរក្សាទុកជា snapshot អចិន្ត្រៃយ៍",

    s56_title: "ដំណើរការ Rollback ភ្លាមៗក្នុងពេលមានអាសន្ន",
    s56_sub: "ការស្តារឡើងវិញនូវកំណែដែលដំណើរការល្អមុន ក្នុងរយៈពេលតែប៉ុន្មានវិនាទីប៉ុណ្ណោះ",

    s57_title: "ភាពខុសគ្នារវាង Code Rollback និង Database Schema",
    s57_sub: "ការយល់ដឹងថាការ Rollback កូដមិនអាចលុបការផ្លាស់ប្តូរលើ Database ឡើងវិញដោយស្វ័យប្រវត្តិនោះទេ",

    s58_title: "ការប្រៀបធៀប Build Logs និង Runtime Logs",
    s58_sub: "ការបែងចែកកំហុសនៅពេល Compile កូដ និងកំហុសពេលកំពុងដំណើរការជាក់ស្តែង",

    s59_title: "ការដោះស្រាយបញ្ហា Build បរាជ័យទូទៅ",
    s59_sub: "បញ្ហាខ្វះ package, កំហុស TypeScript, និងការកំណត់ Root Directory ខុស",

    s60_title: "ការដោះស្រាយកំហុស Runtime 500 Errors",
    s60_sub: "បញ្ហាដាច់ការតភ្ជាប់ Database, លើសចំនួន Connection, និង Uncaught Exceptions",

    s61_title: "ជំហានទាំង ៥ ក្នុងការដោះស្រាយបញ្ហាប្រកបដោយប្រសិទ្ធភាព",
    s61_sub: "បង្កើតបញ្ហាឡើងវិញ -> អាន Log -> ស្វែងរកប្រភព -> កែសម្រួល -> ផ្ទៀងផ្ទាត់",

    s62_title: "ការបង្កើនល្បឿន Build និង Turbopack",
    s62_sub: "ការទាញយកប្រយោជន៍ពី Build Cache, ការលុបកញ្ចប់កូដដែលស្ទួន, និងការ compile លឿន",

    s63_title: "ការបង្កើនល្បឿន Serverless និង Connection Pooling",
    s63_sub: "កាត់បន្ថយ Cold Starts និងការប្រើប្រាស់ Neon Serverless Driver",

    s64_title: "ដែនកំណត់នៃ Vercel Plan និងការគ្រប់គ្រងថ្លៃចំណាយ",
    s64_sub: "ការស្វែងយល់ពីកម្រិតប្រើប្រាស់លើ Hobby vs Pro និងការកំណត់ការជូនដំណឹង Spending Limits",

    s65_title: "ស្ថាបត្យកម្មគម្រោងអនុវត្ត៖ TaskFlow",
    s65_sub: "ប្លង់មេនៃគម្រោងជាក់ស្តែងដែលប្រើ Next.js, Neon PostgreSQL, និង Vercel",

    s66_title: "ឧបករណ៍ក្លែងធ្វើការ Deploy ជាក់ស្តែង",
    s66_sub: "សាកល្បងភ្ជាប់ repo, កំណត់ env vars, ដំណើរការ build, និង deploy ផ្ទាល់",

    s67_title: "ឧបករណ៍ក្លែងធ្វើការកំណត់ Domain & DNS",
    s67_sub: "ពិសោធន៍ការកំណត់ Apex Domain, CNAME, និងការផ្ទៀងផ្ទាត់ SSL ផ្ទាល់",

    s68_title: "តារាងត្រួតពិនិត្យ Production Checklist",
    s68_sub: "តារាងផ្ទៀងផ្ទាត់អន្តរកម្មដែលរក្សាទុកលទ្ធផលក្នុង browser របស់អ្នក",

    s69_title: "កំហុសធំៗទាំង ១០ ដែលត្រូវជៀសវាងជាដាច់ខាត",
    s69_sub: "កំហុសសំខាន់ៗដែលអ្នកសរសេរកម្មវិធីតែងតែជួបប្រទះ និងដំណោះស្រាយសុវត្ថិភាព",

    s70_title: "ការត្រួតពិនិត្យចុងក្រោយលើប្រព័ន្ធ Production",
    s70_sub: "ការធ្វើតេស្តប្រព័ន្ធ Auth, Database CRUD, និងល្បឿនឆ្លើយតបលើទូរស័ព្ទ",

    s71_title: "តារាងសង្ខេបពាក្យបញ្ជា Vercel Deployment",
    s71_sub: "ឯកសារយោងរហ័សនៃ CLI, ពាក្យបញ្ជា Git, តម្លៃ DNS, និងគោលការណ៍សំខាន់ៗ",

    s72_title: "សេចក្តីសង្ខេបបញ្ចប់ និងស្ថាបត្យកម្មពេញលេញ",
    s72_sub: "អបអរសាទរ! អ្នកបានក្លាយជាអ្នកជំនាញក្នុងការ Deploy គេហទំព័រលើ Vercel ប្រកបដោយភាពជឿជាក់"
  }
};
