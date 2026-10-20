import React from "react";

// Slide 1: MODULE 05 • COMPONENT ARCHITECTURE
export function Slide1({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="title-hero-grid grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-4 items-center">
      <div className="title-text-col">
        <div className="title-badge-pill">MODULE 05 • COMPONENT ARCHITECTURE</div>
        <h1 className="title-main-h1 text-3xl md:text-4xl font-extrabold text-white m-0 mb-1 leading-tight">Shadcn UI<br /><span className="title-accent text-blue-400 font-extrabold">Accessible Component Architecture</span></h1>
        <p className="title-tagline text-sm text-slate-300 italic m-0 mb-3">“Beautifully designed components that you copy and paste into your apps”</p>
        <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed"><div>Learn how to architect accessible, customizable React component systems built on Radix UI primitives and Tailwind CSS.</div></div>
        <div className="title-actions-row"><button className="btn-cta-primary inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 border border-blue-600 text-white text-xs font-bold cursor-pointer transition-colors no-underline" id="btn-start-course" onClick={onStart}>Start Module <svg className="inline-arrow w-3 h-3 shrink-0 inline-block align-middle mx-1 text-slate-500" viewBox="0 0 16 16" width="12" height="12" fill="currentColor"><path fillRule="evenodd" d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06z"/></svg></button><span className="cta-hint">or press <kbd>Space</kbd> / <kbd>→</kbd></span></div>
      </div>
      <div className="title-visual-col">
        <div className="terminal-mockup bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><div className="terminal-dots flex items-center gap-1.5"><span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span></div><span className="terminal-title text-[11px] text-slate-400 font-semibold">bash — add components</span></div><div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs"><div className="term-line"><span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span><span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">pnpm dlx shadcn@latest add button card dialog</span></div><div className="term-output text-slate-300  text-xs"><svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="inline-block align-middle mr-0.5"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>Installing dependencies: @radix-ui/react-slot, @radix-ui/react-dialog...<br /><svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="inline-block align-middle mr-0.5"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>Created components/ui/button.tsx<br /><svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="inline-block align-middle mr-0.5"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>Created components/ui/card.tsx<br /><svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="inline-block align-middle mr-0.5"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>Created components/ui/dialog.tsx<br /><br /><span className="out-success">Success! 3 components added to your codebase.</span></div></div></div>
      </div>
    </div>
    </div>
  );
}

// Slide 2: What Makes Shadcn UI Different?
export function Slide2({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">OVERVIEW</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">What Makes Shadcn UI Different?</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Why it is taking over the React and Next.js ecosystem</p></div>
    <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
        <h4><span className="cross-icon inline-flex items-center justify-center text-red-400 shrink-0 mt-0.5"><svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path fillRule="evenodd" d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06z"/></svg></span> Traditional Component Libraries (MUI/Chakra)</h4>
        <p>You install a massive npm package. Overriding styles is painful with complex CSS-in-JS wrappers. Upgrades break your custom designs.</p>
        <div className="alert-callout flex items-start gap-2.5 p-3 border border-slate-700 bg-slate-800/80 text-slate-300 text-[12.5px] leading-relaxed"><div>You are locked into their opinions and cannot easily modify internal component code.</div></div>
      </div>
      <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
        <h4><span className="check-icon inline-flex items-center justify-center text-green-400 shrink-0 mt-0.5"><svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg></span> The Shadcn UI Philosophy</h4>
        <p>It is NOT an npm dependency. The source code lives directly inside your <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">src/components/ui/</code> directory. You own and customize every line.</p>
        <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed"><div>Built on unstyled accessible Radix UI primitives and styled with standard Tailwind utility classes.</div></div>
      </div>
    </div>
    </div>
  );
}

// Slide 3: The Three Pillars of Shadcn UI
export function Slide3({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">ARCHITECTURE</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">The Three Pillars of Shadcn UI</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">How modern web building blocks unite</p></div>
    <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
        <h4><span className="step-num-badge inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold  bg-slate-800 border border-slate-700 text-blue-400 shrink-0">01</span> Radix UI Primitives</h4>
        <p>Handles accessibility, keyboard navigation (Tab/Arrow keys), ARIA labels, focus trapping, and screen reader announcements.</p>
      </div>
      <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
        <h4><span className="step-num-badge inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold  bg-slate-800 border border-slate-700 text-blue-400 shrink-0">02</span> Tailwind CSS</h4>
        <p>Provides utility styling, responsive breakpoints, dark mode variants, and smooth hover/active transitions.</p>
      </div>
      <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
        <h4><span className="step-num-badge inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold  bg-slate-800 border border-slate-700 text-blue-400 shrink-0">03</span> Lucide Icons</h4>
        <p>Clean, lightweight, tree-shakeable SVG icons that integrate seamlessly with typography and buttons.</p>
      </div>
    </div>
    </div>
  );
}

// Slide 4: Initializing Shadcn UI
export function Slide4({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">SETUP</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Initializing Shadcn UI</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Configuring components.json in your project</p></div>
    <div className="terminal-mockup bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><div className="terminal-dots flex items-center gap-1.5"><span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span></div><span className="terminal-title text-[11px] text-slate-400 font-semibold">bash — init shadcn</span><button className="copy-btn text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div><div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs"><div className="term-line"><span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span><span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">pnpm dlx shadcn@latest init</span></div><div className="term-output text-slate-300  text-xs"><svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="inline-block align-middle mr-0.5"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>Which style would you like to use? › New York<br /><svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="inline-block align-middle mr-0.5"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>Which color would you like to use as base color? › Zinc<br /><svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="inline-block align-middle mr-0.5"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>Would you like to use CSS variables for colors? › Yes<br /><svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="inline-block align-middle mr-0.5"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>Where is your global CSS file? › src/app/globals.css<br /><svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="inline-block align-middle mr-0.5"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>Configure the import alias for components: › @/components<br /><svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="inline-block align-middle mr-0.5"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>Configure the import alias for utils: › @/lib/utils<br /><br /><span className="out-success">Success! Project initialized with components.json</span></div></div></div>
    </div>
  );
}

// Slide 5: The cn() Utility & Class Merging
export function Slide5({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">UTILITIES</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">The cn() Utility &amp; Class Merging</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Safely combining conditional classes and overriding Tailwind styles</p></div>
    <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>src/lib/utils.ts</span><button className="copy-btn text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div><pre><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">import &#123; clsx, type ClassValue &#125; from "clsx";
import &#123; twMerge &#125; from "tailwind-merge";

export function cn(...inputs: ClassValue[]) &#123;
  return twMerge(clsx(inputs));
&#125;</code></pre></div>
    <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed"><div><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">tailwind-merge</code> resolves Tailwind class conflicts intelligently. If a component defines <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">p-4</code> and the caller passes <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">p-4</code>, <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">p-4</code> wins cleanly instead of both classes fighting in CSS!</div></div>
    </div>
  );
}

// Slide 6: Adding Components via CLI
export function Slide6({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">COMPONENTS</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Adding Components via CLI</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Grabbing exactly what you need without dependency bloat</p></div>
    <div className="terminal-mockup bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><div className="terminal-dots flex items-center gap-1.5"><span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span></div><span className="terminal-title text-[11px] text-slate-400 font-semibold">bash — add components</span><button className="copy-btn text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div><div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs"><div className="term-line"><span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span><span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">pnpm dlx shadcn@latest add button badge card dialog</span></div><div className="term-output text-slate-300  text-xs">Installing @radix-ui/react-slot @radix-ui/react-dialog...<br />Created src/components/ui/button.tsx<br />Created src/components/ui/badge.tsx<br />Created src/components/ui/card.tsx<br />Created src/components/ui/dialog.tsx<br /><span className="out-success"><svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" className="inline-block align-middle mr-0.5"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>Done! You can now import them into any page.</span></div></div></div>
    </div>
  );
}

// Slide 7: The Button Component & Variants
export function Slide7({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">BUTTON</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">The Button Component &amp; Variants</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Understanding class-variance-authority (cva)</p></div>
    <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>Usage Example</span><button className="copy-btn text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div><pre><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">import &#123; Button &#125; from '@/components/ui/button';
import &#123; ArrowRight, Trash2 &#125; from 'lucide-react';

export function ButtonShowcase() &#123;
  return (
    &lt;div className="flex flex-wrap items-center gap-3 p-4"&gt;
      &lt;Button variant="default"&gt;Primary Button&lt;/Button&gt;
      &lt;Button variant="secondary"&gt;Secondary&lt;/Button&gt;
      &lt;Button variant="outline"&gt;Outline&lt;/Button&gt;
      &lt;Button variant="destructive" size="sm"&gt;
        &lt;Trash2 className="w-4 h-4 mr-2" /&gt; Delete
      &lt;/Button&gt;
      &lt;Button variant="default" size="lg"&gt;
        Get Started &lt;ArrowRight className="w-4 h-4 ml-2" /&gt;
      &lt;/Button&gt;
    &lt;/div&gt;
  );
&#125;</code></pre></div>
    </div>
  );
}

// Slide 8: Card Component Architecture
export function Slide8({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">CARD</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Card Component Architecture</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Composing headers, content, and actions semantically</p></div>
    <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>components/ProjectCard.tsx</span><button className="copy-btn text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div><pre><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">import &#123; Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter &#125; from '@/components/ui/card';
import &#123; Button &#125; from '@/components/ui/button';
import &#123; Badge &#125; from '@/components/ui/badge';

export function ProjectCard() &#123;
  return (
    &lt;Card className="w-full max-w-sm"&gt;
      &lt;CardHeader&gt;
        &lt;div className="flex justify-between items-center"&gt;
          &lt;CardTitle&gt;Repository Sync&lt;/CardTitle&gt;
          &lt;Badge variant="outline"&gt;Active&lt;/Badge&gt;
        &lt;/div&gt;
        &lt;CardDescription&gt;Last synchronized 2 minutes ago&lt;/CardDescription&gt;
      &lt;/CardHeader&gt;
      &lt;CardContent&gt;
        &lt;p className="text-sm text-muted-foreground"&gt;Branches: main, feature-auth&lt;/p&gt;
      &lt;/CardContent&gt;
      &lt;CardFooter className="flex justify-between"&gt;
        &lt;Button variant="outline"&gt;View Details&lt;/Button&gt;
        &lt;Button&gt;Sync Now&lt;/Button&gt;
      &lt;/CardFooter&gt;
    &lt;/Card&gt;
  );
&#125;</code></pre></div>
    </div>
  );
}

// Slide 9: Accessible Dialogs & Overlays
export function Slide9({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">MODALS</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Accessible Dialogs &amp; Overlays</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Full accessibility with focus traps and escape key handling</p></div>
    <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>Dialog Example</span><button className="copy-btn text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div><pre><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">import &#123; Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription &#125; from '@/components/ui/dialog';
import &#123; Button &#125; from '@/components/ui/button';

export function DeleteRepoDialog() &#123;
  return (
    &lt;Dialog&gt;
      &lt;DialogTrigger asChild&gt;
        &lt;Button variant="destructive"&gt;Delete Project&lt;/Button&gt;
      &lt;/DialogTrigger&gt;
      &lt;DialogContent&gt;
        &lt;DialogHeader&gt;
          &lt;DialogTitle&gt;Are you absolutely sure?&lt;/DialogTitle&gt;
          &lt;DialogDescription&gt;
            This action cannot be undone. This will permanently delete your repository from the server.
          &lt;/DialogDescription&gt;
        &lt;/DialogHeader&gt;
        &lt;div className="flex justify-end gap-3 mt-4"&gt;
          &lt;Button variant="outline"&gt;Cancel&lt;/Button&gt;
          &lt;Button variant="destructive"&gt;Confirm Delete&lt;/Button&gt;
        &lt;/div&gt;
      &lt;/DialogContent&gt;
    &lt;/Dialog&gt;
  );
&#125;</code></pre></div>
    </div>
  );
}

// Slide 10: Theming & CSS Variables
export function Slide10({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">THEMING</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Theming &amp; CSS Variables</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Effortless dark mode with design tokens</p></div>
    <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>src/app/globals.css (Tokens)</span></div><pre><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">:root &#123;
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --radius: 0.5rem;
&#125;

.dark &#123;
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 10% 5%;
  --primary: 0 0% 98%;
  --primary-foreground: 240 5.9% 10%;
&#125;</code></pre></div>
    <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed"><div>Because components reference <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">bg-background</code> and <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">text-foreground</code>, toggling the <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">dark</code> class changes the entire app's appearance seamlessly!</div></div>
    </div>
  );
}

// Slide 11: Putting It Together: Full Widget
export function Slide11({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">COMPOSITION</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Putting It Together: Full Widget</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Composing multiple Shadcn components into a production UI</p></div>
    <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>DashboardWidget.tsx</span></div><pre><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">export function DashboardWidget() &#123;
  return (
    &lt;Card className="p-4 border-slate-800 bg-slate-900"&gt;
      &lt;div className="flex items-center justify-between mb-4"&gt;
        &lt;Badge&gt;Production Ready&lt;/Badge&gt;
        &lt;span className="text-xs text-slate-400"&gt;v2.4.0&lt;/span&gt;
      &lt;/div&gt;
      &lt;h3 className="font-bold text-white text-lg"&gt;Deploy Pipeline&lt;/h3&gt;
      &lt;p className="text-sm text-slate-400 mt-1"&gt;Zero-config deployment with Git push&lt;/p&gt;
      &lt;div className="flex gap-2 mt-4"&gt;
        &lt;Button className="w-full"&gt;Deploy Now&lt;/Button&gt;
      &lt;/div&gt;
    &lt;/Card&gt;
  );
&#125;</code></pre></div>
      <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
        <h4>Why This Architecture Wins</h4>
        <p><span className="check-icon inline-flex items-center justify-center text-green-400 shrink-0 mt-0.5 mr-1.5"><svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg></span> Completely accessible out of the box</p>
        <p><span className="check-icon inline-flex items-center justify-center text-green-400 shrink-0 mt-0.5 mr-1.5"><svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg></span> Code is stored in your repo, not node_modules</p>
        <p><span className="check-icon inline-flex items-center justify-center text-green-400 shrink-0 mt-0.5 mr-1.5"><svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg></span> Zero runtime performance overhead</p>
        <p><span className="check-icon inline-flex items-center justify-center text-green-400 shrink-0 mt-0.5 mr-1.5"><svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg></span> Perfectly matches your custom design system</p>
      </div>
    </div>
    </div>
  );
}

// Slide 12: Curriculum Completed!
export function Slide12({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">SUMMARY</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight"><span className="inline-icon w-3.5 h-3.5 shrink-0 inline-block align-middle mr-1 text-orange-400"><svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor"><path d="M4 1.75C4 .784 4.784 0 5.75 0h4.5C11.216 0 12 .784 12 1.75V3h1.75A2.25 2.25 0 0 1 16 5.25v.5A3.25 3.25 0 0 1 12.75 9H11.9a4.5 4.5 0 0 1-3.15 3.44v1.81h2a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5h2v-1.81A4.5 4.5 0 0 1 4.1 9h-.85A3.25 3.25 0 0 1 0 5.75v-.5A2.25 2.25 0 0 1 2.25 3H4V1.75zm0 2.75H2.25a.75.75 0 0 0-.75.75v.5A1.75 1.75 0 0 0 3.25 7.5H4V4.5zm8 3h.75a1.75 1.75 0 0 0 1.75-1.75v-.5a.75.75 0 0 0-.75-.75H12v3zM5.5 1.5a.25.25 0 0 0-.25.25V8a2.75 2.75 0 1 0 5.5 0V1.75a.25.25 0 0 0-.25-.25h-5z"/></svg></span>Curriculum Completed!</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">You have traversed the complete modern web development stack</p></div>
    <div className="summary-checklist-grid">
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><span className="check-icon inline-flex items-center justify-center text-green-400 shrink-0 mt-0.5"><svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg></span><span><strong>01. Git:</strong> Local tracking, commits, branches, mental model</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><span className="check-icon inline-flex items-center justify-center text-green-400 shrink-0 mt-0.5"><svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg></span><span><strong>02. GitHub:</strong> Cloud repositories, remotes, push/pull, pull requests</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><span className="check-icon inline-flex items-center justify-center text-green-400 shrink-0 mt-0.5"><svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg></span><span><strong>03. Next.js:</strong> App Router, Server Components, SSR, API routes</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><span className="check-icon inline-flex items-center justify-center text-green-400 shrink-0 mt-0.5"><svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg></span><span><strong>04. Tailwind CSS:</strong> Utility classes, responsive design, dark mode</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><span className="check-icon inline-flex items-center justify-center text-green-400 shrink-0 mt-0.5"><svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg></span><span><strong>05. Shadcn UI:</strong> Radix primitives, accessible components, clean design</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><span className="check-icon inline-flex items-center justify-center text-green-400 shrink-0 mt-0.5"><svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg></span><span><strong>Fullstack Readiness:</strong> From your first line of code to production!</span></div>
    </div>
    <div className="quote-banner p-3 bg-slate-800/60 border-l-4 border-blue-500 text-slate-300 italic text-xs leading-relaxed">Congratulations on completing the entire 5-module curriculum!</div>
    <div className="mt-4 text-center"><a href="../index.html" className="btn-cta-primary inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 border border-blue-600 text-white text-xs font-bold cursor-pointer transition-colors no-underline" onClick={onRestart}>Return to Curriculum Home <svg className="inline-arrow w-3 h-3 shrink-0 inline-block align-middle mx-1 text-slate-500" viewBox="0 0 16 16" width="12" height="12" fill="currentColor"><path fillRule="evenodd" d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06z"/></svg></a></div>
    </div>
  );
}

export const SHADCN_META = {
  id: "shadcn",
  title: "Shadcn UI: Accessible Component Architecture",
  module: "MODULE 05",
  accent: "zinc",
};

export const SHADCN_SLIDES = [
  {
    id: 1,
    title: "MODULE 05 • COMPONENT ARCHITECTURE",
    part: "WELCOME",
    Component: Slide1,
  },
  {
    id: 2,
    title: "What Makes Shadcn UI Different?",
    part: "OVERVIEW",
    Component: Slide2,
  },
  {
    id: 3,
    title: "The Three Pillars of Shadcn UI",
    part: "ARCHITECTURE",
    Component: Slide3,
  },
  {
    id: 4,
    title: "Initializing Shadcn UI",
    part: "SETUP",
    Component: Slide4,
  },
  {
    id: 5,
    title: "The cn() Utility & Class Merging",
    part: "UTILITIES",
    Component: Slide5,
  },
  {
    id: 6,
    title: "Adding Components via CLI",
    part: "COMPONENTS",
    Component: Slide6,
  },
  {
    id: 7,
    title: "The Button Component & Variants",
    part: "BUTTON",
    Component: Slide7,
  },
  {
    id: 8,
    title: "Card Component Architecture",
    part: "CARD",
    Component: Slide8,
  },
  {
    id: 9,
    title: "Accessible Dialogs & Overlays",
    part: "MODALS",
    Component: Slide9,
  },
  {
    id: 10,
    title: "Theming & CSS Variables",
    part: "THEMING",
    Component: Slide10,
  },
  {
    id: 11,
    title: "Putting It Together: Full Widget",
    part: "COMPOSITION",
    Component: Slide11,
  },
  {
    id: 12,
    title: "Curriculum Completed!",
    part: "SUMMARY",
    Component: Slide12,
  },
];
