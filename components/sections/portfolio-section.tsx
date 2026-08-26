import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { portfolio } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Портфоліо"
          title="Мої роботи"
          description="Приклади сайтів, які я створив для клієнтів."
          align="center"
          className="mb-12"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {portfolio.map((item) => (
            <Card
              key={item.title}
              as="article"
              className="group overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(2,6,23,0.7))] p-0 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/35 hover:shadow-[0_28px_72px_rgba(14,165,233,0.12)]"
            >
              <div className="relative overflow-hidden bg-slate-950/60">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className={
                    item.imageFit === "contain"
                      ? "object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      : "object-cover transition-transform duration-500 group-hover:scale-105"
                  }
                />
                <div className="aspect-[16/10]" aria-hidden="true" />
              </div>

              <div className="p-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {item.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  {item.description}
                </p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-100 transition-colors duration-300 hover:text-white"
                  aria-label={`Переглянути сайт ${item.title}`}
                >
                  Переглянути сайт
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
