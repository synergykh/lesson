# UI, Style & Design Architecture

This document outlines the UI, styling architecture, and design specifications for the **Fullstack Developer Curriculum** interactive learning platform.

---

## 1. Design Philosophy

The interface is built around a **developer-first, minimal, and high-density** visual philosophy:

- **Clean & Distraction-Free**: Visual clutter, heavy drop shadows, and ornamental gradients are eliminated in favor of clean borders, precise contrast, and focused typography.
- **Consistent Geometric Rhythm**: All interactive and structural elements conform to a uniform 4px corner radius and compact spacing tokens.
- **Dual Developer Themes**: Full dark and light mode support styled after modern developer environments (GitHub, VS Code, and terminal emulators).
- **Presentation-Ready**: Every slide is structured to fit seamlessly into desktop screens, presentation projectors, and fullscreen modes.

---

## 2. Design System & Design Tokens

### Corner Radius (4px Strict Rule)

Every structural and interactive element across the application uses an exact **4px** border radius:

- **Cards & Containers**: Slide cards, course cards, info cards, terminal windows, modal dialogs (`rounded` / `rounded-[4px]`).
- **Controls & Buttons**: Navigation buttons, copy buttons, modal close buttons, filter pills, language toggles (`rounded`).
- **Badges & Tags**: Status pills, category tags, module markers, keyboard shortcuts (`<kbd>`, `rounded`).
- **Images & Media**: Visual diagram cards and image frames (`rounded` with `overflow-hidden`).

Global Tailwind configuration enforces:

```javascript
borderRadius: {
  none: "0px",
  sm: "4px",
  DEFAULT: "4px",
  md: "4px",
  lg: "4px",
  xl: "4px",
  "2xl": "4px",
  "3xl": "4px",
  full: "9999px" // reserved for indicator dots and status pulses
}
```

### Spacing & Layout Rhythm

Spacing follows a compact, balanced spacing scale:

- `4px` (`gap-1`, `p-1`) — Micro gaps between badges, icon-label offsets, and dots.
- `8px` (`gap-2`, `p-2`) — Button padding, list item gaps, and inline badge groups.
- `12px` (`gap-3`, `p-3`) — Info card interiors, terminal headers, and callout padding.
- `16px` (`gap-4`, `p-4`) — Card grid columns, slide header separators, and section divisions.
- `20px` (`gap-5`, `p-5`) — Main slide canvas padding and major column gutters.

---

## 3. Color Palette & Theming

### Dark Mode (Primary / Default)

- **App Canvas**: `bg-slate-900` (`#0f172a`) and `bg-slate-900` (`#020617`).
- **Card Backgrounds**: `bg-slate-900` / `bg-slate-800/80`.
- **Borders & Dividers**: `border-slate-800` (`#1e293b`) and `border-slate-700/60` (`#334155`).
- **Primary Text**: `text-white` (`#ffffff`) and `text-slate-200` (`#e2e8f0`).
- **Secondary Text**: `text-slate-400` (`#94a3b8`) and `text-slate-500` (`#64748b`).

### Light Mode

- **App Canvas**: `bg-slate-50` (`#f8fafc`).
- **Card Backgrounds**: `bg-white` (`#ffffff`) and `bg-slate-100`.
- **Borders & Dividers**: `border-slate-200` (`#e2e8f0`).
- **Primary Text**: `text-slate-900` (`#0f172a`).
- **Secondary Text**: `text-slate-600` (`#475569`).

### Semantic Color Accents

Each course module has a designated brand color tint applied through alpha-channel backgrounds (`bg-{color}-500/10`) and borders (`border-{color}-500/30`):

- **Git**: Orange (`orange-500` / `orange-400`)
- **GitHub**: Purple (`purple-500` / `purple-400`)
- **Next.js**: White / Slate (`white` in dark mode, `slate-900` in light mode)
- **Tailwind CSS**: Cyan (`cyan-500` / `cyan-400`)
- **Shadcn UI**: Slate / Zinc (`zinc-400` / `slate-300`)
- **PostgreSQL & Neon**: Emerald / Blue (`emerald-400` / `blue-400`)
- **Vercel**: Blue (`blue-500` / `blue-400`)
- **Cloudflare**: Amber (`amber-500` / `amber-400`)
- **Prompt Engineering**: Sky / Violet (`sky-400` / `violet-400`)

---

## 4. Typography & Bilingual Styling

### Font Stacks

- **Latin / English (Default)**: Modern sans-serif stack (`Inter`, `system-ui`, `-apple-system`, `sans-serif`) for crisp, legible UI labels, headers, and documentation.
- **Khmer (Bilingual `lang-km`)**: Dedicated **`Kantumruy Pro`** Google Font applied automatically via `body.lang-km`.
  - Heading adjustments: Scaled font size (`24px` for slide titles, `30px` for main titles) and expanded line-height (`1.35`) to ensure Khmer diacritic vowels and subscripts render without clipping.
- **Code & Terminal**: High-legibility monospace stack (`ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, `monospace`).

---

## 5. Icon System (Lucide React)

All raw, inline, and heterogeneous SVGs have been replaced with **[Lucide React](https://lucide.dev/)** icons:

- **Zero SVG Spaghetti**: No raw `<svg>` elements in React components or pages.
- **Consistent Scaling**: Uniform icon sizing throughout the app:
  - Micro icons: `w-3 h-3` or `w-3.5 h-3.5` (inline button arrows, copy icons, checklist checks).
  - Standard icons: `w-4 h-4` (navigation controls, toolbar actions, status callouts).
- **Tree-Shakeable**: Only needed icons are imported, minimizing bundle footprint.
- **Icon Mapping Reference**:
  - `CourseIcons`: `GitBranch`, `FolderGit2`, `Globe`, `Palette`, `Boxes`, `Database`, `Triangle`, `Cloud`, `Sparkles`, `BookOpen`.
  - `CourseViewer Controls`: `LayoutGrid`, `HelpCircle`, `Sun`, `Moon`, `Maximize`, `Minimize`, `ChevronLeft`, `ChevronRight`, `X`.
  - `Code & Terminal Blocks`: `Copy`, `Check`, `Code`.
  - `Alert & Status Callouts`: `Info`, `AlertTriangle`, `AlertCircle`, `CheckCircle2`, `XCircle`.

---

## 6. Image & Card Media Design

All visual diagrams, screenshots, and architecture flowcharts follow an **edge-to-edge, fit-full** layout specification:

- **Container Structure**: `slide-visual-media` and `real-image-card` containers expand to `w-full h-full flex-1 min-h-0` to match the exact height of their sibling content column.
- **Image Fill**: Images are rendered inside an `overflow-hidden flex-1 w-full min-h-0 relative` wrapper using:
  ```css
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  ```
- **Elimination of Gaps & Letterboxing**: Inner padding (`p-2`, `p-1`) and arbitrary height caps (`max-h-[300px]`) are eliminated, allowing the image to touch the top, left, and right borders flush.
- **Docked Caption Bar**: A 1px border (`border-t border-slate-800`) anchors the title and badge at the bottom with `shrink-0 z-10`, ensuring the image receives all remaining vertical space.
- **Micro-Interactions**: Subtle scale effect on card hover (`group-hover:scale-[1.02] transition-transform duration-300`).

---

## 7. UI Components & Layouts

### Hub Page (`#/`)

- **Header**: Sticky navigation with module counter, bilingual language switcher (EN / KM), and theme toggle.
- **Search & Filter Bar**: Instant real-time filtering with search query input, active category tabs, and clear button.
- **Course Card Grid**: 3-column responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`). Each card features an accent icon, level badge, title, localized description, tag pills, and an action trigger.

### Course Viewer Shell (`CourseViewer.jsx`)

- **Viewport**: Centered presentation stage (`slide-viewport`) with responsive max-width (`max-w-7xl`).
- **Slide Card (`slide-content-card`)**: 80% viewport height container (`h-[80%] min-h-[80%]`) with internal vertical scroll if needed.
- **Top Bar**: Minimal status bar showing course module title, current slide number, progress bar, theme switch, overview button, and fullscreen trigger.
- **Bottom Navigation**: Large accessible back/forward buttons, slide jump input, and keyboard hints.
- **Overview Grid Modal**: Overlay modal displaying all slides as miniature cards for rapid navigation.
- **Keyboard Shortcuts Modal**: Quick-reference guide showing keyboard controls (<kbd>Space</kbd>, <kbd>→</kbd>, <kbd>←</kbd>, <kbd>F</kbd>, <kbd>T</kbd>, <kbd>Esc</kbd>).

### Terminal & Code Windows

- Realistic shell header with macOS-style 3-dot buttons (Red, Yellow, Green).
- Color-coded prompts (`term-prompt text-blue-500 font-bold`).
- Integrated clipboard copy button with Lucide `Copy` / `Check` icons and timeout feedback.

---

## 8. Verification & Standards Checklist

- [x] **Tailwind CSS Exclusivity**: All styling implemented via Tailwind classes and clean `@layer base` rules.
- [x] **Universal 4px Radius**: No rounded corners greater or smaller than 4px.
- [x] **Zero Raw SVGs in React Code**: All icons use `lucide-react`.
- [x] **Images Fit Full**: All diagram and screenshot cards fill edge-to-edge without letterbox padding.
- [x] **Dark & Light Mode Parity**: High contrast and readability in both modes.
- [x] **Bilingual Support**: Text is localization-ready with proper font hierarchy.
