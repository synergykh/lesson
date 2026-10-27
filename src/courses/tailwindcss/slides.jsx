import React from "react";
import { Check, ArrowRight, X, ChevronRight } from "lucide-react";

// Slide 1: MODULE 04 • MODERN CSS
export function Slide1({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="title-hero-grid grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-4 items-center">
      <div className="title-text-col">
        <div className="title-badge-pill">MODULE 04 • MODERN CSS</div>
        <h1 className="title-main-h1 text-3xl md:text-4xl font-extrabold text-white m-0 mb-1 leading-tight">Tailwind CSS<br /><span className="title-accent text-blue-400 font-extrabold">Rapid Utility-First Styling</span></h1>
        <p className="title-tagline text-sm text-slate-300 italic m-0 mb-3">“Build modern, responsive interfaces directly in your markup”</p>
        <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed"><div>Master utility classes, flexbox/grid layouts, responsive breakpoints, design tokens, and dark mode without writing raw CSS.</div></div>
        <div className="title-actions-row"><button className="btn-cta-primary inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 border border-blue-600 text-white text-xs font-bold cursor-pointer transition-colors no-underline rounded" id="btn-start-course" onClick={onStart}>Start Module <ArrowRight className="w-3.5 h-3.5" /></button><span className="cta-hint">or press <kbd>Space</kbd> / <kbd>→</kbd></span></div>
      </div>
      <div className="title-visual-col">
        <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>HeroCard.tsx</span></div><pre><code>{`<div className="p-4 bg-slate-900 border border-slate-800 rounded-lg shadow-xl flex items-center gap-4 hover:border-blue-500 transition-all">
  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center font-bold">
    TS
  </div>
  <div>
    <h3 className="text-lg font-bold text-white">Tailwind CSS</h3>
    <p className="text-sm text-slate-400">Utility-First Framework</p>
  </div>
</div>`}</code></pre></div>
      </div>
    </div>
    </div>
  );
}

// Slide 2: Why Utility-First CSS?
export function Slide2({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">OVERVIEW</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Why Utility-First CSS?</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">How utility classes solve the classic pitfalls of traditional CSS files</p></div>
    <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
        <h4><span className="cross-icon inline-flex items-center justify-center text-red-400 shrink-0 mt-0.5 mr-1"><X className="w-3.5 h-3.5" /></span> Traditional CSS File Nightmare</h4>
        <p>You waste hours thinking of class names (<code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">.header-nav-card-item-inner</code>). The CSS file grows infinitely because you fear deleting unused rules.</p>
        <div className="alert-callout flex items-start gap-2.5 p-3 border border-slate-700 bg-slate-800/80 text-slate-300 text-[12.5px] leading-relaxed"><div>Result: Global naming collisions, style leakage, bloated CSS bundle.</div></div>
      </div>
      <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
        <h4><span className="check-icon inline-flex items-center justify-center text-green-400 shrink-0 mt-0.5 mr-1"><Check className="w-3.5 h-3.5" /></span> Tailwind Utility-First Superpower</h4>
        <p>You style directly inside your markup with predefined constraints. Purges unused classes automatically for a tiny ~10kB production stylesheet.</p>
        <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed"><div>No context switching between HTML and CSS files. Consistent spacing and colors.</div></div>
      </div>
    </div>
    </div>
  );
}

// Slide 3: Configuration & Setup
export function Slide3({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">SETUP</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Configuration &amp; Setup</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Importing Tailwind directives into your project</p></div>
    <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>src/app/globals.css</span><button className="copy-btn text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div><pre><code>{`@import "tailwindcss";

@theme {
  --color-brand-primary: #2563eb;
  --color-brand-accent: #6366f1;
  --font-display: 'Plus Jakarta Sans', sans-serif;
}`}</code></pre></div>
      <div className="terminal-mockup bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><div className="terminal-dots flex items-center gap-1.5"><span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span></div><span className="terminal-title text-[11px] text-slate-400 font-semibold">bash — install tailwind</span><button className="copy-btn text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div><div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs"><div className="term-line"><span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span><span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">pnpm add tailwindcss @tailwindcss/postcss postcss</span></div><div className="term-output text-slate-300  text-xs flex flex-col gap-1"><span>+ tailwindcss 4.0.0</span><span>+ @tailwindcss/postcss 4.0.0</span><span className="out-success flex items-center gap-1 mt-1"><Check className="w-3.5 h-3.5 text-emerald-400" />Packages installed successfully</span></div></div></div>
    </div>
    </div>
  );
}

// Slide 4: Sizing & Spacing System
export function Slide4({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">UTILITIES</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Sizing &amp; Spacing System</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Fixed mathematical scale for margins, paddings, and dimensions</p></div>
    <div className="clean-table-container w-full overflow-x-auto border border-slate-800">
      <table className="clean-table w-full border-collapse text-xs border border-slate-800">
        <thead><tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Utility Class</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">CSS Value</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Pixel Equivalent</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Usage Example</th></tr></thead>
        <tbody>
          <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">p-1</code> / <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">m-1</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">0.25rem</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">4px</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Micro gap, button tags</td></tr>
          <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">p-2</code> / <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">m-2</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">0.5rem</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">8px</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Small pill badges</td></tr>
          <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">p-3</code> / <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">m-3</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">0.75rem</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">12px</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Input fields</td></tr>
          <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">p-4</code> / <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">m-4</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">1rem</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">16px</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Standard card padding</td></tr>
          <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">p-4</code> / <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">m-5</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">1.25rem</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">20px</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Section card containers</td></tr>
          <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">w-full</code> / <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">max-w-xl</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">100% / 36rem</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Full width with cap</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Responsive containers</td></tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}

// Slide 5: Typography & Modern Colors
export function Slide5({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">TYPOGRAPHY</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Typography &amp; Modern Colors</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Pre-curated contrast and hierarchy</p></div>
    <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>Typography Classes</span></div><pre><code>{`<h1 className="text-3xl font-extrabold tracking-tight text-white">
  Main Heading
</h1>
<h2 className="text-xl font-bold text-slate-200 mt-2">
  Subtitle Heading
</h2>
<p className="text-sm text-slate-400 leading-relaxed mt-1">
  Descriptive paragraph text with balanced line height.
</p>
<span className=" text-xs text-blue-400">
  git status
</span>`}</code></pre></div>
      <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
        <h4>Color Palette Rules</h4>
        <p>1. Backgrounds: <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">bg-slate-900</code>, <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">bg-slate-900</code>, <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">bg-white</code></p>
        <p>2. Text: <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">text-slate-100</code> (primary), <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">text-slate-400</code> (muted)</p>
        <p>3. Accents: <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">text-blue-400</code>, <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">bg-blue-500</code>, <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">border-blue-500/30</code></p>
        <p>4. Borders: <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">border-slate-800</code>, <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">border-slate-200</code></p>
      </div>
    </div>
    </div>
  );
}

// Slide 6: Flexbox & CSS Grid in Action
export function Slide6({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">LAYOUT</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Flexbox &amp; CSS Grid in Action</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Building responsive 2-column and 3-column card layouts</p></div>
    <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>Responsive Grid Layout</span><button className="copy-btn text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div><pre><code>{`{/* Responsive 1 col on mobile, 3 cols on desktop */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {features.map((item) => (
    <div 
      key={item.id}
      className="flex flex-col justify-between p-4 bg-slate-900 border border-slate-800 rounded-lg"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs  text-blue-400">{item.tag}</span>
        <span className="text-xs text-slate-500">{item.date}</span>
      </div>
      <h3 className="text-base font-bold text-white mt-2">{item.title}</h3>
      <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
    </div>
  ))}
</div>`}</code></pre></div>
    </div>
  );
}

// Slide 7: Mobile-First Breakpoint Architecture
export function Slide7({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">RESPONSIVE</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Mobile-First Breakpoint Architecture</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Styles apply to mobile first, then scale up with prefixes</p></div>
    <div className="clean-table-container w-full overflow-x-auto border border-slate-800">
      <table className="clean-table w-full border-collapse text-xs border border-slate-800">
        <thead><tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Prefix</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Minimum Width</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">CSS Media Query</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Target Device</th></tr></thead>
        <tbody>
          <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">(default)</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">0px</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">(mobile first)</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">All smartphones</td></tr>
          <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">sm:</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">640px</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">@media (min-width: 640px)</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Large phones / small tablets</td></tr>
          <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">md:</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">768px</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">@media (min-width: 768px)</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Tablets / iPad</td></tr>
          <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">lg:</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">1024px</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">@media (min-width: 1024px)</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Laptops / Desktops</td></tr>
          <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">xl:</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">1280px</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">@media (min-width: 1280px)</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Large desktop monitors</td></tr>
        </tbody>
      </table>
    </div>
    <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed"><div>Example: <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">className="w-full md:w-1/2 lg:w-1/3"</code> makes a column full width on phones, half width on tablets, and one third on desktop.</div></div>
    </div>
  );
}

// Slide 8: Interactive Hover, Focus & Active States
export function Slide8({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">STATES</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Interactive Hover, Focus &amp; Active States</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Polished micro-animations with transition utilities</p></div>
    <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>Interactive Button Component</span><button className="copy-btn text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div><pre><code>{`<button className="
  px-4 py-2 
  bg-blue-600 text-white font-bold text-sm 
  rounded-lg 
  hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 
  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900
  active:scale-95 
  transition-all duration-150 ease-out
">
  Submit Form
</button>`}</code></pre></div>
    <div className="alert-callout flex items-start gap-2.5 p-3 border border-slate-700 bg-slate-800/80 text-slate-300 text-[12.5px] leading-relaxed"><div>Always include <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">focus:ring-2</code> for keyboard accessibility and <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">transition-all</code> for smooth visual feedback.</div></div>
    </div>
  );
}

// Slide 9: Tailwind Dark Mode Integration
export function Slide9({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">DARK MODE</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Tailwind Dark Mode Integration</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Effortless dual-theme support using the dark: variant</p></div>
    <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>Dual-Theme Card Example</span><button className="copy-btn text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div><pre><code>{`<div className="
  bg-white dark:bg-slate-900 
  text-slate-900 dark:text-slate-100 
  border border-slate-200 dark:border-slate-800 
  rounded-lg p-4 shadow-sm
">
  <h3 className="text-lg font-bold">Project Status</h3>
  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
    Automatically adapts when the user switches themes.
  </p>
</div>`}</code></pre></div>
    </div>
  );
}

// Slide 10: Reusable Component Extraction
export function Slide10({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">COMPONENTS</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Reusable Component Extraction</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">How to avoid class string duplication in React</p></div>
    <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
        <h4><span className="cross-icon inline-flex items-center justify-center text-red-400 shrink-0 mt-0.5 mr-1"><X className="w-3.5 h-3.5" /></span> Don't Overuse @apply</h4>
        <p>Do not create hundreds of custom CSS classes with <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">@apply</code>. That defeats the purpose of utility-first CSS and creates a bloated stylesheet.</p>
        <div className="alert-callout flex items-start gap-2.5 p-3 border border-slate-700 bg-slate-800/80 text-slate-300 text-[12.5px] leading-relaxed"><div>Only use @apply for global HTML element resets.</div></div>
      </div>
      <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
        <h4><span className="check-icon inline-flex items-center justify-center text-green-400 shrink-0 mt-0.5 mr-1"><Check className="w-3.5 h-3.5" /></span> Extract React Components</h4>
        <p>Wrap repeated markup in reusable components like <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">&lt;Button variant="primary" /&gt;</code> or <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">&lt;Card /&gt;</code>.</p>
        <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed"><div>This leads directly into modern component libraries like Shadcn UI!</div></div>
      </div>
    </div>
    </div>
  );
}

// Slide 11: Tailwind Developer Best Practices
export function Slide11({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">BEST PRACTICES</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Tailwind Developer Best Practices</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Writing clean, maintainable utility markup</p></div>
    <div className="summary-checklist-grid">
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span>Order classes logically: Layout <ChevronRight className="w-3.5 h-3.5 inline-block align-middle mx-1 text-slate-500" /> Spacing <ChevronRight className="w-3.5 h-3.5 inline-block align-middle mx-1 text-slate-500" /> Typography <ChevronRight className="w-3.5 h-3.5 inline-block align-middle mx-1 text-slate-500" /> Colors <ChevronRight className="w-3.5 h-3.5 inline-block align-middle mx-1 text-slate-500" /> States</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span>Install Tailwind CSS IntelliSense extension in VS Code / IDE</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span>Use arbitrary values (<code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">w-[350px]</code>) sparingly; stick to the scale</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span>Use opacity modifiers like <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">bg-blue-500/20</code> for sleek glows</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span>Ensure high contrast in both Light Mode and Dark Mode</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span>Use the <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">cn()</code> utility helper to merge conditional classes</span></div>
    </div>
    </div>
  );
}

// Slide 12: Tailwind CSS Mastery Checklist
export function Slide12({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">SUMMARY</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Tailwind CSS Mastery Checklist</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">You now have full control of modern utility styling</p></div>
    <div className="summary-checklist-grid">
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span>Utility-first philosophy: fast, scoped, zero CSS sprawl</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span>Sizing and spacing scale (p-1 to p-4)</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span>Flexbox and Grid responsive column layouts</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span>Mobile-first responsive breakpoints (sm, md, lg, xl)</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span>Micro-interactions with hover, focus, and transition</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span>Seamless dark mode with dark: modifiers</span></div>
    </div>
    <div className="quote-banner p-3 bg-slate-800/60 border-l-4 border-blue-500 text-slate-300 italic text-xs leading-relaxed">Next step: Combine Tailwind with accessible Radix primitives in Shadcn UI!</div>
    <div className="mt-4 text-center"><a href="shadcn.html" className="btn-cta-primary inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 border border-blue-600 text-white text-xs font-bold cursor-pointer transition-colors no-underline rounded" onClick={onRestart}>Continue to Lesson 05: Shadcn UI <ArrowRight className="w-3.5 h-3.5" /></a></div>
    </div>
  );
}

export const TAILWIND_META = {
  id: "tailwindcss",
  title: "Tailwind CSS: Modern Utility-First Styling",
  module: "MODULE 04",
  accent: "sky",
};

export const TAILWIND_SLIDES = [
  {
    id: 1,
    title: "MODULE 04 • MODERN CSS",
    part: "WELCOME",
    Component: Slide1,
  },
  {
    id: 2,
    title: "Why Utility-First CSS?",
    part: "OVERVIEW",
    Component: Slide2,
  },
  {
    id: 3,
    title: "Configuration & Setup",
    part: "SETUP",
    Component: Slide3,
  },
  {
    id: 4,
    title: "Sizing & Spacing System",
    part: "UTILITIES",
    Component: Slide4,
  },
  {
    id: 5,
    title: "Typography & Modern Colors",
    part: "TYPOGRAPHY",
    Component: Slide5,
  },
  {
    id: 6,
    title: "Flexbox & CSS Grid in Action",
    part: "LAYOUT",
    Component: Slide6,
  },
  {
    id: 7,
    title: "Mobile-First Breakpoint Architecture",
    part: "RESPONSIVE",
    Component: Slide7,
  },
  {
    id: 8,
    title: "Interactive Hover, Focus & Active States",
    part: "STATES",
    Component: Slide8,
  },
  {
    id: 9,
    title: "Tailwind Dark Mode Integration",
    part: "DARK MODE",
    Component: Slide9,
  },
  {
    id: 10,
    title: "Reusable Component Extraction",
    part: "COMPONENTS",
    Component: Slide10,
  },
  {
    id: 11,
    title: "Tailwind Developer Best Practices",
    part: "BEST PRACTICES",
    Component: Slide11,
  },
  {
    id: 12,
    title: "Tailwind CSS Mastery Checklist",
    part: "SUMMARY",
    Component: Slide12,
  },
];
