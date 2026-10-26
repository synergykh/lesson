import React from "react";
import {
  GitBranch,
  FolderGit2,
  Globe,
  Palette,
  Boxes,
  Database,
  Triangle,
  Sparkles,
  Cloud,
  BookOpen,
} from "lucide-react";

export function CourseIcon({ id, className = "w-6 h-6" }) {
  switch (id) {
    case "git":
      return <GitBranch className={className} />;
    case "github":
      return <FolderGit2 className={className} />;
    case "nextjs":
      return <Globe className={className} />;
    case "tailwindcss":
      return <Palette className={className} />;
    case "shadcn":
      return <Boxes className={className} />;
    case "postgres":
      return <Database className={className} />;
    case "vercel":
      return <Triangle className={className} />;
    case "prompting":
      return <Sparkles className={className} />;
    case "cloudflare":
      return <Cloud className={className} />;
    default:
      return <BookOpen className={className} />;
  }
}
