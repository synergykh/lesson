import React from "react";

export default function ImageFrame({
  src,
  alt,
  caption,
  badge = "Visual Diagram",
  maxHeight = "max-h-[290px]",
}) {
  return (
    <div className="slide-visual-media relative bg-slate-900 border border-slate-800/80 rounded-lg overflow-hidden flex flex-col justify-between shadow-2xl group transition-all duration-300 hover:border-slate-700">
      <div className="overflow-hidden flex-1 flex items-center justify-center p-2 bg-slate-900/70">
        <img
          src={src}
          alt={alt}
          className={`w-full h-full ${maxHeight} object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.01]`}
          loading="lazy"
        />
      </div>
      <div className="p-2.5 px-3 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between gap-2">
        <span className="text-xs text-slate-300 font-medium truncate">
          {caption}
        </span>
        <span className="text-[10px]  font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0 uppercase">
          {badge}
        </span>
      </div>
    </div>
  );
}
