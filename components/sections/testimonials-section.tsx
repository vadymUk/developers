import { Quote, Star } from "lucide-react";
import { demoTestimonials } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Відгуки"
          title="Що кажуть клієнти"
          description="Нижче наведені демонстраційні відгуки, які згодом можна замінити на реальні відгуки ваших клієнтів."
          align="center"
          className="mb-12"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {demoTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.role}-${index}`}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(2,6,23,0.8))] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.42)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-[0_28px_72px_rgba(14,165,233,0.12)]"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sky-400/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-300/30 bg-gradient-to-br from-sky-400/25 to-violet-500/25 text-sm font-bold text-sky-100">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="h-7 w-7 text-sky-300/50" />
              </div>

              <div
                className="relative mt-5 flex items-center gap-1"
                aria-label={`Оцінка ${testimonial.rating} з 5`}
              >
                {Array.from({ length: testimonial.rating }).map(
                  (_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-amber-300 text-amber-300"
                    />
                  ),
                )}
              </div>

              <p className="relative mt-5 text-base leading-7 text-slate-300">
                “{testimonial.text}”
              </p>

              <div className="relative mt-6 border-t border-white/10 pt-4">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-sky-300/80">
                  {testimonial.name} – {testimonial.role}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
