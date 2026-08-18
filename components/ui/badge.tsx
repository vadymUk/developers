import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "success" | "gradient";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: "border border-white/10 bg-white/5 text-slate-200",
    outline: "border border-slate-700/80 bg-slate-950/40 text-slate-200",
    success: "border border-emerald-400/30 bg-emerald-500/10 text-emerald-200",
    gradient:
      "border border-sky-400/30 bg-gradient-to-r from-sky-500/20 via-cyan-400/10 to-violet-500/20 text-sky-100",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em]",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
