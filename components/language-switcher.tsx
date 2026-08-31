"use client";

import { locales, localeLabels, localeNames } from "@/lib/i18n/translations";
import { useLanguage } from "@/lib/i18n/language-context";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.languageSwitcher.label}
      className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1"
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          title={localeNames[code]}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors",
            locale === code
              ? "bg-sky-400/90 text-slate-950"
              : "text-slate-300 hover:text-white",
          )}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
}
