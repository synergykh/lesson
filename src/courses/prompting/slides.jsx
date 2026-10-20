import React from "react";

// Slide 1: What AI Is and How Language Models Work
export function Slide1({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p1_badge">SECTION 01: UNDERSTANDING AI</span>
                <h1 className="slide-title title-main-h1 text-2xl md:text-3xl font-extrabold text-white m-0 leading-tight" data-i18n="s1_head">What AI Is and How Language Models Work</h1>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s1_sub">Probabilistic text prediction vs. deterministic computation</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">MODULE 09</span>
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">CRITICAL THINKING</span>
              </div>
            </div>
            <div className="title-hero-grid grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-4 items-center">
              <div className="slide-stack flex flex-col gap-3">
                <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                  <svg viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>
                  <div data-i18n="s1_desc">A developer guide to transforming vague chat prompts into rigorous software specifications, systematic debugging protocols, safe agent execution, and empirical code verification.</div>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s1_c1_title">Language Models Predict Tokens</h4>
                  <p data-i18n="s1_c1_p">An LLM calculates the mathematical probability of subsequent tokens based on patterns in training data. It does not possess intent, consciousness, or direct access to code execution unless given explicit tools.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s1_c2_title">AI Output Is a Proposal</h4>
                  <p data-i18n="s1_c2_p">Because LLMs generate statistically plausible completions, their answers sound confident even when wrong. Every output is an unverified proposal requiring empirical human inspection.</p>
                </div>
                <button className="btn-primary-action btn-start-course px-4 py-2 mt-1 w-max" onClick={onStart}>
                  <span data-i18n="ui_start_course">Start Course</span>
                  <svg width="14" height="14" viewBox="0 0 16 16"><path fillRule="evenodd" d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06z"/></svg>
                </button>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                  <div className="terminal-dots flex items-center gap-1.5"><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span></div>
                  <span className="terminal-title text-[11px] text-slate-400 font-semibold">mental-model — verification pipeline</span>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
Question / Specification
      ↓
AI Interprets Context &amp; Tokens
      ↓
Generates Proposal (Statistical Hypothesis)
      ↓
Human Developer Reviews &amp; Doubts
      ↓
Verify with Evidence (Tests, Linters, Logs)
      ↓
Production Delivery
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 2: Hallucinations & Failure Modes
export function Slide2({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p1_badge">SECTION 01: UNDERSTANDING AI</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s2_head">Hallucinations &amp; Failure Modes</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s2_sub">Why AI invents APIs, packages, and syntax out of thin air</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">HALLUCINATIONS</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s2_c1_title">What Causes Hallucination?</h4>
                  <p data-i18n="s2_c1_p">Hallucinations occur when the model bridges context gaps with statistical guesses. If documentation or repo constraints are omitted, it invents plausible-sounding functions, arguments, or libraries.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s2_c2_title">Generation vs. Verification</h4>
                  <p data-i18n="s2_c2_p">Generating code takes seconds; validating that it respects concurrency, database transaction locks, and backward compatibility requires rigorous automated tests and human review.</p>
                </div>
                <div className="alert-callout danger flex items-start gap-2.5 p-3 border border-red-500/30 bg-red-500/10 text-red-300 text-[12.5px] leading-relaxed">
                  <svg viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
                  <div><strong>Key Principle:</strong> AI output is a proposal to evaluate with proof, never automatically a fact to trust blindly.</div>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                  <div className="terminal-dots flex items-center gap-1.5"><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span></div>
                  <span className="terminal-title text-[11px] text-slate-400 font-semibold">hallucination — real example</span>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
<span className="term-comment">// Model suggested function:</span>
<span className="text-red-400">import &#123; useDatabaseCache &#125; from 'next/cache';</span>
<span className="term-comment">// FATAL ERROR: Module 'next/cache' has no exported</span>
<span className="term-comment">// member 'useDatabaseCache'. It was hallucinated!</span>

<span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">// Real production Next.js 15 pattern:</span>
import &#123; unstable_cache &#125; from 'next/cache';
const getCachedUsers = unstable_cache(
  async () =&gt; db.select().from(users),
  ['users-key'],
  &#123; revalidate: 60, tags: ['users'] &#125;
);
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 3: The Verification Protocol
export function Slide3({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p1_badge">SECTION 01: UNDERSTANDING AI</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s3_head">The Verification Protocol</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s3_sub">Evidence-based software engineering with AI assistance</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">VERIFICATION</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s3_c1_title">The Human-in-the-Loop Contract</h4>
                  <p data-i18n="s3_c1_p">Never commit AI-generated code directly to production without testing. Always verify syntax, execute test suites, inspect git diffs, and confirm behavior against official specs.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s3_c2_title">The 5-Step Reality Cycle</h4>
                  <p data-i18n="s3_c2_p">1. Prompt -&gt; 2. Model Interprets -&gt; 3. Proposal Generated -&gt; 4. Human Inspects -&gt; 5. Evidence Verification (tests, compiler, linters, logs).</p>
                </div>
              </div>
              <div className="clean-table-wrap w-full overflow-x-auto border border-slate-800">
                <table className="clean-table w-full border-collapse text-xs border border-slate-800">
                  <thead>
                    <tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Evidence Source</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">What It Confirms</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">AI Risk Avoided</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">tsc --noEmit</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Type safety, API contracts</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Hallucinated properties</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">pnpm test</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Logic, edge cases</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Silent regression bugs</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">git diff</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Scope, unrequested edits</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Collateral file destruction</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Server Telemetry</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Latency, memory, locks</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Unindexed query bottlenecks</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
    </div>
  );
}

// Slide 4: Vague Requests vs. Precise Specifications
export function Slide4({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p2_badge">SECTION 02: WHAT IS A PROMPT?</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s4_head">Vague Requests vs. Precise Specifications</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s4_sub">Why 'make me a website' fails and detailed prompts succeed</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">SPECIFICATIONS</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s4_c1_title">Vague Prompts Breed Assumptions</h4>
                  <p data-i18n="s4_c1_p">When a prompt lacks technology stack, architectural boundaries, or constraints, the AI guesses every variable, resulting in generic, disconnected, or unmaintainable code.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s4_c2_title">Questions vs. Actionable Tasks</h4>
                  <p data-i18n="s4_c2_p">Asking 'How do I do auth?' yields a generic tutorial. Prompting 'Implement NextAuth v5 session middleware matching our schema with role-based guards' yields production code.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                  <div className="terminal-dots flex items-center gap-1.5"><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span></div>
                  <span className="terminal-title text-[11px] text-slate-400 font-semibold">prompt-contrast — comparison</span>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
<span className="text-red-400 font-bold">❌ WEAK PROMPT:</span>
"Make me a website."
→ Generates a generic HTML/CSS landing page with lorem ipsum.

<span className="text-green-400 font-bold">✔ PRECISE SPECIFICATION:</span>
"Build a task dashboard using Next.js 15 App Router, TypeScript,
Tailwind CSS, and Neon PostgreSQL. Include user authorization,
Zod schema validation, optimistic UI updates, and return a
clean git diff. Inspect existing db/schema.ts before coding."
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 5: Weak vs. Strong Prompt Comparison
export function Slide5({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p2_badge">SECTION 02: WHAT IS A PROMPT?</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s5_head">Weak vs. Strong Prompt Comparison</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s5_sub">Deconstructing prompt quality with real engineering examples</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">ANATOMY</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card border-red-500/40">
                <h4 className="text-red-400" data-i18n="s5_c1_title">Weak Prompt: Ambiguous</h4>
                <p data-i18n="s5_c1_p">'Build a task app.' Missing: Framework, database, security, state management, validation, pagination, error boundaries, styling conventions.</p>
                <div className="terminal-window mt-2">
                  <div className="terminal-body text-xs text-slate-400">
Result: Hallucinates random libraries, invents local storage state, ignores your database, and breaks your project design system.
                  </div>
                </div>
              </div>
              <div className="info-card border-green-500/40">
                <h4 className="text-green-400" data-i18n="s5_c2_title">Strong Prompt: Concrete Specification</h4>
                <p data-i18n="s5_c2_p">'Build a task dashboard using Next.js 15 App Router, TypeScript, and Neon PostgreSQL. Enforce user authorization, Zod validation, optimistic UI updates, and return changed files.'</p>
                <div className="terminal-window mt-2">
                  <div className="terminal-body text-xs text-green-300">
Result: Produces idiomatic server actions, imports your existing db client, preserves dark theme tokens, and handles error states.
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 6: The Prompt Economy
export function Slide6({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p2_badge">SECTION 02: WHAT IS A PROMPT?</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s6_head">The Prompt Economy</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s6_sub">Token budgets, signal-to-noise ratio, and prompt hygiene</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">EFFICIENCY</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s6_c1_title">Garbage In, Garbage Out</h4>
                  <p data-i18n="s6_c1_p">The quality of an AI output is strictly bounded by the precision of its input. Vague requirements inevitably yield brittle architecture and phantom bugs.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s6_c2_title">Conciseness Over Bloat</h4>
                  <p data-i18n="s6_c2_p">Writing a strong prompt does not mean writing a 10-page novel. Provide high-signal facts, exact file paths, schemas, and non-negotiable constraints.</p>
                </div>
              </div>
              <div className="flow-diagram flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">1</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Input Context</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">Targeted, high-signal</div>
                </div>
                <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">2</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Constraints</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">Boundaries set</div>
                </div>
                <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">3</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Verified Code</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">Production grade</div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 7: The 7-Pillar Universal Prompt Formula
export function Slide7({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p3_badge">SECTION 03: THE PROMPT FORMULA</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s7_head">The 7-Pillar Universal Prompt Formula</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s7_sub">Role + Goal + Context + Requirements + Constraints + Output + Verification</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">FORMULA</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s7_c1_title">Role &amp; Goal</h4>
                  <p data-i18n="s7_c1_p">Role sets technical perspective and tone (e.g. Senior Security Auditor). Goal establishes the exact business or technical objective.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s7_c2_title">Context &amp; Requirements</h4>
                  <p data-i18n="s7_c2_p">Context provides current state, files, versions, and dependencies. Requirements state the exact capabilities the solution must deliver.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                  <div className="terminal-dots flex items-center gap-1.5"><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span></div>
                  <span className="terminal-title text-[11px] text-slate-400 font-semibold">formula — 7 pillars</span>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
1. ROLE:          Senior Full-Stack Developer
2. GOAL:          Optimize database queries on /dashboard
3. CONTEXT:       Next.js 15, Neon PostgreSQL, Drizzle ORM
4. REQUIREMENTS:  Run EXPLAIN ANALYZE, identify slow joins
5. CONSTRAINTS:   Do not alter schema or delete existing data
6. OUTPUT FORMAT: Migration SQL + TypeScript diff
7. VERIFICATION:  Query latency under 50ms verified by logs
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 8: Constraints, Output & Verification
export function Slide8({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p3_badge">SECTION 03: THE PROMPT FORMULA</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s8_head">Constraints, Output &amp; Verification</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s8_sub">Guarding boundaries and defining proof of correctness</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">GUARDRAILS</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s8_c1_title">Explicit Constraints</h4>
                  <p data-i18n="s8_c1_p">State what the AI must NOT do: Do not add dependencies, do not alter unrelated files, do not rewrite database schemas, do not remove backward compatibility.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s8_c2_title">Output Format &amp; Proof</h4>
                  <p data-i18n="s8_c2_p">Specify format (e.g. unified diff, JSON schema, step-by-step checklist) and define the criteria required to verify that the solution genuinely works.</p>
                </div>
              </div>
              <div className="alert-callout info flex items-start gap-2.5 p-3 border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[12.5px] leading-relaxed">
                <svg viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                <div><strong>Why Negative Constraints Matter:</strong> Without negative constraints ("Do not..."), LLMs default to rewriting entire files, swapping libraries, or deleting unmentioned helper functions.</div>
              </div>
            </div>
    </div>
  );
}

// Slide 9: Formula in Action: Fullstack Optimization
export function Slide9({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p3_badge">SECTION 03: THE PROMPT FORMULA</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s9_head">Formula in Action: Fullstack Optimization</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s9_sub">A production example applying all 7 prompt pillars</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">EXAMPLE</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s9_c1_title">Structured Anatomy</h4>
                  <p data-i18n="s9_c1_p">Role: Senior DBA -&gt; Goal: Optimize slow queries -&gt; Context: PostgreSQL on Neon, Next.js App Router -&gt; Constraints: No schema breaking changes -&gt; Output: EXPLAIN ANALYZE + SQL index migrations.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s9_c2_title">Flexibility as a Guideline</h4>
                  <p data-i18n="s9_c2_p">The formula is a mental checklist, not an immutable dogma. For a 2-line bug fix, focus on Goal, Context, and Constraints; for architectural changes, use all 7.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                  <div className="terminal-dots flex items-center gap-1.5"><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span></div>
                  <span className="terminal-title text-[11px] text-slate-400 font-semibold">production-prompt.txt</span>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
Act as a Senior Database Architect.
Analyze the slow query on GET /api/dashboard.
Context: Neon PostgreSQL, Drizzle ORM, table 'orders' (2M rows).
Requirements: Identify missing indexes and N+1 query patterns.
Constraints: Do not change database columns. Do not add packages.
Output: Show EXPLAIN ANALYZE comparison and Drizzle query fix.
Verification: Query execution time drops under 35ms.
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 10: Context Density & Attention Allocation
export function Slide10({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p4_badge">SECTION 04: CONTEXT IS EVERYTHING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s10_head">Context Density &amp; Attention Allocation</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s10_sub">How language models process context windows and why relevance matters</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">CONTEXT</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s10_c1_title">The Attention Economy</h4>
                  <p data-i18n="s10_c1_p">Modern models have large context windows, but relevant tokens can get diluted. Flooding the prompt with 50 irrelevant files degrades reasoning performance.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s10_c2_title">High-Signal Context</h4>
                  <p data-i18n="s10_c2_p">Always provide: Exact package versions, database schemas, relevant route handlers, actual error stack traces, and existing conventions.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body text-xs ">
<span className="text-red-400">Weak Context:</span>
"My app broke with status 500. Fix it."
→ Zero clues. AI has to guess between 100 possible causes.

<span className="text-green-400">High-Density Context:</span>
"In app/api/tasks/route.ts line 24, neon() throws error:
'password authentication failed for user neondb_owner'.
DATABASE_URL is defined in .env.local. Verify connection string."
→ Pinpoints the root cause in 5 seconds.
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 11: Context Pyramid: What to Include
export function Slide11({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p4_badge">SECTION 04: CONTEXT IS EVERYTHING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s11_head">Context Pyramid: What to Include</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s11_sub">Structuring contextual information from foundation to incident</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">PYRAMID</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s11_c1_title">Foundation &amp; Architecture</h4>
                  <p data-i18n="s11_c1_p">Tier 1: Tech stack, project type, runtime. Tier 2: File structure, shared types, ORM schema. Tier 3: Directly affected functions and dependencies.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s11_c2_title">Incident Telemetry</h4>
                  <p data-i18n="s11_c2_p">Tier 4: Observed behavior vs expected behavior. Tier 5: Raw logs, browser console output, HTTP status codes, and reproduction steps.</p>
                </div>
              </div>
              <div className="clean-table-wrap w-full overflow-x-auto border border-slate-800">
                <table className="clean-table w-full border-collapse text-xs border border-slate-800">
                  <thead>
                    <tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Tier</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Context Element</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Example Value</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">1</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Framework / Runtime</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Next.js 15.1, Node.js 20.x, Linux</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">2</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Database / ORM</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">PostgreSQL 16 on Neon, Drizzle ORM</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">3</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Target File</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">app/dashboard/actions.ts</code></td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">4</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Telemetry</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">HTTP 500, error code <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">23505</code></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
    </div>
  );
}

// Slide 12: The Minimal Sufficient Context Rule
export function Slide12({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p4_badge">SECTION 04: CONTEXT IS EVERYTHING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s12_head">The Minimal Sufficient Context Rule</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s12_sub">Maximizing model intelligence while eliminating noise</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">PRECISION</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s12_c1_title">Avoid Premature Bloat</h4>
                  <p data-i18n="s12_c1_p">Do not paste your entire `package-lock.json` or entire build output. Extract the first fatal error, the relevant dependency versions, and the target file snippet.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s12_c2_title">Verifiable Ground Truth</h4>
                  <p data-i18n="s12_c2_p">Always tell the model which files are verified ground truth and which are user hypotheses. Instruct the model not to assume unconfirmed facts.</p>
                </div>
              </div>
              <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                <svg viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>
                <div><strong>Rule of Thumb:</strong> Supply the smallest amount of context that adequately explains the task without requiring the model to guess your architecture.</div>
              </div>
            </div>
    </div>
  );
}

// Slide 13: Role Priming: Framing Perspectives
export function Slide13({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p5_badge">SECTION 05: DEFINE THE ROLE CORRECTLY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s13_head">Role Priming: Framing Perspectives</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s13_sub">Guiding the model's vocabulary, skepticism, and review standards</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">ROLE PRIMING</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s13_c1_title">Why Roles Change Output</h4>
                  <p data-i18n="s13_c1_p">Setting a role primes the model's latent probability distribution toward domain-specific vocabulary, quality standards, edge-case vigilance, and tone.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s13_c2_title">Generic vs Specialized Roles</h4>
                  <p data-i18n="s13_c2_p">'Act as a coder' produces beginner-friendly code with tutorial comments. 'Act as a Senior Distributed Systems Engineer' focuses on idempotency, race conditions, and latency.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                  <div className="terminal-dots flex items-center gap-1.5"><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span></div>
                  <span className="terminal-title text-[11px] text-slate-400 font-semibold">role-comparison</span>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
<span className="text-slate-400">"Act as a developer"</span>
→ Writes a basic fetch() function without error handling or retries.

<span className="text-blue-400">"Act as a Senior Infrastructure Engineer"</span>
→ Adds exponential backoff, circuit breaking, abort signals,
and structured telemetry logging.
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 14: The Expert Personas Catalog
export function Slide14({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p5_badge">SECTION 05: DEFINE THE ROLE CORRECTLY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s14_head">The Expert Personas Catalog</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s14_sub">Targeted personas for distinct software engineering disciplines</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">PERSONAS</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s14_c1_title">System &amp; Security Personas</h4>
                  <p data-i18n="s14_c1_p">Senior Security Auditor (focuses on OWASP Top 10, sanitization, auth bypass), Cloud Infrastructure Architect (focuses on serverless limits, cold starts, cost).</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s14_c2_title">Database &amp; UI Personas</h4>
                  <p data-i18n="s14_c2_p">PostgreSQL Performance Specialist (focuses on indexes, connection pools, VACUUM), Lead Frontend Architect (focuses on accessibility, layout shifts, bundle size).</p>
                </div>
              </div>
              <div className="clean-table-wrap w-full overflow-x-auto border border-slate-800">
                <table className="clean-table w-full border-collapse text-xs border border-slate-800">
                  <thead>
                    <tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Persona Name</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Primary Focus</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Key Output</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Senior Security Auditor</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Vulnerabilities, auth, sanitization</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">CWE/OWASP severity audit</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">PostgreSQL DBA</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Query latency, locks, indexing</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">EXPLAIN ANALYZE + SQL index</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">UI/UX Systems Architect</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Accessibility, token consistency</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Accessible semantic HTML/Tailwind</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Production QA Engineer</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Failing edge cases, regression</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Parameterized test suites</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
    </div>
  );
}

// Slide 15: Role-Playing Does Not Guarantee Accuracy
export function Slide15({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p5_badge">SECTION 05: DEFINE THE ROLE CORRECTLY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s15_head">Role-Playing Does Not Guarantee Accuracy</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s15_sub">A critical boundary: Persona sets tone, not verified expertise</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">LIMITATIONS</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s15_c1_title">The Confidence Illusion</h4>
                  <p data-i18n="s15_c1_p">Telling an AI to 'Act as a world-class cryptographer' does not impart mathematical superpowers; it may still generate insecure custom hashing or weak random salts.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s15_c2_title">Pair Role with Acceptance Criteria</h4>
                  <p data-i18n="s15_c2_p">Never rely on the role alone to enforce quality. Always combine role priming with non-negotiable technical requirements and automated test verification.</p>
                </div>
              </div>
              <div className="alert-callout danger flex items-start gap-2.5 p-3 border border-red-500/30 bg-red-500/10 text-red-300 text-[12.5px] leading-relaxed">
                <svg viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/></svg>
                <div><strong>Golden Rule:</strong> Roles guide the framing and vocabulary of the response. Rigorous tests, compilers, and linters determine if the code is actually true.</div>
              </div>
            </div>
    </div>
  );
}

// Slide 16: Requirements vs. Constraints
export function Slide16({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p6_badge">SECTION 06: REQUIREMENTS AND CONSTRAINTS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s16_head">Requirements vs. Constraints</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s16_sub">Defining what must be accomplished versus what must never happen</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">REQUIREMENTS</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card border-blue-500/40">
                <h4 className="text-blue-400" data-i18n="s16_c1_title">Functional Requirements</h4>
                <p data-i18n="s16_c1_p">Requirements describe active desired behaviors: 'Add search filter by tag', 'Return JSON pagination metadata', 'Hash passwords with Argon2id'.</p>
              </div>
              <div className="info-card border-amber-500/40">
                <h4 className="text-amber-400" data-i18n="s16_c2_title">Protective Constraints</h4>
                <p data-i18n="s16_c2_p">Constraints prevent collateral damage: 'Do not modify database schema', 'Do not introduce new npm packages', 'Preserve existing function signatures'.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 17: Guardrails for Legacy & Production Systems
export function Slide17({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p6_badge">SECTION 06: REQUIREMENTS AND CONSTRAINTS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s17_head">Guardrails for Legacy &amp; Production Systems</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s17_sub">Preventing accidental rewrites, breaking changes, and visual degradation</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">SAFETY</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s17_c1_title">The Non-Destructive Injunction</h4>
                  <p data-i18n="s17_c1_p">AI models love to rewrite entire files from scratch. Explicitly state: 'Perform minimal surgical edits; preserve existing coding conventions and unrelated logic.'</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s17_c2_title">Backward Compatibility Rules</h4>
                  <p data-i18n="s17_c2_p">Demand that public API contracts, database column names, and client query parameters remain 100% backward compatible unless deprecation was requested.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                  <div className="terminal-dots flex items-center gap-1.5"><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span></div>
                  <span className="terminal-title text-[11px] text-slate-400 font-semibold">constraints-example</span>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="terminal-body  text-xs text-amber-300">
CONSTRAINTS:
- Keep all border-radius strictly at 0px.
- Use pnpm as the ONLY package manager; do not run npm.
- Never execute git add, git commit, or git push.
- Do not introduce new ORMs (stick to current Drizzle).
- Keep changes unstaged for my review.
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 18: Writing Strict Acceptance Criteria
export function Slide18({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p6_badge">SECTION 06: REQUIREMENTS AND CONSTRAINTS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s18_head">Writing Strict Acceptance Criteria</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s18_sub">The checklist that turns subjective tasks into binary passes or fails</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">DEFINITION OF DONE</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s18_c1_title">Definition of Done</h4>
                  <p data-i18n="s18_c1_p">A task is only done when: 1. Existing unit tests pass. 2. TypeScript compilation passes with zero errors. 3. No secrets are logged. 4. Edge cases are handled.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s18_c2_title">Self-Review Requirement</h4>
                  <p data-i18n="s18_c2_p">Instruct the model: 'Before printing the final response, self-review your code against every requirement and constraint. Explicitly list any trade-offs made.'</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
ACCEPTANCE CHECKLIST:
[ ] Task is complete ONLY when `pnpm build` succeeds with zero errors.
[ ] All query parameters are sanitized against SQL injection.
[ ] Empty state renders when task list length is 0.
[ ] User cannot view tasks belonging to other tenant IDs.
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 19: Investigation First, Implementation Second
export function Slide19({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p7_badge">SECTION 07: ASK AI TO ANALYZE BEFORE CODING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s19_head">Investigation First, Implementation Second</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s19_sub">Why jumping straight into code generates architectural debt</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">INSPECT FIRST</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s19_c1_title">The Premature Coding Trap</h4>
                  <p data-i18n="s19_c1_p">When asked to code immediately, models invent assumptions about your data models and routing, creating code that conflicts with your existing project structure.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s19_c2_title">The Read-Only Inspection Mandate</h4>
                  <p data-i18n="s19_c2_p">Command: 'Do not write or modify code yet. Inspect the existing repository, summarize architecture, trace data flow, and list risks first.'</p>
                </div>
              </div>
              <div className="flow-diagram flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">1</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Read-Only Audit</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">Zero files edited</div>
                </div>
                <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">2</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Human Approval</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">Scope validated</div>
                </div>
                <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">3</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Surgical Coding</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">Accurate diffs</div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 20: The 8-Point Codebase Inspection Prompt
export function Slide20({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p7_badge">SECTION 07: ASK AI TO ANALYZE BEFORE CODING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s20_head">The 8-Point Codebase Inspection Prompt</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s20_sub">A complete framework for auditing an existing implementation</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">FRAMEWORK</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4 data-i18n="s20_c1_title">Architecture &amp; Data Flow</h4>
                <p data-i18n="s20_c1_p">1. Current architecture &amp; patterns. 2. File responsibilities. 3. Current feature implementation mechanics. 4. Dependencies &amp; integrations.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4 data-i18n="s20_c2_title">Risks &amp; Verification Strategy</h4>
                <p data-i18n="s20_c2_p">5. Potential edge-case bugs &amp; security risks. 6. Side effects of modifying files. 7. Incremental implementation steps. 8. Test verification plan.</p>
              </div>
            </div>
            <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                <div className="terminal-dots flex items-center gap-1.5"><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span></div>
                <span className="terminal-title text-[11px] text-slate-400 font-semibold">audit-prompt-template.txt</span>
                <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
              </div>
              <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
Do not modify any files yet.
Inspect the existing codebase and explain:
1. The current architecture and directory responsibilities.
2. How the current feature works from input to database.
3. Dependencies and shared utility functions.
4. Potential bugs, edge cases, and security vulnerabilities.
5. Side effects on unrelated modules.
6. The safest incremental implementation plan.
Support findings with file paths and line number citations.
              </div>
            </div>
    </div>
  );
}

// Slide 21: Distinguishing Facts from Assumptions
export function Slide21({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p7_badge">SECTION 07: ASK AI TO ANALYZE BEFORE CODING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s21_head">Distinguishing Facts from Assumptions</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s21_sub">Requiring empirical proof and file citations from the model</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">EVIDENCE</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s21_c1_title">File Path &amp; Line Proof</h4>
                  <p data-i18n="s21_c1_p">Demand that every claim cite exact filenames and line numbers: 'Support all architectural claims with file references in the current repository.'</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s21_c2_title">The Unknowns Ledger</h4>
                  <p data-i18n="s21_c2_p">Require the model to explicitly list what it does NOT know: 'State what context is missing rather than guessing configuration or database values.'</p>
                </div>
              </div>
              <div className="clean-table-wrap w-full overflow-x-auto border border-slate-800">
                <table className="clean-table w-full border-collapse text-xs border border-slate-800">
                  <thead>
                    <tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Claim Type</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Unacceptable Form</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Acceptable Evidence Form</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Database Table</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">"It probably has a users table"</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">db/schema.ts:14-28 (table 'users')</code></td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Auth Status</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">"Auth looks secure"</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">middleware.ts:8 checks req.auth token</code></td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Missing Context</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Inventing port numbers</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">"Database port not found in .env; please provide."</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
    </div>
  );
}

// Slide 22: The Professional Engineering Workflow
export function Slide22({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p7_badge">SECTION 07: ASK AI TO ANALYZE BEFORE CODING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s22_head">The Professional Engineering Workflow</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s22_sub">Understand -&gt; Inspect -&gt; Analyze -&gt; Identify Risks -&gt; Plan -&gt; Implement -&gt; Verify</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">WORKFLOW</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s22_c1_title">The 7-Step Cadence</h4>
                  <p data-i18n="s22_c1_p">High-leverage developers treat AI like an eager junior engineer: assign research first, review their plan, approve the diff, and run the tests.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s22_c2_title">Massive Time Savings</h4>
                  <p data-i18n="s22_c2_p">Spending 2 minutes on analysis prevents 2 hours of debugging hallucinated imports, broken state synchronizations, and circular dependencies.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
STAGE 1: Understand user problem &amp; boundaries
STAGE 2: Inspect existing source code files
STAGE 3: Analyze constraints, versions &amp; data flow
STAGE 4: Identify edge-case bugs &amp; breaking risks
STAGE 5: Plan incremental steps (review with human)
STAGE 6: Implement minimal code changes
STAGE 7: Verify with linters, tests, and diff review
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 23: Deconstructing Problems Methodically
export function Slide23({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p8_badge">SECTION 08: THINK BEFORE SOLVING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s23_head">Deconstructing Problems Methodically</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s23_sub">Observation is not causation: Diagnosing before prescribing</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">DIAGNOSTICS</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s23_c1_title">The Symptom vs Root Cause Fallacy</h4>
                  <p data-i18n="s23_c1_p">Symptom: 'Dashboard load time is 6 seconds.' Bad fix: Slap Redis caching on everything. Good fix: Profile queries, discover an unindexed N+1 query.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s23_c2_title">The 9 Diagnostic Questions</h4>
                  <p data-i18n="s23_c2_p">What is the actual problem? Expected vs observed? What evidence exists? What could cause it? What assumptions are we making? What is the smallest safe test?</p>
                </div>
              </div>
              <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                <svg viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>
                <div><strong>Always Remember:</strong> The first apparent cause proposed by an AI is often just a symptom. Force the model to explain the causal mechanism behind the error.</div>
              </div>
            </div>
    </div>
  );
}

// Slide 24: The Scientific Method in Software
export function Slide24({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p8_badge">SECTION 08: THINK BEFORE SOLVING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s24_head">The Scientific Method in Software</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s24_sub">Observation -&gt; Hypothesis -&gt; Experiment -&gt; Verification -&gt; Targeted Fix</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">SCIENTIFIC METHOD</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s24_c1_title">Formulating Testable Hypotheses</h4>
                  <p data-i18n="s24_c1_p">A hypothesis must be falsifiable: 'If the delay is caused by missing database indexes, running EXPLAIN ANALYZE will show a Sequential Scan on orders table.'</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s24_c2_title">Smallest Reversible Step</h4>
                  <p data-i18n="s24_c2_p">Test one variable at a time. Never change 5 configuration files, 2 libraries, and the database schema in a single debugging attempt.</p>
                </div>
              </div>
              <div className="flow-diagram flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">1</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Observe</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">Log exact error</div>
                </div>
                <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">2</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Hypothesize</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">Testable theory</div>
                </div>
                <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">3</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Surgical Fix</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">1 variable changed</div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 25: Case Study: The Slow Dashboard
export function Slide25({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p8_badge">SECTION 08: THINK BEFORE SOLVING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s25_head">Case Study: The Slow Dashboard</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s25_sub">Real-world walkthrough from panic to empirical resolution</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">CASE STUDY</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card border-red-500/40">
                <h4 className="text-red-400" data-i18n="s25_c1_title">Flawed Approach</h4>
                <p data-i18n="s25_c1_p">Prompting 'My app is slow make it fast' leads to unnecessary server upgrades, complex caching layers, and new points of failure.</p>
                <div className="terminal-window mt-2 text-xs">
                  <div className="terminal-body text-red-300">
Result: Adds Redis, breaks cache invalidation, users see stale orders, database is still unindexed and slow when cache misses.
                  </div>
                </div>
              </div>
              <div className="info-card border-green-500/40">
                <h4 className="text-green-400" data-i18n="s25_c2_title">Disciplined Approach</h4>
                <p data-i18n="s25_c2_p">Inspect server logs, measure query duration, check network waterfall, identify single unindexed foreign key join, apply 1-line index, verify latency dropped to 40ms.</p>
                <div className="terminal-window mt-2 text-xs">
                  <div className="terminal-body text-green-300">
CREATE INDEX idx_orders_customer_id ON orders(customer_id);
→ Query cost drops from 12450.00 to 8.42. 0 server cost added.
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 26: Core Mental Models for Programmers
export function Slide26({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p9_badge">SECTION 09: LOGICAL THINKING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s26_head">Core Mental Models for Programmers</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s26_sub">Deductive reasoning, first principles, and edge-case discovery</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">MENTAL MODELS</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s26_c1_title">First Principles Thinking</h4>
                  <p data-i18n="s26_c1_p">Break a problem down to its fundamental truths (HTTP requests, memory allocation, TCP sockets, disk I/O) and reason upwards from there.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s26_c2_title">Deduction vs Induction</h4>
                  <p data-i18n="s26_c2_p">Just because authentication worked in 10 local tests does not prove it works in production under distributed session load. Verify boundaries logically.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                  <div className="terminal-dots flex items-center gap-1.5"><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span></div>
                  <span className="terminal-title text-[11px] text-slate-400 font-semibold">logical-framework</span>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
OBSERVATION: API request fails with status 403.
DEDUCTION:
1. Status 403 means Forbidden (client is authenticated, but lacks permission).
2. It is NOT 401 (Unauthorized / bad credentials).
3. The failure is in authorization logic or role checks.
CONCLUSION: Check role permissions on user record, not password hashing!
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 27: Case Analysis: 'Login Fails'
export function Slide27({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p9_badge">SECTION 09: LOGICAL THINKING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s27_head">Case Analysis: 'Login Fails'</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s27_sub">Mapping multiple potential root causes systematically</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">DECISION TREE</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s27_c1_title">The Multi-Cause Tree</h4>
                  <p data-i18n="s27_c1_p">Login failure can stem from: 1. Invalid client credentials. 2. Database connection pool exhaustion. 3. Expired JWT secret. 4. CORS header mismatch. 5. Clock drift.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s27_c2_title">Eliminating by Binary Search</h4>
                  <p data-i18n="s27_c2_p">Check the status code: 401 = client auth error, 500 = server exception, 504 = network gateway timeout. Use telemetry to eliminate whole branches instantly.</p>
                </div>
              </div>
              <div className="clean-table-wrap w-full overflow-x-auto border border-slate-800">
                <table className="clean-table w-full border-collapse text-xs border border-slate-800">
                  <thead>
                    <tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">HTTP Code</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Layer of Failure</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Evidence to Inspect</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">401 Unauthorized</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Client Credentials</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Password hash compare, email spelling</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">403 Forbidden</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Access Permissions</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">User role, tenant_id guard</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">500 Server Error</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Backend Crash / DB</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Server terminal logs, Neon pool limit</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">504 Gateway Timeout</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Network / Upstream</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Deadlock in DB transaction</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
    </div>
  );
}

// Slide 28: Cognitive Biases When Using AI
export function Slide28({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p9_badge">SECTION 09: LOGICAL THINKING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s28_head">Cognitive Biases When Using AI</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s28_sub">Guarding against automation bias, anchoring, and confirmation bias</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge danger text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">BIAS AUDIT</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s28_c1_title">Automation Bias</h4>
                  <p data-i18n="s28_c1_p">The tendency to favor suggestions from automated systems over human critical judgment. AI eloquence often disarms developer skepticism.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s28_c2_title">Anchoring to First Answer</h4>
                  <p data-i18n="s28_c2_p">Do not let the model's first suggestion anchor your entire architecture. Ask for 3 distinct technical approaches with concrete tradeoffs.</p>
                </div>
              </div>
              <div className="alert-callout danger flex items-start gap-2.5 p-3 border border-red-500/30 bg-red-500/10 text-red-300 text-[12.5px] leading-relaxed">
                <svg viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>
                <div><strong>Antidote to Bias:</strong> Never ask 'Is this code good?'. Ask 'Identify 3 potential security flaws and 2 race conditions in this code snippet.'</div>
              </div>
            </div>
    </div>
  );
}

// Slide 29: The Art of Task Decomposition
export function Slide29({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p10_badge">SECTION 10: DECOMPOSE COMPLEX TASKS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s29_head">The Art of Task Decomposition</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s29_sub">Converting overwhelming monolithic epics into atomic milestones</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">DECOMPOSITION</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s29_c1_title">Monolithic Prompts Fail</h4>
                  <p data-i18n="s29_c1_p">'Build a complete multi-tenant SaaS accounting system' will produce incomplete mockups, truncated functions, and non-functional placeholders.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s29_c2_title">The Atomic Chunk Rule</h4>
                  <p data-i18n="s29_c2_p">Every task assigned to an AI should have a single, verifiable deliverable that can be compiled, tested, and reviewed in under 10 minutes.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
<span className="text-red-400">MONOLITHIC PROMPT:</span>
"Create a complete e-commerce store with Stripe, database, admin panel,
email notifications, reviews, inventory, and discounts."
→ Output truncated, incomplete functions, broken schemas.

<span className="text-green-400">DECOMPOSED PROMPT:</span>
"Phase 1: Define Drizzle schema for products, orders, and order_items.
Include foreign keys, UUID primary keys, and indexes. Do not write UI yet."
→ Flawless schema delivered in seconds.
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 30: Deconstruction Case: Enterprise POS System
export function Slide30({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p10_badge">SECTION 10: DECOMPOSE COMPLEX TASKS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s30_head">Deconstruction Case: Enterprise POS System</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s30_sub">Breaking an 11-module retail system into ordered dependencies</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">DEPENDENCY TREE</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s30_c1_title">Dependency Ordering</h4>
                  <p data-i18n="s30_c1_p">Layer 1: Database schemas &amp; migrations -&gt; Layer 2: Auth &amp; RBAC -&gt; Layer 3: Inventory data layer -&gt; Layer 4: Order processing -&gt; Layer 5: UI &amp; Reporting.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s30_c2_title">Why Order Matters</h4>
                  <p data-i18n="s30_c2_p">Building UI checkout buttons before defining transaction lock mechanisms or inventory concurrency constraints guarantees extensive refactoring.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
POS SYSTEM DECOMPOSITION:
├── 01_DATABASE:   Schemas, foreign keys, indexes
├── 02_AUTH:       Cashier vs Manager RBAC permissions
├── 03_INVENTORY:  Stock deduction &amp; optimistic locking
├── 04_CHECKOUT:   Stripe / Cash transaction handling
├── 05_RECEIPTS:   PDF generation &amp; audit log
└── 06_UI:         Responsive cashier dashboard
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 31: Sub-Task Prompting Workflow
export function Slide31({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p10_badge">SECTION 10: DECOMPOSE COMPLEX TASKS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s31_head">Sub-Task Prompting Workflow</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s31_sub">Maintaining momentum and architectural consistency across sessions</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">MOMENTUM</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s31_c1_title">Contract-First Sub-Tasking</h4>
                  <p data-i18n="s31_c1_p">Step 1: Define TypeScript interfaces and schemas. Step 2: Implement server-side CRUD. Step 3: Implement client components. Step 4: Write tests.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s31_c2_title">Context Preservation</h4>
                  <p data-i18n="s31_c2_p">Carry forward the schema contracts and conventions from previous steps so the AI builds each sub-module to fit the established architecture perfectly.</p>
                </div>
              </div>
              <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                <svg viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>
                <div><strong>Session Strategy:</strong> Once a sub-task is completed and tests pass, commit it locally. Start the next prompt with a clean working tree and reference the newly committed file paths.</div>
              </div>
            </div>
    </div>
  );
}

// Slide 32: Generating Incremental Implementation Plans
export function Slide32({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p11_badge">SECTION 11: PLANNING BEFORE IMPLEMENTATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s32_head">Generating Incremental Implementation Plans</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s32_sub">Why code execution must be gated behind written architectural approval</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">PLAN FIRST</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s32_c1_title">The Plan-First Protocol</h4>
                  <p data-i18n="s32_c1_p">Instruct AI: 'Create an incremental implementation plan with objectives, files to edit, risks, and verification steps. Do not modify files until approved.'</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s32_c2_title">Catching Blunders Early</h4>
                  <p data-i18n="s32_c2_p">Reviewing a 10-line bulleted plan takes 30 seconds and reveals flawed assumptions before a single file or database table is touched.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
PROMPT TO REQUEST A PLAN:
"Based on your codebase analysis, create an incremental implementation plan.
For every step, specify:
- Objective
- Target files to create or modify
- Breaking change risks
- Verification command (test/lint)
Do NOT implement yet. Wait for my approval."
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 33: Anatomy of an Actionable Plan
export function Slide33({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p11_badge">SECTION 11: PLANNING BEFORE IMPLEMENTATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s33_head">Anatomy of an Actionable Plan</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s33_sub">Step, files, dependencies, rollback strategy, and acceptance tests</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">PLAN STRUCTURE</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s33_c1_title">Every Step Must Be Atomic</h4>
                  <p data-i18n="s33_c1_p">Each step lists: Target files, exact changes, potential breaking changes, migration commands, and automated test commands.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s33_c2_title">Rollback Readiness</h4>
                  <p data-i18n="s33_c2_p">If step 3 fails, what is the undo plan? Plans must account for partial failures, especially in database migrations and production deployments.</p>
                </div>
              </div>
              <div className="clean-table-wrap w-full overflow-x-auto border border-slate-800">
                <table className="clean-table w-full border-collapse text-xs border border-slate-800">
                  <thead>
                    <tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Plan Section</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Requirement</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Purpose</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Objective</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">1 sentence scope</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Prevents scope creep</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Files Modified</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Exact repo paths</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Prevents collateral churn</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Rollback Plan</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Command to undo</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Limits blast radius</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Verification</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Pass/Fail command</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Objective acceptance</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
    </div>
  );
}

// Slide 34: When to Plan vs. When to Code Directly
export function Slide34({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p11_badge">SECTION 11: PLANNING BEFORE IMPLEMENTATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s34_head">When to Plan vs. When to Code Directly</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s34_sub">Balancing engineering rigour with rapid development velocity</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">VELOCITY</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card border-blue-500/40">
                <h4 className="text-blue-400" data-i18n="s34_c1_title">Always Plan For:</h4>
                <p data-i18n="s34_c1_p">Auth flows, payment integrations, schema migrations, public API changes, major refactors, multi-file features, and production deployments.</p>
              </div>
              <div className="info-card border-green-500/40">
                <h4 className="text-green-400" data-i18n="s34_c2_title">Direct Code For:</h4>
                <p data-i18n="s34_c2_p">Isolated pure utility functions, localized CSS tweaks, adding a single button icon, regex validation helpers, and standalone unit tests.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 35: Precision Code Generation
export function Slide35({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p12_badge">SECTION 12: PROMPTING FOR CODE GENERATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s35_head">Precision Code Generation</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s35_sub">Getting clean, production-grade, framework-idiomatic code</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">CODE GEN</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s35_c1_title">Convention Enforcement</h4>
                  <p data-i18n="s35_c1_p">Specify: 'Match existing naming conventions, use strict TypeScript types, return early, avoid any, and keep functions small and focused.'</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s35_c2_title">Input Validation &amp; Boundaries</h4>
                  <p data-i18n="s35_c2_p">Explicitly demand validation: 'Validate all external input using Zod schemas; handle null, undefined, and empty array edge cases cleanly.'</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
<span className="term-comment">// Clean, early-return, strictly-typed production action:</span>
export async function updateTask(rawInput: unknown) &#123;
  const parsed = updateTaskSchema.safeParse(rawInput);
  if (!parsed.success) &#123;
    return &#123; error: 'Invalid input', issues: parsed.error.issues &#125;;
  &#125;
  const session = await auth();
  if (!session?.user?.id) return &#123; error: 'Unauthorized' &#125;;
  
  return await db.update(tasks)
    .set(&#123; title: parsed.data.title &#125;)
    .where(and(eq(tasks.id, parsed.data.id), eq(tasks.userId, session.user.id)));
&#125;
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 36: Preventing Anti-Patterns & Bloat
export function Slide36({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p12_badge">SECTION 12: PROMPTING FOR CODE GENERATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s36_head">Preventing Anti-Patterns &amp; Bloat</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s36_sub">Eliminating hallucinated libraries, premature abstractions, and commented noise</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">ANTI-BLOAT</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s36_c1_title">No Phantom Libraries</h4>
                  <p data-i18n="s36_c1_p">Constraint: 'Use only standard library or existing dependencies in package.json. Do not install additional packages without explicit approval.'</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s36_c2_title">No Useless Comments</h4>
                  <p data-i18n="s36_c2_p">Constraint: 'Do not add obvious comments explaining syntax. Only preserve comments that document non-obvious business logic or algorithmic nuance.'</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
<span className="text-red-400">// BAD: Bloated with obvious comments</span>
// This sets x to 5
const x = 5;
// Return the result
return x + 1;

<span className="text-green-400">// GOOD: Clean, self-documenting code</span>
const MAX_RETRY_ATTEMPTS = 5;
return currentAttempt + 1;
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 37: Complete Working Code Requirement
export function Slide37({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p12_badge">SECTION 12: PROMPTING FOR CODE GENERATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s37_head">Complete Working Code Requirement</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s37_sub">Banning placeholders, ellipses, and unhelpful TODOs</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge danger text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">NO PLACEHOLDERS</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s37_c1_title">The '// TODO' Plague</h4>
                  <p data-i18n="s37_c1_p">Models often truncate complex logic with '// implement rest here'. Strictly instruct: 'Provide complete, fully working code. Do not leave placeholder comments.'</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s37_c2_title">Production Error States</h4>
                  <p data-i18n="s37_c2_p">Demand complete handling: 'Include loading skeletons, empty states, network failure recovery, and accessible user error notifications.'</p>
                </div>
              </div>
              <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                <svg viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>
                <div><strong>Strict Injunction:</strong> "Return complete working code. If the code is long, break it across clear consecutive files rather than omitting lines with comments."</div>
              </div>
            </div>
    </div>
  );
}

// Slide 38: UI Reproduction vs. Arbitrary Redesign
export function Slide38({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p13_badge">SECTION 13: PROMPTING FOR UI DESIGN</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s38_head">UI Reproduction vs. Arbitrary Redesign</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s38_sub">Guiding AI to match existing design systems with pixel precision</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">DESIGN FIDELITY</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s38_c1_title">Preserving Design Consistency</h4>
                  <p data-i18n="s38_c1_p">AI models default to generic blue gradients and rounded pills. Constrain: 'Preserve existing dark theme tokens, zero border-radius, and font scales.'</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s38_c2_title">Feeding Design Specifications</h4>
                  <p data-i18n="s38_c2_p">Provide exact design tokens: Background hex codes, text color variables, spacing scale (e.g. max 20px), and mobile breakpoint conventions.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
EXACT UI SPECIFICATION:
- Theme: Dark palette (bg: #020617, card: #0f172a, border: #1e293b)
- Spacing: Never exceed 20px (use 4px, 8px, 12px, 16px, 20px)
- Corners:  on all elements
- Text: Crisp white (#ffffff) on dark backgrounds
- Buttons: Blue button text MUST be #ffffff (never black)
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 39: Component-Driven Prompting
export function Slide39({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p13_badge">SECTION 13: PROMPTING FOR UI DESIGN</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s39_head">Component-Driven Prompting</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s39_sub">Building reusable, accessible, and responsive UI components</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">ACCESSIBILITY</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s39_c1_title">Accessibility Standards</h4>
                  <p data-i18n="s39_c1_p">Require ARIA attributes: 'Ensure keyboard focus visibility, appropriate roles (dialog, combobox), screen-reader labels, and color contrast compliance.'</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s39_c2_title">Responsive Matrix</h4>
                  <p data-i18n="s39_c2_p">Instruct: 'Test and deliver layouts that adapt seamlessly from mobile (375px) to tablet (768px) and desktop (1280px) without horizontal overflow.'</p>
                </div>
              </div>
              <div className="clean-table-wrap w-full overflow-x-auto border border-slate-800">
                <table className="clean-table w-full border-collapse text-xs border border-slate-800">
                  <thead>
                    <tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Screen Size</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Layout Requirement</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Verification</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Mobile (&lt;640px)</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Single column, stacked controls</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">No horizontal scrollbar</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Tablet (640-1024px)</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">2-column grid, compact spacing</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Modal widths &lt;90vw</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Desktop (&gt;1024px)</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Multi-column, sidebar layout</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Max-width container centered</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
    </div>
  );
}

// Slide 40: The 4 Levels of UI Requests
export function Slide40({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p13_badge">SECTION 13: PROMPTING FOR UI DESIGN</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s40_head">The 4 Levels of UI Requests</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s40_sub">Inspiration vs. Pixel Clone vs. Incremental Polish vs. Total Redesign</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">TAXONOMY</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s40_c1_title">Know What You Are Asking For</h4>
                  <p data-i18n="s40_c1_p">Level 1: Inspiration (generate layout ideas). Level 2: Exact Clone (match reference markup). Level 3: Polish (fix spacing/contrast). Level 4: Redesign.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s40_c2_title">The Visual Drift Trap</h4>
                  <p data-i18n="s40_c2_p">If you ask AI to 'make it look better' without reference rules, it will introduce random font weights, arbitrary shadows, and inconsistent padding.</p>
                </div>
              </div>
              <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                <svg viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>
                <div><strong>Cloning Tip:</strong> Supply the exact HTML element structure, Tailwind classes, and SVG icons. Tell the AI: "Change only the data values; do not alter CSS class strings."</div>
              </div>
            </div>
    </div>
  );
}

// Slide 41: Structured Debugging Protocols
export function Slide41({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p14_badge">SECTION 14: DEBUGGING WITH AI</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s41_head">Structured Debugging Protocols</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s41_sub">Extracting root causes instead of playing whack-a-mole with symptoms</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">DEBUGGING</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s41_c1_title">The Debugging Input Payload</h4>
                  <p data-i18n="s41_c1_p">1. Expected behavior. 2. Observed behavior. 3. Full stack trace / server logs. 4. Minimal code snippet. 5. Reproduction steps. 6. Environment specs.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s41_c2_title">The Last-Line Error Fallacy</h4>
                  <p data-i18n="s41_c2_p">Pasting only the last error line ('Internal Server Error 500') leaves the AI blind. Paste the first relevant error in the call stack.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                  <div className="terminal-dots flex items-center gap-1.5"><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span></div>
                  <span className="terminal-title text-[11px] text-slate-400 font-semibold">debug-template.txt</span>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
Expected: Task status updates to 'completed' on click.
Observed: UI spinner spins infinitely; network tab shows 500.
Logs:
  TypeError: Cannot read properties of undefined (reading 'userId')
  at updateTask (app/actions.ts:42:18)
Repro Steps: Click checkbox on any unassigned task.
Environment: Next.js 15.1, Node 20.10, PostgreSQL Neon.
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 42: The 8-Step Debugging Cycle
export function Slide42({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p14_badge">SECTION 14: DEBUGGING WITH AI</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s42_head">The 8-Step Debugging Cycle</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s42_sub">Observe -&gt; Reproduce -&gt; Collect Evidence -&gt; Hypothesize -&gt; Test -&gt; Fix -&gt; Regression Test -&gt; Document</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">CYCLE</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s42_c1_title">Surgical Fixes</h4>
                  <p data-i18n="s42_c1_p">Demand: 'Identify the exact root cause, explain why the bug occurred, propose the smallest safe fix, and explain possible side effects on callers.'</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s42_c2_title">Regression Shield</h4>
                  <p data-i18n="s42_c2_p">Always require a regression unit test: 'Write a test that reproduces this exact failure scenario and confirms that the fix resolves it.'</p>
                </div>
              </div>
              <div className="flow-diagram flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">1</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Reproduce</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">Consistent failure</div>
                </div>
                <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">2</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Smallest Fix</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">Minimal lines</div>
                </div>
                <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">3</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Regression Test</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">Never breaks again</div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 43: Investigating Ephemeral & Race Condition Bugs
export function Slide43({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p14_badge">SECTION 14: DEBUGGING WITH AI</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s43_head">Investigating Ephemeral &amp; Race Condition Bugs</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s43_sub">Handling asynchronous timing, database deadlocks, and memory leaks</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">CONCURRENCY</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s43_c1_title">Concurrency &amp; Timing</h4>
                  <p data-i18n="s43_c1_p">Ask: 'Analyze this async workflow for race conditions, unhandled Promise rejections, stale closure captures, or optimistic lock conflicts.'</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s43_c2_title">Network &amp; Environment Variance</h4>
                  <p data-i18n="s43_c2_p">Investigate differences between local dev and cloud edge runtimes (e.g. Node.js vs Edge runtime APIs, file system access, cold-start latency).</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
CONCURRENCY PROMPT:
"Inspect this Server Action for concurrent execution hazards.
What happens if two users submit the form at the exact same millisecond?
Propose a database row-level lock (SELECT ... FOR UPDATE)
or optimistic versioning column to guarantee idempotency."
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 44: Evidence-Based Security Reviews
export function Slide44({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p15_badge">SECTION 15: PROMPTING FOR SECURITY AUDITS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s44_head">Evidence-Based Security Reviews</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s44_sub">Turning models into ruthless code auditors without destructive actions</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge danger text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">SECURITY</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s44_c1_title">The Read-Only Security Mandate</h4>
                  <p data-i18n="s44_c1_p">Command: 'Perform a strictly read-only audit. Do not execute destructive operations. Inspect auth guards, sanitization, and database isolation.'</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s44_c2_title">OWASP Top 10 Focus</h4>
                  <p data-i18n="s44_c2_p">Audit: Injection, Broken Auth, Sensitive Data Exposure, XML/Entity flaws, Broken Access Control, Security Misconfiguration, XSS, Insecure Deserialization.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                  <div className="terminal-dots flex items-center gap-1.5"><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span></div>
                  <span className="terminal-title text-[11px] text-slate-400 font-semibold">security-audit-prompt.txt</span>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
Perform a strictly read-only security audit of app/api/.
Focus on:
1. SQL injection &amp; unescaped dynamic queries
2. Missing authentication &amp; role authorization checks
3. Insecure Direct Object References (IDOR)
4. Secret leaks in client responses
Report findings by Severity (Critical/High/Med) with file lines and PoC.
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 45: Standard Security Finding Format
export function Slide45({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p15_badge">SECTION 15: PROMPTING FOR SECURITY AUDITS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s45_head">Standard Security Finding Format</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s45_sub">Severity, Affected Path, Vulnerability, Exploit Scenario, Remediation, Verification</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">VULNERABILITY REPORT</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s45_c1_title">Structure Every Vulnerability</h4>
                  <p data-i18n="s45_c1_p">Require: Severity (Critical/High/Med/Low), File &amp; Line, Real-world attack scenario, Business impact, Exact patch diff, and Verification test.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s45_c2_title">No Fictional Security Claims</h4>
                  <p data-i18n="s45_c2_p">Instruct the model: 'Distinguish confirmed exploits from speculative risks. Do not declare code secure unless every branch has been verified.'</p>
                </div>
              </div>
              <div className="clean-table-wrap w-full overflow-x-auto border border-slate-800">
                <table className="clean-table w-full border-collapse text-xs border border-slate-800">
                  <thead>
                    <tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Severity</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Vulnerability</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Remediation</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><span className="text-red-400 font-bold">CRITICAL</span></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Raw string SQL concatenation</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Parameterized query with Drizzle/Prisma</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><span className="text-amber-400 font-bold">HIGH</span></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Missing tenant_id in WHERE clause</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Enforce composite unique (id, tenant_id)</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><span className="text-yellow-300 font-bold">MEDIUM</span></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Stack trace returned in JSON</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Wrap in try/catch; return generic error</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
    </div>
  );
}

// Slide 46: Multi-Tenant & Secret Isolation
export function Slide46({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p15_badge">SECTION 15: PROMPTING FOR SECURITY AUDITS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s46_head">Multi-Tenant &amp; Secret Isolation</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s46_sub">Guarding against data leaks, exposed tokens, and IDOR vulnerabilities</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge danger text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">DATA ISOLATION</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s46_c1_title">Insecure Direct Object References (IDOR)</h4>
                  <p data-i18n="s46_c1_p">Verify: 'Ensure every database query verifies tenant_id and user_id ownership; verify users cannot view or mutate other users' records by altering URLs.'</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s46_c2_title">Secret Leak Prevention</h4>
                  <p data-i18n="s46_c2_p">Verify that server secrets (DATABASE_URL, API tokens) are never bundled into client-side JS or logged in public telemetry.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
<span className="text-red-400">// DANGEROUS IDOR VULNERABILITY:</span>
await db.select().from(invoices).where(eq(invoices.id, params.id));

<span className="text-green-400">// SECURE TENANT-ISOLATED QUERY:</span>
await db.select().from(invoices).where(and(
  eq(invoices.id, params.id),
  eq(invoices.organizationId, session.user.orgId)
));
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 47: The Production Code Reviewer Persona
export function Slide47({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p16_badge">SECTION 16: PROMPTING FOR CODE REVIEW</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s47_head">The Production Code Reviewer Persona</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s47_sub">Reviewing for correctness, safety, and performance rather than stylistic bike-shedding</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">CODE REVIEW</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s47_c1_title">Reviewer Priorities Hierarchy</h4>
                  <p data-i18n="s47_c1_p">1. Correctness &amp; Bug Prevention. 2. Security. 3. Data Integrity. 4. Backward Compatibility. 5. Performance. 6. Maintainability. 7. Style.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s47_c2_title">Actionable Findings First</h4>
                  <p data-i18n="s47_c2_p">Command: 'Report critical bugs and functional defects first. Do not waste space recommending variable renames or personal formatting preferences.'</p>
                </div>
              </div>
              <div className="clean-table-wrap w-full overflow-x-auto border border-slate-800">
                <table className="clean-table w-full border-collapse text-xs border border-slate-800">
                  <thead>
                    <tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Priority</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Focus Area</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Review Question</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">1</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Correctness</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Does it satisfy the acceptance criteria?</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">2</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Security</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Does it sanitize inputs and check permissions?</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">3</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Data Integrity</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Can concurrent requests cause data corruption?</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">4</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Compatibility</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Will existing mobile/web clients break?</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
    </div>
  );
}

// Slide 48: Reviewing Diffs Effectively
export function Slide48({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p16_badge">SECTION 16: PROMPTING FOR CODE REVIEW</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s48_head">Reviewing Diffs Effectively</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s48_sub">Feeding Git diffs to AI for surgical pre-commit audits</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">GIT DIFF</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s48_c1_title">The Git Diff Prompt</h4>
                  <p data-i18n="s48_c1_p">Pass `git diff` into the prompt: 'Analyze this uncommitted diff. Identify any regressions, unintended edits, console logs, or security risks introduced.'</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s48_c2_title">Scope Verification</h4>
                  <p data-i18n="s48_c2_p">Confirm that only files relevant to the task were modified. Flag any collateral edits to config files or unrelated modules.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
DIFF AUDIT PROMPT:
"Review this git diff before I commit:
`git diff`
Answer:
1. Did I accidentally leave any debug console.log or test tokens?
2. Are any modified files outside the scope of adding user avatars?
3. Are there any edge-case null pointer exceptions in the diff lines?"
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 49: Code Review vs. Code Rewriting
export function Slide49({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p16_badge">SECTION 16: PROMPTING FOR CODE REVIEW</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s49_head">Code Review vs. Code Rewriting</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s49_sub">Preserving project architecture and preventing unauthorized refactoring</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">PRESERVATION</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s49_c1_title">Respecting the Author's Architecture</h4>
                  <p data-i18n="s49_c1_p">A reviewer assesses whether the code satisfies requirements safely within the current architecture—not whether they would have built it differently from scratch.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s49_c2_title">Constructive Remediation</h4>
                  <p data-i18n="s49_c2_p">Every critique must include a minimal, concrete code example demonstrating how to fix the problem safely.</p>
                </div>
              </div>
              <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                <svg viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>
                <div><strong>Review Command:</strong> "Provide actionable comments with minimal code fixes. Do not refactor modules that are already working unless a critical vulnerability requires it."</div>
              </div>
            </div>
    </div>
  );
}

// Slide 50: Database Migrations & Data Safety
export function Slide50({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p17_badge">SECTION 17: PROMPTING FOR DATABASE CHANGES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s50_head">Database Migrations &amp; Data Safety</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s50_sub">Protecting schemas, tables, and production data from reckless alterations</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge danger text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">DATA SAFETY</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s50_c1_title">The Golden Database Rule</h4>
                  <p data-i18n="s50_c1_p">Never blindly execute AI-generated SQL migrations on production. Inspect locks, downtime impact, index rebuild times, and rollback scripts.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s50_c2_title">Safe Migration Prompting</h4>
                  <p data-i18n="s50_c2_p">Instruct: 'Analyze this schema change. Explain table locks, performance impact on large tables, backward compatibility, and write a reversible DOWN migration.'</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
<span className="text-red-400">HAZARDOUS AI MIGRATION:</span>
ALTER TABLE orders ADD COLUMN status VARCHAR(20) NOT NULL;
→ Table lock on 10M rows causes downtime!

<span className="text-green-400">PRODUCTION-SAFE MIGRATION:</span>
ALTER TABLE orders ADD COLUMN status VARCHAR(20) DEFAULT 'pending';
-- Or use Expand-and-Contract with nullable column first.
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 51: PostgreSQL & Neon Specific Considerations
export function Slide51({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p17_badge">SECTION 17: PROMPTING FOR DATABASE CHANGES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s51_head">PostgreSQL &amp; Neon Specific Considerations</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s51_sub">Connection pooling, serverless branching, and index optimization</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">NEON POSTGRES</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s51_c1_title">Connection Exhaustion &amp; PgBouncer</h4>
                  <p data-i18n="s51_c1_p">Serverless functions create many short-lived connections. Prompt AI to configure transaction pooler ports and avoid holding long locks.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s51_c2_title">Branch-First Verification</h4>
                  <p data-i18n="s51_c2_p">Use Neon instant branching to test migrations against real production data copies in an isolated sandbox branch before touching primary.</p>
                </div>
              </div>
              <div className="flow-diagram flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">1</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Neon Branch</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">Instant production copy</div>
                </div>
                <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">2</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Run Migration</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">Test timing &amp; locks</div>
                </div>
                <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">3</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Safe Deploy</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">Zero risk to main</div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 52: Data Loss Prevention Checklist
export function Slide52({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p17_badge">SECTION 17: PROMPTING FOR DATABASE CHANGES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s52_head">Data Loss Prevention Checklist</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s52_sub">Flagging DROP, TRUNCATE, ALTER TYPE, and table rewrite hazards</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge danger text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">ZERO LOSS</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s52_c1_title">Destructive Operation Warnings</h4>
                  <p data-i18n="s52_c1_p">Demand: 'Explicitly highlight any command that drops columns, rewrites entire tables, or truncates data. Propose zero-downtime expand-and-contract steps.'</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s52_c2_title">Verification Queries</h4>
                  <p data-i18n="s52_c2_p">Require the model to provide verification queries: SELECT statements to confirm index usage, foreign key integrity, and row counts before and after.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
VERIFICATION QUERIES TO REQUEST:
-- 1. Check index validity:
SELECT indexrelid::regclass, indisvalid FROM pg_index WHERE indisvalid = false;
-- 2. Confirm row counts match pre-migration backup:
SELECT count(*) FROM orders;
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 53: From Chatbots to Autonomous Coding Agents
export function Slide53({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p18_badge">SECTION 18: USING AI CODING AGENTS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s53_head">From Chatbots to Autonomous Coding Agents</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s53_sub">Understanding IDE assistants, repo-aware CLI tools, and background agents</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">AGENTS</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s53_c1_title">The Tool Spectrum</h4>
                  <p data-i18n="s53_c1_p">Chat AI (isolated text) -&gt; Inline Copilots (code completion) -&gt; Repository Agents (read files, run bash, run tests, create diffs).</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s53_c2_title">Tool Access &amp; Agency</h4>
                  <p data-i18n="s53_c2_p">Coding agents have tools to inspect your filesystem, run terminal commands, and modify code. Agency demands strict operational constraints.</p>
                </div>
              </div>
              <div className="clean-table-wrap w-full overflow-x-auto border border-slate-800">
                <table className="clean-table w-full border-collapse text-xs border border-slate-800">
                  <thead>
                    <tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Agent Type</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Capabilities</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Safety Requirement</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Chatbot</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Generates markdown text only</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Manual copy-paste review</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Inline Copilot</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Autocompletes cursor tokens</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Tab completion scrutiny</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Autonomous Agent</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Executes bash, edits files directly</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Strict permission boundaries</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
    </div>
  );
}

// Slide 54: Agent Capabilities & Permission Boundaries
export function Slide54({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p18_badge">SECTION 18: USING AI CODING AGENTS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s54_head">Agent Capabilities &amp; Permission Boundaries</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s54_sub">Granting enough power to solve tasks while preventing catastrophic errors</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">PERMISSIONS</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s54_c1_title">Read vs Write vs Execute Permissions</h4>
                  <p data-i18n="s54_c1_p">Safe default: Allow file inspection freely, allow code editing within target directories, but require approval for destructive commands (rm, drop, git push).</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s54_c2_title">Tool Awareness</h4>
                  <p data-i18n="s54_c2_p">Different agents have different capabilities. Do not assume an agent has internet access, database credentials, or browser automation unless verified.</p>
                </div>
              </div>
              <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                <svg viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>
                <div><strong>Permission Matrix:</strong> Read Files = Auto-allowed. Run Read-only Bash = Auto-allowed. Run Tests = Auto-allowed. Git Commit / Push = FORBIDDEN. Deploy = FORBIDDEN.</div>
              </div>
            </div>
    </div>
  );
}

// Slide 55: Guiding Agents with Context Files
export function Slide55({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p18_badge">SECTION 18: USING AI CODING AGENTS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s55_head">Guiding Agents with Context Files</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s55_sub">Using AGENTS.md, rules, and customization skills to govern behavior</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">AGENTS.MD</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s55_c1_title">System Rules &amp; Guardrails</h4>
                  <p data-i18n="s55_c1_p">Define persistent repository rules: 'Never run git push. Keep all border-radius at 0. Use pnpm only. Do not add code comments.'</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s55_c2_title">Repeatable Workflows</h4>
                  <p data-i18n="s55_c2_p">A strong rules file ensures the agent adheres to your architecture and conventions across every prompt and every session automatically.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
# AGENTS.md / Repository Instructions
- Package Manager: Use pnpm ONLY (never npm or yarn)
- Version Control: NEVER execute git add, git commit, or git push
- Styling: Zero border-radius on all elements (border-radius: 0 !important)
- Clean Code: Do NOT add code comments unless explicitly requested
- Output: Leave all changes unstaged for my review
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 56: The 10-Step Safe Agent Protocol
export function Slide56({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p19_badge">SECTION 19: SAFE AGENT WORKFLOW</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s56_head">The 10-Step Safe Agent Protocol</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s56_sub">A bulletproof engineering lifecycle for repository-level AI automation</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">10 STEPS</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4 data-i18n="s56_c1_title">Steps 1 to 5: Guarded Inception</h4>
                <p data-i18n="s56_c1_p">1. Inspect repo -&gt; 2. Understand current behavior -&gt; 3. Propose incremental plan -&gt; 4. Review risks -&gt; 5. Human approves scope.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4 data-i18n="s56_c2_title">Steps 6 to 10: Disciplined Delivery</h4>
                <p data-i18n="s56_c2_p">6. Surgical implementation -&gt; 7. Run automated tests -&gt; 8. Inspect git diff -&gt; 9. Human code review -&gt; 10. Manual commit when verified.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 57: Git as Your Safety Shield
export function Slide57({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p19_badge">SECTION 19: SAFE AGENT WORKFLOW</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s57_head">Git as Your Safety Shield</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s57_sub">Feature branches, clean commits, and the sacred rule of unstaged changes</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">GIT SHIELD</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s57_c1_title">Never Let AI Auto-Commit</h4>
                  <p data-i18n="s57_c1_p">Keep all changes unstaged. Inspect `git diff` with your own eyes before anything is staged or committed to source control.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s57_c2_title">The Branch Sandbox</h4>
                  <p data-i18n="s57_c2_p">Always run experimental agent tasks on a dedicated git branch (`feature/ai-experiment`). If the agent derails, discard the branch instantly.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
$ git checkout -b feature/ai-refactor
# Run AI Agent task here...
$ git status
# Review modified files...
$ git diff
# If flawless: stage and commit by hand!
# If flawed: git restore . &amp;&amp; git clean -fd
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 58: Red Lines for AI Agents
export function Slide58({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p19_badge">SECTION 19: SAFE AGENT WORKFLOW</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s58_head">Red Lines for AI Agents</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s58_sub">Operations that must ALWAYS require explicit human authorization</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge danger text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">RED LINES</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s58_c1_title">Critical Infrastructure Hazards</h4>
                  <p data-i18n="s58_c1_p">Never allow automated agents to: 1. Run database resets. 2. Push to main. 3. Deploy to production. 4. Change cloud credentials. 5. Alter billing settings.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s58_c2_title">External Network Calls</h4>
                  <p data-i18n="s58_c2_p">Beware of prompt injections in untrusted external inputs. Review any command that fetches external scripts or sends tokens over the network.</p>
                </div>
              </div>
              <div className="clean-table-wrap w-full overflow-x-auto border border-slate-800">
                <table className="clean-table w-full border-collapse text-xs border border-slate-800">
                  <thead>
                    <tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Forbidden Action</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Catastrophic Risk</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Human Safeguard</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">git push origin main</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Untested code live</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Protected branches in GitHub</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">pnpm db:reset</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Complete data wipe</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Read-only database roles</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">curl ... | bash</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Arbitrary code injection</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Inspect scripts before pipe</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
    </div>
  );
}

// Slide 59: Technical Decisions Have No Free Lunches
export function Slide59({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p20_badge">SECTION 20: THINKING ABOUT TRADEOFFS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s59_head">Technical Decisions Have No Free Lunches</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s59_sub">Forcing AI to analyze trade-offs instead of peddling one-size-fits-all hype</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">TRADEOFFS</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s59_c1_title">The Options Analysis Matrix</h4>
                  <p data-i18n="s59_c1_p">Command: 'Provide 3 alternative technical options. For each, compare: Performance, complexity, security, maintenance cost, and failure modes.'</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s59_c2_title">Context-Dependent Superiority</h4>
                  <p data-i18n="s59_c2_p">SQLite is better for embedded CLI tools; Neon PostgreSQL is better for distributed web apps. The 'best' tech stack depends entirely on requirements.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
TRADEOFF PROMPT:
"Do not recommend a single library.
Compare:
1. Neon PostgreSQL with PgBouncer vs Supabase
2. Drizzle ORM vs Prisma ORM
For each, evaluate: cold-start latency, bundle size, schema migrations,
and connection pooling in Next.js Serverless."
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 60: Classical Software Dilemmas
export function Slide60({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p20_badge">SECTION 20: THINKING ABOUT TRADEOFFS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s60_head">Classical Software Dilemmas</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s60_sub">Evaluating real engineering trade-offs with AI assistance</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">DILEMMAS</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4 data-i18n="s60_c1_title">Monolith vs Microservices &amp; SQL vs NoSQL</h4>
                <p data-i18n="s60_c1_p">Monoliths simplify transactions and deployments; microservices decouple scaling. Relational databases enforce ACID; document stores allow flexible schemas.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4 data-i18n="s60_c2_title">Client vs Server Components</h4>
                <p data-i18n="s60_c2_p">Server Components reduce client JS bundle and protect secrets; Client Components provide instant local state interactivity and event listeners.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 61: The Verification Playbook
export function Slide61({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p21_badge">SECTION 21: HOW TO VERIFY AI ANSWERS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s61_head">The Verification Playbook</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s61_sub">10 empirical techniques to confirm code correctness independently</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">PLAYBOOK</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s61_c1_title">Automated &amp; Compiler Checks</h4>
                  <p data-i18n="s61_c1_p">1. Official documentation check. 2. Static type checker (tsc). 3. Linter (eslint). 4. Automated unit test suite. 5. Integration tests.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s61_c2_title">Runtime &amp; Behavioral Checks</h4>
                  <p data-i18n="s61_c2_p">6. Browser console errors. 7. Server log output. 8. Network request payloads. 9. Database query telemetry. 10. Git diff inspection.</p>
                </div>
              </div>
              <div className="flow-diagram flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">1</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Static Check</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">tsc + eslint</div>
                </div>
                <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">2</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Test Runner</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">Unit &amp; E2E</div>
                </div>
                <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">3</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Diff Audit</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">Inspect every line</div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 62: Eloquence Is Not Evidence
export function Slide62({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p21_badge">SECTION 21: HOW TO VERIFY AI ANSWERS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s62_head">Eloquence Is Not Evidence</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s62_sub">Overcoming the psychological trap of polished AI rhetoric</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge danger text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">CRITICAL SKEPTICISM</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s62_c1_title">The Smooth Talker Trap</h4>
                  <p data-i18n="s62_c1_p">An LLM can write beautifully formatted markdown with professional tone while referencing a library function that was deprecated in 2021 or never existed.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s62_c2_title">Demand Reproducible Proof</h4>
                  <p data-i18n="s62_c2_p">Adopt a zero-trust mindset: Every code snippet is guilty of being broken until proven innocent by a passing test runner or successful build.</p>
                </div>
              </div>
              <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                <svg viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>
                <div><strong>Professional Mindset:</strong> Polite, professional tone is a feature of language modeling, not a guarantee of software correctness. Code only becomes true when it executes.</div>
              </div>
            </div>
    </div>
  );
}

// Slide 63: Forcing AI to Declare Uncertainty
export function Slide63({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p22_badge">SECTION 22: HANDLING UNCERTAINTY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s63_head">Forcing AI to Declare Uncertainty</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s63_sub">Preventing confident guesses when data is incomplete or ambiguous</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge warning text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">UNCERTAINTY</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s63_c1_title">The 4-Category Epistemic Prompt</h4>
                  <p data-i18n="s63_c1_p">Instruct: 'Classify your answer into: 1. Verified Facts. 2. Strong Inferences. 3. Assumptions. 4. Unknowns. State what information is missing.'</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s63_c2_title">Banning Hallucination in the Prompt</h4>
                  <p data-i18n="s63_c2_p">'If you are unsure of an API parameter or database column, say "I need to inspect file X" instead of guessing its syntax.'</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
EPISTEMIC RESPONSE FORMAT:
1. VERIFIED FACTS: Found table 'users' in db/schema.ts line 14.
2. STRONG INFERENCES: Function uses NextAuth because session is checked.
3. ASSUMPTIONS: Assuming Neon PostgreSQL connection pool port is 5432.
4. UNKNOWNS: Redis configuration not found in repository.
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 64: Navigating Evolving Library Ecosystems
export function Slide64({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p22_badge">SECTION 22: HANDLING UNCERTAINTY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s64_head">Navigating Evolving Library Ecosystems</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s64_sub">Handling breaking version changes and training data cutoffs</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">VERSIONS</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s64_c1_title">Version Drift Hazards</h4>
                  <p data-i18n="s64_c1_p">Next.js 12 vs 13 vs 15 have radically different routing and server action semantics. Always specify exact major versions in your prompt.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s64_c2_title">Feeding Current Docs</h4>
                  <p data-i18n="s64_c2_p">When using bleeding-edge libraries, feed the official release notes or API reference directly into the prompt context to ground the model.</p>
                </div>
              </div>
              <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                <svg viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>
                <div><strong>Version Injection Tip:</strong> "We are using Next.js 15.1 with React 19. Do NOT use deprecated getServerSideProps or pages router. Use App Router Server Actions exclusively."</div>
              </div>
            </div>
    </div>
  );
}

// Slide 65: The 10 Deadly Prompting Sins (Part 1)
export function Slide65({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p23_badge">SECTION 23: COMMON PROMPTING MISTAKES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s65_head">The 10 Deadly Prompting Sins (Part 1)</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s65_sub">Recognizing and correcting destructive communication anti-patterns</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge danger text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">ANTI-PATTERNS</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card border-red-500/40">
                <h4 className="text-red-400" data-i18n="s65_c1_title">Sin 1: Extreme Vagueness</h4>
                <p data-i18n="s65_c1_p">Problem: 'Fix my bug'. Fix: Provide the exact error message, expected outcome, actual outcome, and reproduction steps.</p>
              </div>
              <div className="info-card border-red-500/40">
                <h4 className="text-red-400" data-i18n="s65_c2_title">Sin 2: Monolithic Overload</h4>
                <p data-i18n="s65_c2_p">Problem: Asking for 15 features at once. Fix: Decompose into atomic tasks and deliver them incrementally.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 66: The 10 Deadly Prompting Sins (Part 2)
export function Slide66({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p23_badge">SECTION 23: COMMON PROMPTING MISTAKES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s66_head">The 10 Deadly Prompting Sins (Part 2)</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s66_sub">Preventing scope creep, missing constraints, and blind faith</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge danger text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">ANTI-PATTERNS</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card border-red-500/40">
                <h4 className="text-red-400" data-i18n="s66_c1_title">Sin 3: Coding Before Analyzing</h4>
                <p data-i18n="s66_c1_p">Problem: Telling AI to rewrite immediately without reading existing files. Fix: Force a read-only architecture analysis first.</p>
              </div>
              <div className="info-card border-red-500/40">
                <h4 className="text-red-400" data-i18n="s66_c2_title">Sin 4: Unstated Constraints</h4>
                <p data-i18n="s66_c2_p">Problem: Forgetting to state 'do not break backward compatibility'. Fix: Include explicit negative boundaries in every prompt.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 67: The 10 Deadly Prompting Sins (Part 3)
export function Slide67({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p23_badge">SECTION 23: COMMON PROMPTING MISTAKES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s67_head">The 10 Deadly Prompting Sins (Part 3)</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s67_sub">Fixing symptom-chasing and runaway file churn</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge danger text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">ANTI-PATTERNS</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card border-red-500/40">
                <h4 className="text-red-400" data-i18n="s67_c1_title">Sin 5: Patching Symptoms in a Loop</h4>
                <p data-i18n="s67_c1_p">Problem: Pasting new errors repeatedly without stepping back to understand why the architecture is failing. Fix: Restart with first principles.</p>
              </div>
              <div className="info-card border-red-500/40">
                <h4 className="text-red-400" data-i18n="s67_c2_title">Sin 6: Blind Acceptance</h4>
                <p data-i18n="s67_c2_p">Problem: Copy-pasting AI code without testing. Fix: Run the test suite and inspect git diff before committing.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 68: The Prompt Refinement Loop
export function Slide68({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p24_badge">SECTION 24: PROMPT ITERATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s68_head">The Prompt Refinement Loop</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s68_sub">Iterative precision: Honing answers across sequential turns</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">REFINEMENT</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s68_c1_title">Dialogue as Calibration</h4>
                  <p data-i18n="s68_c1_p">Prompting is rarely a single-shot transaction. Use the first response to identify missing context, tighten constraints, and request surgical revisions.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s68_c2_title">Refinement vs Length</h4>
                  <p data-i18n="s68_c2_p">Iteration should add high-signal clarification—not merely make the prompt longer. Clarify ambiguities and remove unproductive tangents.</p>
                </div>
              </div>
              <div className="flow-diagram flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">1</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Draft Prompt</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">Core objective</div>
                </div>
                <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">2</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Inspect Output</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">Spot gaps</div>
                </div>
                <div className="flow-arrow text-slate-500 font-bold text-center text-xs px-2 select-none">→</div>
                <div className="flow-step flex flex-col items-center text-center gap-1 flex-1 p-2 bg-slate-900 border border-slate-800">
                  <div className="flow-step-icon w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 text-blue-400 mb-1">3</div>
                  <div className="flow-step-name text-xs font-bold text-slate-200">Surgical Pivot</div>
                  <div className="flow-step-desc text-[11px] text-slate-400">Tighten rules</div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 69: A 3-Step Iteration Walkthrough
export function Slide69({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p24_badge">SECTION 24: PROMPT ITERATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s69_head">A 3-Step Iteration Walkthrough</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s69_sub">Transforming a mediocre draft into a rock-solid production module</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">WALKTHROUGH</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s69_c1_title">Turn 1 to Turn 2</h4>
                  <p data-i18n="s69_c1_p">Turn 1: Initial query returns generic code. Turn 2: 'Good structure, but replace mock array with Drizzle ORM query matching schema in db/schema.ts.'</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s69_c2_title">Turn 2 to Turn 3</h4>
                  <p data-i18n="s69_c2_p">Turn 3: 'Now add Zod input validation, wrap in a database transaction, handle unique constraint collision, and add a unit test.'</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
Turn 1: "Write a function to create a task." → Returns dummy in-memory array.
Turn 2: "Connect to our Neon PostgreSQL Drizzle instance in db/client.ts." → Real SQL.
Turn 3: "Add Zod validation, check session user_id, handle database error." → Production ready!
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 70: Case Study: TaskFlow SaaS Platform
export function Slide70({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p25_badge">SECTION 25: REAL-WORLD PROJECT: TASKFLOW</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s70_head">Case Study: TaskFlow SaaS Platform</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s70_sub">Applying AI collaboration to a complete Next.js &amp; Neon application</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">TASKFLOW</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s70_c1_title">Stack Architecture</h4>
                  <p data-i18n="s70_c1_p">Next.js 15 App Router, TypeScript, Tailwind CSS, Neon Serverless PostgreSQL, Drizzle ORM, GitHub Actions CI, Vercel Production Deployment.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s70_c2_title">The Disciplined 8-Phase Cadence</h4>
                  <p data-i18n="s70_c2_p">Phase 1: Spec Analysis -&gt; Phase 2: Schema Design -&gt; Phase 3: Auth &amp; RBAC -&gt; Phase 4: Data Layer -&gt; Phase 5: UI Components -&gt; Phase 6: Testing -&gt; Phase 7: Audit -&gt; Phase 8: Deploy.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
TaskFlow Architecture Flow:
Browser (Client React / Tailwind)
   ↓ (Server Actions / Zod Validation)
Next.js 15 App Router (Edge &amp; Node runtimes)
   ↓ (Drizzle ORM / Connection Pooling)
Neon PostgreSQL (Serverless Branches)
   ↓ (GitHub Actions CI &amp; Vercel CI/CD)
Production Live at taskflow.dev
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 71: TaskFlow Phase Breakdown: What to Prompt
export function Slide71({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p25_badge">SECTION 25: REAL-WORLD PROJECT: TASKFLOW</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s71_head">TaskFlow Phase Breakdown: What to Prompt</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s71_sub">Exact prompts for each phase of the project lifecycle</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">PHASES</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4 data-i18n="s71_c1_title">Phases 1-4: The Foundation</h4>
                <p data-i18n="s71_c1_p">Use read-only analysis prompts for schema design, SQL migration verification, foreign key indexing, and user-level authorization guards.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4 data-i18n="s71_c2_title">Phases 5-8: Polish &amp; Production</h4>
                <p data-i18n="s71_c2_p">Use strict constraint prompts for UI zero-border-radius compliance, unit tests, security audit, and deployment checklist validation.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 72: Production-Grade Reusable Prompt Templates
export function Slide72({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p26_badge">SECTION 26: PRACTICAL PROMPT LIBRARY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s72_head">Production-Grade Reusable Prompt Templates</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s72_sub">Battle-tested templates with copy-to-clipboard functionality</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">LIBRARY</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="prompt-template-card info-card">
                <div className="flex items-center justify-between">
                  <h4 className="text-blue-400">1. Codebase Architecture Audit</h4>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="template-content text-xs  text-slate-300 mt-2 bg-slate-900 p-2 border border-slate-800">
Do not write or modify code yet.
Inspect the existing codebase and explain:
1. Architecture, routing, and file responsibilities.
2. Current feature mechanics &amp; data flow.
3. Dependencies and integrations.
4. Edge-case bugs, security risks, and assumptions.
Support findings with file paths.
                </div>
              </div>

              <div className="prompt-template-card info-card">
                <div className="flex items-center justify-between">
                  <h4 className="text-blue-400">2. Surgical Bug Investigation</h4>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="template-content text-xs  text-slate-300 mt-2 bg-slate-900 p-2 border border-slate-800">
Analyze this error before proposing a fix.
Expected: [Describe expected outcome]
Observed: [Describe actual outcome]
Logs: [Paste first fatal error and stack trace]
Task: Identify root cause, explain why it happened,
and propose smallest safe fix with a regression test.
                </div>
              </div>

              <div className="prompt-template-card info-card">
                <div className="flex items-center justify-between">
                  <h4 className="text-blue-400">3. Read-Only Security Review</h4>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="template-content text-xs  text-slate-300 mt-2 bg-slate-900 p-2 border border-slate-800">
Perform a strictly read-only security audit.
Audit: Auth guards, SQL injection, IDOR, secret leaks,
and multi-tenant isolation.
Report findings by Severity (Critical/High/Med)
with file paths, line numbers, exploit scenarios, and patches.
                </div>
              </div>

              <div className="prompt-template-card info-card">
                <div className="flex items-center justify-between">
                  <h4 className="text-blue-400">4. Database Migration Safety Audit</h4>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="template-content text-xs  text-slate-300 mt-2 bg-slate-900 p-2 border border-slate-800">
Analyze this schema change against Neon PostgreSQL.
Check for table locks, downtime on large tables,
foreign key cascades, and data loss risks.
Provide reversible UP and DOWN SQL migrations
and verification SELECT queries.
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 73: Interactive Universal Prompt Workshop
export function Slide73({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p27_badge">SECTION 27: INTERACTIVE PROMPT BUILDER</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s73_head">Interactive Universal Prompt Workshop</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s73_sub">Assemble structured, high-precision prompts with real-time feedback</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge info text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">WORKSHOP</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <label className="block font-bold mb-1 text-slate-300">Task Type</label>
                    <select id="builder-task-type" className="w-full bg-slate-900 border border-slate-700 p-1.5 text-white">
                      <option value="Feature Implementation">Feature Implementation</option>
                      <option value="Bug Investigation">Bug Investigation</option>
                      <option value="Security Audit">Security Audit</option>
                      <option value="Code Review">Code Review</option>
                      <option value="Database Migration">Database Migration</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold mb-1 text-slate-300">Target Role</label>
                    <select id="builder-role" className="w-full bg-slate-900 border border-slate-700 p-1.5 text-white">
                      <option value="Senior Full-Stack Engineer">Senior Full-Stack Engineer</option>
                      <option value="Senior Security Auditor">Senior Security Auditor</option>
                      <option value="PostgreSQL Database Architect">PostgreSQL Database Architect</option>
                      <option value="Frontend Architecture Specialist">Frontend Architecture Specialist</option>
                    </select>
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block font-bold mb-1 text-slate-300">Objective / Goal</label>
                  <input id="builder-goal" type="text" className="w-full bg-slate-900 border border-slate-700 p-1.5 text-white" value="Implement paginated task list with status filter and user authorization" />
                </div>

                <div className="text-xs">
                  <label className="block font-bold mb-1 text-slate-300">Tech Stack &amp; Context</label>
                  <select id="builder-stack" className="w-full bg-slate-900 border border-slate-700 p-1.5 text-white">
                    <option value="Next.js 15 App Router, TypeScript, Tailwind CSS, Neon PostgreSQL, Drizzle ORM">Next.js 15, TS, Tailwind, Neon Postgres, Drizzle</option>
                    <option value="Next.js 15, Prisma ORM, PostgreSQL, NextAuth v5">Next.js 15, Prisma, PostgreSQL, NextAuth</option>
                    <option value="Vanilla HTML5, Tailwind CSS, Vanilla JavaScript">Vanilla HTML5, Tailwind CSS, Vanilla JS</option>
                  </select>
                </div>

                <div className="text-xs">
                  <label className="block font-bold mb-1 text-slate-300">Requirements</label>
                  <textarea id="builder-reqs" rows="2" className="w-full bg-slate-900 border border-slate-700 p-1.5 text-white  text-[11px]">- Validate query parameters with Zod
- Enforce tenant user_id authorization
- Include loading skeleton and empty state
- Add automated unit test for filtering logic</textarea>
                </div>

                <div className="text-xs">
                  <label className="block font-bold mb-1 text-slate-300">Constraints</label>
                  <textarea id="builder-constraints" rows="2" className="w-full bg-slate-900 border border-slate-700 p-1.5 text-white  text-[11px]">- Do not modify database schema
- Do not introduce new npm packages
- Preserve existing UI theme tokens and zero border-radius
- Do not commit secrets</textarea>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <label className="block font-bold mb-1 text-slate-300">Output Format</label>
                    <select id="builder-output-fmt" className="w-full bg-slate-900 border border-slate-700 p-1.5 text-white">
                      <option value="Unified diff with file paths, changed lines, and testing summary">Unified diff + file paths</option>
                      <option value="Step-by-step architectural proposal with zero code edits">Architecture proposal only</option>
                      <option value="Actionable audit list ranked by severity (P0-P3)">Actionable audit list (P0-P3)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold mb-1 text-slate-300">Verification</label>
                    <select id="builder-verification" className="w-full bg-slate-900 border border-slate-700 p-1.5 text-white">
                      <option value="Run `pnpm test` and verify response status codes 200/400/401/403">Run `pnpm test` + HTTP codes</option>
                      <option value="Inspect git diff and execute reproducible test reproduction steps">Inspect diff + reproduce</option>
                      <option value="EXPLAIN ANALYZE query plan on test dataset">EXPLAIN ANALYZE query plan</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <button id="builder-btn-reset" className="btn-nav inline-flex items-center gap-2 px-3 py-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white text-xs font-bold cursor-pointer transition-colors no-underline">Reset</button>
                  <button id="builder-btn-compare" className="btn-nav inline-flex items-center gap-2 px-3 py-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white text-xs font-bold cursor-pointer transition-colors no-underline">Compare Weak vs Strong</button>
                </div>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="builder-preview-box terminal-window">
                  <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                    <span className="terminal-title text-[11px] text-slate-400 font-semibold">generated-prompt.txt (Editable)</span>
                    <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy Prompt</button>
                  </div>
                  <pre id="builder-output-code" contenteditable="true" spellcheck="false" className="terminal-body text-xs  whitespace-pre-wrap max-h-[340px] overflow-y-auto focus:outline-none focus:ring-1 focus:ring-blue-500"></pre>
                </div>

                <div id="builder-compare-box" className="info-card border-blue-500/40 hidden">
                  <h4 className="text-blue-400">Why This Structured Prompt Wins</h4>
                  <p className="text-xs text-slate-300">
                    By explicitly stating <strong>Role</strong>, <strong>Constraints</strong>, and <strong>Verification Criteria</strong>, this prompt eliminates 95% of hallucinated packages, enforces backward compatibility, and tells the AI exactly what evidence is required to prove success.
                  </p>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 74: Interactive Scenario & Troubleshooting Exercises
export function Slide74({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p28_badge">SECTION 28: INTERACTIVE ANALYSIS WORKSHOP</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s74_head">Interactive Scenario &amp; Troubleshooting Exercises</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s74_sub">Test your engineering intuition on real-world production incidents</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">EXERCISE</span>
              </div>
            </div>
            <div className="slide-stack flex flex-col gap-3">
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                <button className="scenario-nav-btn active" data-scenario="sc-1">1. Latency Spike</button>
                <button className="scenario-nav-btn px-3 py-1.5 text-xs font-bold bg-slate-800 border border-slate-700 text-slate-300 hover:text-white cursor-pointer transition-colors" data-scenario="sc-2">2. Auth 403 Error</button>
                <button className="scenario-nav-btn px-3 py-1.5 text-xs font-bold bg-slate-800 border border-slate-700 text-slate-300 hover:text-white cursor-pointer transition-colors" data-scenario="sc-3">3. DB Connection Limit</button>
                <button className="scenario-nav-btn px-3 py-1.5 text-xs font-bold bg-slate-800 border border-slate-700 text-slate-300 hover:text-white cursor-pointer transition-colors" data-scenario="sc-4">4. Layout Overflow</button>
                <button className="scenario-nav-btn px-3 py-1.5 text-xs font-bold bg-slate-800 border border-slate-700 text-slate-300 hover:text-white cursor-pointer transition-colors" data-scenario="sc-5">5. Vercel Build Failure</button>
              </div>

              <div id="sc-1" className="scenario-card info-card">
                <h4 className="text-blue-400">Incident: The application became slow after a release.</h4>
                <p className="text-xs text-slate-300 mb-2">Users report that the main dashboard takes 6+ seconds to load. CPU on the database spiked to 98%. What is your FIRST and BEST action?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button className="scenario-option-btn w-full text-left p-3 bg-slate-800 border border-slate-700 text-slate-200 text-xs cursor-pointer hover:border-blue-500 transition-colors flex items-start gap-2" data-correct="false" data-explanation="Blindly rewriting the dashboard throws away working code and doesn't identify whether the bottleneck is network, database, or client-side.">
                    <span>A</span> Immediately rewrite the dashboard in Next.js Server Components.
                  </button>
                  <button className="scenario-option-btn w-full text-left p-3 bg-slate-800 border border-slate-700 text-slate-200 text-xs cursor-pointer hover:border-blue-500 transition-colors flex items-start gap-2" data-correct="false" data-explanation="Adding caching hides unindexed query bottlenecks and creates stale-data bugs without solving root cause latency.">
                    <span>B</span> Slap a Redis cache on every endpoint immediately.
                  </button>
                  <button className="scenario-option-btn w-full text-left p-3 bg-slate-800 border border-slate-700 text-slate-200 text-xs cursor-pointer hover:border-blue-500 transition-colors flex items-start gap-2" data-correct="true" data-explanation="Collecting EXPLAIN ANALYZE telemetry, inspecting database slow-query logs, and reviewing recent PR git diffs targets the exact query causing the CPU spike.">
                    <span>C</span> Inspect server logs, run EXPLAIN ANALYZE on queries, and review the recent PR diff.
                  </button>
                  <button className="scenario-option-btn w-full text-left p-3 bg-slate-800 border border-slate-700 text-slate-200 text-xs cursor-pointer hover:border-blue-500 transition-colors flex items-start gap-2" data-correct="false" data-explanation="Upgrading the server tier increases cloud costs without fixing the unindexed sequential scan.">
                    <span>D</span> Upgrade the Neon database tier to a 16-CU instance.
                  </button>
                </div>
                <div className="scenario-feedback alert-callout tip mt-3 hidden">
                  <span className="scenario-feedback-text"></span>
                </div>
              </div>

              <div id="sc-2" className="scenario-card info-card hidden">
                <h4 className="text-blue-400">Incident: Users receive HTTP 403 when updating tasks.</h4>
                <p className="text-xs text-slate-300 mb-2">Authentication succeeds, but saving tasks returns status 403 Forbidden. What should you investigate?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button className="scenario-option-btn w-full text-left p-3 bg-slate-800 border border-slate-700 text-slate-200 text-xs cursor-pointer hover:border-blue-500 transition-colors flex items-start gap-2" data-correct="true" data-explanation="403 means the user is authenticated, but authorization logic rejected the operation. Verify tenant_id and role permissions.">
                    <span>A</span> Check the role-based access control and tenant_id check in the Server Action.
                  </button>
                  <button className="scenario-option-btn w-full text-left p-3 bg-slate-800 border border-slate-700 text-slate-200 text-xs cursor-pointer hover:border-blue-500 transition-colors flex items-start gap-2" data-correct="false" data-explanation="403 is NOT 401; password hashing and credentials are valid since the session token exists.">
                    <span>B</span> Reset user passwords and change the Bcrypt/Argon2 salt rounds.
                  </button>
                </div>
                <div className="scenario-feedback alert-callout tip mt-3 hidden"><span className="scenario-feedback-text"></span></div>
              </div>

              <div id="sc-3" className="scenario-card info-card hidden">
                <h4 className="text-blue-400">Incident: 'Too many connections for database user' in Neon.</h4>
                <p className="text-xs text-slate-300 mb-2">During peak traffic, serverless lambdas exhaust PostgreSQL connection slots. What is the correct fix?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button className="scenario-option-btn w-full text-left p-3 bg-slate-800 border border-slate-700 text-slate-200 text-xs cursor-pointer hover:border-blue-500 transition-colors flex items-start gap-2" data-correct="true" data-explanation="Neon provides PgBouncer transaction pooling on port 5432 with ?sslmode=require to reuse connections across serverless functions.">
                    <span>A</span> Connect via the Neon pooled connection string (-pooler hostname) with transaction pooling.
                  </button>
                  <button className="scenario-option-btn w-full text-left p-3 bg-slate-800 border border-slate-700 text-slate-200 text-xs cursor-pointer hover:border-blue-500 transition-colors flex items-start gap-2" data-correct="false" data-explanation="Increasing client connection timeouts makes lambdas hang longer, consuming more memory and causing cascading timeouts.">
                    <span>B</span> Increase the client connection timeout from 10s to 120s.
                  </button>
                </div>
                <div className="scenario-feedback alert-callout tip mt-3 hidden"><span className="scenario-feedback-text"></span></div>
              </div>

              <div id="sc-4" className="scenario-card info-card hidden">
                <h4 className="text-blue-400">Incident: Mobile screen scrolls horizontally (horizontal overflow).</h4>
                <p className="text-xs text-slate-300 mb-2">On a 375px phone screen, the page is shaking and scrolling left and right. What is the usual cause?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button className="scenario-option-btn w-full text-left p-3 bg-slate-800 border border-slate-700 text-slate-200 text-xs cursor-pointer hover:border-blue-500 transition-colors flex items-start gap-2" data-correct="true" data-explanation="Fixed widths (e.g. w-[600px]), hardcoded pixel padding, or unconstrained table tags wider than 375px break mobile viewports.">
                    <span>A</span> A fixed pixel width (w-[600px] or min-w-full) or unconstrained code pre block.
                  </button>
                  <button className="scenario-option-btn w-full text-left p-3 bg-slate-800 border border-slate-700 text-slate-200 text-xs cursor-pointer hover:border-blue-500 transition-colors flex items-start gap-2" data-correct="false" data-explanation="Font sizes affect height, not viewport horizontal overflow, unless combined with nowrap.">
                    <span>B</span> The font size is set to 14px instead of 16px.
                  </button>
                </div>
                <div className="scenario-feedback alert-callout tip mt-3 hidden"><span className="scenario-feedback-text"></span></div>
              </div>

              <div id="sc-5" className="scenario-card info-card hidden">
                <h4 className="text-blue-400">Incident: Vercel build fails with 'Type error: Property does not exist'.</h4>
                <p className="text-xs text-slate-300 mb-2">Local development server ran, but production deployment build fails during `next build`. Why?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button className="scenario-option-btn w-full text-left p-3 bg-slate-800 border border-slate-700 text-slate-200 text-xs cursor-pointer hover:border-blue-500 transition-colors flex items-start gap-2" data-correct="true" data-explanation="`next dev` often skips strict TypeScript compilation for speed, whereas `next build` runs strict type checking. Run `tsc --noEmit` locally before pushing.">
                    <span>A</span> Next.js production build runs strict TypeScript checks that dev server skipped. Run `tsc --noEmit`.
                  </button>
                  <button className="scenario-option-btn w-full text-left p-3 bg-slate-800 border border-slate-700 text-slate-200 text-xs cursor-pointer hover:border-blue-500 transition-colors flex items-start gap-2" data-correct="false" data-explanation="Disabling TypeScript checks in production deployments hides critical runtime bugs that crash in front of users.">
                    <span>B</span> Set typescript: &#123; ignoreBuildErrors: true &#125; in next.config.js.
                  </button>
                </div>
                <div className="scenario-feedback alert-callout tip mt-3 hidden"><span className="scenario-feedback-text"></span></div>
              </div>
            </div>
    </div>
  );
}

// Slide 75: The Master Engineering Workflow & Architecture
export function Slide75({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400" data-i18n="p29_badge">SECTION 29: FINAL CHEAT SHEET</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight" data-i18n="s75_head">The Master Engineering Workflow &amp; Architecture</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0" data-i18n="s75_sub">Understand -&gt; Analyze -&gt; Plan -&gt; Implement -&gt; Test -&gt; Review -&gt; Verify -&gt; Deliver</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge success text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">CHEAT SHEET</span>
              </div>
            </div>
            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s75_c1_title">The Golden Commandments</h4>
                  <p data-i18n="s75_c1_p">1. Define the goal. 2. Provide relevant context. 3. Set strict constraints. 4. Analyze before coding. 5. Test assumptions. 6. Inspect diffs. 7. Verify with evidence.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4 data-i18n="s75_c2_title">The Complete Lifecycle</h4>
                  <p data-i18n="s75_c2_p">Human Architect defines problem -&gt; AI acts as accelerated copilot -&gt; Human inspects proposals -&gt; Automated suite verifies truth -&gt; Production releases safely.</p>
                </div>
              </div>
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                  <div className="terminal-dots flex items-center gap-1.5"><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span><span className="terminal-dot w-2.5 h-2.5 rounded-full inline-block"></span></div>
                  <span className="terminal-title text-[11px] text-slate-400 font-semibold">final-architecture — human &amp; ai symbiosis</span>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="terminal-body  text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed">
Human Developer (Problem Definition &amp; Acceptance Constraints)
      ↓
AI Copilot / Agent (Read-Only Codebase Analysis &amp; Plan Proposal)
      ↓
Human Review (Approve Architecture &amp; Validate Assumptions)
      ↓
AI Implementation (Surgical Unstaged Code Edits)
      ↓
Automated Verification (tsc, eslint, vitest, EXPLAIN ANALYZE)
      ↓
Human Verification (git diff, manual test, staging check)
      ↓
Safe Production Deployment
                </div>
              </div>
            </div>
    </div>
  );
}

export const PROMPTING_META = {
  id: "prompting",
  title: "Prompt Engineering & AI Development",
  module: "MODULE 09",
  accent: "emerald",
};

export const PROMPTING_SLIDES = [
  {
    id: 1,
    title: "What AI Is and How Language Models Work",
    part: "SECTION 01: UNDERSTANDING AI",
    Component: Slide1,
  },
  {
    id: 2,
    title: "Hallucinations & Failure Modes",
    part: "SECTION 01: UNDERSTANDING AI",
    Component: Slide2,
  },
  {
    id: 3,
    title: "The Verification Protocol",
    part: "SECTION 01: UNDERSTANDING AI",
    Component: Slide3,
  },
  {
    id: 4,
    title: "Vague Requests vs. Precise Specifications",
    part: "SECTION 02: WHAT IS A PROMPT?",
    Component: Slide4,
  },
  {
    id: 5,
    title: "Weak vs. Strong Prompt Comparison",
    part: "SECTION 02: WHAT IS A PROMPT?",
    Component: Slide5,
  },
  {
    id: 6,
    title: "The Prompt Economy",
    part: "SECTION 02: WHAT IS A PROMPT?",
    Component: Slide6,
  },
  {
    id: 7,
    title: "The 7-Pillar Universal Prompt Formula",
    part: "SECTION 03: THE PROMPT FORMULA",
    Component: Slide7,
  },
  {
    id: 8,
    title: "Constraints, Output & Verification",
    part: "SECTION 03: THE PROMPT FORMULA",
    Component: Slide8,
  },
  {
    id: 9,
    title: "Formula in Action: Fullstack Optimization",
    part: "SECTION 03: THE PROMPT FORMULA",
    Component: Slide9,
  },
  {
    id: 10,
    title: "Context Density & Attention Allocation",
    part: "SECTION 04: CONTEXT IS EVERYTHING",
    Component: Slide10,
  },
  {
    id: 11,
    title: "Context Pyramid: What to Include",
    part: "SECTION 04: CONTEXT IS EVERYTHING",
    Component: Slide11,
  },
  {
    id: 12,
    title: "The Minimal Sufficient Context Rule",
    part: "SECTION 04: CONTEXT IS EVERYTHING",
    Component: Slide12,
  },
  {
    id: 13,
    title: "Role Priming: Framing Perspectives",
    part: "SECTION 05: DEFINE THE ROLE CORRECTLY",
    Component: Slide13,
  },
  {
    id: 14,
    title: "The Expert Personas Catalog",
    part: "SECTION 05: DEFINE THE ROLE CORRECTLY",
    Component: Slide14,
  },
  {
    id: 15,
    title: "Role-Playing Does Not Guarantee Accuracy",
    part: "SECTION 05: DEFINE THE ROLE CORRECTLY",
    Component: Slide15,
  },
  {
    id: 16,
    title: "Requirements vs. Constraints",
    part: "SECTION 06: REQUIREMENTS &amp; CONSTRAINTS",
    Component: Slide16,
  },
  {
    id: 17,
    title: "Guardrails for Legacy & Production Systems",
    part: "SECTION 06: REQUIREMENTS &amp; CONSTRAINTS",
    Component: Slide17,
  },
  {
    id: 18,
    title: "Writing Strict Acceptance Criteria",
    part: "SECTION 06: REQUIREMENTS &amp; CONSTRAINTS",
    Component: Slide18,
  },
  {
    id: 19,
    title: "Investigation First, Implementation Second",
    part: "SECTION 07: ASK AI TO ANALYZE BEFORE CODING",
    Component: Slide19,
  },
  {
    id: 20,
    title: "The 8-Point Codebase Inspection Prompt",
    part: "SECTION 07: ASK AI TO ANALYZE BEFORE CODING",
    Component: Slide20,
  },
  {
    id: 21,
    title: "Distinguishing Facts from Assumptions",
    part: "SECTION 07: ASK AI TO ANALYZE BEFORE CODING",
    Component: Slide21,
  },
  {
    id: 22,
    title: "The Professional Engineering Workflow",
    part: "SECTION 07: ASK AI TO ANALYZE BEFORE CODING",
    Component: Slide22,
  },
  {
    id: 23,
    title: "Deconstructing Problems Methodically",
    part: "SECTION 08: THINK BEFORE SOLVING",
    Component: Slide23,
  },
  {
    id: 24,
    title: "The Scientific Method in Software",
    part: "SECTION 08: THINK BEFORE SOLVING",
    Component: Slide24,
  },
  {
    id: 25,
    title: "Case Study: The Slow Dashboard",
    part: "SECTION 08: THINK BEFORE SOLVING",
    Component: Slide25,
  },
  {
    id: 26,
    title: "Core Mental Models for Programmers",
    part: "SECTION 09: LOGICAL THINKING",
    Component: Slide26,
  },
  {
    id: 27,
    title: "Case Analysis: 'Login Fails'",
    part: "SECTION 09: LOGICAL THINKING",
    Component: Slide27,
  },
  {
    id: 28,
    title: "Cognitive Biases When Using AI",
    part: "SECTION 09: LOGICAL THINKING",
    Component: Slide28,
  },
  {
    id: 29,
    title: "The Art of Task Decomposition",
    part: "SECTION 10: DECOMPOSE COMPLEX TASKS",
    Component: Slide29,
  },
  {
    id: 30,
    title: "Deconstruction Case: Enterprise POS System",
    part: "SECTION 10: DECOMPOSE COMPLEX TASKS",
    Component: Slide30,
  },
  {
    id: 31,
    title: "Sub-Task Prompting Workflow",
    part: "SECTION 10: DECOMPOSE COMPLEX TASKS",
    Component: Slide31,
  },
  {
    id: 32,
    title: "Generating Incremental Implementation Plans",
    part: "SECTION 11: PLANNING BEFORE IMPLEMENTATION",
    Component: Slide32,
  },
  {
    id: 33,
    title: "Anatomy of an Actionable Plan",
    part: "SECTION 11: PLANNING BEFORE IMPLEMENTATION",
    Component: Slide33,
  },
  {
    id: 34,
    title: "When to Plan vs. When to Code Directly",
    part: "SECTION 11: PLANNING BEFORE IMPLEMENTATION",
    Component: Slide34,
  },
  {
    id: 35,
    title: "Precision Code Generation",
    part: "SECTION 12: PROMPTING FOR CODE GENERATION",
    Component: Slide35,
  },
  {
    id: 36,
    title: "Preventing Anti-Patterns & Bloat",
    part: "SECTION 12: PROMPTING FOR CODE GENERATION",
    Component: Slide36,
  },
  {
    id: 37,
    title: "Complete Working Code Requirement",
    part: "SECTION 12: PROMPTING FOR CODE GENERATION",
    Component: Slide37,
  },
  {
    id: 38,
    title: "UI Reproduction vs. Arbitrary Redesign",
    part: "SECTION 13: PROMPTING FOR UI DESIGN",
    Component: Slide38,
  },
  {
    id: 39,
    title: "Component-Driven Prompting",
    part: "SECTION 13: PROMPTING FOR UI DESIGN",
    Component: Slide39,
  },
  {
    id: 40,
    title: "The 4 Levels of UI Requests",
    part: "SECTION 13: PROMPTING FOR UI DESIGN",
    Component: Slide40,
  },
  {
    id: 41,
    title: "Structured Debugging Protocols",
    part: "SECTION 14: DEBUGGING WITH AI",
    Component: Slide41,
  },
  {
    id: 42,
    title: "The 8-Step Debugging Cycle",
    part: "SECTION 14: DEBUGGING WITH AI",
    Component: Slide42,
  },
  {
    id: 43,
    title: "Investigating Ephemeral & Race Condition Bugs",
    part: "SECTION 14: DEBUGGING WITH AI",
    Component: Slide43,
  },
  {
    id: 44,
    title: "Evidence-Based Security Reviews",
    part: "SECTION 15: PROMPTING FOR SECURITY AUDITS",
    Component: Slide44,
  },
  {
    id: 45,
    title: "Standard Security Finding Format",
    part: "SECTION 15: PROMPTING FOR SECURITY AUDITS",
    Component: Slide45,
  },
  {
    id: 46,
    title: "Multi-Tenant & Secret Isolation",
    part: "SECTION 15: PROMPTING FOR SECURITY AUDITS",
    Component: Slide46,
  },
  {
    id: 47,
    title: "The Production Code Reviewer Persona",
    part: "SECTION 16: PROMPTING FOR CODE REVIEW",
    Component: Slide47,
  },
  {
    id: 48,
    title: "Reviewing Diffs Effectively",
    part: "SECTION 16: PROMPTING FOR CODE REVIEW",
    Component: Slide48,
  },
  {
    id: 49,
    title: "Code Review vs. Code Rewriting",
    part: "SECTION 16: PROMPTING FOR CODE REVIEW",
    Component: Slide49,
  },
  {
    id: 50,
    title: "Database Migrations & Data Safety",
    part: "SECTION 17: PROMPTING FOR DATABASE CHANGES",
    Component: Slide50,
  },
  {
    id: 51,
    title: "PostgreSQL & Neon Specific Considerations",
    part: "SECTION 17: PROMPTING FOR DATABASE CHANGES",
    Component: Slide51,
  },
  {
    id: 52,
    title: "Data Loss Prevention Checklist",
    part: "SECTION 17: PROMPTING FOR DATABASE CHANGES",
    Component: Slide52,
  },
  {
    id: 53,
    title: "From Chatbots to Autonomous Coding Agents",
    part: "SECTION 18: USING AI CODING AGENTS",
    Component: Slide53,
  },
  {
    id: 54,
    title: "Agent Capabilities & Permission Boundaries",
    part: "SECTION 18: USING AI CODING AGENTS",
    Component: Slide54,
  },
  {
    id: 55,
    title: "Guiding Agents with Context Files",
    part: "SECTION 18: USING AI CODING AGENTS",
    Component: Slide55,
  },
  {
    id: 56,
    title: "The 10-Step Safe Agent Protocol",
    part: "SECTION 19: SAFE AGENT WORKFLOW",
    Component: Slide56,
  },
  {
    id: 57,
    title: "Git as Your Safety Shield",
    part: "SECTION 19: SAFE AGENT WORKFLOW",
    Component: Slide57,
  },
  {
    id: 58,
    title: "Red Lines for AI Agents",
    part: "SECTION 19: SAFE AGENT WORKFLOW",
    Component: Slide58,
  },
  {
    id: 59,
    title: "Technical Decisions Have No Free Lunches",
    part: "SECTION 20: THINKING ABOUT TRADEOFFS",
    Component: Slide59,
  },
  {
    id: 60,
    title: "Classical Software Dilemmas",
    part: "SECTION 20: THINKING ABOUT TRADEOFFS",
    Component: Slide60,
  },
  {
    id: 61,
    title: "The Verification Playbook",
    part: "SECTION 21: HOW TO VERIFY AI ANSWERS",
    Component: Slide61,
  },
  {
    id: 62,
    title: "Eloquence Is Not Evidence",
    part: "SECTION 21: HOW TO VERIFY AI ANSWERS",
    Component: Slide62,
  },
  {
    id: 63,
    title: "Forcing AI to Declare Uncertainty",
    part: "SECTION 22: HANDLING UNCERTAINTY",
    Component: Slide63,
  },
  {
    id: 64,
    title: "Navigating Evolving Library Ecosystems",
    part: "SECTION 22: HANDLING UNCERTAINTY",
    Component: Slide64,
  },
  {
    id: 65,
    title: "The 10 Deadly Prompting Sins (Part 1)",
    part: "SECTION 23: COMMON PROMPTING MISTAKES",
    Component: Slide65,
  },
  {
    id: 66,
    title: "The 10 Deadly Prompting Sins (Part 2)",
    part: "SECTION 23: COMMON PROMPTING MISTAKES",
    Component: Slide66,
  },
  {
    id: 67,
    title: "The 10 Deadly Prompting Sins (Part 3)",
    part: "SECTION 23: COMMON PROMPTING MISTAKES",
    Component: Slide67,
  },
  {
    id: 68,
    title: "The Prompt Refinement Loop",
    part: "SECTION 24: PROMPT ITERATION",
    Component: Slide68,
  },
  {
    id: 69,
    title: "A 3-Step Iteration Walkthrough",
    part: "SECTION 24: PROMPT ITERATION",
    Component: Slide69,
  },
  {
    id: 70,
    title: "Case Study: TaskFlow SaaS Platform",
    part: "SECTION 25: REAL-WORLD PROJECT: TASKFLOW",
    Component: Slide70,
  },
  {
    id: 71,
    title: "TaskFlow Phase Breakdown: What to Prompt",
    part: "SECTION 25: REAL-WORLD PROJECT: TASKFLOW",
    Component: Slide71,
  },
  {
    id: 72,
    title: "Production-Grade Reusable Prompt Templates",
    part: "SECTION 26: PRACTICAL PROMPT LIBRARY",
    Component: Slide72,
  },
  {
    id: 73,
    title: "Interactive Universal Prompt Workshop",
    part: "SECTION 27: INTERACTIVE PROMPT BUILDER",
    Component: Slide73,
  },
  {
    id: 74,
    title: "Interactive Scenario & Troubleshooting Exercises",
    part: "SECTION 28: INTERACTIVE ANALYSIS WORKSHOP",
    Component: Slide74,
  },
  {
    id: 75,
    title: "The Master Engineering Workflow & Architecture",
    part: "SECTION 29: FINAL CHEAT SHEET",
    Component: Slide75,
  },
];
