import {
  ArrowRight,
  Building2,
  LayoutTemplate,
  ShoppingBag,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

const offers = [
  {
    title: "Landing Page",
    description:
      "Односторінковий сайт для реклами послуги, продукту або бізнесу.",
    icon: LayoutTemplate,
    features: ["Швидкий старт", "Продаючий акцент", "SEO-структура"],
    accent: "from-sky-500/25 via-cyan-400/10 to-violet-500/20",
  },
  {
    title: "Інтернет-магазин",
    description:
      "Невеликий сучасний онлайн-магазин із каталогом товарів та необхідним функціоналом.",
    icon: ShoppingBag,
    features: ["Каталог товарів", "Уніфікований UX", "Просте оформлення"],
    accent: "from-violet-500/25 via-fuchsia-400/10 to-sky-500/20",
  },
  {
    title: "Бізнес-сайт",
    description:
      "Професійний сайт компанії, майстра або приватного підприємця.",
    icon: Building2,
    features: ["Візуальна довіра", "Чітка структура", "Під ключ"],
    accent: "from-emerald-500/20 via-cyan-400/10 to-sky-500/20",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.08),transparent_42%)]" />
      <Container>
        <SectionHeading
          eyebrow="Послуги"
          title="Створюю сайти під ваші задачі"
          description="Рішення для бізнесу, який хоче виглядати професійно, отримувати більше клієнтів і працювати без хаосу."
          align="center"
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {offers.map(
            ({ title, description, features, icon: Icon, accent }) => (
              <Card
                key={title}
                as="article"
                className="group relative h-full overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.9),rgba(2,6,23,0.82))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/35 hover:shadow-[0_25px_80px_rgba(56,189,248,0.12)]"
              >
                <div
                  className={`pointer-events-none absolute inset-x-4 top-0 h-28 rounded-b-[2rem] bg-gradient-to-r ${accent} blur-2xl opacity-60 transition-opacity duration-300 group-hover:opacity-90`}
                />

                <div className="relative z-10">
                  <div className="mb-5 inline-flex rounded-2xl border border-sky-400/25 bg-[linear-gradient(135deg,rgba(125,211,252,0.18),rgba(139,92,246,0.15))] p-3 text-sky-100 shadow-[0_0_25px_rgba(56,189,248,0.12)] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-2xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-slate-200"
                      >
                        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-sky-100 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-sky-300"
                  >
                    Обговорити формат
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </Card>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
