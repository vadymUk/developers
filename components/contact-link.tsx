"use client";

import type { ComponentPropsWithoutRef, MouseEventHandler } from "react";

type ContactLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href">;

export function ContactLink({ onClick, ...props }: ContactLinkProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      props.target === "_blank"
    ) {
      return;
    }

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previousScrollBehavior;
    });
  };

  return <a href="#contact" {...props} onClick={handleClick} />;
}
