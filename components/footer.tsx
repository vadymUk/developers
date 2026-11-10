"use client";

import Link from "next/link";
import { ContactLink } from "@/components/contact-link";
import { useLanguage } from "@/lib/i18n/language-context";

const footerNavHrefs = ["#top", "#services", "#portfolio", "#faq", "#contact"];

const footerContacts = [
  {
    label: "Viber",
    href: "viber://chat?number=%2B48576222842",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/48576222842",
    external: true,
  },
  {
    label: "Телефон",
    href: "tel:+48576222842",
  },
];

export function Footer() {
  const { t } = useLanguage();
  const footerNavLabels = [
    t.nav.home,
    t.nav.services,
    t.nav.portfolio,
    t.nav.faq,
    t.nav.contact,
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950/85">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <Link
              href="#top"
              className="inline-flex items-center gap-3 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              aria-label={t.header.ariaHome}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#7dd3fc_0%,#38bdf8_18%,#60a5fa_35%,#8b5cf6_100%)] text-[0.7rem] font-black tracking-[0.12em] text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.3)]">
                &lt;/&gt;
              </span>
              <span className="leading-none">
                <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-slate-400">
                  DEV
                </span>
                <span className="mt-1 block text-sm font-semibold text-white">
                  Web Studio
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-base leading-7 text-slate-300">
              {t.footer.description}
            </p>
          </div>

          <nav aria-label={t.footer.navHeading}>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
              {t.footer.navHeading}
            </h2>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-slate-300">
              {footerNavHrefs.map((href, index) =>
                href === "#contact" ? (
                  <ContactLink
                    key={href}
                    className="rounded-md outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-sky-300"
                  >
                    {footerNavLabels[index]}
                  </ContactLink>
                ) : (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-md outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-sky-300"
                  >
                    {footerNavLabels[index]}
                  </Link>
                ),
              )}
            </div>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
              {t.footer.contactsHeading}
            </h2>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-slate-300">
              {footerContacts.map((contact) => (
                <Link
                  key={contact.label}
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  className="rounded-md outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  {contact.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
