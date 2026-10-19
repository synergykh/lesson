# Git & GitHub: From Zero to Your First Push

A professional, modern, beginner-friendly presentation deck designed to teach developers, students, and beginners how to use Git and GitHub from scratch up to creating repositories, committing changes, and pushing their first project.

## Purpose

The presentation serves as a complete workshop and interactive guide:
- Demystifies version control without overwhelming beginners with jargon.
- Distinguishes clearly between local Git and remote GitHub.
- Demonstrates realistic terminal sessions with exact syntax.
- Provides a clean mental model of the 4 Git layers (Working Directory, Staging Area, Local Repository, Remote Repository).
- Teaches the everyday developer workflow cycle (`status` ➔ `add` ➔ `commit` ➔ `push`).
- Features hands-on exercises and troubleshooting for common beginner pitfalls.

## Features

- **38 Structured Slides:** Covers everything from basic concept definitions to advanced clone/pull and branching.
- **Developer-Grade Themes (Dark & Light Mode):** Clean GitHub-inspired visual palette with accessible contrast. Toggle effortlessly with the header theme button or the `T` keyboard shortcut.
- **Realistic UI Mockups & Visuals:** Includes real visual examples such as the GitHub repository creation form, verified remote repository view, and Git branch flow architecture.
- **Realistic Terminal Mockups:** Color-coded terminal windows with commands, prompts, and sample outputs.
- **Interactive Controls:**
  - Keyboard navigation (`←`/`→`, `Space`, `Home`/`End`, `L`/`H`, `PageUp`/`PageDown`).
  - Slide Overview Grid (`O` or `G`) to preview and jump to any of the 38 slides.
  - Fullscreen mode toggle (`F`).
  - Theme toggle (`T`) between Dark and Light modes.
  - Keyboard shortcuts help modal (`?`).
  - One-click copy buttons on terminal command blocks.
  - Deep-linking URL hash navigation (e.g. `#1` to `#38`).
  - Mobile swipe and touch gesture support.
- **Bilingual Language Switcher (EN / KM):** One-click toggle between English and Khmer (ភាសាខ្មែរ) with native typography via Google Fonts Kantumruy Pro, translating all slide titles, concepts, glossary tables, and UI controls while preserving exact terminal commands.
- **Print & PDF Export:** Dedicated `@media print` CSS layout formats each slide neatly for printing or saving to PDF.
- **Zero Dependencies:** Pure HTML5, modern Vanilla CSS, and lightweight Vanilla JavaScript.

## Slide Structure Catalog

1. **Title:** Git & GitHub: From Zero to Your First Push
2. **Overview:** What Are Git and GitHub?
3. **Overview:** Why Do We Need Git?
4. **Overview:** Git Vocabulary
5. **Part 1 — Installation:** Check if Git Is Installed (`git --version`)
6. **Part 1 — Installation:** Basic Git Configuration (`user.name`, `user.email`)
7. **Part 2 — Create a Project:** Create a New Project (`mkdir`, `cd`, `echo`)
8. **Part 2 — Create a Project:** Initialize Git (`git init`, `.git/`)
9. **Part 3 — Check Project Status:** `git status` (Untracked files)
10. **Part 4 — Staging:** `git add` (Working Directory to Staging Area)
11. **Part 4 — Staging:** Check the Staged Changes (`git status`)
12. **Part 5 — Commit:** Create Your First Commit (`git commit -m`)
13. **Part 5 — Commit:** View Commit History (`git log`, `git log --oneline`)
14. **Part 6 — Create GitHub Repository:** Create a GitHub Account
15. **Part 6 — Create GitHub Repository:** Create a New GitHub Repository
16. **Part 7 — Connect Local Git to GitHub:** Add GitHub Remote (`git remote add origin`, `git remote -v`)
17. **Part 7 — Connect Local Git to GitHub:** HTTPS vs SSH
18. **Part 8 — First Push:** Rename Branch to main (`git branch -M main`)
19. **Part 8 — First Push:** Push to GitHub (`git push -u origin main`)
20. **Part 8 — First Push:** Verify on GitHub
21. **Part 9 — Making Future Changes:** The Everyday Git Workflow
22. **Part 9 — Making Future Changes:** Example: Modify a Project
23. **Part 10 — Clone an Existing Project:** Clone a Repository (`git clone`)
24. **Part 10 — Clone an Existing Project:** Pull Changes (`git pull`)
25. **Part 11 — Branches:** What Is a Branch?
26. **Part 11 — Branches:** Create and Switch Branch (`git switch -c`)
27. **Part 12 — Common Commands:** Git Command Cheat Sheet
28. **Part 13 — Common Beginner Mistakes:** Forgetting to Commit
29. **Part 13 — Common Beginner Mistakes:** Wrong Remote URL (`git remote set-url`)
30. **Part 13 — Common Beginner Mistakes:** Push Rejected & Danger of `--force`
31. **Part 14 — .gitignore:** What Is .gitignore? & Secrets Management
32. **Part 14 — .gitignore:** Example Project Structure
33. **Part 15 — Complete Workflow:** From Zero to GitHub (Master Recipe)
34. **Part 15 — Complete Workflow:** The Mental Model (4 Layers)
35. **Part 16 — Hands-on Exercise:** Your First GitHub Project (`hello-git`)
36. **Part 16 — Hands-on Exercise:** Final Challenge (8-Step Drill)
37. **Wrap Up:** Final Summary
38. **Wrap Up:** Questions & Thank You

## Requirements & Prerequisites

- Any modern web browser (Google Chrome, Firefox, Safari, Microsoft Edge).
- Optional: Python 3 for running the local preview server via Makefile.

## Installation & Setup

No installation or external packages required. Clone or navigate to the directory:

```bash
cd /mnt/storage/Personal/Lesson
```

## Makefile Commands

| Command | Description |
|---|---|
| `make run` | Starts a local HTTP server on port 3000 (`http://localhost:3000`) |
| `make serve` | Alias for `make run` |

To run on a custom port:

```bash
make run PORT=8080
```

Alternatively, open `index.html` directly in any web browser.

## Keyboard Navigation

| Key | Action |
|---|---|
| `→`, `Space`, `L`, `PageDown` | Advance to next slide |
| `←`, `Backspace`, `H`, `PageUp` | Return to previous slide |
| `Home` | Jump to slide 1 |
| `End` | Jump to slide 38 |
| `O` or `G` | Toggle 38-slide visual overview grid |
| `F` | Toggle fullscreen mode |
| `T` | Toggle Light / Dark theme |
| `?` | Toggle keyboard shortcuts modal |
| `Esc` | Close any open modal |

## Technology Stack & Credits

| Technology | Role | Website |
|---|---|---|
| **HTML5** | Semantic slide markup and document hierarchy | [developer.mozilla.org/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) |
| **CSS3** | Vanilla styles, GitHub-inspired dual theme (dark & light), responsive layouts, print rules | [developer.mozilla.org/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) |
| **JavaScript (ES6+)** | Slide transitions, keyboard routing, clipboard actions, touch handling | [developer.mozilla.org/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| **Python 3** | Lightweight built-in local development server | [python.org](https://www.python.org/) |
| **Git** | Distributed version control system (course subject) | [git-scm.com](https://git-scm.com/) |
| **GitHub** | Cloud Git repository hosting platform (course subject) | [github.com](https://github.com/) |

## Project Structure

```text
Lesson/
├── Makefile        # Simple runner targets
├── README.md       # Documentation and technology stack
├── images/         # Real UI mockups and visual illustrations
│   ├── git_flow_hero.jpg
│   ├── github_new_repo_ui.jpg
│   └── github_repo_view.jpg
├── index.html      # Presentation deck (38 slides)
├── script.js       # Presentation controller and interactions
├── styles.css      # Presentation design system and responsive layout
└── translations.js # English and Khmer localization dictionary
```
