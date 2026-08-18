import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  MonitorSmartphone,
  Star,
} from "lucide-react";
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

          <div className="relative rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.94),rgba(15,23,42,0.7))] p-4 shadow-[0_30px_80px_rgba(15,23,42,0.6)] backdrop-blur-sm">
            <div className="float-slow rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,#020817_0%,#0f172a_35%,#111827_100%)] p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#7dd3fc_0%,#38bdf8_18%,#60a5fa_35%,#8b5cf6_100%)] text-slate-950 shadow-[0_10px_20px_rgba(96,165,250,0.35)]">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                      Project
                    </p>
                    <p className="mt-1 text-lg font-semibold">
                      Business Growth
                    </p>
                  </div>
                </div>
                <div className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-medium text-emerald-300">
                  Online
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-300">Фокус проєкту</p>
                      <p className="mt-1 text-2xl font-bold text-white">
                        Результат
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(52,211,153,0.18),rgba(56,189,248,0.2))]">
                      <div className="h-5 w-5 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.7)]" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sky-200">
                      <MonitorSmartphone className="h-4 w-4" />
                      <span className="text-xs uppercase tracking-[0.18em]">
                        UX
                      </span>
                    </div>
                    <p className="mt-3 text-xl font-bold text-white">Fast</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-violet-200">
                      <Code2 className="h-4 w-4" />
                      <span className="text-xs uppercase tracking-[0.18em]">
                        Code
                      </span>
                    </div>
                    <p className="mt-3 text-xl font-bold text-white">Clean</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
