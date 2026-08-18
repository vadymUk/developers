import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as?: "div" | "article" | "section";
}

export function Card({
  as: Component = "div",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(2,6,23,0.36)] backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-300 hover:scale-[1.01] hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-[0_28px_72px_rgba(14,165,233,0.12)]",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
