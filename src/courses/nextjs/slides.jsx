import React from "react";
import { Copy, Code, PlayCircle, ArrowRight, Monitor, Sparkles, RotateCcw, Info, AlertTriangle, XCircle, Check, CheckCircle2, Globe, Server, Database, Shield, Cloud, ArrowDown, FolderTree, FileCode } from "lucide-react";

// Slide 1: Next.js: From React to Production
export function Slide1({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 01 — WEB TO NEXT.JS &bull; SLIDE 01 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Next.js: From React to Production</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Build modern full-stack web applications with React and
                    Next.js App Router.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div
                className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center py-4"
              >
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400  text-xs w-max"
                  >
                    <PlayCircle className="w-3.5 h-3.5" />
                    <span className="lang-en"
                      >PRODUCTION-READY FULL-STACK FRAMEWORK</span
                    >
                    <span className="lang-km"
                      >FRAMEWORK ពេញលេញសម្រាប់ PRODUCTION</span
                    >
                  </div>
                  <h1
                    className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight"
                  >
                    Next.js <span className="text-blue-500 ">15+</span
                    ><br />
                    <span className="text-slate-300 font-light text-2xl lg:text-3xl"
                      >From React to Production</span
                    >
                  </h1>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    <span className="lang-en"
                      >Master modern full-stack web engineering with React
                      Server Components, App Router, Server Actions, PostgreSQL
                      integration, and cloud deployment workflows.</span
                    >
                    <span className="lang-km"
                      >រៀនបង្កើត Web Application កម្រិតខ្ពស់ជាមួយ React Server
                      Components, App Router, Server Actions, ការតភ្ជាប់
                      PostgreSQL និងការ Deploy ទៅកាន់ Production ដោយរលូន។</span
                    >
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      className="btn-start-course btn-nav px-5 py-2.5 text-sm flex items-center gap-2"
                    onClick={onStart}>
                      <ArrowRight className="w-4 h-4" />
                      <span className="lang-en">Start Course (75 Slides)</span>
                      <span className="lang-km">ចាប់ផ្ដើមមេរៀន (៧៥ ស្លាយ)</span>
                    </button>
                    <button
                      
                      className="btn-icon px-4 py-2.5 text-sm"
                    >
                      <span className="lang-en">View Syllabus</span>
                      <span className="lang-km">មើលមាតិកាទាំងអស់</span>
                    </button>
                  </div>
                </div>
                <div
                  className="lg:col-span-5 flex flex-col gap-3  text-xs"
                >
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <div
                      className="text-slate-400 text-[11px] uppercase tracking-wider mb-1 flex items-center justify-between"
                    >
                      <span>Core Stack</span>
                      <span className="text-blue-400 font-bold">App Router</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-slate-200">
                      <div className="p-2 bg-slate-900 border border-slate-800">
                        React 19 &bull; TS
                      </div>
                      <div className="p-2 bg-slate-900 border border-slate-800">
                        Server Components
                      </div>
                      <div className="p-2 bg-slate-900 border border-slate-800">
                        Server Actions
                      </div>
                      <div className="p-2 bg-slate-900 border border-slate-800">
                        PostgreSQL &bull; Neon
                      </div>
                    </div>
                  </div>
                  <div
                    className="p-3 bg-blue-900/30 border border-blue-800/40 text-blue-300 text-xs flex items-center gap-2"
                  >
                    <Info className="w-4 h-4 flex-shrink-0" />
                    <span
                      >Bilingual English &bull; Khmer Support &bull; Press F for
                      Fullscreen</span
                    >
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 2: What You Will Learn
export function Slide2({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 01 — WEB TO NEXT.JS &bull; SLIDE 02 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">What You Will Learn</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    The complete path from React basics to full-stack production
                    architecture.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="diagram-box flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">React Fundamentals</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">Next.js App Router</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Routing &amp; Layouts</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">Server Components</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Data Fetching</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">PostgreSQL DB</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Authentication</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">Vercel Production</div>
                </div>
                <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      1. Foundation to App Router
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Understand why React needs a framework, the mental
                        shift from client SPA to hybrid Server/Client
                        components, and file-based routing.</span
                      ><span className="lang-km"
                        >យល់ដឹងពីមូលហេតុដែល React ត្រូវការ framework
                        និងការប្ដូរផ្នត់គំនិតពី SPA ធម្មតាទៅជា Hybrid
                        Server/Client Components។</span
                      >
                    </p>
                  </div>
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      2. Full-Stack Data &amp; Database
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Fetch data directly in Server Components, execute
                        server mutations with Server Actions, connect to
                        PostgreSQL, and handle streaming UI.</span
                      ><span className="lang-km"
                        >ទាញទិន្នន័យផ្ទាល់លើ Server Components,
                        ធ្វើការកែប្រែទិន្នន័យតាម Server Actions, ភ្ជាប់ជាមួយ
                        PostgreSQL និងប្រើ Streaming UI។</span
                      >
                    </p>
                  </div>
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-purple-400" />
                      3. Security, Project &amp; Shipping
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Secure routes with authentication, manage environment
                        secrets safely, build the complete TaskFlow SaaS, and
                        ship to Vercel via Git.</span
                      ><span className="lang-km"
                        >ការពារ Routes ដោយ Authentication, គ្រប់គ្រង Env Secrets
                        ឱ្យមានសុវត្ថិភាព, បង្កើតគម្រោង TaskFlow SaaS និង Deploy
                        ទៅកាន់ Vercel។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 3: What Is Next.js?
export function Slide3({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 01 — WEB TO NEXT.JS &bull; SLIDE 03 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">What Is Next.js?</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Understanding the full-stack React framework and its core
                    capabilities.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <Monitor className="w-4 h-4 text-blue-400" />
                      <span className="lang-en"
                        >The React Framework for the Web</span
                      ><span className="lang-km"
                        >React Framework សម្រាប់ Full-Stack Web</span
                      >
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Next.js is an open-source React framework created by
                        Vercel. While React is a library for building user
                        interfaces, Next.js provides the full architecture
                        needed for production: routing, rendering, backend
                        actions, and optimization.</span
                      ><span className="lang-km"
                        >Next.js គឺជា React framework បង្កើតឡើងដោយក្រុមហ៊ុន
                        Vercel។ ខណៈពេលដែល React គឺជា UI Library, Next.js
                        ផ្ដល់នូវរចនាសម្ព័ន្ធពេញលេញសម្រាប់ Production ដូចជា
                        Routing, Rendering, Backend និង Optimization។</span
                      >
                    </p>
                  </div>
                  <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                    <Info className="w-4 h-4 flex-shrink-0" />
                    <div>
                      <span className="lang-en"
                        ><strong>Official Definition:</strong> Next.js is a
                        React framework for building full-stack web
                        applications. You use React Components to build user
                        interfaces, and Next.js for additional features and
                        optimizations.</span
                      ><span className="lang-km"
                        ><strong>និយមន័យផ្លូវការ៖</strong> Next.js គឺជា React
                        framework សម្រាប់បង្កើត full-stack web applications។
                        អ្នកប្រើ React ដើម្បីបង្កើត UI និងប្រើ Next.js
                        សម្រាប់មុខងារ full-stack និងការបង្កើនល្បឿន។</span
                      >
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2  text-xs">
                  <div className="p-3 bg-slate-900 border border-slate-800">
                    <div
                      className="text-blue-400 font-bold mb-2 flex items-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                      <span>Next.js Built-in Capabilities</span>
                    </div>
                    <ul className="space-y-1.5 text-slate-300">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span
                          ><strong>File-System Routing:</strong> Folder-based
                          pages, layouts, and nested routes</span
                        >
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span
                          ><strong>Server Components:</strong> Fast rendering
                          with zero client-side JS bundle overhead</span
                        >
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span
                          ><strong>Server Actions:</strong> Type-safe
                          asynchronous mutations directly from forms</span
                        >
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span
                          ><strong>Asset Optimization:</strong> Automatic WebP
                          images, self-hosted fonts, scripts</span
                        >
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span
                          ><strong>Metadata &amp; SEO:</strong> Dynamic Open Graph
                          and search engine tags built-in</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 4: React vs Next.js
export function Slide4({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 01 — WEB TO NEXT.JS &bull; SLIDE 04 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">React vs Next.js</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Detailed architectural comparison between React and Next.js.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="overflow-x-auto">
                  <table className="table-spec w-full border-collapse text-xs border border-slate-800">
                    <thead>
                      <tr>
                        <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">FEATURE / CRITERIA</th>
                        <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">STANDALONE REACT (VITE / CRA)</th>
                        <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">NEXT.JS (APP ROUTER)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-300">Category</td>
                        <td className="px-3 py-2 border-b border-slate-800 text-slate-200">UI Library (view layer only)</td>
                        <td className="text-blue-400 font-bold">
                          Full-Stack Framework
                        </td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-300">Routing</td>
                        <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Third-party required (React Router, etc.)</td>
                        <td className="text-green-400">
                          Built-in File-System Routing (Folders &amp; Pages)
                        </td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-300">Rendering</td>
                        <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Client-Side Rendering (CSR) by default</td>
                        <td className="text-green-400">
                          Server Components (RSC), SSR, SSG, Streaming
                        </td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-300">Data Fetching</td>
                        <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Client useEffect / TanStack Query</td>
                        <td className="text-green-400">
                          Direct async/await on Server &amp; Server Actions
                        </td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-300">Backend / DB</td>
                        <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Requires separate Express/Nest/FastAPI backend</td>
                        <td className="text-green-400">
                          Direct DB access &amp; Route Handlers built-in
                        </td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-300">SEO &amp; Metadata</td>
                        <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Difficult, requires React Helmet or prerender</td>
                        <td className="text-green-400">
                          Built-in static and dynamic Metadata API
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="diagram-box flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">React UI Library</div>
                  <span className="text-blue-400 font-bold text-sm">+</span>
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Next.js Framework Architecture</div>
                  <span className="text-blue-400 font-bold text-sm">=</span>
                  <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">
                    Production Full-Stack Application
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 5: When Should You Use Next.js?
export function Slide5({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 01 — WEB TO NEXT.JS &bull; SLIDE 05 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">When Should You Use Next.js?</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Primary use cases and production scenarios where Next.js
                    excels.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-4">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-blue-400  text-xs font-bold mb-1">
                    01 &bull; SAAS PLATFORMS
                  </div>
                  <h4 className="text-sm">Web Applications</h4>
                  <p>
                    <span className="lang-en"
                      >Multi-tenant software, subscription dashboards, complex
                      authenticated workflows, and rich data
                      visualization.</span
                    ><span className="lang-km"
                      >កម្មវិធី SaaS, ប្រព័ន្ធ Dashboard មាន Login,
                      ការគ្រប់គ្រងទិន្នន័យស្មុគស្មាញ
                      និងទាមទារសុវត្ថិភាពខ្ពស់។</span
                    >
                  </p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-green-400  text-xs font-bold mb-1">
                    02 &bull; E-COMMERCE
                  </div>
                  <h4 className="text-sm">Online Stores</h4>
                  <p>
                    <span className="lang-en"
                      >Instant page loads via static rendering for products,
                      dynamic cart interactions, and superior SEO for high
                      search ranking.</span
                    ><span className="lang-km"
                      >ហាងលក់ទំនិញអនឡាញ ទាមទារល្បឿនលឿនខ្លាំង (SEO)
                      និងការទាញទិន្នន័យស្តុកតាម Real-time។</span
                    >
                  </p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-orange-400  text-xs font-bold mb-1">
                    03 &bull; CONTENT &amp; CMS
                  </div>
                  <h4 className="text-sm">Blogs &amp; News</h4>
                  <p>
                    <span className="lang-en"
                      >Content sites requiring incremental static regeneration,
                      dynamic markdown rendering, and instant image
                      optimization.</span
                    ><span className="lang-km"
                      >គេហទំព័រព័ត៌មាន ប្លុក ឬ Documentation ដែលត្រូវការ SEO ល្អ
                      និងការ Render អត្ថបទរហ័ស។</span
                    >
                  </p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-purple-400  text-xs font-bold mb-1">
                    04 &bull; INTERNAL TOOLS
                  </div>
                  <h4 className="text-sm">Admin Portals</h4>
                  <p>
                    <span className="lang-en"
                      >Internal company portals, inventory trackers, and CRM
                      systems with direct PostgreSQL database connections.</span
                    ><span className="lang-km"
                      >ប្រព័ន្ធគ្រប់គ្រងផ្ទៃក្នុងក្រុមហ៊ុន (Admin CRM / ERP)
                      ដែលភ្ជាប់ទៅកាន់ PostgreSQL ដោយផ្ទាល់។</span
                    >
                  </p>
                </div>
              </div>
    </div>
  );
}

// Slide 6: Before Learning Next.js
export function Slide6({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 02 — REQUIREMENTS &bull; SLIDE 06 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Before Learning Next.js</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Prerequisites and recommended background knowledge.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Essential Prerequisites
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Before learning Next.js, you should have a solid grasp
                        of web fundamentals. Next.js builds on top of React, so
                        attempting Next.js without React basics will lead to
                        confusion about what comes from React vs what comes from
                        Next.js.</span
                      ><span className="lang-km"
                        >មុននឹងរៀន Next.js អ្នកគប្បីយល់ច្បាស់ពីមូលដ្ឋានគ្រឹះ
                        Web។ ដោយសារ Next.js បង្កើតលើ React បើគ្មានមូលដ្ឋាន React
                        ទេ អ្នកនឹងច្រឡំរវាងអ្វីជារបស់ React និងអ្វីជារបស់
                        Next.js។</span
                      >
                    </p>
                  </div>
                  <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                    <Info className="w-4 h-4 flex-shrink-0" />
                    <div>
                      <span className="lang-en"
                        ><strong>Good News:</strong> You do NOT need advanced
                        React state machines or external router knowledge.
                        Next.js simplifies routing and data fetching compared to
                        old client SPAs!</span
                      ><span className="lang-km"
                        ><strong>ដំណឹងល្អ៖</strong> អ្នកមិនចាំបាច់ចេះបណ្ណាល័យ
                        Router ស្មុគស្មាញនោះទេ! Next.js ជួយសម្រួល Routing និង
                        Data Fetching ឱ្យកាន់តែងាយស្រួល។</span
                      >
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2  text-xs">
                  <div className="p-3 bg-slate-900 border border-slate-800">
                    <div className="text-blue-400 font-bold mb-2">
                      Prerequisite Checklist
                    </div>
                    <div className="space-y-2">
                      <div
                        className="p-2 bg-slate-900 border border-slate-800 flex items-center justify-between"
                      >
                        <span className="text-slate-200"
                          >1. HTML5 &amp; Semantic Elements</span
                        >
                        <span className="text-green-400 font-bold">Required</span>
                      </div>
                      <div
                        className="p-2 bg-slate-900 border border-slate-800 flex items-center justify-between"
                      >
                        <span className="text-slate-200"
                          >2. Modern CSS &amp; Tailwind CSS</span
                        >
                        <span className="text-green-400 font-bold">Required</span>
                      </div>
                      <div
                        className="p-2 bg-slate-900 border border-slate-800 flex items-center justify-between"
                      >
                        <span className="text-slate-200"
                          >3. JavaScript ES6+ (Async, Arrow,
                          Destructuring)</span
                        >
                        <span className="text-green-400 font-bold">Required</span>
                      </div>
                      <div
                        className="p-2 bg-slate-900 border border-slate-800 flex items-center justify-between"
                      >
                        <span className="text-slate-200"
                          >4. React Core Basics (JSX, Components, Props)</span
                        >
                        <span className="text-green-400 font-bold">Required</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 7: React Fundamentals You Need
export function Slide7({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 02 — REQUIREMENTS &bull; SLIDE 07 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">React Fundamentals You Need</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    The essential React building blocks required for Next.js App
                    Router.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-blue-400  text-xs font-bold">
                    01 &bull; COMPONENTS &amp; JSX
                  </div>
                  <h4>Reusable UI Functions</h4>
                  <p>
                    <span className="lang-en"
                      >Components are JavaScript functions returning JSX markup
                      describing what the interface should look like.</span
                    ><span className="lang-km"
                      >Components គឺជា functions ដែល return JSX
                      ដើម្បីកំណត់ទម្រង់ UI។</span
                    >
                  </p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-green-400  text-xs font-bold">
                    02 &bull; PROPS &amp; CHILDREN
                  </div>
                  <h4>Data Transfer</h4>
                  <p>
                    <span className="lang-en"
                      >Passing data from parent to child components via
                      attributes and the special
                      <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">children</code> prop.</span
                    ><span className="lang-km"
                      >ការបញ្ជូនទិន្នន័យពី Parent ទៅកាន់ Child តាមរយៈ props និង
                      children។</span
                    >
                  </p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-purple-400  text-xs font-bold">
                    03 &bull; STATE &amp; HOOKS
                  </div>
                  <h4>Interactive Memory</h4>
                  <p>
                    <span className="lang-en"
                      >Using <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">useState</code> and
                      <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">useEffect</code> for client-side state and
                      life-cycle events.</span
                    ><span className="lang-km"
                      >ការប្រើប្រាស់ useState និង useEffect សម្រាប់រក្សាទុក
                      state និងគ្រប់គ្រង lifecycle។</span
                    >
                  </p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-orange-400  text-xs font-bold">
                    04 &bull; EVENT LISTENERS
                  </div>
                  <h4>Handling Clicks &amp; Inputs</h4>
                  <p>
                    <span className="lang-en"
                      >Listening to user events via <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">onClick</code>,
                      <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">onChange</code>, and
                      <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">onSubmit</code> handlers.</span
                    ><span className="lang-km"
                      >ការចាប់ព្រឹត្តិការណ៍របស់អ្នកប្រើប្រាស់ដូចជា onClick,
                      onChange និង onSubmit។</span
                    >
                  </p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-cyan-400  text-xs font-bold">
                    05 &bull; ASYNC / PROMISES
                  </div>
                  <h4>Asynchronous Data</h4>
                  <p>
                    <span className="lang-en"
                      >Handling asynchronous JavaScript promises using modern
                      <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">async</code> and <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">await</code> syntax.</span
                    ><span className="lang-km"
                      >ការប្រើប្រាស់ async/await ដើម្បីរង់ចាំទិន្នន័យពី Network
                      ឬ Database។</span
                    >
                  </p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-pink-400  text-xs font-bold">
                    06 &bull; SERVER VS CLIENT
                  </div>
                  <h4>Execution Boundaries</h4>
                  <p>
                    <span className="lang-en"
                      >Understanding that code can run either on the server
                      environment or in the browser window.</span
                    ><span className="lang-km"
                      >ការបែងចែកថាតើកូដមួយណាត្រូវដំណើរការលើ Server ឬលើ Browser
                      Client។</span
                    >
                  </p>
                </div>
              </div>
    </div>
  );
}

// Slide 8: Install Requirements
export function Slide8({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 03 — CREATE NEXT.JS PROJECT &bull; SLIDE 08 /
                    75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Install Requirements</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Setting up Node.js, package manager, and development tools.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Environment Prerequisites
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Next.js 15 requires Node.js version 18.18 or higher
                        (version 20+ LTS is recommended). You also need a
                        package manager (pnpm, npm, or bun) and a code editor
                        like VS Code.</span
                      ><span className="lang-km"
                        >Next.js 15 តម្រូវឱ្យមាន Node.js កំណែ 18.18 ឡើងទៅ (ណែនាំ
                        Node 20+ LTS)។ អ្នកក៏ត្រូវការ Package Manager (pnpm,
                        npm, bun) និង Editor ដូចជា VS Code។</span
                      >
                    </p>
                  </div>
                  <div className="alert-callout warning flex items-start gap-2.5 p-3 border border-amber-500/30 bg-amber-500/10 text-amber-300 text-[12.5px] leading-relaxed">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <div>
                      <span className="lang-en"
                        >Check your installed version in terminal using
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">node -v</code>. If outdated, install the latest
                        LTS release from
                        <a
                          href="https://nodejs.org"
                          target="_blank"
                          className="underline text-blue-400"
                          >nodejs.org</a
                        >.</span
                      ><span className="lang-km"
                        >ពិនិត្យមើលកំណែ Node ក្នុង Terminal ដោយប្រើ
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">node -v</code>។ ប្រសិនបើយឺត សូមដំឡើងកំណែ LTS
                        ចុងក្រោយពី nodejs.org។</span
                      >
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3  text-xs">
                  <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <div className="terminal-dots flex items-center gap-1.5">
                        <div className="terminal-dot red w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></div>
                        <div className="terminal-dot yellow w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></div>
                        <div className="terminal-dot green w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></div>
                      </div>
                      <span className=" text-xs text-slate-400"
                        >Verify Developer Environment</span
                      >
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
                      <div>
                        <span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span>
                        <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">node -v</span>
                      </div>
                      <div className="term-out text-slate-300  text-xs">v20.18.0 (LTS verified)</div>
                      <div>
                        <span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span>
                        <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">pnpm -v</span>
                      </div>
                      <div className="term-out text-slate-300  text-xs">9.12.0</div>
                      <div>
                        <span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span>
                        <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">git --version</span>
                      </div>
                      <div className="term-out text-slate-300  text-xs">git version 2.43.0</div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 9: Create a Next.js Application
export function Slide9({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 03 — CREATE NEXT.JS PROJECT &bull; SLIDE 09 /
                    75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Create a Next.js Application</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Bootstrapping a modern full-stack project with
                    create-next-app.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <div className="terminal-dots flex items-center gap-1.5">
                        <div className="terminal-dot red w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></div>
                        <div className="terminal-dot yellow w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></div>
                        <div className="terminal-dot green w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></div>
                      </div>
                      <span className=" text-xs text-slate-400"
                        >Bootstrap Next.js Project</span
                      >
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
                      <div>
                        <span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span>
                        <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5"
                          >npx create-next-app@latest my-app</span
                        >
                      </div>
                      <div className="term-out text-slate-300  text-xs"></div>
                      <div className="text-slate-500  text-xs">
                        # Interactive CLI Prompts:
                      </div>
                      <div className="term-out text-slate-300  text-xs">
                        ? Would you like to use TypeScript? ... Yes
                      </div>
                      <div className="term-out text-slate-300  text-xs">
                        ? Would you like to use ESLint? ... Yes
                      </div>
                      <div className="term-out text-slate-300  text-xs">
                        ? Would you like to use Tailwind CSS? ... Yes
                      </div>
                      <div className="term-out text-slate-300  text-xs">
                        ? Would you like your code inside a `src/` directory?
                        ... No
                      </div>
                      <div className="term-out text-slate-300  text-xs">
                        ? Would you like to use App Router? (recommended) ...
                        Yes
                      </div>
                      <div className="term-out text-slate-300  text-xs">
                        ? Would you like to use Turbopack for `next dev`? ...
                        Yes
                      </div>
                      <div className="term-out text-slate-300  text-xs">
                        ? Would you like to customize the import alias (@/*)?
                        ... No
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3  text-xs">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4 className="text-blue-400 font-bold mb-1">
                      Recommended Configuration Options
                    </h4>
                    <p className="text-slate-300 text-xs mb-2">
                      <span className="lang-en"
                        >The CLI sets up everything needed for modern
                        development in seconds.</span
                      ><span className="lang-km"
                        >CLI
                        នឹងរៀបចំអ្វីៗទាំងអស់ដោយស្វ័យប្រវត្តិតែប៉ុន្មានវិនាទីប៉ុណ្ណោះ។</span
                      >
                    </p>
                    <div className="space-y-1.5 text-slate-300">
                      <div
                        className="p-1.5 bg-slate-900 border border-slate-800 flex justify-between"
                      >
                        <span>TypeScript</span
                        ><span className="text-green-400">Type safety</span>
                      </div>
                      <div
                        className="p-1.5 bg-slate-900 border border-slate-800 flex justify-between"
                      >
                        <span>Tailwind CSS</span
                        ><span className="text-green-400">Utility styling</span>
                      </div>
                      <div
                        className="p-1.5 bg-slate-900 border border-slate-800 flex justify-between"
                      >
                        <span>App Router</span
                        ><span className="text-green-400">Modern standard</span>
                      </div>
                      <div
                        className="p-1.5 bg-slate-900 border border-slate-800 flex justify-between"
                      >
                        <span>Turbopack</span
                        ><span className="text-green-400">Blazing dev server</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 10: Start Development Server
export function Slide10({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 03 — CREATE NEXT.JS PROJECT &bull; SLIDE 10 /
                    75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Start Development Server</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Launching the development server with Turbopack and Fast
                    Refresh.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <div className="terminal-dots flex items-center gap-1.5">
                        <div className="terminal-dot red w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></div>
                        <div className="terminal-dot yellow w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></div>
                        <div className="terminal-dot green w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></div>
                      </div>
                      <span className=" text-xs text-slate-400"
                        >Start Local Development Server</span
                      >
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
                      <div>
                        <span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span>
                        <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">cd my-app</span>
                      </div>
                      <div>
                        <span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span>
                        <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">npm run dev</span>
                      </div>
                      <div className="term-out text-slate-300  text-xs"></div>
                      <div className="term-out text-slate-300  text-xs">▲ Next.js 15.0.0 (Turbopack)</div>
                      <div className="term-out text-slate-300  text-xs">- Local: http://localhost:3000</div>
                      <div className="term-out text-slate-300  text-xs">
                        - Network: http://192.168.1.50:3000
                      </div>
                      <div className="term-out text-slate-300  text-xs"></div>
                      <div className="term-out text-slate-300  text-xs">Ready in 450ms</div>
                      <div className="term-out text-slate-300  text-xs">Compiling / ...</div>
                      <div className="term-out text-slate-300  text-xs">
                        Compiled / in 120ms (482 modules)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      Fast Refresh &amp; Instant Feedback
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Open <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">http://localhost:3000</code> in your
                        browser. Next.js includes Fast Refresh: whenever you
                        edit any file inside <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">app/</code>, the browser
                        updates instantaneously while preserving your
                        application's state.</span
                      ><span className="lang-km"
                        >បើក <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">http://localhost:3000</code> លើ Browser។
                        Next.js មានមុខងារ Fast Refresh៖
                        រាល់ពេលអ្នកកែប្រែកូដក្នុង folder
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">app/</code> Browser នឹង Update ភ្លាមៗដោយមិនបាត់បង់
                        State ឡើយ។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 11: Next.js Project Structure
export function Slide11({ onStart, onRestart }) {
  const treeText = `my-app/
├── app/                  # App Router routes & pages
│   ├── favicon.ico
│   ├── globals.css       # Global CSS & Tailwind
│   ├── layout.tsx        # Root layout wrapper
│   └── page.tsx          # Root page (/)
├── public/               # Static assets (images, SVGs)
│   └── next.svg
├── node_modules/
├── next.config.ts        # Next.js config
├── package.json          # Dependencies & scripts
├── postcss.config.mjs
├── tailwind.config.ts    # Tailwind CSS config
└── tsconfig.json         # TypeScript config`;

  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label text-[11px] font-bold uppercase tracking-wider text-blue-400">
            SECTION 04 — PROJECT STRUCTURE &bull; SLIDE 11 / 75
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            Next.js Project Structure
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Understanding the App Router layout, folders, and configuration files.
          </p>
        </div>
        <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400 inline-flex items-center gap-1">
          Next.js App Router
        </span>
      </div>

      <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3 text-xs">
          <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden text-xs shadow-md">
            <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
              <div className="terminal-dots flex items-center gap-1.5">
                <div className="terminal-dot red w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></div>
                <div className="terminal-dot yellow w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></div>
                <div className="terminal-dot green w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></div>
              </div>
              <span className="text-xs text-slate-400 font-mono">my-app/ Directory Tree</span>
              <button
                className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                data-copy={treeText}
              >
                <Copy className="w-3 h-3" />
                Copy
              </button>
            </div>
            <div className="terminal-body p-3.5 overflow-x-auto text-xs leading-relaxed bg-slate-950/60">
              <pre className="tree-diagram font-mono text-[11.5px] leading-relaxed text-slate-300 m-0">
                <span className="text-sky-400 font-bold">my-app/</span>{"\n"}
                <span className="text-slate-500">├── </span><span className="text-sky-300 font-semibold">app/</span>{"                  "}<span className="text-blue-400 font-semibold"># App Router routes &amp; pages</span>{"\n"}
                <span className="text-slate-500">│   ├── </span><span className="text-slate-300">favicon.ico</span>{"\n"}
                <span className="text-slate-500">│   ├── </span><span className="text-indigo-300">globals.css</span>{"       "}<span className="text-slate-400"># Global CSS &amp; Tailwind</span>{"\n"}
                <span className="text-slate-500">│   ├── </span><span className="text-emerald-400 font-semibold">layout.tsx</span>{"        "}<span className="text-emerald-400 font-semibold"># Root layout wrapper</span>{"\n"}
                <span className="text-slate-500">│   └── </span><span className="text-emerald-400 font-semibold">page.tsx</span>{"          "}<span className="text-emerald-400 font-semibold"># Root page (/)</span>{"\n"}
                <span className="text-slate-500">├── </span><span className="text-sky-300 font-semibold">public/</span>{"               "}<span className="text-slate-400"># Static assets (images, SVGs)</span>{"\n"}
                <span className="text-slate-500">│   └── </span><span className="text-slate-300">next.svg</span>{"\n"}
                <span className="text-slate-500">├── </span><span className="text-slate-400">node_modules/</span>{"\n"}
                <span className="text-slate-500">├── </span><span className="text-amber-300 font-medium">next.config.ts</span>{"        "}<span className="text-slate-400"># Next.js config</span>{"\n"}
                <span className="text-slate-500">├── </span><span className="text-pink-300 font-medium">package.json</span>{"          "}<span className="text-slate-400"># Dependencies &amp; scripts</span>{"\n"}
                <span className="text-slate-500">├── </span><span className="text-slate-300">postcss.config.mjs</span>{"\n"}
                <span className="text-slate-500">├── </span><span className="text-cyan-300 font-medium">tailwind.config.ts</span>{"    "}<span className="text-slate-400"># Tailwind CSS config</span>{"\n"}
                <span className="text-slate-500">└── </span><span className="text-blue-300 font-medium">tsconfig.json</span>{"         "}<span className="text-slate-400"># TypeScript config</span>
              </pre>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
            <h4>
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              App Router Architecture
            </h4>
            <p>
              <span className="lang-en">
                In Next.js App Router, routing is entirely determined by folders inside{" "}
                <code className="text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">app/</code>. Files named{" "}
                <code className="text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">page.tsx</code> become publicly accessible routes, while{" "}
                <code className="text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">layout.tsx</code> provides wrapping layouts.
              </span>
              <span className="lang-km">
                ក្នុង Next.js App Router ការកំណត់ Routing ត្រូវបានធ្វើឡើងតាមរយៈ folders ក្នុង{" "}
                <code className="text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">app/</code>។ ឯកសារឈ្មោះ{" "}
                <code className="text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">page.tsx</code> ក្លាយជា Route សាធារណៈ ហើយ{" "}
                <code className="text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">layout.tsx</code> ផ្ដល់នូវ Layout រួម។
              </span>
            </p>
          </div>
          <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
            <h4 className="text-blue-400 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span className="lang-en">Key Project Roles</span>
              <span className="lang-km">តួនាទីឯកសារសំខាន់ៗ</span>
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="p-1.5 bg-slate-900 border border-slate-800 flex justify-between items-center">
                <code className="text-emerald-400 font-mono text-[11px]">app/page.tsx</code>
                <span className="text-slate-400 text-[11px] lang-en">Route UI (/)</span>
                <span className="text-slate-400 text-[11px] lang-km">ទំព័រដើម (/)</span>
              </div>
              <div className="p-1.5 bg-slate-900 border border-slate-800 flex justify-between items-center">
                <code className="text-emerald-400 font-mono text-[11px]">app/layout.tsx</code>
                <span className="text-slate-400 text-[11px] lang-en">HTML &amp; Shell</span>
                <span className="text-slate-400 text-[11px] lang-km">គ្រោងទំព័ររួម</span>
              </div>
              <div className="p-1.5 bg-slate-900 border border-slate-800 flex justify-between items-center">
                <code className="text-indigo-300 font-mono text-[11px]">app/globals.css</code>
                <span className="text-slate-400 text-[11px] lang-en">Tailwind &amp; CSS</span>
                <span className="text-slate-400 text-[11px] lang-km">ស្ទីលទូទៅ</span>
              </div>
              <div className="p-1.5 bg-slate-900 border border-slate-800 flex justify-between items-center">
                <code className="text-amber-300 font-mono text-[11px]">next.config.ts</code>
                <span className="text-slate-400 text-[11px] lang-en">Build Settings</span>
                <span className="text-slate-400 text-[11px] lang-km">ការកំណត់ Next</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 12: app/page.tsx
export function Slide12({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 04 — PROJECT STRUCTURE &bull; SLIDE 12 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">app/page.tsx</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    The entry route file and main page component.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        app/page.tsx
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold tracking-tight">
        Hello Next.js
      </h1>
      <p className="mt-4 text-slate-400">
        Welcome to your modern full-stack web application.
      </p>
    </main>
  );
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3  text-xs">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4 className="text-blue-400 font-bold mb-1">
                      Simulated Browser Output (localhost:3000)
                    </h4>
                    <div
                      className="p-4 bg-slate-900 border border-slate-800 flex flex-col items-center justify-center text-center"
                    >
                      <h1 className="text-xl font-bold text-white tracking-tight">
                        Hello Next.js
                      </h1>
                      <p className="text-slate-400 text-xs mt-2">
                        Welcome to your modern full-stack web application.
                      </p>
                      <span
                        className="mt-4 px-2 py-0.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px]"
                        >Server Component</span
                      >
                    </div>
                  </div>
                  <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                    <div>
                      <span className="lang-en"
                        ><strong>Rule:</strong> The default export from
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">page.tsx</code> is the UI rendered for this route
                        segment.</span
                      ><span className="lang-km"
                        ><strong>វិធាន៖</strong> Default export ពី
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">page.tsx</code> គឺជា UI ដែលត្រូវបង្ហាញសម្រាប់
                        Route Segment នោះ។</span
                      >
                    </div>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 13: app/layout.tsx
export function Slide13({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 04 — PROJECT STRUCTURE &bull; SLIDE 13 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">app/layout.tsx</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Root layout, shared UI, and global HTML shell.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        app/layout.tsx
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Application",
  description: "Built with Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Root Layout Responsibilities
                    </h4>
                    <p>
                      <span className="lang-en"
                        >The Root Layout is required and defines the top-level
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">&lt;html&gt;</code> and
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">&lt;body&gt;</code> tags. It is shared across all
                        pages in the app and never re-renders during navigation,
                        preserving client state.</span
                      ><span className="lang-km"
                        >Root Layout គឺចាំបាច់ត្រូវតែមាន ដើម្បីកំណត់ tag
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">&lt;html&gt;</code> និង <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">&lt;body&gt;</code>។
                        វាត្រូវបានប្រើរួមគ្នានៅគ្រប់ទំព័រ ហើយមិនត្រូវ Re-render
                        ឡើងវិញពេល Navigation ឡើយ។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 14: File-System Routing
export function Slide14({ onStart, onRestart }) {
  const routeTreeText = `app/
├── page.tsx          →  /
├── about/
│   └── page.tsx      →  /about
└── contact/
    └── page.tsx      →  /contact`;

  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label text-[11px] font-bold uppercase tracking-wider text-blue-400">
            SECTION 05 — ROUTING &bull; SLIDE 14 / 75
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            File-System Routing
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            How folders and pages map directly to public URLs.
          </p>
        </div>
        <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400 inline-flex items-center gap-1">
          Next.js App Router
        </span>
      </div>

      <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3 text-xs">
          <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden text-xs shadow-md">
            <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
              <div className="terminal-dots flex items-center gap-1.5">
                <div className="terminal-dot red w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></div>
                <div className="terminal-dot yellow w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></div>
                <div className="terminal-dot green w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></div>
              </div>
              <span className="text-xs text-slate-400 font-mono">Folders Map Directly to URLs</span>
              <button
                className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                data-copy={routeTreeText}
              >
                <Copy className="w-3 h-3" />
                Copy
              </button>
            </div>
            <div className="terminal-body p-3.5 overflow-x-auto text-xs leading-relaxed bg-slate-950/60">
              <pre className="tree-diagram font-mono text-[11.5px] leading-relaxed text-slate-300 m-0">
                <span className="text-sky-400 font-bold">app/</span>{"\n"}
                <span className="text-slate-500">├── </span><span className="text-emerald-400 font-semibold">page.tsx</span>{"          "}<span className="text-slate-500 font-bold">&rarr;</span>{"  "}<span className="text-green-400 font-bold">/</span>{"\n"}
                <span className="text-slate-500">├── </span><span className="text-sky-300 font-semibold">about/</span>{"\n"}
                <span className="text-slate-500">│   └── </span><span className="text-emerald-400 font-semibold">page.tsx</span>{"      "}<span className="text-slate-500 font-bold">&rarr;</span>{"  "}<span className="text-green-400 font-bold">/about</span>{"\n"}
                <span className="text-slate-500">└── </span><span className="text-sky-300 font-semibold">contact/</span>{"\n"}
                <span className="text-slate-500">    └── </span><span className="text-emerald-400 font-semibold">page.tsx</span>{"      "}<span className="text-slate-500 font-bold">&rarr;</span>{"  "}<span className="text-green-400 font-bold">/contact</span>
              </pre>
            </div>
          </div>
          <div className="p-3 bg-slate-900 border border-slate-800 flex flex-col gap-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
              <span className="lang-en">Browser URL Example</span>
              <span className="lang-km">ឧទាហរណ៍ URL ក្នុង Browser</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-950 px-2.5 py-1.5 border border-slate-800 font-mono text-xs">
              <span className="text-slate-500 select-none">https://my-app.com</span>
              <span className="text-green-400 font-bold">/about</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
            <h4>
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              Automatic Routing by Convention
            </h4>
            <p>
              <span className="lang-en">
                You never have to maintain a separate route configuration file like in React Router.
                Simply create a folder with a{" "}
                <code className="text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">page.tsx</code>{" "}
                file, and Next.js automatically creates the endpoint URL.
              </span>
              <span className="lang-km">
                អ្នកមិនបាច់សរសេរឯកសារ Route Config ស្មុគស្មាញឡើយ។ គ្រាន់តែបង្កើត folder និងដាក់{" "}
                <code className="text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">page.tsx</code>{" "}
                ចូល Next.js នឹងបង្កើត URL នោះដោយស្វ័យប្រវត្តិ។
              </span>
            </p>
          </div>
          <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
            <h4 className="text-blue-400 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span className="lang-en">Route Resolution Rules</span>
              <span className="lang-km">វិធានកំណត់ Route</span>
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="p-1.5 bg-slate-900 border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400 text-[11px] lang-en">Root URL</span>
                <span className="text-slate-400 text-[11px] lang-km">ទំព័រដើម</span>
                <code className="text-emerald-400 font-mono text-[11px]">app/page.tsx → /</code>
              </div>
              <div className="p-1.5 bg-slate-900 border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400 text-[11px] lang-en">Single Segment</span>
                <span className="text-slate-400 text-[11px] lang-km">Route មួយកម្រិត</span>
                <code className="text-emerald-400 font-mono text-[11px]">app/about/page.tsx → /about</code>
              </div>
              <div className="p-1.5 bg-slate-900 border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400 text-[11px] lang-en">Nested Segment</span>
                <span className="text-slate-400 text-[11px] lang-km">Route ច្រើនកម្រិត</span>
                <code className="text-emerald-400 font-mono text-[11px]">app/contact/page.tsx → /contact</code>
              </div>
              <div className="p-1.5 bg-slate-900 border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400 text-[11px] lang-en">Private Folder</span>
                <span className="text-slate-400 text-[11px] lang-km">Folder មិនសាធារណៈ</span>
                <code className="text-slate-500 font-mono text-[11px]">_components/ (ignored)</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 15: Nested Routes
export function Slide15({ onStart, onRestart }) {
  const nestedTreeText = `app/
└── dashboard/
    ├── layout.tsx     # Dashboard sidebar layout
    ├── page.tsx       →  /dashboard
    ├── users/
    │   └── page.tsx   →  /dashboard/users
    └── settings/
        └── page.tsx   →  /dashboard/settings`;

  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label text-[11px] font-bold uppercase tracking-wider text-blue-400">
            SECTION 05 — ROUTING &bull; SLIDE 15 / 75
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            Nested Routes
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Hierarchical route segments and nested UI layouts.
          </p>
        </div>
        <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400 inline-flex items-center gap-1">
          Next.js App Router
        </span>
      </div>

      <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3 text-xs">
          <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden text-xs shadow-md">
            <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
              <div className="terminal-dots flex items-center gap-1.5">
                <div className="terminal-dot red w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></div>
                <div className="terminal-dot yellow w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></div>
                <div className="terminal-dot green w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></div>
              </div>
              <span className="text-xs text-slate-400 font-mono">Nested Dashboard Structure</span>
              <button
                className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                data-copy={nestedTreeText}
              >
                <Copy className="w-3 h-3" />
                Copy
              </button>
            </div>
            <div className="terminal-body p-3.5 overflow-x-auto text-xs leading-relaxed bg-slate-950/60">
              <pre className="tree-diagram font-mono text-[11.5px] leading-relaxed text-slate-300 m-0">
                <span className="text-sky-400 font-bold">app/</span>{"\n"}
                <span className="text-slate-500">└── </span><span className="text-sky-300 font-semibold">dashboard/</span>{"\n"}
                <span className="text-slate-500">    ├── </span><span className="text-indigo-300 font-semibold">layout.tsx</span>{"     "}<span className="text-blue-400 font-semibold"># Dashboard sidebar layout</span>{"\n"}
                <span className="text-slate-500">    ├── </span><span className="text-emerald-400 font-semibold">page.tsx</span>{"       "}<span className="text-slate-500 font-bold">&rarr;</span>{"  "}<span className="text-green-400 font-bold">/dashboard</span>{"\n"}
                <span className="text-slate-500">    ├── </span><span className="text-sky-300 font-semibold">users/</span>{"\n"}
                <span className="text-slate-500">    │   └── </span><span className="text-emerald-400 font-semibold">page.tsx</span>{"   "}<span className="text-slate-500 font-bold">&rarr;</span>{"  "}<span className="text-green-400 font-bold">/dashboard/users</span>{"\n"}
                <span className="text-slate-500">    └── </span><span className="text-sky-300 font-semibold">settings/</span>{"\n"}
                <span className="text-slate-500">        └── </span><span className="text-emerald-400 font-semibold">page.tsx</span>{"   "}<span className="text-slate-500 font-bold">&rarr;</span>{"  "}<span className="text-green-400 font-bold">/dashboard/settings</span>
              </pre>
            </div>
          </div>
          <div className="p-3 bg-slate-900 border border-slate-800 flex flex-col gap-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span>
              <span className="lang-en">Nested URL Route</span>
              <span className="lang-km">ឧទាហរណ៍ URL កម្រិតរង</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-950 px-2.5 py-1.5 border border-slate-800 font-mono text-xs">
              <span className="text-slate-500 select-none">https://my-app.com</span>
              <span className="text-slate-400">/dashboard</span>
              <span className="text-green-400 font-bold">/users</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
            <h4>
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              Nested Layouts &amp; Preserved State
            </h4>
            <p>
              <span className="lang-en">
                The <code className="text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">dashboard/layout.tsx</code> wraps all routes beneath it. When a user switches between{" "}
                <code className="text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">/dashboard/users</code> and{" "}
                <code className="text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">/dashboard/settings</code>, the dashboard layout remains intact and only the inner page content re-renders!
              </span>
              <span className="lang-km">
                <code className="text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">dashboard/layout.tsx</code> នឹងរុំព័ទ្ធគ្រប់ Sub-routes ទាំងអស់។ ពេល User ប្ដូរពី /users ទៅ /settings នោះ Sidebar នឹងមិនបាត់បង់ state ឬ refresh ឡើយ។
              </span>
            </p>
          </div>
          <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
            <h4 className="text-purple-400 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span className="lang-en">Layout Inheritance</span>
              <span className="lang-km">ការបន្តវេន Layout</span>
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="p-1.5 bg-slate-900 border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400 text-[11px] lang-en">Global Shell</span>
                <span className="text-slate-400 text-[11px] lang-km">គ្រោងទូទៅ</span>
                <code className="text-blue-400 font-mono text-[11px]">app/layout.tsx</code>
              </div>
              <div className="p-1.5 bg-slate-900 border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400 text-[11px] lang-en">Section Layout</span>
                <span className="text-slate-400 text-[11px] lang-km">គ្រោងផ្នែក</span>
                <code className="text-purple-400 font-mono text-[11px]">dashboard/layout.tsx</code>
              </div>
              <div className="p-1.5 bg-slate-900 border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400 text-[11px] lang-en">Sub-Page View</span>
                <span className="text-slate-400 text-[11px] lang-km">ទំព័ររង</span>
                <code className="text-emerald-400 font-mono text-[11px]">dashboard/users/page.tsx</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 16: Dynamic Routes
export function Slide16({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 05 — ROUTING &bull; SLIDE 16 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Dynamic Routes</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Capturing URL parameters with dynamic folder segments [id].
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        app/products/[id]/page.tsx
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // In Next.js 15+, params is a Promise
  const { id } = await params;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Product Details</h1>
      <p className=" text-blue-400 mt-2">Product ID: {id}</p>
    </div>
  );
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3  text-xs">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4 className="text-blue-400 font-bold mb-1">
                      Square Brackets [id] Convention
                    </h4>
                    <p className="text-slate-300 text-xs mb-2">
                      <span className="lang-en"
                        >Any folder with brackets creates dynamic segments that
                        capture URL parameters.</span
                      ><span className="lang-km"
                        >Folder ដែលមានសញ្ញាវង់ក្រចក [id] នឹងចាប់យក Parameter ពី
                        URL។</span
                      >
                    </p>
                    <div className="space-y-1.5 text-slate-300">
                      <div className="p-1.5 bg-slate-900 border border-slate-800">
                        /products/123 &rarr; id = "123"
                      </div>
                      <div className="p-1.5 bg-slate-900 border border-slate-800">
                        /products/macbook &rarr; id = "macbook"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 17: Link Component
export function Slide17({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 06 — NAVIGATION &bull; SLIDE 17 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Link Component</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Client-side navigation and automatic background route
                    prefetching.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        app/ui/Navbar.tsx
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-slate-900 border-b border-slate-800">
      <Link href="/" className="hover:text-blue-400">
        Home
      </Link>
      <Link href="/dashboard" className="hover:text-blue-400">
        Dashboard
      </Link>
      <Link href="/about" className="hover:text-blue-400">
        About
      </Link>
    </nav>
  );
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      Why next/link instead of &lt;a&gt;?
                    </h4>
                    <p>
                      <span className="lang-en"
                        >The <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">&lt;Link&gt;</code> component performs
                        client-side transitions without full page reloads.
                        Crucially, Next.js automatically prefetches linked pages
                        in the viewport in the background, making navigation
                        feel instant!</span
                      ><span className="lang-km"
                        ><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">&lt;Link&gt;</code>
                        ធ្វើការផ្លាស់ប្ដូរទំព័រដោយមិនបាច់ Reload
                        ទំព័រទាំងមូលឡើយ។ Next.js ថែមទាំង Pre-fetch
                        ទិន្នន័យទំព័រនោះទុកជាមុន
                        ធ្វើឱ្យការចុចបើកលឿនដូចផ្លេកបន្ទោរ!</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 18: Navigation Architecture
export function Slide18({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 06 — NAVIGATION &bull; SLIDE 18 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Navigation Architecture</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Application site hierarchy and active navigation
                    highlighting.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="diagram-box flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Home (/)</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&bull;</span>
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Products (/products)</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&bull;</span>
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Product 1 (/products/1)</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&bull;</span>
                  <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">Dashboard (/dashboard)</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&bull;</span>
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Users (/dashboard/users)</div>
                </div>
                <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Active Links with usePathname()
                    </h4>
                    <p>
                      <span className="lang-en"
                        >In Client Components, import
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">usePathname</code> from
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">next/navigation</code> to read the current URL
                        path and apply active highlight styles to your nav
                        items.</span
                      ><span className="lang-km"
                        >ក្នុង Client Components អ្នកអាចប្រើ
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">usePathname()</code> ពី
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">next/navigation</code> ដើម្បីដឹងពី Path
                        បច្ចុប្បន្ន និងដាក់ពណ៌ Active លើ Nav link។</span
                      >
                    </p>
                  </div>

                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        Active Nav Link Pattern
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} className={isActive ? "text-blue-400 font-bold" : "text-slate-400"}>
      {label}
    </Link>
  );
}`}</code></pre>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 19: What Is a Component?
export function Slide19({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 07 — COMPONENTS &bull; SLIDE 19 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">What Is a Component?</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Reusable UI building blocks in React and Next.js.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        components/Button.tsx
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`export default function Button() {
  return (
    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition">
      Click me
    </button>
  );
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Reusable UI Units
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Components are the core foundation of React and Next.js
                        applications. They encapsulate markup, styling, and
                        behavior into self-contained, composable building blocks
                        that can be reused anywhere.</span
                      ><span className="lang-km"
                        >Components គឺជាគ្រឹះចម្បងរបស់ React និង Next.js។
                        វាបូកបញ្ចូល Markup, Styling និង Behavior
                        ទៅជាដុំកូដដែលអាចយកទៅប្រើឡើងវិញនៅគ្រប់ទីកន្លែង។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 20: Props
export function Slide20({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 07 — COMPONENTS &bull; SLIDE 20 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Props</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Passing dynamic data and children to reusable components.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        components/Button.tsx with Props
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ children, variant = "primary" }: ButtonProps) {
  const styles = variant === "primary"
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "bg-slate-800 text-slate-200 hover:bg-slate-700";

  return (
    <button className={\`px-4 py-2 font-medium text-sm transition \${styles}\`}>
      {children}
    </button>
  );
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3  text-xs">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4 className="text-green-400 font-bold mb-1">
                      TypeScript Interface for Props
                    </h4>
                    <p className="text-slate-300 text-xs mb-2">
                      <span className="lang-en"
                        >Props pass configuration and data into components.
                        Using TypeScript guarantees compile-time safety.</span
                      ><span className="lang-km"
                        >Props បញ្ជូនទិន្នន័យចូល component ហើយ TypeScript
                        ជួយពិនិត្យកំហុសកូដជាមុន។</span
                      >
                    </p>

                    <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                      <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                        <span className="flex items-center gap-2">
                          <Code className="w-3.5 h-3.5 text-blue-400" />
                          Usage in Any Page
                        </span>
                        <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                          <Copy className="w-3 h-3" />
                          Copy
                        </button>
                      </div>
                      <pre><code>{`<Button variant="primary">Save Changes</Button>
<Button variant="secondary">Cancel</Button>`}</code></pre>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 21: Component Architecture
export function Slide21({ onStart, onRestart }) {
  const componentTreeText = `app/
├── components/           # Shared UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Modal.tsx
│   └── Navbar.tsx
└── dashboard/
    ├── components/       # Dashboard-specific components
    │   └── UserTable.tsx
    └── page.tsx`;

  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label text-[11px] font-bold uppercase tracking-wider text-blue-400">
            SECTION 07 — COMPONENTS &bull; SLIDE 21 / 75
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            Component Architecture
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Organizing components, modularity, and colocation best practices.
          </p>
        </div>
        <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400 inline-flex items-center gap-1">
          Next.js App Router
        </span>
      </div>

      <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3 text-xs">
          <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden text-xs shadow-md">
            <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
              <div className="terminal-dots flex items-center gap-1.5">
                <div className="terminal-dot red w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></div>
                <div className="terminal-dot yellow w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></div>
                <div className="terminal-dot green w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></div>
              </div>
              <span className="text-xs text-slate-400 font-mono">Recommended Component Organization</span>
              <button
                className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                data-copy={componentTreeText}
              >
                <Copy className="w-3 h-3" />
                Copy
              </button>
            </div>
            <div className="terminal-body p-3.5 overflow-x-auto text-xs leading-relaxed bg-slate-950/60">
              <pre className="tree-diagram font-mono text-[11.5px] leading-relaxed text-slate-300 m-0">
                <span className="text-sky-400 font-bold">app/</span>{"\n"}
                <span className="text-slate-500">├── </span><span className="text-sky-300 font-semibold">components/</span>{"           "}<span className="text-blue-400 font-semibold"># Shared UI components</span>{"\n"}
                <span className="text-slate-500">│   ├── </span><span className="text-indigo-300">Button.tsx</span>{"\n"}
                <span className="text-slate-500">│   ├── </span><span className="text-indigo-300">Card.tsx</span>{"\n"}
                <span className="text-slate-500">│   ├── </span><span className="text-indigo-300">Modal.tsx</span>{"\n"}
                <span className="text-slate-500">│   └── </span><span className="text-indigo-300">Navbar.tsx</span>{"\n"}
                <span className="text-slate-500">└── </span><span className="text-sky-300 font-semibold">dashboard/</span>{"\n"}
                <span className="text-slate-500">    ├── </span><span className="text-emerald-400 font-semibold">components/</span>{"       "}<span className="text-green-400 font-semibold"># Dashboard-specific components</span>{"\n"}
                <span className="text-slate-500">    │   └── </span><span className="text-indigo-300">UserTable.tsx</span>{"\n"}
                <span className="text-slate-500">    └── </span><span className="text-emerald-400 font-semibold">page.tsx</span>
              </pre>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
            <h4>
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              Modularity &amp; Colocation
            </h4>
            <p>
              <span className="lang-en">
                Colocate components close to where they are used. If a component is only used on the dashboard, keep it in{" "}
                <code className="text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">app/dashboard/components/</code>. If it is reused across the entire app, place it in a top-level{" "}
                <code className="text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">components/</code> folder.
              </span>
              <span className="lang-km">
                ដាក់ component ជិតកន្លែងដែលវាត្រូវប្រើ។ បើប្រើតែលើ Dashboard ទុកក្នុង folder របស់ Dashboard។ បើប្រើទូទៅ ដាក់ក្នុង root{" "}
                <code className="text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">components/</code>។
              </span>
            </p>
          </div>
          <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
            <h4 className="text-blue-400 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span className="lang-en">Colocation Rules</span>
              <span className="lang-km">វិធានរៀបចំ Component</span>
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="p-1.5 bg-slate-900 border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400 text-[11px] lang-en">Shared Components</span>
                <span className="text-slate-400 text-[11px] lang-km">ប្រើរួមទូទាំង App</span>
                <code className="text-blue-400 font-mono text-[11px]">app/components/</code>
              </div>
              <div className="p-1.5 bg-slate-900 border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400 text-[11px] lang-en">Feature Components</span>
                <span className="text-slate-400 text-[11px] lang-km">ប្រើតែក្នុងមុខងារជាក់លាក់</span>
                <code className="text-green-400 font-mono text-[11px]">dashboard/components/</code>
              </div>
              <div className="p-1.5 bg-slate-900 border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400 text-[11px] lang-en">Design Primitives</span>
                <span className="text-slate-400 text-[11px] lang-km">ប៊ូតុង &amp; Inputs</span>
                <code className="text-purple-400 font-mono text-[11px]">components/ui/</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 22: Server Components
export function Slide22({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 08 — SERVER &amp; CLIENT COMPONENTS &bull; SLIDE 22 /
                    75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Server Components</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Default server execution, direct async/await, and zero
                    bundle size.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        app/products/page.tsx (Server Component)
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`// Server Component by default in App Router
export default async function ProductsPage() {
  // Direct async data fetching on the server
  const res = await fetch("https://api.example.com/products");
  const products = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Products List</h1>
      <ul className="mt-4 space-y-2">
        {products.map((p: any) => (
          <li key={p.id} className="p-3 bg-slate-900 border border-slate-800">
            {p.name} - \${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Zero Client-Side JavaScript
                    </h4>
                    <p>
                      <span className="lang-en"
                        >In Next.js App Router, all components inside
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">app/</code> are
                        <strong>React Server Components (RSC)</strong> by
                        default. They run only on the server, have direct
                        database access, and send pure rendered HTML to the
                        browser with zero JavaScript bundle overhead!</span
                      ><span className="lang-km"
                        >ក្នុង App Router គ្រប់ component ទាំងអស់គឺជា Server
                        Components ដោយស្វ័យប្រវត្តិ។ វាដំណើរការតែលើ Server
                        អាចទាញទិន្នន័យពី DB ផ្ទាល់ និងមិនបន្ថែមទំហំ JS ទៅកាន់
                        Browser ឡើយ!</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 23: Client Components
export function Slide23({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 08 — SERVER &amp; CLIENT COMPONENTS &bull; SLIDE 23 /
                    75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Client Components</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Using the "use client" directive for browser interactivity
                    and state.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        components/Counter.tsx (Client Component)
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="px-4 py-2 bg-blue-600 text-white "
    >
      Clicks: {count}
    </button>
  );
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3  text-xs">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4 className="text-green-400 font-bold mb-2">
                      Interactive Simulator
                    </h4>
                    <p className="text-slate-300 text-xs mb-3">
                      <span className="lang-en"
                        >Test this client component live right here:</span
                      ><span className="lang-km"
                        >សាកល្បងចុចលើ Client Component ជាក់ស្ដែងនៅទីនេះ៖</span
                      >
                    </p>
                    <div
                      className="p-4 bg-slate-900 border border-slate-800 flex items-center justify-center gap-4"
                    >
                      <button
                        id="sim-counter-btn"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold transition"
                      >
                        Click to Increment
                      </button>
                      <span className="text-sm text-slate-200"
                        >Count:
                        <strong
                          id="sim-counter-val"
                          className="text-blue-400 font-bold"
                          >0</strong
                        ></span
                      >
                    </div>
                  </div>
                  <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                    <div>
                      <span className="lang-en"
                        >The <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">"use client"</code> directive marks the
                        boundary between server-rendered code and
                        browser-interactive code.</span
                      ><span className="lang-km"
                        >ពាក្យបញ្ជា
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">"use client"</code> កំណត់ព្រំដែនរវាងកូដ Server
                        និងកូដ Interactive លើ Browser។</span
                      >
                    </div>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 24: Server vs Client
export function Slide24({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label text-[11px] font-bold uppercase tracking-wider text-blue-400">
            SECTION 08 — SERVER &amp; CLIENT COMPONENTS &bull; SLIDE 24 / 75
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Server vs Client</h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            <span className="lang-en">Direct comparison of capabilities, environments, and performance impacts.</span>
            <span className="lang-km">ការប្រៀបធៀបដោយផ្ទាល់លើសមត្ថភាព បរិស្ថានដំណើរការ និងល្បឿន។</span>
          </p>
        </div>
        <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400 inline-flex items-center gap-1">Next.js App Router</span>
      </div>

      <div className="slide-stack flex flex-col gap-3">
        <div className="overflow-x-auto border border-slate-800">
          <table className="table-spec w-full border-collapse text-xs">
            <thead>
              <tr>
                <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">
                  <span className="lang-en">TASK / REQUIREMENT</span>
                  <span className="lang-km">ភារកិច្ច / តម្រូវការ</span>
                </th>
                <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">
                  <span className="lang-en">SERVER COMPONENT (DEFAULT)</span>
                  <span className="lang-km">SERVER COMPONENT (លំនាំដើម)</span>
                </th>
                <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">
                  <span className="lang-en">CLIENT COMPONENT ("use client")</span>
                  <span className="lang-km">CLIENT COMPONENT ("use client")</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2.5 border-b border-slate-800 font-bold text-slate-200">
                  <span className="lang-en">Fetch data from API or DB</span>
                  <span className="lang-km">ទាញទិន្នន័យពី API ឬ Database</span>
                </td>
                <td className="px-3 py-2.5 border-b border-slate-800 text-green-400 font-bold">
                  <span className="lang-en">Yes (Direct async/await)</span>
                  <span className="lang-km">បាន (ប្រើ async/await ផ្ទាល់)</span>
                </td>
                <td className="px-3 py-2.5 border-b border-slate-800 text-slate-400">
                  <span className="lang-en">Not recommended (use server first)</span>
                  <span className="lang-km">មិនណែនាំ (គួរប្រើ Server ជាមុន)</span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 border-b border-slate-800 font-bold text-slate-200">
                  <span className="lang-en">Access Backend Resources / Secrets</span>
                  <span className="lang-km">ប្រើ Secrets &amp; Backend API keys</span>
                </td>
                <td className="px-3 py-2.5 border-b border-slate-800 text-green-400 font-bold">
                  <span className="lang-en">Yes (Completely secure)</span>
                  <span className="lang-km">បាន (សុវត្ថិភាព មិនធ្លាយ)</span>
                </td>
                <td className="px-3 py-2.5 border-b border-slate-800 text-red-400">
                  <span className="lang-en">No (Leaks to browser window)</span>
                  <span className="lang-km">មិនបាន (ធ្លាយទៅ Browser)</span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 border-b border-slate-800 font-bold text-slate-200">
                  <span className="lang-en">Client-Side State (useState, useReducer)</span>
                  <span className="lang-km">គ្រប់គ្រង State (useState, useReducer)</span>
                </td>
                <td className="px-3 py-2.5 border-b border-slate-800 text-red-400 font-semibold">
                  <span className="lang-en">No</span>
                  <span className="lang-km">មិនបាន</span>
                </td>
                <td className="px-3 py-2.5 border-b border-slate-800 text-green-400 font-bold">
                  <span className="lang-en">Yes</span>
                  <span className="lang-km">បាន</span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 border-b border-slate-800 font-bold text-slate-200">
                  <span className="lang-en">Event Listeners (onClick, onChange)</span>
                  <span className="lang-km">ចាប់ Event (onClick, onChange)</span>
                </td>
                <td className="px-3 py-2.5 border-b border-slate-800 text-red-400 font-semibold">
                  <span className="lang-en">No</span>
                  <span className="lang-km">មិនបាន</span>
                </td>
                <td className="px-3 py-2.5 border-b border-slate-800 text-green-400 font-bold">
                  <span className="lang-en">Yes</span>
                  <span className="lang-km">បាន</span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 font-bold text-slate-200">
                  <span className="lang-en">Browser APIs (localStorage, window)</span>
                  <span className="lang-km">ប្រើ Browser APIs (window, localStorage)</span>
                </td>
                <td className="px-3 py-2.5 text-red-400 font-semibold">
                  <span className="lang-en">No (window is undefined)</span>
                  <span className="lang-km">មិនបាន (គ្មាន window លើ server)</span>
                </td>
                <td className="px-3 py-2.5 text-green-400 font-bold">
                  <span className="lang-en">Yes (inside useEffect)</span>
                  <span className="lang-km">បាន (ក្នុង useEffect)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-sky-400" />
          <div>
            <span className="lang-en">
              <strong>Rule of Thumb:</strong> Default to Server Components for performance, security, and SEO. Introduce <code className="text-xs text-blue-300 bg-slate-800 border border-slate-700 px-1 py-0.5">"use client"</code> only when user interactions (clicks, state, inputs) require it.
            </span>
            <span className="lang-km">
              <strong>គោលការណ៍ណែនាំ៖</strong> ប្រើ Server Components ជាលំនាំដើមដើម្បីល្បឿន សុវត្ថិភាព និង SEO។ ប្រើ <code className="text-xs text-blue-300 bg-slate-800 border border-slate-700 px-1 py-0.5">"use client"</code> តែពេលត្រូវការ Interactivity (ចុច, State, Form Inputs) ប៉ុណ្ណោះ។
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 25: Choosing Server or Client
export function Slide25({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label text-[11px] font-bold uppercase tracking-wider text-blue-400">
            SECTION 08 — SERVER &amp; CLIENT COMPONENTS &bull; SLIDE 25 / 75
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Choosing Server or Client</h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            <span className="lang-en">A clear decision matrix to determine component boundaries.</span>
            <span className="lang-km">ផែនទីសម្រេចចិត្តដើម្បីកំណត់ព្រំដែនរវាង Server និង Client Component។</span>
          </p>
        </div>
        <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400 inline-flex items-center gap-1">Next.js App Router</span>
      </div>

      <div className="slide-stack flex flex-col gap-3">
        <div className="p-3 bg-slate-900 border border-slate-800 text-center">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">
            <span className="lang-en">Core Architectural Question</span>
            <span className="lang-km">សំណួរគន្លឹះក្នុងការសម្រេចចិត្ត</span>
          </span>
          <h3 className="text-sm font-bold text-white m-0">
            <span className="lang-en">Does this component need user interactivity, state, or browser APIs?</span>
            <span className="lang-km">តើ Component នេះត្រូវការ Interactivity, State ឬ Browser APIs ដែរឬទេ?</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="info-card bg-emerald-950/20 border border-emerald-500/30 p-3.5 flex flex-col gap-2 hover:border-emerald-500/50 transition-colors">
            <div className="flex items-center justify-between pb-1 border-b border-emerald-500/20">
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="lang-en">YES &rarr; Client Component</span>
                <span className="lang-km">បាទ/ចាស &rarr; Client Component</span>
              </span>
              <code className="text-[11px] text-emerald-300 bg-emerald-950 border border-emerald-800 px-1.5 py-0.5 font-mono">"use client"</code>
            </div>
            <p className="text-xs text-slate-300 m-0">
              <span className="lang-en">Use when browser execution and live React hooks are strictly required:</span>
              <span className="lang-km">ប្រើនៅពេលត្រូវការដំណើរការលើ Browser និង React Hooks ផ្ទាល់៖</span>
            </p>
            <ul className="text-xs text-slate-300 space-y-1.5 m-0 pl-1 list-none">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span className="lang-en">Interactive buttons (<code className="text-[11px] text-emerald-300">onClick</code>, event handlers)</span>
                <span className="lang-km">ប៊ូតុងមាន Event (<code className="text-[11px] text-emerald-300">onClick</code>, onChange)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span className="lang-en">Client state (<code className="text-[11px] text-emerald-300">useState</code>, <code className="text-[11px] text-emerald-300">useReducer</code>)</span>
                <span className="lang-km">គ្រប់គ្រង State (<code className="text-[11px] text-emerald-300">useState</code>, <code className="text-[11px] text-emerald-300">useReducer</code>)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span className="lang-en">Lifecycle effects (<code className="text-[11px] text-emerald-300">useEffect</code>, <code className="text-[11px] text-emerald-300">useRef</code>)</span>
                <span className="lang-km">Lifecycle hooks (<code className="text-[11px] text-emerald-300">useEffect</code>, <code className="text-[11px] text-emerald-300">useRef</code>)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span className="lang-en">Browser APIs (<code className="text-[11px] text-emerald-300">window</code>, <code className="text-[11px] text-emerald-300">localStorage</code>)</span>
                <span className="lang-km">Browser APIs (<code className="text-[11px] text-emerald-300">window</code>, <code className="text-[11px] text-emerald-300">localStorage</code>)</span>
              </li>
            </ul>
          </div>

          <div className="info-card bg-blue-950/20 border border-blue-500/30 p-3.5 flex flex-col gap-2 hover:border-blue-500/50 transition-colors">
            <div className="flex items-center justify-between pb-1 border-b border-blue-500/20">
              <span className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span className="lang-en">NO &rarr; Server Component</span>
                <span className="lang-km">ទេ &rarr; Server Component</span>
              </span>
              <span className="text-[11px] text-blue-300 bg-blue-950 border border-blue-800 px-1.5 py-0.5 font-bold uppercase tracking-wider">Default</span>
            </div>
            <p className="text-xs text-slate-300 m-0">
              <span className="lang-en">Default choice for maximum performance, minimal bundle, and security:</span>
              <span className="lang-km">ជម្រើសលំនាំដើមសម្រាប់ល្បឿនលឿន សុវត្ថិភាព និង bundle តូចបំផុត៖</span>
            </p>
            <ul className="text-xs text-slate-300 space-y-1.5 m-0 pl-1 list-none">
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">&bull;</span>
                <span className="lang-en">Direct database querying (PostgreSQL, ORMs)</span>
                <span className="lang-km">ទាញទិន្នន័យផ្ទាល់ពី DB (PostgreSQL, Prisma)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">&bull;</span>
                <span className="lang-en">Sensitive backend credentials &amp; API keys</span>
                <span className="lang-km">រក្សាការសម្ងាត់ API Keys &amp; Backend Secrets</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">&bull;</span>
                <span className="lang-en">Static layouts, navbars, footers, typography</span>
                <span className="lang-km">គ្រោង Layouts, Navigation, Footer, មាតិកាអត្ថបទ</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">&bull;</span>
                <span className="lang-en">Zero client-side JavaScript bundle overhead</span>
                <span className="lang-km">គ្មានទម្ងន់ JavaScript បន្ថែមលើ Browser ឡើយ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-sky-400" />
          <div>
            <span className="lang-en">
              <strong>Best Practice:</strong> Keep Client Components at the leaves of your component tree. Fetch data in the Server Component parent and pass it down as props.
            </span>
            <span className="lang-km">
              <strong>វិធីសាស្ត្រល្អបំផុត៖</strong> ប្រើ Client Components តែនៅចុងស្លឹកនៃ Component Tree (ដូចជា Button, Dialog) និងរក្សា Parent ឱ្យនៅជា Server Component ដើម្បីទាញយកទិន្នន័យ។
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 26: Tailwind CSS in Next.js
export function Slide26({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 09 — STYLING &bull; SLIDE 26 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Tailwind CSS in Next.js</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Modern utility-first styling configured with zero setup
                    overhead.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        components/DashboardCard.tsx
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`export function DashboardCard({ title, value, change }: any) {
  return (
    <div className="rounded-none bg-slate-900 border border-slate-800 p-4 shadow-sm">
      <h3 className="text-sm font-medium text-slate-400">{title}</h3>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-3xl font-extrabold text-white">{value}</span>
        <span className="text-xs font-semibold text-green-400 ">{change}</span>
      </div>
    </div>
  );
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3  text-xs">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4 className="text-blue-400 font-bold mb-1">
                      Tailwind CSS Built-in Integration
                    </h4>
                    <p className="text-slate-300 text-xs mb-2">
                      <span className="lang-en"
                        >Next.js automatically compiles Tailwind CSS during
                        build, generating only the minimal CSS classes
                        used.</span
                      ><span className="lang-km"
                        >Next.js នឹង Compile Tailwind CSS ដោយស្វ័យប្រវត្តិតែ
                        class ណាដែលបានប្រើប៉ុណ្ណោះ។</span
                      >
                    </p>
                    <div className="p-4 bg-slate-900 border border-slate-800">
                      <div className="text-slate-400 text-xs mb-1">Total Users</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white"
                          >24,520</span
                        >
                        <span className="text-xs text-green-400 font-bold"
                          >+18.2%</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 27: Responsive UI
export function Slide27({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 09 — STYLING &bull; SLIDE 27 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Responsive UI</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Building adaptable, mobile-first layouts with Tailwind
                    breakpoints.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        app/dashboard/page.tsx (Responsive Grid)
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 p-4">
      <div className="p-4 bg-slate-900 border border-slate-800">Card 1</div>
      <div className="p-4 bg-slate-900 border border-slate-800">Card 2</div>
      <div className="p-4 bg-slate-900 border border-slate-800">Card 3</div>
      <div className="p-4 bg-slate-900 border border-slate-800">Card 4</div>
    </div>
  );
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      Mobile-First Breakpoints
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Always design mobile-first: default styles apply to
                        mobile devices, and prefix modifiers like
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">sm:</code> (640px), <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">md:</code> (768px), and
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">lg:</code> (1024px) enhance the layout as screen
                        size increases.</span
                      ><span className="lang-km"
                        >រចនា Mobile-first ជានិច្ច៖ Style ដើមសម្រាប់ Mobile
                        ហើយប្រើ <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">sm:</code>, <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">md:</code>,
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">lg:</code> ដើម្បីពង្រីក Layout
                        ពេលអេក្រង់ធំឡើង។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 28: Fetching Data
export function Slide28({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 10 — DATA FETCHING &bull; SLIDE 28 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Fetching Data</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Direct async/await data fetching in React Server Components.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        app/invoices/page.tsx
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`export default async function InvoicesPage() {
  // Directly awaited on the server during rendering
  const res = await fetch("https://api.example.com/invoices", {
    // Next.js caching options:
    next: { revalidate: 60 }, // ISR: cache for 60 seconds
  });
  const invoices = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Invoices ({invoices.length})</h1>
      {/* Render list */}
    </div>
  );
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Native fetch() Enhancements
                    </h4>
                    <p>
                      <span className="lang-en"
                        >In Server Components, you do NOT need
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">useEffect</code> or loading spinners for initial
                        data! Next.js extends the native Web
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">fetch</code> API to allow granular caching,
                        revalidation, and request deduplication.</span
                      ><span className="lang-km"
                        >ក្នុង Server Components អ្នកលែងត្រូវការ
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">useEffect</code> ទៀតហើយ! Next.js បានពង្រីក Web
                        fetch() ឱ្យគាំទ្រ Caching, Revalidation និងកាត់បន្ថយ
                        Request ស្ទួនដោយស្វ័យប្រវត្តិ។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 29: Database Access
export function Slide29({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 10 — DATA FETCHING &bull; SLIDE 29 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Database Access</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Direct database querying on the server without intermediary
                    API endpoints.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        app/users/page.tsx (Direct SQL Query)
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`import { sql } from "@/lib/db";

export default async function UsersPage() {
  // Direct SQL query execution on the server!
  const users = await sql\`SELECT id, name, email FROM users ORDER BY created_at DESC LIMIT 10\`;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Registered Users</h2>
      <ul className="mt-3 divide-y divide-slate-800">
        {users.map((u) => (
          <li key={u.id} className="py-2 text-sm">{u.name} ({u.email})</li>
        ))}
      </ul>
    </div>
  );
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      No Extra API Layer Required
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Because Server Components run securely on the server,
                        you can query your database directly using SQL or an ORM
                        like Prisma or Drizzle. You do not need to create an
                        intermediate REST endpoint just to read data!</span
                      ><span className="lang-km"
                        >ដោយសារ Server Components ដំណើរការលើ Server អ្នកអាច
                        Query Database ផ្ទាល់តាម SQL ឬ ORM ដោយមិនបាច់បង្កើត REST
                        API កណ្ដាលឱ្យហត់ឡើយ!</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 30: PostgreSQL & Cloud DBs
export function Slide30({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 10 — DATA FETCHING &bull; SLIDE 30 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">PostgreSQL &amp; Cloud DBs</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Connecting Next.js to PostgreSQL, Neon, and serverless
                    databases.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3  text-xs">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        lib/db.ts (Neon PostgreSQL Driver)
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing in environment variables");
}

export const sql = neon(process.env.DATABASE_URL);`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Modern Cloud Databases
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Serverless Postgres providers like
                        <strong>Neon</strong> and
                        <strong>Supabase</strong> provide connection pooling
                        over HTTP/WebSockets, making them perfect for serverless
                        Next.js functions and Vercel edge runtime.</span
                      ><span className="lang-km"
                        >Database ដូចជា Neon និង Supabase ផ្ដល់នូវ Connection
                        Pooling តាម HTTP ដែលស័ក្តិសមបំផុតសម្រាប់ Serverless
                        Next.js និង Vercel Edge Runtime។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 31: Rendering in Next.js
export function Slide31({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 11 — RENDERING &bull; SLIDE 31 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Rendering in Next.js</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Static, Dynamic, and Streaming rendering strategies
                    explained.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-blue-400  text-xs font-bold">
                    01 &bull; STATIC RENDERING
                  </div>
                  <h4>Build Time Pre-render</h4>
                  <p>
                    <span className="lang-en"
                      >Routes are rendered once at build time or revalidated
                      incrementally. Best for blogs, docs, and public marketing
                      pages.</span
                    ><span className="lang-km"
                      >Render តែម្ដងពេល Build ឬ Revalidate តាមកាលកំណត់។
                      ល្អបំផុតសម្រាប់ប្លុក និងទំព័រព័ត៌មាន។</span
                    >
                  </p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-green-400  text-xs font-bold">
                    02 &bull; DYNAMIC RENDERING
                  </div>
                  <h4>On-Demand Server Render</h4>
                  <p>
                    <span className="lang-en"
                      >Routes are rendered for each user request. Best for user
                      dashboards, personalized carts, and real-time feeds.</span
                    ><span className="lang-km"
                      >Render ថ្មីរាល់ពេលមាន Request ពី User។ ល្អសម្រាប់
                      Dashboard និងទិន្នន័យជាក់ស្ដែង។</span
                    >
                  </p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-purple-400  text-xs font-bold">
                    03 &bull; STREAMING UI
                  </div>
                  <h4>Progressive Delivery</h4>
                  <p>
                    <span className="lang-en"
                      >HTML is progressively streamed from server to client as
                      data becomes ready, reducing Time to First Byte
                      (TTFB).</span
                    ><span className="lang-km"
                      >បញ្ជូន HTML ជាបណ្ដើរៗពី Server ទៅ Browser ជួយឱ្យ User ឃើញ
                      UI ភ្លាមៗមិនបាច់ចាំ។</span
                    >
                  </p>
                </div>
              </div>
    </div>
  );
}

// Slide 32: Static vs Dynamic
export function Slide32({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 11 — RENDERING &bull; SLIDE 32 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Static vs Dynamic</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Choosing between CDN cached static pages and fresh server
                    requests.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="diagram-box flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
                  <div
                    className="p-3 bg-slate-900 border border-slate-800 text-left flex-1"
                  >
                    <div className="text-blue-400 font-bold mb-1">
                      STATIC (DEFAULT)
                    </div>
                    <div className="text-xs text-slate-300">
                      Generated at Build &amp; Cached on CDN
                    </div>
                    <div className="text-[11px] text-green-400 mt-2 ">
                      &bull; Fastest possible TTFB &bull; Low server costs
                    </div>
                  </div>
                  <span className="text-slate-500 font-bold">VS</span>
                  <div
                    className="p-3 bg-slate-900 border border-slate-800 text-left flex-1"
                  >
                    <div className="text-purple-400 font-bold mb-1">
                      DYNAMIC (REQUEST-TIME)
                    </div>
                    <div className="text-xs text-slate-300">
                      Executed on Server for Each Request
                    </div>
                    <div className="text-[11px] text-blue-400 mt-2 ">
                      &bull; Access cookies, headers, searchParams
                    </div>
                  </div>
                </div>
                <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                  <div>
                    <span className="lang-en"
                      >Next.js automatically switches a route to
                      <strong>Dynamic</strong> if you use dynamic functions like
                      <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">cookies()</code>, <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">headers()</code>, or read
                      <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">searchParams</code>.</span
                    ><span className="lang-km"
                      >Next.js នឹងប្ដូរ Route ទៅជា
                      <strong>Dynamic</strong> ដោយស្វ័យប្រវត្តិកាលណាអ្នកប្រើ
                      <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">cookies()</code>, <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">headers()</code> ឬអាន
                      <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">searchParams</code>។</span
                    >
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 33: Streaming & Suspense
export function Slide33({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 11 — RENDERING &bull; SLIDE 33 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Streaming &amp; Suspense</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Breaking down pages with React Suspense for progressive
                    loading.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        app/dashboard/page.tsx with Suspense
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`import { Suspense } from "react";
import RevenueChart from "./RevenueChart";
import { RevenueSkeleton } from "./Skeletons";

export default function DashboardPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Analytics</h1>

      {/* Streaming Boundary */}
      <Suspense fallback={<RevenueSkeleton />}>
        <RevenueChart />
      </Suspense>
    </div>
  );
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-purple-400" />
                      Instant Loading Skeletons
                    </h4>
                    <p>
                      <span className="lang-en"
                        >React <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">&lt;Suspense&gt;</code> breaks down your
                        page into independent chunks. The browser immediately
                        receives the shell and skeleton UI, and slow data
                        components stream into place as soon as they
                        finish!</span
                      ><span className="lang-km"
                        >React Suspense បំបែកទំព័រជាចំណែកតូចៗ។ Browser
                        នឹងទទួលបាន Skeleton UI ភ្លាមៗ
                        ហើយទិន្នន័យដែលដំណើរការយឺតនឹង Stream
                        ចូលតាមក្រោយពេលរួចរាល់។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 34: loading.tsx
export function Slide34({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 12 — LOADING &amp; ERRORS &bull; SLIDE 34 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">loading.tsx</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Automatic loading states and skeleton UI screens.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        app/dashboard/loading.tsx
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`export default function Loading() {
  return (
    <div className="p-4 space-y-4 animate-pulse">
      <div className="h-8 w-48 bg-slate-800" />
      <div className="grid grid-cols-3 gap-4">
        <div className="h-32 bg-slate-800" />
        <div className="h-32 bg-slate-800" />
        <div className="h-32 bg-slate-800" />
      </div>
    </div>
  );
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Zero-Config Suspense Boundary
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Adding a <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">loading.tsx</code> file automatically
                        wraps your entire <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">page.tsx</code> in a React
                        Suspense boundary. Next.js displays this skeleton
                        immediately on navigation while the server prepares page
                        data.</span
                      ><span className="lang-km"
                        >ការបង្កើត <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">loading.tsx</code> នឹងរុំ
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">page.tsx</code> ក្នុង React Suspense
                        ដោយស្វ័យប្រវត្តិ។ User នឹងឃើញ Skeleton
                        ភ្លាមៗពេលចុចចូលទំព័រនោះ។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 35: error.tsx
export function Slide35({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 12 — LOADING &amp; ERRORS &bull; SLIDE 35 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">error.tsx</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Graceful error boundaries and recovery handling.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        app/dashboard/error.tsx
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="p-4 text-center bg-red-900/20 border border-red-800/40">
      <h2 className="text-xl font-bold text-red-400">Something went wrong!</h2>
      <p className="text-xs text-slate-400 mt-1">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  text-xs"
      >
        Try again
      </button>
    </div>
  );
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-red-400" />
                      Isolated Error Recovery
                    </h4>
                    <p>
                      <span className="lang-en"
                        ><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">error.tsx</code> must always be a Client
                        Component (<code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">"use client"</code>). It catches
                        runtime errors without crashing the whole application,
                        allowing users to retry via <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">reset()</code>.</span
                      ><span className="lang-km"
                        ><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">error.tsx</code> ត្រូវតែជា Client Component។
                        វាចាប់យក Error ដោយមិនធ្វើឱ្យគាំងទំព័រទាំងមូល
                        និងផ្ដល់ប៊ូតុង
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">reset()</code> ដើម្បីសាកល្បងម្ដងទៀត។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 36: notFound() & not-found.tsx
export function Slide36({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 12 — LOADING &amp; ERRORS &bull; SLIDE 36 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">notFound() &amp; not-found.tsx</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Gracefully handling 404 not found states.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        app/products/[id]/page.tsx
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`import { notFound } from "next/navigation";
import { getProduct } from "@/lib/db";

export default async function ProductPage({ params }: any) {
  const { id } = await params;
  const product = await getProduct(id);

  // Trigger 404 if item doesn't exist
  if (!product) {
    notFound();
  }

  return <h1>{product.name}</h1>;
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      Custom 404 Handlers
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Calling <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">notFound()</code> immediately halts
                        rendering and displays your customized
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">not-found.tsx</code> file with proper HTTP 404
                        status codes for search engines.</span
                      ><span className="lang-km"
                        >ការហៅ <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">notFound()</code> នឹងបង្ហាញទំព័រ
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">not-found.tsx</code> ភ្លាមៗជាមួយកូដ HTTP 404
                        ត្រឹមត្រូវសម្រាប់ Search Engines។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 37: Reading vs Changing Data
export function Slide37({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 13 — SERVER ACTIONS / MUTATIONS &bull; SLIDE 37 /
                    75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Reading vs Changing Data</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Understanding the mental model of reads and writes in App
                    Router.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <div className="text-blue-400  text-xs font-bold mb-1">
                      READ OPERATIONS
                    </div>
                    <h4>Server Components &amp; async/await</h4>
                    <p>
                      <span className="lang-en"
                        >Reading data happens directly in Server Components
                        during rendering. No client JavaScript overhead or
                        boilerplate state hooks required.</span
                      ><span className="lang-km"
                        >ការអានទិន្នន័យធ្វើឡើងក្នុង Server Components ផ្ទាល់ពេល
                        Render។ មិនត្រូវការ boilerplate code ឬ state
                        ស្មុគស្មាញឡើយ។</span
                      >
                    </p>
                  </div>
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <div
                      className="text-green-400  text-xs font-bold mb-1"
                    >
                      WRITE MUTATIONS
                    </div>
                    <h4>Server Actions &amp; Forms</h4>
                    <p>
                      <span className="lang-en"
                        >Creating, updating, and deleting data is handled
                        securely by Server Actions invoked directly from native
                        forms or button handlers.</span
                      ><span className="lang-km"
                        >ការបង្កើត កែប្រែ និងលុបទិន្នន័យ
                        ត្រូវបានធ្វើឡើងដោយសុវត្ថិភាពតាមរយៈ Server Actions ពី
                        Form ឬ Button។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 38: Server Action Concept
export function Slide38({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 13 — SERVER ACTIONS / MUTATIONS &bull; SLIDE 38 /
                    75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Server Action Concept</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Defining asynchronous mutations with the "use server"
                    directive.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        app/actions/tasks.ts
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`"use server";

import { sql } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createTask(formData: FormData) {
  const title = formData.get("title") as string;
  
  if (!title || title.trim().length === 0) {
    throw new Error("Title is required");
  }

  // Secure server-side database insertion
  await sql\`INSERT INTO tasks (title, completed) VALUES (\${title}, false)\`;

  // Instant cache revalidation!
  revalidatePath("/dashboard/tasks");
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      Asynchronous Server Mutations
                    </h4>
                    <p>
                      <span className="lang-en"
                        >The <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">"use server"</code> directive defines
                        functions that run exclusively on the server. You can
                        pass them directly to HTML forms. Next.js handles POST
                        request serialization automatically!</span
                      ><span className="lang-km"
                        >ពាក្យបញ្ជា <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">"use server"</code> បង្កើត function
                        ដែលដំណើរការលើ Server។ អ្នកអាចហៅវាពី Form ដោយផ្ទាល់ ហើយ
                        Next.js នឹងចាត់ចែង POST Request ដោយស្វ័យប្រវត្តិ!</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 39: Form + Server Action
export function Slide39({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 13 — SERVER ACTIONS / MUTATIONS &bull; SLIDE 39 /
                    75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Form + Server Action</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Connecting native HTML forms directly to server action
                    mutations.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        components/TaskForm.tsx
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`import { createTask } from "@/app/actions/tasks";

export function TaskForm() {
  return (
    <form action={createTask} className="flex gap-2">
      <input
        type="text"
        name="title"
        placeholder="Enter new task..."
        required
        className="px-3 py-2 bg-slate-900 border border-slate-700 text-sm flex-1"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white text-sm font-bold">
        Add Task
      </button>
    </form>
  );
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3  text-xs">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4 className="text-green-400 font-bold mb-2">
                      Live Simulated Server Action
                    </h4>
                    <form id="sim-task-form" className="flex gap-2 mb-3">
                      <input
                        id="sim-task-input"
                        type="text"
                        placeholder="Type a task and submit..."
                        required
                        className="px-2 py-1.5 bg-slate-900 border border-slate-700 text-slate-200 text-xs flex-1 outline-none"
                      />
                      <button
                        type="submit"
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold transition"
                      >
                        Submit Action
                      </button>
                    </form>
                    <div
                      id="sim-task-status"
                      className="text-[10px] text-blue-400 mb-2"
                    >
                      Ready to invoke server action
                    </div>
                    <div
                      id="sim-task-list"
                      className="space-y-1.5 max-h-36 overflow-y-auto"
                    >
                      <div
                        className="p-2 bg-slate-900 border border-slate-800 text-xs text-slate-300"
                      >
                        Initial Task: Build SaaS UI
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 40: URL Search Parameters
export function Slide40({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 14 — SEARCH &amp; PAGINATION &bull; SLIDE 40 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">URL Search Parameters</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Managing shareable search queries and pagination via the
                    URL.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        app/invoices/page.tsx
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`export default async function InvoicesPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const { query = "", page = "1" } = await searchParams;
  
  // Query DB filtered by search params
  const invoices = await fetchInvoices(query, Number(page));

  return (
    <div>
      <SearchInput defaultValue={query} />
      <InvoiceTable invoices={invoices} />
      <Pagination currentPage={Number(page)} />
    </div>
  );
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3  text-xs">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4 className="text-blue-400 font-bold mb-2">
                      Live SearchParams Simulator
                    </h4>
                    <p className="text-slate-300 text-xs mb-2">
                      Type below to see URL query string update:
                    </p>
                    <input
                      id="sim-search-input"
                      type="text"
                      placeholder="Search invoices (e.g., Acme)..."
                      className="w-full px-2 py-1.5 bg-slate-900 border border-slate-700 text-xs text-slate-200 outline-none mb-3"
                    />
                    <div
                      className="p-2 bg-slate-900 border border-slate-800 text-[11px] text-green-400"
                    >
                      Current URL:
                      <span id="sim-url-preview" className="text-slate-200"
                        >/dashboard/invoices</span
                      >
                    </div>
                  </div>
                  <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                    <div>
                      <span className="lang-en"
                        >Using URL state makes pages bookmarkable, shareable,
                        and supports browser back/forward buttons
                        naturally!</span
                      ><span className="lang-km"
                        >ការប្រើ URL State ជួយឱ្យ User អាច Share Link, Bookmark
                        និងប្រើប៊ូតុង Back/Forward របស់ Browser
                        បានយ៉ាងត្រឹមត្រូវ!</span
                      >
                    </div>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 41: Authentication Architecture
export function Slide41({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 15 — AUTHENTICATION &bull; SLIDE 41 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Authentication Architecture</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Modern session management, HttpOnly cookies, and security
                    flow.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="diagram-box flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">User Login Form</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">Server Action Validate</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Create HttpOnly Cookie</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">Middleware Guard</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Protected Dashboard</div>
                </div>
                <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      Secure Cookie Sessions
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Modern Next.js auth stores session tokens in
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">HttpOnly</code>, <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">Secure</code> cookies.
                        Unlike localStorage, HttpOnly cookies cannot be stolen
                        by client-side XSS attacks.</span
                      ><span className="lang-km"
                        >Auth ក្នុង Next.js ប្រើ HttpOnly Cookies ដើម្បីរក្សាទុក
                        Session Token។ ខុសពី localStorage, HttpOnly Cookies
                        មិនអាចត្រូវបានលួចដោយ XSS Script ឡើយ។</span
                      >
                    </p>
                  </div>
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Industry Standards
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Popular production choices include NextAuth.js
                        (Auth.js), Clerk, Supabase Auth, or lightweight custom
                        JWT session verifiers.</span
                      ><span className="lang-km"
                        >ជម្រើសពេញនិយមសម្រាប់ Production មានដូចជា Auth.js,
                        Clerk, Supabase Auth ឬ Custom JWT Session។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 42: Public vs Protected Routes
export function Slide42({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 15 — AUTHENTICATION &bull; SLIDE 42 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Public vs Protected Routes</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Securing routes with Next.js edge middleware.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3  text-xs">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        middleware.ts (Route Guard)
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get("session")?.value;
  const isDashboard = request.nextUrl.pathname.startsWith("/dashboard");

  // Protect private routes
  if (isDashboard && !sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Edge-Speed Route Interception
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Next.js <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">middleware.ts</code> runs before a
                        request completes. If an unauthenticated user tries to
                        visit <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">/dashboard</code>, the middleware redirects
                        them to <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">/login</code> before any page code even
                        executes!</span
                      ><span className="lang-km"
                        ><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">middleware.ts</code> ដំណើរការមុនពេល Request
                        ទៅដល់ទំព័រ។ បើ User មិនទាន់ Login ព្យាយាមចូល /dashboard
                        នោះ Middleware នឹងបញ្ជូនទៅ /login ភ្លាមៗ!</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 43: Environment Variables
export function Slide43({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 16 — ENVIRONMENT VARIABLES &bull; SLIDE 43 /
                    75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Environment Variables</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Managing secrets safely with server-only vs NEXT_PUBLIC_
                    variables.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3  text-xs">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        .env.local
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`# SERVER ONLY (Secrets - never exposed to browser)
DATABASE_URL="postgres://user:pass@ep-cool.neon.tech/neondb"
AUTH_SECRET="super-secret-key-12345"
STRIPE_SECRET_KEY="sk_live_xyz..."

# CLIENT EXPOSED (Safe public values only)
NEXT_PUBLIC_APP_URL="https://taskflow.io"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_abc..."`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="alert-callout danger flex items-start gap-2.5 p-3 border border-red-500/30 bg-red-500/10 text-red-300 text-[12.5px] leading-relaxed">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <div>
                      <span className="lang-en"
                        ><strong>Critical Security Rule:</strong> Never prefix
                        database passwords or private API tokens with
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">NEXT_PUBLIC_</code>! Variables without that prefix
                        remain strictly on the server.</span
                      ><span className="lang-km"
                        ><strong>វិធានសុវត្ថិភាពសំខាន់៖</strong> កុំប្រើ Prefix
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">NEXT_PUBLIC_</code> លើ Database Password ឬ Secret
                        Keys ឱ្យសោះ! បើគ្មាន Prefix នោះទេ វាមានសុវត្ថិភាពលើ
                        Server ជានិច្ច។</span
                      >
                    </div>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 44: Metadata API
export function Slide44({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 17 — SEO &amp; METADATA &bull; SLIDE 44 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Metadata API</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Defining static and dynamic document metadata for search
                    ranking.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        app/about/page.tsx
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About TaskFlow &bull; Modern Task Management",
  description: "Learn how TaskFlow empowers agile teams to ship faster.",
  openGraph: {
    title: "About TaskFlow",
    description: "Built for modern developers.",
    images: ["/og-about.png"],
  },
};

export default function AboutPage() {
  return <h1>About Us</h1>;
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Built-in SEO Optimization
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Exporting a <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">metadata</code> object injects the
                        correct <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">&lt;title&gt;</code>,
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">&lt;meta name="description"&gt;</code>, and Open
                        Graph cards into the document
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">&lt;head&gt;</code> automatically.</span
                      ><span className="lang-km"
                        >ការ Export <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">metadata</code> នឹងបង្កើត tag
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">&lt;title&gt;</code>,
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">&lt;meta&gt;</code> និង Open Graph ក្នុង tag
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">&lt;head&gt;</code> ដោយស្វ័យប្រវត្តិ។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 45: SEO Best Practices
export function Slide45({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 17 — SEO &amp; METADATA &bull; SLIDE 45 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">SEO Best Practices</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Building production sitemaps, robots rules, and social
                    preview cards.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-blue-400  text-xs font-bold">
                    01 &bull; SITEMAP GENERATION
                  </div>
                  <h4>app/sitemap.ts</h4>
                  <p>
                    <span className="lang-en"
                      >Generate a standard XML sitemap dynamically from your
                      database records so Google indexers find every page.</span
                    ><span className="lang-km"
                      >បង្កើត sitemap.xml ដោយស្វ័យប្រវត្តិពីទិន្នន័យក្នុង DB
                      ដើម្បីឱ្យ Google ងាយស្រួល Index។</span
                    >
                  </p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-green-400  text-xs font-bold">
                    02 &bull; ROBOTS RULES
                  </div>
                  <h4>app/robots.ts</h4>
                  <p>
                    <span className="lang-en"
                      >Define crawler indexing rules, disallow private admin
                      routes, and link directly to your sitemap URL.</span
                    ><span className="lang-km"
                      >កំណត់វិធាន robots.txt ដើម្បីការពារផ្លូវ Private
                      និងប្រាប់ទីតាំង Sitemap ដល់ Search Engines។</span
                    >
                  </p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-purple-400  text-xs font-bold">
                    03 &bull; SOCIAL CARDS
                  </div>
                  <h4>Open Graph &amp; Twitter</h4>
                  <p>
                    <span className="lang-en"
                      >Generate automated share preview images using Next.js
                      <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">ImageResponse</code> or static OG image
                      assets.</span
                    ><span className="lang-km"
                      >បង្កើតរូបភាព Preview ពេល Share លើ Facebook, Telegram ឬ X
                      ដោយស្វ័យប្រវត្តិ។</span
                    >
                  </p>
                </div>
              </div>
    </div>
  );
}

// Slide 46: next/image
export function Slide46({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 18 — IMAGES &amp; FONTS &bull; SLIDE 46 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">next/image</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    High performance, zero-CLS responsive image optimization.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        components/HeroBanner.tsx
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`import Image from "next/image";

export function HeroBanner() {
  return (
    <Image
      src="/hero-dashboard.png"
      alt="TaskFlow SaaS Dashboard Preview"
      width={1200}
      height={630}
      priority // High priority preloading for above-the-fold image
      className="border border-slate-800 shadow-2xl"
    />
  );
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3  text-xs">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4 className="text-green-400 font-bold mb-1">
                      Automatic Image Optimizations
                    </h4>
                    <ul className="space-y-1.5 text-slate-300">
                      <li>
                        &bull; Converts PNG/JPEG to modern
                        <strong>WebP &amp; AVIF</strong>
                      </li>
                      <li>
                        &bull; Resizes images dynamically based on device screen
                      </li>
                      <li>
                        &bull;
                        <strong>Zero Cumulative Layout Shift (CLS)</strong> via
                        width/height
                      </li>
                      <li>&bull; Lazy loads off-screen images automatically</li>
                    </ul>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 47: next/font
export function Slide47({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 18 — IMAGES &amp; FONTS &bull; SLIDE 47 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">next/font</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Automatic font self-hosting and zero layout shift.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3  text-xs">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        app/layout.tsx (Google Fonts Self-Hosting)
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--",
});

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className={\`\${sans.variable} \${mono.variable}\`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Zero External Font Requests
                    </h4>
                    <p>
                      <span className="lang-en"
                        ><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">next/font</code> downloads Google Fonts at build
                        time and self-hosts them with your deployment assets.
                        The browser never makes requests to Google servers,
                        ensuring total privacy and eliminating layout
                        shift!</span
                      ><span className="lang-km"
                        ><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">next/font</code> ទាញយក Fonts មកទុកក្នុងកញ្ចប់
                        Build ដោយខ្លួនឯង។ Browser មិនចាំបាច់ផ្ញើ Request ទៅកាន់
                        Google ឡើយ ជួយការពារ Privacy និងគ្មាន Layout
                        Shift។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 48: Next.js as Full Stack
export function Slide48({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 19 — API / BACKEND &bull; SLIDE 48 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Next.js as Full Stack</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Unified full-stack architecture combining frontend, backend,
                    and database.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="diagram-box flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">React UI (Client &amp; Server)</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&larr;&rarr;</span>
                  <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">
                    Next.js App Server (Actions &amp; Handlers)
                  </div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&larr;&rarr;</span>
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">PostgreSQL Database (Neon)</div>
                </div>
                <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>Unified Repository</h4>
                    <p>
                      <span className="lang-en"
                        >One language (TypeScript), one project structure, and
                        one deployment pipeline for both frontend and
                        backend.</span
                      ><span className="lang-km"
                        >ប្រើភាសាតែមួយ (TypeScript) និង Project តែមួយ ទាំង
                        Frontend និង Backend។</span
                      >
                    </p>
                  </div>
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>Shared Types</h4>
                    <p>
                      <span className="lang-en"
                        >Database schemas and TypeScript types flow directly
                        into UI components without code generation or API
                        drift.</span
                      ><span className="lang-km"
                        >Types និង Data Models ត្រូវបានប្រើរួមគ្នារវាង DB និង UI
                        ដោយគ្មានការភាន់ច្រឡំ។</span
                      >
                    </p>
                  </div>
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>Edge &amp; Serverless</h4>
                    <p>
                      <span className="lang-en"
                        >Scales automatically to zero when idle and handles high
                        traffic spikes seamlessly on cloud infrastructure.</span
                      ><span className="lang-km"
                        >Auto-scale តាមតម្រូវការជាក់ស្ដែងលើ Serverless Cloud
                        Infrastructure។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 49: Route Handlers
export function Slide49({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 19 — API / BACKEND &bull; SLIDE 49 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Route Handlers</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Building REST endpoints and external webhook receivers with
                    route.ts.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3  text-xs">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        app/api/users/route.ts
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

// Standard Web GET Handler
export async function GET(request: Request) {
  const users = await sql\`SELECT id, name, email FROM users\`;
  return NextResponse.json({ success: true, data: users });
}

// Standard Web POST Handler
export async function POST(request: Request) {
  const body = await request.json();
  const res = await sql\`INSERT INTO users (name, email) VALUES (\${body.name}, \${body.email}) RETURNING *\`;
  return NextResponse.json({ success: true, user: res[0] }, { status: 201 });
}`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      REST API &amp; Webhooks
                    </h4>
                    <p>
                      <span className="lang-en"
                        ><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">route.ts</code> files create RESTful API
                        endpoints using standard Web Request and Response
                        objects. Use Route Handlers for mobile app APIs, public
                        developer SDKs, and Stripe webhooks.</span
                      ><span className="lang-km"
                        ><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">route.ts</code> បង្កើត REST API Endpoints
                        តាមស្តង់ដារ Web Request/Response។ ប្រើវាសម្រាប់ Mobile
                        App API ឬ Webhooks ដូចជា Stripe ជាដើម។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 50: Security Basics
export function Slide50({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 20 — SECURITY &bull; SLIDE 50 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Security Basics</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Core web security principles: validation, authorization, and
                    sanitization.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-red-400  text-xs font-bold">
                    RULE 01 &bull; UNTRUSTED CLIENT
                  </div>
                  <h4>Never Trust Input</h4>
                  <p>
                    <span className="lang-en"
                      >Client-side validation is only for UX. Always validate
                      and sanitize all form fields and parameters on the server
                      using Zod.</span
                    ><span className="lang-km"
                      >ការពិនិត្យកូដលើ Browser គឺសម្រាប់តែ UX ប៉ុណ្ណោះ។ ត្រូវ
                      Validate ទិន្នន័យលើ Server ជានិច្ចដោយប្រើ Zod។</span
                    >
                  </p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-blue-400  text-xs font-bold">
                    RULE 02 &bull; AUTHORIZE EVERY ACTION
                  </div>
                  <h4>Check Permissions</h4>
                  <p>
                    <span className="lang-en"
                      >Always verify that the authenticated user owns the
                      resource before executing any SQL update or
                      deletion.</span
                    ><span className="lang-km"
                      >ត្រូវពិនិត្យមើលសិទ្ធិរបស់ User មុនពេលអនុញ្ញាតឱ្យកែប្រែ
                      ឬលុបទិន្នន័យក្នុង Database។</span
                    >
                  </p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-green-400  text-xs font-bold">
                    RULE 03 &bull; SQL PARAMETERIZATION
                  </div>
                  <h4>Prevent Injections</h4>
                  <p>
                    <span className="lang-en"
                      >Never concatenate raw strings into SQL queries. Always
                      use tagged template literals or ORMs to ensure automatic
                      escaping.</span
                    ><span className="lang-km"
                      >កុំតភ្ជាប់ String ចូលក្នុង SQL Query ដោយផ្ទាល់។ ត្រូវប្រើ
                      Parameterized Queries ដើម្បីការពារ SQL Injection។</span
                    >
                  </p>
                </div>
              </div>
    </div>
  );
}

// Slide 51: Client vs Server Security
export function Slide51({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 20 — SECURITY &bull; SLIDE 51 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Client vs Server Security</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Understanding the security boundary between client and
                    server.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-900/20 border border-red-800/40">
                    <div
                      className="text-red-400 font-bold  text-xs mb-1 flex items-center gap-1.5"
                    >
                      <XCircle className="w-4 h-4" />
                      CLIENT BROWSER (UNTRUSTED)
                    </div>
                    <p className="text-slate-300 text-xs mb-2">
                      <span className="lang-en"
                        >Any user can inspect network traffic, edit DOM
                        elements, and bypass client form checks.</span
                      ><span className="lang-km"
                        >User អាចកែប្រែ DOM និងបន្លំទិន្នន័យលើ Browser
                        បានយ៉ាងងាយ។</span
                      >
                    </p>
                    <ul className="text-[11px] text-red-300/80 space-y-1 ">
                      <li>
                        &bull; Do NOT put secret keys in Client Components
                      </li>
                      <li>
                        &bull; Do NOT perform authorization checks on client
                        alone
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-900/20 border border-green-800/40">
                    <div
                      className="text-green-400 font-bold  text-xs mb-1 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      NEXT.JS SERVER (TRUSTED)
                    </div>
                    <p className="text-slate-300 text-xs mb-2">
                      <span className="lang-en"
                        >Protected execution environment isolated behind reverse
                        proxies and private networks.</span
                      ><span className="lang-km"
                        >បរិស្ថានសុវត្ថិភាពខ្ពស់
                        មិនអាចមើលឃើញពីខាងក្រៅដោយគ្មានការអនុញ្ញាត។</span
                      >
                    </p>
                    <ul
                      className="text-[11px] text-green-300/80 space-y-1 "
                    >
                      <li>
                        &bull; Safely query PostgreSQL via private connection
                        strings
                      </li>
                      <li>&bull; Validate input schemas strictly with Zod</li>
                    </ul>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 52: Real Application Structure
export function Slide52({ onStart, onRestart }) {
  const prodTreeText = `taskflow/
├── app/
│   ├── (auth)/             # Route group (no URL impact)
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (dashboard)/        # Authenticated layout
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── tasks/page.tsx
│   ├── api/                # Webhooks & public APIs
│   ├── layout.tsx
│   └── globals.css
├── actions/                # Server Actions (mutations)
├── components/ui/          # Design system components
├── lib/db.ts               # Database connection client
└── middleware.ts           # Route protection guard`;

  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label text-[11px] font-bold uppercase tracking-wider text-blue-400">
            SECTION 21 — PROJECT ARCHITECTURE &bull; SLIDE 52 / 75
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            Real Application Structure
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Production-grade folder architecture and route groups.
          </p>
        </div>
        <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400 inline-flex items-center gap-1">
          Next.js App Router
        </span>
      </div>

      <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3 text-xs">
          <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden text-xs shadow-md">
            <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
              <div className="terminal-dots flex items-center gap-1.5">
                <div className="terminal-dot red w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></div>
                <div className="terminal-dot yellow w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></div>
                <div className="terminal-dot green w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></div>
              </div>
              <span className="text-xs text-slate-400 font-mono">Production SaaS Folder Layout</span>
              <button
                className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                data-copy={prodTreeText}
              >
                <Copy className="w-3 h-3" />
                Copy
              </button>
            </div>
            <div className="terminal-body p-3.5 overflow-x-auto text-xs leading-relaxed bg-slate-950/60">
              <pre className="tree-diagram font-mono text-[11.5px] leading-relaxed text-slate-300 m-0">
                <span className="text-sky-400 font-bold">taskflow/</span>{"\n"}
                <span className="text-slate-500">├── </span><span className="text-sky-300 font-semibold">app/</span>{"\n"}
                <span className="text-slate-500">│   ├── </span><span className="text-purple-400 font-semibold">(auth)/</span>{"             "}<span className="text-slate-400 font-semibold"># Route group (no URL impact)</span>{"\n"}
                <span className="text-slate-500">│   │   ├── </span><span className="text-indigo-300">login/page.tsx</span>{"\n"}
                <span className="text-slate-500">│   │   └── </span><span className="text-indigo-300">register/page.tsx</span>{"\n"}
                <span className="text-slate-500">│   ├── </span><span className="text-purple-400 font-semibold">(dashboard)/</span>{"        "}<span className="text-slate-400 font-semibold"># Authenticated layout</span>{"\n"}
                <span className="text-slate-500">│   │   ├── </span><span className="text-emerald-400 font-semibold">layout.tsx</span>{"\n"}
                <span className="text-slate-500">│   │   ├── </span><span className="text-emerald-400 font-semibold">page.tsx</span>{"\n"}
                <span className="text-slate-500">│   │   └── </span><span className="text-indigo-300">tasks/page.tsx</span>{"\n"}
                <span className="text-slate-500">│   ├── </span><span className="text-sky-300 font-semibold">api/</span>{"                "}<span className="text-slate-400 font-semibold"># Webhooks &amp; public APIs</span>{"\n"}
                <span className="text-slate-500">│   ├── </span><span className="text-emerald-400 font-semibold">layout.tsx</span>{"\n"}
                <span className="text-slate-500">│   └── </span><span className="text-indigo-300">globals.css</span>{"\n"}
                <span className="text-slate-500">├── </span><span className="text-green-400 font-bold">actions/</span>{"                "}<span className="text-green-400 font-semibold"># Server Actions (mutations)</span>{"\n"}
                <span className="text-slate-500">├── </span><span className="text-blue-400 font-bold">components/ui/</span>{"          "}<span className="text-blue-400 font-semibold"># Design system components</span>{"\n"}
                <span className="text-slate-500">├── </span><span className="text-purple-400 font-bold">lib/db.ts</span>{"               "}<span className="text-purple-400 font-semibold"># Database connection client</span>{"\n"}
                <span className="text-slate-500">└── </span><span className="text-amber-400 font-bold">middleware.ts</span>{"           "}<span className="text-amber-400 font-semibold"># Route protection guard</span>
              </pre>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
            <h4>
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              Route Groups (auth) &amp; (dashboard)
            </h4>
            <p>
              <span className="lang-en">
                Folders wrapped in parentheses like{" "}
                <code className="text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">(auth)</code> organize your routes without adding
                their folder name to the URL path. This allows separate
                layouts for public login pages vs internal app
                dashboards!
              </span>
              <span className="lang-km">
                Folder ក្នុងវង់ក្រចកដូចជា <code className="text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">(auth)</code> ជួយរៀបចំ
                Route ដោយមិនប៉ះពាល់ដល់ URL ឡើយ។ វាអនុញ្ញាតឱ្យយើងមាន
                Layout ដាច់ដោយឡែករវាង Login និង Dashboard!
              </span>
            </p>
          </div>
          <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
            <h4>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Architectural Separation
            </h4>
            <p>
              <span className="lang-en">
                Keep business logic (<code className="text-xs text-green-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">actions/</code>), data access (<code className="text-xs text-purple-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">lib/</code>), and security (<code className="text-xs text-amber-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">middleware.ts</code>) cleanly decoupled from presentation UI.
              </span>
              <span className="lang-km">
                បំបែក business logic (<code className="text-xs text-green-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">actions/</code>), data client (<code className="text-xs text-purple-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">lib/</code>), និង security (<code className="text-xs text-amber-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">middleware.ts</code>) ឱ្យដាច់ពី UI។
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 53: TaskFlow Architecture
export function Slide53({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 22 — BUILD A REAL PROJECT &bull; SLIDE 53 /
                    75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">TaskFlow Architecture</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Architectural blueprint of our production task management
                    application.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="diagram-box flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Next.js 15 Frontend (Tailwind UI)</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&larr;&rarr;</span>
                  <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">
                    Server Actions &amp; React Server Components
                  </div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&larr;&rarr;</span>
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Neon PostgreSQL (Serverless)</div>
                </div>
                <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>TaskFlow Features</h4>
                    <p>
                      <span className="lang-en"
                        >A complete modern task management web application with
                        authentication, real-time filters, PostgreSQL storage,
                        and instant updates.</span
                      ><span className="lang-km"
                        >កម្មវិធីគ្រប់គ្រងកិច្ចការងារពេញលេញ មានប្រព័ន្ធ Login,
                        តម្រងស្វែងរក, រក្សាទុកក្នុង PostgreSQL និង Update
                        ភ្លាមៗ។</span
                      >
                    </p>
                  </div>
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>App Router Patterns</h4>
                    <p>
                      <span className="lang-en"
                        >Leverages Server Components for lightning-fast reads
                        and Server Actions for zero-API mutation handling.</span
                      ><span className="lang-km"
                        >ប្រើ Server Components សម្រាប់ទាញទិន្នន័យលឿន និង Server
                        Actions សម្រាប់កែប្រែទិន្នន័យ។</span
                      >
                    </p>
                  </div>
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>Production Ready</h4>
                    <p>
                      <span className="lang-en"
                        >Equipped with error boundaries, loading skeletons,
                        responsive Tailwind UI, and Vercel edge
                        deployment.</span
                      ><span className="lang-km"
                        >រៀបចំជាមួយ Loading Skeletons, Error Boundary
                        និងត្រៀមសម្រាប់ Deploy លើ Vercel។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 54: TaskFlow Routes
export function Slide54({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label text-[11px] font-bold uppercase tracking-wider text-blue-400">
            SECTION 22 — BUILD A REAL PROJECT &bull; SLIDE 54 / 75
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">TaskFlow Routes</h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            <span className="lang-en">Complete route specification and access matrix for TaskFlow.</span>
            <span className="lang-km">តារាងកំណត់ Route និងសិទ្ធិចូលដំណើរការសម្រាប់គម្រោង TaskFlow។</span>
          </p>
        </div>
        <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400 inline-flex items-center gap-1">Next.js App Router</span>
      </div>

      <div className="slide-stack flex flex-col gap-3">
        <div className="overflow-x-auto border border-slate-800">
          <table className="table-spec w-full border-collapse text-xs">
            <thead>
              <tr>
                <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">
                  <span className="lang-en">URL ROUTE</span>
                  <span className="lang-km">URL ROUTE</span>
                </th>
                <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">
                  <span className="lang-en">FILE LOCATION</span>
                  <span className="lang-km">ទីតាំងឯកសារ (FILE)</span>
                </th>
                <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">
                  <span className="lang-en">PURPOSE &amp; ACCESS</span>
                  <span className="lang-km">គោលបំណង និងសិទ្ធិចូលមើល</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2.5 border-b border-slate-800 font-mono font-bold text-emerald-400">/</td>
                <td className="px-3 py-2.5 border-b border-slate-800 font-mono text-slate-300">app/page.tsx</td>
                <td className="px-3 py-2.5 border-b border-slate-800 text-slate-200">
                  <span className="lang-en">Public marketing landing page (Static)</span>
                  <span className="lang-km">ទំព័រដើម Marketing សាធារណៈ (Static)</span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 border-b border-slate-800 font-mono font-bold text-emerald-400">/login</td>
                <td className="px-3 py-2.5 border-b border-slate-800 font-mono text-slate-300">app/(auth)/login/page.tsx</td>
                <td className="px-3 py-2.5 border-b border-slate-800 text-slate-200">
                  <span className="lang-en">User authentication form &amp; session login</span>
                  <span className="lang-km">ទម្រង់ Login ផ្ទៀងផ្ទាត់គណនី និង Session</span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 border-b border-slate-800 font-mono font-bold text-sky-400">/dashboard</td>
                <td className="px-3 py-2.5 border-b border-slate-800 font-mono text-slate-300">app/(dashboard)/page.tsx</td>
                <td className="px-3 py-2.5 border-b border-slate-800 text-slate-200">
                  <span className="lang-en">Private overview metrics (Protected layout)</span>
                  <span className="lang-km">ទំព័រទិដ្ឋភាពទូទៅ (ការពារដោយ Login Layout)</span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 border-b border-slate-800 font-mono font-bold text-sky-400">/dashboard/tasks</td>
                <td className="px-3 py-2.5 border-b border-slate-800 font-mono text-slate-300">app/(dashboard)/tasks/page.tsx</td>
                <td className="px-3 py-2.5 border-b border-slate-800 text-slate-200">
                  <span className="lang-en">Task management list with search &amp; filters</span>
                  <span className="lang-km">បញ្ជីគ្រប់គ្រងកិច្ចការងារ រួមជាមួយ Search &amp; Filters</span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 font-mono font-bold text-sky-400">/dashboard/tasks/[id]</td>
                <td className="px-3 py-2.5 font-mono text-slate-300">app/(dashboard)/tasks/[id]/page.tsx</td>
                <td className="px-3 py-2.5 text-slate-200">
                  <span className="lang-en">Dynamic detail view and task mutation editor</span>
                  <span className="lang-km">ទំព័រកែសម្រួល Dynamic លម្អិតតាមលេខសម្គាល់ ID</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Slide 55: TaskFlow Database
export function Slide55({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 22 — BUILD A REAL PROJECT &bull; SLIDE 55 /
                    75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">TaskFlow Database</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Relational database schema with PostgreSQL and indexes.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3  text-xs">
                  <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <span className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        PostgreSQL Schema (Neon)
                      </span>
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <pre><code>{`CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(500) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  due_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_tasks_user_id ON tasks(user_id);`}</code></pre>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Relational Data Modeling
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Foreign key constraints enforce referential integrity
                        between users and their tasks. Indexes on
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">user_id</code> ensure lightning-fast dashboard
                        queries even with millions of records.</span
                      ><span className="lang-km"
                        >ការប្រើ Foreign Key ធានានូវទំនាក់ទំនងត្រឹមត្រូវរវាង
                        User និង Tasks។ Index លើ <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">user_id</code> ជួយឱ្យ
                        Query ទិន្នន័យបានលឿនបំផុត។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 56: TaskFlow Data Flow
export function Slide56({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 22 — BUILD A REAL PROJECT &bull; SLIDE 56 /
                    75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">TaskFlow Data Flow</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    End-to-end data mutation lifecycle from form to database and
                    revalidation.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="diagram-box flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">1. User Submits Form</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">
                    2. Server Action (createTask)
                  </div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">3. Zod Validate Input</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">4. SQL Insert (PostgreSQL)</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">5. revalidatePath()</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">6. UI Updates Instantly</div>
                </div>
                <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                  <div>
                    <span className="lang-en"
                      ><strong>The Power of revalidatePath:</strong> Notice that
                      no manual client state updates or cache invalidation
                      libraries were needed! Next.js re-renders the server
                      component and streams the updated HTML list
                      automatically.</span
                    ><span className="lang-km"
                      ><strong>អត្ថប្រយោជន៍នៃ revalidatePath៖</strong>
                      អ្នកមិនបាច់សរសេរកូដ Update State ដោយដៃឡើយ! Next.js នឹង
                      Re-render Server Component
                      និងបញ្ជូនបញ្ជីទិន្នន័យថ្មីមកកាន់ UI
                      ដោយស្វ័យប្រវត្តិ។</span
                    >
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 57: Why Next.js Can Be Fast
export function Slide57({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 23 — PERFORMANCE &bull; SLIDE 57 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Why Next.js Can Be Fast</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Architectural factors that power high performance in Next.js
                    applications.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-blue-400  text-xs font-bold">
                    01 &bull; MINIMAL JS
                  </div>
                  <h4>Zero Client Bundle</h4>
                  <p>
                    <span className="lang-en"
                      >Server Components do not ship JavaScript to the client.
                      The browser downloads and parses less code, leading to
                      instant First Contentful Paint.</span
                    ><span className="lang-km"
                      >Server Components មិនបញ្ជូនកូដ JavaScript ទៅ Browser ឡើយ
                      ធ្វើឱ្យទំព័រដំណើរការលឿនខ្លាំង។</span
                    >
                  </p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-green-400  text-xs font-bold">
                    02 &bull; EDGE STREAMING
                  </div>
                  <h4>Parallel Data Pipelines</h4>
                  <p>
                    <span className="lang-en"
                      >Pages stream progressively over HTTP/2, letting users
                      interact with parts of the page before slow data finishes
                      loading.</span
                    ><span className="lang-km"
                      >ទំព័រ Stream តាម HTTP/2 ធ្វើឱ្យ User អាចចុចលើទំព័របាន
                      ទោះបីជាទិន្នន័យខ្លះកំពុងដំណើរការក៏ដោយ។</span
                    >
                  </p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-purple-400  text-xs font-bold">
                    03 &bull; GLOBAL CACHING
                  </div>
                  <h4>Vercel Edge Network</h4>
                  <p>
                    <span className="lang-en"
                      >Static routes and cached assets are served from hundreds
                      of Edge CDN locations worldwide within milliseconds.</span
                    ><span className="lang-km"
                      >ទំព័រ Static ត្រូវបានរក្សាទុកលើ Edge CDN ទូទាំងពិភពលោក
                      ផ្ដល់ការឆ្លើយតបត្រឹមតែប៉ុន្មាន Millisecond។</span
                    >
                  </p>
                </div>
              </div>
    </div>
  );
}

// Slide 58: Avoid Unnecessary Client Components
export function Slide58({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label text-[11px] font-bold uppercase tracking-wider text-blue-400">
            SECTION 23 — PERFORMANCE &bull; SLIDE 58 / 75
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            <span className="lang-en">Avoid Unnecessary Client Components</span>
            <span className="lang-km">ជៀសវាងការប្រើ Client Components ដោយមិនចាំបាច់</span>
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            <span className="lang-en">Pushing the "use client" boundary down to interactive leaf components.</span>
            <span className="lang-km">រុញព្រំដែន "use client" ចុះទៅកាន់តែ component ចុងក្រោយ (Leaf Component) ដែលត្រូវការ interactivity។</span>
          </p>
        </div>
        <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400 inline-flex items-center gap-1">Next.js App Router</span>
      </div>

      <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          <div className="code-box bg-slate-900 border border-red-500/30 overflow-hidden text-xs shadow-md">
            <div className="code-box-header flex items-center justify-between px-3 py-2 bg-red-950/40 border-b border-red-900/40">
              <span className="flex items-center gap-2 font-bold text-red-400">
                <XCircle className="w-3.5 h-3.5" />
                <span className="lang-en">POOR PATTERN: Client at Root</span>
                <span className="lang-km">ទម្រង់មិនល្អ៖ ដាក់ Client នៅខាងលើបង្អស់</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">app/dashboard/page.tsx</span>
            </div>
            <pre className="p-3 text-slate-300 font-mono text-xs overflow-x-auto leading-relaxed"><code>{`// app/dashboard/page.tsx
"use client"; // ❌ Marks whole page & tree as client!

export default function Dashboard() {
  // Entire tree & heavy packages ship to browser bundle
  return (
    <div>
      <Header />
      <Sidebar />
      <MainContent />
    </div>
  );
}`}</code></pre>
          </div>
          <div className="alert-callout alert-warning flex items-start gap-2.5 p-3 border border-red-500/30 bg-red-500/10 text-red-300 text-[12px] leading-relaxed">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
            <div>
              <span className="lang-en">Entire component tree & all imported modules are forced into the client JavaScript bundle, increasing page load time.</span>
              <span className="lang-km">Component tree ទាំងមូល និង imports ទាំងអស់ត្រូវទាញចូល Client JavaScript bundle ធ្វើឱ្យទំហំកូដធំ និង load យឺត។</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="code-box bg-slate-900 border border-emerald-500/30 overflow-hidden text-xs shadow-md">
            <div className="code-box-header flex items-center justify-between px-3 py-2 bg-emerald-950/40 border-b border-emerald-900/40">
              <span className="flex items-center gap-2 font-bold text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="lang-en">RECOMMENDED: Client at Leaf</span>
                <span className="lang-km">ទម្រង់ល្អបំផុត៖ ដាក់ Client នៅត្រឹម Leaf Nodes</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">app/dashboard/page.tsx</span>
            </div>
            <pre className="p-3 text-slate-300 font-mono text-xs overflow-x-auto leading-relaxed"><code>{`// app/dashboard/page.tsx (Server Component)
import { LikeButton } from "./LikeButton"; // "use client"
import { getDbData } from "@/lib/db";

export default async function Dashboard() {
  const data = await getDbData();
  return (
    <div>
      <Header data={data} />
      <Sidebar />
      <LikeButton />
    </div>
  );
}`}</code></pre>
          </div>
          <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-[12px] leading-relaxed">
            <Check className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
            <div>
              <span className="lang-en">Only interactive button JavaScript ships to the browser. Heavy DB queries, secret logic, and page layout stay strictly on the server.</span>
              <span className="lang-km">មានតែ JS របស់ LikeButton ប៉ុណ្ណោះដែលផ្ញើទៅ browser ចំណែកទិន្នន័យ Database និង Layout នៅ Server ទាំងស្រុង។</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 59: Production Build
export function Slide59({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 24 — DEPLOYMENT &bull; SLIDE 59 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Production Build</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Building and previewing the optimized production bundle.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3  text-xs">
                  <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <div className="terminal-dots flex items-center gap-1.5">
                        <div className="terminal-dot red w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></div>
                        <div className="terminal-dot yellow w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></div>
                        <div className="terminal-dot green w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></div>
                      </div>
                      <span className=" text-xs text-slate-400"
                        >Create Production Build</span
                      >
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
                      <div>
                        <span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span>
                        <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">npm run build</span>
                      </div>
                      <div className="term-out text-slate-300  text-xs"></div>
                      <div className="term-out text-slate-300  text-xs">▲ Next.js 15.0.0</div>
                      <div className="term-out text-slate-300  text-xs"></div>
                      <div className="term-out text-slate-300  text-xs">Route (app) Size First Load JS</div>
                      <div className="term-out text-slate-300  text-xs">┌ ○ / 5.2 kB 92.4 kB</div>
                      <div className="term-out text-slate-300  text-xs">├ ○ /_not-found 872 B 88.1 kB</div>
                      <div className="term-out text-slate-300  text-xs">├ ƒ /dashboard 1.4 kB 95.2 kB</div>
                      <div className="term-out text-slate-300  text-xs">
                        └ ƒ /dashboard/tasks 2.1 kB 96.8 kB
                      </div>
                      <div className="term-out text-slate-300  text-xs">
                        + First Load JS shared by all 87.2 kB
                      </div>
                      <div className="term-out text-slate-300  text-xs"></div>
                      <div className="term-out text-slate-300  text-xs">
                        ○ (Static) prerendered as static content
                      </div>
                      <div className="term-out text-slate-300  text-xs">
                        ƒ (Dynamic) server-rendered on demand
                      </div>
                      <div className="term-out text-slate-300  text-xs"></div>
                      <div className="term-out text-slate-300  text-xs">Done: Compiled successfully</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      Build Output Inspection
                    </h4>
                    <p>
                      <span className="lang-en"
                        ><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">npm run build</code> validates all TypeScript
                        types, optimizes bundles, and generates the build
                        summary indicating which routes are Static (○) vs
                        Dynamic (ƒ). Test locally with
                        <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">npm run start</code>.</span
                      ><span className="lang-km"
                        ><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">npm run build</code> ពិនិត្យ TypeScript, Optimize
                        JS bundles និងបង្ហាញថាតើ Route ណាជា Static (○) ឬ Dynamic
                        (ƒ)។ សាកល្បងដោយ <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">npm run start</code>។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 60: GitHub Workflow
export function Slide60({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 24 — DEPLOYMENT &bull; SLIDE 60 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">GitHub Workflow</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Pushing branches and triggering continuous integration from
                    GitHub.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3  text-xs">
                  <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                    <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                      <div className="terminal-dots flex items-center gap-1.5">
                        <div className="terminal-dot red w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></div>
                        <div className="terminal-dot yellow w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></div>
                        <div className="terminal-dot green w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></div>
                      </div>
                      <span className=" text-xs text-slate-400"
                        >Git Workflow for Next.js</span
                      >
                      <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    </div>
                    <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
                      <div>
                        <span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span>
                        <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5"
                          >git checkout -b feature/taskflow-auth</span
                        >
                      </div>
                      <div>
                        <span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span>
                        <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">git status</span>
                      </div>
                      <div>
                        <span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span>
                        <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">git add .</span>
                      </div>
                      <div>
                        <span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span>
                        <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5"
                          >git commit -m "feat: implement auth middleware and
                          server actions"</span
                        >
                      </div>
                      <div>
                        <span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span>
                        <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5"
                          >git push origin feature/taskflow-auth</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      Connection to Git &amp; GitHub
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Following our previous Git course, every production
                        Next.js project is version-controlled with Git. Pushing
                        your branch to GitHub automatically triggers continuous
                        integration and preview deployments!</span
                      ><span className="lang-km"
                        >ដូចដែលបានរៀនក្នុងវគ្គ Git កន្លងមក គ្រប់គម្រោង Next.js
                        ត្រូវគ្រប់គ្រងដោយ Git។ ការ Push ទៅ GitHub នឹងបញ្ឆេះ
                        CI/CD និងបង្កើត Preview Deployment
                        ដោយស្វ័យប្រវត្តិ!</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 61: Vercel Deployment
export function Slide61({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 24 — DEPLOYMENT &bull; SLIDE 61 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Vercel Deployment</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Zero-config Git integration, automatic builds, and preview
                    environments.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="diagram-box flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">GitHub Repository</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">Vercel Auto-Detect Next.js</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Edge Network Build</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">Live Production URL</div>
                </div>
                <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>Zero Configuration</h4>
                    <p>
                      <span className="lang-en"
                        >Import your GitHub repo into Vercel and it configures
                        build commands and output directories
                        automatically.</span
                      ><span className="lang-km"
                        >ភ្ជាប់ GitHub Repo ទៅកាន់ Vercel វានឹងរៀបចំការ Build
                        និង Deploy ដោយមិនបាច់ Config អ្វីឡើយ។</span
                      >
                    </p>
                  </div>
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>Preview Environments</h4>
                    <p>
                      <span className="lang-en"
                        >Every pull request receives a unique preview URL for
                        testing before merging to production.</span
                      ><span className="lang-km"
                        >រាល់ Pull Request ទទួលបាន Preview URL
                        ផ្ទាល់ខ្លួនសម្រាប់ Test មុនពេល Merge។</span
                      >
                    </p>
                  </div>
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>Instant Rollbacks</h4>
                    <p>
                      <span className="lang-en"
                        >Revert to any previous deployment instantly with a
                        single click if an issue ever occurs.</span
                      ><span className="lang-km"
                        >អាច Rollback ទៅកាន់ Deployment
                        ចាស់វិញបានភ្លាមៗបើមានបញ្ហាកើតឡើង។</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 62: Develop -> Preview -> Ship
export function Slide62({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 24 — DEPLOYMENT &bull; SLIDE 62 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Develop -&gt; Preview -&gt; Ship</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    The complete modern full-stack shipping cycle.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="diagram-box flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">1. DEVELOP (Local)</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">2. PREVIEW (Branch PR)</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">3. TEST (QA Team)</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">4. SHIP (Main Production)</div>
                </div>
                <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                  <div>
                    <span className="lang-en"
                      >This modern development workflow connects code authoring,
                      version control, automated testing, and cloud
                      infrastructure into a seamless engineering pipeline.</span
                    ><span className="lang-km"
                      >Workflow ទំនើបនេះភ្ជាប់ការសរសេរកូដ Git Version Control
                      ការតេស្តស្វ័យប្រវត្តិ និង Cloud Deployment
                      ទៅជាប្រព័ន្ធតែមួយយ៉ាងរលូន។</span
                    >
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 63: Mistake: Everything Is Client
export function Slide63({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 25 — COMMON MISTAKES &bull; SLIDE 63 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Mistake: Everything Is Client</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Why excessive client components degrade performance and
                    bundle sizes.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-900/20 border border-red-800/40">
                  <div className="text-red-400 font-bold  text-xs mb-1">
                    MISTAKE: Adding "use client" everywhere
                  </div>
                  <p className="text-slate-300 text-xs">
                    <span className="lang-en"
                      >Beginners often add <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">"use client"</code> to every
                      file as soon as they encounter any issue. This converts
                      your app back into a heavy client SPA, discarding all
                      performance and SEO benefits of Server Components!</span
                    ><span className="lang-km"
                      >អ្នកទើបរៀនតែងតែដាក់ <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">"use client"</code> លើគ្រប់
                      file។ ការធ្វើបែបនេះធ្វើឱ្យ Next.js ក្លាយជា Client SPA
                      ធម្មតាវិញ និងបាត់បង់អត្ថប្រយោជន៍ល្បឿនទាំងអស់!</span
                    >
                  </p>
                </div>
                <div className="p-4 bg-green-900/20 border border-green-800/40">
                  <div className="text-green-400 font-bold  text-xs mb-1">
                    SOLUTION: Keep Server as Default
                  </div>
                  <p className="text-slate-300 text-xs">
                    <span className="lang-en"
                      >Only introduce <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">"use client"</code> when you
                      explicitly need <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">useState</code>,
                      <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">useEffect</code>, or click event handlers. Keep all
                      layouts and pages as Server Components.</span
                    ><span className="lang-km"
                      >ប្រើ <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">"use client"</code> តែពេលត្រូវការ useState,
                      useEffect ឬ Click Handler ពិតប្រាកដប៉ុណ្ណោះ។ ទុក Layouts
                      និង Pages ជា Server Components ជានិច្ច។</span
                    >
                  </p>
                </div>
              </div>
    </div>
  );
}

// Slide 64: Mistake: Exposing Secrets
export function Slide64({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 25 — COMMON MISTAKES &bull; SLIDE 64 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Mistake: Exposing Secrets</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Preventing accidental credential leaks via NEXT_PUBLIC_
                    prefixes.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="p-4 bg-red-900/20 border border-red-800/40  text-xs"
                >
                  <div className="text-red-400 font-bold mb-1">
                    CRITICAL DANGER: Leaked Credentials
                  </div>
                  <div className="text-red-300">
                    NEXT_PUBLIC_DATABASE_URL="postgres://..."
                  </div>
                  <p className="text-slate-400 text-xs mt-2">
                    <span className="lang-en"
                      >Prefixing secret keys with NEXT_PUBLIC_ embeds them
                      directly into the public JavaScript bundle downloaded by
                      every visitor!</span
                    ><span className="lang-km"
                      >ការដាក់ Prefix NEXT_PUBLIC_ លើ Secret Key នឹងបញ្ជូន
                      Password នោះទៅកាន់ Browser របស់មនុស្សគ្រប់គ្នា!</span
                    >
                  </p>
                </div>
                <div
                  className="p-4 bg-green-900/20 border border-green-800/40  text-xs"
                >
                  <div className="text-green-400 font-bold mb-1">
                    SECURE FIX: Keep Secrets Private
                  </div>
                  <div className="text-green-300">
                    DATABASE_URL="postgres://..."
                  </div>
                  <p className="text-slate-400 text-xs mt-2">
                    <span className="lang-en"
                      >Without the prefix, Next.js prevents this variable from
                      ever leaking to the browser window.</span
                    ><span className="lang-km"
                      >បើគ្មាន Prefix ទេ Next.js នឹងរក្សាទុក Variable នោះលើ
                      Server ដោយសុវត្ថិភាព 100%។</span
                    >
                  </p>
                </div>
              </div>
    </div>
  );
}

// Slide 65: Mistake: No Server Validation
export function Slide65({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 25 — COMMON MISTAKES &bull; SLIDE 65 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Mistake: No Server Validation</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Why client-side form validation is never sufficient for
                    security.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="diagram-box flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
                  <div className="diag-node border-red-500 text-red-400">
                    Browser HTML &lt;input required /&gt; (Bypassed in 2 seconds
                    via curl/Postman)
                  </div>
                  <span className="text-red-400 font-bold">&ne;</span>
                  <div className="diag-node active border-green-500 text-green-400">
                    Server Action Zod Schema Validation (Enforced 100%)
                  </div>
                </div>
                <div className="alert-callout warning flex items-start gap-2.5 p-3 border border-amber-500/30 bg-amber-500/10 text-amber-300 text-[12.5px] leading-relaxed">
                  <div>
                    <span className="lang-en"
                      ><strong>Always remember:</strong> Anyone can send raw
                      HTTP POST requests to your server action endpoints. Never
                      trust incoming formData without server-side
                      validation!</span
                    ><span className="lang-km"
                      ><strong>ចងចាំជានិច្ច៖</strong> នរណាក៏អាចផ្ញើ HTTP POST
                      មកកាន់ Server Action បានដែរ។ កុំទុកចិត្ត formData
                      ដោយគ្មានការពិនិត្យលើ Server ឱ្យសោះ!</span
                    >
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 66: Mistake: Poor Folder Architecture
export function Slide66({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label text-[11px] font-bold uppercase tracking-wider text-blue-400">
            SECTION 25 — COMMON MISTAKES &bull; SLIDE 66 / 75
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            <span className="lang-en">Mistake: Poor Folder Architecture</span>
            <span className="lang-km">កំហុស៖ រចនាសម្ព័ន្ធ Folder គ្មានរបៀបរៀបរយ</span>
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            <span className="lang-en">Avoiding disorganized directories and maintainability nightmares.</span>
            <span className="lang-km">ជៀសវាងការរៀបចំ Directory រញ៉េរញ៉ៃ ដែលពិបាកថែទាំ និងបង្កកំហុស។</span>
          </p>
        </div>
        <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400 inline-flex items-center gap-1">Next.js App Router</span>
      </div>

      <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          <div className="code-box bg-slate-900 border border-red-500/30 overflow-hidden text-xs shadow-md">
            <div className="code-box-header flex items-center justify-between px-3 py-2 bg-red-950/40 border-b border-red-900/40">
              <span className="flex items-center gap-2 font-bold text-red-400">
                <XCircle className="w-3.5 h-3.5" />
                <span className="lang-en">CHAOTIC ANTI-PATTERN</span>
                <span className="lang-km">ទម្រង់រញ៉េរញ៉ៃ (ជៀសវាង)</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">Anti-pattern</span>
            </div>
            <pre className="p-3 text-slate-400 font-mono text-xs overflow-x-auto leading-relaxed"><code>{`my-next-app/
├── components/          # Unorganized dump
├── components2/         # Duplicate ad-hoc folder
├── final_ui/            # Hard to trace ownership
├── old_code/            # Dead code kept in tree
└── test_page/           # Mixing test files into src`}</code></pre>
          </div>
          <div className="alert-callout alert-warning flex items-start gap-2.5 p-3 border border-red-500/30 bg-red-500/10 text-red-300 text-[12px] leading-relaxed">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
            <div>
              <span className="lang-en">Lacks clear modularity. Hard for teams to navigate, risks shipping obsolete code into production bundles, and causes circular imports.</span>
              <span className="lang-km">ខ្វះការបែងចែកច្បាស់លាស់ ពិបាករកកូដ ប្រឈមមុខនឹងការ ship កូដចាស់ៗទៅ production និងបង្កបញ្ហា circular imports។</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="code-box bg-slate-900 border border-emerald-500/30 overflow-hidden text-xs shadow-md">
            <div className="code-box-header flex items-center justify-between px-3 py-2 bg-emerald-950/40 border-b border-emerald-900/40">
              <span className="flex items-center gap-2 font-bold text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="lang-en">CLEAN PRODUCTION PATTERN</span>
                <span className="lang-km">រចនាសម្ព័ន្ធស្អាតតាមស្តង់ដារ Production</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">Production-ready</span>
            </div>
            <pre className="p-3 text-slate-300 font-mono text-xs overflow-x-auto leading-relaxed"><code>{`my-next-app/
├── app/                 # Routing, layouts & route handlers
├── components/
│   └── ui/              # Reusable primitive UI (buttons, cards)
├── actions/             # Type-safe Server Actions (mutations)
├── lib/                 # DB client, auth config, utilities
└── types/               # TypeScript interfaces & definitions`}</code></pre>
          </div>
          <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-[12px] leading-relaxed">
            <Check className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
            <div>
              <span className="lang-en">Industry standard Next.js directory layout. Highly scalable, enforces clean separation of concerns, and simplifies maintenance.</span>
              <span className="lang-km">រចនាសម្ព័ន្ធស្តង់ដារឧស្សាហកម្ម Next.js។ ងាយស្រួលពង្រីក (Scalable) បែងចែកតួនាទីច្បាស់លាស់ និងងាយស្រួលថែទាំ។</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 67: Debugging Next.js
export function Slide67({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 26 — DEBUGGING &bull; SLIDE 67 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Debugging Next.js</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Mastering tools for diagnosing server and client execution
                    issues.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-4">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-blue-400  text-xs font-bold mb-1">
                    01 &bull; TERMINAL LOGS
                  </div>
                  <h4 className="text-sm">Server Logs</h4>
                  <p>
                    <span className="lang-en"
                      >Console.log inside Server Components and Server Actions
                      prints directly to your VS Code terminal, not
                      browser.</span
                    ><span className="lang-km"
                      >Console.log លើ Server Components បង្ហាញក្នុង Terminal
                      មិនមែនលើ Browser ឡើយ។</span
                    >
                  </p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-green-400  text-xs font-bold mb-1">
                    02 &bull; REACT DEVTOOLS
                  </div>
                  <h4 className="text-sm">Component Tree</h4>
                  <p>
                    <span className="lang-en"
                      >Inspect props, state, and client component boundaries
                      visually in your browser DevTools extension.</span
                    ><span className="lang-km"
                      >ពិនិត្យមើល Props, State និង Component Tree តាមរយៈ
                      Extension React DevTools។</span
                    >
                  </p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-orange-400  text-xs font-bold mb-1">
                    03 &bull; NETWORK TAB
                  </div>
                  <h4 className="text-sm">RSC Payload</h4>
                  <p>
                    <span className="lang-en"
                      >Inspect the React Server Component payload streams and
                      Server Action POST requests in real-time.</span
                    ><span className="lang-km"
                      >ពិនិត្យមើល Payload របស់ Server Components និង Server
                      Action ក្នុង Network Tab។</span
                    >
                  </p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-purple-400  text-xs font-bold mb-1">
                    04 &bull; SOURCE MAPS
                  </div>
                  <h4 className="text-sm">TypeScript Debug</h4>
                  <p>
                    <span className="lang-en"
                      >Set breakpoints in original TypeScript source files
                      directly inside Chrome DevTools or VS Code debugger.</span
                    ><span className="lang-km"
                      >ដាក់ Breakpoint លើកូដ TypeScript ដើមក្នុង Chrome ឬ VS
                      Code Debugger។</span
                    >
                  </p>
                </div>
              </div>
    </div>
  );
}

// Slide 68: Common Errors & Fixes
export function Slide68({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label text-[11px] font-bold uppercase tracking-wider text-blue-400">
            SECTION 26 — DEBUGGING &bull; SLIDE 68 / 75
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            <span className="lang-en">Common Errors &amp; Fixes</span>
            <span className="lang-km">កំហុសទូទៅ និងវិធីដោះស្រាយ</span>
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            <span className="lang-en">Diagnosing hydration mismatches, missing directives, and boundary errors.</span>
            <span className="lang-km">ការវិនិច្ឆ័យកំហុស Hydration mismatch, ខ្វះ directive និង boundary errors។</span>
          </p>
        </div>
        <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400 inline-flex items-center gap-1">Next.js App Router</span>
      </div>

      <div className="slide-stack flex flex-col gap-3">
        <div className="overflow-x-auto">
          <table className="table-spec w-full border-collapse text-xs border border-slate-800">
            <thead>
              <tr>
                <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">
                  <span className="lang-en">ERROR MESSAGE</span>
                  <span className="lang-km">សារកំហុស (ERROR)</span>
                </th>
                <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">
                  <span className="lang-en">COMMON ROOT CAUSE</span>
                  <span className="lang-km">មូលហេតុចម្បង</span>
                </th>
                <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">
                  <span className="lang-en">PROVEN FIX</span>
                  <span className="lang-km">វិធីដោះស្រាយ</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 border-b border-slate-800 font-mono text-red-400 font-bold">
                  Hydration failed because initial UI does not match
                </td>
                <td className="px-3 py-2 border-b border-slate-800 text-slate-200">
                  <span className="lang-en">Using browser values (<code className="text-slate-300">window</code>, <code className="text-slate-300">Date.now()</code>, <code className="text-slate-300">localStorage</code>) during server render.</span>
                  <span className="lang-km">ការប្រើប្រាស់តម្លៃ Browser (<code className="text-slate-300">window</code>, <code className="text-slate-300">Date.now()</code>) អំឡុងពេល Server Render។</span>
                </td>
                <td className="px-3 py-2 border-b border-slate-800 text-emerald-400">
                  <span className="lang-en">Move browser checks into <code className="text-blue-400">useEffect</code> or add <code className="text-blue-400">suppressHydrationWarning</code> to the HTML element.</span>
                  <span className="lang-km">ផ្លាស់ប្ដូរការឆែក Browser ចូល <code className="text-blue-400">useEffect</code> ឬប្រើ <code className="text-blue-400">suppressHydrationWarning</code>។</span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-800 font-mono text-red-400 font-bold">
                  window is not defined
                </td>
                <td className="px-3 py-2 border-b border-slate-800 text-slate-200">
                  <span className="lang-en">Accessing browser <code className="text-slate-300">window</code> or DOM API inside a Server Component.</span>
                  <span className="lang-km">ការហៅប្រើប្រាស់ <code className="text-slate-300">window</code> ឬ DOM API នៅខាងក្នុង Server Component។</span>
                </td>
                <td className="px-3 py-2 border-b border-slate-800 text-emerald-400">
                  <span className="lang-en">Add <code className="text-blue-400">"use client"</code> at top of file, or check <code className="text-blue-400">typeof window !== "undefined"</code>.</span>
                  <span className="lang-km">បន្ថែម <code className="text-blue-400">"use client"</code> នៅលើបង្អស់ ឬឆែក <code className="text-blue-400">typeof window !== "undefined"</code>។</span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-800 font-mono text-red-400 font-bold">
                  Event handlers cannot be passed to Client Component props
                </td>
                <td className="px-3 py-2 border-b border-slate-800 text-slate-200">
                  <span className="lang-en">Passing function props (e.g. <code className="text-slate-300">onClick</code>) across Server to Client boundary.</span>
                  <span className="lang-km">ការបញ្ជូន function props (ដូចជា <code className="text-slate-300">onClick</code>) ឆ្លងកាត់ព្រំដែនពី Server ទៅ Client Component។</span>
                </td>
                <td className="px-3 py-2 border-b border-slate-800 text-emerald-400">
                  <span className="lang-en">Use Server Actions (<code className="text-blue-400">action={'{...}'}</code>) or declare event handlers inside the Client Component.</span>
                  <span className="lang-km">ប្រើប្រាស់ Server Actions ឬបង្កើត event handlers ផ្ទាល់នៅក្នុង Client Component នោះ។</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Slide 69: Modern Next.js Architecture
export function Slide69({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label text-[11px] font-bold uppercase tracking-wider text-blue-400">
            SECTION 27 — FINAL ARCHITECTURE &bull; SLIDE 69 / 75
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            <span className="lang-en">Modern Next.js Architecture</span>
            <span className="lang-km">ស្ថាបត្យកម្ម Next.js ទំនើប</span>
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            <span className="lang-en">Master architectural diagram connecting all full-stack layers.</span>
            <span className="lang-km">ដ្យាក្រាមស្ថាបត្យកម្មរួមតភ្ជាប់គ្រប់ស្រទាប់នៃកម្មវិធី Full-Stack។</span>
          </p>
        </div>
        <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400 inline-flex items-center gap-1">Next.js App Router</span>
      </div>

      <div className="slide-stack flex flex-col gap-3">
        {/* Tier 1: Client Browser */}
        <div className="info-card bg-slate-900/90 border border-sky-500/30 p-3.5 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-bold text-sky-400 text-xs">
              <Globe className="w-4 h-4" />
              <span className="lang-en">TIER 1: CLIENT BROWSER</span>
              <span className="lang-km">ស្រទាប់ទី ១៖ CLIENT BROWSER</span>
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 bg-sky-500/10 text-sky-300 border border-sky-500/20">
              <span className="lang-en">Client Runtime</span>
              <span className="lang-km">ដំណើរការលើ Browser</span>
            </span>
          </div>
          <p className="text-xs text-slate-300 m-0 leading-relaxed">
            <span className="lang-en">Interactive leaf components, local state (<code className="text-sky-300">useState</code>), event handlers (<code className="text-sky-300">onClick</code>), and fast client-side navigation.</span>
            <span className="lang-km">Leaf components ដែលមាន interactivity, state ក្នុងស្រុក (<code className="text-sky-300">useState</code>), event handlers និងការប្ដូរទំព័ររហ័ស។</span>
          </p>
        </div>

        {/* Transition 1 */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-blue-400 py-0.5">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          <span className="lang-en text-[11px]">HTTP/2 Requests • Form Server Actions • Streaming RSC Payloads</span>
          <span className="lang-km text-[11px]">សំណើ HTTP/2 • Form Server Actions • ការបញ្ជូន RSC Payloads</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </div>

        {/* Tier 2: Next.js Server Core */}
        <div className="info-card bg-slate-900/90 border border-blue-500/40 p-3.5 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-bold text-blue-300 text-xs">
              <Server className="w-4 h-4 text-blue-400" />
              <span className="lang-en">TIER 2: NEXT.JS APP ROUTER CORE (SERVER)</span>
              <span className="lang-km">ស្រទាប់ទី ២៖ ស្នូល NEXT.JS APP ROUTER (SERVER)</span>
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 bg-blue-500/10 text-blue-300 border border-blue-500/20">
              <span className="lang-en">Node.js / Edge Runtime</span>
              <span className="lang-km">Node.js / Edge Runtime</span>
            </span>
          </div>
          <p className="text-xs text-slate-300 m-0 leading-relaxed">
            <span className="lang-en">React Server Components (RSC) by default, layout persistence, route handlers, server mutations, zero-bundle overhead.</span>
            <span className="lang-km">ដំណើរការ Server Components (RSC) ជាលំនាំដើម, layout ថេរ, API route handlers, server mutations និងមិនបន្ថែមទំហំ JS ទៅ client។</span>
          </p>
        </div>

        {/* Transition 2 */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-emerald-400 py-0.5">
          <ArrowDown className="w-3.5 h-3.5" />
          <span className="lang-en text-[11px]">Direct Type-Safe Server Calls • Secure DB Connections</span>
          <span className="lang-km text-[11px]">ការតភ្ជាប់ Database ដោយផ្ទាល់ • ប្រព័ន្ធសុវត្ថិភាព និង Credential</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </div>

        {/* Tier 3: Data & Infrastructure Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="info-card bg-slate-900 border border-slate-800 p-3 flex flex-col gap-1.5 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-400">
              <Database className="w-3.5 h-3.5" />
              <span>PostgreSQL (Neon)</span>
            </div>
            <p className="text-[11px] text-slate-300 m-0 leading-relaxed">
              <span className="lang-en">Serverless relational database with instant branching & connection pooling.</span>
              <span className="lang-km">Serverless relational database ដែលមាន instant branching និង connection pooling។</span>
            </p>
          </div>

          <div className="info-card bg-slate-900 border border-slate-800 p-3 flex flex-col gap-1.5 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-1.5 font-bold text-xs text-amber-400">
              <Shield className="w-3.5 h-3.5" />
              <span>Auth &amp; Session Engine</span>
            </div>
            <p className="text-[11px] text-slate-300 m-0 leading-relaxed">
              <span className="lang-en">NextAuth / Clerk session validation, encrypted HTTP-only cookies & RBAC.</span>
              <span className="lang-km">ការផ្ទៀងផ្ទាត់ Session ជាមួយ NextAuth / Clerk, encrypted cookies និងសិទ្ធិ RBAC។</span>
            </p>
          </div>

          <div className="info-card bg-slate-900 border border-slate-800 p-3 flex flex-col gap-1.5 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-1.5 font-bold text-xs text-purple-400">
              <Cloud className="w-3.5 h-3.5" />
              <span>External APIs &amp; S3</span>
            </div>
            <p className="text-[11px] text-slate-300 m-0 leading-relaxed">
              <span className="lang-en">Third-party payment gateways, webhook verification, and cloud object storage.</span>
              <span className="lang-km">Gateway ទូទាត់ប្រាក់ក្រៅ, ការផ្ទៀងផ្ទាត់ webhook និង cloud object storage។</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 70: Next.js Commands Cheat Sheet
export function Slide70({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 28 — CHEAT SHEET &bull; SLIDE 70 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Next.js Commands Cheat Sheet</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Essential CLI commands for daily development and deployment.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2  text-xs">
                  <div className="p-3 bg-slate-900 border border-slate-800">
                    <div className="text-blue-400 font-bold mb-1">
                      npx create-next-app@latest
                    </div>
                    <div className="text-slate-400">
                      Scaffolds a new project with TypeScript, Tailwind, and App
                      Router.
                    </div>
                  </div>
                  <div className="p-3 bg-slate-900 border border-slate-800">
                    <div className="text-blue-400 font-bold mb-1">npm run dev</div>
                    <div className="text-slate-400">
                      Starts the local development server with Fast Refresh on
                      port 3000.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2  text-xs">
                  <div className="p-3 bg-slate-900 border border-slate-800">
                    <div className="text-blue-400 font-bold mb-1">
                      npm run build
                    </div>
                    <div className="text-slate-400">
                      Compiles the optimized production application and checks
                      types.
                    </div>
                  </div>
                  <div className="p-3 bg-slate-900 border border-slate-800">
                    <div className="text-blue-400 font-bold mb-1">
                      npm run start
                    </div>
                    <div className="text-slate-400">
                      Runs the production server locally to verify the
                      production build.
                    </div>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 71: Next.js Special Files
export function Slide71({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label text-[11px] font-bold uppercase tracking-wider text-blue-400">
            SECTION 28 — CHEAT SHEET &bull; SLIDE 71 / 75
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            <span className="lang-en">Next.js Special Files</span>
            <span className="lang-km">ឯកសារពិសេសក្នុង Next.js</span>
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            <span className="lang-en">Reference summary of App Router special file conventions.</span>
            <span className="lang-km">សេចក្ដីសង្ខេបអំពីតួនាទី និងឈ្មោះឯកសារពិសេសក្នុង App Router។</span>
          </p>
        </div>
        <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400 inline-flex items-center gap-1">Next.js App Router</span>
      </div>

      <div className="slide-stack flex flex-col gap-3">
        <div className="overflow-x-auto">
          <table className="table-spec w-full border-collapse text-xs border border-slate-800">
            <thead>
              <tr>
                <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">
                  <span className="lang-en">FILE CONVENTION</span>
                  <span className="lang-km">ឈ្មោះឯកសារពិសេស</span>
                </th>
                <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">
                  <span className="lang-en">ROLE IN APP ROUTER</span>
                  <span className="lang-km">តួនាទីក្នុង APP ROUTER</span>
                </th>
                <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">
                  <span className="lang-en">EXECUTION DEFAULT</span>
                  <span className="lang-km">លក្ខណៈដំណើរការ</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 border-b border-slate-800 font-mono font-bold text-sky-400">
                  page.tsx
                </td>
                <td className="px-3 py-2 border-b border-slate-800 text-slate-200">
                  <span className="lang-en">Defines the unique UI for a route segment.</span>
                  <span className="lang-km">កំណត់ផ្ទាំង UI ជាក់លាក់សម្រាប់ route segment នីមួយៗ។</span>
                </td>
                <td className="px-3 py-2 border-b border-slate-800 text-emerald-400 font-bold">
                  <span className="lang-en">Server Component</span>
                  <span className="lang-km">Server Component</span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-800 font-mono font-bold text-sky-400">
                  layout.tsx
                </td>
                <td className="px-3 py-2 border-b border-slate-800 text-slate-200">
                  <span className="lang-en">Shared UI wrapper that preserves state across navigation.</span>
                  <span className="lang-km">រចនាសម្ព័ន្ធ UI រួម (Wrapper) ដែលរក្សា State នៅពេលផ្លាស់ប្ដូរទំព័រ។</span>
                </td>
                <td className="px-3 py-2 border-b border-slate-800 text-emerald-400 font-bold">
                  <span className="lang-en">Server Component</span>
                  <span className="lang-km">Server Component</span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-800 font-mono font-bold text-sky-400">
                  loading.tsx
                </td>
                <td className="px-3 py-2 border-b border-slate-800 text-slate-200">
                  <span className="lang-en">Instant loading skeleton wrapped automatically in React Suspense.</span>
                  <span className="lang-km">UI Skeleton ផ្ទុកទិន្នន័យភ្លាមៗ រុំដោយស្វ័យប្រវត្តិនឹង React Suspense។</span>
                </td>
                <td className="px-3 py-2 border-b border-slate-800 text-emerald-400 font-bold">
                  <span className="lang-en">Server Component</span>
                  <span className="lang-km">Server Component</span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-800 font-mono font-bold text-sky-400">
                  error.tsx
                </td>
                <td className="px-3 py-2 border-b border-slate-800 text-slate-200">
                  <span className="lang-en">Error boundary UI for catching runtime exceptions and providing recovery.</span>
                  <span className="lang-km">Error boundary UI សម្រាប់ចាប់កំហុស runtime exceptions និងផ្ដល់ប៊ូតុង retry។</span>
                </td>
                <td className="px-3 py-2 border-b border-slate-800 text-amber-400 font-bold">
                  <span className="lang-en">Client Component ("use client")</span>
                  <span className="lang-km">Client Component ("use client")</span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-800 font-mono font-bold text-sky-400">
                  not-found.tsx
                </td>
                <td className="px-3 py-2 border-b border-slate-800 text-slate-200">
                  <span className="lang-en">Custom 404 page rendered when notFound() is invoked.</span>
                  <span className="lang-km">ទំព័រ 404 ផ្ទាល់ខ្លួន បង្ហាញឡើងនៅពេលហៅប្រើ notFound()។</span>
                </td>
                <td className="px-3 py-2 border-b border-slate-800 text-emerald-400 font-bold">
                  <span className="lang-en">Server Component</span>
                  <span className="lang-km">Server Component</span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-slate-800 font-mono font-bold text-sky-400">
                  route.ts
                </td>
                <td className="px-3 py-2 border-b border-slate-800 text-slate-200">
                  <span className="lang-en">RESTful API endpoint responding with standard Web Request/Response.</span>
                  <span className="lang-km">RESTful API endpoint ឆ្លើយតបជាមួយ Web Request/Response ស្តង់ដារ។</span>
                </td>
                <td className="px-3 py-2 border-b border-slate-800 text-emerald-400 font-bold">
                  <span className="lang-en">Server Route Handler</span>
                  <span className="lang-km">Server Route Handler</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Slide 72: Next.js Core Concepts
export function Slide72({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 28 — CHEAT SHEET &bull; SLIDE 72 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Next.js Core Concepts</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Comprehensive summary of core concepts mastered in this
                    course.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-blue-400  text-xs font-bold">
                    ROUTING &amp; RENDERING
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1 ">
                    <li>&bull; App Router folders</li>
                    <li>&bull; Server Components</li>
                    <li>&bull; "use client" boundaries</li>
                    <li>&bull; Streaming &amp; Suspense</li>
                  </ul>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-green-400  text-xs font-bold">
                    DATA &amp; MUTATIONS
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1 ">
                    <li>&bull; Server async/await</li>
                    <li>&bull; Direct PostgreSQL queries</li>
                    <li>&bull; Server Actions ("use server")</li>
                    <li>&bull; revalidatePath cache</li>
                  </ul>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <div className="text-purple-400  text-xs font-bold">
                    OPTIMIZATION &amp; SHIPPING
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1 ">
                    <li>&bull; next/image &amp; next/font</li>
                    <li>&bull; Metadata API &amp; SEO</li>
                    <li>&bull; Middleware auth guards</li>
                    <li>&bull; Vercel edge deployment</li>
                  </ul>
                </div>
              </div>
    </div>
  );
}

// Slide 73: Final Challenge: Build Your Own SaaS
export function Slide73({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 29 — FINAL CHALLENGE &bull; SLIDE 73 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
                    Final Challenge: Build Your Own SaaS
                  </h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Comprehensive project requirements for the TaskFlow
                    application.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3  text-xs">
                  <div className="p-3 bg-slate-900 border border-slate-800">
                    <div className="text-blue-400 font-bold mb-2">
                      TaskFlow SaaS Project Checklist
                    </div>
                    <ul className="space-y-1.5 text-slate-300">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span>User Authentication (Register &amp; Login)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span>Protected Dashboard layout with Middleware</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span>PostgreSQL Database integration via Neon</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span
                          >Server Actions for Creating &amp; Updating Tasks</span
                        >
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span>Search query &amp; pagination via searchParams</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span>Loading skeleton &amp; Error boundary recovery</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span>Production deployment to Vercel via GitHub</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                    <h4>
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      Put Theory Into Practice
                    </h4>
                    <p>
                      <span className="lang-en"
                        >Building TaskFlow will solidify your understanding of
                        real-world full-stack Next.js engineering. Complete this
                        project and add it to your portfolio!</span
                      ><span className="lang-km"
                        >ការអនុវត្តបង្កើត TaskFlow នឹងពង្រឹងសមត្ថភាព Full-Stack
                        Next.js របស់អ្នកឱ្យកាន់តែច្បាស់។
                        បញ្ចប់គម្រោងនេះដើម្បីដាក់ក្នុង Portfolio របស់អ្នក!</span
                      >
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 74: Development Roadmap
export function Slide74({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 29 — FINAL CHALLENGE &bull; SLIDE 74 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Development Roadmap</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Your complete full-stack web developer journey from
                    fundamentals to production.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="diagram-box flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">HTML &amp; CSS</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">JavaScript ES6+</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">React Basics</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">Next.js App Router</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">PostgreSQL &amp; Auth</div>
                  <span className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">&rarr;</span>
                  <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">Production Engineering</div>
                </div>
                <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                  <div>
                    <span className="lang-en"
                      >You have completed the entire Next.js App Router
                      curriculum. Continue building real applications,
                      contributing to open-source, and staying curious!</span
                    ><span className="lang-km"
                      >អ្នកបានបញ្ចប់មេរៀន Next.js App Router ទាំងស្រុងហើយ។
                      បន្តបង្កើត Project ជាក់ស្ដែង
                      និងអភិវឌ្ឍសមត្ថភាពជានិច្ច!</span
                    >
                  </div>
                </div>
              </div>
    </div>
  );
}

// Slide 75: Final Message
export function Slide75({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
                <div className="slide-title-wrap flex flex-col gap-1">
                  <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400"
                    >SECTION 29 — FINAL CHALLENGE &bull; SLIDE 75 / 75</span
                  >
                  <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Final Message</h2>
                  <p className="slide-subtitle text-[13px] text-slate-400 m-0">
                    Closing congratulations and call to action for production
                    builders.
                  </p>
                </div>
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">Next.js App Router</span>
              </div>

              <div
                className="flex flex-col items-center justify-center text-center py-6 gap-5"
              >
                <div
                  className="p-3 bg-blue-500/10 border border-blue-500/30 text-blue-400  text-xs"
                >
                  COURSE COMPLETE &bull; 75 / 75 SLIDES MASTERED
                </div>
                <blockquote
                  className="text-xl lg:text-2xl font-bold text-white max-w-2xl leading-relaxed"
                >
                  <span className="lang-en"
                    >"Learn the fundamentals. Understand the architecture. Build
                    real applications. Ship to production."</span
                  >
                  <span className="lang-km"
                    >"រៀនមូលដ្ឋានឱ្យរឹងមាំ។ យល់ពី Architecture។ បង្កើត
                    Application ពិតប្រាកដ។ ហើយ Deploy ទៅ Production។"</span
                  >
                </blockquote>
                <p className="text-slate-400 text-sm max-w-xl">
                  <span className="lang-en"
                    >Congratulations on completing the Next.js Mastery Course.
                    You now possess the architectural foundation and hands-on
                    skills to engineer world-class full-stack
                    applications.</span
                  >
                  <span className="lang-km"
                    >សូមអបអរសាទរដែលបានបញ្ចប់វគ្គសិក្សា Next.js Mastery!
                    ឥឡូវនេះអ្នកមានចំណេះដឹងរឹងមាំក្នុងការបង្កើត Full-Stack Web
                    Applications កម្រិតពិភពលោក។</span
                  >
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <button
                    
                    className="btn-nav px-5 py-2.5 text-sm flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span className="lang-en">Restart Presentation</span>
                    <span className="lang-km">ចាប់ផ្ដើមឡើងវិញ</span>
                  </button>
                </div>
              </div>
    </div>
  );
}

export const NEXTJS_META = {
  id: "nextjs",
  title: "Next.js: The React Framework for the Web",
  module: "MODULE 03",
  accent: "blue",
};

export const NEXTJS_SLIDES = [
  {
    id: 1,
    title: "Next.js: From React to Production",
    part: "SECTION 01 — WEB TO NEXT.JS",
    Component: Slide1,
  },
  {
    id: 2,
    title: "What You Will Learn",
    part: "SECTION 01 — WEB TO NEXT.JS",
    Component: Slide2,
  },
  {
    id: 3,
    title: "What Is Next.js?",
    part: "SECTION 01 — WEB TO NEXT.JS",
    Component: Slide3,
  },
  {
    id: 4,
    title: "React vs Next.js",
    part: "SECTION 01 — WEB TO NEXT.JS",
    Component: Slide4,
  },
  {
    id: 5,
    title: "When Should You Use Next.js?",
    part: "SECTION 01 — WEB TO NEXT.JS",
    Component: Slide5,
  },
  {
    id: 6,
    title: "Before Learning Next.js",
    part: "SECTION 02 — REQUIREMENTS",
    Component: Slide6,
  },
  {
    id: 7,
    title: "React Fundamentals You Need",
    part: "SECTION 02 — REQUIREMENTS",
    Component: Slide7,
  },
  {
    id: 8,
    title: "Install Requirements",
    part: "SECTION 03 — CREATE NEXT.JS PROJECT",
    Component: Slide8,
  },
  {
    id: 9,
    title: "Create a Next.js Application",
    part: "SECTION 03 — CREATE NEXT.JS PROJECT",
    Component: Slide9,
  },
  {
    id: 10,
    title: "Start Development Server",
    part: "SECTION 03 — CREATE NEXT.JS PROJECT",
    Component: Slide10,
  },
  {
    id: 11,
    title: "Next.js Project Structure",
    part: "SECTION 04 — PROJECT STRUCTURE",
    Component: Slide11,
  },
  {
    id: 12,
    title: "app/page.tsx",
    part: "SECTION 04 — PROJECT STRUCTURE",
    Component: Slide12,
  },
  {
    id: 13,
    title: "app/layout.tsx",
    part: "SECTION 04 — PROJECT STRUCTURE",
    Component: Slide13,
  },
  {
    id: 14,
    title: "File-System Routing",
    part: "SECTION 05 — ROUTING",
    Component: Slide14,
  },
  {
    id: 15,
    title: "Nested Routes",
    part: "SECTION 05 — ROUTING",
    Component: Slide15,
  },
  {
    id: 16,
    title: "Dynamic Routes",
    part: "SECTION 05 — ROUTING",
    Component: Slide16,
  },
  {
    id: 17,
    title: "Link Component",
    part: "SECTION 06 — NAVIGATION",
    Component: Slide17,
  },
  {
    id: 18,
    title: "Navigation Architecture",
    part: "SECTION 06 — NAVIGATION",
    Component: Slide18,
  },
  {
    id: 19,
    title: "What Is a Component?",
    part: "SECTION 07 — COMPONENTS",
    Component: Slide19,
  },
  {
    id: 20,
    title: "Props",
    part: "SECTION 07 — COMPONENTS",
    Component: Slide20,
  },
  {
    id: 21,
    title: "Component Architecture",
    part: "SECTION 07 — COMPONENTS",
    Component: Slide21,
  },
  {
    id: 22,
    title: "Server Components",
    part: "SECTION 08 — SERVER & CLIENT COMPONENTS",
    Component: Slide22,
  },
  {
    id: 23,
    title: "Client Components",
    part: "SECTION 08 — SERVER & CLIENT COMPONENTS",
    Component: Slide23,
  },
  {
    id: 24,
    title: "Server vs Client",
    part: "SECTION 08 — SERVER & CLIENT COMPONENTS",
    Component: Slide24,
  },
  {
    id: 25,
    title: "Choosing Server or Client",
    part: "SECTION 08 — SERVER & CLIENT COMPONENTS",
    Component: Slide25,
  },
  {
    id: 26,
    title: "Tailwind CSS in Next.js",
    part: "SECTION 09 — STYLING",
    Component: Slide26,
  },
  {
    id: 27,
    title: "Responsive UI",
    part: "SECTION 09 — STYLING",
    Component: Slide27,
  },
  {
    id: 28,
    title: "Fetching Data",
    part: "SECTION 10 — DATA FETCHING",
    Component: Slide28,
  },
  {
    id: 29,
    title: "Database Access",
    part: "SECTION 10 — DATA FETCHING",
    Component: Slide29,
  },
  {
    id: 30,
    title: "PostgreSQL & Cloud DBs",
    part: "SECTION 10 — DATA FETCHING",
    Component: Slide30,
  },
  {
    id: 31,
    title: "Rendering in Next.js",
    part: "SECTION 11 — RENDERING",
    Component: Slide31,
  },
  {
    id: 32,
    title: "Static vs Dynamic",
    part: "SECTION 11 — RENDERING",
    Component: Slide32,
  },
  {
    id: 33,
    title: "Streaming & Suspense",
    part: "SECTION 11 — RENDERING",
    Component: Slide33,
  },
  {
    id: 34,
    title: "loading.tsx",
    part: "SECTION 12 — LOADING & ERRORS",
    Component: Slide34,
  },
  {
    id: 35,
    title: "error.tsx",
    part: "SECTION 12 — LOADING & ERRORS",
    Component: Slide35,
  },
  {
    id: 36,
    title: "notFound() & not-found.tsx",
    part: "SECTION 12 — LOADING & ERRORS",
    Component: Slide36,
  },
  {
    id: 37,
    title: "Reading vs Changing Data",
    part: "SECTION 13 — SERVER ACTIONS / MUTATIONS",
    Component: Slide37,
  },
  {
    id: 38,
    title: "Server Action Concept",
    part: "SECTION 13 — SERVER ACTIONS / MUTATIONS",
    Component: Slide38,
  },
  {
    id: 39,
    title: "Form + Server Action",
    part: "SECTION 13 — SERVER ACTIONS / MUTATIONS",
    Component: Slide39,
  },
  {
    id: 40,
    title: "URL Search Parameters",
    part: "SECTION 14 — SEARCH & PAGINATION",
    Component: Slide40,
  },
  {
    id: 41,
    title: "Authentication Architecture",
    part: "SECTION 15 — AUTHENTICATION",
    Component: Slide41,
  },
  {
    id: 42,
    title: "Public vs Protected Routes",
    part: "SECTION 15 — AUTHENTICATION",
    Component: Slide42,
  },
  {
    id: 43,
    title: "Environment Variables",
    part: "SECTION 16 — ENVIRONMENT VARIABLES",
    Component: Slide43,
  },
  {
    id: 44,
    title: "Metadata API",
    part: "SECTION 17 — SEO & METADATA",
    Component: Slide44,
  },
  {
    id: 45,
    title: "SEO Best Practices",
    part: "SECTION 17 — SEO & METADATA",
    Component: Slide45,
  },
  {
    id: 46,
    title: "next/image",
    part: "SECTION 18 — IMAGES & FONTS",
    Component: Slide46,
  },
  {
    id: 47,
    title: "next/font",
    part: "SECTION 18 — IMAGES & FONTS",
    Component: Slide47,
  },
  {
    id: 48,
    title: "Next.js as Full Stack",
    part: "SECTION 19 — API / BACKEND",
    Component: Slide48,
  },
  {
    id: 49,
    title: "Route Handlers",
    part: "SECTION 19 — API / BACKEND",
    Component: Slide49,
  },
  {
    id: 50,
    title: "Security Basics",
    part: "SECTION 20 — SECURITY",
    Component: Slide50,
  },
  {
    id: 51,
    title: "Client vs Server Security",
    part: "SECTION 20 — SECURITY",
    Component: Slide51,
  },
  {
    id: 52,
    title: "Real Application Structure",
    part: "SECTION 21 — PROJECT ARCHITECTURE",
    Component: Slide52,
  },
  {
    id: 53,
    title: "TaskFlow Architecture",
    part: "SECTION 22 — BUILD A REAL PROJECT",
    Component: Slide53,
  },
  {
    id: 54,
    title: "TaskFlow Routes",
    part: "SECTION 22 — BUILD A REAL PROJECT",
    Component: Slide54,
  },
  {
    id: 55,
    title: "TaskFlow Database",
    part: "SECTION 22 — BUILD A REAL PROJECT",
    Component: Slide55,
  },
  {
    id: 56,
    title: "TaskFlow Data Flow",
    part: "SECTION 22 — BUILD A REAL PROJECT",
    Component: Slide56,
  },
  {
    id: 57,
    title: "Why Next.js Can Be Fast",
    part: "SECTION 23 — PERFORMANCE",
    Component: Slide57,
  },
  {
    id: 58,
    title: "Avoid Unnecessary Client Components",
    part: "SECTION 23 — PERFORMANCE",
    Component: Slide58,
  },
  {
    id: 59,
    title: "Production Build",
    part: "SECTION 24 — DEPLOYMENT",
    Component: Slide59,
  },
  {
    id: 60,
    title: "GitHub Workflow",
    part: "SECTION 24 — DEPLOYMENT",
    Component: Slide60,
  },
  {
    id: 61,
    title: "Vercel Deployment",
    part: "SECTION 24 — DEPLOYMENT",
    Component: Slide61,
  },
  {
    id: 62,
    title: "Develop -> Preview -> Ship",
    part: "SECTION 24 — DEPLOYMENT",
    Component: Slide62,
  },
  {
    id: 63,
    title: "Mistake: Everything Is Client",
    part: "SECTION 25 — COMMON MISTAKES",
    Component: Slide63,
  },
  {
    id: 64,
    title: "Mistake: Exposing Secrets",
    part: "SECTION 25 — COMMON MISTAKES",
    Component: Slide64,
  },
  {
    id: 65,
    title: "Mistake: No Server Validation",
    part: "SECTION 25 — COMMON MISTAKES",
    Component: Slide65,
  },
  {
    id: 66,
    title: "Mistake: Poor Folder Architecture",
    part: "SECTION 25 — COMMON MISTAKES",
    Component: Slide66,
  },
  {
    id: 67,
    title: "Debugging Next.js",
    part: "SECTION 26 — DEBUGGING",
    Component: Slide67,
  },
  {
    id: 68,
    title: "Common Errors & Fixes",
    part: "SECTION 26 — DEBUGGING",
    Component: Slide68,
  },
  {
    id: 69,
    title: "Modern Next.js Architecture",
    part: "SECTION 27 — FINAL ARCHITECTURE",
    Component: Slide69,
  },
  {
    id: 70,
    title: "Next.js Commands Cheat Sheet",
    part: "SECTION 28 — CHEAT SHEET",
    Component: Slide70,
  },
  {
    id: 71,
    title: "Next.js Special Files",
    part: "SECTION 28 — CHEAT SHEET",
    Component: Slide71,
  },
  {
    id: 72,
    title: "Next.js Core Concepts",
    part: "SECTION 28 — CHEAT SHEET",
    Component: Slide72,
  },
  {
    id: 73,
    title: "Final Challenge: Build Your Own SaaS",
    part: "SECTION 29 — FINAL CHALLENGE",
    Component: Slide73,
  },
  {
    id: 74,
    title: "Development Roadmap",
    part: "SECTION 29 — FINAL CHALLENGE",
    Component: Slide74,
  },
  {
    id: 75,
    title: "Final Message",
    part: "SECTION 29 — FINAL CHALLENGE",
    Component: Slide75,
  },
];
