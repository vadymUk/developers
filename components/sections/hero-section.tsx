import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-transparent">
      <div className="gradient-shift absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),_transparent_38%)]" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />

      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div className="reveal-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-slate-900/70 px-3 py-2 text-sm font-medium text-sky-100 shadow-[0_0_25px_rgba(56,189,248,0.08)] backdrop-blur-sm">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            Розробка сайтів під ключ
          </div>

          <h1 className="max-w-xl text-balance text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            Сучасні сайти, які допомагають вашому бізнесу виглядати професійно
            та отримувати більше клієнтів.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Я створюю Landing Page, інтернет-магазини та невеликі бізнес-сайти
            під ключ — від ідеї до готового сайту в інтернеті.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild className="gap-2">
              <Link href="#contact">
                Замовити сайт
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="#contact">Отримати консультацію</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
            {["Сучасний дизайн", "Адаптивність", "SEO-структура"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>{item}</span>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="relative reveal-up">
          <div className="absolute -left-5 top-8 h-24 w-24 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -right-6 bottom-10 h-28 w-28 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.6)] backdrop-blur-sm">
            <div className="float-slow relative w-full overflow-hidden rounded-[1.5rem] bg-slate-950">
              <Image
                src="/images/developt.jpg"
                alt="Development"
                width={800}
                height={800}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
