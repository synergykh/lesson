import React from "react";
import { Info, ArrowRight, XCircle, Database, Check, AlertTriangle, X } from "lucide-react";

// Slide 1: PostgreSQL & Neon Database
export function Slide1({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 01: INTRODUCTION</span>
                <h1 className="slide-title title-main-h1 text-2xl md:text-3xl font-extrabold text-white m-0 leading-tight">PostgreSQL &amp; Neon Database</h1>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">From Database Fundamentals to Modern Fullstack Web Architecture</p>
              </div>
              <div className="slide-badge-group flex items-center gap-2">
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">MODULE 06</span>
                <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">PRODUCTION READY</span>
              </div>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <div data-i18n="s1_desc">A developer guide to mastering PostgreSQL, the psql terminal client, database design, relational modeling, and modern serverless database deployment with Neon.</div>
                </div>

                <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="info-card text-center">
                    <span className="text-blue-400 font-bold  text-lg">72</span>
                    <p className="text-xs text-slate-400">Practical Slides</p>
                  </div>
                  <div className="info-card text-center">
                    <span className="text-blue-400 font-bold  text-lg">100%</span>
                    <p className="text-xs text-slate-400">Real SQL &amp; CLI</p>
                  </div>
                  <div className="info-card text-center">
                    <span className="text-blue-400 font-bold  text-lg">Next.js</span>
                    <p className="text-xs text-slate-400">Fullstack Cloud</p>
                  </div>
                </div>

                <div className="mt-2">
                  <button className="btn-nav btn-start-course w-auto px-4 h-9" onClick={onStart}>
                    <span data-i18n="s1_btn_start">Start Course</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                  <div className="terminal-dots flex items-center gap-1.5"><span className="terminal-dot red w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span><span className="terminal-dot yellow w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span><span className="terminal-dot green w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span></div>
                  <span>architecture — fullstack data flow</span>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
Browser (Client React / DOM)
      ↓ (HTTP / Server Actions)
Next.js (App Router / Node.js Engine)
      ↓ (TCP / TLS Pooler / WebSockets)
PostgreSQL (SQL Engine / Queries / ACID)
      ↓ (Serverless Compute &amp; Storage)
Neon Cloud (Autoscaling / Instant Branching)
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 2: What is a Database?
export function Slide2({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 01: INTRODUCTION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">What is a Database?</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Why modern web applications cannot survive on text files or memory alone</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">FUNDAMENTALS</span>
            </div>

            <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4 className="flex items-center gap-1.5"><XCircle className="w-4 h-4 text-red-400 shrink-0" /> The File System Problem</h4>
                <p data-i18n="s2_c1_desc">Storing app data in JSON or text files fails at scale. Concurrent writes cause data corruption, searches require reading entire files into RAM, and there are no transaction safety guarantees.</p>
              </div>

              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4 className="flex items-center gap-1.5"><Database className="w-4 h-4 text-blue-400 shrink-0" /> The Database Solution</h4>
                <p data-i18n="s2_c2_desc">A Database Management System (DBMS) is specialized software engineered to store, organize, index, secure, and retrieve massive volumes of data with sub-millisecond latency and ACID reliability.</p>
              </div>

              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4 className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400 shrink-0" /> Core Responsibilities</h4>
                <p data-i18n="s2_c3_desc">Data persistence across server restarts, concurrency control for thousands of simultaneous users, relational integrity enforcement, authentication, and structured query optimization.</p>
              </div>
            </div>

            <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
              <Info className="w-4 h-4 shrink-0 mt-0.5" />
              <div><strong>Key Takeaway:</strong> A database is not just a hard drive folder; it is a high-speed multi-threaded transaction engine engineered to protect data integrity at all times.</div>
            </div>
    </div>
  );
}

// Slide 3: SQL vs NoSQL: Why PostgreSQL?
export function Slide3({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 01: INTRODUCTION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">SQL vs NoSQL: Why PostgreSQL?</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Relational rigor meets modern document flexibility</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">INDUSTRY CHOICE</span>
            </div>

            <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>SQL (Relational)</h4>
                <p data-i18n="s3_c1_desc">Structured schemas, strict data types, relational joins, foreign keys, and ACID transactions. Ideal for applications with interconnected data, financial records, and clear entities.</p>
              </div>

              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>NoSQL (Document)</h4>
                <p data-i18n="s3_c2_desc">Schema-less JSON documents. Flexible for rapid prototyping, but complex joins must be manually handled in application code and data duplication is common.</p>
              </div>

              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors border-blue-500/40 bg-blue-600/10">
                <h4 className="text-blue-400">Why PostgreSQL Won</h4>
                <p data-i18n="s3_c3_desc">PostgreSQL delivers the best of both worlds: rock-solid relational ACID compliance combined with native high-performance JSONB document querying and indexing.</p>
              </div>
            </div>

            <table className="table-spec w-full border-collapse text-xs border border-slate-800">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Feature</th>
                  <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Traditional SQL (MySQL)</th>
                  <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">NoSQL (MongoDB)</th>
                  <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">PostgreSQL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Relational Joins &amp; Foreign Keys</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Yes</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Limited ($lookup)</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200"><strong>Advanced &amp; Optimized</strong></td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Semi-Structured JSON / Documents</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Basic JSON text</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Native BSON</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200"><strong>Native JSONB (Binary + GIN Index)</strong></td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Extensibility</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Limited</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Custom plugins</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200"><strong>PostGIS, pgvector, Full-Text</strong></td>
                </tr>
              </tbody>
            </table>
    </div>
  );
}

// Slide 4: Database Mental Model & Hierarchy
export function Slide4({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 02: DATABASE FUNDAMENTALS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Database Mental Model &amp; Hierarchy</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Understanding the organizational layers from server to record</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">ARCHITECTURE</span>
            </div>

            <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>1. Server Cluster</h4>
                <p data-i18n="s4_c1_desc">The PostgreSQL service managing storage, connections, background worker processes, and memory buffers.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>2. Database &amp; Schema</h4>
                <p data-i18n="s4_c2_desc">A database is an isolated namespace containing schemas (default 'public'). Schemas group related tables, views, and functions.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>3. Table, Column &amp; Row</h4>
                <p data-i18n="s4_c3_desc">Tables represent entities. Columns define attributes with strict data types. Rows (records) store individual instances of data.</p>
              </div>
            </div>

            <div className="diagram-box flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
              <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Operating System</div>
              <div className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">↓</div>
              <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">PostgreSQL Server (Port 5432)</div>
              <div className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">↓</div>
              <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Database (myapp)</div>
              <div className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">↓</div>
              <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Schema (public)</div>
              <div className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">↓</div>
              <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">Tables (users, posts, comments)</div>
            </div>
    </div>
  );
}

// Slide 5: Relational Architecture in Action
export function Slide5({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 02: DATABASE FUNDAMENTALS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Relational Architecture in Action</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Visualizing connected entities: Users, Posts, and Comments</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">ERD VISUAL</span>
            </div>

            <p data-i18n="s5_desc">Entities do not live in isolation. Foreign keys establish mathematically sound references between rows, eliminating duplicate data and preserving structural integrity.</p>

            <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>table: users</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
id (PK) | name  | email
--------+-------+------------------
1       | Dara  | dara@test.com
2       | Lina  | lina@test.com
                </div>
              </div>

              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>table: posts</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
id (PK) | user_id (FK) | title
--------+--------------+------------------
101     | 1            | Intro to Postgres
102     | 1            | Serverless Neon
103     | 2            | Next.js Data Flow
                </div>
              </div>

              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>table: comments</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
id (PK) | post_id (FK) | comment
--------+--------------+------------------
501     | 101          | Great article!
502     | 101          | Very clear tips.
503     | 103          | Thanks for this!
                </div>
              </div>
            </div>

            <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
              <Check className="w-4 h-4 shrink-0 mt-0.5" />
              <div><strong>Relational Linkage:</strong> <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">posts.user_id</code> points to <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">users.id</code>. If Dara updates his name, every post Dara authored immediately reflects his updated name without data duplication.</div>
            </div>
    </div>
  );
}

// Slide 6: Installing PostgreSQL Locally
export function Slide6({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 03: LOCAL INSTALLATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Installing PostgreSQL Locally</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Setting up the server environment on Linux / Ubuntu</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">UBUNTU / DEBIAN</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Package Installation</h4>
                  <p data-i18n="s6_c1_desc">Install the PostgreSQL server engine along with the postgresql-contrib package containing valuable extensions and utilities.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>System User &amp; Port</h4>
                  <p data-i18n="s6_c2_desc">The package installer creates a dedicated Linux system user named 'postgres' and configures the daemon to listen on default TCP port 5432.</p>
                </div>
              </div>

              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                  <div className="terminal-dots flex items-center gap-1.5"><span className="terminal-dot red w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span><span className="terminal-dot yellow w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span><span className="terminal-dot green w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span></div>
                  <span>bash — installation commands</span>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
<span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span><span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">sudo apt update</span>
<span className="term-out text-slate-300  text-xs">Hit:1 http://archive.ubuntu.com/ubuntu jammy InRelease</span>

<span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span><span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">sudo apt install -y postgresql postgresql-contrib</span>
<span className="term-out text-slate-300  text-xs">Setting up postgresql-client-16...
Setting up postgresql-16...
Creating new PostgreSQL cluster 16/main ...
Ver Cluster Port Status Owner    Data directory
16  main    5432 online postgres /var/lib/postgresql/16/main</span>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 7: PostgreSQL Service Management
export function Slide7({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 03: LOCAL INSTALLATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">PostgreSQL Service Management</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Controlling the background systemd daemon</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">SYSTEMD</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>bash — systemctl commands</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
<span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span><span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">sudo systemctl status postgresql</span>
<span className="term-out text-slate-300  text-xs">● postgresql.service - PostgreSQL RDBMS
     Loaded: loaded (/lib/systemd/system/postgresql.service; enabled)
     Active: active (exited) since Mon 2026-10-19 14:00:00 UTC</span>

<span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span><span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">sudo systemctl start postgresql</span>
<span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span><span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">sudo systemctl enable postgresql</span>
                </div>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Service Status Check</h4>
                  <p data-i18n="s7_c1_desc">Verify that the PostgreSQL engine is active, running, and listening for incoming client connections.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Starting &amp; Boot Enable</h4>
                  <p data-i18n="s7_c2_desc">Start the service immediately and enable systemd auto-restart on operating system reboots.</p>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 8: The psql Interactive Terminal
export function Slide8({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 04: PSQL CLI</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">The psql Interactive Terminal</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Connecting to the database engine from your command line</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">TERMINAL CLI</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>What is psql?</h4>
                  <p data-i18n="s8_c1_desc">psql is the official PostgreSQL interactive terminal program. It allows you to run SQL queries, inspect database schemas, manage roles, and execute administrative meta-commands.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>The postgres Superuser</h4>
                  <p data-i18n="s8_c2_desc">By default, PostgreSQL uses peer authentication on Linux. Running psql as the postgres user connects you directly to the administrative console.</p>
                </div>
              </div>

              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                  <div className="terminal-dots flex items-center gap-1.5"><span className="terminal-dot red w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span><span className="terminal-dot yellow w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span><span className="terminal-dot green w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span></div>
                  <span>bash — connecting as postgres</span>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
<span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span><span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">sudo -u postgres psql</span>
<span className="term-out text-slate-300  text-xs">psql (16.2)
Type "help" for help.

postgres=# </span>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 9: psql Connection Parameters
export function Slide9({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 04: PSQL CLI</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">psql Connection Parameters</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Deconstructing connection flags: -h, -p, -U, -d</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">FLAGS &amp; URI</span>
            </div>

            <table className="table-spec w-full border-collapse text-xs border border-slate-800">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Flag</th>
                  <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Parameter</th>
                  <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Default</th>
                  <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">-h</code></td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Hostname / Host IP</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Local UNIX socket</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Server IP address or hostname (e.g., <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">localhost</code> or remote Neon host)</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">-p</code></td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Port</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">5432</code></td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">TCP port where PostgreSQL is listening</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">-U</code></td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Username</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Current OS user</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Database role / user name to authenticate as</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">-d</code></td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Database name</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Same as username</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Target database to connect to</td>
                </tr>
              </tbody>
            </table>

            <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>bash — connection examples</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
              <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
<span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span><span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">psql -h localhost -p 5432 -U postgres -d myapp</span>
<span className="term-prompt text-blue-500 select-none mr-2 font-bold">$</span><span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">psql "postgresql://postgres:secret@localhost:5432/myapp?sslmode=disable"</span>
              </div>
            </div>
    </div>
  );
}

// Slide 10: Essential psql Meta-Commands
export function Slide10({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 05: IMPORTANT PSQL COMMANDS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Essential psql Meta-Commands</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Navigating databases and schemas without writing long SQL queries</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">META-COMMANDS</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <table className="table-spec w-full border-collapse text-xs border border-slate-800">
                <thead>
                  <tr>
                    <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Command</th>
                    <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">\l</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">List all databases in the server cluster</td></tr>
                  <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">\c dbname</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Connect / switch to target database</td></tr>
                  <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">\dt</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">List all tables in the current schema</td></tr>
                  <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">\d table_name</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Describe table structure, columns, types, indexes</td></tr>
                  <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">\du</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">List all users / roles and their attributes</td></tr>
                  <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">\dn</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">List all schemas in current database</td></tr>
                  <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">\q</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Quit / exit psql terminal session</td></tr>
                </tbody>
              </table>

              <div className="slide-stack flex flex-col gap-3">
                <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <div><strong>Notice:</strong> Meta-commands begin with a backslash <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">\</code> and do NOT require a trailing semicolon <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">;</code>. SQL queries on the other hand MUST end with a semicolon.</div>
                </div>

                <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                  <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>psql session</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                  <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
postgres=# \c myapp
You are now connected to database "myapp" as user "postgres".
myapp=# \dt
List of relations
Schema | Name  | Type  | Owner 
-------+-------+-------+-------
public | users | table | postgres
(1 row)
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 11: System & Environment Inspection
export function Slide11({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 05: IMPORTANT PSQL COMMANDS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">System &amp; Environment Inspection</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Checking database version, active database, and query timing</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">QUERIES</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>psql — server queries</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
myapp=# <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">SELECT version();</span>
<span className="term-out text-slate-300  text-xs">                                                 version                                                 
---------------------------------------------------------------------------------------------------------
 PostgreSQL 16.2 (Ubuntu 16.2-1.pgdg22.04+1) on x86_64-pc-linux-gnu, compiled by gcc (Ubuntu 11.4.0)
(1 row)</span>

myapp=# <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">SELECT current_database();</span>
<span className="term-out text-slate-300  text-xs"> current_database 
------------------
 myapp
(1 row)</span>
                </div>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Server Identification</h4>
                  <p data-i18n="s11_c1_desc">Inspect the PostgreSQL version and current connected database name to ensure you are operating in the intended environment.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Session Enhancements</h4>
                  <p data-i18n="s11_c2_desc">Enable `\timing` to measure exact query execution milliseconds, and `\x auto` for vertical expanded output on wide tables.</p>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 12: Interactive psql Terminal Simulation
export function Slide12({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 05: IMPORTANT PSQL COMMANDS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Interactive psql Terminal Simulation</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Click commands below to test authentic psql outputs</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">INTERACTIVE RUNNER</span>
            </div>

            <div className="terminal-sim-panel flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                <button className="btn-icon term-sim-btn active" data-cmd="\l">\l (List DBs)</button>
                <button className="btn-icon term-sim-btn" data-cmd="\c myapp">\c myapp (Connect)</button>
                <button className="btn-icon term-sim-btn" data-cmd="\dt">\dt (List Tables)</button>
                <button className="btn-icon term-sim-btn" data-cmd="\d users">\d users (Describe)</button>
                <button className="btn-icon term-sim-btn" data-cmd="SELECT version();">SELECT version();</button>
                <button className="btn-icon term-sim-btn" data-cmd="SELECT current_database();">SELECT current_database();</button>
              </div>

              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
                  <div className="terminal-dots flex items-center gap-1.5"><span className="terminal-dot red w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span><span className="terminal-dot yellow w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span><span className="terminal-dot green w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span></div>
                  <span>psql interactive terminal emulator</span>
                  <button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button>
                </div>
                <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
<span className="term-prompt text-blue-500 select-none mr-2 font-bold">postgres=#</span> <span className="sim-cmd-text font-bold text-white">\l</span>
<pre className="sim-output text-slate-300  mt-1">                                  List of databases
   Name    |  Owner   | Encoding | Collate |  Ctype  |   Access privileges   
-----------+----------+----------+---------+---------+-----------------------
 myapp     | postgres | UTF8     | C.UTF-8 | C.UTF-8 | 
 postgres  | postgres | UTF8     | C.UTF-8 | C.UTF-8 | 
 template0 | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +
           |          |          |         |         | postgres=CTc/postgres
 template1 | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +
           |          |          |         |         | postgres=CTc/postgres
(4 rows)</pre>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 13: Creating & Dropping Databases
export function Slide13({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 06: CREATE &amp; DROP DATABASE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Creating &amp; Dropping Databases</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Provisioning databases and critical production precautions</p>
              </div>
              <span className="tag-badge red text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">PRODUCTION SAFETY</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>SQL Commands</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
<span className="term-prompt text-blue-500 select-none mr-2 font-bold">postgres=#</span> <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">CREATE DATABASE myapp;</span>
<span className="term-out text-slate-300  text-xs">CREATE DATABASE</span>

<span className="term-prompt text-blue-500 select-none mr-2 font-bold">postgres=#</span> <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">\c myapp</span>
<span className="term-out text-slate-300  text-xs">You are now connected to database "myapp" as user "postgres".</span>

<span className="term-prompt text-blue-500 select-none mr-2 font-bold">myapp=#</span> <span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">DROP DATABASE myapp;</span>
<span className="term-out text-slate-300  text-xs">DROP DATABASE</span>
                </div>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="alert-callout danger flex items-start gap-2.5 p-3 border border-red-500/30 bg-red-500/10 text-red-300 text-[12.5px] leading-relaxed">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <strong>CRITICAL PRODUCTION WARNING:</strong><br />
                    NEVER run destructive database commands (such as <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">DROP DATABASE</code> or <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">DROP TABLE</code>) against production environments without verified backups and dual confirmation.
                  </div>
                </div>

                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Database Isolation</h4>
                  <p data-i18n="s13_c1_desc">Creating a new database establishes an isolated logical container with its own schemas, tables, and permissions.</p>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 14: DDL: Creating Tables with Constraints
export function Slide14({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 07: SQL FUNDAMENTALS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">DDL: Creating Tables with Constraints</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Defining solid table schemas with data integrity guarantees</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">DDL</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>SQL — CREATE TABLE users</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);`}</code></pre>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>PRIMARY KEY</h4>
                  <p>Guarantees unique identification for each row. Automatically creates an underlying B-tree index and enforces NOT NULL.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>NOT NULL &amp; UNIQUE</h4>
                  <p><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">NOT NULL</code> rejects records without a value. <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">UNIQUE</code> prevents duplicate entries (e.g. prevents duplicate customer email registrations).</p>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 15: DML: Inserting & Querying Records
export function Slide15({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 07: SQL FUNDAMENTALS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">DML: Inserting &amp; Querying Records</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Writing records and executing filtered SELECT queries</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">INSERT &amp; SELECT</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>INSERT Statements</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`-- Insert single row and return generated ID
INSERT INTO users (name, email)
VALUES ('Dara S.', 'dara@example.com')
RETURNING id, created_at;

-- Insert multiple rows in one query
INSERT INTO users (name, email)
VALUES 
    ('Lina K.', 'lina@example.com'),
    ('Bona T.', 'bona@example.com');`}</code></pre>
              </div>

              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>SELECT Statements</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`-- Select specific columns (avoid SELECT *)
SELECT id, name, email
FROM users
WHERE email = 'dara@example.com';

-- Ordered query with LIMIT
SELECT id, name
FROM users
ORDER BY id DESC
LIMIT 10;`}</code></pre>
              </div>
            </div>
    </div>
  );
}

// Slide 16: DML: Updating & Deleting Records
export function Slide16({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 07: SQL FUNDAMENTALS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">DML: Updating &amp; Deleting Records</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Modifying data safely and the critical danger of missing WHERE clauses</p>
              </div>
              <span className="tag-badge red text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">WHERE CLAUSE</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>UPDATE &amp; DELETE</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`-- Safe UPDATE with specific WHERE target
UPDATE users
SET name = 'Dara Sam'
WHERE id = 1;

-- Safe DELETE with target ID
DELETE FROM users
WHERE id = 1;`}</code></pre>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="alert-callout danger flex items-start gap-2.5 p-3 border border-red-500/30 bg-red-500/10 text-red-300 text-[12.5px] leading-relaxed">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <strong>CRITICAL MISTAKE:</strong> Omitting the <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">WHERE</code> clause on <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">UPDATE</code> or <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">DELETE</code> executes the operation across <strong>EVERY ROW IN THE ENTIRE TABLE</strong>!
                  </div>
                </div>

                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Soft Deletes Alternative</h4>
                  <p>In production applications, consider soft deletes: <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">UPDATE users SET is_deleted = TRUE, deleted_at = NOW() WHERE id = 1;</code> to preserve audit history and prevent accidental data loss.</p>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 17: Core PostgreSQL Data Types
export function Slide17({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 08: POSTGRESQL DATA TYPES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Core PostgreSQL Data Types</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Choosing the optimal type for storage efficiency and data precision</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">DATA TYPES</span>
            </div>

            <div className="slide-grid-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">NUMBERS</span>
                <h4>INTEGER / BIGINT</h4>
                <p>INTEGER is 4 bytes (-2B to +2B). BIGINT is 8 bytes. Always use BIGINT for high-traffic IDs or analytics counters.</p>
              </div>

              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">FINANCE</span>
                <h4>NUMERIC(p, s)</h4>
                <p>Exact decimal representation. Never use FLOAT or REAL for money or currency; always use NUMERIC(12, 2).</p>
              </div>

              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <span className="tag-badge orange text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">STRINGS</span>
                <h4>TEXT vs VARCHAR</h4>
                <p>In PostgreSQL, TEXT and VARCHAR have identical underlying performance. Prefer TEXT unless strict character limit enforcement is required.</p>
              </div>

              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">LOGIC</span>
                <h4>BOOLEAN &amp; DATE</h4>
                <p>BOOLEAN stores true/false/null. DATE stores calendar dates (YYYY-MM-DD) without times or timezones.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 18: Timestamps: TIMESTAMP vs TIMESTAMPTZ
export function Slide18({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 08: POSTGRESQL DATA TYPES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Timestamps: TIMESTAMP vs TIMESTAMPTZ</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Why you should almost always use TIMESTAMPTZ in modern web apps</p>
              </div>
              <span className="tag-badge red text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">TIMEZONE SAFETY</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4 className="text-red-400">TIMESTAMP (Without Time Zone)</h4>
                <p data-i18n="s18_c1_desc">Stores naive local time without any timezone offset. Leads to severe bugs when servers, databases, and users reside in different timezones.</p>
                <div className="terminal-window mt-2">
                  <div className="terminal-body text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed ">
TIMESTAMP '2026-10-19 14:00:00'
-- Ambiguous: Is this UTC? EST? ICT (Phnom Penh)?
                  </div>
                </div>
              </div>

              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors border-green-500/40 bg-green-500/10">
                <h4 className="text-green-400">TIMESTAMPTZ (With Time Zone)</h4>
                <p data-i18n="s18_c2_desc">Internally converts and stores the timestamp in UTC. When queried, PostgreSQL formats the output based on the client session timezone.</p>
                <div className="terminal-window mt-2">
                  <div className="terminal-body text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed ">
TIMESTAMPTZ '2026-10-19 14:00:00+07'
-- Stored internally as UTC: 2026-10-19 07:00:00 UTC
                  </div>
                </div>
              </div>
            </div>

            <div className="alert-callout success flex items-start gap-2.5 p-3 border border-green-500/30 bg-green-500/10 text-green-300 text-[12.5px] leading-relaxed">
              <Check className="w-4 h-4 shrink-0 mt-0.5" />
              <div><strong>Golden Production Rule:</strong> Always declare timestamp columns as <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">TIMESTAMPTZ DEFAULT NOW()</code>. Your database remains strictly normalized in UTC across all global deployments.</div>
            </div>
    </div>
  );
}

// Slide 19: JSONB: Semi-Structured Power
export function Slide19({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 08: POSTGRESQL DATA TYPES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">JSONB: Semi-Structured Power</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Storing, indexing, and querying JSON inside relational tables</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">JSONB</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>SQL — Querying JSONB</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`-- Create table with JSONB column
CREATE TABLE user_settings (
    user_id BIGINT PRIMARY KEY,
    metadata JSONB NOT NULL DEFAULT '{}'
);

-- Extract as JSON object (->) vs TEXT (->>)
SELECT 
    metadata->'theme' as theme_json,
    metadata->>'theme' as theme_text
FROM user_settings
WHERE metadata->>'newsletter' = 'true';`}</code></pre>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>JSON vs JSONB</h4>
                  <p data-i18n="s19_c1_desc">JSON stores raw text. JSONB parses JSON into a decomposed binary format that supports fast indexing, fast key lookups, and rich operators.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>GIN Indexing on JSONB</h4>
                  <p>You can build GIN (Generalized Inverted Index) on JSONB columns: <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">CREATE INDEX idx_meta ON user_settings USING GIN (metadata);</code> for blazing-fast document lookups.</p>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 20: Primary Keys: BIGSERIAL vs UUID
export function Slide20({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 09: PRIMARY KEYS &amp; UUID</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Primary Keys: BIGSERIAL vs UUID</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Comparing auto-incrementing sequential integers with distributed UUIDs</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">PRIMARY KEYS</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>BIGSERIAL (Auto-Increment Integer)</h4>
                <p data-i18n="s20_c1_desc">Fast, 8-byte compact storage, natural ordering. Downside: URLs expose sequential IDs (`/users/1`, `/users/2`), allowing ID enumeration attacks.</p>
                <div className="code-box mt-2">
                  <pre><code>{`id BIGSERIAL PRIMARY KEY`}</code></pre>
                </div>
              </div>

              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>UUID (Universally Unique Identifier)</h4>
                <p data-i18n="s20_c2_desc">128-bit globally unique identifier. Can be generated on the client or server without coordinating with the database. Impossible to guess.</p>
                <div className="code-box mt-2">
                  <pre><code>{`id UUID PRIMARY KEY DEFAULT gen_random_uuid()`}</code></pre>
                </div>
              </div>
            </div>

            <table className="table-spec w-full border-collapse text-xs border border-slate-800">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Criteria</th>
                  <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">BIGSERIAL</th>
                  <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">UUID</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Storage Size</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">8 bytes</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">16 bytes</td></tr>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">URL Enumeration Attack</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><span className="text-red-400">Vulnerable (/orders/42)</span></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><span className="text-green-400">Secure (impossible to guess)</span></td></tr>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Client-Side Generation</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">No (must ask database)</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Yes (generate before insert)</td></tr>
                <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Index Insert Performance</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">High (sequential append)</td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Moderate (random B-tree page splits)</td></tr>
              </tbody>
            </table>
    </div>
  );
}

// Slide 21: Generating UUIDs & Tradeoffs
export function Slide21({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 09: PRIMARY KEYS &amp; UUID</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Generating UUIDs &amp; Tradeoffs</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Using gen_random_uuid() and understanding B-Tree page fragmentation</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">gen_random_uuid()</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>SQL — Native UUID Generation</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`-- PostgreSQL 13+ built-in function
SELECT gen_random_uuid();
-- Output: c9a646d3-9c61-4cd7-bf53-73d8f7634f19

-- Creating table with UUID primary key
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);`}</code></pre>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>gen_random_uuid()</h4>
                  <p data-i18n="s21_c1_desc">PostgreSQL 13+ includes `gen_random_uuid()` natively without requiring the `pgcrypto` extension. Generates cryptographically secure UUIDv4.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>UUID Performance Tradeoff</h4>
                  <p data-i18n="s21_c2_desc">Random UUIDv4 values cause random index insertions, leading to B-Tree page splits and higher write amplification compared to sequential integers.</p>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 22: Database Relationships & Cardinality
export function Slide22({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 10: RELATIONSHIPS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Database Relationships &amp; Cardinality</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Modeling 1-to-1, 1-to-Many, and Many-to-Many associations</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">CARDINALITY</span>
            </div>

            <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>One-to-One (1:1)</h4>
                <p>One user has exactly one profile. Enforced with a UNIQUE foreign key.</p>
                <div className="terminal-window mt-2">
                  <div className="terminal-body text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed ">users (id) ← (user_id UNIQUE) profiles</div>
                </div>
              </div>

              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>One-to-Many (1:N)</h4>
                <p>One user authors many posts. Standard foreign key on the posts table.</p>
                <div className="terminal-window mt-2">
                  <div className="terminal-body text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed ">users (id) ← (user_id) posts</div>
                </div>
              </div>

              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Many-to-Many (N:M)</h4>
                <p>Posts have many tags; tags belong to many posts. Resolved via a junction table.</p>
                <div className="terminal-window mt-2">
                  <div className="terminal-body text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed ">posts (id) ← post_tags → tags (id)</div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 23: Foreign Keys & Referential Integrity
export function Slide23({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 10: RELATIONSHIPS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Foreign Keys &amp; Referential Integrity</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Enforcing relational constraints with ON DELETE rules</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">FOREIGN KEYS</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>SQL — Foreign Key Definition</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`CREATE TABLE posts (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    -- Cascading foreign key definition
    user_id BIGINT NOT NULL 
        REFERENCES users(id) 
        ON DELETE CASCADE
);`}</code></pre>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <table className="table-spec w-full border-collapse text-xs border border-slate-800">
                  <thead>
                    <tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Action</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Behavior on Parent Delete</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">CASCADE</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Automatically deletes all child rows when the parent is deleted</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">SET NULL</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Sets child foreign key to NULL (requires column to be nullable)</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">RESTRICT</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Prevents deleting parent while child rows exist (default safe behavior)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
    </div>
  );
}

// Slide 24: Visualizing SQL Joins
export function Slide24({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 11: SQL JOINS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Visualizing SQL Joins</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Combining data across multiple tables in a single query</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">JOINS</span>
            </div>

            <div className="slide-grid-4">
              <div className="info-card text-center">
                <h4 className="justify-center">INNER JOIN</h4>
                <div className="diagram-box my-2 py-3 text-xs">A ∩ B</div>
                <p className="text-xs">Returns only rows where matching values exist in both tables.</p>
              </div>

              <div className="info-card text-center">
                <h4 className="justify-center">LEFT JOIN</h4>
                <div className="diagram-box my-2 py-3 text-xs">A + (A ∩ B)</div>
                <p className="text-xs">Returns all rows from left table, plus matched records from right.</p>
              </div>

              <div className="info-card text-center">
                <h4 className="justify-center">RIGHT JOIN</h4>
                <div className="diagram-box my-2 py-3 text-xs">(A ∩ B) + B</div>
                <p className="text-xs">Returns all rows from right table, plus matched from left.</p>
              </div>

              <div className="info-card text-center">
                <h4 className="justify-center">FULL OUTER</h4>
                <div className="diagram-box my-2 py-3 text-xs">A ∪ B</div>
                <p className="text-xs">Returns all rows whenever a match exists in either table.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 25: Practical Multi-Table Queries
export function Slide25({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 11: SQL JOINS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Practical Multi-Table Queries</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Fetching users, their posts, and counting comments with GROUP BY</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">PRACTICAL SQL</span>
            </div>

            <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>SQL — Joining Users, Posts &amp; Comment Counts</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
              <pre><code>{`SELECT 
    users.id AS user_id,
    users.name AS author_name,
    posts.title AS post_title,
    COUNT(comments.id) AS comment_count
FROM users
INNER JOIN posts ON posts.user_id = users.id
LEFT JOIN comments ON comments.post_id = posts.id
GROUP BY users.id, users.name, posts.id, posts.title
ORDER BY comment_count DESC;`}</code></pre>
            </div>
    </div>
  );
}

// Slide 26: What is a Database Index?
export function Slide26({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 12: INDEXES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">What is a Database Index?</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Speeding up query reads with B-Tree data structures</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">INDEXING</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>SQL — Creating Indexes</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`-- Single column index
CREATE INDEX idx_users_email 
ON users(email);

-- Composite index (multi-column)
CREATE INDEX idx_tasks_project_status 
ON tasks(project_id, status);`}</code></pre>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>The B-Tree Index</h4>
                  <p data-i18n="s26_c1_desc">Without an index, finding a user by email requires scanning every single row in the table (Sequential Scan, O(N)). An index provides an O(log N) lookup path.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Indexes Are Not Free</h4>
                  <p data-i18n="s26_c2_desc">Indexes consume disk space and add write overhead. Every INSERT, UPDATE, and DELETE must also update the corresponding index trees.</p>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 27: EXPLAIN & EXPLAIN ANALYZE
export function Slide27({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 12: INDEXES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">EXPLAIN &amp; EXPLAIN ANALYZE</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Measuring query planning and identifying execution bottlenecks</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">QUERY PLAN</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>EXPLAIN ANALYZE Output</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
<span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'dara@test.com';</span>

<span className="term-out text-slate-300  text-xs">Index Scan using idx_users_email on users  (cost=0.29..8.30 rows=1 width=72) (actual time=0.038..0.040 rows=1 loops=1)
  Index Cond: (email = 'dara@test.com'::text)
Planning Time: 0.124 ms
Execution Time: 0.065 ms</span>
                </div>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Seq Scan vs Index Scan</h4>
                  <p data-i18n="s27_c2_desc">Look for 'Seq Scan' on large tables as an indicator that a missing index is forcing PostgreSQL to read all table pages from disk.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Cost &amp; Actual Milliseconds</h4>
                  <p>Cost shows PostgreSQL query planner estimates. Actual time shows real stopwatch milliseconds measured during real execution.</p>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 28: Transactions & ACID Guarantees
export function Slide28({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 13: TRANSACTIONS &amp; ACID</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Transactions &amp; ACID Guarantees</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">The four pillars of reliable, enterprise-grade data management</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">ACID</span>
            </div>

            <div className="slide-grid-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">A</span>
                <h4>Atomicity</h4>
                <p>All operations in a transaction succeed, or all fail together. Never half-written data.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">C</span>
                <h4>Consistency</h4>
                <p>Constraints (unique, foreign keys, types) are strictly enforced before committing.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <span className="tag-badge orange text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400  inline-flex items-center gap-1">I</span>
                <h4>Isolation</h4>
                <p>Concurrent transactions do not see intermediate, uncommitted modifications.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">D</span>
                <h4>Durability</h4>
                <p>Committed records are permanently written to Write-Ahead Logging (WAL) on disk.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 29: Transaction Workflow in Action
export function Slide29({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 13: TRANSACTIONS &amp; ACID</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Transaction Workflow in Action</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">BEGIN, COMMIT, and ROLLBACK in banking and payment processing</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">BANK TRANSFER</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>SQL — Bank Transfer Transaction</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`BEGIN;

-- 1. Deduct from Alice
UPDATE accounts 
SET balance = balance - 100 
WHERE id = 'alice-123';

-- 2. Add to Bob
UPDATE accounts 
SET balance = balance + 100 
WHERE id = 'bob-456';

-- Commit changes permanently
COMMIT;

-- Or abort on any failure:
-- ROLLBACK;`}</code></pre>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <div data-i18n="s29_desc">Transferring $100 between two bank accounts requires deducting from Account A and adding to Account B. If the server crashes midway, a transaction guarantees no money vanishes.</div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 30: Database Normalization (1NF to 3NF)
export function Slide30({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 14: DATABASE DESIGN</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Database Normalization (1NF to 3NF)</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Eliminating redundancy while keeping queries clean and maintainable</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">SCHEMA DESIGN</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors border-red-500/40 bg-red-500/5">
                <h4 className="text-red-400 flex items-center gap-1.5"><X className="w-4 h-4 shrink-0" /> BAD DATABASE (Denormalized)</h4>
                <div className="terminal-window mt-2">
                  <div className="terminal-body text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed ">
users
├─ id: 1
├─ name: "Dara"
└─ posts: "Post 1, Post 2, Post 3"  &lt;-- Comma list!
                  </div>
                </div>
                <p className="text-xs text-red-300 mt-2">Cannot index individual posts, cannot join on author, cannot maintain referential integrity.</p>
              </div>

              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors border-green-500/40 bg-green-500/10">
                <h4 className="text-green-400 flex items-center gap-1.5"><Check className="w-4 h-4 shrink-0" /> GOOD DATABASE (Normalized)</h4>
                <div className="terminal-window mt-2">
                  <div className="terminal-body text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed ">
users (id, name, email)
  ↓ (1:N via user_id)
posts (id, user_id, title)
  ↓ (1:N via post_id)
comments (id, post_id, comment)
                  </div>
                </div>
                <p className="text-xs text-green-300 mt-2">Clean, queryable, indexable, cascade-safe.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 31: Production Schema Conventions
export function Slide31({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 14: DATABASE DESIGN</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Production Schema Conventions</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Clean naming rules, audit fields, and column constraints</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">BEST PRACTICES</span>
            </div>

            <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Naming Rules</h4>
                <p>Use lowercase <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">snake_case</code>. Use plural table names (<code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">users</code>, <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">projects</code>) and singular foreign keys (<code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">user_id</code>).</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Audit Columns</h4>
                <p>Always add <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">created_at TIMESTAMPTZ DEFAULT NOW()</code> and <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">updated_at TIMESTAMPTZ DEFAULT NOW()</code>.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Explicit Constraints</h4>
                <p>Prefer <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">NOT NULL</code> whenever a value is required. Always add explicit foreign keys with ON DELETE policies.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 32: What are Database Migrations?
export function Slide32({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 15: MIGRATIONS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">What are Database Migrations?</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Version-controlling schema evolution across teams and environments</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">MIGRATIONS</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="diagram-box flex flex-col items-stretch">
                <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">0001_create_users_table.sql</div>
                <div className="diag-arrow text-center">↓</div>
                <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">0002_create_projects_table.sql</div>
                <div className="diag-arrow text-center">↓</div>
                <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">0003_add_avatar_to_users.sql</div>
                <div className="diag-arrow text-center">↓</div>
                <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">Production Database Schema (Synced)</div>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Why Migrations Matter</h4>
                  <p data-i18n="s32_c1_desc">Manually executing SQL schema commands in production leads to schema drift, forgotten changes, broken deployments, and untracked alterations.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Version Pipeline</h4>
                  <p data-i18n="s32_c2_desc">Migrations are ordered script files committed to Git. A tracking table records which migrations have run on each environment.</p>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 33: Writing Safe Production Migrations
export function Slide33({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 15: MIGRATIONS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Writing Safe Production Migrations</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Executing ALTER TABLE without locking tables or breaking production</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">ALTER TABLE</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>SQL — Adding Column Safely</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`-- Safe: Adding nullable column or column with DEFAULT
ALTER TABLE users 
ADD COLUMN avatar_url TEXT;

-- Safe: Adding column with default (PG 11+)
ALTER TABLE users 
ADD COLUMN role TEXT NOT NULL DEFAULT 'member';`}</code></pre>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Backwards Compatibility</h4>
                  <p data-i18n="s33_c1_desc">Never rename or delete a column while existing application versions are running. Deploy in phases: add column -&gt; deploy app -&gt; migrate data -&gt; remove old column.</p>
                </div>
                <div className="alert-callout warning flex items-start gap-2.5 p-3 border border-amber-500/30 bg-amber-500/10 text-amber-300 text-[12.5px] leading-relaxed">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>Never add a <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">NOT NULL</code> column without a <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">DEFAULT</code> on a table with existing rows, as PostgreSQL will reject the migration immediately.</div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 34: PostgreSQL Backups: pg_dump & Restore
export function Slide34({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 16: BACKUPS &amp; RESTORE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">PostgreSQL Backups: pg_dump &amp; Restore</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Creating logical SQL dumps and restoring them with psql</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">pg_dump</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>bash — dump &amp; restore</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
<span className="term-prompt text-blue-500 select-none mr-2 font-bold"># Backup database to SQL file</span>
<span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">pg_dump -U postgres -d myapp &gt; backup.sql</span>

<span className="term-prompt text-blue-500 select-none mr-2 font-bold"># Restore database from SQL file</span>
<span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">psql -U postgres -d myapp &lt; backup.sql</span>

<span className="term-prompt text-blue-500 select-none mr-2 font-bold"># Compressed custom format (.dump)</span>
<span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">pg_dump -U postgres -F c -d myapp &gt; myapp.dump</span>
<span className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">pg_restore -U postgres -d myapp myapp.dump</span>
                </div>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>pg_dump (Logical Backup)</h4>
                  <p data-i18n="s34_c1_desc">pg_dump extracts a consistent snapshot of the database schema and data into SQL statements or custom compressed binary format.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Restoring Data</h4>
                  <p data-i18n="s34_c2_desc">SQL text dumps are restored using standard `psql myapp &lt; backup.sql`. Custom directory or compressed dumps use `pg_restore`.</p>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 35: Disaster Recovery Best Practices
export function Slide35({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 16: BACKUPS &amp; RESTORE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Disaster Recovery Best Practices</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Why an untested backup cannot be trusted in production</p>
              </div>
              <span className="tag-badge red text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">DISASTER RECOVERY</span>
            </div>

            <div className="alert-callout warning flex items-start gap-2.5 p-3 border border-amber-500/30 bg-amber-500/10 text-amber-300 text-[12.5px] leading-relaxed">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <div><strong>Core Engineering Rule:</strong> A backup that has never been restored is not fully trusted. You do not have a backup plan until you have verified your restore procedure.</div>
            </div>

            <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Automated &amp; Scheduled</h4>
                <p data-i18n="s35_c1_desc">Schedule automated daily backups and store them in geographically separate object storage (e.g., S3/Cloud Storage) with retention policies.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Point-in-Time Recovery (PITR)</h4>
                <p>Modern cloud systems like Neon continuously stream WAL logs, allowing you to restore the database to any specific second in the past.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Restore Drills</h4>
                <p data-i18n="s35_c2_desc">Regularly spin up a staging database from your latest backup to verify recovery time and data integrity.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 36: PostgreSQL Roles & Permissions
export function Slide36({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 17: USERS &amp; PERMISSIONS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">PostgreSQL Roles &amp; Permissions</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Enforcing the principle of least privilege in production</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">SECURITY</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>SQL — Least Privilege User Creation</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`-- 1. Create dedicated application user
CREATE USER app_user WITH PASSWORD 'StrongSecretPassword123!';

-- 2. Grant connection rights
GRANT CONNECT ON DATABASE myapp TO app_user;

-- 3. Grant table DML permissions only
GRANT SELECT, INSERT, UPDATE, DELETE 
ON ALL TABLES IN SCHEMA public TO app_user;`}</code></pre>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="alert-callout danger flex items-start gap-2.5 p-3 border border-red-500/30 bg-red-500/10 text-red-300 text-[12.5px] leading-relaxed">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div><strong>Never Use Superuser in Applications:</strong> If your web app uses the <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">postgres</code> superuser, an attacker exploiting SQL injection can read all databases, drop tables, or even execute arbitrary server commands.</div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 37: Neon: Serverless PostgreSQL Platform
export function Slide37({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 18: WHAT IS NEON?</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Neon: Serverless PostgreSQL Platform</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Separating compute from storage for modern cloud development</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">NEON SERVERLESS</span>
            </div>

            <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>What is Neon?</h4>
                <p data-i18n="s37_c1_desc">Neon is a serverless, multi-tenant PostgreSQL platform that re-architects Postgres by splitting monolithic database compute from cloud storage.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>100% Postgres Compatible</h4>
                <p data-i18n="s37_c2_desc">Neon runs standard 100% open-source PostgreSQL. All your queries, types, extensions, and ORM tools work with zero code modifications.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Zero Maintenance</h4>
                <p>No operating system patches, no manual disk resizing, no replication configuration. Neon handles the underlying cloud infrastructure automatically.</p>
              </div>
            </div>

            <div className="diagram-box flex items-center justify-between gap-2 p-3 bg-slate-800/60 border border-slate-800">
              <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Next.js Web App</div>
              <div className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">→</div>
              <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">Neon Compute (Stateless Postgres)</div>
              <div className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">→</div>
              <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Neon Pageservers (Cloud Storage &amp; WAL)</div>
            </div>
    </div>
  );
}

// Slide 38: Traditional Postgres vs Neon Architecture
export function Slide38({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 18: WHAT IS NEON?</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Traditional Postgres vs Neon Architecture</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Monolithic local disk vs cloud storage pageservers &amp; distributed WAL</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">ARCHITECTURE COMPARISON</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Traditional PostgreSQL</h4>
                <p data-i18n="s38_c1_desc">Compute and disk are tightly coupled to a single virtual machine. Upgrades, scaling, and resizing require stopping the server or complex replication.</p>
                <div className="terminal-window mt-2">
                  <div className="terminal-body text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed ">
[ Application ]
      ↓
[ Single Server VM ]
  ├─ CPU / RAM (Compute)
  └─ Attached Hard Disk (Storage)
                  </div>
                </div>
              </div>

              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors border-blue-500/40 bg-blue-600/10">
                <h4 className="text-blue-400">Neon Cloud Architecture</h4>
                <p data-i18n="s38_c2_desc">Stateless Postgres compute nodes run on Kubernetes, while storage is handled by distributed Neon Pageservers and S3, enabling instant scaling and branching.</p>
                <div className="terminal-window mt-2">
                  <div className="terminal-body text-xs p-3 overflow-x-auto text-slate-200 leading-relaxed ">
[ Application ]
      ↓
[ Stateless Compute Node ] (Can sleep / autoscale)
      ↓
[ Neon Distributed Storage &amp; Pageservers ]
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 39: Neon Core Features
export function Slide39({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 18: WHAT IS NEON?</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Neon Core Features</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Scale-to-zero, autoscaling, and connection pooling</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">FEATURES</span>
            </div>

            <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Scale to Zero</h4>
                <p data-i18n="s39_c1_desc">When your app is inactive (e.g., development at night), compute shuts down completely, dropping your server costs to zero. Cold starts wake up in ~500ms.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Autoscaling Compute</h4>
                <p data-i18n="s39_c2_desc">Compute dynamically scales CPU and RAM allocation based on real-time traffic spikes without restarting or terminating connections.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Instant Branching</h4>
                <p>Create full database copies (schema + data) in seconds for feature testing, migrations, or pull request preview environments.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 40: Creating a Neon Project
export function Slide40({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 19: CREATE A NEON DATABASE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Creating a Neon Project</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">The step-by-step cloud provisioning workflow</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">CONSOLE WORKFLOW</span>
            </div>

            <div className="diagram-box justify-start gap-4">
              <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">1. Sign Up (neon.tech)</div>
              <div className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">→</div>
              <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">2. New Project</div>
              <div className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">→</div>
              <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">3. Select Region (e.g. AWS Singapore)</div>
              <div className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">→</div>
              <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">4. Choose Postgres Version</div>
              <div className="diag-arrow text-blue-400 font-bold text-center text-xs py-0.5">→</div>
              <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">5. Copy Connection String</div>
            </div>

            <div className="alert-callout tip mt-2 flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
              <Info className="w-4 h-4 shrink-0 mt-0.5" />
              <div>Neon generates the database credentials immediately upon project creation, ready to paste directly into your <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">.env.local</code> configuration file.</div>
            </div>
    </div>
  );
}

// Slide 41: Deconstructing the Connection String
export function Slide41({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 20: NEON CONNECTION STRING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Deconstructing the Connection String</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Understanding credentials, endpoint host, database, and SSL</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">DATABASE_URL</span>
            </div>

            <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>Neon Connection URI Structure</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
              <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
postgresql://alex:AbCdEf123456@ep-cool-fog-123456.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
             ↑    ↑            ↑                                              ↑      ↑
         [User] [Password]  [Endpoint Hostname]                            [DB Name] [SSL Required]
              </div>
            </div>

            <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Endpoint Host</h4>
                <p>Identifies your unique compute instance. For connection pooling, Neon provides a host with <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">-pooler</code> appended.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>sslmode=require</h4>
                <p>PostgreSQL over the public internet MUST enforce SSL encryption to prevent eavesdropping and credential theft.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Direct vs Pooled</h4>
                <p>Direct host for migrations (Prisma/Drizzle push); Pooled host (<code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">-pooler</code>) for serverless web app queries.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 42: Instant Database Branching
export function Slide42({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 21: NEON BRANCHING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Instant Database Branching</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Git-like copy-on-write branching for your database data and schema</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">BRANCHING</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>Neon Branch Topology</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
production (main)
   │
   ├── staging (integration tests)
   │
   ├── feat-auth (developer branch with real data)
   │
   └── test-e2e (automated CI testing)
                </div>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>What is Database Branching?</h4>
                  <p data-i18n="s42_c1_desc">Neon allows creating instant branches of your production database in under 2 seconds. Branches use copy-on-write storage, so they cost virtually nothing until modified.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Isolated Development</h4>
                  <p>Developers work against authentic production-scale data without any fear of corrupting the real production database.</p>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 43: Branching Development Lifecycle
export function Slide43({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 21: NEON BRANCHING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Branching Development Lifecycle</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Testing risky migrations against real data with zero production risk</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">WORKFLOW</span>
            </div>

            <div className="diagram-box flex flex-col items-stretch">
              <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">1. Production Database Running Live</div>
              <div className="diag-arrow text-center">↓</div>
              <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">2. Create Branch: feat-payment-schema (Takes ~1 second)</div>
              <div className="diag-arrow text-center">↓</div>
              <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">3. Run Risky Schema Migration on Branch</div>
              <div className="diag-arrow text-center">↓</div>
              <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">4. Execute Integration &amp; Performance Tests on Branch</div>
              <div className="diag-arrow text-center">↓</div>
              <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">5. Merge Code &amp; Apply Migration to Production with 100% Confidence</div>
            </div>
    </div>
  );
}

// Slide 44: Neon + GitHub Pull Request Workflow
export function Slide44({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 22: NEON + GITHUB WORKFLOW</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Neon + GitHub Pull Request Workflow</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Ephemeral database branches for every single pull request</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">CI/CD INTEGRATION</span>
            </div>

            <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>GitHub Actions + Neon CI/CD Pipeline</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
              <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
Developer opens GitHub PR #42
   ↓
GitHub Action calls Neon API: creates branch "pr-42"
   ↓
Vercel Preview Deployment deploys App using DATABASE_URL for "pr-42"
   ↓
Automated Cypress / Playwright tests run against real database branch
   ↓
PR #42 merged to main → GitHub Action deletes branch "pr-42"
   ↓
Production deployment updates live database safely
              </div>
            </div>
    </div>
  );
}

// Slide 45: Neon + Next.js App Router Architecture
export function Slide45({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 23: NEON + NEXT.JS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Neon + Next.js App Router Architecture</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Modern server-side data fetching without API boilerplate</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">NEXT.JS 15</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="diagram-box flex flex-col items-stretch">
                <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Browser Client Component (UI Interaction)</div>
                <div className="diag-arrow text-center">↓ Server Action call</div>
                <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">Next.js Server Component (page.tsx / actions.ts)</div>
                <div className="diag-arrow text-center">↓ SQL Query execution</div>
                <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">Neon Serverless PostgreSQL</div>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Server Components &amp; Actions</h4>
                  <p data-i18n="s45_c1_desc">In Next.js App Router, Server Components and Server Actions execute strictly on the server. They query Neon directly without exposing database queries to the browser.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Zero Client Bundle Overhead</h4>
                  <p data-i18n="s45_c2_desc">PostgreSQL drivers and ORMs stay on the server, ensuring your client JavaScript bundle size remains 0kB for database operations.</p>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 46: Server vs Client Security Boundary
export function Slide46({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 23: NEON + NEXT.JS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Server vs Client Security Boundary</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Protecting your DATABASE_URL from client-side bundle exposure</p>
              </div>
              <span className="tag-badge red text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">CRITICAL SECURITY</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="slide-stack flex flex-col gap-3">
                <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                  <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>.env.local — SAFE (Server Only)</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                  <pre><code>{`# SAFE: Only accessible in Server Components & Actions
DATABASE_URL="postgresql://user:pass@ep-xyz.neon.tech/neondb"`}</code></pre>
                </div>

                <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md border-red-500/50">
                  <div className="code-box-header text-red-400"><span>.env.local — DANGEROUS! NEVER DO THIS!</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                  <pre><code>{`# FATAL ERROR: Exposes full credentials to public browser!
NEXT_PUBLIC_DATABASE_URL="postgresql://..."`}</code></pre>
                </div>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="alert-callout danger flex items-start gap-2.5 p-3 border border-red-500/30 bg-red-500/10 text-red-300 text-[12.5px] leading-relaxed">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div><strong>Never prefix DATABASE_URL with NEXT_PUBLIC_:</strong> Any environment variable prefixed with <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">NEXT_PUBLIC_</code> is embedded directly into the public JavaScript bundle, allowing any visitor to read your database credentials!</div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 47: Database Access Ecosystem
export function Slide47({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 24: DATABASE CLIENTS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Database Access Ecosystem</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Comparing Raw SQL, Query Builders, and Modern ORMs</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">CLIENT TOOLS</span>
            </div>

            <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Raw SQL (postgres.js / pg)</h4>
                <p data-i18n="s47_c1_desc">Maximum performance and total SQL control. No abstraction overhead, but requires manual type synchronization.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Drizzle ORM</h4>
                <p data-i18n="s47_c2_desc">SQL-like TypeScript query builder and ORM. Zero-cost abstraction, lightweight, and blazingly fast in serverless environments.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Prisma ORM</h4>
                <p data-i18n="s47_c3_desc">High-level abstraction with its own schema definition language and powerful migrations. Heavier engine binary cold start.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 48: Drizzle ORM Schema with Neon
export function Slide48({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 25: DRIZZLE + NEON</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Drizzle ORM Schema with Neon</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Defining type-safe tables in pure TypeScript</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">DRIZZLE ORM</span>
            </div>

            <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>schema.ts (Drizzle Definition)</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
              <pre><code>{`import { pgTable, serial, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  authorId: uuid('author_id').references(() => users.id, { onDelete: 'cascade' }).notNull()
});`}</code></pre>
            </div>
    </div>
  );
}

// Slide 49: Querying with Drizzle & @neondatabase/serverless
export function Slide49({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 25: DRIZZLE + NEON</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Querying with Drizzle &amp; @neondatabase/serverless</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">High-performance queries over HTTP and WebSockets</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">SERVERLESS QUERY</span>
            </div>

            <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>db.ts &amp; page.tsx (Next.js Server Component)</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
              <pre><code>{`import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { users } from './schema';

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);

// Inside Next.js App Router page.tsx
export default async function UsersPage() {
  const allUsers = await db.select().from(users);
  return (
    <div>
      {allUsers.map(u => <p key={u.id}>{u.name} — {u.email}</p>)}
    </div>
  );
}`}</code></pre>
            </div>
    </div>
  );
}

// Slide 50: Prisma ORM Integration with Neon
export function Slide50({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 26: PRISMA + NEON</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Prisma ORM Integration with Neon</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Schema modeling and automated client generation</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">PRISMA</span>
            </div>

            <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>prisma/schema.prisma</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
              <pre><code>{`datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        String   @id @default(uuid())
  name      String
  email     String   @unique
  createdAt DateTime @default(now()) @map("created_at")
  posts     Post[]

  @@map("users")
}`}</code></pre>
            </div>
    </div>
  );
}

// Slide 51: ORM Tradeoff Comparison Matrix
export function Slide51({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 26: PRISMA + NEON</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">ORM Tradeoff Comparison Matrix</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Evaluating Raw SQL, Drizzle, and Prisma across real production metrics</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">COMPARISON MATRIX</span>
            </div>

            <table className="table-spec w-full border-collapse text-xs border border-slate-800">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Criteria</th>
                  <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Raw SQL (postgres.js)</th>
                  <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Drizzle ORM</th>
                  <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Prisma ORM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Serverless Cold Start</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200"><span className="text-green-400">Fastest (0ms overhead)</span></td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200"><span className="text-green-400">Ultra Fast (&lt;5ms)</span></td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Moderate (Rust engine binary)</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Type Safety</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Manual interfaces</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Automatic from TypeScript schema</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Automatic from schema.prisma</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Query API Style</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Standard SQL strings</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">SQL-like method chaining</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Object-relational method calls</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Recommended Use</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Maximum performance</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Modern Serverless Next.js</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Rapid enterprise prototyping</td>
                </tr>
              </tbody>
            </table>
    </div>
  );
}

// Slide 52: The Serverless Connection Problem
export function Slide52({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 27: CONNECTION POOLING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">The Serverless Connection Problem</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Why 500 lambda invocations can crash a traditional database</p>
              </div>
              <span className="tag-badge red text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">CONNECTION CRASH</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>Problem: Direct Serverless Connections</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
500 Serverless Functions (Vercel Lambdas)
   ↓ 500 separate open TCP connections!
PostgreSQL Server (max_connections = 100)
   ↓
FATAL: sorry, too many clients already!
500 Server Error (App Outage!)
                </div>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Stateless Function Concurrency</h4>
                  <p data-i18n="s52_c1_desc">Serverless functions spin up independently on demand. When traffic surges, 500 simultaneous instances open 500 separate PostgreSQL connections.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Postgres Connection Cost</h4>
                  <p data-i18n="s52_c2_desc">Each direct PostgreSQL connection forks a dedicated backend operating system process consuming ~10MB RAM. The server quickly runs out of memory and rejects connections.</p>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 53: Neon Connection Pooling (PgBouncer)
export function Slide53({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 27: CONNECTION POOLING</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Neon Connection Pooling (PgBouncer)</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Scaling to 10,000+ serverless connections seamlessly</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">PgBouncer POOLER</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>Solution: Neon Pooled Architecture</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
10,000 Serverless Requests
   ↓
Neon PgBouncer Connection Pooler (-pooler)
   ↓ Multiplexed into 10 persistent connections
Neon PostgreSQL Compute Engine
   ↓
100% Uptime • Zero Connection Exhaustion!
                </div>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>How to Use Neon Pooling</h4>
                  <p>Simply use the pooled connection string provided in your Neon console (it appends <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">-pooler</code> to your host endpoint name).</p>
                </div>
                <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
                  <Check className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>Always connect your Next.js application using the Neon pooled connection string in production.</div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 54: Secret Management & Environment Variables
export function Slide54({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 28: ENVIRONMENT VARIABLES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Secret Management &amp; Environment Variables</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Protecting database credentials across local dev and production hosting</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">SECRETS</span>
            </div>

            <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Local (.env.local)</h4>
                <p data-i18n="s54_c1_desc">Store your local or dev branch connection string in `.env.local`. Always confirm that `.env*.local` is listed inside `.gitignore`.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Production Secrets</h4>
                <p data-i18n="s54_c2_desc">Inject DATABASE_URL directly via your cloud hosting dashboard (e.g. Vercel Project Settings) without committing secrets to source control.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Branch-Specific URLs</h4>
                <p>Assign staging DATABASE_URL to your staging preview branch, keeping production data completely segregated.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 55: Preventing SQL Injection Attacks
export function Slide55({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 29: DATABASE SECURITY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Preventing SQL Injection Attacks</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">The critical difference between dangerous string concatenation and parameterized queries</p>
              </div>
              <span className="tag-badge red text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">SQL INJECTION</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md border-red-500/50">
                <div className="code-box-header text-red-400"><span>BAD: Vulnerable String Interpolation</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`// FATAL VULNERABILITY!
const query = \`SELECT * FROM users WHERE email = '\${userEmail}'\`;
// If user inputs: ' OR 1=1; DROP TABLE users; --
// Your entire database is destroyed!`}</code></pre>
              </div>

              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md border-green-500/50">
                <div className="code-box-header text-green-400"><span>GOOD: Parameterized Query ($1, $2)</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`// 100% SECURE: Engine treats input strictly as data
await sql\`SELECT * FROM users WHERE email = \${userEmail}\`;
// Or in psql / pg:
// SELECT * FROM users WHERE email = $1;`}</code></pre>
              </div>
            </div>
    </div>
  );
}

// Slide 56: Passwords, TLS/SSL & Access Control
export function Slide56({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 29: DATABASE SECURITY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Passwords, TLS/SSL &amp; Access Control</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Comprehensive security guidelines for production database deployments</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">ENCRYPTION &amp; AUTH</span>
            </div>

            <div className="slide-grid-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>Password Hashing</h4>
                <p data-i18n="s56_c1_desc">NEVER store plaintext passwords. Always hash using Argon2id or bcrypt with appropriate salt rounds before inserting into the database.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>TLS / SSL Encryption</h4>
                <p data-i18n="s56_c2_desc">Enforce `sslmode=require` to ensure all query traffic between your web application and Neon is encrypted with modern TLS.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4>IP Allowlisting</h4>
                <p>On production databases, restrict network access to known CIDR IP blocks or your cloud provider VPC peering tunnel.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 57: Database Performance Optimization Checklist
export function Slide57({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 30: PERFORMANCE OPTIMIZATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Database Performance Optimization Checklist</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Proven engineering practices for high-throughput, low-latency applications</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">CHECKLIST</span>
            </div>

            <div className="slide-grid-4">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">01</span>
                <h4>Index Foreign Keys</h4>
                <p>PostgreSQL does NOT automatically index foreign key columns. Always index them manually.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">02</span>
                <h4>Avoid SELECT *</h4>
                <p>Select only the specific columns needed by the view. Reduces RAM, serialization, and network I/O.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">03</span>
                <h4>Eliminate N+1 Queries</h4>
                <p>Fetch related records using SQL Joins or batch queries (e.g., <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">WHERE id IN (...)</code>) instead of looping queries.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">04</span>
                <h4>Enable Pooling</h4>
                <p>Use Neon PgBouncer pooled connection endpoints to prevent connection exhaustion in serverless runtimes.</p>
              </div>
            </div>
    </div>
  );
}

// Slide 58: Debugging Slow Queries with EXPLAIN ANALYZE
export function Slide58({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 30: PERFORMANCE OPTIMIZATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Debugging Slow Queries with EXPLAIN ANALYZE</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Step-by-step diagnostic workflow for slow database calls</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">DIAGNOSTICS</span>
            </div>

            <div className="diagram-box flex flex-col items-stretch">
              <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">1. Application logs alert: Query took 1,200ms</div>
              <div className="diag-arrow text-center">↓</div>
              <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">2. Run in psql: EXPLAIN (ANALYZE, BUFFERS) [Your Query];</div>
              <div className="diag-arrow text-center">↓</div>
              <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">3. Identify Bottleneck: Seq Scan on orders (Rows=2,000,000, Disk Reads=45,000)</div>
              <div className="diag-arrow text-center">↓</div>
              <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">4. Solution: CREATE INDEX idx_orders_customer ON orders(customer_id);</div>
              <div className="diag-arrow text-center">↓</div>
              <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">5. Re-run Query: Index Scan executes in 1.2ms (1000x speedup!)</div>
            </div>
    </div>
  );
}

// Slide 59: Pagination: The LIMIT / OFFSET Problem
export function Slide59({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 31: SEARCH &amp; PAGINATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Pagination: The LIMIT / OFFSET Problem</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Why OFFSET 100000 degrades severely on large production tables</p>
              </div>
              <span className="tag-badge red text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">OFFSET CLIFF</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>Slow OFFSET Query</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`-- Page 5000:
SELECT id, title, created_at
FROM tasks
ORDER BY id ASC
LIMIT 20 OFFSET 100000;`}</code></pre>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>The OFFSET Penalty</h4>
                  <p data-i18n="s59_c1_desc">`LIMIT 20 OFFSET 100000` requires PostgreSQL to read, sort, and discard 100,000 rows before returning the 20 requested records, creating high CPU and I/O load.</p>
                </div>
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>Data Drift</h4>
                  <p>If new rows are inserted while users paginate, rows shift across page boundaries, resulting in users seeing duplicate items.</p>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 60: Keyset (Cursor-Based) Pagination
export function Slide60({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 31: SEARCH &amp; PAGINATION</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Keyset (Cursor-Based) Pagination</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Consistent O(1) performance regardless of dataset depth</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">CURSOR O(1)</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>Keyset / Cursor Query</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`-- Next page starts immediately after last seen ID:
SELECT id, title, created_at
FROM tasks
WHERE id > 100020
ORDER BY id ASC
LIMIT 20;`}</code></pre>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                  <h4>How Keyset Pagination Works</h4>
                  <p data-i18n="s60_c1_desc">Query records where the primary key is greater than the last seen ID: `WHERE id &gt; $last_id ORDER BY id ASC LIMIT 20`. Jumps directly via B-tree index seek.</p>
                </div>
                <div className="alert-callout success flex items-start gap-2.5 p-3 border border-green-500/30 bg-green-500/10 text-green-300 text-[12.5px] leading-relaxed">
                  <Check className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>Execution time on 10,000,000 rows remains identical on Page 1 as on Page 100,000 (~0.1ms).</div>
                </div>
              </div>
            </div>
    </div>
  );
}

// Slide 61: Real Project: TaskFlow Architecture
export function Slide61({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 32: REAL PROJECT: TASKFLOW</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Real Project: TaskFlow Architecture</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Designing a production task management application database</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">TASKFLOW ERD</span>
            </div>

            <p data-i18n="s61_desc">TaskFlow manages teams, projects, tasks, and comments. Four interconnected relational tables establish clear ownership, assignment, and discussion threads.</p>

            <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>TaskFlow Entity Relationship Diagram</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
              <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
users (id, name, email, created_at)
  │
  ├── projects (id, title, owner_id → users.id)
  │      │
  │      └── tasks (id, project_id → projects.id, assigned_to → users.id, status)
  │             │
  │             └── comments (id, task_id → tasks.id, author_id → users.id, body)
  │
  └── comments (author_id → users.id)
              </div>
            </div>
    </div>
  );
}

// Slide 62: TaskFlow DDL: Tables & Custom Types
export function Slide62({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 33: BUILD TASKFLOW STEP-BY-STEP</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">TaskFlow DDL: Tables &amp; Custom Types</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Creating users, projects, and custom ENUM types</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">DDL PART 1</span>
            </div>

            <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>SQL — DDL: Users, ENUM &amp; Projects</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
              <pre><code>{`-- 1. Create custom ENUM for task status
CREATE TYPE task_status AS ENUM ('todo', 'in_progress', 'review', 'done');

-- 2. Create users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Create projects table
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    owner_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);`}</code></pre>
            </div>
    </div>
  );
}

// Slide 63: TaskFlow DDL: Tasks & Comments Schema
export function Slide63({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 33: BUILD TASKFLOW STEP-BY-STEP</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">TaskFlow DDL: Tasks &amp; Comments Schema</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Implementing cascading foreign keys and performance indexes</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">DDL PART 2</span>
            </div>

            <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>SQL — DDL: Tasks &amp; Comments with Indexes</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
              <pre><code>{`-- 4. Create tasks table
CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    assigned_to UUID REFERENCES users(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    status task_status NOT NULL DEFAULT 'todo',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. Create comments table
CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    task_id UUID NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
    author_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    body TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 6. Add performance indexes on foreign keys
CREATE INDEX idx_tasks_project ON tasks(project_id);
CREATE INDEX idx_tasks_assigned ON tasks(assigned_to);
CREATE INDEX idx_comments_task ON comments(task_id);`}</code></pre>
            </div>
    </div>
  );
}

// Slide 64: TaskFlow CRUD: Create & Read Operations
export function Slide64({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 34: TASKFLOW CRUD OPERATIONS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">TaskFlow CRUD: Create &amp; Read Operations</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Inserting tasks and querying project dashboards with joined data</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">CREATE &amp; READ</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>SQL — Creating a Task</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`INSERT INTO tasks (project_id, assigned_to, title, status)
VALUES (
    'a1b2c3d4-0000-0000-0000-000000000001',
    'b2c3d4e5-0000-0000-0000-000000000002',
    'Implement Neon connection pooling',
    'in_progress'
)
RETURNING id, title, status;`}</code></pre>
              </div>

              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>SQL — Reading Project Dashboard</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`SELECT 
    tasks.id,
    tasks.title,
    tasks.status,
    users.name AS assignee_name,
    COUNT(comments.id) AS comment_count
FROM tasks
LEFT JOIN users ON users.id = tasks.assigned_to
LEFT JOIN comments ON comments.task_id = tasks.id
WHERE tasks.project_id = $1
GROUP BY tasks.id, users.name;`}</code></pre>
              </div>
            </div>
    </div>
  );
}

// Slide 65: TaskFlow CRUD: Update & Delete Operations
export function Slide65({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 34: TASKFLOW CRUD OPERATIONS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">TaskFlow CRUD: Update &amp; Delete Operations</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Updating task statuses and managing cascading comment deletions</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">UPDATE &amp; DELETE</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>SQL — Updating Task Status</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`UPDATE tasks
SET 
    status = 'done',
    updated_at = NOW()
WHERE id = 'c3d4e5f6-0000-0000-0000-000000000003'
RETURNING id, status, updated_at;`}</code></pre>
              </div>

              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>SQL — Deleting Project (Cascade)</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`-- Deleting project automatically deletes
-- all linked tasks and comments via CASCADE!
DELETE FROM projects
WHERE id = 'a1b2c3d4-0000-0000-0000-000000000001';`}</code></pre>
              </div>
            </div>
    </div>
  );
}

// Slide 66: Complete Production Fullstack Architecture
export function Slide66({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 35: PRODUCTION ARCHITECTURE</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Complete Production Fullstack Architecture</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">How Next.js, Vercel, and Neon PostgreSQL connect in production</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">PRODUCTION ARCHITECTURE</span>
            </div>

            <div className="terminal-window bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
              <div className="terminal-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>End-to-End Production Pipeline</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
              <div className="terminal-body p-3 overflow-x-auto text-slate-200 leading-relaxed  text-xs">
                          GitHub Repository (Main Branch)
                                      │
                                      ↓ (Automated Deploy)
                            Vercel / Cloud Run
                       (Next.js 15 Fullstack Engine)
                                      │
                 ┌────────────────────┴────────────────────┐
                 ↓                                         ↓
     Server Components &amp; Actions               Static Assets &amp; HTML
                 │                                         │
                 ↓ (Pooled Connection / TLS)               │
          Neon PgBouncer (-pooler)                         │
                 │                                         │
                 ↓ (Stateless Autoscaling Compute)         │
          Neon PostgreSQL                                  │
                 │                                         │
                 └────────────────────┬────────────────────┘
                                      ↓
                         End Users Globally
              </div>
            </div>
    </div>
  );
}

// Slide 67: Local PostgreSQL vs Neon Comparison
export function Slide67({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 36: LOCAL VS NEON COMPARISON</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Local PostgreSQL vs Neon Comparison</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">A balanced comparison matrix across real development and production scenarios</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">TRADE-OFFS</span>
            </div>

            <table className="table-spec w-full border-collapse text-xs border border-slate-800">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Feature</th>
                  <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Local PostgreSQL (Docker / Apt)</th>
                  <th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Neon Database (Serverless Cloud)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Local Development</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200"><span className="text-green-400">Excellent (offline, zero latency)</span></td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200"><span className="text-green-400">Excellent (matches production data)</span></td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Internet Required</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200"><strong>No (works offline on plane/train)</strong></td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Yes (requires cloud connection)</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Serverless Autoscaling</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Manual setup</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200"><span className="text-green-400">Built-in (scales up &amp; down to zero)</span></td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Database Branching</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Manual Docker volume clones</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200"><span className="text-green-400">Instant 1-second copy-on-write branches</span></td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Backups &amp; PITR</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Manual cron jobs / pg_dump</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200"><span className="text-green-400">Automated continuous WAL streaming</span></td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Production Readiness</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200">Requires Linux sysadmin skills</td>
                  <td className="px-3 py-2 border-b border-slate-800 text-slate-200"><span className="text-green-400">Fully managed cloud platform</span></td>
                </tr>
              </tbody>
            </table>
    </div>
  );
}

// Slide 68: Top 12 Beginner & Production Mistakes
export function Slide68({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 37: 12 COMMON DATABASE MISTAKES</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Top 12 Beginner &amp; Production Mistakes</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Critical anti-patterns to avoid in professional database management</p>
              </div>
              <span className="tag-badge red text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400  inline-flex items-center gap-1">ANTI-PATTERNS</span>
            </div>

            <div className="slide-grid-3 text-xs">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><span className="text-red-400 font-bold">1. Using Superuser in App</span><p>Never connect your app as <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">postgres</code>. Use a dedicated restricted user.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><span className="text-red-400 font-bold">2. Exposing DATABASE_URL</span><p>Never prefix with <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">NEXT_PUBLIC_</code> in your Next.js environment variables.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><span className="text-red-400 font-bold">3. Forgetting Foreign Key Indexes</span><p>PostgreSQL does not auto-index FKs; always create them manually.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><span className="text-red-400 font-bold">4. Using TIMESTAMP without TZ</span><p>Always use <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">TIMESTAMPTZ</code> to avoid timezone calculation bugs.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><span className="text-red-400 font-bold">5. SELECT * Everywhere</span><p>Fetches unused columns, wasting memory, CPU, and network bandwidth.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><span className="text-red-400 font-bold">6. Raw String SQL Concatenation</span><p>Always use parameterized queries (<code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">$1, $2</code>) to prevent SQL injection.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><span className="text-red-400 font-bold">7. Direct Serverless Connections</span><p>Use Neon PgBouncer pooled connection strings to prevent exhaustion.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><span className="text-red-400 font-bold">8. Unchecked UPDATE / DELETE</span><p>Forgetting <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">WHERE</code> updates or deletes every row in the table.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><span className="text-red-400 font-bold">9. Untested Backups</span><p>A backup never restored is an illusion; drill your restore procedures.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><span className="text-red-400 font-bold">10. Manual Schema Edits in Prod</span><p>Always apply schema modifications via version-controlled migrations.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><span className="text-red-400 font-bold">11. Missing Unique Constraints</span><p>Relying solely on frontend validation results in duplicate data.</p></div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors"><span className="text-red-400 font-bold">12. High OFFSET Pagination</span><p>Use keyset / cursor pagination for fast O(1) performance at scale.</p></div>
            </div>
    </div>
  );
}

// Slide 69: Database Troubleshooting Runbook
export function Slide69({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 38: DEBUGGING DATABASE PROBLEMS</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">Database Troubleshooting Runbook</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">A systematic diagnostic workflow for resolving connection and query errors</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">DEBUGGING RUNBOOK</span>
            </div>

            <div className="diagram-box flex flex-col items-stretch text-xs">
              <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">1. Application Throws Database Connection Error</div>
              <div className="diag-arrow text-center">↓</div>
              <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">2. Test Health with pg_isready: <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">pg_isready -h localhost -p 5432</code></div>
              <div className="diag-arrow text-center">↓</div>
              <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">3. Verify DATABASE_URL syntax, port (5432), and credentials</div>
              <div className="diag-arrow text-center">↓</div>
              <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">4. Test CLI connection directly: <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">psql "$DATABASE_URL"</code></div>
              <div className="diag-arrow text-center">↓</div>
              <div className="diag-node p-2.5 bg-slate-800/80 border border-slate-800 text-center flex-1">5. Inspect PostgreSQL Logs: <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">sudo journalctl -u postgresql -n 50</code></div>
              <div className="diag-arrow text-center">↓</div>
              <div className="diag-node active p-2.5 bg-blue-900/40 border border-blue-500/50 text-center flex-1 text-blue-300">6. Verify User Privileges &amp; Search Path: <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">\du</code> and <code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">SHOW search_path;</code></div>
            </div>
    </div>
  );
}

// Slide 70: PostgreSQL Cheat Sheet: CLI & Schema DDL
export function Slide70({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 39: CHEAT SHEET</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">PostgreSQL Cheat Sheet: CLI &amp; Schema DDL</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Quick reference for essential psql commands and table definition syntax</p>
              </div>
              <span className="tag-badge blue text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-600/15 text-blue-400  inline-flex items-center gap-1">CHEAT SHEET 1</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <table className="table-spec w-full border-collapse text-xs border border-slate-800">
                <thead>
                  <tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">psql Command</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Description</th></tr>
                </thead>
                <tbody>
                  <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">\l</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">List databases</td></tr>
                  <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">\c dbname</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Connect to database</td></tr>
                  <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">\dt</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">List tables</td></tr>
                  <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">\d tablename</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Describe table</td></tr>
                  <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">\du</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">List users / roles</td></tr>
                  <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">\timing</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Toggle query timing</td></tr>
                  <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">\q</code></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Quit psql</td></tr>
                </tbody>
              </table>

              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>SQL DDL Syntax</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`CREATE DATABASE myapp;
DROP DATABASE myapp;

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_name ON users(name);
ALTER TABLE users ADD COLUMN bio TEXT;`}</code></pre>
              </div>
            </div>
    </div>
  );
}

// Slide 71: PostgreSQL & Neon Cheat Sheet: DML & Cloud
export function Slide71({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 39: CHEAT SHEET</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">PostgreSQL &amp; Neon Cheat Sheet: DML &amp; Cloud</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">Quick reference for SQL queries, joins, transactions, and Neon concepts</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">CHEAT SHEET 2</span>
            </div>

            <div className="slide-grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="code-box bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
                <div className="code-box-header flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800"><span>SQL Queries &amp; Transactions</span><button className="btn-copy text-[11px] px-2 py-0.5 cursor-pointer flex items-center gap-1 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">Copy</button></div>
                <pre><code>{`-- CRUD
INSERT INTO users (name, email) VALUES ('A', 'a@b.com') RETURNING id;
SELECT id, name FROM users WHERE id = $1;
UPDATE users SET name = 'B' WHERE id = $1;
DELETE FROM users WHERE id = $1;

-- Joins
SELECT u.name, p.title FROM users u JOIN posts p ON p.user_id = u.id;

-- Transactions
BEGIN;
UPDATE accounts SET balance = balance - 10 WHERE id = 1;
UPDATE accounts SET balance = balance + 10 WHERE id = 2;
COMMIT;`}</code></pre>
              </div>

              <div className="slide-stack flex flex-col gap-3">
                <table className="table-spec w-full border-collapse text-xs border border-slate-800">
                  <thead>
                    <tr><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Neon Concept</th><th className="px-3 py-2 text-left font-bold text-slate-300 bg-slate-800 border-b border-slate-700">Summary</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><strong>Compute</strong></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Stateless Postgres running on Kubernetes (scales to zero)</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><strong>Storage</strong></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Distributed Pageservers with continuous cloud WAL</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><strong>Branch</strong></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">Copy-on-write instant database snapshot</td></tr>
                    <tr><td className="px-3 py-2 border-b border-slate-800 text-slate-200"><strong>Pooler URL</strong></td><td className="px-3 py-2 border-b border-slate-800 text-slate-200">PgBouncer host endpoint (<code className=" text-xs text-blue-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5">-pooler</code>) for serverless apps</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
    </div>
  );
}

// Slide 72: PostgreSQL & Neon Mastery Complete!
export function Slide72({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
              <div className="slide-title-wrap flex flex-col gap-1">
                <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-blue-400">SECTION 40: COURSE SUMMARY &amp; MASTERY</span>
                <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">PostgreSQL &amp; Neon Mastery Complete!</h2>
                <p className="slide-subtitle text-[13px] text-slate-400 m-0">You now have the full architectural toolkit to build production-grade web applications</p>
              </div>
              <span className="tag-badge green text-[11px] font-bold px-2 py-0.5 border border-green-500/30 bg-green-500/10 text-green-400  inline-flex items-center gap-1">MODULE COMPLETE</span>
            </div>

            <div className="slide-grid-3 text-xs">
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4 className="text-green-400"><Check className="w-3.5 h-3.5 inline mr-1 shrink-0" /> Core Database Mastery</h4>
                <p>Relational modeling, primary keys, foreign keys, constraints, and data integrity.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4 className="text-green-400"><Check className="w-3.5 h-3.5 inline mr-1 shrink-0" /> SQL &amp; Query Optimization</h4>
                <p>Joins, B-Tree indexes, EXPLAIN ANALYZE performance tuning, and cursor pagination.</p>
              </div>
              <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2 hover:border-slate-700 transition-colors">
                <h4 className="text-green-400"><Check className="w-3.5 h-3.5 inline mr-1 shrink-0" /> Neon Serverless Architecture</h4>
                <p>Scale-to-zero, copy-on-write branching, connection pooling, and Next.js fullstack integration.</p>
              </div>
            </div>

            <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12.5px] leading-relaxed">
              <Check className="w-4 h-4 shrink-0 mt-0.5" />
              <div>You can now go from <em>"I don't know PostgreSQL"</em> to <em>"I can create, manage, query, secure, backup, optimize, and connect PostgreSQL to a real Next.js application using Neon."</em></div>
            </div>

            <div className="text-center mt-2">
              <a href="../index.html" className="btn-nav inline-flex px-5 h-9.5">
                <span data-i18n="s72_btn_hub">Return to Curriculum Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
    </div>
  );
}

export const POSTGRES_META = {
  id: "postgres",
  title: "PostgreSQL & Neon Database",
  module: "MODULE 06",
  accent: "blue",
};

export const POSTGRES_SLIDES = [
  {
    id: 1,
    title: "PostgreSQL & Neon Database",
    part: "SECTION 01: INTRODUCTION",
    Component: Slide1,
  },
  {
    id: 2,
    title: "What is a Database?",
    part: "SECTION 01: INTRODUCTION",
    Component: Slide2,
  },
  {
    id: 3,
    title: "SQL vs NoSQL: Why PostgreSQL?",
    part: "SECTION 01: INTRODUCTION",
    Component: Slide3,
  },
  {
    id: 4,
    title: "Database Mental Model & Hierarchy",
    part: "SECTION 02: DATABASE FUNDAMENTALS",
    Component: Slide4,
  },
  {
    id: 5,
    title: "Relational Architecture in Action",
    part: "SECTION 02: DATABASE FUNDAMENTALS",
    Component: Slide5,
  },
  {
    id: 6,
    title: "Installing PostgreSQL Locally",
    part: "SECTION 03: LOCAL INSTALLATION",
    Component: Slide6,
  },
  {
    id: 7,
    title: "PostgreSQL Service Management",
    part: "SECTION 03: LOCAL INSTALLATION",
    Component: Slide7,
  },
  {
    id: 8,
    title: "The psql Interactive Terminal",
    part: "SECTION 04: PSQL CLI",
    Component: Slide8,
  },
  {
    id: 9,
    title: "psql Connection Parameters",
    part: "SECTION 04: PSQL CLI",
    Component: Slide9,
  },
  {
    id: 10,
    title: "Essential psql Meta-Commands",
    part: "SECTION 05: IMPORTANT PSQL COMMANDS",
    Component: Slide10,
  },
  {
    id: 11,
    title: "System & Environment Inspection",
    part: "SECTION 05: IMPORTANT PSQL COMMANDS",
    Component: Slide11,
  },
  {
    id: 12,
    title: "Interactive psql Terminal Simulation",
    part: "SECTION 05: IMPORTANT PSQL COMMANDS",
    Component: Slide12,
  },
  {
    id: 13,
    title: "Creating & Dropping Databases",
    part: "SECTION 06: CREATE &amp; DROP DATABASE",
    Component: Slide13,
  },
  {
    id: 14,
    title: "DDL: Creating Tables with Constraints",
    part: "SECTION 07: SQL FUNDAMENTALS",
    Component: Slide14,
  },
  {
    id: 15,
    title: "DML: Inserting & Querying Records",
    part: "SECTION 07: SQL FUNDAMENTALS",
    Component: Slide15,
  },
  {
    id: 16,
    title: "DML: Updating & Deleting Records",
    part: "SECTION 07: SQL FUNDAMENTALS",
    Component: Slide16,
  },
  {
    id: 17,
    title: "Core PostgreSQL Data Types",
    part: "SECTION 08: POSTGRESQL DATA TYPES",
    Component: Slide17,
  },
  {
    id: 18,
    title: "Timestamps: TIMESTAMP vs TIMESTAMPTZ",
    part: "SECTION 08: POSTGRESQL DATA TYPES",
    Component: Slide18,
  },
  {
    id: 19,
    title: "JSONB: Semi-Structured Power",
    part: "SECTION 08: POSTGRESQL DATA TYPES",
    Component: Slide19,
  },
  {
    id: 20,
    title: "Primary Keys: BIGSERIAL vs UUID",
    part: "SECTION 09: PRIMARY KEYS &amp; UUID",
    Component: Slide20,
  },
  {
    id: 21,
    title: "Generating UUIDs & Tradeoffs",
    part: "SECTION 09: PRIMARY KEYS &amp; UUID",
    Component: Slide21,
  },
  {
    id: 22,
    title: "Database Relationships & Cardinality",
    part: "SECTION 10: RELATIONSHIPS",
    Component: Slide22,
  },
  {
    id: 23,
    title: "Foreign Keys & Referential Integrity",
    part: "SECTION 10: RELATIONSHIPS",
    Component: Slide23,
  },
  {
    id: 24,
    title: "Visualizing SQL Joins",
    part: "SECTION 11: SQL JOINS",
    Component: Slide24,
  },
  {
    id: 25,
    title: "Practical Multi-Table Queries",
    part: "SECTION 11: SQL JOINS",
    Component: Slide25,
  },
  {
    id: 26,
    title: "What is a Database Index?",
    part: "SECTION 12: INDEXES",
    Component: Slide26,
  },
  {
    id: 27,
    title: "EXPLAIN & EXPLAIN ANALYZE",
    part: "SECTION 12: INDEXES",
    Component: Slide27,
  },
  {
    id: 28,
    title: "Transactions & ACID Guarantees",
    part: "SECTION 13: TRANSACTIONS &amp; ACID",
    Component: Slide28,
  },
  {
    id: 29,
    title: "Transaction Workflow in Action",
    part: "SECTION 13: TRANSACTIONS &amp; ACID",
    Component: Slide29,
  },
  {
    id: 30,
    title: "Database Normalization (1NF to 3NF)",
    part: "SECTION 14: DATABASE DESIGN",
    Component: Slide30,
  },
  {
    id: 31,
    title: "Production Schema Conventions",
    part: "SECTION 14: DATABASE DESIGN",
    Component: Slide31,
  },
  {
    id: 32,
    title: "What are Database Migrations?",
    part: "SECTION 15: MIGRATIONS",
    Component: Slide32,
  },
  {
    id: 33,
    title: "Writing Safe Production Migrations",
    part: "SECTION 15: MIGRATIONS",
    Component: Slide33,
  },
  {
    id: 34,
    title: "PostgreSQL Backups: pg_dump & Restore",
    part: "SECTION 16: BACKUPS &amp; RESTORE",
    Component: Slide34,
  },
  {
    id: 35,
    title: "Disaster Recovery Best Practices",
    part: "SECTION 16: BACKUPS &amp; RESTORE",
    Component: Slide35,
  },
  {
    id: 36,
    title: "PostgreSQL Roles & Permissions",
    part: "SECTION 17: USERS &amp; PERMISSIONS",
    Component: Slide36,
  },
  {
    id: 37,
    title: "Neon: Serverless PostgreSQL Platform",
    part: "SECTION 18: WHAT IS NEON?",
    Component: Slide37,
  },
  {
    id: 38,
    title: "Traditional Postgres vs Neon Architecture",
    part: "SECTION 18: WHAT IS NEON?",
    Component: Slide38,
  },
  {
    id: 39,
    title: "Neon Core Features",
    part: "SECTION 18: WHAT IS NEON?",
    Component: Slide39,
  },
  {
    id: 40,
    title: "Creating a Neon Project",
    part: "SECTION 19: CREATE A NEON DATABASE",
    Component: Slide40,
  },
  {
    id: 41,
    title: "Deconstructing the Connection String",
    part: "SECTION 20: NEON CONNECTION STRING",
    Component: Slide41,
  },
  {
    id: 42,
    title: "Instant Database Branching",
    part: "SECTION 21: NEON BRANCHING",
    Component: Slide42,
  },
  {
    id: 43,
    title: "Branching Development Lifecycle",
    part: "SECTION 21: NEON BRANCHING",
    Component: Slide43,
  },
  {
    id: 44,
    title: "Neon + GitHub Pull Request Workflow",
    part: "SECTION 22: NEON + GITHUB WORKFLOW",
    Component: Slide44,
  },
  {
    id: 45,
    title: "Neon + Next.js App Router Architecture",
    part: "SECTION 23: NEON + NEXT.JS",
    Component: Slide45,
  },
  {
    id: 46,
    title: "Server vs Client Security Boundary",
    part: "SECTION 23: NEON + NEXT.JS",
    Component: Slide46,
  },
  {
    id: 47,
    title: "Database Access Ecosystem",
    part: "SECTION 24: DATABASE CLIENTS",
    Component: Slide47,
  },
  {
    id: 48,
    title: "Drizzle ORM Schema with Neon",
    part: "SECTION 25: DRIZZLE + NEON",
    Component: Slide48,
  },
  {
    id: 49,
    title: "Querying with Drizzle & @neondatabase/serverless",
    part: "SECTION 25: DRIZZLE + NEON",
    Component: Slide49,
  },
  {
    id: 50,
    title: "Prisma ORM Integration with Neon",
    part: "SECTION 26: PRISMA + NEON",
    Component: Slide50,
  },
  {
    id: 51,
    title: "ORM Tradeoff Comparison Matrix",
    part: "SECTION 26: PRISMA + NEON",
    Component: Slide51,
  },
  {
    id: 52,
    title: "The Serverless Connection Problem",
    part: "SECTION 27: CONNECTION POOLING",
    Component: Slide52,
  },
  {
    id: 53,
    title: "Neon Connection Pooling (PgBouncer)",
    part: "SECTION 27: CONNECTION POOLING",
    Component: Slide53,
  },
  {
    id: 54,
    title: "Secret Management & Environment Variables",
    part: "SECTION 28: ENVIRONMENT VARIABLES",
    Component: Slide54,
  },
  {
    id: 55,
    title: "Preventing SQL Injection Attacks",
    part: "SECTION 29: DATABASE SECURITY",
    Component: Slide55,
  },
  {
    id: 56,
    title: "Passwords, TLS/SSL & Access Control",
    part: "SECTION 29: DATABASE SECURITY",
    Component: Slide56,
  },
  {
    id: 57,
    title: "Database Performance Optimization Checklist",
    part: "SECTION 30: PERFORMANCE OPTIMIZATION",
    Component: Slide57,
  },
  {
    id: 58,
    title: "Debugging Slow Queries with EXPLAIN ANALYZE",
    part: "SECTION 30: PERFORMANCE OPTIMIZATION",
    Component: Slide58,
  },
  {
    id: 59,
    title: "Pagination: The LIMIT / OFFSET Problem",
    part: "SECTION 31: SEARCH &amp; PAGINATION",
    Component: Slide59,
  },
  {
    id: 60,
    title: "Keyset (Cursor-Based) Pagination",
    part: "SECTION 31: SEARCH &amp; PAGINATION",
    Component: Slide60,
  },
  {
    id: 61,
    title: "Real Project: TaskFlow Architecture",
    part: "SECTION 32: REAL PROJECT: TASKFLOW",
    Component: Slide61,
  },
  {
    id: 62,
    title: "TaskFlow DDL: Tables & Custom Types",
    part: "SECTION 33: BUILD TASKFLOW STEP-BY-STEP",
    Component: Slide62,
  },
  {
    id: 63,
    title: "TaskFlow DDL: Tasks & Comments Schema",
    part: "SECTION 33: BUILD TASKFLOW STEP-BY-STEP",
    Component: Slide63,
  },
  {
    id: 64,
    title: "TaskFlow CRUD: Create & Read Operations",
    part: "SECTION 34: TASKFLOW CRUD OPERATIONS",
    Component: Slide64,
  },
  {
    id: 65,
    title: "TaskFlow CRUD: Update & Delete Operations",
    part: "SECTION 34: TASKFLOW CRUD OPERATIONS",
    Component: Slide65,
  },
  {
    id: 66,
    title: "Complete Production Fullstack Architecture",
    part: "SECTION 35: PRODUCTION ARCHITECTURE",
    Component: Slide66,
  },
  {
    id: 67,
    title: "Local PostgreSQL vs Neon Comparison",
    part: "SECTION 36: LOCAL VS NEON COMPARISON",
    Component: Slide67,
  },
  {
    id: 68,
    title: "Top 12 Beginner & Production Mistakes",
    part: "SECTION 37: 12 COMMON DATABASE MISTAKES",
    Component: Slide68,
  },
  {
    id: 69,
    title: "Database Troubleshooting Runbook",
    part: "SECTION 38: DEBUGGING DATABASE PROBLEMS",
    Component: Slide69,
  },
  {
    id: 70,
    title: "PostgreSQL Cheat Sheet: CLI & Schema DDL",
    part: "SECTION 39: CHEAT SHEET",
    Component: Slide70,
  },
  {
    id: 71,
    title: "PostgreSQL & Neon Cheat Sheet: DML & Cloud",
    part: "SECTION 39: CHEAT SHEET",
    Component: Slide71,
  },
  {
    id: 72,
    title: "PostgreSQL & Neon Mastery Complete!",
    part: "SECTION 40: COURSE SUMMARY &amp; MASTERY",
    Component: Slide72,
  },
];
