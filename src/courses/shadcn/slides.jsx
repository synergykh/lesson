import React from "react";
import { Check, ArrowRight, X, Award } from "lucide-react";

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
        <div className="title-actions-row"><button className="btn-cta-primary inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 border border-blue-600 text-white text-xs font-bold cursor-pointer transition-colors no-underline rounded" id="btn-start-course" onClick={onStart}>Start Module <ArrowRight className="w-3.5 h-3.5" /></button><span className="cta-hint">or press <kbd>Space</kbd> / <kbd>→</kbd></span></div>
      </div>
      <div className="title-visual-col">
        <div className="terminal-mockup bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><div className="terminal-dots flex items-center gap-1.5"><span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span></div><span className="terminal-title text-[11px] text-slate-400 font-semibold">bash — add components</span></div><div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs"><div className="term-line"><span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span><span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">pnpm dlx shadcn@latest add button card dialog</span></div><div className="term-output text-slate-300  text-xs flex flex-col gap-1"><span><Check className="w-3 h-3 text-emerald-400 inline-block align-middle mr-1" />Installing dependencies: @radix-ui/react-slot, @radix-ui/react-dialog...</span><span><Check className="w-3 h-3 text-emerald-400 inline-block align-middle mr-1" />Created components/ui/button.tsx</span><span><Check className="w-3 h-3 text-emerald-400 inline-block align-middle mr-1" />Created components/ui/card.tsx</span><span><Check className="w-3 h-3 text-emerald-400 inline-block align-middle mr-1" />Created components/ui/dialog.tsx</span><span className="out-success mt-1">Success! 3 components added to your codebase.</span></div></div></div>
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
        <h4><span className="cross-icon inline-flex items-center justify-center text-red-400 shrink-0 mt-0.5 mr-1"><X className="w-3.5 h-3.5" /></span> Traditional Component Libraries (MUI/Chakra)</h4>
        <p>You install a massive npm package. Overriding styles is painful with complex CSS-in-JS wrappers. Upgrades break your custom designs.</p>
        <div className="alert-callout flex items-start gap-2.5 p-3 border border-slate-700 bg-slate-800/80 text-slate-300 text-[12.5px] leading-relaxed"><div>You are locked into their opinions and cannot easily modify internal component code.</div></div>
      </div>
      <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
        <h4><span className="check-icon inline-flex items-center justify-center text-green-400 shrink-0 mt-0.5 mr-1"><Check className="w-3.5 h-3.5" /></span> The Shadcn UI Philosophy</h4>
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
    <div className="terminal-mockup bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><div className="terminal-dots flex items-center gap-1.5"><span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span></div><span className="terminal-title text-[11px] text-slate-400 font-semibold">bash — init shadcn</span><button className="copy-btn text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div><div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs"><div className="term-line"><span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span><span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">pnpm dlx shadcn@latest init</span></div><div className="term-output text-slate-300  text-xs flex flex-col gap-1"><span><Check className="w-3 h-3 text-emerald-400 inline-block align-middle mr-1" />Which style would you like to use? › New York</span><span><Check className="w-3 h-3 text-emerald-400 inline-block align-middle mr-1" />Which color would you like to use as base color? › Zinc</span><span><Check className="w-3 h-3 text-emerald-400 inline-block align-middle mr-1" />Would you like to use CSS variables for colors? › Yes</span><span><Check className="w-3 h-3 text-emerald-400 inline-block align-middle mr-1" />Where is your global CSS file? › src/app/globals.css</span><span><Check className="w-3 h-3 text-emerald-400 inline-block align-middle mr-1" />Configure the import alias for components: › @/components</span><span><Check className="w-3 h-3 text-emerald-400 inline-block align-middle mr-1" />Configure the import alias for utils: › @/lib/utils</span><span className="out-success mt-1">Success! Project initialized with components.json</span></div></div></div>
    </div>
  );
}

// Slide 5: The cn() Utility & Class Merging
export function Slide5({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">UTILITIES</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">The cn() Utility &amp; Class Merging</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Safely combining conditional classes and overriding Tailwind styles</p></div>
    <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>src/lib/utils.ts</span><button className="copy-btn text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div><pre><code>{`import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}</code></pre></div>
    <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed"><div><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">tailwind-merge</code> resolves Tailwind class conflicts intelligently. If a component defines <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">p-4</code> and the caller passes <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">p-4</code>, <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">p-4</code> wins cleanly instead of both classes fighting in CSS!</div></div>
    </div>
  );
}

// Slide 6: Adding Components via CLI
export function Slide6({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">COMPONENTS</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Adding Components via CLI</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Grabbing exactly what you need without dependency bloat</p></div>
    <div className="terminal-mockup bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><div className="terminal-dots flex items-center gap-1.5"><span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span></div><span className="terminal-title text-[11px] text-slate-400 font-semibold">bash — add components</span><button className="copy-btn text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div><div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs"><div className="term-line"><span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span><span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">pnpm dlx shadcn@latest add button badge card dialog</span></div><div className="term-output text-slate-300  text-xs flex flex-col gap-1"><span>Installing @radix-ui/react-slot @radix-ui/react-dialog...</span><span>Created src/components/ui/button.tsx</span><span>Created src/components/ui/badge.tsx</span><span>Created src/components/ui/card.tsx</span><span>Created src/components/ui/dialog.tsx</span><span className="out-success flex items-center gap-1 mt-1"><Check className="w-3.5 h-3.5 text-emerald-400" />Done! You can now import them into any page.</span></div></div></div>
    </div>
  );
}

// Slide 7: The Button Component & Variants
export function Slide7({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">BUTTON</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">The Button Component &amp; Variants</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Understanding class-variance-authority (cva)</p></div>
    <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>Usage Example</span><button className="copy-btn text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div><pre><code>{`import { Button } from '@/components/ui/button';
import { ArrowRight, Trash2 } from 'lucide-react';

export function ButtonShowcase() {
  return (
    <div className="flex flex-wrap items-center gap-3 p-4">
      <Button variant="default">Primary Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive" size="sm">
        <Trash2 className="w-4 h-4 mr-2" /> Delete
      </Button>
      <Button variant="default" size="lg">
        Get Started <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}`}</code></pre></div>
    </div>
  );
}

// Slide 8: Card Component Architecture
export function Slide8({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">CARD</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Card Component Architecture</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Composing headers, content, and actions semantically</p></div>
    <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>components/ProjectCard.tsx</span><button className="copy-btn text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div><pre><code>{`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function ProjectCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Repository Sync</CardTitle>
          <Badge variant="outline">Active</Badge>
        </div>
        <CardDescription>Last synchronized 2 minutes ago</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Branches: main, feature-auth</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View Details</Button>
        <Button>Sync Now</Button>
      </CardFooter>
    </Card>
  );
}`}</code></pre></div>
    </div>
  );
}

// Slide 9: Accessible Dialogs & Overlays
export function Slide9({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">MODALS</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Accessible Dialogs &amp; Overlays</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Full accessibility with focus traps and escape key handling</p></div>
    <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>Dialog Example</span><button className="copy-btn text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div><pre><code>{`import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function DeleteRepoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Project</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your repository from the server.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-3 mt-4">
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Confirm Delete</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}`}</code></pre></div>
    </div>
  );
}

// Slide 10: Theming & CSS Variables
export function Slide10({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">THEMING</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Theming &amp; CSS Variables</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">Effortless dark mode with design tokens</p></div>
    <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>src/app/globals.css (Tokens)</span></div><pre><code>{`:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --radius: 0.5rem;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 10% 5%;
  --primary: 0 0% 98%;
  --primary-foreground: 240 5.9% 10%;
}`}</code></pre></div>
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
      <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md"><div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>DashboardWidget.tsx</span></div><pre><code>{`export function DashboardWidget() {
  return (
    <Card className="p-4 border-slate-800 bg-slate-900">
      <div className="flex items-center justify-between mb-4">
        <Badge>Production Ready</Badge>
        <span className="text-xs text-slate-400">v2.4.0</span>
      </div>
      <h3 className="font-bold text-white text-lg">Deploy Pipeline</h3>
      <p className="text-sm text-slate-400 mt-1">Zero-config deployment with Git push</p>
      <div className="flex gap-2 mt-4">
        <Button className="w-full">Deploy Now</Button>
      </div>
    </Card>
  );
}`}</code></pre></div>
      <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
        <h4>Why This Architecture Wins</h4>
        <p><span className="check-icon inline-flex items-center justify-center text-green-400 shrink-0 mt-0.5 mr-1.5"><Check className="w-3.5 h-3.5" /></span> Completely accessible out of the box</p>
        <p><span className="check-icon inline-flex items-center justify-center text-green-400 shrink-0 mt-0.5 mr-1.5"><Check className="w-3.5 h-3.5" /></span> Code is stored in your repo, not node_modules</p>
        <p><span className="check-icon inline-flex items-center justify-center text-green-400 shrink-0 mt-0.5 mr-1.5"><Check className="w-3.5 h-3.5" /></span> Zero runtime performance overhead</p>
        <p><span className="check-icon inline-flex items-center justify-center text-green-400 shrink-0 mt-0.5 mr-1.5"><Check className="w-3.5 h-3.5" /></span> Perfectly matches your custom design system</p>
      </div>
    </div>
    </div>
  );
}

// Slide 12: Curriculum Completed!
export function Slide12({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header-group flex items-start justify-between border-b border-slate-800 pb-3 gap-3"><span className="slide-category-tag  text-[11px] font-bold uppercase tracking-wider text-blue-400">SUMMARY</span><h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight"><Award className="w-5 h-5 text-orange-400 inline-block align-middle mr-1.5" />Curriculum Completed!</h2><p className="slide-subtitle text-[13px] text-slate-400 m-0">You have traversed the complete modern web development stack</p></div>
    <div className="summary-checklist-grid">
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span><strong>01. Git:</strong> Local tracking, commits, branches, mental model</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span><strong>02. GitHub:</strong> Cloud repositories, remotes, push/pull, pull requests</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span><strong>03. Next.js:</strong> App Router, Server Components, SSR, API routes</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span><strong>04. Tailwind CSS:</strong> Utility classes, responsive design, dark mode</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span><strong>05. Shadcn UI:</strong> Radix primitives, accessible components, clean design</span></div>
      <div className="checklist-item flex items-start gap-2.5 p-2.5 bg-slate-800/60 border border-slate-800 text-xs text-slate-300"><Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /><span><strong>Fullstack Readiness:</strong> From your first line of code to production!</span></div>
    </div>
    <div className="quote-banner p-3 bg-slate-800/60 border-l-4 border-blue-500 text-slate-300 italic text-xs leading-relaxed">Congratulations on completing the entire 5-module curriculum!</div>
    <div className="mt-4 text-center"><a href="../index.html" className="btn-cta-primary inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 border border-blue-600 text-white text-xs font-bold cursor-pointer transition-colors no-underline rounded" onClick={onRestart}>Return to Curriculum Home <ArrowRight className="w-3.5 h-3.5" /></a></div>
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
