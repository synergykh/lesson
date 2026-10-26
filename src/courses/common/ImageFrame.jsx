import React from "react";

export default function ImageFrame({
  src,
  alt,
  caption,
  badge = "Visual Diagram",
  className = "",
}) {
  return (
    <div
      className={`slide-visual-media relative w-full h-full flex-1 min-h-0 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded overflow-hidden flex flex-col shadow-lg group transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700 ${className}`}
    >
      <div className="overflow-hidden flex-1 w-full min-h-0 relative flex items-center justify-center bg-slate-950">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
          loading="lazy"
        />
      </div>
      <div className="p-2.5 px-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2 shrink-0 z-10">
        <span className="text-xs text-slate-700 dark:text-slate-300 font-medium truncate">
          {caption}
        </span>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0 uppercase">
          {badge}
        </span>
      </div>
    </div>
  );
}
