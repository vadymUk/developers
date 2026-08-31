"use client";

import {
  Gauge,
  Handshake,
  Layers3,
  SearchCheck,
  Smartphone,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/language-context";

const icons = [Layers3, Smartphone, Gauge, SearchCheck, Handshake];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_45%,_rgba(56,189,248,0.1),transparent_30%),radial-gradient(circle_at_85%_70%,_rgba(139,92,246,0.08),transparent_30%)]" />
      <Container>
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={t.about.description}
          align="center"
          className="mb-12"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.about.advantages.map(
            ({ title, description, indicator }, index) => {
              const Icon = icons[index];
              return (
                <Card
                  key={title}
                  as="article"
                  className="group relative overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(2,6,23,0.78))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/35 hover:shadow-[0_26px_70px_rgba(56,189,248,0.12)]"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-400/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-400/25 bg-sky-400/10 text-sky-200 transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-right text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-sky-300/80">
                        {indicator}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {description}
                    </p>
                  </div>
                </Card>
              );
            },
          )}
        </div>
      </Container>
    </section>
  );
}
