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
      className={`slide-visual-media relative w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded overflow-hidden flex flex-col shadow-xs group transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700 shrink-0 ${className}`}
    >
      <div className="w-full relative flex items-center justify-center bg-slate-900 overflow-hidden min-h-[160px] max-h-[300px]">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto max-h-[300px] object-cover transition-transform duration-300 group-hover:scale-[1.02] block"
          loading="lazy"
        />
      </div>
      {caption && (
        <div className="p-2.5 px-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2 shrink-0 z-10">
          <span className="text-xs text-slate-700 dark:text-slate-300 font-medium truncate">
            {caption}
          </span>
          {badge && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20 shrink-0 uppercase">
              {badge}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
