import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center px-2 py-0.5 text-[11px] font-bold  transition-colors focus:outline-none select-none uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "border border-blue-500/30 bg-blue-500/10 text-blue-400",
        secondary:
          "border border-slate-700 bg-slate-800 text-slate-400 font-sans font-semibold normal-case tracking-normal text-xs",
        destructive: "border border-red-500/30 bg-red-500/10 text-red-400",
        outline:
          "border border-slate-800 bg-slate-950 text-slate-300  text-[11px]",
        success: "border border-green-500/30 bg-green-500/10 text-green-400",
        warning: "border border-amber-500/30 bg-amber-500/10 text-amber-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
