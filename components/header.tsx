"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();
  const navLabels = [
    t.nav.home,
    t.nav.services,
    t.nav.portfolio,
    t.nav.process,
    t.nav.faq,
    t.nav.contact,
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "border-white/10 bg-slate-950/75 shadow-[0_12px_40px_rgba(2,6,23,0.35)] backdrop-blur-xl"
          : "border-white/5 bg-slate-950/45 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="flex items-center gap-3"
          aria-label={t.header.ariaHome}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#7dd3fc_0%,#38bdf8_18%,#60a5fa_35%,#8b5cf6_100%)] text-[0.7rem] font-black tracking-[0.12em] text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.3)]">
            &lt;/&gt;
          </div>
          <div className="leading-none">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-slate-400">
              DEV
            </p>
            <p className="mt-1 text-sm font-semibold text-white">Web Studio</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
            >
              {navLabels[index]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button asChild variant="primary" size="sm" className="gap-2">
            <Link href="#contact">
              {t.header.orderSite}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? t.header.closeMenu : t.header.openMenu}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition-colors hover:border-sky-400/40 hover:bg-white/10 lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out lg:hidden",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div
          id="mobile-navigation"
          aria-hidden={!mobileOpen}
          inert={!mobileOpen}
          className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2.5 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {navLabels[index]}
              </Link>
            ))}

            <div className="mt-2 px-3">
              <LanguageSwitcher />
            </div>

            <Button asChild size="lg" className="mt-3 w-full gap-2">
              <Link href="#contact" onClick={() => setMobileOpen(false)}>
                {t.header.orderSite}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
