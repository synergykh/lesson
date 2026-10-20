import React, { useState } from "react";

export default function TerminalBlock({
  title = "Terminal",
  children,
  copyText = "",
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!copyText) return;
    navigator.clipboard.writeText(copyText.trim()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="terminal-mockup bg-slate-900 border border-slate-800 rounded-lg overflow-hidden  text-xs shadow-xl flex flex-col">
      <div className="terminal-header flex items-center justify-between px-3.5 py-2.5 bg-slate-900/90 border-b border-slate-800">
        <div className="terminal-dots flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
        </div>
        <span className="terminal-title text-[11px] text-slate-400 font-semibold tracking-wide">
          {title}
        </span>
        {copyText ? (
          <button
            type="button"
            onClick={handleCopy}
            className={`text-[10px] px-2.5 py-0.5 rounded  font-semibold cursor-pointer flex items-center gap-1 border transition-colors ${
              copied
                ? "bg-emerald-600/30 text-emerald-300 border-emerald-500/40"
                : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700"
            }`}
          >
            {copied ? "Copied! ✓" : "Copy"}
          </button>
        ) : (
          <div className="w-8" />
        )}
      </div>
      <div className="terminal-body p-4 overflow-x-auto text-slate-200 leading-relaxed  text-xs flex-1">
        {children}
      </div>
    </div>
  );
}
