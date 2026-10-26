import React from "react";
import { Info, Lightbulb, AlertTriangle, AlertOctagon, CheckCircle2 } from "lucide-react";

const CALLOUT_VARIANTS = {
  info: {
    icon: Info,
    container: "bg-sky-500/10 border-sky-500/30 text-sky-900 dark:text-sky-200 border-l-sky-500",
    iconColor: "text-sky-600 dark:text-sky-400",
  },
  tip: {
    icon: Lightbulb,
    container: "bg-emerald-500/10 border-emerald-500/30 text-emerald-900 dark:text-emerald-200 border-l-emerald-500",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  warning: {
    icon: AlertTriangle,
    container: "bg-amber-500/10 border-amber-500/30 text-amber-900 dark:text-amber-200 border-l-amber-500",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  danger: {
    icon: AlertOctagon,
    container: "bg-rose-500/10 border-rose-500/30 text-rose-900 dark:text-rose-200 border-l-rose-500",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
  success: {
    icon: CheckCircle2,
    container: "bg-green-500/10 border-green-500/30 text-green-900 dark:text-green-200 border-l-green-500",
    iconColor: "text-green-600 dark:text-green-400",
  },
};

export default function Callout({ variant = "info", title, children, className = "" }) {
  const config = CALLOUT_VARIANTS[variant] || CALLOUT_VARIANTS.info;
  const IconComponent = config.icon;

  return (
    <div
      className={`rounded border border-l-4 p-4 text-xs leading-relaxed flex items-start gap-3 my-4 ${config.container} ${className}`}
      role="alert"
    >
      <IconComponent className={`w-4 h-4 mt-0.5 shrink-0 ${config.iconColor}`} />
      <div className="flex-1 min-w-0">
        {title && <div className="font-bold text-sm mb-1">{title}</div>}
        <div className="text-slate-700 dark:text-slate-300 [&>p]:m-0 [&>p+p]:mt-2">{children}</div>
      </div>
    </div>
  );
}
