"use client";

import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  Lightbulb,
  MessageCircle,
  MousePointer2,
  Rocket,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/lib/i18n/language-context";

const icons = [MessageCircle, MousePointer2, Rocket, CheckCircle2, Lightbulb];

export function ProcessSection() {
  const { t } = useLanguage();
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-step"));
            setVisibleSteps((current) =>
              current.includes(index) ? current : [...current, index],
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.08),transparent_38%)]" />
      <Container>
        <SectionHeading
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          description={t.process.description}
          align="center"
          className="mb-12"
        />

        <div className="relative">
          <div className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-sky-400/70 via-violet-400/50 to-emerald-400/70 md:bottom-auto md:left-0 md:right-0 md:top-6 md:h-px md:w-auto md:bg-gradient-to-r" />

          <div className="grid gap-8 md:grid-cols-5 md:gap-5">
            {t.process.steps.map((step, index) => {
              const Icon = icons[index];
              const isVisible = visibleSteps.includes(index);

              return (
                <div
                  key={step.title}
                  ref={(element) => {
                    stepRefs.current[index] = element;
                  }}
                  data-step={index}
                  className={`group relative pl-16 transition-all duration-700 md:pl-0 md:pt-16 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                >
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-sky-300/35 bg-slate-950 text-sky-50 shadow-[0_0_25px_rgba(96,165,250,0.2)] md:left-1/2 md:-translate-x-1/2">
                    <span className="absolute inset-1 rounded-full bg-gradient-to-br from-sky-400/20 to-violet-500/20" />
                    <Icon className="relative h-5 w-5" />
                  </div>

                  <div className="relative min-h-[220px] rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(2,6,23,0.8))] p-5 shadow-[0_20px_60px_rgba(2,6,23,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 md:min-h-[260px] md:p-6">
                    <span className="text-sm font-semibold text-sky-300">
                      {t.process.stepLabel} {index + 1}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold leading-tight text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
