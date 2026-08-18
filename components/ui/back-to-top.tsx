"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY >= 500);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  function scrollToTop() {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <button
      type="button"
      aria-label="Повернутися нагору"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-sky-300/30 bg-slate-950/85 text-sky-100 shadow-[0_16px_40px_rgba(2,6,23,0.45),0_0_24px_rgba(56,189,248,0.12)] backdrop-blur-md outline-none transition-[opacity,transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-sky-200/60 hover:shadow-[0_20px_48px_rgba(2,6,23,0.55),0_0_30px_rgba(56,189,248,0.22)] focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:right-6 sm:h-13 sm:w-13",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5" />
    </button>
  );
}
