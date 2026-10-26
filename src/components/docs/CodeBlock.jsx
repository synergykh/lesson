import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function CodeBlock({
  code = "",
  language = "bash",
  filename = "",
  className = "",
}) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!code) return;
    navigator.clipboard.writeText(code.trim()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className={`code-block-container rounded border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 overflow-hidden my-4 text-xs ${className}`}
    >
      <div className="flex items-center justify-between px-3.5 py-2 bg-slate-900/80 border-b border-slate-800">
        <div className="flex items-center gap-2">
          {filename ? (
            <span className="font-mono text-[11px] text-slate-300 font-medium">
              {filename}
            </span>
          ) : (
            <span className="uppercase text-[10px] font-bold tracking-wider text-slate-400">
              {language}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={
            copied ? t("ui_copied", "Copied!") : t("ui_copy", "Copy code")
          }
          className={`text-[11px] px-2.5 py-1 rounded font-medium flex items-center gap-1.5 transition-colors border ${
            copied
              ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              : "bg-slate-800 text-slate-300 border-slate-700 hover:text-white hover:bg-slate-700"
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t("ui_copied", "Copied!")}</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span>{t("ui_copy", "Copy")}</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto font-mono text-xs leading-relaxed text-slate-200 m-0">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}
