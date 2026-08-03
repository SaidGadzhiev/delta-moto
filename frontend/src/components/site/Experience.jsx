import { ArrowRight } from "lucide-react";
import { STEPS, IMG } from "@/data/site";
import { Reveal, SectionTitle } from "./Reveal";
import { scrollToId } from "@/hooks/useLenis";

const PHOTOS = [IMG.transport, IMG.detailing, IMG.storage];

export const Experience = () => (
  <section
    id="services"
    data-testid="experience-section"
    className="bg-[#161616] border-y border-white/5 py-24 md:py-36"
  >
    <div className="max-w-7xl mx-auto px-5 md:px-10">
      <Reveal>
        <div className="flex justify-center">
          <SectionTitle flanked>Your Experience</SectionTitle>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-10 md:gap-8">
        {STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.12}>
            <div
              data-testid={`step-card-${i + 1}`}
              className="group flex flex-col h-full"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-anton text-6xl md:text-7xl leading-none text-white/[0.08]">
                  {s.n}
                </span>
                <span className="text-dm-muted uppercase tracking-[0.25em] text-xs font-semibold">
                  {s.step}
                </span>
              </div>

              <h3 className="mt-2 font-display font-bold italic uppercase text-3xl md:text-4xl text-[#4A7FB5]">
                {s.title}
              </h3>

              <p className="mt-5 text-dm-body font-light leading-relaxed min-h-[120px]">
                {s.body}
              </p>

              <div className="dm-frame p-2 overflow-hidden mt-4">
                <div className="overflow-hidden">
                  <img
                    src={PHOTOS[i]}
                    alt={s.title}
                    className="img-moto w-full h-64 object-cover"
                  />
                </div>
              </div>

              <button
                data-testid={`step-link-${i + 1}`}
                onClick={() => scrollToId("contact")}
                className="mt-6 inline-flex items-center gap-2 text-[#4A7FB5] hover:text-[#C9A227] text-sm uppercase tracking-[0.2em] font-medium transition-colors self-start"
              >
                Learn More
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
