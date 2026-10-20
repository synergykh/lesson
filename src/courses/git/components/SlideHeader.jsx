import React from "react";
import { Badge } from "../../../components/ui/badge";

export default function SlideHeader({
  slideNum,
  totalSlides = 23,
  badgeText,
  title,
  subtitle,
  badgeColor = "blue",
}) {
  const colorMap = {
    blue: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    green: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    orange: "border-orange-500/30 bg-orange-500/10 text-orange-400",
    purple: "border-purple-500/30 bg-purple-500/10 text-purple-400",
    amber: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    red: "border-rose-500/30 bg-rose-500/10 text-rose-400",
  };

  const badgeClass = colorMap[badgeColor] || colorMap.blue;

  return (
    <div className="slide-header flex items-start justify-between border-b border-slate-800/80 pb-3 gap-3 shrink-0">
      <div className="slide-title-wrap flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase border ${badgeClass}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Slide {String(slideNum).padStart(2, "0")} / {totalSlides}
          </span>
          {badgeText && (
            <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
              {badgeText}
            </span>
          )}
        </div>
        <h2 className="slide-title text-2xl md:text-3xl font-black text-white m-0 tracking-tight leading-snug">
          {title}
        </h2>
        {subtitle && (
          <p className="slide-subtitle text-xs md:text-sm text-slate-400 m-0">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
