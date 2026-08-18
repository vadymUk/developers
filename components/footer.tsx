import Link from "next/link";

const footerNavigation = [
  { label: "Головна", href: "#top" },
  { label: "Послуги", href: "#services" },
  { label: "Роботи", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакти", href: "#contact" },
];

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
  return (
    <footer className="border-t border-white/10 bg-slate-950/85">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <Link
              href="#top"
              className="inline-flex items-center gap-3 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              aria-label="На головну"
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
              Розробка сучасних сайтів та Landing Page під ключ.
            </p>
          </div>

          <nav aria-label="Навігація у footer">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
              Навігація
            </h2>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-slate-300">
              {footerNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
              Контакти
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
          <p>© 2026 Web Studio. Усі права захищені.</p>
          <p>Створюю сайти, які працюють на результат.</p>
        </div>
      </div>
    </footer>
  );
}
