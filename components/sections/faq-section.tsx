"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-24">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Часті питання"
          description="Відповіді на найпоширеніші запитання про замовлення та виготовлення сайтів."
          align="center"
          className="mb-12"
        />

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article
                key={item.question}
                className={`group overflow-hidden rounded-2xl border bg-white/5 backdrop-blur-sm transition-colors duration-300 ${isOpen ? "border-sky-400/35" : "border-white/10 hover:border-sky-400/25"}`}
              >
                <button
                  type="button"
                  id={`faq-question-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left text-lg font-semibold text-white outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-300"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-sky-300" : ""}`}
                  />
                </button>
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-5 pb-5 text-base leading-7 text-slate-300">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
