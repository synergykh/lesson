import React, { useState } from "react";
import {
  GitBranch,
  Cloud,
  FolderGit2,
  ShieldCheck,
  Key,
  Lock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  GitPullRequest,
  GitMerge,
  Check,
  Copy,
  Sparkles,
  Terminal,
  FileCode,
  Users,
  Eye,
  Sliders,
  ShieldAlert,
  Cpu,
  Layers,
  ExternalLink,
  History,
  RotateCcw,
  CheckSquare,
} from "lucide-react";
import SlideHeader from "../common/SlideHeader";
import TerminalBlock from "../common/TerminalBlock";
import ImageFrame from "../common/ImageFrame";

// -------------------------------------------------------------
// SLIDE 1: Cloud Architecture & The Remote Model
// -------------------------------------------------------------
export function Slide1CloudArchitecture() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={1}
        totalSlides={8}
        badgeText="FOUNDATIONS & ARCHITECTURE"
        title="Cloud Architecture & The Remote Model"
        subtitle="Understanding Git vs. GitHub, the central hub paradigm, and how remote repositories connect team members."
        badgeColor="purple"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-bold text-xs text-orange-600 dark:text-orange-400">
                  <GitBranch className="w-4 h-4" />
                  <span>Git (The Local Engine)</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded font-bold uppercase bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-500/20">
                  Local Tool
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
                A command-line program running on your local machine. Takes cryptographic snapshots of your project history offline inside the hidden <code className="text-orange-600 dark:text-orange-400 font-mono font-semibold">.git/</code> folder.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">100% Offline</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">SHA Hashes</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Fast Branches</span>
              </div>
            </div>

            <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-bold text-xs text-purple-600 dark:text-purple-400">
                  <Cloud className="w-4 h-4" />
                  <span>GitHub (The Cloud Hub)</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded font-bold uppercase bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20">
                  Cloud Platform
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
                The world's largest cloud hosting service for Git repositories. Empowers distributed teams with Pull Requests, code reviews, issue tracking, and automated CI/CD pipelines.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Cloud Backup</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Pull Requests</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">CI/CD Actions</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2.5 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              The Central "Remote" Paradigm
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                  1. Distributed Architecture
                </span>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed m-0">
                  Every teammate has a 100% complete copy of the commit graph. You commit locally with zero latency, then push when ready to share.
                </p>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                  2. Single Source of Truth
                </span>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed m-0">
                  GitHub acts as the authoritative central hub. Production deployment servers pull strictly from GitHub's protected <code className="text-purple-600 dark:text-purple-400 font-mono font-semibold">main</code> branch.
                </p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/50 text-purple-900 dark:text-purple-300 text-xs flex items-start gap-2.5 shadow-xs">
            <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="font-bold text-purple-950 dark:text-purple-200 block mb-0.5">Understanding "origin":</strong>
              <code className="font-mono text-purple-700 dark:text-purple-300 font-bold">origin</code> is simply Git's default nickname for your primary cloud repository URL. A repo can link to multiple remotes (e.g., <code className="font-mono">origin</code>, <code className="font-mono">upstream</code>, <code className="font-mono">staging</code>).
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4">
          <ImageFrame
              src="/images/git_flow_hero.jpg"
              alt="Git and GitHub Cloud Synchronization Architecture"
              caption="Distributed developer machines pushing commits to GitHub central hub"
              badge="Cloud Architecture"
            />

          <TerminalBlock
            title="bash — Inspecting Remote Connections"
            copyText={`git remote -v\ngit remote show origin`}
          >
            <div className="flex flex-col gap-1 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 select-none">$</span>
                <span className="text-slate-100 font-semibold">git remote -v</span>
              </div>
              <div className="text-slate-400 text-[11px] pl-3 border-l-2 border-slate-700 my-0.5">
                origin  git@github.com:synergy/fullstack-app.git (fetch)<br />
                origin  git@github.com:synergy/fullstack-app.git (push)
              </div>
              <div className="flex items-center gap-2 pt-1.5">
                <span className="text-emerald-400 select-none">$</span>
                <span className="text-slate-100 font-semibold">git remote show origin</span>
              </div>
              <div className="text-emerald-300 text-[11px] pl-3 border-l-2 border-emerald-500/40 my-0.5">
                * remote origin<br />
                &nbsp;&nbsp;Fetch URL: git@github.com:synergy/fullstack-app.git<br />
                &nbsp;&nbsp;Push  URL: git@github.com:synergy/fullstack-app.git<br />
                &nbsp;&nbsp;HEAD branch: main<br />
                &nbsp;&nbsp;Remote branches: main tracked, feature/auth tracked
              </div>
            </div>
          </TerminalBlock>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SLIDE 2: Authentication: SSH Keys vs. HTTPS & PAT
// -------------------------------------------------------------
export function Slide2Authentication() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={2}
        totalSlides={8}
        badgeText="SECURITY & SETUP"
        title="Authentication: SSH Keys vs. HTTPS & PAT"
        subtitle="GitHub removed password authentication in 2021. Configure passwordless Ed25519 SSH keys or Personal Access Tokens."
        badgeColor="purple"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              The Asymmetric Cryptography Model
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-2.5 rounded bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 flex flex-col gap-1">
                <span className="font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                  Private Key (<code className="font-mono text-[10px]">id_ed25519</code>)
                </span>
                <p className="text-[11px] text-rose-900 dark:text-rose-300 leading-relaxed m-0">
                  Lives strictly on your machine. <strong>Never</strong> share, email, or commit this file. It is your cryptographic signature.
                </p>
              </div>
              <div className="p-2.5 rounded bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 flex flex-col gap-1">
                <span className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
                  <Key className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  Public Key (<code className="font-mono text-[10px]">id_ed25519.pub</code>)
                </span>
                <p className="text-[11px] text-emerald-900 dark:text-emerald-300 leading-relaxed m-0">
                  Shared freely with GitHub. GitHub uses this to encrypt challenge prompts that only your private key can decrypt.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div className="p-2.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-1 shadow-xs">
              <span className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1 text-[11px]">
                <Key className="w-3.5 h-3.5" /> SSH (Ed25519)
              </span>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug m-0">
                Industry standard. Set up once, zero passwords needed forever. Fast and tamper-proof.
              </p>
            </div>
            <div className="p-2.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-1 shadow-xs">
              <span className="font-bold text-sky-700 dark:text-sky-400 flex items-center gap-1 text-[11px]">
                <Lock className="w-3.5 h-3.5" /> HTTPS + PAT
              </span>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug m-0">
                Personal Access Token. Ideal when corporate firewalls block SSH port 22.
              </p>
            </div>
            <div className="p-2.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-1 shadow-xs">
              <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1 text-[11px]">
                <Terminal className="w-3.5 h-3.5" /> GitHub CLI (gh)
              </span>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug m-0">
                Run <code className="font-mono text-[10px]">gh auth login</code> for instant browser-based 1-click terminal authorization.
              </p>
            </div>
          </div>

          <div className="p-3 rounded bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-amber-900 dark:text-amber-300 text-xs flex items-start gap-2.5 shadow-xs">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="font-bold text-amber-950 dark:text-amber-200 block mb-0.5">Security Golden Rule:</strong>
              When copying your key to GitHub, always run <code className="font-mono font-semibold">cat ~/.ssh/id_ed25519.pub</code>. Never copy the private file without the <code className="font-mono font-semibold">.pub</code> extension!
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4">
          <ImageFrame
              src="/images/github/github_ssh_auth_diagram.jpg"
              alt="GitHub SSH Key Verification Diagram"
              caption="Asymmetric cryptographic verification between developer machine and GitHub"
              badge="Security Protocol"
            />

          <TerminalBlock
            title="bash — 3-Step SSH Setup & Test"
            copyText={`ssh-keygen -t ed25519 -C "developer@example.com"\ncat ~/.ssh/id_ed25519.pub\nssh -T git@github.com`}
          >
            <div className="flex flex-col gap-1 font-mono text-xs">
              <div className="text-slate-400 text-[11px]"># 1. Generate modern Ed25519 SSH key pair</div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 select-none">$</span>
                <span className="text-slate-100 font-semibold">ssh-keygen -t ed25519 -C "developer@example.com"</span>
              </div>
              <div className="text-slate-400 text-[11px] pl-3 border-l-2 border-slate-700">
                Generating public/private ed25519 key pair... Saved to ~/.ssh/id_ed25519
              </div>

              <div className="text-slate-400 text-[11px] pt-1"># 2. View and copy your PUBLIC key to GitHub Settings &gt; SSH Keys</div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 select-none">$</span>
                <span className="text-slate-100 font-semibold">cat ~/.ssh/id_ed25519.pub</span>
              </div>
              <div className="text-purple-300 text-[11px] pl-3 border-l-2 border-purple-500/50 break-all bg-slate-950/60 p-1.5 rounded">
                ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPq9xKz4 developer@example.com
              </div>

              <div className="text-slate-400 text-[11px] pt-1"># 3. Test your SSH connection</div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 select-none">$</span>
                <span className="text-slate-100 font-semibold">ssh -T git@github.com</span>
              </div>
              <div className="text-emerald-400 text-[11px] pl-3 border-l-2 border-emerald-500/50">
                Hi developer! You've successfully authenticated, but GitHub does not provide shell access.
              </div>
            </div>
          </TerminalBlock>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SLIDE 3: Creating, Publishing & Cloning Repositories
// -------------------------------------------------------------
export function Slide3PublishingCloning() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={3}
        totalSlides={8}
        badgeText="REPOSITORY SETUP"
        title="Creating, Publishing & Cloning Repositories"
        subtitle="Master initializing cloud repos, linking local commits, upstream tracking flags, and cloning existing codebases."
        badgeColor="purple"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2.5 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <FolderGit2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              The 3-Step Publishing Formula
            </h4>
            <div className="flex flex-col gap-2 text-xs">
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-bold text-xs flex items-center justify-center shrink-0">1</span>
                <div>
                  <strong className="text-slate-900 dark:text-white block font-mono text-[11px]">git remote add origin &lt;URL&gt;</strong>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400">Stores the remote URL locally under the alias <code className="font-mono">origin</code>.</span>
                </div>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-bold text-xs flex items-center justify-center shrink-0">2</span>
                <div>
                  <strong className="text-slate-900 dark:text-white block font-mono text-[11px]">git branch -M main</strong>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400">Renames the primary local branch to modern industry standard <code className="font-mono">main</code>.</span>
                </div>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-bold text-xs flex items-center justify-center shrink-0">3</span>
                <div>
                  <strong className="text-slate-900 dark:text-white block font-mono text-[11px]">git push -u origin main</strong>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400">Uploads all commits to GitHub and sets default upstream tracking.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              What Does <code className="font-mono text-purple-600 dark:text-purple-400 font-semibold">-u</code> Actually Do?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
              <code className="font-mono text-[11px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">-u</code> stands for <code className="font-mono text-[11px]">--set-upstream</code>. It links your local <code className="font-mono text-[11px]">main</code> to the remote <code className="font-mono text-[11px]">origin/main</code>. After this initial command, you simply type <code className="font-mono text-[11px] font-bold text-purple-600 dark:text-purple-400">git push</code> or <code className="font-mono text-[11px] font-bold text-purple-600 dark:text-purple-400">git pull</code> without typing branch names!
            </p>
          </div>

          <div className="p-3 rounded bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-900/50 text-sky-900 dark:text-sky-300 text-xs flex items-start gap-2.5 shadow-xs">
            <FileCode className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="font-bold text-sky-950 dark:text-sky-200 block mb-0.5">Cloning an Existing Project:</strong>
              When joining an existing team, you do not initialize from scratch. Run <code className="font-mono font-semibold">git clone &lt;URL&gt;</code>. It downloads the entire repository, creates all branches, and configures <code className="font-mono">origin</code> automatically.
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4">
          <ImageFrame
              src="/images/github_new_repo_ui.jpg"
              alt="GitHub New Repository Creation Interface"
              caption="GitHub repository creation interface with README, .gitignore, and License presets"
              badge="Repository Setup"
            />

          <TerminalBlock
            title="bash — Publishing &amp; Cloning Code"
            copyText={`git remote add origin git@github.com:developer/awesome-app.git\ngit branch -M main\ngit push -u origin main\n\n# Or clone existing repository:\ngit clone git@github.com:developer/awesome-app.git\ncd awesome-app`}
          >
            <div className="flex flex-col gap-1 font-mono text-xs">
              <div className="text-slate-400 text-[11px]"># Scenario A: Link &amp; push existing local project</div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 select-none">$</span>
                <span className="text-slate-100 font-semibold">git remote add origin git@github.com:dev/app.git</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 select-none">$</span>
                <span className="text-slate-100 font-semibold">git branch -M main</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 select-none">$</span>
                <span className="text-slate-100 font-semibold">git push -u origin main</span>
              </div>
              <div className="text-emerald-300 text-[11px] pl-3 border-l-2 border-emerald-500/50 my-1">
                Enumerating objects: 12, done.<br />
                To github.com:dev/app.git<br />
                &nbsp;* [new branch]      main -&gt; main<br />
                Branch 'main' set up to track remote branch 'main' from 'origin'.
              </div>

              <div className="text-slate-400 text-[11px] pt-1"># Scenario B: Clone existing cloud repo to your laptop</div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 select-none">$</span>
                <span className="text-slate-100 font-semibold">git clone git@github.com:dev/app.git</span>
              </div>
              <div className="text-slate-400 text-[11px] pl-3 border-l-2 border-slate-700">
                Cloning into 'app'... done.
              </div>
            </div>
          </TerminalBlock>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SLIDE 4: Daily Team Rhythm: Syncing, Remote Branches & Fetch vs Pull
// -------------------------------------------------------------
export function Slide4DailyTeamRhythm() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={4}
        totalSlides={8}
        badgeText="DAILY WORKFLOW"
        title="Daily Team Rhythm: Push, Pull & Remote Branches"
        subtitle="Master the team synchronization loop: pushing feature branches, tracking remote branches, and git fetch vs git pull."
        badgeColor="purple"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2.5 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <History className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              The Developer's Daily Collaboration Loop
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
                <span className="font-bold text-slate-900 dark:text-white">1. Start of Day</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug m-0">
                  Switch to <code className="font-mono text-[10px]">main</code> and pull latest updates from your team before writing any new code.
                </p>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
                <span className="font-bold text-slate-900 dark:text-white">2. Feature Branch</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug m-0">
                  Branch off: <code className="font-mono text-[10px]">git switch -c feature/payment</code>. Never commit directly to main!
                </p>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
                <span className="font-bold text-slate-900 dark:text-white">3. Atomic Commits</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug m-0">
                  Stage and commit small, verifiable chunks of work with concise imperative messages.
                </p>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
                <span className="font-bold text-slate-900 dark:text-white">4. Push &amp; Open PR</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug m-0">
                  Push branch to GitHub with <code className="font-mono text-[10px]">-u</code> and create a Pull Request for team code review.
                </p>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <RotateCcw className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              The Critical Difference: <code className="font-mono font-semibold">fetch</code> vs. <code className="font-mono font-semibold">pull</code>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-900/50 flex flex-col gap-1">
                <span className="font-bold text-sky-800 dark:text-sky-300">git fetch (Safe Inspection)</span>
                <p className="text-[11px] text-sky-900 dark:text-sky-300 leading-relaxed m-0">
                  Downloads new commits and branches into <code className="font-mono text-[10px]">origin/main</code>. <strong>Zero modifications</strong> to your working files.
                </p>
              </div>
              <div className="p-2.5 rounded bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/50 flex flex-col gap-1">
                <span className="font-bold text-purple-800 dark:text-purple-300">git pull (Fetch + Merge)</span>
                <p className="text-[11px] text-purple-900 dark:text-purple-300 leading-relaxed m-0">
                  Runs <code className="font-mono text-[10px]">git fetch</code> then immediately merges into your current branch. Can trigger surprise merge conflicts.
                </p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/50 text-purple-900 dark:text-purple-300 text-xs flex items-start gap-2.5 shadow-xs">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="font-bold text-purple-950 dark:text-purple-200 block mb-0.5">Pro Tip: Clean Stale Remote Branches</strong>
              When teammates merge and delete branches on GitHub, run <code className="font-mono font-semibold">git fetch --prune</code> to instantly clean up local tracking references for deleted cloud branches.
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4">
          <ImageFrame
              src="/images/git/github_collaboration_workflow.jpg"
              alt="GitHub Collaboration Team Workflow"
              caption="Engineers pulling updates and pushing feature branches to central GitHub"
              badge="Daily Rhythm"
            />

          <TerminalBlock
            title="bash — Daily Team Synchronization Commands"
            copyText={`git fetch origin --prune\ngit switch -c feature/dark-mode\ngit push -u origin feature/dark-mode\ngit branch -a\ngit push origin --delete feature/dark-mode`}
          >
            <div className="flex flex-col gap-1 font-mono text-xs">
              <div className="text-slate-400 text-[11px]"># 1. Fetch latest commits without modifying files &amp; prune deleted branches</div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 select-none">$</span>
                <span className="text-slate-100 font-semibold">git fetch origin --prune</span>
              </div>

              <div className="text-slate-400 text-[11px] pt-1"># 2. Push a new feature branch and link upstream tracking</div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 select-none">$</span>
                <span className="text-slate-100 font-semibold">git push -u origin feature/dark-mode</span>
              </div>
              <div className="text-emerald-300 text-[11px] pl-3 border-l-2 border-emerald-500/50">
                * [new branch]      feature/dark-mode -&gt; feature/dark-mode
              </div>

              <div className="text-slate-400 text-[11px] pt-1"># 3. View all local and remote branches</div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 select-none">$</span>
                <span className="text-slate-100 font-semibold">git branch -a</span>
              </div>
              <div className="text-slate-400 text-[11px] pl-3 border-l-2 border-slate-700">
                * main<br />
                &nbsp;&nbsp;feature/dark-mode<br />
                &nbsp;&nbsp;<span className="text-rose-400">remotes/origin/main</span><br />
                &nbsp;&nbsp;<span className="text-rose-400">remotes/origin/feature/dark-mode</span>
              </div>

              <div className="text-slate-400 text-[11px] pt-1"># 4. Clean up remote branch after PR is merged</div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 select-none">$</span>
                <span className="text-slate-100 font-semibold">git push origin --delete feature/dark-mode</span>
              </div>
            </div>
          </TerminalBlock>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SLIDE 5: Pull Requests & Collaborative Code Reviews
// -------------------------------------------------------------
export function Slide5PullRequestsReview() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={5}
        totalSlides={8}
        badgeText="COLLABORATION & PR"
        title="Pull Requests & Collaborative Code Reviews"
        subtitle="The heartbeat of modern engineering: writing high-impact PRs, reviewing line diffs, and submitting actionable feedback."
        badgeColor="purple"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2.5 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <GitPullRequest className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              Anatomy of an Outstanding Pull Request
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                  1. Context &amp; Why
                </span>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug m-0">
                  Explain the business reason for the change, not just what was coded. Include UI screenshots or video for visual changes.
                </p>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                  2. Linked Issues
                </span>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug m-0">
                  Use keywords like <code className="font-mono text-purple-600 dark:text-purple-400 font-semibold text-[10px]">Fixes #42</code> to automatically close related issues upon merge.
                </p>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                  3. Compact Scope
                </span>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug m-0">
                  Keep PRs under 400 lines of diff. Small PRs are reviewed 2x faster and receive significantly deeper review quality.
                </p>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                  4. Draft PRs
                </span>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug m-0">
                  Open as "Draft" while in progress to get early architectural feedback without triggering notifications for senior reviewers.
                </p>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              The 3 GitHub Review Verdicts
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
                <span className="font-bold text-slate-700 dark:text-slate-300 text-[11px]">Comment</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug m-0">
                  Submit general feedback or questions without formally approving or blocking.
                </p>
              </div>
              <div className="p-2.5 rounded bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 flex flex-col gap-1">
                <span className="font-bold text-emerald-800 dark:text-emerald-300 text-[11px]">Approve</span>
                <p className="text-[11px] text-emerald-900 dark:text-emerald-300 leading-snug m-0">
                  Signs off on the implementation. Clears the branch protection requirement for merge.
                </p>
              </div>
              <div className="p-2.5 rounded bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 flex flex-col gap-1">
                <span className="font-bold text-rose-800 dark:text-rose-300 text-[11px]">Request Changes</span>
                <p className="text-[11px] text-rose-900 dark:text-rose-300 leading-snug m-0">
                  Blocks merging until critical security, performance, or logic issues are resolved.
                </p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/50 text-purple-900 dark:text-purple-300 text-xs flex items-start gap-2.5 shadow-xs">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="font-bold text-purple-950 dark:text-purple-200 block mb-0.5">Code Suggestion Blocks:</strong>
              Reviewers can write markdown suggestion blocks (<code className="font-mono text-purple-700 dark:text-purple-300 font-bold">```suggestion</code>) directly in line comments. The author can accept the fix with a single click as an automated commit!
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4">
          <ImageFrame
              src="/images/github/github_pr_review_ui.jpg"
              alt="GitHub Pull Request Code Review Interface"
              caption="GitHub PR review diff view with inline line comments and approval submission"
              badge="Code Review UI"
            />

          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2.5 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              Professional Code Review Etiquette
            </h4>
            <div className="flex flex-col gap-2 text-xs">
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span className="text-slate-600 dark:text-slate-300">
                  <strong>Prefix non-blockers with "nit:":</strong> E.g., <code className="font-mono text-[10px] bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">nit: consider extracting to helper function</code> so the author knows it's optional.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span className="text-slate-600 dark:text-slate-300">
                  <strong>Praise great solutions:</strong> Acknowledge clean architecture and clever optimizations, not just bugs.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span className="text-slate-600 dark:text-slate-300">
                  <strong>Explain the "why":</strong> Instead of "Change this to map()", explain "Using map() avoids mutating state directly".
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SLIDE 6: Merge Strategies, Conflict Resolution & Forking
// -------------------------------------------------------------
export function Slide6MergeStrategiesForking() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={6}
        totalSlides={8}
        badgeText="MERGING & OPEN SOURCE"
        title="Merge Strategies, Conflict Resolution & Forking"
        subtitle="Comparing the 3 GitHub merge strategies, resolving remote conflicts, and contributing via the Open Source Fork workflow."
        badgeColor="purple"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2.5 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <GitMerge className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              The 3 GitHub Merge Strategies
            </h4>
            <div className="flex flex-col gap-2 text-xs">
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <strong className="text-slate-900 dark:text-white">1. Create a Merge Commit</strong>
                  <span className="text-[10px] px-1.5 py-0.5 rounded font-mono bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">git merge --no-ff</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug m-0">
                  Preserves every commit on the feature branch. Creates a 2-parent merge commit on <code className="font-mono text-[10px]">main</code>. Complete history, but can clutter commit graph.
                </p>
              </div>

              <div className="p-2.5 rounded bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/50 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <strong className="text-purple-950 dark:text-purple-200 font-bold">2. Squash and Merge (Industry Favorite)</strong>
                  <span className="text-[10px] px-1.5 py-0.5 rounded font-mono bg-purple-200/60 dark:bg-purple-800/40 text-purple-800 dark:text-purple-300 font-bold">git merge --squash</span>
                </div>
                <p className="text-[11px] text-purple-900 dark:text-purple-300 leading-snug m-0">
                  Combines all 10 feature commits into 1 clean atomic commit on <code className="font-mono text-[10px]">main</code>. Keeps production history pristine, easy to read, and simple to revert.
                </p>
              </div>

              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <strong className="text-slate-900 dark:text-white">3. Rebase and Merge</strong>
                  <span className="text-[10px] px-1.5 py-0.5 rounded font-mono bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">git rebase</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug m-0">
                  Fast-forwards commits individually onto the tip of <code className="font-mono text-[10px]">main</code> without a merge commit. Produces a 100% linear history.
                </p>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              Resolving Conflicts on GitHub vs. Locally
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
              When a PR has conflicts, GitHub displays a warning banner. For simple text conflicts, use GitHub's in-browser conflict editor. For complex conflicts involving tests or logic, pull <code className="font-mono text-[11px]">main</code> into your feature branch locally, resolve in VS Code, test, and push.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4">
          <ImageFrame
              src="/images/github/github_fork_sync_diagram.jpg"
              alt="GitHub Fork and Upstream Sync Diagram"
              caption="Forking workflow: Syncing your personal fork with the official upstream repository"
              badge="Fork Workflow"
            />

          <TerminalBlock
            title="bash — Syncing a Fork with Upstream"
            copyText={`git remote add upstream https://github.com/facebook/react.git\ngit fetch upstream\ngit switch main\ngit merge upstream/main\ngit push origin main`}
          >
            <div className="flex flex-col gap-1 font-mono text-xs">
              <div className="text-slate-400 text-[11px]"># 1. Add official parent repository as 'upstream' remote</div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 select-none">$</span>
                <span className="text-slate-100 font-semibold">git remote add upstream https://github.com/org/repo.git</span>
              </div>

              <div className="text-slate-400 text-[11px] pt-1"># 2. Fetch latest changes from official repo</div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 select-none">$</span>
                <span className="text-slate-100 font-semibold">git fetch upstream</span>
              </div>

              <div className="text-slate-400 text-[11px] pt-1"># 3. Merge upstream/main into your local main branch</div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 select-none">$</span>
                <span className="text-slate-100 font-semibold">git switch main &amp;&amp; git merge upstream/main</span>
              </div>
              <div className="text-emerald-300 text-[11px] pl-3 border-l-2 border-emerald-500/50">
                Fast-forward: 4 files changed, 48 insertions(+).
              </div>

              <div className="text-slate-400 text-[11px] pt-1"># 4. Push synced main to your personal GitHub fork</div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 select-none">$</span>
                <span className="text-slate-100 font-semibold">git push origin main</span>
              </div>
            </div>
          </TerminalBlock>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SLIDE 7: Branch Protection, Issues & Project Management
// -------------------------------------------------------------
export function Slide7GovernanceProjects() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={7}
        totalSlides={8}
        badgeText="REPO GOVERNANCE"
        title="Branch Protection, Issues & Project Management"
        subtitle="Safeguard production with branch protection rules, automate issue closing, and manage work with GitHub Projects (Kanban)."
        badgeColor="purple"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2.5 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              Essential Branch Protection Rules for <code className="font-mono text-purple-600 dark:text-purple-400">main</code>
            </h4>
            <div className="flex flex-col gap-2 text-xs">
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-start gap-2.5">
                <CheckSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block font-semibold">Require Pull Request Approvals</strong>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400">Blocks anyone from pushing directly to <code className="font-mono">main</code>. Requires at least 1 or 2 peer approvals.</span>
                </div>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-start gap-2.5">
                <CheckSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block font-semibold">Require Status Checks to Pass</strong>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400">CI test suites, TypeScript compilation, and linters must report green before merge button is enabled.</span>
                </div>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-start gap-2.5">
                <CheckSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block font-semibold">Block Force Pushes &amp; Deletion</strong>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400">Prevents destructive commands like <code className="font-mono">git push --force</code> from wiping production history.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              GitHub Issues &amp; Magic Closing Keywords
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
              GitHub Issues organize bug reports, feature requests, and milestones. When opening a Pull Request, include magic closing keywords in your PR description:
            </p>
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
              <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">Fixes #104</span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">Closes #88</span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">Resolves #12</span>
            </div>
          </div>

          <div className="p-3 rounded bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/50 text-purple-900 dark:text-purple-300 text-xs flex items-start gap-2.5 shadow-xs">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="font-bold text-purple-950 dark:text-purple-200 block mb-0.5">GitHub Projects (Kanban):</strong>
              Built-in project boards link directly with your repository. Automatically moves issue cards from <code className="font-mono">In Progress</code> to <code className="font-mono">Done</code> when the associated PR is merged.
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4">
          <ImageFrame
              src="/images/github/github_branch_protect_ui.jpg"
              alt="GitHub Branch Protection Ruleset Settings"
              caption="Configuring branch protection rules for main: mandatory PRs and status checks"
              badge="Governance UI"
            />

          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2.5 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Repository Health Checklist
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span className="text-slate-700 dark:text-slate-300">Clear <code className="font-mono text-[10px]">README.md</code></span>
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span className="text-slate-700 dark:text-slate-300">Clean <code className="font-mono text-[10px]">.gitignore</code></span>
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span className="text-slate-700 dark:text-slate-300">MIT / Apache License</span>
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                <span className="text-slate-700 dark:text-slate-300">Branch rules enabled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SLIDE 8: GitHub Actions CI/CD & Secret Security
// -------------------------------------------------------------
export function Slide8ActionsSecurity() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={8}
        totalSlides={8}
        badgeText="AUTOMATION & SECURITY"
        title="GitHub Actions CI/CD & Secret Security"
        subtitle="Automate continuous integration with YAML pipelines, protect API secrets, and avoid common beginner traps."
        badgeColor="purple"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2.5 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              What is GitHub Actions?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
              GitHub Actions is a built-in CI/CD (Continuous Integration / Continuous Deployment) platform that runs inside temporary cloud virtual machines (Ubuntu, Windows, macOS). Workflows are defined as code in <code className="font-mono text-purple-600 dark:text-purple-400 font-semibold text-[11px]">.github/workflows/*.yml</code>.
            </p>
            <div className="grid grid-cols-3 gap-2 text-xs pt-1">
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-0.5">
                <strong className="text-slate-900 dark:text-white text-[11px]">1. Events</strong>
                <span className="text-[10px] text-slate-600 dark:text-slate-400"><code className="font-mono">push</code>, <code className="font-mono">pull_request</code></span>
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-0.5">
                <strong className="text-slate-900 dark:text-white text-[11px]">2. Jobs</strong>
                <span className="text-[10px] text-slate-600 dark:text-slate-400">Run parallel on VMs</span>
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-0.5">
                <strong className="text-slate-900 dark:text-white text-[11px]">3. Steps</strong>
                <span className="text-[10px] text-slate-600 dark:text-slate-400">Shell commands &amp; actions</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Repository Secrets &amp; Security Rules
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 flex flex-col gap-1">
                <span className="font-bold text-rose-800 dark:text-rose-300">Never Push Credentials</span>
                <p className="text-[11px] text-rose-900 dark:text-rose-300 leading-snug m-0">
                  Keep <code className="font-mono text-[10px]">.env</code> in <code className="font-mono text-[10px]">.gitignore</code>. GitHub scans commits and alerts when API keys are exposed.
                </p>
              </div>
              <div className="p-2.5 rounded bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 flex flex-col gap-1">
                <span className="font-bold text-emerald-800 dark:text-emerald-300">GitHub Secrets</span>
                <p className="text-[11px] text-emerald-900 dark:text-emerald-300 leading-snug m-0">
                  Store secrets in Repo Settings &gt; Secrets. Access safely in YAML via <code className="font-mono text-[10px]">{'${{ secrets.API_KEY }}'}</code>.
                </p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-amber-900 dark:text-amber-300 text-xs flex items-start gap-2.5 shadow-xs">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="font-bold text-amber-950 dark:text-amber-200 block mb-0.5">Top 5 Beginner Mistakes &amp; Fixes:</strong>
              1. <em>Pushed node_modules?</em> Add to .gitignore &amp; run <code className="font-mono font-semibold">git rm -r --cached node_modules</code>.
              2. <em>"Updates rejected"?</em> Run <code className="font-mono font-semibold">git pull origin main</code> before pushing.
              3. <em>Accidental commit to main?</em> Create branch now: <code className="font-mono font-semibold">git switch -c new-feature</code>.
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4">
          <ImageFrame
              src="/images/github/github_actions_ci_ui.jpg"
              alt="GitHub Actions Automated CI Matrix Dashboard"
              caption="Continuous Integration dashboard: Automated tests running on every pull request"
              badge="CI/CD Matrix"
            />

          <TerminalBlock
            title=".github/workflows/ci.yml"
            copyText={`name: CI Pipeline\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: pnpm install --frozen-lockfile\n      - run: pnpm test`}
          >
            <div className="flex flex-col gap-1 font-mono text-xs">
              <div><span className="text-purple-400">name:</span> <span className="text-emerald-300">CI Pipeline</span></div>
              <div><span className="text-purple-400">on:</span></div>
              <div className="pl-3"><span className="text-slate-300">push:</span> <span className="text-slate-400">&#123; branches: [ main ] &#125;</span></div>
              <div className="pl-3"><span className="text-slate-300">pull_request:</span> <span className="text-slate-400">&#123; branches: [ main ] &#125;</span></div>
              <div><span className="text-purple-400">jobs:</span></div>
              <div className="pl-3"><span className="text-sky-300">test:</span></div>
              <div className="pl-6"><span className="text-slate-300">runs-on:</span> <span className="text-amber-300">ubuntu-latest</span></div>
              <div className="pl-6"><span className="text-slate-300">steps:</span></div>
              <div className="pl-9 text-slate-400">- uses: <span className="text-sky-400">actions/checkout@v4</span></div>
              <div className="pl-9 text-slate-400">- uses: <span className="text-sky-400">actions/setup-node@v4</span></div>
              <div className="pl-12 text-slate-400">with: &#123; node-version: 20 &#125;</div>
              <div className="pl-9 text-emerald-400">- run: <span className="text-slate-200">pnpm install --frozen-lockfile</span></div>
              <div className="pl-9 text-emerald-400">- run: <span className="text-slate-200">pnpm test</span></div>
            </div>
          </TerminalBlock>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// COURSE METADATA & SLIDES EXPORT
// -------------------------------------------------------------
export const GITHUB_META = {
  id: "github",
  title: "GitHub: Cloud Repositories & Collaboration",
  module: "MODULE 02",
  accent: "purple",
};

export const GITHUB_SLIDES = [
  {
    id: "slide-1",
    number: 1,
    part: "FOUNDATIONS & ARCHITECTURE",
    title: "Cloud Architecture & The Remote Model",
    Component: Slide1CloudArchitecture,
  },
  {
    id: "slide-2",
    number: 2,
    part: "SECURITY & SETUP",
    title: "Authentication: SSH Keys vs. HTTPS & PAT",
    Component: Slide2Authentication,
  },
  {
    id: "slide-3",
    number: 3,
    part: "REPOSITORY SETUP",
    title: "Creating, Publishing & Cloning Repositories",
    Component: Slide3PublishingCloning,
  },
  {
    id: "slide-4",
    number: 4,
    part: "DAILY WORKFLOW",
    title: "Daily Team Rhythm: Push, Pull & Remote Branches",
    Component: Slide4DailyTeamRhythm,
  },
  {
    id: "slide-5",
    number: 5,
    part: "COLLABORATION & PR",
    title: "Pull Requests & Collaborative Code Reviews",
    Component: Slide5PullRequestsReview,
  },
  {
    id: "slide-6",
    number: 6,
    part: "MERGING & OPEN SOURCE",
    title: "Merge Strategies, Conflict Resolution & Forking",
    Component: Slide6MergeStrategiesForking,
  },
  {
    id: "slide-7",
    number: 7,
    part: "REPO GOVERNANCE",
    title: "Branch Protection, Issues & Project Management",
    Component: Slide7GovernanceProjects,
  },
  {
    id: "slide-8",
    number: 8,
    part: "AUTOMATION & SECURITY",
    title: "GitHub Actions CI/CD & Secret Security",
    Component: Slide8ActionsSecurity,
  },
];

export default GITHUB_SLIDES;
