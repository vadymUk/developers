import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div";
  dense?: boolean;
}

export function Section({
  as: Component = "section",
  className,
  dense = false,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        "relative py-20 sm:py-24",
        dense && "py-12 sm:py-16",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
