import React from "react";
import { ArrowRight, AlertCircle } from "lucide-react";

// Slide 1: MODULE 02 • CLOUD COLLABORATION: GitHub Masterclass
export function Slide1({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="title-hero-grid grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-4 items-stretch flex-1 min-h-0">
        <div className="title-text-col flex flex-col justify-between gap-3">
          <div className="inline-flex items-center gap-2 self-start px-2.5 py-1 bg-purple-500/15 border border-purple-500/30 text-purple-400  text-[11px] font-bold tracking-wider uppercase">
            MODULE 02 • CLOUD COLLABORATION
          </div>
          <h1 className="title-main-h1 text-3xl md:text-4xl font-extrabold text-white m-0 leading-tight">
            GitHub Masterclass
            <br />
            <span className="text-purple-400 font-extrabold">
              Cloud Repositories &amp; Team Workflow
            </span>
          </h1>
          <p className="text-sm text-slate-300 italic m-0">
            “Host, collaborate, review, and ship code with developers anywhere
            in the world”
          </p>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-800/80 border border-slate-800 p-2.5 flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 mt-1 shrink-0"></span>
              <div>
                <strong className="text-white block">
                  Remote Repositories
                </strong>
                <span className="text-slate-400">
                  origin, HTTPS &amp; SSH authentication
                </span>
              </div>
            </div>
            <div className="bg-slate-800/80 border border-slate-800 p-2.5 flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 mt-1 shrink-0"></span>
              <div>
                <strong className="text-white block">Syncing Code</strong>
                <span className="text-slate-400">
                  push, pull, tracking branches
                </span>
              </div>
            </div>
            <div className="bg-slate-800/80 border border-slate-800 p-2.5 flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1 shrink-0"></span>
              <div>
                <strong className="text-white block">
                  Pull Requests &amp; Review
                </strong>
                <span className="text-slate-400">
                  Diffs, approvals, 3 merge strategies
                </span>
              </div>
            </div>
            <div className="bg-slate-800/80 border border-slate-800 p-2.5 flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 mt-1 shrink-0"></span>
              <div>
                <strong className="text-white block">
                  Production Governance
                </strong>
                <span className="text-slate-400">
                  Branch protection, Issues, CI/CD Actions
                </span>
              </div>
            </div>
          </div>

          <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12px] leading-relaxed">
            <div>
              Step-by-step masterclass packed with real GitHub screenshots,
              terminal commands, conflict resolution, and enterprise team
              practices.
            </div>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <button
              className="btn-cta-primary inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 border border-purple-600 text-white text-xs font-bold cursor-pointer transition-colors no-underline rounded"
              id="btn-start-course"
              onClick={onStart}
            >
              Start Lesson <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-xs text-slate-400">
              or press{" "}
              <kbd className="kbd px-1.5 py-0.5 bg-slate-800 border border-slate-700 text-slate-200 text-[11px] ">
                Space
              </kbd>{" "}
              /{" "}
              <kbd className="kbd px-1 py-0.5 bg-slate-800 border border-slate-700 text-slate-200 text-[11px] ">
                →
              </kbd>
            </span>
          </div>
        </div>

        <div className="title-visual-col flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/git_flow_hero.jpg"
                alt="Git and GitHub Synchronization Engine"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>{" "}
                Cloud Sync &amp; CI/CD Architecture
              </span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
                GitHub Enterprise
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 2: Git (Local Machine) vs. GitHub (Cloud Platform)
export function Slide2({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 01 • ARCHITECTURE
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            Git (Local Machine) vs. GitHub (Cloud Platform)
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Distinguishing between your offline CLI engine and the world's
            largest developer platform
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
            Local vs. Cloud
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold  bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  01
                </span>
                <h4 className="text-white text-sm font-bold m-0">
                  Git (The Engine)
                </h4>
              </div>
              <ul className="text-xs text-slate-300 flex flex-col gap-1.5 p-0 m-0 list-none">
                <li className="flex items-start gap-1.5">
                  <span className="text-green-400 font-bold">✓</span> Installed
                  on your local operating system
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-green-400 font-bold">✓</span> 100%
                  offline, requires zero internet access
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-green-400 font-bold">✓</span> Manages
                  commit history inside{" "}
                  <code className="text-orange-400 bg-slate-900 px-1 ">
                    .git/
                  </code>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-slate-400">•</span> Cannot share code
                  with others on its own
                </li>
              </ul>
            </div>

            <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold  bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  02
                </span>
                <h4 className="text-white text-sm font-bold m-0">
                  GitHub (The Cloud)
                </h4>
              </div>
              <ul className="text-xs text-slate-300 flex flex-col gap-1.5 p-0 m-0 list-none">
                <li className="flex items-start gap-1.5">
                  <span className="text-green-400 font-bold">✓</span> Cloud
                  hosting platform for Git repositories
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-green-400 font-bold">✓</span> Team Pull
                  Requests &amp; Code Review
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-green-400 font-bold">✓</span> Automated
                  CI/CD via GitHub Actions
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-green-400 font-bold">✓</span> Issue
                  tracking, Kanban boards &amp; security scans
                </li>
              </ul>
            </div>
          </div>

          <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12px] leading-relaxed">
            <div>
              <strong>Core Mental Model:</strong> Git is like your personal
              camera taking snapshots of code. GitHub is the cloud photo album
              where your entire team shares, reviews, and collaborates on those
              photos.
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/git/github_collaboration_workflow.jpg"
                alt="GitHub Team Collaboration Workflow"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>Local Repositories Synced to Central GitHub Hub</span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
                Team Model
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 3: The 4 Git Areas: Adding the Cloud Remote
export function Slide3({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 01 • ARCHITECTURE
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            The 4 Git Areas: Adding the Cloud Remote
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            How code moves across the 3 local stages and reaches your GitHub
            remote
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/10 text-blue-400 ">
            4 Areas Model
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
            <h4 className="text-white text-sm font-bold m-0 flex items-center gap-2">
              <span className="text-purple-400">#</span> Pipeline from Editor to
              Cloud
            </h4>
            <div className="flex flex-col gap-2 text-xs">
              <div className="p-2 bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <strong className="text-slate-200">
                    1. Working Directory
                  </strong>{" "}
                  <span className="text-slate-400 block text-[11px]">
                    Uncommitted raw files on your computer disk
                  </span>
                </div>
                <code className="text-blue-400  text-[11px]">git add</code>
              </div>
              <div className="p-2 bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <strong className="text-slate-200">
                    2. Staging Area (Index)
                  </strong>{" "}
                  <span className="text-slate-400 block text-[11px]">
                    Curation zone of changes ready for the snapshot
                  </span>
                </div>
                <code className="text-blue-400  text-[11px]">git commit</code>
              </div>
              <div className="p-2 bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <strong className="text-slate-200">
                    3. Local Repository (.git)
                  </strong>{" "}
                  <span className="text-slate-400 block text-[11px]">
                    Permanent commit graph stored locally on machine
                  </span>
                </div>
                <code className="text-purple-400  text-[11px]">git push</code>
              </div>
              <div className="p-2 bg-purple-900/40 border border-purple-500/30 flex items-center justify-between">
                <div>
                  <strong className="text-purple-300">
                    4. Remote (GitHub)
                  </strong>{" "}
                  <span className="text-purple-400/80 block text-[11px]">
                    Central cloud server where teammates sync &amp; review
                  </span>
                </div>
                <span className="text-emerald-400  text-[11px]">
                  Cloud Hosted
                </span>
              </div>
            </div>
          </div>

          <div className="alert-callout info flex items-start gap-2.5 p-3 border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[12px] leading-relaxed">
            <div>
              <code className="text-blue-300 ">git push</code> transfers commits
              from Area 3 to Area 4.{" "}
              <code className="text-blue-300 ">git pull</code> fetches commits
              from Area 4 directly down to your working tree.
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/git/git_four_areas.jpg"
                alt="The 4 Core Git Areas"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>Visual Transition Map: Working Tree to Remote</span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
                Architecture
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 4: GitHub Authentication: SSH Keys vs. HTTPS & PAT
export function Slide4({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 02 • SETUP &amp; AUTH
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            GitHub Authentication: SSH Keys vs. HTTPS &amp; PAT
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Setting up passwordless, cryptographic authentication for your
            developer machine
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
            Ed25519 Security
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="terminal-mockup bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
            <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                <span className="text-[11px] text-slate-400 ml-1">
                  Generate Modern SSH Key
                </span>
              </div>
              <button
                className="copy-btn text-[11px] px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer"
                data-copy='ssh-keygen -t ed25519 -C "your_email@example.com"&#10;cat ~/.ssh/id_ed25519.pub&#10;ssh -T git@github.com'
              >
                Copy
              </button>
            </div>
            <div className="p-3 text-slate-200 leading-relaxed  text-xs flex flex-col gap-1.5">
              <div>
                <span className="text-blue-500 select-none mr-2">$</span>
                <span className="text-white font-bold">
                  ssh-keygen -t ed25519 -C "your_email@example.com"
                </span>
              </div>
              <div className="text-slate-400 text-[11px]">
                Generating public/private ed25519 key pair...
              </div>
              <div>
                <span className="text-blue-500 select-none mr-2">$</span>
                <span className="text-white font-bold">
                  cat ~/.ssh/id_ed25519.pub
                </span>
              </div>
              <div className="text-purple-300 text-[11px] break-all bg-slate-900 p-1.5 border border-slate-800">
                ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIG... user@mac
              </div>
              <div>
                <span className="text-blue-500 select-none mr-2">$</span>
                <span className="text-white font-bold">
                  ssh -T git@github.com
                </span>
              </div>
              <div className="text-emerald-400 text-[11px]">
                Hi username! You've successfully authenticated.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-800/80 border border-slate-800 p-2.5 flex flex-col gap-1">
              <span className="text-purple-400 font-bold  text-[11px]">
                SSH (Recommended)
              </span>
              <span className="text-slate-300">
                Set once, never re-enter passwords. Used by software engineers
                for CLI push/pull.
              </span>
            </div>
            <div className="bg-slate-800/80 border border-slate-800 p-2.5 flex flex-col gap-1">
              <span className="text-sky-400 font-bold  text-[11px]">
                HTTPS + PAT
              </span>
              <span className="text-slate-300">
                Requires Personal Access Token (classic or fine-grained) as
                passwords are disabled.
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/github/github_ssh_auth_diagram.jpg"
                alt="GitHub SSH Keys Management Interface"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>GitHub Settings → SSH &amp; GPG Keys Form</span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 ">
                Verified Key
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 5: Creating a New GitHub Repository
export function Slide5({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 03 • REPOSITORY SETUP
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            Creating a New GitHub Repository
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Setting up the empty cloud destination for your project on
            GitHub.com
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
            github.com/new
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
            <h4 className="text-white text-sm font-bold m-0 flex items-center gap-2">
              <span className="text-purple-400  text-[12px]">STEP-BY-STEP</span>{" "}
              5 Steps on GitHub Web
            </h4>
            <ul className="text-xs text-slate-300 flex flex-col gap-2 p-0 m-0 list-none">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center  font-bold text-[11px] shrink-0">
                  1
                </span>{" "}
                Click the <strong>+</strong> icon at the top-right header and
                select <strong>New repository</strong>.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center  font-bold text-[11px] shrink-0">
                  2
                </span>{" "}
                Enter a concise Repository Name:{" "}
                <code className="text-purple-300  bg-slate-900 px-1">
                  my-app
                </code>
                .
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center  font-bold text-[11px] shrink-0">
                  3
                </span>{" "}
                Choose <strong>Public</strong> (visible to anyone) or{" "}
                <strong>Private</strong> (team access only).
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center  font-bold text-[11px] shrink-0">
                  4
                </span>{" "}
                Click <strong>Create repository</strong>.
              </li>
            </ul>
          </div>

          <div className="alert-callout danger flex items-start gap-2.5 p-3 border border-red-500/30 bg-red-500/10 text-red-300 text-[12px] leading-relaxed rounded">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
            <div>
              <strong>CRITICAL BEGINNER TRAP:</strong> If you already have code
              on your computer, <strong>DO NOT</strong> check "Add a README
              file", ".gitignore", or "license"! An empty repository allows a
              smooth first push without merge conflicts.
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/github_new_repo_ui.jpg"
                alt="GitHub UI Mockup: Creating a new repository"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>GitHub Repository Creation Page Form</span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
                Real UI
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 6: Connecting Local Git to Remote: git remote add origin
export function Slide6({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 03 • REPOSITORY SETUP
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            Connecting Local Git to Remote: git remote add origin
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Teaching your local repository the cloud address of your GitHub
            repository
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/10 text-blue-400 ">
            git remote
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="terminal-mockup bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
            <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                <span className="text-[11px] text-slate-400 ml-1">
                  Terminal: Add Remote Origin
                </span>
              </div>
              <button
                className="copy-btn text-[11px] px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer"
                data-copy="git remote add origin git@github.com:USERNAME/my-app.git&#10;git remote -v"
              >
                Copy
              </button>
            </div>
            <div className="p-3 text-slate-200 leading-relaxed  text-xs flex flex-col gap-1.5">
              <div>
                <span className="text-blue-500 select-none mr-2">$</span>
                <span className="text-white font-bold">
                  git remote add origin git@github.com:USERNAME/my-app.git
                </span>
              </div>
              <div>
                <span className="text-blue-500 select-none mr-2">$</span>
                <span className="text-white font-bold">git remote -v</span>
              </div>
              <div className="text-emerald-400 text-[11px]">
                origin git@github.com:USERNAME/my-app.git (fetch)
              </div>
              <div className="text-emerald-400 text-[11px]">
                origin git@github.com:USERNAME/my-app.git (push)
              </div>
            </div>
          </div>

          <div className="info-card bg-slate-800/80 border border-slate-800 p-3 flex flex-col gap-1.5 text-xs">
            <strong className="text-white">Command Anatomy:</strong>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div>
                <code className="text-blue-400 ">git remote</code>: Subsystem
                manager
              </div>
              <div>
                <code className="text-purple-400 ">add</code>: Register new
                connection
              </div>
              <div>
                <code className="text-emerald-400 ">origin</code>: Standard
                remote alias
              </div>
              <div>
                <code className="text-amber-400 ">&lt;URL&gt;</code>: Remote
                GitHub endpoint
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/git/git_command_syntax.jpg"
                alt="Git Command Syntax and Arguments"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>Syntax Breakdown: Commands, Flags &amp; Arguments</span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
                CLI Syntax
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 7: The First Push: git push -u origin main
export function Slide7({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 04 • PUSHING CODE
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            The First Push: git push -u origin main
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Publishing your local commit history and establishing upstream
            branch tracking
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 ">
            First Publish
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="terminal-mockup bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
            <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                <span className="text-[11px] text-slate-400 ml-1">
                  Terminal: First Push Session
                </span>
              </div>
              <button
                className="copy-btn text-[11px] px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer"
                data-copy="git branch -M main&#10;git push -u origin main"
              >
                Copy
              </button>
            </div>
            <div className="p-3 text-slate-200 leading-relaxed  text-xs flex flex-col gap-1.5">
              <div>
                <span className="text-blue-500 select-none mr-2">$</span>
                <span className="text-white font-bold">git branch -M main</span>
              </div>
              <div>
                <span className="text-blue-500 select-none mr-2">$</span>
                <span className="text-white font-bold">
                  git push -u origin main
                </span>
              </div>
              <div className="text-slate-400 text-[11px]">
                Enumerating objects: 14, done.
              </div>
              <div className="text-slate-400 text-[11px]">
                Counting objects: 100% (14/14), done.
              </div>
              <div className="text-slate-400 text-[11px]">
                Writing objects: 100% (14/14), 3.24 KiB | 3.24 MiB/s, done.
              </div>
              <div className="text-emerald-400 text-[11px] font-bold">
                * [new branch] main -&gt; main
              </div>
              <div className="text-sky-300 text-[11px]">
                Branch 'main' set up to track remote branch 'main' from
                'origin'.
              </div>
            </div>
          </div>

          <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12px] leading-relaxed">
            <div>
              <strong>
                Why the <code className=" text-blue-300">-u</code> flag is
                essential:
              </strong>{" "}
              It sets the upstream reference link. Once configured, you can
              simply type{" "}
              <code className=" text-white bg-slate-900 px-1">git push</code> or{" "}
              <code className=" text-white bg-slate-900 px-1">git pull</code>{" "}
              without repeating "origin main" every time!
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/git_flow_hero.jpg"
                alt="Git Push Flow to Cloud"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>Branch Synchronized with Remote origin/main</span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 ">
                Sync Complete
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 8: Exploring the GitHub Repository Interface
export function Slide8({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 04 • PUSHING CODE
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            Exploring the GitHub Repository Interface
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Navigating the code tree, commit history, branch switcher, and
            releases
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
            UI Navigation
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-800/80 border border-slate-800 p-2.5 flex flex-col gap-1">
              <span className="text-purple-400 font-bold  text-[11px]">
                1. Code File Tree
              </span>
              <span className="text-slate-300">
                Browse folders, source code, and automatic README.md
                documentation rendering.
              </span>
            </div>
            <div className="bg-slate-800/80 border border-slate-800 p-2.5 flex flex-col gap-1">
              <span className="text-blue-400 font-bold  text-[11px]">
                2. Commit History
              </span>
              <span className="text-slate-300">
                Click commit count to see timeline, author avatars, and exact
                diffs per commit.
              </span>
            </div>
            <div className="bg-slate-800/80 border border-slate-800 p-2.5 flex flex-col gap-1">
              <span className="text-emerald-400 font-bold  text-[11px]">
                3. Branch Dropdown
              </span>
              <span className="text-slate-300">
                Switch between <code className=" text-emerald-300">main</code>,
                tags, and active team feature branches.
              </span>
            </div>
            <div className="bg-slate-800/80 border border-slate-800 p-2.5 flex flex-col gap-1">
              <span className="text-amber-400 font-bold  text-[11px]">
                4. Green Code Button
              </span>
              <span className="text-slate-300">
                Copy clone URLs (HTTPS/SSH), download ZIP, or launch cloud
                Codespaces in 1 click.
              </span>
            </div>
          </div>

          <div className="info-card bg-slate-800/80 border border-slate-800 p-3 text-xs flex items-center justify-between">
            <span className="text-slate-300">
              Keyboard Pro-Tip: Press{" "}
              <kbd className="kbd px-1.5 py-0.5 bg-slate-900 border border-slate-700 text-purple-400  font-bold">
                t
              </kbd>{" "}
              on any GitHub repo to jump to file search!
            </span>
            <span className="text-slate-400  text-[11px]">Shortcut</span>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/github_repo_view.jpg"
                alt="GitHub Repository Main Dashboard"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>Verified GitHub Project Repository View</span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
                Live Dashboard
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 9: The Daily Team Rhythm: Push & Pull
export function Slide9({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 05 • DAILY WORKFLOW
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            The Daily Team Rhythm: Push &amp; Pull
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            The 4-stage synchronization habit practiced by modern engineering
            teams
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
            Daily Loop
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2 text-xs">
            <div className="p-2.5 bg-slate-800/80 border border-slate-800 flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center  font-bold text-[11px] shrink-0">
                1
              </span>
              <div>
                <strong className="text-white block">
                  Morning Pull: Fetch Team Updates
                </strong>
                <code className="text-blue-400  text-[11px] bg-slate-900 px-1 py-0.5 border border-slate-800">
                  git pull origin main
                </code>
                <span className="text-slate-400 block mt-0.5 text-[11px]">
                  Always pull before coding to prevent stale branches and merge
                  conflicts.
                </span>
              </div>
            </div>

            <div className="p-2.5 bg-slate-800/80 border border-slate-800 flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center  font-bold text-[11px] shrink-0">
                2
              </span>
              <div>
                <strong className="text-white block">
                  Stage &amp; Review Changes
                </strong>
                <code className="text-purple-400  text-[11px] bg-slate-900 px-1 py-0.5 border border-slate-800">
                  git add . &amp;&amp; git status
                </code>
                <span className="text-slate-400 block mt-0.5 text-[11px]">
                  Check modified files and ensure no temporary log or build
                  files get staged.
                </span>
              </div>
            </div>

            <div className="p-2.5 bg-slate-800/80 border border-slate-800 flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center  font-bold text-[11px] shrink-0">
                3
              </span>
              <div>
                <strong className="text-white block">
                  Commit with Clear Message
                </strong>
                <code className="text-emerald-400  text-[11px] bg-slate-900 px-1 py-0.5 border border-slate-800">
                  git commit -m "feat: implement user settings"
                </code>
                <span className="text-slate-400 block mt-0.5 text-[11px]">
                  Write descriptive conventional commit messages.
                </span>
              </div>
            </div>

            <div className="p-2.5 bg-slate-800/80 border border-slate-800 flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center  font-bold text-[11px] shrink-0">
                4
              </span>
              <div>
                <strong className="text-white block">
                  Push to Cloud Remote
                </strong>
                <code className="text-amber-400  text-[11px] bg-slate-900 px-1 py-0.5 border border-slate-800">
                  git push origin &lt;branch-name&gt;
                </code>
                <span className="text-slate-400 block mt-0.5 text-[11px]">
                  Back up your code on GitHub and trigger automated CI test
                  runs.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/git/git_lifecycle_states.jpg"
                alt="Git File Lifecycle States"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>
                File States: Untracked → Unmodified → Modified → Staged
              </span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
                Lifecycle
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 10: Working with Remote Branches
export function Slide10({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 05 • DAILY WORKFLOW
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            Working with Remote Branches
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Isolating feature development and publishing branch pointers to the
            cloud
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/10 text-blue-400 ">
            Branch Model
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="terminal-mockup bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
            <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                <span className="text-[11px] text-slate-400 ml-1">
                  Terminal: Feature Branch Workflow
                </span>
              </div>
              <button
                className="copy-btn text-[11px] px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer"
                data-copy="git checkout -b feature/auth&#10;git push -u origin feature/auth&#10;git branch -a"
              >
                Copy
              </button>
            </div>
            <div className="p-3 text-slate-200 leading-relaxed  text-xs flex flex-col gap-1.5">
              <div>
                <span className="text-blue-500 select-none mr-2">$</span>
                <span className="text-white font-bold">
                  git checkout -b feature/auth
                </span>
              </div>
              <div className="text-slate-400 text-[11px]">
                Switched to a new branch 'feature/auth'
              </div>
              <div>
                <span className="text-blue-500 select-none mr-2">$</span>
                <span className="text-white font-bold">
                  git push -u origin feature/auth
                </span>
              </div>
              <div className="text-emerald-400 text-[11px]">
                * [new branch] feature/auth -&gt; feature/auth
              </div>
              <div>
                <span className="text-blue-500 select-none mr-2">$</span>
                <span className="text-white font-bold">git branch -a</span>
              </div>
              <div className="text-slate-400 text-[11px]">* feature/auth</div>
              <div className="text-slate-400 text-[11px]"> main</div>
              <div className="text-purple-400 text-[11px]">
                {" "}
                remotes/origin/main
              </div>
              <div className="text-purple-400 text-[11px]">
                {" "}
                remotes/origin/feature/auth
              </div>
            </div>
          </div>

          <div className="alert-callout info flex items-start gap-2.5 p-3 border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[12px] leading-relaxed">
            <div>
              Never push directly to <code className=" text-white">main</code>{" "}
              in a production repo. Always build features in their own branch
              and submit a Pull Request.
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/git/git_branch_model.jpg"
                alt="Git Branching Model Diagram"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>Branch Pointer Architecture: Main vs Feature Line</span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
                Branch Architecture
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 11: Pull Requests (PR): The Heart of GitHub Collaboration
export function Slide11({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 06 • PULL REQUESTS
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            Pull Requests (PR): The Heart of GitHub Collaboration
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Proposing code changes, requesting team reviews, and automated
            verification
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 ">
            Open PR
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
            <h4 className="text-white text-sm font-bold m-0">
              What is a Pull Request?
            </h4>
            <p className="text-xs text-slate-300 m-0">
              A Pull Request is a formal request to "pull" your feature branch
              commits into the main branch. It provides a dedicated
              collaborative space for code inspection before production release.
            </p>

            <div className="grid grid-cols-2 gap-2 mt-1 text-xs">
              <div className="bg-slate-900 p-2 border border-slate-800 flex flex-col gap-0.5">
                <span className="text-purple-400  text-[11px] font-bold">
                  Base Branch
                </span>
                <span className="text-slate-300">
                  Target branch to receive changes (e.g.,{" "}
                  <code className="text-emerald-400 ">main</code>).
                </span>
              </div>
              <div className="bg-slate-900 p-2 border border-slate-800 flex flex-col gap-0.5">
                <span className="text-blue-400  text-[11px] font-bold">
                  Compare Branch
                </span>
                <span className="text-slate-300">
                  Source branch containing your commits (
                  <code className="text-blue-400 ">feature/auth</code>).
                </span>
              </div>
            </div>
          </div>

          <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12px] leading-relaxed">
            <div>
              <strong>PR Anatomy:</strong> A great PR includes a clear summary
              title, screenshots of UI changes, checklist of tested items, and
              tagged reviewers for sign-off.
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/github/github_pr_review_ui.jpg"
                alt="GitHub Pull Request Review Interface"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>
                Pull Request #147: Reviewers, Checks &amp; Merge Button
              </span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 ">
                PR #147 Open
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 12: Conducting Professional Code Reviews
export function Slide12({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 06 • PULL REQUESTS
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            Conducting Professional Code Reviews
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Reviewing line-by-line diffs, leaving comments, and suggesting fixes
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
            Diff &amp; Review
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
            <h4 className="text-white text-sm font-bold m-0">
              The 3 Types of Review Verdicts
            </h4>
            <div className="flex flex-col gap-2 text-xs">
              <div className="p-2 bg-slate-900 border border-emerald-500/30 flex items-start gap-2">
                <span className="text-emerald-400 font-bold text-sm">✓</span>
                <div>
                  <strong className="text-emerald-300">Approve</strong>
                  <span className="text-slate-400 block text-[11px]">
                    Code is thoroughly tested, meets security standards, and is
                    approved to merge.
                  </span>
                </div>
              </div>
              <div className="p-2 bg-slate-900 border border-red-500/30 flex items-start gap-2">
                <span className="text-red-400 font-bold text-sm">✗</span>
                <div>
                  <strong className="text-red-300">Request Changes</strong>
                  <span className="text-slate-400 block text-[11px]">
                    Blocks merge until developer addresses critical bugs, test
                    failures, or design issues.
                  </span>
                </div>
              </div>
              <div className="p-2 bg-slate-900 border border-slate-800 flex items-start gap-2">
                <span className="text-blue-400 font-bold text-sm">💬</span>
                <div>
                  <strong className="text-blue-300">Comment</strong>
                  <span className="text-slate-400 block text-[11px]">
                    General feedback or questions without blocking the merge
                    pipeline.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="alert-callout info flex items-start gap-2.5 p-3 border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[12px] leading-relaxed">
            <div>
              <strong>Suggest Change Feature:</strong> Reviewers can click the{" "}
              <code className="bg-slate-900 text-purple-300 px-1 ">+/-</code>{" "}
              icon on any line to submit suggested code edits that the author
              can commit with a single click.
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/github/github_pr_review_ui.jpg"
                alt="GitHub Code Review Diff View"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>Inline Comments, Line Diffs &amp; Automated Checks</span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
                Code Review
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 13: Merging Strategies: Merge Commit vs. Squash vs. Rebase
export function Slide13({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 06 • PULL REQUESTS
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            Merging Strategies: Merge Commit vs. Squash vs. Rebase
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Choosing the right merge technique to maintain a pristine production
            history
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
            3 Merge Types
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2 text-xs">
            <div className="p-2.5 bg-slate-800/80 border border-slate-800 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <strong className="text-white text-xs">
                  1. Create a Merge Commit
                </strong>
                <span className="text-purple-400  text-[11px]">
                  git merge --no-ff
                </span>
              </div>
              <p className="text-slate-300 text-[11px] m-0">
                Preserves every individual commit from the feature branch.
                Creates a 2-parent merge commit on{" "}
                <code className="text-emerald-400 ">main</code>. Can make
                history busy if branches have many "wip" commits.
              </p>
            </div>

            <div className="p-2.5 bg-slate-800/80 border border-emerald-500/30 bg-emerald-900/20 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <strong className="text-emerald-300 text-xs">
                  2. Squash and Merge (Industry Favorite)
                </strong>
                <span className="text-emerald-400  text-[11px]">
                  Recommended
                </span>
              </div>
              <p className="text-slate-300 text-[11px] m-0">
                Squashes 10 messy feature commits ("fixed typo", "debug
                logging") into <strong>1 clean commit</strong> on{" "}
                <code className="text-emerald-400 ">main</code>. Perfect for
                clean Git logs and atomic rollbacks.
              </p>
            </div>

            <div className="p-2.5 bg-slate-800/80 border border-slate-800 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <strong className="text-white text-xs">
                  3. Rebase and Merge
                </strong>
                <span className="text-blue-400  text-[11px]">
                  Linear History
                </span>
              </div>
              <p className="text-slate-300 text-[11px] m-0">
                Appends individual commits directly onto tip of{" "}
                <code className="text-emerald-400 ">main</code> without a merge
                commit. Produces a 100% linear history.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/git/git_commit_snapshots.jpg"
                alt="Git Commit Snapshot Architecture"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>Commit Tree Structure &amp; Snapshot History</span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
                Commit Graph
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 14: Cloning Existing Repositories: git clone
export function Slide14({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 07 • CLONING &amp; CONTRIBUTING
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            Cloning Existing Repositories: git clone
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Downloading an existing remote project with full commit history
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-blue-500/30 bg-blue-500/10 text-blue-400 ">
            git clone
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="terminal-mockup bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
            <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                <span className="text-[11px] text-slate-400 ml-1">
                  Terminal: Clone Project
                </span>
              </div>
              <button
                className="copy-btn text-[11px] px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer"
                data-copy="git clone git@github.com:acme-corp/web-app.git&#10;cd web-app&#10;git status"
              >
                Copy
              </button>
            </div>
            <div className="p-3 text-slate-200 leading-relaxed  text-xs flex flex-col gap-1.5">
              <div>
                <span className="text-blue-500 select-none mr-2">$</span>
                <span className="text-white font-bold">
                  git clone git@github.com:acme-corp/web-app.git
                </span>
              </div>
              <div className="text-slate-400 text-[11px]">
                Cloning into 'web-app'...
              </div>
              <div className="text-slate-400 text-[11px]">
                Receiving objects: 100% (452/452), 1.82 MiB | 4.12 MiB/s, done.
              </div>
              <div className="text-slate-400 text-[11px]">
                Resolving deltas: 100% (210/210), done.
              </div>
              <div>
                <span className="text-blue-500 select-none mr-2">$</span>
                <span className="text-white font-bold">
                  cd web-app &amp;&amp; git status
                </span>
              </div>
              <div className="text-emerald-400 text-[11px]">
                On branch main. Your branch is up to date with 'origin/main'.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-800/80 border border-slate-800 p-2.5 flex flex-col gap-1">
              <span className="text-orange-400 font-bold  text-[11px]">
                git init
              </span>
              <span className="text-slate-300">
                Starts a brand new, empty Git repository from scratch in an
                existing folder.
              </span>
            </div>
            <div className="bg-slate-800/80 border border-slate-800 p-2.5 flex flex-col gap-1">
              <span className="text-purple-400 font-bold  text-[11px]">
                git clone
              </span>
              <span className="text-slate-300">
                Downloads everything, creates directory, sets up remote origin,
                and checks out main.
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/github_repo_view.jpg"
                alt="GitHub Clone Modal and Repository Details"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>Green Code Button: Clone Modal (HTTPS / SSH / CLI)</span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
                Clone URL
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 15: Forks & Open Source Contribution Workflow
export function Slide15({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 07 • CLONING &amp; CONTRIBUTING
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            Forks &amp; Open Source Contribution Workflow
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Contributing to public repositories you don't own with upstream sync
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
            Fork &amp; Upstream
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
            <h4 className="text-white text-sm font-bold m-0">
              5-Step Open Source Contribution Cycle
            </h4>
            <ul className="text-xs text-slate-300 flex flex-col gap-1.5 p-0 m-0 list-none">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center  font-bold text-[11px] shrink-0">
                  1
                </span>{" "}
                <strong>Fork:</strong> Click "Fork" on GitHub to make a personal
                copy in your account.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center  font-bold text-[11px] shrink-0">
                  2
                </span>{" "}
                <strong>Clone:</strong> Clone your personal fork to your
                computer:{" "}
                <code className="text-purple-300 ">
                  git clone &lt;fork-url&gt;
                </code>
                .
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center  font-bold text-[11px] shrink-0">
                  3
                </span>{" "}
                <strong>Add Upstream:</strong>{" "}
                <code className="text-blue-300 ">
                  git remote add upstream &lt;original-repo-url&gt;
                </code>
                .
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center  font-bold text-[11px] shrink-0">
                  4
                </span>{" "}
                <strong>Branch &amp; Push:</strong>{" "}
                <code className="text-emerald-300 ">
                  git checkout -b fix-bug
                </code>
                , commit, and push to your fork.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center  font-bold text-[11px] shrink-0">
                  5
                </span>{" "}
                <strong>Open PR:</strong> Submit a Pull Request from your fork
                back to the upstream repo!
              </li>
            </ul>
          </div>

          <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12px] leading-relaxed">
            <div>
              <strong>Syncing your fork:</strong> Run{" "}
              <code className=" text-blue-300 bg-slate-900 px-1">
                git fetch upstream &amp;&amp; git merge upstream/main
              </code>{" "}
              to keep your personal fork up to date with new releases from the
              main team.
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/github/github_fork_sync_diagram.jpg"
                alt="GitHub Fork and Upstream Sync Architecture"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>Upstream Organization ↔ Personal Fork ↔ Local Clone</span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
                Architecture
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 16: Resolving Merge Conflicts on GitHub & Locally
export function Slide16({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 08 • CONFLICT RESOLUTION
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            Resolving Merge Conflicts on GitHub &amp; Locally
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Understanding conflicting changes when team members edit the same
            lines of code
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400 ">
            Conflict Fix
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="terminal-mockup bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
            <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
              <span className="text-[11px] text-amber-400 font-bold">
                Conflict Markers in File
              </span>
              <span className="text-[11px] text-slate-400 ">app.js</span>
            </div>
            <div className="p-3 text-slate-200 leading-relaxed  text-xs flex flex-col gap-1">
              <div className="text-blue-400 font-bold">
                &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD (Current Change - Your Branch)
              </div>
              <div className="text-slate-100 bg-blue-900/40 p-1 border border-blue-500/30">
                const port = process.env.PORT || 3000;
              </div>
              <div className="text-slate-400 font-bold">======= (Divider)</div>
              <div className="text-slate-100 bg-purple-900/40 p-1 border border-purple-500/30">
                const port = process.env.PORT || 8080;
              </div>
              <div className="text-purple-400 font-bold">
                &gt;&gt;&gt;&gt;&gt;&gt;&gt; origin/main (Incoming Change -
                Teammate)
              </div>
            </div>
          </div>

          <div className="info-card bg-slate-800/80 border border-slate-800 p-3 text-xs flex flex-col gap-1.5">
            <strong className="text-white">Resolution in 3 Steps:</strong>
            <span className="text-slate-300">
              1. Decide which version to keep (or combine both).
            </span>
            <span className="text-slate-300">
              2. Delete all marker lines (
              <code className="text-red-400 ">
                &lt;&lt;&lt;&lt;&lt;&lt;&lt;
              </code>
              , <code className="text-slate-400 ">=======</code>,{" "}
              <code className="text-purple-400 ">
                &gt;&gt;&gt;&gt;&gt;&gt;&gt;
              </code>
              ).
            </span>
            <span className="text-slate-300">
              3. Run{" "}
              <code className="text-emerald-400  bg-slate-900 px-1">
                git add . &amp;&amp; git commit -m "fix: resolve port conflict"
                &amp;&amp; git push
              </code>
              .
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/git/git_conflict_editor.jpg"
                alt="Merge Conflict Visual Editor"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>Visual Conflict Editor: Accept Current vs Incoming</span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400 ">
                Resolved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 17: Protecting Production: Branch Protection Rules
export function Slide17({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 09 • REPO GOVERNANCE
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            Protecting Production: Branch Protection Rules
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Enforcing code quality, approvals, and preventing accidental main
            overwrites
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 ">
            Protected Branch
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
            <h4 className="text-white text-sm font-bold m-0">
              4 Essential Production Rules
            </h4>
            <div className="flex flex-col gap-2 text-xs">
              <div className="p-2 bg-slate-900 border border-slate-800 flex items-start gap-2">
                <span className="text-emerald-400 font-bold text-sm">🛡️</span>
                <div>
                  <strong className="text-white">
                    Require a pull request before merging
                  </strong>
                  <span className="text-slate-400 block text-[11px]">
                    Prevents any developer from pushing directly to main.
                  </span>
                </div>
              </div>
              <div className="p-2 bg-slate-900 border border-slate-800 flex items-start gap-2">
                <span className="text-blue-400 font-bold text-sm">👥</span>
                <div>
                  <strong className="text-white">
                    Require Approvals (1 or 2 peers)
                  </strong>
                  <span className="text-slate-400 block text-[11px]">
                    Guarantees at least one team engineer reviewed the code.
                  </span>
                </div>
              </div>
              <div className="p-2 bg-slate-900 border border-slate-800 flex items-start gap-2">
                <span className="text-purple-400 font-bold text-sm">⚡</span>
                <div>
                  <strong className="text-white">
                    Require status checks to pass (CI)
                  </strong>
                  <span className="text-slate-400 block text-[11px]">
                    Unit tests, builds, and TypeScript compilation must succeed.
                  </span>
                </div>
              </div>
              <div className="p-2 bg-slate-900 border border-slate-800 flex items-start gap-2">
                <span className="text-red-400 font-bold text-sm">🚫</span>
                <div>
                  <strong className="text-white">
                    Block Force-Pushes &amp; Deletions
                  </strong>
                  <span className="text-slate-400 block text-[11px]">
                    Protects the Git history from accidental deletion or
                    destructive resets.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12px] leading-relaxed">
            <div>
              Settings Location:{" "}
              <strong>
                Repo Settings → Branches → Add branch protection rule → Target:
                main
              </strong>
              .
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/github/github_branch_protect_ui.jpg"
                alt="GitHub Branch Protection Rules Settings UI"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>Branch Protection Rules Configuration Panel</span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 ">
                Enterprise Rules
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 18: GitHub Issues, Milestones & Projects (Kanban)
export function Slide18({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 09 • REPO GOVERNANCE
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            GitHub Issues, Milestones &amp; Projects (Kanban)
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Organizing team sprints, tracking bugs, and linking PRs to issues
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
            Kanban Board
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-800/80 border border-slate-800 p-2.5 flex flex-col gap-1">
              <span className="text-purple-400 font-bold  text-[11px]">
                1. GitHub Issues
              </span>
              <span className="text-slate-300">
                Track tasks, bugs, and feature ideas with Markdown task lists
                and user @mentions.
              </span>
            </div>
            <div className="bg-slate-800/80 border border-slate-800 p-2.5 flex flex-col gap-1">
              <span className="text-blue-400 font-bold  text-[11px]">
                2. Labels &amp; Milestones
              </span>
              <span className="text-slate-300">
                Categorize with color tags (
                <code className="text-red-400 ">bug</code>,{" "}
                <code className="text-blue-400 ">feature</code>) and sprint
                deadline target dates.
              </span>
            </div>
            <div className="bg-slate-800/80 border border-slate-800 p-2.5 flex flex-col gap-1">
              <span className="text-emerald-400 font-bold  text-[11px]">
                3. Auto-Closing Keywords
              </span>
              <span className="text-slate-300">
                Write <code className="text-emerald-300 ">Closes #42</code> in a
                PR to automatically close the issue upon merge!
              </span>
            </div>
            <div className="bg-slate-800/80 border border-slate-800 p-2.5 flex flex-col gap-1">
              <span className="text-amber-400 font-bold  text-[11px]">
                4. GitHub Projects
              </span>
              <span className="text-slate-300">
                Agile Kanban board with columns: Todo, In Progress, In Review,
                and Done.
              </span>
            </div>
          </div>

          <div className="alert-callout info flex items-start gap-2.5 p-3 border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[12px] leading-relaxed">
            <div>
              Modern engineering teams run their complete agile sprint planning
              directly inside GitHub Projects alongside code and PRs.
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/github/github_issues_kanban.jpg"
                alt="GitHub Projects Kanban Board Dashboard"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>
                Sprint Board: Todo, In Progress, Done with Issue Cards
              </span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
                Sprint Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 19: GitHub Actions: Automated Continuous Integration
export function Slide19({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 10 • AUTOMATION (CI/CD)
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            GitHub Actions: Automated Continuous Integration
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Automatically running tests and builds on every push and pull
            request
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 ">
            CI/CD Pipeline
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="terminal-mockup bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
            <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
              <span className="text-[11px] text-slate-400 ">
                .github/workflows/ci.yml
              </span>
              <button
                className="copy-btn text-[11px] px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer"
                data-copy="name: CI Tests&#10;on: [push, pull_request]&#10;jobs:&#10;  build:&#10;    runs-on: ubuntu-latest&#10;    steps:&#10;      - uses: actions/checkout@v4&#10;      - uses: actions/setup-node@v4&#10;        with:&#10;          node-version: 20&#10;      - run: pnpm install&#10;      - run: pnpm test"
              >
                Copy
              </button>
            </div>
            <div className="p-3 text-slate-200 leading-relaxed  text-[11.5px] flex flex-col gap-1">
              <div>
                <span className="text-purple-400">name:</span> CI Tests
              </div>
              <div>
                <span className="text-purple-400">on:</span> [push,
                pull_request]
              </div>
              <div>
                <span className="text-purple-400">jobs:</span>
              </div>
              <div className="ml-2">
                <span className="text-blue-400">test:</span>
              </div>
              <div className="ml-4">
                <span className="text-slate-400">runs-on:</span> ubuntu-latest
              </div>
              <div className="ml-4">
                <span className="text-slate-400">steps:</span>
              </div>
              <div className="ml-6 text-emerald-400">
                - uses: actions/checkout@v4
              </div>
              <div className="ml-6 text-emerald-400">
                - uses: actions/setup-node@v4
              </div>
              <div className="ml-6 text-sky-300">
                - run: pnpm install &amp;&amp; pnpm test
              </div>
            </div>
          </div>

          <div className="alert-callout tip flex items-start gap-2.5 p-3 border border-sky-500/30 bg-sky-500/10 text-sky-300 text-[12px] leading-relaxed">
            <div>
              Every pull request automatically triggers this workflow. If tests
              fail, GitHub blocks the merge button and notifies the team in real
              time!
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/github/github_actions_ci_ui.jpg"
                alt="GitHub Actions CI/CD Pipeline Execution"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>Actions Runner: Unit Tests Passed (2m 14s)</span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 ">
                Checks Passed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 20: Security Best Practices: Never Push Secrets to GitHub
export function Slide20({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 11 • BEST PRACTICES
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            Security Best Practices: Never Push Secrets to GitHub
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Protecting API keys, .env files, database credentials, and Git
            secret scanning
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400 ">
            Security Alert
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="terminal-mockup bg-slate-900 border border-slate-800 overflow-hidden  text-xs shadow-md">
            <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
              <span className="text-[11px] text-red-400 font-bold">
                Standard .gitignore for Web Apps
              </span>
              <button
                className="copy-btn text-[11px] px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer"
                data-copy=".env&#10;.env*.local&#10;node_modules/&#10;dist/&#10;*.pem&#10;*.key"
              >
                Copy
              </button>
            </div>
            <div className="p-3 text-slate-200 leading-relaxed  text-xs flex flex-col gap-1">
              <div className="text-red-400">
                # Secrets &amp; Environment Variables (CRITICAL)
              </div>
              <div className="text-white">.env</div>
              <div className="text-white">.env*.local</div>
              <div className="text-white">*.pem</div>
              <div className="text-white">*.key</div>
              <div className="text-slate-500 mt-1">
                # Dependencies &amp; Build Artifacts
              </div>
              <div className="text-slate-400">node_modules/</div>
              <div className="text-slate-400">dist/</div>
            </div>
          </div>

          <div className="alert-callout danger flex items-start gap-2.5 p-3 border border-red-500/30 bg-red-500/10 text-red-300 text-[12px] leading-relaxed rounded">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
            <div>
              <strong>Accidentally Pushed a Key?</strong> Simply deleting the
              file in the next commit leaves the key in past Git history!{" "}
              <strong>Immediately revoke &amp; regenerate</strong> the API key
              on OpenAI / Stripe / AWS console!
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/git/git_gitignore_flow.jpg"
                alt="Gitignore Flow and Untracked Files"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>.gitignore Filter: Untracked vs Tracked Pipeline</span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-red-500/30 bg-red-500/10 text-red-400 ">
                Filtered
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 21: Top 5 GitHub Beginner Errors & Instant Fixes
export function Slide21({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 11 • BEST PRACTICES
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            Top 5 GitHub Beginner Errors &amp; Instant Fixes
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            Practical troubleshooting solutions for the most frequent command
            errors
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400 ">
            Troubleshooting
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-2 text-xs">
          <div className="p-2 bg-slate-800/80 border border-slate-800 flex flex-col gap-0.5">
            <span className="text-red-400  font-bold text-[11px]">
              1. "error: failed to push some refs"
            </span>
            <span className="text-slate-300">
              Remote has commits you don't have. <strong>Fix:</strong>{" "}
              <code className="text-emerald-300  bg-slate-900 px-1">
                git pull --rebase origin main
              </code>{" "}
              then push.
            </span>
          </div>

          <div className="p-2 bg-slate-800/80 border border-slate-800 flex flex-col gap-0.5">
            <span className="text-amber-400  font-bold text-[11px]">
              2. "fatal: remote origin already exists"
            </span>
            <span className="text-slate-300">
              Remote URL registered twice. <strong>Fix:</strong>{" "}
              <code className="text-emerald-300  bg-slate-900 px-1">
                git remote set-url origin &lt;new-url&gt;
              </code>
              .
            </span>
          </div>

          <div className="p-2 bg-slate-800/80 border border-slate-800 flex flex-col gap-0.5">
            <span className="text-sky-400  font-bold text-[11px]">
              3. Commits not linked to your GitHub avatar
            </span>
            <span className="text-slate-300">
              Config email doesn't match GitHub. <strong>Fix:</strong>{" "}
              <code className="text-emerald-300  bg-slate-900 px-1">
                git config --global user.email "your@github.com"
              </code>
              .
            </span>
          </div>

          <div className="p-2 bg-slate-800/80 border border-slate-800 flex flex-col gap-0.5">
            <span className="text-purple-400  font-bold text-[11px]">
              4. "Support for password authentication was removed"
            </span>
            <span className="text-slate-300">
              GitHub requires SSH or PAT. <strong>Fix:</strong> Add SSH key or
              Personal Access Token.
            </span>
          </div>

          <div className="p-2 bg-slate-800/80 border border-slate-800 flex flex-col gap-0.5">
            <span className="text-emerald-400  font-bold text-[11px]">
              5. Safely undoing a pushed bad commit
            </span>
            <span className="text-slate-300">
              Never force push on shared branches. <strong>Fix:</strong>{" "}
              <code className="text-emerald-300  bg-slate-900 px-1">
                git revert &lt;commit-hash&gt; &amp;&amp; git push
              </code>
              .
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/git/git_undo_matrix.jpg"
                alt="Git Undo Matrix Decision Flowchart"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>Git Undo Decision Tree: Restore vs Reset vs Revert</span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-purple-500/30 bg-purple-500/10 text-purple-400 ">
                Recovery Guide
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 22: The Professional GitHub Workflow & Master Cheat Sheet
export function Slide22({ onStart, onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="slide-header flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
        <div className="slide-title-wrap flex flex-col gap-1">
          <span className="slide-meta-label  text-[11px] font-bold uppercase tracking-wider text-purple-400">
            PART 12 • SUMMARY &amp; LAB
          </span>
          <h2 className="slide-title text-2xl font-extrabold text-white m-0 leading-tight">
            The Professional GitHub Workflow &amp; Master Cheat Sheet
          </h2>
          <p className="slide-subtitle text-[13px] text-slate-400 m-0">
            End-to-end team workflow diagram and essential command reference
          </p>
        </div>
        <div className="slide-badge-group flex items-center gap-2">
          <span className="tag-badge text-[11px] font-bold px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 ">
            Module 02 Complete
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-3">
          <div className="info-card bg-slate-800/80 border border-slate-800 p-3.5 flex flex-col gap-2">
            <h4 className="text-white text-sm font-bold m-0 flex items-center gap-2">
              <span className="text-purple-400">★</span> The Golden Team
              Collaboration Cycle
            </h4>
            <div className="p-2.5 bg-slate-900 border border-slate-800  text-xs text-slate-300 leading-relaxed">
              <span className="text-blue-400">1.</span> git checkout -b
              feat/task
              <br />
              <span className="text-blue-400">2.</span> git add . &amp;&amp; git
              commit -m "feat: task"
              <br />
              <span className="text-blue-400">3.</span> git push -u origin
              feat/task
              <br />
              <span className="text-purple-400">4.</span> Open Pull Request on
              GitHub
              <br />
              <span className="text-emerald-400">5.</span> Peer Review &amp; CI
              Checks Pass
              <br />
              <span className="text-emerald-400">6.</span> Squash and Merge into
              main
              <br />
              <span className="text-sky-300">7.</span> git checkout main
              &amp;&amp; git pull
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-slate-800/80 border border-slate-800 p-2 flex flex-col gap-0.5">
              <kbd className="kbd text-purple-400  font-bold">t</kbd>
              <span className="text-slate-400 text-[10px]">
                Quick File Search
              </span>
            </div>
            <div className="bg-slate-800/80 border border-slate-800 p-2 flex flex-col gap-0.5">
              <kbd className="kbd text-emerald-400  font-bold">.</kbd>
              <span className="text-slate-400 text-[10px]">
                Open VS Code in Browser
              </span>
            </div>
            <div className="bg-slate-800/80 border border-slate-800 p-2 flex flex-col gap-0.5">
              <kbd className="kbd text-sky-400  font-bold">y</kbd>
              <span className="text-slate-400 text-[10px]">
                Permalink Commit SHA
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <a
              href="#/course/nextjs"
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-600 hover:bg-purple-500 border border-purple-600 text-white text-xs font-bold transition-colors no-underline"
            >
              Next Module: Next.js Fullstack →
            </a>
            <a
              href="#/"
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Return to Hub
            </a>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full min-h-0">
          <div className="real-image-card w-full h-full flex-1 min-h-0 border border-slate-800 rounded overflow-hidden bg-slate-900 flex flex-col shadow-lg group">
            <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-900">
              <img
                src="/images/git/github_collaboration_workflow.jpg"
                alt="GitHub Complete Collaboration Workflow"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border-t border-slate-800 flex items-center justify-between shrink-0 z-10">
              <span>Complete GitHub Cloud Collaboration Architecture</span>
              <span className="tag-badge text-[10px] font-bold px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 ">
                Mastery
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const GITHUB_META = {
  id: "github",
  title: "GitHub: Cloud Repositories & Collaboration",
  module: "MODULE 02",
  accent: "purple",
};

export const GITHUB_SLIDES = [
  {
    id: 1,
    title: "MODULE 02 • CLOUD COLLABORATION: GitHub Masterclass",
    part: "WELCOME",
    Component: Slide1,
  },
  {
    id: 2,
    title: "Git (Local Machine) vs. GitHub (Cloud Platform)",
    part: "01 • ARCHITECTURE",
    Component: Slide2,
  },
  {
    id: 3,
    title: "The 4 Git Areas: Adding the Cloud Remote",
    part: "01 • ARCHITECTURE",
    Component: Slide3,
  },
  {
    id: 4,
    title: "GitHub Authentication: SSH Keys vs. HTTPS & PAT",
    part: "02 • SETUP & AUTH",
    Component: Slide4,
  },
  {
    id: 5,
    title: "Creating a New GitHub Repository",
    part: "03 • REPOSITORY SETUP",
    Component: Slide5,
  },
  {
    id: 6,
    title: "Connecting Local Git to Remote: git remote add origin",
    part: "03 • REPOSITORY SETUP",
    Component: Slide6,
  },
  {
    id: 7,
    title: "The First Push: git push -u origin main",
    part: "04 • PUSHING CODE",
    Component: Slide7,
  },
  {
    id: 8,
    title: "Exploring the GitHub Repository Interface",
    part: "04 • PUSHING CODE",
    Component: Slide8,
  },
  {
    id: 9,
    title: "The Daily Team Rhythm: Push & Pull",
    part: "05 • DAILY WORKFLOW",
    Component: Slide9,
  },
  {
    id: 10,
    title: "Working with Remote Branches",
    part: "05 • DAILY WORKFLOW",
    Component: Slide10,
  },
  {
    id: 11,
    title: "Pull Requests (PR): The Heart of GitHub Collaboration",
    part: "06 • PULL REQUESTS",
    Component: Slide11,
  },
  {
    id: 12,
    title: "Conducting Professional Code Reviews",
    part: "06 • PULL REQUESTS",
    Component: Slide12,
  },
  {
    id: 13,
    title: "Merging Strategies: Merge Commit vs. Squash vs. Rebase",
    part: "06 • PULL REQUESTS",
    Component: Slide13,
  },
  {
    id: 14,
    title: "Cloning Existing Repositories: git clone",
    part: "07 • CLONING & CONTRIBUTING",
    Component: Slide14,
  },
  {
    id: 15,
    title: "Forks & Open Source Contribution Workflow",
    part: "07 • CLONING & CONTRIBUTING",
    Component: Slide15,
  },
  {
    id: 16,
    title: "Resolving Merge Conflicts on GitHub & Locally",
    part: "08 • CONFLICT RESOLUTION",
    Component: Slide16,
  },
  {
    id: 17,
    title: "Protecting Production: Branch Protection Rules",
    part: "09 • REPO GOVERNANCE",
    Component: Slide17,
  },
  {
    id: 18,
    title: "GitHub Issues, Milestones & Projects (Kanban)",
    part: "09 • REPO GOVERNANCE",
    Component: Slide18,
  },
  {
    id: 19,
    title: "GitHub Actions: Automated Continuous Integration",
    part: "10 • AUTOMATION (CI/CD)",
    Component: Slide19,
  },
  {
    id: 20,
    title: "Security Best Practices: Never Push Secrets to GitHub",
    part: "11 • BEST PRACTICES",
    Component: Slide20,
  },
  {
    id: 21,
    title: "Top 5 GitHub Beginner Errors & Instant Fixes",
    part: "11 • BEST PRACTICES",
    Component: Slide21,
  },
  {
    id: 22,
    title: "The Professional GitHub Workflow & Master Cheat Sheet",
    part: "12 • SUMMARY & LAB",
    Component: Slide22,
  },
];
