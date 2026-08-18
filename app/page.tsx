import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { BackToTop } from "@/components/ui/back-to-top";
import { Reveal } from "@/components/ui/reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Reveal>
          <HeroSection />
        </Reveal>
        <Reveal delay={60}>
          <ServicesSection />
        </Reveal>
        <Reveal delay={80}>
          <ProcessSection />
        </Reveal>
        <Reveal delay={100}>
          <AboutSection />
        </Reveal>
        <Reveal delay={120}>
          <PortfolioSection />
        </Reveal>
        <Reveal delay={140}>
          <TestimonialsSection />
        </Reveal>
        <Reveal delay={160}>
          <FaqSection />
        </Reveal>
        <Reveal delay={180}>
          <CtaBanner />
        </Reveal>
        <Reveal delay={200}>
          <ContactSection />
        </Reveal>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
