"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useLanguage } from "@/lib/i18n/language-context";

export function CtaBanner() {
  const { t } = useLanguage();

  return (
    <section className="py-8">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-sky-400/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.18),rgba(15,23,42,0.82),rgba(76,29,149,0.22))] p-[1px] shadow-[0_30px_80px_rgba(14,165,233,0.12)]">
          <div className="rounded-[calc(2rem-1px)] bg-[linear-gradient(135deg,rgba(2,6,23,0.95),rgba(15,23,42,0.8))] px-6 py-10 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sky-200">
                  {t.cta.eyebrow}
                </p>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  {t.cta.title}
                </h3>
              </div>

              <Button
                asChild
                variant="secondary"
                className="border-sky-400/30 bg-white/5 text-white hover:bg-white/10"
              >
                <Link href="#contact" className="gap-2">
                  {t.cta.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
