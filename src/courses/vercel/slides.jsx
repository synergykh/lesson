import React from "react";
import { Info, ChevronRight, AlertTriangle } from "lucide-react";

// Slide 1: MODULE 06 • PRODUCTION INFRASTRUCTURE
export function Slide1({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="title-hero-grid grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-4 items-center">
              <div>
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="s1_badge">MODULE 06 • PRODUCTION INFRASTRUCTURE</span>
                <h1 className="title-main-h1 text-3xl md:text-4xl font-extrabold text-white m-0 mb-1 leading-tight" data-i18n="s1_title">Vercel &amp; Web Deployment<br /><span className="title-accent text-blue-400 font-extrabold">From Zero to Production Masterclass</span></h1>
                <p className="title-tagline text-sm text-slate-300 italic m-0 mb-3" data-i18n="s1_tagline">“Deploy, scale, and maintain high-performance fullstack web applications”</p>
                <div className="slide-stack flex flex-col gap-3">
                  <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed rounded">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <div data-i18n="s1_callout">A comprehensive developer guide from setting up your Vercel account to deploying Next.js with Neon PostgreSQL and custom domains.</div>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <button className="btn-cta-primary inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 border border-blue-600 text-white text-xs font-bold cursor-pointer transition-colors no-underline rounded" id="btn-start-course" onClick={onStart}>
                      <span data-i18n="ui_start">Start Course</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs text-slate-300">or press <kbd className="kbd inline-block px-1.5 py-0.5  text-[11px] font-bold bg-slate-800 border border-slate-700 text-slate-200 shadow-sm">Space</kbd> / <kbd className="kbd inline-block px-1.5 py-0.5  text-[11px] font-bold bg-slate-800 border border-slate-700 text-slate-200 shadow-sm">→</kbd></span>
                  </div>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                  <div className="terminal-dots flex items-center gap-1.5"><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span></div>
                  <span className="terminal-title text-[11px] text-slate-400 font-semibold">bash — production pipeline</span>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
                  <div><span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span> <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">pnpm dlx vercel deploy --prod</span></div>
                  <div className="term-out text-slate-300  text-xs">▲ Vercel CLI 39.x.x</div>
                  <div className="term-out text-slate-300  text-xs">✓ Linking to acme-projects/taskflow</div>
                  <div className="term-out text-slate-300  text-xs">✓ Uploading project files (1.2 MB)</div>
                  <div className="term-out text-slate-300  text-xs">✓ Production deployment created</div>
                  <div className="term-success">● Production: https://taskflow.vercel.app [38s]</div>
                  <div className="term-comment"># Global Edge CDN • SSL Active • Database Connected</div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 2: What is Deployment?
export function Slide2({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 01 • CONCEPTS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s2_title">What is Deployment?</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s2_sub">Transitioning code from your local computer to the global internet</p>
              </div>
              <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">CORE CONCEPT</span>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Local Development (localhost:3000)</h4>
                <p>Runs solely on your machine inside Node.js. Only accessible by you via local loopback. Stops when your computer closes or terminal shuts down.</p>
                <div className="code-block bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">$ pnpm run dev<br />Ready in 1200ms on http://localhost:3000</div>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Production Deployment (Public Internet)</h4>
                <p>Packaged, optimized, and hosted on high-availability cloud servers around the world. Accessible 24/7/365 by millions of users with automated HTTPS.</p>
                <div className="code-block bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">Production URL: https://taskflow.com<br />Response time: 24ms from Global Edge Network</div>
              </div>
            </div>
    </div>
  );
}

// Slide 3: The Production Deployment Pipeline
export function Slide3({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 01 • ARCHITECTURE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s3_title">The Production Deployment Pipeline</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s3_sub">Architectural path from developer code to global visitors</p>
              </div>
              <span className="tag-badge flow text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">ARCHITECTURE</span>
            </div>
            <div className="flow-diagram flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">💻</div>
                <div className="flow-step-name text-xs font-bold text-slate-200">1. Developer</div>
                <div className="flow-step-desc text-[11px] text-slate-400">Writes code &amp; tests locally</div>
              </div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">🐙</div>
                <div className="flow-step-name text-xs font-bold text-slate-200">2. GitHub Repo</div>
                <div className="flow-step-desc text-[11px] text-slate-400">Version control &amp; webhooks</div>
              </div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">▲</div>
                <div className="flow-step-name text-xs font-bold text-slate-200">3. Vercel Build</div>
                <div className="flow-step-desc text-[11px] text-slate-400">Compile, bundle, optimize</div>
              </div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">🚀</div>
                <div className="flow-step-name text-xs font-bold text-slate-200">4. Production</div>
                <div className="flow-step-desc text-[11px] text-slate-400">Immutable edge deployment</div>
              </div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">🌐</div>
                <div className="flow-step-name text-xs font-bold text-slate-200">5. Domain &amp; SSL</div>
                <div className="flow-step-desc text-[11px] text-slate-400">Custom domain + HTTPS</div>
              </div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">👥</div>
                <div className="flow-step-name text-xs font-bold text-slate-200">6. Global Users</div>
                <div className="flow-step-desc text-[11px] text-slate-400">Fast page loads worldwide</div>
              </div>
            </div>
    </div>
  );
}

// Slide 4: Static Websites vs Fullstack Applications
export function Slide4({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 01 • EXECUTION MODELS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s4_title">Static Websites vs Fullstack Applications</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s4_sub">Understanding execution models: Static Files, SSR, and Serverless APIs</p>
              </div>
            </div>
            <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Static Sites (SSG / HTML)</h4>
                <p>Pure HTML, CSS, and JS generated ahead of time during build. Served directly from Edge CDN storage with zero server computation.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Server-Rendered (SSR)</h4>
                <p>HTML is rendered on-demand for every visitor request via Serverless Functions. Ideal for dynamic dashboards and personalized feeds.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Serverless APIs &amp; Actions</h4>
                <p>Isolated backend compute executing on demand without maintaining continuous servers. Scales from 0 to thousands of concurrent requests.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 5: What is Vercel?
export function Slide5({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 02 • PLATFORM OVERVIEW</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s5_title">What is Vercel?</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s5_sub">The native cloud platform for Next.js and the modern web</p>
              </div>
              <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">VERCEL</span>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Engineered by the Creators of Next.js</h4>
                <p>Vercel created and maintains Next.js. The platform is purpose-built to extract maximum performance from the App Router, Server Components, and Server Actions.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Zero Server Management</h4>
                <p>No configuring Nginx, Ubuntu servers, Docker files, or PM2 process managers. Push your code to Git, and Vercel handles all infrastructure automatically.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 6: Core Platform Capabilities
export function Slide6({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 02 • CORE FEATURES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s6_title">Core Platform Capabilities</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s6_sub">Git automation, Global Edge Network, Serverless functions, and instant previews</p>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>1. Continuous Git Deployment</h4>
                <p>Automatic builds on every <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">git push</code>. Pull requests generate live staging preview URLs instantly for team review.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>2. Global Edge Network (CDN)</h4>
                <p>Static assets and cached responses distributed to 300+ Point of Presence (PoP) locations across the globe for sub-50ms latency.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>3. Serverless Compute</h4>
                <p>Backend Route Handlers and Server Actions spin up instantly in response to requests, scaling to zero when inactive.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>4. Automated Security &amp; SSL</h4>
                <p>Free automated Let's Encrypt TLS certificates, DDoS mitigation, and enterprise-grade DNS infrastructure.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 7: What Happens During a Vercel Build?
export function Slide7({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 02 • BUILD LIFECYCLE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s7_title">What Happens During a Vercel Build?</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s7_sub">Behind the scenes of containerized build runners and artifact generation</p>
              </div>
            </div>
            <div className="flow-diagram flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">1</div><div className="flow-step-name text-xs font-bold text-slate-200">Clone</div><div className="flow-step-desc text-[11px] text-slate-400">Pulls repo commit</div></div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">2</div><div className="flow-step-name text-xs font-bold text-slate-200">Dependencies</div><div className="flow-step-desc text-[11px] text-slate-400">pnpm install</div></div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">3</div><div className="flow-step-name text-xs font-bold text-slate-200">Compile</div><div className="flow-step-desc text-[11px] text-slate-400">next build</div></div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">4</div><div className="flow-step-name text-xs font-bold text-slate-200">Distribute</div><div className="flow-step-desc text-[11px] text-slate-400">Upload to CDN</div></div>
            </div>
    </div>
  );
}

// Slide 8: Supported Frameworks on Vercel
export function Slide8({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 02 • ECOSYSTEM</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s8_title">Supported Frameworks on Vercel</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s8_sub">First-class support for Next.js, Astro, Remix, SvelteKit, Vite, and static HTML</p>
              </div>
            </div>
            <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Next.js (React)</h4><p>Native integration with full App Router and Server Components support.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Astro &amp; SvelteKit</h4><p>Zero-configuration deployment for high-performance content sites.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Vite &amp; Static Web</h4><p>Instant deployments for React SPA, Vue, vanilla HTML/CSS/JS web apps.</p></div>
            </div>
    </div>
  );
}

// Slide 9: Creating Your Vercel Account
export function Slide9({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 03 • SETUP</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s9_title">Creating Your Vercel Account</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s9_sub">Step-by-step signup via GitHub integration on vercel.com</p>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>1. Visit Official Site</h4>
                <p>Navigate to <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">https://vercel.com/</code> and click <strong>Sign Up</strong>.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>2. Select Continue with GitHub</h4>
                <p>Signing in with GitHub ensures automatic repository access and smooth continuous deployment.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>3. Authorize Vercel App</h4>
                <p>Grant permission to read repositories. Choose "All repositories" or select specific project repositories.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>4. Complete Onboarding</h4>
                <p>Confirm your phone verification if prompted and set your developer display name.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 10: Personal Account vs Team Workspace
export function Slide10({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 03 • ACCOUNTS &amp; TEAMS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s10_title">Personal Account vs Team Workspace</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s10_sub">Understanding account scopes, team collaboration, and permissions</p>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Hobby (Personal Account)</h4>
                <p>Free tier for personal projects, portfolios, non-commercial experiments, and educational learning. Unlimited personal projects.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Pro (Team Workspace)</h4>
                <p>Paid per-seat tier for commercial businesses, agencies, multi-developer collaboration, password-protected previews, and custom SLA.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 11: Navigating the Vercel Dashboard
export function Slide11({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 03 • DASHBOARD TOUR</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s11_title">Navigating the Vercel Dashboard</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s11_sub">Overview of Projects, Deployments, Domains, Integrations, and Analytics</p>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Overview &amp; Projects</h4><p>List of all deployed applications with live status, production domains, and latest commit info.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Project Settings</h4><p>Configure custom domains, environment variables, Git branch tracking, and build command overrides.</p></div>
            </div>
    </div>
  );
}

// Slide 12: Preparing a Next.js Project for Deployment
export function Slide12({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 04 • READINESS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s12_title">Preparing a Next.js Project for Deployment</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s12_sub">Verifying package.json scripts, dependencies, and local build integrity</p>
              </div>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span className="terminal-title text-[11px] text-slate-400 font-semibold">package.json — verify standard build script</span></div>
              <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
                <div>&#123;</div>
                <div>  "name": "taskflow",</div>
                <div>  "scripts": &#123;</div>
                <div>    "dev": "next dev",</div>
                <div>    <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">"build": "next build",</span></div>
                <div>    "start": "next start",</div>
                <div>    "lint": "next lint"</div>
                <div>  &#125;</div>
                <div>&#125;</div>
              </div>
            </div>
    </div>
  );
}

// Slide 13: Local Build Verification
export function Slide13({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 04 • LOCAL VALIDATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s13_title">Local Build Verification</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s13_sub">Catching compilation and type errors before pushing to GitHub</p>
              </div>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span className="terminal-title text-[11px] text-slate-400 font-semibold">bash — run local production build</span></div>
              <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
                <div><span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span> <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">pnpm run build</span></div>
                <div className="term-out text-slate-300  text-xs">▲ Next.js 15.0.0</div>
                <div className="term-out text-slate-300  text-xs">✓ Generating static pages (6/6)</div>
                <div className="term-success">✓ Finalized build artifact in .next/</div>
              </div>
            </div>
    </div>
  );
}

// Slide 14: Environment Variables Audit
export function Slide14({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 04 • SECURITY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s14_title">Environment Variables Audit</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s14_sub">Keeping secrets in .env.local and out of version control</p>
              </div>
              <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">SECURITY RULE</span>
            </div>
            <div className="alert-callout warning flex items-start gap-2.5 p-3 border border-amber-500/30 bg-amber-500/10 text-amber-300 text-[12.5px] leading-relaxed rounded">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <div><strong>NEVER COMMIT .env.local TO GIT!</strong> Verify that <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">.env*.local</code> is listed in your <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">.gitignore</code> file. Database passwords committed to GitHub can be stolen by scrapers within seconds.</div>
            </div>
    </div>
  );
}

// Slide 15: Git Repository Health Check
export function Slide15({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 04 • GIT HEALTH</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s15_title">Git Repository Health Check</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s15_sub">Clean working tree, .gitignore rules, and production branch alignment</p>
              </div>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span className="terminal-title text-[11px] text-slate-400 font-semibold">bash — inspect git status</span></div>
              <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
                <div><span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span> <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">git status</span></div>
                <div className="term-out text-slate-300  text-xs">On branch main</div>
                <div className="term-success">nothing to commit, working tree clean</div>
              </div>
            </div>
    </div>
  );
}

// Slide 16: Creating a GitHub Repository
export function Slide16({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 05 • GITHUB</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s16_title">Creating a GitHub Repository</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s16_sub">Setting up a public or private repository for project hosting</p>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Private vs Public Repositories</h4>
                <p>Private repositories keep your code private while allowing Vercel to build and deploy. Public repositories allow open source visibility.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Do NOT Initialize with README</h4>
                <p>If you already have a local project, create an empty GitHub repository without adding a README, license, or gitignore file online.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 17: Pushing Code to GitHub
export function Slide17({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 05 • PUSHING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s17_title">Pushing Code to GitHub</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s17_sub">Connecting local repository to remote origin with git push</p>
              </div>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span className="terminal-title text-[11px] text-slate-400 font-semibold">bash — link remote &amp; push</span></div>
              <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
                <div><span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span> <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">git remote add origin https://github.com/your-username/taskflow.git</span></div>
                <div><span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span> <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">git branch -M main</span></div>
                <div><span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span> <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">git push -u origin main</span></div>
                <div className="term-success">Branch 'main' set up to track remote branch 'main' from 'origin'.</div>
              </div>
            </div>
    </div>
  );
}

// Slide 18: Verifying Repository on GitHub
export function Slide18({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 05 • AUDIT</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s18_title">Verifying Repository on GitHub</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s18_sub">Checking branches, commits, and ensuring no secrets leaked</p>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>1. Inspect File Tree</h4><p>Ensure <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">package.json</code>, <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">app/</code> directory, and source files are at the root. Confirm <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">.env.local</code> is absent.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>2. Confirm Default Branch</h4><p>Confirm the default branch is <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">main</code> in GitHub repository Settings -&gt; Branches.</p></div>
            </div>
    </div>
  );
}

// Slide 19: Importing a Project into Vercel
export function Slide19({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 06 • VERCEL IMPORT</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s19_title">Importing a Project into Vercel</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s19_sub">Connecting your GitHub account and selecting the repository</p>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Step 1: Add New... -&gt; Project</h4><p>Click the black <strong>Add New...</strong> button in your Vercel Dashboard and select <strong>Project</strong>.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Step 2: Import Git Repository</h4><p>Locate your <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">taskflow</code> repository in the list and click the blue <strong>Import</strong> button.</p></div>
            </div>
    </div>
  );
}

// Slide 20: Framework Detection & Root Directory
export function Slide20({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 06 • CONFIGURATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s20_title">Framework Detection &amp; Root Directory</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s20_sub">Automatic Next.js detection and monorepo path configuration</p>
              </div>
            </div>
            <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
              <h4>Framework Preset: Next.js</h4>
              <p>Vercel reads your <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">package.json</code> dependencies and automatically selects <strong>Next.js</strong>. If your app is inside a subfolder (monorepo), click <strong>Edit</strong> next to Root Directory and pick the folder.</p>
            </div>
    </div>
  );
}

// Slide 21: Build and Output Settings
export function Slide21({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 06 • BUILD OVERRIDES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s21_title">Build and Output Settings</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s21_sub">Understanding default presets and custom build commands</p>
              </div>
            </div>
            <table className="clean-table w-full border-collapse text-xs border border-slate-800">
              <thead><tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Setting</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Default Preset</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">When to Override</th></tr></thead>
              <tbody>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Build Command</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">next build</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">When running Prisma generate or custom scripts first</td></tr>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Output Directory</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">.next</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Managed automatically by Next.js preset</td></tr>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Install Command</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">pnpm install</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">When using custom package flags</td></tr>
              </tbody>
            </table>
    </div>
  );
}

// Slide 22: Configuring Initial Environment Variables
export function Slide22({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 06 • INITIAL SECRETS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s22_title">Configuring Initial Environment Variables</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s22_sub">Supplying production keys before triggering the first build</p>
              </div>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span className="terminal-title text-[11px] text-slate-400 font-semibold">Vercel UI — Environment Variables Section</span></div>
              <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
                <div>Key: <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">DATABASE_URL</span></div>
                <div>Value: <span className="term-out text-slate-300  text-xs">postgresql://neondb_owner:***@ep-mute-123.neon.tech/neondb?sslmode=require</span></div>
                <div>Target Environments: <span className="term-success">Production, Preview, Development</span></div>
              </div>
            </div>
    </div>
  );
}

// Slide 23: The First Deployment Lifecycle
export function Slide23({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 07 • EXECUTION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s23_title">The First Deployment Lifecycle</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s23_sub">From git push to active URL in under 60 seconds</p>
              </div>
              <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">READY TO DEPLOY</span>
            </div>
            <div className="flow-diagram flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">📦</div><div className="flow-step-name text-xs font-bold text-slate-200">Queued</div><div className="flow-step-desc text-[11px] text-slate-400">Runner allocated</div></div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">⚙️</div><div className="flow-step-name text-xs font-bold text-slate-200">Building</div><div className="flow-step-desc text-[11px] text-slate-400">Compiling pages</div></div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">🌐</div><div className="flow-step-name text-xs font-bold text-slate-200">Deploying</div><div className="flow-step-desc text-[11px] text-slate-400">Edge routing</div></div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">✨</div><div className="flow-step-name text-xs font-bold text-slate-200">Ready</div><div className="flow-step-desc text-[11px] text-slate-400">Live on vercel.app</div></div>
            </div>
    </div>
  );
}

// Slide 24: Inspecting Live Build Logs
export function Slide24({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 07 • LOGS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s24_title">Inspecting Live Build Logs</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s24_sub">Real-time streaming output, dependency caching, and build steps</p>
              </div>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span className="terminal-title text-[11px] text-slate-400 font-semibold">Vercel Build Inspector (Streaming)</span></div>
              <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
                <div>[14:20:01.120] Running build in Washington, D.C., USA (East) – iad1</div>
                <div>[14:20:02.430] Cloning github.com/acme/taskflow (Branch: main, Commit: 8f2a1b9)</div>
                <div>[14:20:04.100] Running "pnpm install"</div>
                <div>[14:20:07.500] Running "pnpm run build"</div>
                <div>[14:20:14.200] ✓ Compiled successfully in 6.7s</div>
                <div>[14:20:16.800] Created deployment: taskflow-8f2a1b9-acme.vercel.app</div>
              </div>
            </div>
    </div>
  );
}

// Slide 25: Deployment URLs & Production Aliases
export function Slide25({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 07 • DOMAINS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s25_title">Deployment URLs &amp; Production Aliases</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s25_sub">Understanding vercel.app domains and canonical aliases</p>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>1. Immutable Deployment URL</h4>
                <p><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">https://taskflow-8f2a1b9-acme.vercel.app</code></p>
                <p>Specific to this exact commit. Will permanently point to this build and never changes.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>2. Production Canonical Alias</h4>
                <p><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">https://taskflow.vercel.app</code></p>
                <p>Always points to the latest successful release of your production branch (<code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">main</code>).</p>
              </div>
            </div>
    </div>
  );
}

// Slide 26: Post-Deployment Verification
export function Slide26({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 07 • VERIFICATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s26_title">Post-Deployment Verification</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s26_sub">Testing client hydration, API routes, and network requests</p>
              </div>
            </div>
            <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>1. Inspect Console</h4><p>Open browser DevTools (F12) and ensure zero unhandled hydration errors.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>2. Test Server API</h4><p>Trigger a form submission or API fetch to ensure backend Route Handlers return 200 OK.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>3. Network Tab</h4><p>Confirm assets return <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">x-vercel-cache: HIT</code> for instant global edge delivery.</p></div>
            </div>
    </div>
  );
}

// Slide 27: Preview Deployments vs Production
export function Slide27({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 08 • STAGING CONCEPTS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s27_title">Preview Deployments vs Production</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s27_sub">Isolated staging environments for every branch and pull request</p>
              </div>
              <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">CORE WORKFLOW</span>
            </div>
            <table className="clean-table w-full border-collapse text-xs border border-slate-800">
              <thead><tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Feature</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Preview Deployment</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Production Deployment</th></tr></thead>
              <tbody>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Triggered By</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Git feature branches or Pull Requests</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Merged to <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">main</code> branch</td></tr>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">URL Format</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">taskflow-git-feature-acme.vercel.app</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">taskflow.com</code> / <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">taskflow.vercel.app</code></td></tr>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Environment Variables</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Preview environment scope</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Production environment scope</td></tr>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Traffic</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Internal team, QA testers, reviewers</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Real live public users</td></tr>
              </tbody>
            </table>
    </div>
  );
}

// Slide 28: Git Branching Workflow for Vercel
export function Slide28({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 08 • GITFLOW</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s28_title">Git Branching Workflow for Vercel</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s28_sub">Main branch for production, feature branches for preview testing</p>
              </div>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span className="terminal-title text-[11px] text-slate-400 font-semibold">bash — feature branch to preview</span></div>
              <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
                <div><span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span> <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">git checkout -b feature/user-auth</span></div>
                <div><span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span> <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">git commit -am "feat: implement session auth"</span></div>
                <div><span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span> <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">git push -u origin feature/user-auth</span></div>
                <div className="term-success">▲ Vercel created preview deployment: https://taskflow-git-user-auth.vercel.app</div>
              </div>
            </div>
    </div>
  );
}

// Slide 29: Pull Request Previews & Team Feedback
export function Slide29({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 08 • COLLABORATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s29_title">Pull Request Previews &amp; Team Feedback</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s29_sub">Automated Vercel bot comments, preview URLs, and visual inspection</p>
              </div>
            </div>
            <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
              <h4>Vercel Bot on GitHub</h4>
              <p>When you open a Pull Request, the Vercel GitHub bot automatically comments on the PR with the live deployment URL, inspection link, and performance summary. Team members can test the feature before merging!</p>
            </div>
    </div>
  );
}

// Slide 30: Promoting Previews to Production
export function Slide30({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 08 • PROMOTION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s30_title">Promoting Previews to Production</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s30_sub">Instant traffic switch with zero rebuilds and zero downtime</p>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Merge PR into Main</h4><p>Merging the Pull Request automatically triggers a production build and moves the production domain alias seamlessly.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Dashboard Instant Promote</h4><p>You can also promote any preview build to production directly with one click in the Vercel Deployments dashboard.</p></div>
            </div>
    </div>
  );
}

// Slide 31: Automatic Deployments via Git Push
export function Slide31({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 09 • AUTOMATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s31_title">Automatic Deployments via Git Push</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s31_sub">How webhooks trigger instant builds whenever code is pushed</p>
              </div>
            </div>
            <div className="flow-diagram flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">1</div><div className="flow-step-name text-xs font-bold text-slate-200">git push</div><div className="flow-step-desc text-[11px] text-slate-400">Developer terminal</div></div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">2</div><div className="flow-step-name text-xs font-bold text-slate-200">GitHub Webhook</div><div className="flow-step-desc text-[11px] text-slate-400">Sends payload to Vercel</div></div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">3</div><div className="flow-step-name text-xs font-bold text-slate-200">Vercel Build</div><div className="flow-step-desc text-[11px] text-slate-400">Build runner starts</div></div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">4</div><div className="flow-step-name text-xs font-bold text-slate-200">Live URL</div><div className="flow-step-desc text-[11px] text-slate-400">Updated in ~30s</div></div>
            </div>
    </div>
  );
}

// Slide 32: GitHub Commit Status Checks
export function Slide32({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 09 • CHECKS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s32_title">GitHub Commit Status Checks</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s32_sub">Vercel deployment checks integrated into GitHub Pull Requests</p>
              </div>
            </div>
            <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
              <h4>Branch Protection &amp; Quality Gates</h4>
              <p>You can configure GitHub branch protection rules to prevent merging if the Vercel build fails. This guarantees broken code never reaches your live users.</p>
            </div>
    </div>
  );
}

// Slide 33: Deploy Hooks for External Triggers
export function Slide33({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 09 • DEPLOY HOOKS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s33_title">Deploy Hooks for External Triggers</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s33_sub">Triggering builds from CMS publishing events and webhooks</p>
              </div>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span className="terminal-title text-[11px] text-slate-400 font-semibold">curl — trigger deployment via HTTP POST</span></div>
              <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
                <div><span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span> <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_xxx/token_yyy</span></div>
                <div className="term-success">&#123;"job":&#123;"id":"job_123","state":"QUEUED","createdAt":1700000000&#125;&#125;</div>
              </div>
            </div>
    </div>
  );
}

// Slide 34: Environment Variables Mental Model
export function Slide34({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 10 • CONFIGURATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s34_title">Environment Variables Mental Model</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s34_sub">Separating configuration from code across development stages</p>
              </div>
              <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">12-FACTOR APP</span>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Code Remains Identical</h4>
                <p>Your source code never hardcodes database URLs, Stripe API keys, or secret tokens. The application reads from <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">process.env</code> at runtime.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Cloud Injected at Build &amp; Runtime</h4>
                <p>Vercel securely injects the encrypted variables into the build environment and serverless execution containers.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 35: Environment Scope: Dev, Preview, Production
export function Slide35({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 10 • SCOPING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s35_title">Environment Scope: Dev, Preview, Production</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s35_sub">Targeting distinct databases and API keys per deployment stage</p>
              </div>
            </div>
            <table className="clean-table w-full border-collapse text-xs border border-slate-800">
              <thead><tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Target Scope</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Usage</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Example DATABASE_URL</th></tr></thead>
              <tbody>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Production</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Live <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">main</code> branch</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">...neon.tech/neondb_prod</code></td></tr>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Preview</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">PRs and feature branches</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">...neon.tech/neondb_preview</code></td></tr>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Development</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Pulled locally with Vercel CLI</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">...neon.tech/neondb_dev</code></td></tr>
              </tbody>
            </table>
    </div>
  );
}

// Slide 36: The NEXT_PUBLIC_* Security Boundary
export function Slide36({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 10 • SECURITY BOUNDARY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s36_title">The NEXT_PUBLIC_* Security Boundary</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s36_sub">Preventing client bundle leakage of private server secrets</p>
              </div>
              <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">CRITICAL</span>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Server-Only (Secret)</h4>
                <p><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">DATABASE_URL</code>, <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">STRIPE_SECRET_KEY</code></p>
                <p>Never prefixed with NEXT_PUBLIC_. Only accessible inside Server Components, Route Handlers, and Server Actions.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Client-Exposed (Public)</h4>
                <p><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">NEXT_PUBLIC_APP_NAME</code>, <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">NEXT_PUBLIC_MAP_KEY</code></p>
                <p>Inlined directly into browser JavaScript bundle during build. Accessible by anyone viewing website source.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 37: Managing Variables in Vercel Dashboard
export function Slide37({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 10 • DASHBOARD CONFIG</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s37_title">Managing Variables in Vercel Dashboard</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s37_sub">Adding, editing, masking, and bulk uploading environment variables</p>
              </div>
            </div>
            <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
              <h4>Project Settings -&gt; Environment Variables</h4>
              <p>You can paste raw .env contents directly into the key-value editor. Choose whether each variable applies to Production, Preview, Development, or all three.</p>
            </div>
    </div>
  );
}

// Slide 38: The Redeployment Requirement
export function Slide38({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 10 • REDEPLOYMENT</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s38_title">The Redeployment Requirement</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s38_sub">Why updated environment variables require a new deployment</p>
              </div>
              <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">IMPORTANT</span>
            </div>
            <div className="alert-callout warning flex items-start gap-2.5 p-3 border border-amber-500/30 bg-amber-500/10 text-amber-300 text-[12.5px] leading-relaxed rounded">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <div><strong>Updating an environment variable does NOT automatically update existing deployments!</strong> Next.js inlines variables during compilation. You must trigger a <strong>Redeploy</strong> in the dashboard or push a new commit to apply updated variables.</div>
            </div>
    </div>
  );
}

// Slide 39: Next.js App Router on Vercel
export function Slide39({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 11 • APP ROUTER</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s39_title">Next.js App Router on Vercel</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s39_sub">Server Components, Client Components, and Edge routing</p>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Server Components (RSC)</h4>
                <p>Default in App Router. Renders on Vercel serverless compute. Zero client JavaScript bundle overhead. Fetches database directly.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Client Components ('use client')</h4>
                <p>Handles browser interactivity, state, event listeners, and hooks (useState, useEffect). Hydrated on the user's browser.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 40: Static vs Dynamic Rendering Modes
export function Slide40({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 11 • RENDERING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s40_title">Static vs Dynamic Rendering Modes</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s40_sub">Controlling cache headers and server rendering behavior</p>
              </div>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span className="terminal-title text-[11px] text-slate-400 font-semibold">app/dashboard/page.tsx — control dynamic rendering</span></div>
              <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
                <div><span className="term-comment">// Force dynamic server-rendering on every visitor request</span></div>
                <div><span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">export const dynamic = 'force-dynamic';</span></div>
                <div><span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">export const revalidate = 0;</span></div>
              </div>
            </div>
    </div>
  );
}

// Slide 41: Server Actions & Route Handlers
export function Slide41({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 11 • SERVER ACTIONS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s41_title">Server Actions &amp; Route Handlers</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s41_sub">Executing secure backend mutations on serverless functions</p>
              </div>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span className="terminal-title text-[11px] text-slate-400 font-semibold">app/actions.ts — server action running on Vercel</span></div>
              <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
                <div><span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">'use server';</span></div>
                <div>import &#123; sql &#125; from '@vercel/postgres';</div>
                <div>export async function createTask(formData: FormData) &#123;</div>
                <div>  const title = formData.get('title');</div>
                <div>  await sql`INSERT INTO tasks (title) VALUES ($&#123;title&#125;)`;</div>
                <div>&#125;</div>
              </div>
            </div>
    </div>
  );
}

// Slide 42: Image Optimization & Global Edge
export function Slide42({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 11 • OPTIMIZATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s42_title">Image Optimization &amp; Global Edge</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s42_sub">Next.js image resizing, WebP conversion, and CDN distribution</p>
              </div>
            </div>
            <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
              <h4>next/image on Vercel Edge</h4>
              <p>Images are automatically resized, compressed into modern WebP/AVIF formats, and cached on Vercel Edge Network PoPs closest to each visitor. This saves bandwidth and achieves 100/100 Lighthouse performance.</p>
            </div>
    </div>
  );
}

// Slide 43: Fullstack Architecture: Vercel + Neon
export function Slide43({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 12 • FULLSTACK</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s43_title">Fullstack Architecture: Vercel + Neon</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s43_sub">Serverless web frontend connecting to serverless PostgreSQL</p>
              </div>
              <span className="tag-badge flow text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">ARCHITECTURE</span>
            </div>
            <div className="flow-diagram flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">🌐</div><div className="flow-step-name text-xs font-bold text-slate-200">Browser</div><div className="flow-step-desc text-[11px] text-slate-400">User request</div></div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">▲</div><div className="flow-step-name text-xs font-bold text-slate-200">Vercel Edge</div><div className="flow-step-desc text-[11px] text-slate-400">Next.js Serverless</div></div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">🐘</div><div className="flow-step-name text-xs font-bold text-slate-200">Neon Postgres</div><div className="flow-step-desc text-[11px] text-slate-400">Connection Pooler</div></div>
            </div>
    </div>
  );
}

// Slide 44: Obtaining Neon Connection Strings
export function Slide44({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 12 • CONNECTION STRING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s44_title">Obtaining Neon Connection Strings</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s44_sub">Pooled connections with sslmode=require for serverless queries</p>
              </div>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span className="terminal-title text-[11px] text-slate-400 font-semibold">Neon Dashboard — Pooled Connection String</span></div>
              <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
                <div><span className="term-comment"># Use the Pooled connection mode (-pooler suffix in host)</span></div>
                <div><span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">DATABASE_URL="postgresql://neondb_owner:***@ep-mute-wave-123456-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"</span></div>
              </div>
            </div>
    </div>
  );
}

// Slide 45: Configuring DATABASE_URL in Vercel
export function Slide45({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 12 • CONFIGURATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s45_title">Configuring DATABASE_URL in Vercel</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s45_sub">Setting up separate database instances for preview and production</p>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Production Scope</h4><p>Target your main production database branch in Neon.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Preview Scope</h4><p>Target a separate Neon branch to test migrations without endangering live data.</p></div>
            </div>
    </div>
  );
}

// Slide 46: Database Migration Strategy
export function Slide46({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 12 • MIGRATIONS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s46_title">Database Migration Strategy</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s46_sub">Safely applying schema migrations before application deployment</p>
              </div>
            </div>
            <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed rounded">
              <Info className="w-4 h-4 shrink-0 mt-0.5" />
              <div>Always execute database migrations (e.g. <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">pnpm prisma migrate deploy</code> or <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">pnpm drizzle-kit migrate</code>) before or during the build phase so new database columns exist when your new code runs!</div>
            </div>
    </div>
  );
}

// Slide 47: Custom Domain Mental Model
export function Slide47({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 13 • DOMAINS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s47_title">Custom Domain Mental Model</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s47_sub">Apex domains vs subdomains and how DNS routing operates</p>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Apex / Root Domain</h4>
                <p><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">taskflow.com</code> (no prefix before root name)</p>
                <p>Requires an <strong>A Record</strong> pointing to Vercel's Anycast IP.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Subdomain</h4>
                <p><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">app.taskflow.com</code> or <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">www.taskflow.com</code></p>
                <p>Requires a <strong>CNAME Record</strong> pointing to Vercel's DNS alias.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 48: DNS Record Types: A vs CNAME
export function Slide48({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 13 • DNS RECORDS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s48_title">DNS Record Types: A vs CNAME</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s48_sub">Configuring 76.76.21.21 for root and cname.vercel-dns.com for subdomains</p>
              </div>
            </div>
            <table className="clean-table w-full border-collapse text-xs border border-slate-800">
              <thead><tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Record Type</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Host / Name</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Value / Target</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Purpose</th></tr></thead>
              <tbody>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><strong>A</strong></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">@</code> (root)</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">76.76.21.21</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Points apex domain to Vercel global IP</td></tr>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><strong>CNAME</strong></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">www</code> or <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">app</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">cname.vercel-dns.com</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Aliases subdomain to Vercel edge network</td></tr>
              </tbody>
            </table>
    </div>
  );
}

// Slide 49: Step-by-Step Registrar Configuration
export function Slide49({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 13 • REGISTRARS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s49_title">Step-by-Step Registrar Configuration</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s49_sub">Adding DNS records in Namecheap, Cloudflare, or GoDaddy</p>
              </div>
            </div>
            <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>1. Vercel Project</h4><p>Settings -&gt; Domains -&gt; Enter <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">yourdomain.com</code> and click Add.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>2. Registrar DNS</h4><p>Open Namecheap/Cloudflare -&gt; DNS Management -&gt; Add A &amp; CNAME records.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>3. Wait for Verification</h4><p>Vercel polls DNS until records resolve and issues SSL certificate.</p></div>
            </div>
    </div>
  );
}

// Slide 50: Preserving Email DNS Records
export function Slide50({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 13 • EMAIL SAFETY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s50_title">Preserving Email DNS Records</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s50_sub">Avoiding email disruption by protecting MX, SPF, DKIM, and DMARC</p>
              </div>
              <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">DANGER ZONE</span>
            </div>
            <div className="alert-callout warning flex items-start gap-2.5 p-3 border border-amber-500/30 bg-amber-500/10 text-amber-300 text-[12.5px] leading-relaxed rounded">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <div><strong>NEVER DELETE MX RECORDS!</strong> If you have Google Workspace or Outlook email connected to your domain, only add the required A or CNAME record. Do not switch nameservers or wipe existing MX, TXT (SPF), or DKIM records, or company email will break instantly.</div>
            </div>
    </div>
  );
}

// Slide 51: DNS Propagation & Automatic SSL
export function Slide51({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 13 • PROPAGATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s51_title">DNS Propagation &amp; Automatic SSL</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s51_sub">Let's Encrypt TLS certificate generation and HTTPS enforcement</p>
              </div>
            </div>
            <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
              <h4>Zero-Config Automatic SSL</h4>
              <p>Once DNS records point to Vercel, Vercel automatically requests and provisions a Let's Encrypt TLS certificate. Certificates are renewed automatically before expiration with zero manual intervention.</p>
            </div>
    </div>
  );
}

// Slide 52: HTTPS & Transport Security
export function Slide52({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 14 • SECURITY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s52_title">HTTPS &amp; Transport Security</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s52_sub">HSTS headers, modern TLS cipher suites, and redirect rules</p>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>HTTP -&gt; HTTPS Redirect</h4><p>All insecure port 80 HTTP requests are automatically redirected with 308 Permanent Redirect to secure port 443 HTTPS.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>HSTS Header</h4><p>HTTP Strict Transport Security forces modern browsers to communicate only over encrypted channels.</p></div>
            </div>
    </div>
  );
}

// Slide 53: Application Hardening on Vercel
export function Slide53({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 14 • HARDENING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s53_title">Application Hardening on Vercel</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s53_sub">Content Security Policy (CSP), rate limiting, and input sanitization</p>
              </div>
            </div>
            <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
              <h4>Security Headers in next.config.js</h4>
              <p>Configure <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">X-Content-Type-Options: nosniff</code>, <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">X-Frame-Options: DENY</code>, and Content Security Policy (CSP) headers to prevent XSS and clickjacking attacks.</p>
            </div>
    </div>
  );
}

// Slide 54: Secret Auditing & Remediation
export function Slide54({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 14 • AUDITING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s54_title">Secret Auditing &amp; Remediation</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s54_sub">Scanning repositories for leaks and rotating compromised credentials</p>
              </div>
            </div>
            <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
              <h4>If You Accidentally Push a Secret:</h4>
              <p>1. Immediately rotate / invalidate the key in your Neon or Stripe dashboard.<br />2. Deleting the commit in Git is NOT enough because commit history preserves the secret.<br />3. Generate a brand new credential and update Vercel environment variables.</p>
            </div>
    </div>
  );
}

// Slide 55: Immutable Deployments
export function Slide55({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 15 • IMMUTABILITY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s55_title">Immutable Deployments</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s55_sub">Why every build is a permanent, immutable snapshot</p>
              </div>
            </div>
            <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
              <h4>Never Overwritten</h4>
              <p>Every Vercel deployment creates a permanent, immutable artifact snapshot associated with its unique URL. You can inspect and revisit builds from months ago exactly as they compiled.</p>
            </div>
    </div>
  );
}

// Slide 56: Instant Rollback Workflow
export function Slide56({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 15 • EMERGENCY RESTORE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s56_title">Instant Rollback Workflow</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s56_sub">Restoring a previous working deployment in seconds</p>
              </div>
              <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">EMERGENCY FIX</span>
            </div>
            <div className="flow-diagram flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">1</div><div className="flow-step-name text-xs font-bold text-slate-200">Bug Detected</div><div className="flow-step-desc text-[11px] text-slate-400">Production error</div></div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">2</div><div className="flow-step-name text-xs font-bold text-slate-200">Open Deployments</div><div className="flow-step-desc text-[11px] text-slate-400">Pick stable build</div></div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">3</div><div className="flow-step-name text-xs font-bold text-slate-200">Click Rollback</div><div className="flow-step-desc text-[11px] text-slate-400">Instant alias switch</div></div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">4</div><div className="flow-step-name text-xs font-bold text-slate-200">Restored</div><div className="flow-step-desc text-[11px] text-slate-400">Zero downtime</div></div>
            </div>
    </div>
  );
}

// Slide 57: The Code vs Database Rollback Discrepancy
export function Slide57({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 15 • THE MIGRATION TRAP</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s57_title">The Code vs Database Rollback Discrepancy</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s57_sub">Why rolling back code does NOT undo database schema changes</p>
              </div>
              <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">CRITICAL WARNING</span>
            </div>
            <div className="alert-callout warning flex items-start gap-2.5 p-3 border border-amber-500/30 bg-amber-500/10 text-amber-300 text-[12.5px] leading-relaxed rounded">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <div><strong>Vercel rollback ONLY reverts web frontend and serverless code!</strong> It cannot un-drop database tables or rollback destructive SQL migrations on Neon. Design migrations to be backward-compatible with the previous release.</div>
            </div>
    </div>
  );
}

// Slide 58: Build Logs vs Runtime Logs
export function Slide58({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 16 • DEBUGGING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s58_title">Build Logs vs Runtime Logs</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s58_sub">Differentiating compile-time failures from production exceptions</p>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Build Logs (Compile-Time)</h4>
                <p>Captures <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">pnpm install</code> and <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">next build</code>. Look here when deployment status shows red failed build. Common causes: TypeScript, ESLint, missing packages.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Runtime Logs (Production)</h4>
                <p>Streams live execution logs of Serverless Functions and Route Handlers. Look here when users see 500 Server Errors or database timeout exceptions.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 59: Diagnosing Common Build Failures
export function Slide59({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 16 • COMMON BUILD ERRORS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s59_title">Diagnosing Common Build Failures</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s59_sub">Missing dependencies, TypeScript errors, and incorrect root directory</p>
              </div>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span className="terminal-title text-[11px] text-slate-400 font-semibold">Error: Module not found: Can't resolve 'clsx'</span></div>
              <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
                <div className="term-warn">Cause: Package installed globally or missing from package.json dependencies.</div>
                <div>Solution: Run <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">pnpm add clsx</span> locally, commit package.json and pnpm-lock.yaml, then push.</div>
              </div>
            </div>
    </div>
  );
}

// Slide 60: Diagnosing Runtime 500 Errors
export function Slide60({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 16 • RUNTIME ERRORS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s60_title">Diagnosing Runtime 500 Errors</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s60_sub">Database timeouts, connection exhaustion, and uncaught exceptions</p>
              </div>
            </div>
            <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
              <h4>FUNCTION_INVOCATION_TIMEOUT</h4>
              <p>Hobby plan serverless functions have a 10s execution limit (expandable to 60s on Pro). Avoid long loops, un-indexed slow queries, or hanging external API calls.</p>
            </div>
    </div>
  );
}

// Slide 61: The 5-Step Systematic Debugging Flow
export function Slide61({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 16 • DEBUG METHOD</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s61_title">The 5-Step Systematic Debugging Flow</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s61_sub">Reproduce -&gt; Read Log -&gt; Isolate Error -&gt; Patch -&gt; Verify</p>
              </div>
            </div>
            <div className="flow-diagram flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">1</div><div className="flow-step-name text-xs font-bold text-slate-200">Read 1st Error</div><div className="flow-step-desc text-[11px] text-slate-400">Ignore noise below</div></div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">2</div><div className="flow-step-name text-xs font-bold text-slate-200">Test Locally</div><div className="flow-step-desc text-[11px] text-slate-400">pnpm run build</div></div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">3</div><div className="flow-step-name text-xs font-bold text-slate-200">Fix Code</div><div className="flow-step-desc text-[11px] text-slate-400">Patch &amp; commit</div></div>
              <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
              <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800"><div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">4</div><div className="flow-step-name text-xs font-bold text-slate-200">Push Fix</div><div className="flow-step-desc text-[11px] text-slate-400">Trigger new deploy</div></div>
            </div>
    </div>
  );
}

// Slide 62: Build Performance & Turbopack
export function Slide62({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 17 • PERFORMANCE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s62_title">Build Performance &amp; Turbopack</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s62_sub">Utilizing build caching, package deduplication, and fast compilation</p>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Vercel Remote Build Cache</h4><p>Caches unchanged dependency builds across runs, cutting build times from minutes to seconds.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Bundle Analyzer</h4><p>Run <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">@next/bundle-analyzer</code> to spot bloated libraries and split code efficiently.</p></div>
            </div>
    </div>
  );
}

// Slide 63: Serverless Optimization & Connection Pooling
export function Slide63({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 17 • DATABASE LATENCY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s63_title">Serverless Optimization &amp; Connection Pooling</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s63_sub">Preventing cold starts and connection limits with Neon Serverless driver</p>
              </div>
            </div>
            <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
              <h4>Use @neondatabase/serverless</h4>
              <p>The Neon serverless driver communicates over HTTP/WebSockets instead of standard TCP connections. This avoids exhausting Postgres max_connections limits during sudden traffic spikes.</p>
            </div>
    </div>
  );
}

// Slide 64: Vercel Plan Limits & Cost Management
export function Slide64({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 18 • COST CONTROL</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s64_title">Vercel Plan Limits &amp; Cost Management</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s64_sub">Understanding Hobby vs Pro bandwidth, function duration, and spending controls</p>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Hobby Limits</h4><p>100 GB Bandwidth/mo, 6,000 build minutes/mo, 10s Serverless execution timeout. Free forever for non-commercial use.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Spending Alerts (Pro)</h4><p>Set spend management limits in Dashboard -&gt; Settings -&gt; Billing to automatically pause or alert before exceeding budgets.</p></div>
            </div>
    </div>
  );
}

// Slide 65: Guided Project: TaskFlow Architecture
export function Slide65({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 19 • GUIDED PROJECT</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s65_title">Guided Project: TaskFlow Architecture</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s65_sub">Production blueprint for Next.js, Neon PostgreSQL, and Vercel</p>
              </div>
              <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">REAL WORLD</span>
            </div>
            <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Frontend</h4><p>Next.js 15 App Router, Tailwind CSS, Shadcn UI components, Responsive UI.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Database</h4><p>Neon Serverless PostgreSQL, Prisma schema, pooled connection string.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Hosting &amp; Domain</h4><p>Vercel Edge Network, custom domain <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">taskflow.com</code>, automated HTTPS.</p></div>
            </div>
    </div>
  );
}

// Slide 66: Interactive Deployment Simulator
export function Slide66({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 19 • INTERACTIVE SIMULATOR</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s66_title">Interactive Deployment Simulator</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s66_sub">Simulate connecting repos, setting env vars, building, and deploying</p>
              </div>
              <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1" data-i18n="ui_sim_label">SIMULATION ONLY</span>
            </div>
            <div className="slide-stack flex flex-col gap-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex gap-1.5 flex-wrap">
                  <button className="btn-nav sim-stage-btn btn-primary-action" data-stage="connect">1. Connect</button>
                  <button className="btn-nav sim-stage-btn" data-stage="configure">2. Configure</button>
                  <button className="btn-nav sim-stage-btn" data-stage="env">3. Env Vars</button>
                  <button className="btn-nav sim-stage-btn" data-stage="build">4. Build</button>
                  <button className="btn-nav sim-stage-btn" data-stage="deploy">5. Deploy</button>
                  <button className="btn-nav sim-stage-btn" data-stage="verify">6. Verify</button>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input type="checkbox" id="sim-fail-toggle" />
                    <span>Simulate Build Failure</span>
                  </label>
                  <span id="sim-status-indicator" className="font-bold  text-green-400">CONNECTED</span>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span className="terminal-title text-[11px] text-slate-400 font-semibold">simulation output runner</span></div>
                <pre id="sim-terminal-body" className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs whitespace-pre-wrap text-xs"></pre>
              </div>
            </div>
    </div>
  );
}

// Slide 67: Interactive Domain & DNS Simulator
export function Slide67({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 19 • DNS SIMULATOR</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s67_title">Interactive Domain &amp; DNS Simulator</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s67_sub">Experiment with Apex, CNAME, and SSL verification live</p>
              </div>
              <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1" data-i18n="ui_sim_label">SIMULATION ONLY</span>
            </div>
            <div className="slide-stack flex flex-col gap-3">
              <div className="flex gap-3 flex-wrap items-center">
                <input id="dns-domain-input" type="text" value="taskflow-app.com" className="bg-slate-800 border border-slate-700 text-white px-2 py-1  text-xs w-[220px] outline-none" placeholder="Enter domain..." />
                <select id="dns-record-type" className="bg-slate-800 border border-slate-700 text-white px-2 py-1 text-xs outline-none">
                  <option value="apex">Apex / Root (@)</option>
                  <option value="subdomain">Subdomain (app / www)</option>
                </select>
                <button id="btn-verify-dns" className="btn-nav btn-primary-action inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 border border-blue-600 text-white text-xs font-bold cursor-pointer transition-colors no-underline">Verify DNS &amp; SSL</button>
                <span id="dns-verify-result" className="text-xs font-bold "></span>
              </div>
              <table className="clean-table w-full border-collapse text-xs border border-slate-800">
                <thead><tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Record Type</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Name / Host</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Target Value</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Status</th></tr></thead>
                <tbody>
                  <tr>
                    <td id="dns-val-type" className="font-bold text-blue-400">A</td>
                    <td id="dns-val-name">@</td>
                    <td id="dns-val-target" className="">76.76.21.21</td>
                    <td id="dns-val-status">Configured</td>
                  </tr>
                </tbody>
              </table>
            </div>
    </div>
  );
}

// Slide 68: Interactive Production Checklist
export function Slide68({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 20 • VERIFICATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s68_title">Interactive Production Checklist</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s68_sub">Comprehensive interactive checklist saved to your browser</p>
              </div>
              <div className="flex items-center gap-2">
                <span id="checklist-count" className="text-xs  text-blue-400">0 / 8 Checked</span>
                <button id="btn-reset-checklist" className="btn-nav inline-flex items-center gap-2 px-3 py-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white text-xs font-bold cursor-pointer transition-colors no-underline px-2 py-0.5 text-[11px]">Reset</button>
              </div>
            </div>
            <div className="slide-stack flex flex-col gap-3">
              <div className="w-full h-1 bg-slate-800 relative">
                <div id="checklist-progress-bar" className="h-full bg-green-500 transition-all duration-200" style={{ width: "0%" }}></div>
              </div>
              <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-start gap-2 text-[12.5px] cursor-pointer">
                  <input type="checkbox" data-check-key="chk_build" className="checklist-checkbox mt-1" />
                  <span>1. Local build succeeded (<code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">pnpm run build</code> passed zero errors)</span>
                </label>
                <label className="flex items-start gap-2 text-[12.5px] cursor-pointer">
                  <input type="checkbox" data-check-key="chk_env" className="checklist-checkbox mt-1" />
                  <span>2. Production environment variables configured in Vercel Dashboard</span>
                </label>
                <label className="flex items-start gap-2 text-[12.5px] cursor-pointer">
                  <input type="checkbox" data-check-key="chk_secret" className="checklist-checkbox mt-1" />
                  <span>3. Verified no secrets committed to Git (.env.local in .gitignore)</span>
                </label>
                <label className="flex items-start gap-2 text-[12.5px] cursor-pointer">
                  <input type="checkbox" data-check-key="chk_db" className="checklist-checkbox mt-1" />
                  <span>4. Neon PostgreSQL pooled connection verified with sslmode=require</span>
                </label>
                <label className="flex items-start gap-2 text-[12.5px] cursor-pointer">
                  <input type="checkbox" data-check-key="chk_mig" className="checklist-checkbox mt-1" />
                  <span>5. Database migrations reviewed and applied prior to release</span>
                </label>
                <label className="flex items-start gap-2 text-[12.5px] cursor-pointer">
                  <input type="checkbox" data-check-key="chk_dns" className="checklist-checkbox mt-1" />
                  <span>6. Custom domain DNS verified with A and CNAME records intact</span>
                </label>
                <label className="flex items-start gap-2 text-[12.5px] cursor-pointer">
                  <input type="checkbox" data-check-key="chk_ssl" className="checklist-checkbox mt-1" />
                  <span>7. Automatic HTTPS &amp; Let's Encrypt certificate verified</span>
                </label>
                <label className="flex items-start gap-2 text-[12.5px] cursor-pointer">
                  <input type="checkbox" data-check-key="chk_smoke" className="checklist-checkbox mt-1" />
                  <span>8. End-to-end smoke test completed (Auth, CRUD, Responsive check)</span>
                </label>
              </div>
            </div>
    </div>
  );
}

// Slide 69: Top 10 Costly Deployment Mistakes
export function Slide69({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 21 • MISTAKES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s69_title">Top 10 Costly Deployment Mistakes</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s69_sub">Critical errors developers make and exact steps to avoid them</p>
              </div>
              <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">AVOID THESE</span>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>1. Forgetting to Redeploy after updating Env Vars</h4><p>Changing an env var doesn't update old builds. Must trigger Redeploy.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>2. Committing .env.local to GitHub</h4><p>Scrapers will steal keys within seconds. Keep it strictly in .gitignore.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>3. Deleting MX records when configuring DNS</h4><p>Wiping existing MX records will kill your company's Google/Outlook email.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>4. Exposing secret keys with NEXT_PUBLIC_</h4><p>Never put database passwords or secret keys behind NEXT_PUBLIC_.</p></div>
            </div>
    </div>
  );
}

// Slide 70: Production Verification & Health Checks
export function Slide70({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 21 • SMOKE TESTS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s70_title">Production Verification &amp; Health Checks</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s70_sub">End-to-end testing of auth, database CRUD, and responsiveness</p>
              </div>
            </div>
            <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Auth Smoke Test</h4><p>Log in with a real test account, verify cookies and JWT tokens.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Database CRUD</h4><p>Create a real task record, verify it persists across refreshes.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><h4>Mobile Layout Check</h4><p>Open on real smartphone to verify touch targets and responsive navigation.</p></div>
            </div>
    </div>
  );
}

// Slide 71: Vercel Deployment Cheat Sheet
export function Slide71({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 22 • REFERENCE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s71_title">Vercel Deployment Cheat Sheet</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s71_sub">Quick reference guide for CLI, Git commands, DNS values, and rules</p>
              </div>
            </div>
            <table className="clean-table w-full border-collapse text-xs border border-slate-800">
              <thead><tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Action</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Command / Record</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Notes</th></tr></thead>
              <tbody>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Test Local Build</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">pnpm run build</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Run before pushing code</td></tr>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Deploy via CLI</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">pnpm dlx vercel --prod</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Manual production deployment</td></tr>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Apex Domain DNS</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">A Record -&gt; <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">76.76.21.21</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Points root to Vercel</td></tr>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Subdomain DNS</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">CNAME -&gt; <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">cname.vercel-dns.com</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Points subdomains to Vercel</td></tr>
              </tbody>
            </table>
    </div>
  );
}

// Slide 72: Course Summary & Master Architecture
export function Slide72({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">PART 22 • MASTERCLASS GRADUATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s72_title">Course Summary &amp; Master Architecture</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s72_sub">Congratulations! You have mastered production web deployments on Vercel</p>
              </div>
              <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">COMPLETED</span>
            </div>
            <div className="slide-stack flex flex-col gap-3">
              <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed rounded">
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                <div>You now possess the complete professional skillset to develop with Next.js, store data in Neon PostgreSQL, push to GitHub, automate deployments on Vercel, and route custom domains securely with HTTPS!</div>
              </div>
              <div className="flex justify-center mt-3">
                <a href="../index.html" className="btn-cta-primary inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 border border-blue-600 text-white text-xs font-bold cursor-pointer transition-colors no-underline rounded" onClick={onRestart}>
                  <span>Return to Fullstack Curriculum Hub</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
    </div>
  );
}

export const VERCEL_META = {
  id: "vercel",
  title: "Vercel & Web Deployment",
  module: "MODULE 07",
  accent: "indigo",
};

export const VERCEL_SLIDES = [
  {
    id: 1,
    title: "MODULE 06 • PRODUCTION INFRASTRUCTURE",
    part: "INTRODUCTION",
    Component: Slide1,
  },
  {
    id: 2,
    title: "What is Deployment?",
    part: "INTRODUCTION",
    Component: Slide2,
  },
  {
    id: 3,
    title: "The Production Deployment Pipeline",
    part: "INTRODUCTION",
    Component: Slide3,
  },
  {
    id: 4,
    title: "Static Websites vs Fullstack Applications",
    part: "INTRODUCTION",
    Component: Slide4,
  },
  {
    id: 5,
    title: "What is Vercel?",
    part: "WHAT IS VERCEL?",
    Component: Slide5,
  },
  {
    id: 6,
    title: "Core Platform Capabilities",
    part: "WHAT IS VERCEL?",
    Component: Slide6,
  },
  {
    id: 7,
    title: "What Happens During a Vercel Build?",
    part: "WHAT IS VERCEL?",
    Component: Slide7,
  },
  {
    id: 8,
    title: "Supported Frameworks on Vercel",
    part: "WHAT IS VERCEL?",
    Component: Slide8,
  },
  {
    id: 9,
    title: "Creating Your Vercel Account",
    part: "CREATE ACCOUNT",
    Component: Slide9,
  },
  {
    id: 10,
    title: "Personal Account vs Team Workspace",
    part: "CREATE ACCOUNT",
    Component: Slide10,
  },
  {
    id: 11,
    title: "Navigating the Vercel Dashboard",
    part: "CREATE ACCOUNT",
    Component: Slide11,
  },
  {
    id: 12,
    title: "Preparing a Next.js Project for Deployment",
    part: "PREPARE PROJECT",
    Component: Slide12,
  },
  {
    id: 13,
    title: "Local Build Verification",
    part: "PREPARE PROJECT",
    Component: Slide13,
  },
  {
    id: 14,
    title: "Environment Variables Audit",
    part: "PREPARE PROJECT",
    Component: Slide14,
  },
  {
    id: 15,
    title: "Git Repository Health Check",
    part: "PREPARE PROJECT",
    Component: Slide15,
  },
  {
    id: 16,
    title: "Creating a GitHub Repository",
    part: "CREATE GITHUB REPO",
    Component: Slide16,
  },
  {
    id: 17,
    title: "Pushing Code to GitHub",
    part: "CREATE GITHUB REPO",
    Component: Slide17,
  },
  {
    id: 18,
    title: "Verifying Repository on GitHub",
    part: "CREATE GITHUB REPO",
    Component: Slide18,
  },
  {
    id: 19,
    title: "Importing a Project into Vercel",
    part: "IMPORT PROJECT",
    Component: Slide19,
  },
  {
    id: 20,
    title: "Framework Detection & Root Directory",
    part: "IMPORT PROJECT",
    Component: Slide20,
  },
  {
    id: 21,
    title: "Build and Output Settings",
    part: "IMPORT PROJECT",
    Component: Slide21,
  },
  {
    id: 22,
    title: "Configuring Initial Environment Variables",
    part: "IMPORT PROJECT",
    Component: Slide22,
  },
  {
    id: 23,
    title: "The First Deployment Lifecycle",
    part: "FIRST DEPLOYMENT",
    Component: Slide23,
  },
  {
    id: 24,
    title: "Inspecting Live Build Logs",
    part: "FIRST DEPLOYMENT",
    Component: Slide24,
  },
  {
    id: 25,
    title: "Deployment URLs & Production Aliases",
    part: "FIRST DEPLOYMENT",
    Component: Slide25,
  },
  {
    id: 26,
    title: "Post-Deployment Verification",
    part: "FIRST DEPLOYMENT",
    Component: Slide26,
  },
  {
    id: 27,
    title: "Preview Deployments vs Production",
    part: "PREVIEW VS PRODUCTION",
    Component: Slide27,
  },
  {
    id: 28,
    title: "Git Branching Workflow for Vercel",
    part: "PREVIEW VS PRODUCTION",
    Component: Slide28,
  },
  {
    id: 29,
    title: "Pull Request Previews & Team Feedback",
    part: "PREVIEW VS PRODUCTION",
    Component: Slide29,
  },
  {
    id: 30,
    title: "Promoting Previews to Production",
    part: "PREVIEW VS PRODUCTION",
    Component: Slide30,
  },
  {
    id: 31,
    title: "Automatic Deployments via Git Push",
    part: "AUTOMATIC DEPLOYS",
    Component: Slide31,
  },
  {
    id: 32,
    title: "GitHub Commit Status Checks",
    part: "AUTOMATIC DEPLOYS",
    Component: Slide32,
  },
  {
    id: 33,
    title: "Deploy Hooks for External Triggers",
    part: "AUTOMATIC DEPLOYS",
    Component: Slide33,
  },
  {
    id: 34,
    title: "Environment Variables Mental Model",
    part: "ENV VARIABLES",
    Component: Slide34,
  },
  {
    id: 35,
    title: "Environment Scope: Dev, Preview, Production",
    part: "ENV VARIABLES",
    Component: Slide35,
  },
  {
    id: 36,
    title: "The NEXT_PUBLIC_* Security Boundary",
    part: "ENV VARIABLES",
    Component: Slide36,
  },
  {
    id: 37,
    title: "Managing Variables in Vercel Dashboard",
    part: "ENV VARIABLES",
    Component: Slide37,
  },
  {
    id: 38,
    title: "The Redeployment Requirement",
    part: "ENV VARIABLES",
    Component: Slide38,
  },
  {
    id: 39,
    title: "Next.js App Router on Vercel",
    part: "NEXT.JS ON VERCEL",
    Component: Slide39,
  },
  {
    id: 40,
    title: "Static vs Dynamic Rendering Modes",
    part: "NEXT.JS ON VERCEL",
    Component: Slide40,
  },
  {
    id: 41,
    title: "Server Actions & Route Handlers",
    part: "NEXT.JS ON VERCEL",
    Component: Slide41,
  },
  {
    id: 42,
    title: "Image Optimization & Global Edge",
    part: "NEXT.JS ON VERCEL",
    Component: Slide42,
  },
  {
    id: 43,
    title: "Fullstack Architecture: Vercel + Neon",
    part: "NEON POSTGRESQL",
    Component: Slide43,
  },
  {
    id: 44,
    title: "Obtaining Neon Connection Strings",
    part: "NEON POSTGRESQL",
    Component: Slide44,
  },
  {
    id: 45,
    title: "Configuring DATABASE_URL in Vercel",
    part: "NEON POSTGRESQL",
    Component: Slide45,
  },
  {
    id: 46,
    title: "Database Migration Strategy",
    part: "NEON POSTGRESQL",
    Component: Slide46,
  },
  {
    id: 47,
    title: "Custom Domain Mental Model",
    part: "CUSTOM DOMAIN",
    Component: Slide47,
  },
  {
    id: 48,
    title: "DNS Record Types: A vs CNAME",
    part: "CUSTOM DOMAIN",
    Component: Slide48,
  },
  {
    id: 49,
    title: "Step-by-Step Registrar Configuration",
    part: "CUSTOM DOMAIN",
    Component: Slide49,
  },
  {
    id: 50,
    title: "Preserving Email DNS Records",
    part: "CUSTOM DOMAIN",
    Component: Slide50,
  },
  {
    id: 51,
    title: "DNS Propagation & Automatic SSL",
    part: "CUSTOM DOMAIN",
    Component: Slide51,
  },
  {
    id: 52,
    title: "HTTPS & Transport Security",
    part: "HTTPS &amp; SECURITY",
    Component: Slide52,
  },
  {
    id: 53,
    title: "Application Hardening on Vercel",
    part: "HTTPS &amp; SECURITY",
    Component: Slide53,
  },
  {
    id: 54,
    title: "Secret Auditing & Remediation",
    part: "HTTPS &amp; SECURITY",
    Component: Slide54,
  },
  {
    id: 55,
    title: "Immutable Deployments",
    part: "DEPLOYMENTS &amp; ROLLBACK",
    Component: Slide55,
  },
  {
    id: 56,
    title: "Instant Rollback Workflow",
    part: "DEPLOYMENTS &amp; ROLLBACK",
    Component: Slide56,
  },
  {
    id: 57,
    title: "The Code vs Database Rollback Discrepancy",
    part: "DEPLOYMENTS &amp; ROLLBACK",
    Component: Slide57,
  },
  {
    id: 58,
    title: "Build Logs vs Runtime Logs",
    part: "TROUBLESHOOTING",
    Component: Slide58,
  },
  {
    id: 59,
    title: "Diagnosing Common Build Failures",
    part: "TROUBLESHOOTING",
    Component: Slide59,
  },
  {
    id: 60,
    title: "Diagnosing Runtime 500 Errors",
    part: "TROUBLESHOOTING",
    Component: Slide60,
  },
  {
    id: 61,
    title: "The 5-Step Systematic Debugging Flow",
    part: "TROUBLESHOOTING",
    Component: Slide61,
  },
  {
    id: 62,
    title: "Build Performance & Turbopack",
    part: "PERFORMANCE",
    Component: Slide62,
  },
  {
    id: 63,
    title: "Serverless Optimization & Connection Pooling",
    part: "PERFORMANCE",
    Component: Slide63,
  },
  {
    id: 64,
    title: "Vercel Plan Limits & Cost Management",
    part: "PLANS &amp; COSTS",
    Component: Slide64,
  },
  {
    id: 65,
    title: "Guided Project: TaskFlow Architecture",
    part: "GUIDED PROJECT",
    Component: Slide65,
  },
  {
    id: 66,
    title: "Interactive Deployment Simulator",
    part: "GUIDED PROJECT",
    Component: Slide66,
  },
  {
    id: 67,
    title: "Interactive Domain & DNS Simulator",
    part: "GUIDED PROJECT",
    Component: Slide67,
  },
  {
    id: 68,
    title: "Interactive Production Checklist",
    part: "CHECKLIST",
    Component: Slide68,
  },
  {
    id: 69,
    title: "Top 10 Costly Deployment Mistakes",
    part: "COMMON MISTAKES",
    Component: Slide69,
  },
  {
    id: 70,
    title: "Production Verification & Health Checks",
    part: "COMMON MISTAKES",
    Component: Slide70,
  },
  {
    id: 71,
    title: "Vercel Deployment Cheat Sheet",
    part: "FINAL CHEAT SHEET",
    Component: Slide71,
  },
  {
    id: 72,
    title: "Course Summary & Master Architecture",
    part: "FINAL CHEAT SHEET",
    Component: Slide72,
  },
];
