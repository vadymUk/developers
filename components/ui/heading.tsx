import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface HeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function Heading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: HeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Badge
          variant="outline"
          className={cn(
            "mb-5 inline-flex",
            align === "center" ? "justify-center" : "justify-start",
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </Badge>
      ) : null}

      <h2
        className={cn(
          "text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl",
          titleClassName,
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg",
            align === "center" && "mx-auto",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
