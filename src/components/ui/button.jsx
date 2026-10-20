import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-40 cursor-pointer select-none dark:text-white",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-500 shadow-sm",
        destructive: "bg-red-600 text-white hover:bg-red-500 shadow-sm",
        outline:
          "border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white hover:border-slate-600",
        secondary:
          "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700",
        ghost: "hover:bg-slate-800 hover:text-white text-slate-300",
        link: "text-blue-400 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-7 px-2.5 text-xs",
        lg: "h-10 px-6",
        icon: "h-[34px] w-[34px] p-0 shrink-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
