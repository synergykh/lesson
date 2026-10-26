import React from "react";
import { ArrowRight, GitBranch, FolderGit2, AlertTriangle } from "lucide-react";
import SlideHeader from "./components/SlideHeader";
import TerminalBlock from "./components/TerminalBlock";
import ImageFrame from "./components/ImageFrame";

// ==========================================
// SLIDE 1: WELCOME & WORKSHOP HERO
// ==========================================
export function Slide1Welcome({ onStart }) {
  return (
    <div className="title-hero-grid grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch flex-1 min-h-0">
      <div className="lg:col-span-6 flex flex-col justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-bold tracking-wider uppercase bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-orange-400 animate-pulse" />
            MODULE 01 • LESSON 01
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            SYNERGY ACADEMY
          </span>
        </div>
        <h1 className="title-main-h1 text-3xl md:text-5xl font-black text-slate-900 dark:text-white m-0 leading-tight">
          Git &amp; GitHub
          <br />
          <span className="text-orange-500 dark:text-orange-400">
            From Zero to Your First Push
          </span>
        </h1>
        <p className="title-tagline text-sm md:text-base text-slate-600 dark:text-slate-300 m-0">
          The complete visual guide to modern local version control and cloud
          collaboration for developers.
        </p>

        <div className="grid grid-cols-3 gap-2.5 py-1">
          <div className="p-2.5 rounded bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex flex-col gap-0.5">
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Curriculum
            </span>
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              23 Visual Slides
            </span>
          </div>
          <div className="p-2.5 rounded bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex flex-col gap-0.5">
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Learning Mode
            </span>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              Interactive CLI
            </span>
          </div>
          <div className="p-2.5 rounded bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex flex-col gap-0.5">
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Skill Level
            </span>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
              Zero to Hero
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={onStart}
            className="btn-start-course inline-flex items-center gap-2 px-5 py-2.5 rounded bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold cursor-pointer transition-all shadow-md active:scale-95"
          >
            Start Workshop
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            or press{" "}
            <kbd className="kbd px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs">
              Space
            </kbd>{" "}
            /{" "}
            <kbd className="kbd px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs">
              →
            </kbd>
          </span>
        </div>
      </div>

      <div className="lg:col-span-6 flex flex-col flex-1 h-full min-h-0">
        <ImageFrame
          src="/images/git/git_four_areas.jpg"
          alt="Git 4 Areas Architecture"
          caption="Full Lifecycle Architecture: Working Directory ➔ Staging ➔ Local Repo ➔ GitHub"
          badge="Architecture"
        />
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 2: WHAT ARE GIT AND GITHUB?
// ==========================================
export function Slide2GitVsGithub() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={2}
        badgeText="CORE ARCHITECTURE"
        title="Git vs. GitHub: The Tool vs. The Platform"
        subtitle="Understanding the clear boundary between the local version control engine and the cloud hosting service."
        badgeColor="amber"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-6 flex flex-col gap-3 justify-between">
          <div className="info-card p-4 rounded bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 border-l-4 border-l-orange-500 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <GitBranch className="w-4 h-4 text-orange-500 dark:text-orange-400 shrink-0" />
                Git (The Local Engine)
              </h4>
              <span className="text-[10px] px-2 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 font-bold">
                Local Software
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
              A <strong>version control system</strong> installed on your
              machine. Tracks exact file revisions, branches, and commits
              offline in the hidden{" "}
              <code className="text-orange-600 dark:text-orange-400">
                .git/
              </code>{" "}
              directory.
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
              <span>• Runs 100% Offline</span>
              <span>• Instant Branching</span>
              <span>• Cryptographic Integrity</span>
            </div>
          </div>

          <div className="info-card p-4 rounded bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 border-l-4 border-l-purple-500 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <FolderGit2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                GitHub (The Cloud Platform)
              </h4>
              <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-bold">
                Cloud Service
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
              A <strong>cloud hosting platform</strong> for Git repositories.
              Enables global team collaboration, code reviews, Pull Requests,
              issues, and automated CI/CD deployments.
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
              <span>• Remote Backups</span>
              <span>• Pull Requests (PR)</span>
              <span>• CI/CD Automation</span>
            </div>
          </div>

          <div className="p-3 rounded bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs flex items-center gap-2">
            <span className="text-base">💡</span>
            <span>
              <strong>Key takeaway:</strong> You can use Git forever without
              GitHub, but you need Git to push code to GitHub.
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center">
          <ImageFrame
            src="/images/git_flow_hero.jpg"
            alt="Git to GitHub Relationship Flow"
            caption="The Connection: Local Computer (Git) ➔ Cloud Remote (GitHub)"
            badge="Flow Diagram"
          />
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 3: WHY DO WE NEED GIT?
// ==========================================
export function Slide3WhyGit() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={3}
        badgeText="THE PROBLEM &amp; SOLUTION"
        title="Why Every Software Engineer Uses Git"
        subtitle="Eliminating the nightmare of lost code, zip duplicates, and blind file overwrites."
        badgeColor="orange"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="info-card lg:col-span-6 p-4 rounded bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-500/30 flex flex-col justify-between gap-3 shadow-xs">
          <div className="flex items-center justify-between border-b border-rose-200 dark:border-rose-500/20 pb-2">
            <h4 className="text-xs font-bold text-rose-700 dark:text-rose-300 flex items-center gap-1.5 uppercase tracking-wider">
              <span className="text-rose-500 dark:text-rose-400 text-base">
                ✕
              </span>{" "}
              The Old Nightmare (Without Git)
            </h4>
            <span className="text-[10px] px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-400 font-bold">
              CHAOS
            </span>
          </div>
          <div className="flex flex-col gap-2 text-[11px] bg-slate-900 dark:bg-slate-950 p-3 rounded border border-rose-200 dark:border-rose-500/20 font-mono">
            <div className="text-slate-400">📁 desktop/my-project/</div>
            <div className="text-slate-400 pl-4">├── 📦 project-final.zip</div>
            <div className="text-slate-400 pl-4">├── 📦 project-final2.zip</div>
            <div className="text-slate-400 pl-4">
              ├── 📦 project-final-REAL.zip
            </div>
            <div className="text-rose-400 font-bold pl-4">
              └── 📦 project-final-REAL-v2-final.zip (which one works?)
            </div>
          </div>
          <ul className="list-none p-0 m-0 flex flex-col gap-2 text-xs text-rose-900 dark:text-rose-200">
            <li className="flex items-center gap-2">
              <span className="text-rose-500 dark:text-rose-400 font-bold">
                ✗
              </span>{" "}
              Accidentally deleting working code with no undo
            </li>
            <li className="flex items-center gap-2">
              <span className="text-rose-500 dark:text-rose-400 font-bold">
                ✗
              </span>{" "}
              Two teammates overwriting each other's files
            </li>
            <li className="flex items-center gap-2">
              <span className="text-rose-500 dark:text-rose-400 font-bold">
                ✗
              </span>{" "}
              Zero audit trail of who broke production or when
            </li>
          </ul>
        </div>

        <div className="info-card lg:col-span-6 p-4 rounded bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/30 flex flex-col justify-between gap-3 shadow-xs">
          <div className="flex items-center justify-between border-b border-emerald-200 dark:border-emerald-500/20 pb-2">
            <h4 className="text-xs font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5 uppercase tracking-wider">
              <span className="text-emerald-500 dark:text-emerald-400 text-base">
                ✓
              </span>{" "}
              The Modern Solution (With Git)
            </h4>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-bold">
              CONFIDENCE
            </span>
          </div>
          <div className="flex flex-col gap-2 text-[11px] bg-slate-900 dark:bg-slate-950 p-3 rounded border border-emerald-200 dark:border-emerald-500/20 font-mono">
            <div className="text-slate-400">📁 my-project/</div>
            <div className="text-emerald-400 font-bold pl-4">
              ├── 📁 .git/ (entire infinite history stored here)
            </div>
            <div className="text-slate-200 pl-4">├── 📄 src/index.js</div>
            <div className="text-slate-200 pl-4">
              └── 📄 README.md (clean, single folder, no zip copies)
            </div>
          </div>
          <ul className="list-none p-0 m-0 flex flex-col gap-2 text-xs text-emerald-900 dark:text-emerald-200">
            <li className="flex items-center gap-2">
              <span className="text-emerald-500 dark:text-emerald-400 font-bold">
                ✓
              </span>{" "}
              <strong>Time Machine:</strong> Jump to any commit in your project
              history
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500 dark:text-emerald-400 font-bold">
                ✓
              </span>{" "}
              <strong>Safe Sandbox:</strong> Branch off and experiment without
              risking main
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500 dark:text-emerald-400 font-bold">
                ✓
              </span>{" "}
              <strong>Full Accountability:</strong> Every line has author and
              reason stamped
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 4: THE 4 ESSENTIAL GIT AREAS
// ==========================================
export function Slide4FourAreas() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={4}
        badgeText="CORE ARCHITECTURE"
        title="The 4 Essential Git Areas"
        subtitle="How your code travels between your working disk, staging index, commit history, and GitHub."
        badgeColor="blue"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <ImageFrame
            src="/images/git/git_four_areas.jpg"
            alt="Git 4 Areas Diagram"
            caption="The Complete Lifecycle: Working Directory ➔ Staging Area ➔ Local Repo ➔ Remote Repo"
            badge="Core Diagram"
          />
        </div>
        <div className="lg:col-span-5 flex flex-col justify-between gap-2.5">
          <div className="p-3 rounded bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-500/30 flex items-start gap-2.5">
            <span className="w-6 h-6 rounded bg-sky-100 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 font-bold text-xs flex items-center justify-center shrink-0">
              1
            </span>
            <div>
              <div className="text-xs font-bold text-sky-700 dark:text-sky-300">
                Working Directory
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-300">
                Your actual files on disk you edit in VS Code. Changes are
                untracked or modified.
              </div>
            </div>
          </div>

          <div className="p-3 rounded bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-500/30 flex items-start gap-2.5">
            <span className="w-6 h-6 rounded bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold text-xs flex items-center justify-center shrink-0">
              2
            </span>
            <div>
              <div className="text-xs font-bold text-amber-700 dark:text-amber-300">
                Staging Area (Index){" "}
                <code className="text-amber-600 dark:text-amber-400 font-mono text-[10px]">
                  git add
                </code>
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-300">
                The preparation lounge. You curate exactly which file changes
                will be saved in the next snapshot.
              </div>
            </div>
          </div>

          <div className="p-3 rounded bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/30 flex items-start gap-2.5">
            <span className="w-6 h-6 rounded bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 font-bold text-xs flex items-center justify-center shrink-0">
              3
            </span>
            <div>
              <div className="text-xs font-bold text-purple-700 dark:text-purple-300">
                Local Repository{" "}
                <code className="text-purple-600 dark:text-purple-400 font-mono text-[10px]">
                  git commit
                </code>
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-300">
                Your local database inside{" "}
                <code className="text-purple-700 dark:text-purple-300 font-mono">
                  .git/
                </code>{" "}
                storing permanent commit snapshots with cryptographic hashes.
              </div>
            </div>
          </div>

          <div className="p-3 rounded bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 flex items-start gap-2.5">
            <span className="w-6 h-6 rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0">
              4
            </span>
            <div>
              <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
                Remote Repository (GitHub){" "}
                <code className="text-emerald-600 dark:text-emerald-400 font-mono text-[10px]">
                  git push
                </code>
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-300">
                The cloud copy hosted on GitHub for team collaboration, code
                reviews, and remote backups.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 5: STEP 1 - CHECK IF GIT IS INSTALLED
// ==========================================
export function Slide5CheckInstall() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={5}
        badgeText="STEP 1: INSTALLATION"
        title="Check if Git Is Installed"
        subtitle="Verifying your terminal environment before beginning your developer workflow."
        badgeColor="green"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-6 flex flex-col justify-between gap-3">
          <TerminalBlock
            title="Terminal — Shell Verification"
            copyText="git --version"
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>git --version</span>
            </div>
            <div className="text-emerald-400 font-bold mt-1 text-sm">
              git version 2.45.2
            </div>
            <div className="text-slate-500 mt-2 text-[11px]">
              # If installed, Git prints its active version string.
            </div>
          </TerminalBlock>

          <div className="alert-callout tip p-3.5 rounded bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-sky-800 dark:text-sky-300 text-xs flex items-start gap-2.5">
            <span className="text-base">✓</span>
            <div>
              If a version string like{" "}
              <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-900 dark:text-white font-mono">
                git version 2.x.x
              </code>{" "}
              is printed, Git is successfully configured on your machine!
            </div>
          </div>
        </div>

        <div className="info-card lg:col-span-6 p-4 rounded bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 flex flex-col justify-between gap-3 shadow-xs">
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              What if Git is not installed?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              If you get{" "}
              <code className="text-rose-600 dark:text-rose-400 font-mono">
                command not found: git
              </code>
              , install it for your OS in 30 seconds:
            </p>
            <div className="flex flex-col gap-2.5 text-xs">
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-slate-700 dark:text-slate-300">
                  macOS:
                </span>
                <code className="text-sky-600 dark:text-sky-400 font-mono">
                  xcode-select --install
                </code>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-slate-700 dark:text-slate-300">
                  Windows:
                </span>
                <a
                  href="https://git-scm.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange-600 dark:text-orange-400 hover:underline"
                >
                  git-scm.com (Git Bash)
                </a>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-slate-700 dark:text-slate-300">
                  Ubuntu/Debian:
                </span>
                <code className="text-emerald-600 dark:text-emerald-400 font-mono">
                  sudo apt install git
                </code>
              </div>
            </div>
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 italic">
            Tip: Git Bash is the recommended command terminal for Windows
            developers.
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 6: STEP 2 - BASIC GIT CONFIGURATION
// ==========================================
export function Slide6GitConfig() {
  const configScript = `git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main`;

  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={6}
        badgeText="STEP 2: SETUP IDENTITY"
        title="Configure Your Developer Identity"
        subtitle="Git stamps your name and email onto every commit snapshot you create."
        badgeColor="purple"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-7 flex flex-col justify-between gap-3">
          <TerminalBlock
            title="Terminal — Global Identity Setup"
            copyText={configScript}
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>git config --global user.name "Alice Chen"</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>git config --global user.email "alice@example.com"</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>git config --global init.defaultBranch main</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-3">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>git config --global --list</span>
            </div>
            <div className="text-emerald-400  text-xs mt-1">
              user.name=Alice Chen
              <br />
              user.email=alice@example.com
              <br />
              init.defaultBranch=main
            </div>
          </TerminalBlock>

          <div className="p-3 rounded bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-800 dark:text-purple-300 text-xs flex items-center gap-2">
            <span>⚙️</span>
            <span>
              The{" "}
              <code className="bg-slate-200 dark:bg-slate-800 px-1 rounded text-purple-700 dark:text-purple-200 font-mono">
                --global
              </code>{" "}
              flag applies these settings across all repositories on your
              computer.
            </span>
          </div>
        </div>

        <div className="info-card lg:col-span-5 p-4 rounded bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 flex flex-col justify-between gap-3 shadow-xs">
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Why Does Git Need Your Email?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              GitHub matches the commit author email to your GitHub profile.
              This ensures your commits earn green contribution squares on your
              profile activity graph!
            </p>

            <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-1.5">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                Live GitHub Commit Badge Preview:
              </span>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-xs text-white">
                  AC
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    Alice Chen{" "}
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-normal">
                      Verified ✓
                    </span>
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                    alice@example.com • 2 mins ago
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="alert-callout warning text-[11px] text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/10 p-2.5 rounded border border-amber-200 dark:border-amber-500/20">
            <div>
              <strong>Note:</strong> Git local identity is purely metadata, not
              your GitHub login password.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 7: STEP 3 - CREATE A NEW PROJECT
// ==========================================
export function Slide7CreateProject() {
  const script = `mkdir my-website
cd my-website
echo "# My Awesome Website" > README.md
echo "<h1>Hello World</h1>" > index.html`;

  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={7}
        badgeText="STEP 3: WORKSPACE SETUP"
        title="Create Your Project Directory"
        subtitle="Setting up a clean folder structure before initializing version control."
        badgeColor="blue"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-7 flex flex-col justify-between gap-3">
          <TerminalBlock
            title="Terminal — Create Project Workspace"
            copyText={script}
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>mkdir my-website</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>cd my-website</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>echo "# My Awesome Website" &gt; README.md</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>
                echo "&lt;h1&gt;Hello World&lt;/h1&gt;" &gt; index.html
              </span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-3">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>ls -la</span>
            </div>
            <div className="text-slate-400  text-xs mt-1">
              total 8<br />
              -rw-r--r-- 1 user staff 21 README.md
              <br />
              -rw-r--r-- 1 user staff 23 index.html
            </div>
          </TerminalBlock>

          <div className="p-3 rounded bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-800 dark:text-blue-300 text-xs flex items-center gap-2">
            <span>📁</span>
            <span>
              We now have a project folder with 2 files, but Git is{" "}
              <strong>not</strong> tracking it yet!
            </span>
          </div>
        </div>

        <div className="info-card lg:col-span-5 p-4 rounded bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 flex flex-col justify-between gap-3 shadow-xs">
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Folder Tree State
            </h4>
            <div className="p-3.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-xs flex flex-col gap-2">
              <div className="text-blue-600 dark:text-blue-400 font-bold">
                📁 my-website/
              </div>
              <div className="text-slate-700 dark:text-slate-300 pl-4">
                ├── 📄 README.md{" "}
                <span className="text-slate-500 text-[10px]">
                  (Documentation)
                </span>
              </div>
              <div className="text-slate-700 dark:text-slate-300 pl-4">
                └── 📄 index.html{" "}
                <span className="text-slate-500 text-[10px]">(Web page)</span>
              </div>
            </div>
          </div>

          <div className="alert-callout warning p-3 rounded bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs flex flex-col gap-1">
            <span className="font-bold">⚠️ Notice:</span>
            <span>
              At this moment, this is an ordinary folder. If you edit or delete
              files, there is no undo or history until we initialize Git in the
              next step.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 8: STEP 4 - INITIALIZE GIT (GIT INIT)
// ==========================================
export function Slide8GitInit() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={8}
        badgeText="STEP 4: INITIALIZE REPO"
        title="Initialize Git with git init"
        subtitle="Transforming a plain folder into an intelligent, version-controlled repository."
        badgeColor="orange"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-5 flex flex-col justify-between gap-3">
          <TerminalBlock title="Terminal — git init" copyText="git init">
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>git init</span>
            </div>
            <div className="text-emerald-400 font-bold mt-2 text-sm">
              Initialized empty Git repository in /my-website/.git/
            </div>
            <div className="text-slate-400  text-xs mt-3">
              # Notice your terminal prompt now displays branch '(main)'!
            </div>
          </TerminalBlock>

          <div className="alert-callout warning p-3.5 rounded bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs flex flex-col gap-1.5">
            <span className="font-bold flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              Golden Rule:
            </span>
            <span>
              <strong>NEVER delete or manually edit the .git folder!</strong>{" "}
              That hidden folder contains your repository's entire history and
              commit timeline.
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <ImageFrame
            src="/images/git/git_init_dotgit.jpg"
            alt="Inside .git Directory"
            caption="What git init creates: HEAD pointer, repository config, and object database."
            badge="Internal Structure"
          />
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 9: STEP 5 - CHECK STATUS (GIT STATUS)
// ==========================================
export function Slide9GitStatus() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={9}
        badgeText="STEP 5: THE COMPASS"
        title="Check Status with git status"
        subtitle="Your most vital diagnostic command — run git status whenever you are unsure."
        badgeColor="amber"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-6 flex flex-col justify-between gap-3">
          <TerminalBlock
            title="Terminal — git status diagnostic"
            copyText="git status"
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>git status</span>
            </div>
            <div className="text-slate-300 mt-1">
              On branch <span className="text-cyan-400 font-bold">main</span>
            </div>
            <div className="text-slate-400 text-[11px]">No commits yet</div>
            <div className="text-slate-400 text-[11px] mt-2">
              Untracked files:
            </div>
            <div className="text-slate-500 text-[11px] pl-2">
              (use "git add &lt;file&gt;..." to include in what will be
              committed)
            </div>
            <div className="text-rose-400 font-bold pl-4 mt-1">README.md</div>
            <div className="text-rose-400 font-bold pl-4">index.html</div>
            <div className="text-slate-400 text-[11px] mt-2">
              nothing added to commit but untracked files present
            </div>
          </TerminalBlock>

          <div className="alert-callout info p-3 rounded bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-800 dark:text-rose-300 text-xs flex items-center gap-2">
            <span className="font-bold text-rose-600 dark:text-rose-400">
              RED
            </span>
            <span>
              Files listed in red are <strong>Untracked</strong>: Git sees them
              on disk, but they are not yet part of your commit snapshot.
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center">
          <ImageFrame
            src="/images/git/git_lifecycle_states.jpg"
            alt="Git File Lifecycle States"
            caption="Traffic Light: Untracked (Red) ➔ Staged (Green) ➔ Committed (Blue)"
            badge="Lifecycle States"
          />
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 10: STEP 6 - STAGING WITH GIT ADD
// ==========================================
export function Slide10GitAdd() {
  const addScript = `git add README.md index.html
git status`;

  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={10}
        badgeText="STEP 6: STAGING AREA"
        title="Stage Files with git add"
        subtitle="Selecting and queuing specific file changes for the upcoming snapshot."
        badgeColor="green"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-6 flex flex-col justify-between gap-3">
          <TerminalBlock title="Terminal — Staging files" copyText={addScript}>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>git add README.md index.html</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>git status</span>
            </div>
            <div className="text-slate-300 mt-1">
              On branch <span className="text-cyan-400 font-bold">main</span>
            </div>
            <div className="text-slate-400 text-[11px]">No commits yet</div>
            <div className="text-emerald-400 text-xs font-bold mt-2">
              Changes to be committed:
            </div>
            <div className="text-slate-500 text-[11px] pl-2">
              (use "git rm --cached &lt;file&gt;..." to unstage)
            </div>
            <div className="text-emerald-400 font-bold pl-4 mt-1">
              new file: README.md
            </div>
            <div className="text-emerald-400 font-bold pl-4">
              new file: index.html
            </div>
          </TerminalBlock>

          <div className="alert-callout tip p-3 rounded bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
            <span className="font-bold text-emerald-600 dark:text-emerald-400">
              GREEN
            </span>
            <span>
              Files now turned <strong>GREEN</strong>! They are safely staged in
              the index, ready for the commit snapshot.
            </span>
          </div>
        </div>

        <div className="info-card lg:col-span-6 p-4 rounded bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 flex flex-col justify-between gap-3 shadow-xs">
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              3 Ways to Stage Changes
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
                <code className="text-sky-600 dark:text-sky-400 font-bold font-mono">
                  git add index.html
                </code>
                <span className="text-slate-600 dark:text-slate-300 text-[11px]">
                  Stages only the specified single file. Safest and most
                  precise.
                </span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
                <code className="text-emerald-600 dark:text-emerald-400 font-bold font-mono">
                  git add .
                </code>
                <span className="text-slate-600 dark:text-slate-300 text-[11px]">
                  Stages all new, modified, and deleted files in the current
                  folder.
                </span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
                <code className="text-amber-600 dark:text-amber-400 font-bold font-mono">
                  git add -A
                </code>
                <span className="text-slate-600 dark:text-slate-300 text-[11px]">
                  Stages all changes across the entire repository root.
                </span>
              </div>
            </div>
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 italic">
            Pro Tip: Only stage files that belong to the same logical feature or
            bug fix.
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 11: STEP 7 - CHECK STAGED CHANGES & DIFF
// ==========================================
export function Slide11GitDiff() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={11}
        badgeText="STEP 7: DIFF INSPECTION"
        title="Inspect Line Diffs Before Committing"
        subtitle="Reviewing exactly what lines were added, modified, or deleted."
        badgeColor="blue"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-7 flex flex-col justify-between gap-3">
          <TerminalBlock
            title="Terminal — git diff --staged"
            copyText="git diff --staged"
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>git diff --staged</span>
            </div>
            <div className="text-slate-500 text-[11px] mt-1">
              diff --git a/index.html b/index.html
            </div>
            <div className="text-slate-500 text-[11px]">--- /dev/null</div>
            <div className="text-slate-500 text-[11px]">+++ b/index.html</div>
            <div className="text-sky-400 text-xs ">@@ -0,0 +1,5 @@</div>
            <div className="text-emerald-400  text-xs">
              +&lt;!DOCTYPE html&gt;
            </div>
            <div className="text-emerald-400  text-xs">+&lt;html&gt;</div>
            <div className="text-emerald-400  text-xs">+ &lt;body&gt;</div>
            <div className="text-emerald-400  text-xs">
              + &lt;h1&gt;My Awesome Website&lt;/h1&gt;
            </div>
            <div className="text-emerald-400  text-xs">+ &lt;/body&gt;</div>
            <div className="text-emerald-400  text-xs">+&lt;/html&gt;</div>
          </TerminalBlock>

          <div className="p-3 rounded bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-sky-800 dark:text-sky-300 text-xs flex items-center gap-2">
            <span>🔍</span>
            <span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                +
              </span>{" "}
              indicates added lines, while{" "}
              <span className="text-rose-600 dark:text-rose-400 font-bold">
                -
              </span>{" "}
              indicates removed lines.
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 p-4 rounded bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 flex flex-col justify-between gap-3 shadow-xs">
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Essential Diff Commands
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <code className="text-sky-600 dark:text-sky-400 font-bold font-mono">
                  git diff
                </code>
                <p className="text-slate-600 dark:text-slate-300 text-[11px] m-0 mt-0.5">
                  Compares Working Directory changes that have NOT yet been
                  staged.
                </p>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <code className="text-emerald-600 dark:text-emerald-400 font-bold font-mono">
                  git diff --staged
                </code>
                <p className="text-slate-600 dark:text-slate-300 text-[11px] m-0 mt-0.5">
                  Compares files currently in Staging against your last commit.
                </p>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <code className="text-amber-600 dark:text-amber-400 font-bold font-mono">
                  git restore --staged &lt;file&gt;
                </code>
                <p className="text-slate-600 dark:text-slate-300 text-[11px] m-0 mt-0.5">
                  Unstages a file without losing any of your written code.
                </p>
              </div>
            </div>
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 italic">
            Senior habit: Always review your diffs before committing!
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 12: STEP 8 - CREATE YOUR FIRST COMMIT
// ==========================================
export function Slide12GitCommit() {
  const commitScript =
    'git commit -m "feat: initial commit with README and index"';

  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={12}
        badgeText="STEP 8: PERMANENT SNAPSHOT"
        title="Save Permanent Snapshots with git commit"
        subtitle="Freezing your staged changes forever into Git history with a cryptographic hash."
        badgeColor="purple"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-6 flex flex-col justify-between gap-3">
          <TerminalBlock
            title="Terminal — git commit -m"
            copyText={commitScript}
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>
                git commit -m "feat: initial commit with README and index"
              </span>
            </div>
            <div className="text-emerald-400 font-bold mt-2 text-xs">
              [main (root-commit) 4f8a12c] feat: initial commit with README and
              index
            </div>
            <div className="text-slate-300 text-xs mt-1">
              2 files changed, 7 insertions(+)
            </div>
            <div className="text-slate-400 text-[11px]">
              create mode 100644 README.md
            </div>
            <div className="text-slate-400 text-[11px]">
              create mode 100644 index.html
            </div>
          </TerminalBlock>

          <div className="p-3.5 rounded bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-800 dark:text-purple-300 text-xs flex flex-col gap-1.5">
            <span className="font-bold flex items-center gap-1.5">
              <span>📸</span> Anatomy of a Great Commit Message:
            </span>
            <span className="text-slate-700 dark:text-slate-300">
              •{" "}
              <code className="text-purple-700 dark:text-purple-300 font-mono">
                feat:
              </code>{" "}
              new user feature &nbsp;|&nbsp;{" "}
              <code className="text-emerald-700 dark:text-emerald-300 font-mono">
                fix:
              </code>{" "}
              bug patch &nbsp;|&nbsp;{" "}
              <code className="text-sky-700 dark:text-sky-300 font-mono">
                docs:
              </code>{" "}
              markdown update
            </span>
            <span className="text-slate-500 dark:text-slate-400 italic">
              Always write in imperative present tense ("Add login form", not
              "Added").
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center">
          <ImageFrame
            src="/images/git/git_commit_snapshots.jpg"
            alt="Git Commits as Immutable Snapshots"
            caption="Each commit is a snapshot pointing to parent commit, author, timestamp, and SHA hash."
            badge="Snapshot Model"
          />
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 13: STEP 9 - VIEW COMMIT HISTORY (GIT LOG)
// ==========================================
export function Slide13GitLog() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={13}
        badgeText="STEP 9: THE TIMELINE"
        title="Explore History with git log"
        subtitle="Navigating your project's commit timeline and visual commit graph."
        badgeColor="blue"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-7 flex flex-col justify-between gap-3">
          <TerminalBlock
            title="Terminal — git log --oneline --graph"
            copyText="git log --oneline --graph --decorate"
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>git log --oneline --graph --decorate</span>
            </div>
            <div className=" text-xs mt-2 flex flex-col gap-1.5">
              <div>
                <span className="text-amber-400 font-bold">*</span>{" "}
                <span className="text-yellow-400 font-bold">9b4d1a2</span> (
                <span className="text-cyan-400 font-bold">HEAD -&gt;</span>{" "}
                <span className="text-emerald-400 font-bold">main</span>) feat:
                add user authentication API
              </div>
              <div>
                <span className="text-amber-400 font-bold">*</span>{" "}
                <span className="text-yellow-400 font-bold">5c2e8f1</span> feat:
                add responsive navigation bar
              </div>
              <div>
                <span className="text-amber-400 font-bold">*</span>{" "}
                <span className="text-yellow-400 font-bold">4f8a12c</span> feat:
                initial commit with README and index
              </div>
            </div>
          </TerminalBlock>

          <div className="p-3 rounded bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-sky-800 dark:text-sky-300 text-xs flex items-center gap-2">
            <span>📍</span>
            <span>
              <strong>HEAD</strong> is the bookmark pointer that indicates which
              branch and commit you are currently looking at.
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center">
          <ImageFrame
            src="/images/git/git_command_syntax.jpg"
            alt="Anatomy of a Git Command"
            caption="Understanding Git CLI syntax: Core Tool, Action Verb, Flag/Option, and Arguments."
            badge="CLI Anatomy"
          />
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 14: STEP 10 - WHAT IS A BRANCH?
// ==========================================
export function Slide14WhatIsBranch() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={14}
        badgeText="STEP 10: ISOLATED WORKSPACES"
        title="Isolate Features with Git Branches"
        subtitle="Developing new features in parallel without ever breaking the main production branch."
        badgeColor="purple"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-5 flex flex-col justify-between gap-3">
          <div className="p-4 rounded bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 flex flex-col gap-2 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Why Branching Is Magic in Git
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
              In Git, a branch is merely a <strong>41-byte pointer</strong> to a
              commit hash. Creating a branch is virtually instantaneous (0.001s)
              and takes zero extra disk space.
            </p>
          </div>

          <div className="p-3.5 rounded bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-800 dark:text-purple-300 text-xs flex flex-col gap-1.5">
            <span className="font-bold">🌿 Branch Naming Conventions:</span>
            <div className="flex flex-col gap-1 text-[11px] text-slate-700 dark:text-slate-300 font-mono">
              <span>
                •{" "}
                <code className="text-cyan-600 dark:text-cyan-400">
                  feature/user-login
                </code>{" "}
                (New capabilities)
              </span>
              <span>
                •{" "}
                <code className="text-emerald-600 dark:text-emerald-400">
                  fix/checkout-button
                </code>{" "}
                (Bug patches)
              </span>
              <span>
                •{" "}
                <code className="text-purple-600 dark:text-purple-400">
                  docs/api-guide
                </code>{" "}
                (Documentation)
              </span>
            </div>
          </div>

          <div className="p-3 rounded bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
            <span>🛡️</span>
            <span>
              <strong>Golden Rule:</strong> The{" "}
              <code className="text-slate-900 dark:text-white font-mono">
                main
              </code>{" "}
              branch must always be stable and deployable.
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <ImageFrame
            src="/images/git/git_branch_model.jpg"
            alt="Git Branching and Merging Diagram"
            caption="Visual Flow: feature/login branching from main, independent commits, and merging back into C5."
            badge="Branch Model"
          />
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 15: STEP 11 - CREATE AND SWITCH BRANCHES
// ==========================================
export function Slide15BranchCommands() {
  const branchScript = `git switch -c feature/navbar
git commit -am "feat: add navigation component"
git switch main
git merge feature/navbar`;

  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={15}
        badgeText="STEP 11: BRANCH MANAGEMENT"
        title="Modern Branch Commands: switch &amp; merge"
        subtitle="Creating, switching, merging, and deleting feature branches."
        badgeColor="green"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-7 flex flex-col justify-between gap-3">
          <TerminalBlock
            title="Terminal — Modern Branch Workflow"
            copyText={branchScript}
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>git switch -c feature/navbar</span>
            </div>
            <div className="text-emerald-400 text-xs mt-1">
              Switched to a new branch 'feature/navbar'
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>git commit -am "feat: add navigation component"</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>git switch main</span>
            </div>
            <div className="text-emerald-400 text-xs mt-1">
              Switched to branch 'main'
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>git merge feature/navbar</span>
            </div>
            <div className="text-slate-300 text-xs mt-1">
              Fast-forward &nbsp;|&nbsp; 1 file changed, 12 insertions(+)
            </div>
          </TerminalBlock>

          <div className="p-3 rounded bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
            <span>⚡</span>
            <span>
              <code className="bg-slate-200 dark:bg-slate-800 px-1.5 rounded text-slate-900 dark:text-white font-mono">
                git switch
              </code>{" "}
              is the modern syntax introduced in Git 2.23 (cleaner than legacy{" "}
              <code className="text-slate-500 dark:text-slate-400 font-mono">
                git checkout
              </code>
              ).
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 p-4 rounded bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 flex flex-col justify-between gap-3 shadow-xs">
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Branch Command Cheat Card
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold font-mono">
                  git branch
                </span>
                <p className="text-slate-600 dark:text-slate-300 text-[11px] font-sans m-0 mt-0.5">
                  List all local branches (* marks current active branch).
                </p>
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold font-mono">
                  git switch -c &lt;branch&gt;
                </span>
                <p className="text-slate-600 dark:text-slate-300 text-[11px] font-sans m-0 mt-0.5">
                  Create a new branch and immediately switch into it.
                </p>
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-purple-600 dark:text-purple-400 font-bold font-mono">
                  git merge &lt;branch&gt;
                </span>
                <p className="text-slate-600 dark:text-slate-300 text-[11px] font-sans m-0 mt-0.5">
                  Integrates changes from target branch into current branch.
                </p>
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-rose-600 dark:text-rose-400 font-bold font-mono">
                  git branch -d &lt;branch&gt;
                </span>
                <p className="text-slate-600 dark:text-slate-300 text-[11px] font-sans m-0 mt-0.5">
                  Safely deletes branch once merged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 16: STEP 12 - RESOLVING MERGE CONFLICTS
// ==========================================
export function Slide16MergeConflicts() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={16}
        badgeText="STEP 12: CONFLICT RESOLUTION"
        title="Resolving Merge Conflicts Like a Pro"
        subtitle="What happens when two branches touch the exact same lines, and how to fix it cleanly."
        badgeColor="red"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-5 flex flex-col justify-between gap-3">
          <div className="p-4 rounded bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 flex flex-col gap-2 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Don't Panic: Conflicts Are Normal
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
              When two branches modify the same line, Git stops and asks the
              human developer to decide which version to keep.
            </p>
          </div>

          <div className="p-3.5 rounded bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-800 dark:text-rose-300 text-xs flex flex-col gap-1.5">
            <span className="font-bold">4-Step Resolution Recipe:</span>
            <div className="flex flex-col gap-1 text-[11px] text-slate-700 dark:text-slate-300">
              <span>1. Open the file in VS Code</span>
              <span>
                2. Click <strong>Accept Current</strong> or{" "}
                <strong>Accept Incoming</strong>
              </span>
              <span>
                3. Remove conflict markers (
                <code className="text-rose-600 dark:text-rose-400 font-mono">
                  &lt;&lt;&lt;&lt;&lt;&lt;&lt;
                </code>
                ,{" "}
                <code className="text-rose-600 dark:text-rose-400 font-mono">
                  =======
                </code>
                ,{" "}
                <code className="text-rose-600 dark:text-rose-400 font-mono">
                  &gt;&gt;&gt;&gt;&gt;&gt;&gt;
                </code>
                )
              </span>
              <span>
                4. Run{" "}
                <code className="text-emerald-600 dark:text-emerald-400 font-mono">
                  git add .
                </code>{" "}
                &amp;{" "}
                <code className="text-emerald-600 dark:text-emerald-400 font-mono">
                  git commit
                </code>{" "}
                to finish!
              </span>
            </div>
          </div>

          <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300">
            VS Code highlights conflicts with quick one-click resolution
            buttons!
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <ImageFrame
            src="/images/git/git_conflict_editor.jpg"
            alt="Merge Conflict in Editor"
            caption="Visual Conflict Editor: Accept Current Change (HEAD) vs Accept Incoming Change (feature)"
            badge="Conflict Editor"
          />
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 17: STEP 13 - CONNECT LOCAL REPO TO GITHUB
// ==========================================
export function Slide17ConnectGitHub() {
  const remoteScript = `git remote add origin https://github.com/user/my-website.git
git branch -M main
git remote -v`;

  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={17}
        badgeText="STEP 13: CLOUD CONNECTION"
        title="Connect Your Local Repo to GitHub"
        subtitle="Creating a remote repository on GitHub and linking it via origin URL."
        badgeColor="purple"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-6 flex flex-col justify-between gap-3">
          <TerminalBlock
            title="Terminal — Link Remote Origin"
            copyText={remoteScript}
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>
                git remote add origin https://github.com/user/my-website.git
              </span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>git branch -M main</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>git remote -v</span>
            </div>
            <div className="text-emerald-400  text-xs mt-1">
              origin https://github.com/user/my-website.git (fetch)
              <br />
              origin https://github.com/user/my-website.git (push)
            </div>
          </TerminalBlock>

          <div className="p-3 rounded bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-800 dark:text-purple-300 text-xs flex items-center gap-2">
            <span>🌐</span>
            <span>
              <code className="bg-slate-200 dark:bg-slate-800 px-1.5 rounded text-purple-700 dark:text-purple-200 font-mono">
                origin
              </code>{" "}
              is the standard nickname Git uses to refer to your main remote
              cloud repository URL.
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center">
          <ImageFrame
            src="/images/github_new_repo_ui.jpg"
            alt="GitHub Create New Repository UI"
            caption="Step 1: Create an empty repository on GitHub without README (we already have local files)."
            badge="GitHub UI"
          />
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 18: STEP 14 - PUSH & PULL WITH GITHUB
// ==========================================
export function Slide18PushPull() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={18}
        badgeText="STEP 14: CLOUD SYNC"
        title="Push &amp; Pull with GitHub Cloud"
        subtitle="Uploading your local commits to GitHub and pulling updates down from teammates."
        badgeColor="green"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-6 flex flex-col justify-between gap-3">
          <TerminalBlock
            title="Terminal — git push -u origin main"
            copyText="git push -u origin main"
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">
                $
              </span>
              <span>git push -u origin main</span>
            </div>
            <div className="text-slate-300 text-xs mt-1">
              Enumerating objects: 6, done.
            </div>
            <div className="text-slate-300 text-xs">
              Writing objects: 100% (6/6), 540 bytes, done.
            </div>
            <div className="text-emerald-400 font-bold text-xs mt-1">
              To https://github.com/user/my-website.git
            </div>
            <div className="text-emerald-400 text-xs">
              {" "}
              * [new branch] main -&gt; main
            </div>
            <div className="text-cyan-400 text-xs">
              branch 'main' set up to track 'origin/main'.
            </div>
          </TerminalBlock>

          <div className="p-3.5 rounded bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs flex flex-col gap-1">
            <span className="font-bold">Next pushes become super simple:</span>
            <span className="text-slate-700 dark:text-slate-300">
              Because{" "}
              <code className="text-emerald-700 dark:text-emerald-300 font-mono">
                -u
              </code>{" "}
              sets up upstream tracking, you can now simply run{" "}
              <code className="text-emerald-700 dark:text-emerald-300 font-mono">
                git push
              </code>{" "}
              and{" "}
              <code className="text-emerald-700 dark:text-emerald-300 font-mono">
                git pull
              </code>
              !
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center">
          <ImageFrame
            src="/images/github_repo_view.jpg"
            alt="GitHub Live Repository View"
            caption="Your project is now live on GitHub with complete commit history, branches, and code view!"
            badge="Repository View"
          />
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 19: STEP 15 - WHAT IS .GITIGNORE?
// ==========================================
export function Slide19GitIgnore() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={19}
        badgeText="STEP 15: SECURITY &amp; HYGIENE"
        title="Protect Secrets &amp; Cleanliness with .gitignore"
        subtitle="Telling Git which files and folders must NEVER be tracked or pushed to the cloud."
        badgeColor="orange"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-5 flex flex-col justify-between gap-3">
          <div className="p-4 rounded bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 flex flex-col gap-2 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              What MUST Be in .gitignore:
            </h4>
            <div className="flex flex-col gap-1.5 text-xs text-slate-700 dark:text-slate-300 font-mono">
              <span className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-bold">
                🔒 .env (API Keys, DB Passwords)
              </span>
              <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                📁 node_modules/ (Dependencies)
              </span>
              <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                📁 dist/ &amp; build/ (Bundles)
              </span>
              <span className="flex items-center gap-1.5 text-slate-500">
                📄 .DS_Store (OS metadata)
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-800 dark:text-rose-300 text-xs flex flex-col gap-1">
            <span className="font-bold flex items-center gap-1 text-rose-600 dark:text-rose-400">
              🚨 Critical Security Warning:
            </span>
            <span>
              Never push credentials or{" "}
              <code className="bg-slate-200 dark:bg-slate-800 px-1 rounded text-slate-900 dark:text-white font-mono">
                .env
              </code>{" "}
              to GitHub. Automated bot scanners inspect public repositories in
              under 3 seconds!
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <ImageFrame
            src="/images/git/git_gitignore_flow.jpg"
            alt="Tracked vs Ignored Files"
            caption="Green Shield: Tracked Source Code (.js, .html) vs Red Lock: Ignored (.env, node_modules)"
            badge="Security &amp; Hygiene"
          />
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 20: STEP 16 - GITHUB TEAM COLLABORATION (PR)
// ==========================================
export function Slide20TeamWorkflow() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={20}
        badgeText="STEP 16: PULL REQUESTS"
        title="The Professional GitHub Team Workflow"
        subtitle="How world-class software engineering teams review code and collaborate through Pull Requests."
        badgeColor="blue"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-12 flex flex-col justify-center">
          <ImageFrame
            src="/images/git/github_collaboration_workflow.jpg"
            alt="GitHub Team Collaboration Flow"
            caption="The 7-Step Pipeline: Clone ➔ Feature Branch ➔ Commit ➔ Push ➔ Pull Request ➔ Code Review ➔ Merge to Main"
            badge="Team Pipeline"
          />
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 21: STEP 17 - BEGINNER MISTAKES & RECOVERY
// ==========================================
export function Slide21UndoMistakes() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={21}
        badgeText="STEP 17: THE SAFETY NET"
        title="How to Undo in Git: Emergency Guide"
        subtitle="Four everyday mistakes and the exact terminal commands to recover safely."
        badgeColor="amber"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <ImageFrame
            src="/images/git/git_undo_matrix.jpg"
            alt="How to Undo in Git"
            caption="The Safety Net: In Working Directory (restore) ➔ In Staging (restore --staged) ➔ Committed (revert/amend)"
            badge="Safety Net"
          />
        </div>

        <div className="lg:col-span-6 flex flex-col justify-between gap-2.5">
          <div className="p-3 rounded bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 flex flex-col gap-1 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400">
                1. "I broke a file, take me back to last commit!"
              </span>
              <code className="text-xs text-emerald-600 dark:text-emerald-400 bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded font-mono">
                git restore &lt;file&gt;
              </code>
            </div>
            <span className="text-[11px] text-slate-600 dark:text-slate-300">
              Discards unstaged modifications in the working tree.
            </span>
          </div>

          <div className="p-3 rounded bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 flex flex-col gap-1 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                2. "I staged a file by accident!"
              </span>
              <code className="text-xs text-emerald-600 dark:text-emerald-400 bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded font-mono">
                git restore --staged &lt;file&gt;
              </code>
            </div>
            <span className="text-[11px] text-slate-600 dark:text-slate-300">
              Unstages the file back to working tree without deleting code.
            </span>
          </div>

          <div className="p-3 rounded bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 flex flex-col gap-1 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400">
                3. "Typo in last commit message!"
              </span>
              <code className="text-xs text-emerald-600 dark:text-emerald-400 bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded font-mono">
                git commit --amend -m "..."
              </code>
            </div>
            <span className="text-[11px] text-slate-600 dark:text-slate-300">
              Rewrites the most recent commit message smoothly.
            </span>
          </div>

          <div className="p-3 rounded bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 flex flex-col gap-1 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                4. "Need to switch branches but work unfinished!"
              </span>
              <code className="text-xs text-emerald-600 dark:text-emerald-400 bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded font-mono">
                git stash
              </code>
            </div>
            <span className="text-[11px] text-slate-600 dark:text-slate-300">
              Shelves changes safely; restore later with{" "}
              <code className="text-emerald-600 dark:text-emerald-400 font-mono">
                git stash pop
              </code>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 22: STEP 18 - HANDS-ON STUDENT LAB
// ==========================================
export function Slide22StudentLab() {
  const labScript = `mkdir portfolio && cd portfolio
git init
echo "<h1>My Portfolio</h1>" > index.html
git add . && git commit -m "feat: initial portfolio"
git switch -c feature/styles
echo "body { background: #0f172a; color: #fff; }" > styles.css
git add . && git commit -m "style: dark theme styles"
git switch main
git merge feature/styles
git log --oneline --graph`;

  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={22}
        badgeText="STEP 18: STUDENT LAB"
        title="Hands-on Mission: Your First Git Project"
        subtitle="Put your knowledge into practice with this end-to-end terminal exercise drill."
        badgeColor="green"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-5 p-4 rounded bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 flex flex-col justify-between gap-3 shadow-xs">
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Student Mission Checklist
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              Complete these 6 steps in your terminal to earn your Git badge:
            </p>
            <div className="flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[10px] flex items-center justify-center font-bold">
                  1
                </span>{" "}
                Create &amp; initialize repository
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[10px] flex items-center justify-center font-bold">
                  2
                </span>{" "}
                Stage &amp; commit initial index.html
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[10px] flex items-center justify-center font-bold">
                  3
                </span>{" "}
                Create branch{" "}
                <code className="text-cyan-600 dark:text-cyan-400 font-mono">
                  feature/styles
                </code>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[10px] flex items-center justify-center font-bold">
                  4
                </span>{" "}
                Add styles.css &amp; commit on branch
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[10px] flex items-center justify-center font-bold">
                  5
                </span>{" "}
                Switch to main &amp; merge feature
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[10px] flex items-center justify-center font-bold">
                  6
                </span>{" "}
                Push to GitHub with{" "}
                <code className="text-purple-600 dark:text-purple-400 font-mono">
                  git push
                </code>
              </div>
            </div>
          </div>
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
            🎉 All commands can be copied directly from the terminal block!
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between">
          <TerminalBlock
            title="Terminal — Student Challenge Drill"
            copyText={labScript}
          >
            <div className="term-cmd text-blue-400 font-bold">
              $ mkdir portfolio &amp;&amp; cd portfolio
            </div>
            <div className="term-cmd text-blue-400 font-bold mt-1">
              $ git init
            </div>
            <div className="term-cmd text-blue-400 font-bold mt-1">
              $ echo "&lt;h1&gt;My Portfolio&lt;/h1&gt;" &gt; index.html
            </div>
            <div className="term-cmd text-blue-400 font-bold mt-1">
              $ git add . &amp;&amp; git commit -m "feat: initial portfolio"
            </div>
            <div className="term-cmd text-blue-400 font-bold mt-2">
              $ git switch -c feature/styles
            </div>
            <div className="term-cmd text-blue-400 font-bold mt-1">
              $ echo "body &#123; background: #0f172a; color: #fff; &#125;" &gt;
              styles.css
            </div>
            <div className="term-cmd text-blue-400 font-bold mt-1">
              $ git add . &amp;&amp; git commit -m "style: dark theme styles"
            </div>
            <div className="term-cmd text-blue-400 font-bold mt-2">
              $ git switch main
            </div>
            <div className="term-cmd text-blue-400 font-bold mt-1">
              $ git merge feature/styles
            </div>
            <div className="term-cmd text-blue-400 font-bold mt-1">
              $ git log --oneline --graph
            </div>
            <div className="text-emerald-400 font-bold text-xs mt-1">
              # Mission Accomplished! 🚀
            </div>
          </TerminalBlock>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SLIDE 23: COURSE WRAP UP & CHEAT SHEET
// ==========================================
export function Slide23WrapUp({ onRestart }) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={23}
        badgeText="GRADUATION"
        title="Congratulations! You Have Mastered Git"
        subtitle="Review the golden rules of professional software development and version control."
        badgeColor="purple"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0">
        <div className="lg:col-span-7 flex flex-col justify-between gap-3">
          <div className="p-4 rounded bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 flex flex-col gap-2 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              The 4 Golden Rules of Version Control
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-0.5">
                <span className="text-orange-600 dark:text-orange-400 font-bold">
                  1. Atomic Commits
                </span>
                <span className="text-slate-600 dark:text-slate-300 text-[11px]">
                  Make small, frequent commits for one purpose at a time.
                </span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-0.5">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold">
                  2. Meaningful Messages
                </span>
                <span className="text-slate-600 dark:text-slate-300 text-[11px]">
                  Explain why the change was made in clear imperative sentences.
                </span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-0.5">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                  3. Pull Before Push
                </span>
                <span className="text-slate-600 dark:text-slate-300 text-[11px]">
                  Always sync remote changes to avoid merge conflicts.
                </span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-0.5">
                <span className="text-purple-600 dark:text-purple-400 font-bold">
                  4. Branch for Features
                </span>
                <span className="text-slate-600 dark:text-slate-300 text-[11px]">
                  Never commit broken experiments directly into main.
                </span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-3">
              <img
                src="/images/synergy.png"
                alt="Synergy Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  SYNERGY ACADEMY CERTIFIED
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Module 01: Git &amp; GitHub — Complete
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onRestart}
                className="px-3 py-2 rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors cursor-pointer"
              >
                Restart Course
              </button>
              <a
                href="#/courses"
                className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors no-underline"
              >
                Next Module →
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center">
          <ImageFrame
            src="/images/git/git_four_areas.jpg"
            alt="Complete Git Master Model"
            caption="Keep this mental model in mind for every software project you build!"
            badge="Master Reference"
          />
        </div>
      </div>
    </div>
  );
}

// Master slide registry
export const GIT_SLIDES = [
  {
    id: "slide-1",
    number: 1,
    part: "WELCOME",
    title: "DEVELOPER WORKSHOP",
    Component: Slide1Welcome,
  },
  {
    id: "slide-2",
    number: 2,
    part: "OVERVIEW",
    title: "What Are Git and GitHub?",
    Component: Slide2GitVsGithub,
  },
  {
    id: "slide-3",
    number: 3,
    part: "OVERVIEW",
    title: "Why Do We Need Git?",
    Component: Slide3WhyGit,
  },
  {
    id: "slide-4",
    number: 4,
    part: "OVERVIEW",
    title: "The 4 Core Git Areas",
    Component: Slide4FourAreas,
  },
  {
    id: "slide-5",
    number: 5,
    part: "PART 1: INSTALLATION",
    title: "Check if Git Is Installed",
    Component: Slide5CheckInstall,
  },
  {
    id: "slide-6",
    number: 6,
    part: "PART 1: INSTALLATION",
    title: "Basic Git Configuration",
    Component: Slide6GitConfig,
  },
  {
    id: "slide-7",
    number: 7,
    part: "PART 2: CREATE A PROJECT",
    title: "Create a New Project",
    Component: Slide7CreateProject,
  },
  {
    id: "slide-8",
    number: 8,
    part: "PART 2: CREATE A PROJECT",
    title: "Initialize Git",
    Component: Slide8GitInit,
  },
  {
    id: "slide-9",
    number: 9,
    part: "PART 3: CHECK STATUS",
    title: "git status",
    Component: Slide9GitStatus,
  },
  {
    id: "slide-10",
    number: 10,
    part: "PART 4: STAGING",
    title: "git add",
    Component: Slide10GitAdd,
  },
  {
    id: "slide-11",
    number: 11,
    part: "PART 4: STAGING",
    title: "Check the Staged Changes",
    Component: Slide11GitDiff,
  },
  {
    id: "slide-12",
    number: 12,
    part: "PART 5: COMMIT",
    title: "Create Your First Commit",
    Component: Slide12GitCommit,
  },
  {
    id: "slide-13",
    number: 13,
    part: "PART 5: COMMIT",
    title: "View Commit History",
    Component: Slide13GitLog,
  },
  {
    id: "slide-14",
    number: 14,
    part: "PART 6: BRANCHES",
    title: "What Is a Branch?",
    Component: Slide14WhatIsBranch,
  },
  {
    id: "slide-15",
    number: 15,
    part: "PART 6: BRANCHES",
    title: "Create and Switch Branch",
    Component: Slide15BranchCommands,
  },
  {
    id: "slide-16",
    number: 16,
    part: "PART 7: CONFLICTS",
    title: "Resolving Merge Conflicts",
    Component: Slide16MergeConflicts,
  },
  {
    id: "slide-17",
    number: 17,
    part: "PART 8: GITHUB REMOTE",
    title: "Connect to GitHub",
    Component: Slide17ConnectGitHub,
  },
  {
    id: "slide-18",
    number: 18,
    part: "PART 8: GITHUB REMOTE",
    title: "Push and Pull",
    Component: Slide18PushPull,
  },
  {
    id: "slide-19",
    number: 19,
    part: "PART 9: REPO HYGIENE",
    title: "What Is .gitignore?",
    Component: Slide19GitIgnore,
  },
  {
    id: "slide-20",
    number: 20,
    part: "PART 10: TEAM WORKFLOW",
    title: "The Complete Team Workflow",
    Component: Slide20TeamWorkflow,
  },
  {
    id: "slide-21",
    number: 21,
    part: "PART 11: TROUBLESHOOTING",
    title: "Common Beginner Mistakes",
    Component: Slide21UndoMistakes,
  },
  {
    id: "slide-22",
    number: 22,
    part: "PART 12: HANDS-ON LAB",
    title: "Hands-on Exercise",
    Component: Slide22StudentLab,
  },
  {
    id: "slide-23",
    number: 23,
    part: "COURSE COMPLETE",
    title: "Questions & Wrap Up",
    Component: Slide23WrapUp,
  },
];
