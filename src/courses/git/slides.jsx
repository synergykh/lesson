import React, { useState } from "react";
import {
  GitBranch,
  FolderGit2,
  AlertTriangle,
  Copy,
  Check,
  ArrowRight,
  ShieldAlert,
  GitMerge,
  Layers,
  History,
  RotateCcw,
  Sparkles,
  ExternalLink,
  Code2,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  FileCode,
  HardDrive,
  Cloud,
} from "lucide-react";
import SlideHeader from "./components/SlideHeader";
import TerminalBlock from "./components/TerminalBlock";
import ImageFrame from "./components/ImageFrame";

export function Slide1MentalModel() {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={1}
        totalSlides={8}
        badgeText="FOUNDATIONS"
        title="Mental Model & The 4 Git Areas"
        subtitle="Understanding Git vs. GitHub, why engineers need version control, and the complete 4-layer lifecycle."
        badgeColor="orange"
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
                <span className="text-[10px] px-1.5 py-0.5 rounded font-bold uppercase bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                  Local Tool
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
                A command-line program running directly on your machine. Tracks exact file revisions, history, and branches offline in the hidden <code className="text-orange-600 dark:text-orange-400 font-mono">.git/</code> folder.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">100% Offline</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">Cryptographic Hashes</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">Instant Branching</span>
              </div>
            </div>

            <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-bold text-xs text-purple-600 dark:text-purple-400">
                  <Cloud className="w-4 h-4" />
                  <span>GitHub (The Cloud Hub)</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded font-bold uppercase bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  Cloud Service
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
                A cloud hosting service for Git repositories. Enables global team collaboration, Pull Requests, code reviews, issue tracking, and automated CI/CD deployments.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">Cloud Backups</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">Pull Requests (PR)</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">CI/CD Automation</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2.5 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Why Developers Need Version Control
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 flex flex-col gap-1">
                <span className="font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1">
                  ✕ The Old Chaos
                </span>
                <p className="text-[11px] text-rose-800 dark:text-rose-300 leading-relaxed m-0">
                  Copying folders: <code className="font-mono text-[10px]">project-final-v2-REAL.zip</code>, accidentally deleting working code, and teammates overwriting each other's edits with zero undo history.
                </p>
              </div>
              <div className="p-2.5 rounded bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 flex flex-col gap-1">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  ✓ The Modern Solution
                </span>
                <p className="text-[11px] text-emerald-800 dark:text-emerald-300 leading-relaxed m-0">
                  One clean folder, infinite timeline time machine, isolated sandbox branches, and cryptographic audit trails for every line of code.
                </p>
              </div>
            </div>
          </div>

          <div className="alert-callout tip p-3 rounded bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-900 dark:text-amber-300 text-xs flex items-center gap-2">
            <span className="text-base font-bold">💡</span>
            <span>
              <strong>Key Principle:</strong> You can use Git 100% offline without GitHub. You use GitHub when you want to share, backup, or collaborate on your Git repositories with others.
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4">
          <ImageFrame
            src="/images/git/git_four_areas.jpg"
            alt="The 4 Core Git Areas"
            caption="The Complete Lifecycle: Working Directory ➔ Staging Area ➔ Local Repo ➔ Remote Repo"
            badge="Architecture"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            <div className="p-2.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-2 shadow-xs">
              <span className="w-5 h-5 rounded bg-sky-500/10 text-sky-600 dark:text-sky-400 font-bold text-xs flex items-center justify-center shrink-0 border border-sky-500/20">
                1
              </span>
              <div>
                <div className="font-bold text-slate-900 dark:text-white">Working Directory</div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Your raw files on disk edited in VS Code. Changes start here as untracked or modified.
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-2 shadow-xs">
              <span className="w-5 h-5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 border border-amber-500/20">
                2
              </span>
              <div>
                <div className="font-bold text-slate-900 dark:text-white">
                  Staging Area (<code className="text-amber-600 dark:text-amber-400 font-mono text-[10px]">git add</code>)
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  The preparation lounge. Curate exactly which files to include in your next snapshot.
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-2 shadow-xs">
              <span className="w-5 h-5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold text-xs flex items-center justify-center shrink-0 border border-purple-500/20">
                3
              </span>
              <div>
                <div className="font-bold text-slate-900 dark:text-white">
                  Local Repo (<code className="text-purple-600 dark:text-purple-400 font-mono text-[10px]">git commit</code>)
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Your offline database inside <code className="text-purple-600 dark:text-purple-400 font-mono">.git/</code> storing permanent commit snapshots.
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-2 shadow-xs">
              <span className="w-5 h-5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 border border-emerald-500/20">
                4
              </span>
              <div>
                <div className="font-bold text-slate-900 dark:text-white">
                  Remote (<code className="text-emerald-600 dark:text-emerald-400 font-mono text-[10px]">git push</code>)
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  The cloud repository hosted on GitHub for remote backups and collaborative team reviews.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide2SetupIdentity() {
  const [copiedCmd, setCopiedCmd] = useState(null);

  const handleCopy = (cmd, key) => {
    if (!cmd) return;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(cmd).then(() => {
        setCopiedCmd(key);
        setTimeout(() => setCopiedCmd(null), 2000);
      });
    }
  };

  const identityScript = `git config --global user.name "Alice Chen"
git config --global user.email "alice@example.com"
git config --global init.defaultBranch main`;

  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={2}
        totalSlides={8}
        badgeText="SETUP & CONFIG"
        title="Installation & Developer Identity"
        subtitle="Verifying your shell environment and configuring your global author credentials."
        badgeColor="green"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-6 flex flex-col gap-4">
          <TerminalBlock
            title="Terminal — Shell Verification"
            copyText="git --version"
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git --version</span>
            </div>
            <div className="text-emerald-400 font-bold mt-1 text-sm">
              git version 2.45.2
            </div>
            <div className="text-slate-500 mt-2 text-[11px]">
              # If installed, Git outputs its active version string.
            </div>
          </TerminalBlock>

          <div className="info-card p-4 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-3 shadow-xs">
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                What if Git is not installed?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                If your terminal returns <code className="text-rose-600 dark:text-rose-400 font-mono">command not found: git</code>, install it for your OS in seconds:
              </p>

              <div className="flex flex-col gap-2.5 text-xs">
                <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <span className="text-slate-700 dark:text-slate-300 font-medium shrink-0">
                      macOS:
                    </span>
                    <code className="text-sky-600 dark:text-sky-400 font-mono truncate">
                      xcode-select --install
                    </code>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("xcode-select --install", "macos")}
                    className={`px-2 py-1 rounded text-[11px] font-medium cursor-pointer flex items-center gap-1 border transition-colors shrink-0 ${
                      copiedCmd === "macos"
                        ? "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30"
                        : "bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                    }`}
                    title="Copy command"
                  >
                    {copiedCmd === "macos" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <span className="text-slate-700 dark:text-slate-300 font-medium shrink-0">
                      Windows:
                    </span>
                    <code className="text-orange-600 dark:text-orange-400 font-mono truncate">
                      winget install --id Git.Git -e --source winget
                    </code>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                    <a
                      href="https://git-scm.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-orange-600 dark:text-orange-400 hover:underline shrink-0"
                      title="Download Git Bash installer directly"
                    >
                      git-scm.com
                    </a>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          "winget install --id Git.Git -e --source winget",
                          "windows"
                        )
                      }
                      className={`px-2 py-1 rounded text-[11px] font-medium cursor-pointer flex items-center gap-1 border transition-colors shrink-0 ${
                        copiedCmd === "windows"
                          ? "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30"
                          : "bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                      }`}
                      title="Copy command"
                    >
                      {copiedCmd === "windows" ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <span className="text-slate-700 dark:text-slate-300 font-medium shrink-0">
                      Ubuntu/Debian:
                    </span>
                    <code className="text-emerald-600 dark:text-emerald-400 font-mono truncate">
                      sudo apt install git
                    </code>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("sudo apt install git", "ubuntu")}
                    className={`px-2 py-1 rounded text-[11px] font-medium cursor-pointer flex items-center gap-1 border transition-colors shrink-0 ${
                      copiedCmd === "ubuntu"
                        ? "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30"
                        : "bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                    }`}
                    title="Copy command"
                  >
                    {copiedCmd === "ubuntu" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 dark:text-slate-400 italic">
              Tip: Git Bash is the recommended command terminal for Windows developers.
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4">
          <TerminalBlock
            title="Terminal — Global Identity Setup"
            copyText={identityScript}
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git config --global user.name "Alice Chen"</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git config --global user.email "alice@example.com"</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git config --global init.defaultBranch main</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-3">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git config --global --list</span>
            </div>
            <div className="text-emerald-400 text-xs mt-1 font-mono">
              user.name=Alice Chen<br />
              user.email=alice@example.com<br />
              init.defaultBranch=main
            </div>
          </TerminalBlock>

          <div className="p-4 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-3 shadow-xs">
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Why Does Git Need Your Email?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                GitHub connects commit author emails to your GitHub profile. This ensures your commits earn green contribution squares on your activity graph!
              </p>

              <div className="p-3 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-1.5">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                  Live GitHub Commit Badge Preview:
                </span>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-xs text-white shrink-0">
                    AC
                  </div>
                  <div className="flex flex-col">
                    <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>Alice Chen</span>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-normal">
                        Verified ✓
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                      alice@example.com • 2 mins ago
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-sky-800 dark:text-sky-300 text-xs flex items-center gap-2">
              <span className="font-bold">Note:</span>
              <span>
                Git local identity is purely author metadata stamped on commits, not your secret GitHub account password.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide3InitTracking() {
  const initScript = `mkdir my-website && cd my-website
echo "# My Awesome Website" > README.md
echo "<h1>Hello World</h1>" > index.html
git init`;

  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={3}
        totalSlides={8}
        badgeText="LOCAL REPO"
        title="Repository Initialization & Status"
        subtitle="Setting up a workspace, initializing version control with git init, and reading git status."
        badgeColor="blue"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-6 flex flex-col gap-4">
          <TerminalBlock
            title="Terminal — Workspace Creation & git init"
            copyText={initScript}
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>mkdir my-website && cd my-website</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>echo "# My Awesome Website" &gt; README.md</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git init</span>
            </div>
            <div className="text-emerald-400 font-bold mt-1 text-xs">
              Initialized empty Git repository in /my-website/.git/
            </div>
            <div className="text-slate-500 mt-2 text-[11px]">
              # The terminal prompt now tracks your active branch '(main)'!
            </div>
          </TerminalBlock>

          <div className="alert-callout warning p-3.5 rounded bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-900 dark:text-amber-300 text-xs flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-amber-800 dark:text-amber-300">
                Golden Rule: Never manually edit or delete .git/
              </strong>
              <span>
                That hidden <code className="bg-amber-100 dark:bg-amber-950 px-1 py-0.5 rounded font-mono">.git/</code> folder is your repository database. Deleting it instantly destroys your entire commit history and branch timeline!
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              What Does "Untracked" Mean?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
              When Git reports <code className="text-rose-600 dark:text-rose-400 font-mono">Untracked files</code>, it sees the file exists in your folder, but is not recording any revisions yet. You must explicitly stage it with <code className="text-emerald-600 dark:text-emerald-400 font-mono">git add</code> to begin tracking.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4">
          <ImageFrame
            src="/images/git/git_init_dotgit.jpg"
            alt="Inside the .git Directory"
            caption="What git init creates: HEAD pointer, repository config, refs, and the internal object database."
            badge="Internal Model"
          />

          <TerminalBlock
            title="Terminal — Diagnostic Compass (git status)"
            copyText="git status"
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git status</span>
            </div>
            <div className="text-slate-300 text-xs mt-1.5 leading-relaxed font-mono">
              On branch main<br />
              No commits yet<br /><br />
              Untracked files:<br />
              &nbsp;&nbsp;(use "git add &lt;file&gt;..." to include in what will be committed)<br />
              &nbsp;&nbsp;<span className="text-rose-400">README.md</span><br />
              &nbsp;&nbsp;<span className="text-rose-400">index.html</span><br /><br />
              nothing added to commit but untracked files present
            </div>
          </TerminalBlock>

          <div className="p-2.5 rounded bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-sky-800 dark:text-sky-300 text-xs flex items-center gap-2">
            <span className="text-base">🧭</span>
            <span>
              <strong>Developer Compass:</strong> Whenever you are unsure of what to do next, run <code className="font-mono bg-sky-100 dark:bg-sky-900/60 px-1 rounded">git status</code>. Git always prints your current state and suggests the next action.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide4StagingCommits() {
  const commitScript = `git add README.md index.html
git commit -m "feat: initial project setup"
git log --oneline --graph`;

  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={4}
        totalSlides={8}
        badgeText="COMMITS & HISTORY"
        title="Staging & Atomic Commits"
        subtitle="Curating changes with git add, inspecting diffs, recording permanent snapshots, and browsing history."
        badgeColor="purple"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-6 flex flex-col gap-4">
          <TerminalBlock
            title="Terminal — Staging & Verification"
            copyText="git add . && git status"
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git add README.md index.html</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git status</span>
            </div>
            <div className="text-slate-300 text-xs mt-1.5 font-mono">
              On branch main<br />
              Changes to be committed:<br />
              &nbsp;&nbsp;<span className="text-emerald-400">new file:   README.md</span><br />
              &nbsp;&nbsp;<span className="text-emerald-400">new file:   index.html</span>
            </div>
            <div className="text-slate-500 mt-2 text-[11px]">
              # Green filenames confirm changes are successfully staged!
            </div>
          </TerminalBlock>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="p-3 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-1 shadow-xs">
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 font-mono">
                git diff
              </span>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed m-0">
                Shows exact line-by-line differences between your working files and the staging area (unstaged edits).
              </p>
            </div>
            <div className="p-3 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-1 shadow-xs">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                git diff --staged
              </span>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed m-0">
                Inspects exact lines waiting in staging that will be permanently locked into your next commit.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-1.5 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Why the Staging Area Exists
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
              The staging area is a curation buffer. If you modified 5 files across your project but only 2 of them belong to a bug fix, staging lets you commit those 2 cleanly without mixing unrelated experiments.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4">
          <ImageFrame
            src="/images/git/git_commit_snapshots.jpg"
            alt="Git Commit Snapshots & Hashes"
            caption="Each commit is an immutable snapshot with a unique 40-character SHA-1 checksum and author timestamp."
            badge="Data Structure"
          />

          <TerminalBlock
            title="Terminal — Permanent Commit & History"
            copyText={commitScript}
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git commit -m "feat: initial project setup"</span>
            </div>
            <div className="text-emerald-400 text-xs mt-1 font-mono">
              [main (root-commit) 7a4b2c1] feat: initial project setup<br />
              &nbsp;2 files changed, 2 insertions(+)<br />
              &nbsp;create mode 100644 README.md<br />
              &nbsp;create mode 100644 index.html
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2.5">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git log --oneline --graph</span>
            </div>
            <div className="text-slate-200 text-xs mt-1 font-mono">
              * <span className="text-amber-400">7a4b2c1</span> (HEAD -&gt; main) feat: initial project setup
            </div>
          </TerminalBlock>

          <div className="alert-callout tip p-3 rounded bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-900 dark:text-purple-300 text-xs flex items-center gap-2">
            <span className="text-base">✍️</span>
            <span>
              <strong>Commit Hygiene:</strong> Write commit messages in clear imperative present tense ("Add login form", not "Added login form"). Make small, atomic commits for one logical change at a time.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide5Branching() {
  const branchScript = `git switch -c feature/navbar
git commit -m "feat: add responsive navbar"
git switch main
git merge feature/navbar
git branch -d feature/navbar`;

  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={5}
        totalSlides={8}
        badgeText="BRANCHING"
        title="Branching & Context Switching"
        subtitle="Creating parallel lines of development without risking your main production code."
        badgeColor="amber"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-6 flex flex-col gap-4">
          <ImageFrame
            src="/images/git/git_branch_model.jpg"
            alt="Git Branching Model"
            caption="Branching creates isolated parallel universes. Merge back into main when your feature is tested and complete."
            badge="Branch Model"
          />

          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Why Branching Is Magic in Git
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
              In older version control systems, branching copied every file onto disk, wasting minutes and storage. In Git, a branch is just a tiny 41-byte text file containing a commit SHA-1 pointer! Switching branches takes milliseconds.
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">Fast Creation</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">Zero File Duplication</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">Isolated Experiments</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4">
          <TerminalBlock
            title="Terminal — Complete Branch Workflow"
            copyText={branchScript}
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git switch -c feature/navbar</span>
            </div>
            <div className="text-slate-400 text-[11px] mt-0.5">
              Switched to a new branch 'feature/navbar'
            </div>

            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2.5">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git commit -m "feat: add responsive navbar"</span>
            </div>
            <div className="text-emerald-400 text-xs mt-0.5 font-mono">
              [feature/navbar 3e8f1a2] feat: add responsive navbar
            </div>

            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2.5">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git switch main</span>
            </div>
            <div className="text-slate-400 text-[11px] mt-0.5">
              Switched to branch 'main'
            </div>

            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2.5">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git merge feature/navbar</span>
            </div>
            <div className="text-emerald-400 text-xs mt-0.5 font-mono">
              Updating 7a4b2c1..3e8f1a2<br />
              Fast-forward (1 file changed, 25 insertions(+))
            </div>

            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2.5">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git branch -d feature/navbar</span>
            </div>
            <div className="text-slate-400 text-[11px] mt-0.5">
              Deleted branch feature/navbar (was 3e8f1a2).
            </div>
          </TerminalBlock>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-1 shadow-xs">
              <span className="font-bold text-amber-600 dark:text-amber-400">
                Fast-Forward Merge
              </span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                Occurs when main had no new commits since branching. Git simply moves the pointer forward to the feature branch head.
              </p>
            </div>
            <div className="p-2.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-1 shadow-xs">
              <span className="font-bold text-purple-600 dark:text-purple-400">
                3-Way Merge
              </span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                Occurs when both main and feature had new commits. Git creates a dedicated "merge commit" combining both histories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide6MergeConflicts() {
  const resolveScript = `# 1. Check which files have conflict markers
git status

# 2. Open index.html in VS Code and choose the correct code
# Delete <<<<<<< HEAD, =======, and >>>>>>> feature/navbar lines

# 3. Stage the resolved file and commit
git add index.html
git commit -m "merge: resolve navbar conflict"`;

  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={6}
        totalSlides={8}
        badgeText="CONFLICTS"
        title="Mastering Merge Conflicts"
        subtitle="Demystifying conflict markers, step-by-step manual resolution, and completing the merge cleanly."
        badgeColor="red"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-6 flex flex-col gap-4">
          <ImageFrame
            src="/images/git/git_conflict_editor.jpg"
            alt="Resolving Conflict in Code Editor"
            caption="Conflict markers pinpoint exactly where branches diverged. Choose the code you want, delete the markers, then stage and commit."
            badge="Resolution"
          />

          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-rose-500" />
              Don't Panic: Conflicts Are Normal
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0">
              A conflict happens when two branches modified the exact same lines in a file. Git refuses to guess which change is correct — it safely inserts conflict markers and invites you (the developer) to choose!
            </p>
          </div>

          <div className="alert-callout tip p-3 rounded bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-900 dark:text-rose-300 text-xs flex items-center justify-between">
            <span>
              <strong>Emergency Escape Hatch:</strong> Run <code className="bg-rose-100 dark:bg-rose-950 px-1 py-0.5 rounded font-mono">git merge --abort</code> to immediately reset your repo safely to pre-merge state.
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="p-3.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Anatomy of Conflict Markers
            </h4>
            <div className="p-3 rounded bg-slate-900 text-slate-200 font-mono text-xs leading-relaxed border border-slate-800">
              <span className="text-rose-400 font-bold">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD (Your Current Branch)</span><br />
              <span className="text-slate-100 pl-4">&lt;h1&gt;Welcome to Synergy Academy&lt;/h1&gt;</span><br />
              <span className="text-slate-500 font-bold">======= (Divider Line)</span><br />
              <span className="text-sky-300 pl-4">&lt;h1&gt;Welcome to Developer Hub&lt;/h1&gt;</span><br />
              <span className="text-sky-400 font-bold">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/navbar (Incoming Branch)</span>
            </div>
          </div>

          <TerminalBlock
            title="Terminal — 3-Step Conflict Resolution"
            copyText={resolveScript}
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git status</span>
            </div>
            <div className="text-slate-300 text-xs mt-1 font-mono">
              Unmerged paths:<br />
              &nbsp;&nbsp;<span className="text-rose-400">both modified:   index.html</span>
            </div>
            <div className="text-slate-500 text-[11px] my-1.5">
              # After editing the file and removing &lt;&lt;&lt;&lt;, ====, &gt;&gt;&gt;&gt; markers:
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git add index.html</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git commit -m "merge: resolve navbar conflict"</span>
            </div>
            <div className="text-emerald-400 text-xs mt-1 font-mono">
              [main 5c2d9e1] merge: resolve navbar conflict
            </div>
          </TerminalBlock>

          <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300">
            <strong>Pro Tip:</strong> Modern editors like VS Code display clickable <em>"Accept Current"</em>, <em>"Accept Incoming"</em>, and <em>"Accept Both"</em> buttons right above conflict markers.
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide7UndoingHygiene() {
  const gitignoreScript = `echo "node_modules/" >> .gitignore
echo ".env*" >> .gitignore
echo "dist/" >> .gitignore
echo ".DS_Store" >> .gitignore
git add .gitignore
git commit -m "chore: add .gitignore rules"`;

  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={7}
        totalSlides={8}
        badgeText="SAFETY & HYGIENE"
        title="Undoing Mistakes & Repository Hygiene"
        subtitle="The 4 safety net commands (restore, amend, stash) and keeping secrets safe with .gitignore."
        badgeColor="sky"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-6 flex flex-col justify-between gap-2.5">
          <div className="p-3 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-1 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400">
                1. "I broke a file, undo all my changes!"
              </span>
              <code className="text-xs text-emerald-600 dark:text-emerald-400 bg-slate-100 dark:bg-slate-950/60 px-1.5 py-0.5 rounded font-mono">
                git restore &lt;file&gt;
              </code>
            </div>
            <span className="text-[11px] text-slate-600 dark:text-slate-300">
              Discards unstaged modifications in your working files, reverting to the last commit.
            </span>
          </div>

          <div className="p-3 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-1 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                2. "I staged a file by accident!"
              </span>
              <code className="text-xs text-emerald-600 dark:text-emerald-400 bg-slate-100 dark:bg-slate-950/60 px-1.5 py-0.5 rounded font-mono">
                git restore --staged &lt;file&gt;
              </code>
            </div>
            <span className="text-[11px] text-slate-600 dark:text-slate-300">
              Unstages the file back to working tree without deleting any of your written code.
            </span>
          </div>

          <div className="p-3 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-1 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400">
                3. "Typo in my last commit message!"
              </span>
              <code className="text-xs text-emerald-600 dark:text-emerald-400 bg-slate-100 dark:bg-slate-950/60 px-1.5 py-0.5 rounded font-mono">
                git commit --amend -m "..."
              </code>
            </div>
            <span className="text-[11px] text-slate-600 dark:text-slate-300">
              Rewrites your most recent commit message without creating an extra commit history entry.
            </span>
          </div>

          <div className="p-3 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-1 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                4. "Need to switch branch but work unfinished!"
              </span>
              <code className="text-xs text-emerald-600 dark:text-emerald-400 bg-slate-100 dark:bg-slate-950/60 px-1.5 py-0.5 rounded font-mono">
                git stash
              </code>
            </div>
            <span className="text-[11px] text-slate-600 dark:text-slate-300">
              Shelves unfinished modifications safely. Restore later with <code className="text-emerald-600 dark:text-emerald-400 font-mono">git stash pop</code>.
            </span>
          </div>

          <ImageFrame
            src="/images/git/git_undo_matrix.jpg"
            alt="Git Undo Matrix"
            caption="The Safety Net: In Working Directory (restore) ➔ In Staging (restore --staged) ➔ Committed (amend/revert)"
            badge="Safety Net"
          />
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="p-4 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              What MUST Be in .gitignore:
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-0.5">
                <span className="font-bold text-rose-600 dark:text-rose-400 font-mono">node_modules/</span>
                <span className="text-slate-500 dark:text-slate-400 text-[10px]">Huge 3rd-party dependencies</span>
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-0.5">
                <span className="font-bold text-amber-600 dark:text-amber-400 font-mono">.env, .env.local</span>
                <span className="text-slate-500 dark:text-slate-400 text-[10px]">Secret API keys & passwords</span>
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-0.5">
                <span className="font-bold text-sky-600 dark:text-sky-400 font-mono">dist/, build/</span>
                <span className="text-slate-500 dark:text-slate-400 text-[10px]">Compiled artifacts</span>
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-0.5">
                <span className="font-bold text-slate-600 dark:text-slate-300 font-mono">.DS_Store, Thumbs.db</span>
                <span className="text-slate-500 dark:text-slate-400 text-[10px]">Operating system trash</span>
              </div>
            </div>
          </div>

          <TerminalBlock
            title="Terminal — Create & Commit .gitignore"
            copyText={gitignoreScript}
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>echo "node_modules/" &gt;&gt; .gitignore</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>echo ".env*" &gt;&gt; .gitignore</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git add .gitignore && git commit -m "chore: add .gitignore"</span>
            </div>
            <div className="text-emerald-400 text-xs mt-1 font-mono">
              [main 9d1c3a7] chore: add .gitignore
            </div>
          </TerminalBlock>

          <div className="alert-callout warning p-3 rounded bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-900 dark:text-amber-300 text-xs flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>
              <strong>Security Rule:</strong> Never commit API keys or database passwords. Once pushed to GitHub, history keeps them visible even if deleted in a later commit!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide8RemoteWorkflow() {
  const remoteScript = `git remote add origin https://github.com/username/my-website.git
git branch -M main
git push -u origin main`;

  return (
    <div className="flex flex-col gap-4 flex-1">
      <SlideHeader
        slideNum={8}
        totalSlides={8}
        badgeText="TEAM WORKFLOW"
        title="Remote Collaboration & Team Workflow"
        subtitle="Connecting local repositories to GitHub, pushing code, and the daily professional engineering cycle."
        badgeColor="purple"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-6 flex flex-col gap-4">
          <ImageFrame
            src="/images/git/github_collaboration_workflow.jpg"
            alt="GitHub Team Collaboration Workflow"
            caption="The Professional Loop: Clone/Pull ➔ Feature Branch ➔ Commit ➔ Push ➔ Pull Request ➔ Merge"
            badge="Full Loop"
          />

          <TerminalBlock
            title="Terminal — Connect Remote & First Push"
            copyText={remoteScript}
          >
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git remote add origin https://github.com/username/my-website.git</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git branch -M main</span>
            </div>
            <div className="term-cmd text-blue-400 font-bold flex items-center gap-1.5 mt-2">
              <span className="text-blue-500 select-none mr-2 font-bold">$</span>
              <span>git push -u origin main</span>
            </div>
            <div className="text-emerald-400 text-xs mt-1.5 font-mono">
              Enumerating objects: 4, done.<br />
              Writing objects: 100% (4/4), 420 bytes, done.<br />
              To https://github.com/username/my-website.git<br />
              &nbsp;* [new branch]      main -&gt; main<br />
              Branch 'main' set up to track remote branch 'main' from 'origin'.
            </div>
          </TerminalBlock>

          <div className="p-3 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs shadow-xs">
            <span className="text-slate-600 dark:text-slate-400">
              Verify your connected remote URLs:
            </span>
            <code className="text-sky-600 dark:text-sky-400 font-mono bg-slate-100 dark:bg-slate-950/60 px-2 py-0.5 rounded">
              git remote -v
            </code>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="p-4 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2.5 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              The Daily Professional Engineering Cycle
            </h4>
            <div className="flex flex-col gap-2 text-xs">
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  1. Sync remote changes
                </span>
                <code className="text-sky-600 dark:text-sky-400 font-mono">git pull origin main</code>
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  2. Create isolated branch
                </span>
                <code className="text-amber-600 dark:text-amber-400 font-mono">git switch -c feature/cool-thing</code>
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  3. Stage and record atomic commits
                </span>
                <code className="text-emerald-600 dark:text-emerald-400 font-mono">git add . && git commit -m "..."</code>
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  4. Publish branch to GitHub
                </span>
                <code className="text-purple-600 dark:text-purple-400 font-mono">git push -u origin feature/...</code>
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  5. Open Pull Request on GitHub
                </span>
                <span className="text-[11px] text-purple-600 dark:text-purple-400 font-semibold">Peer Review &amp; Merge</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-2 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              The 4 Golden Rules of Version Control
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-0.5">
                <span className="text-orange-600 dark:text-orange-400 font-bold">1. Atomic Commits</span>
                <span className="text-slate-600 dark:text-slate-400 text-[11px]">Small commits for one purpose at a time.</span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-0.5">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold">2. Clear Messages</span>
                <span className="text-slate-600 dark:text-slate-400 text-[11px]">Explain why the change was made in present tense.</span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-0.5">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">3. Pull Before Push</span>
                <span className="text-slate-600 dark:text-slate-400 text-[11px]">Always sync remote changes to avoid merge conflicts.</span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-0.5">
                <span className="text-purple-600 dark:text-purple-400 font-bold">4. Branch for Features</span>
                <span className="text-slate-600 dark:text-slate-400 text-[11px]">Never commit untested experiments directly into main.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const GIT_SLIDES = [
  {
    id: "slide-1",
    number: 1,
    part: "FOUNDATIONS",
    title: "Mental Model & The 4 Git Areas",
    Component: Slide1MentalModel,
  },
  {
    id: "slide-2",
    number: 2,
    part: "SETUP & CONFIG",
    title: "Installation & Developer Identity",
    Component: Slide2SetupIdentity,
  },
  {
    id: "slide-3",
    number: 3,
    part: "INITIALIZATION",
    title: "Repository Initialization & Status",
    Component: Slide3InitTracking,
  },
  {
    id: "slide-4",
    number: 4,
    part: "COMMITS & HISTORY",
    title: "Staging & Atomic Commits",
    Component: Slide4StagingCommits,
  },
  {
    id: "slide-5",
    number: 5,
    part: "BRANCHING",
    title: "Branching & Context Switching",
    Component: Slide5Branching,
  },
  {
    id: "slide-6",
    number: 6,
    part: "CONFLICTS",
    title: "Mastering Merge Conflicts",
    Component: Slide6MergeConflicts,
  },
  {
    id: "slide-7",
    number: 7,
    part: "SAFETY & HYGIENE",
    title: "Undoing Mistakes & Repository Hygiene",
    Component: Slide7UndoingHygiene,
  },
  {
    id: "slide-8",
    number: 8,
    part: "TEAM WORKFLOW",
    title: "Remote Collaboration & Team Workflow",
    Component: Slide8RemoteWorkflow,
  },
];
