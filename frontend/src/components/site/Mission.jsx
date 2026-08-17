import { ArrowRight } from "lucide-react";
import { IMG } from "@/data/site";
import { Reveal, SectionTitle } from "./Reveal";
import { scrollToId } from "@/hooks/useLenis";

export const Mission = () => (
  <section
    id="about"
    data-testid="mission-section"
    className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-36"
  >
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <Reveal>
        <div className="group dm-frame p-2 overflow-hidden">
          <div className="overflow-hidden">
            <img
              src={IMG.mission}
              alt="Delta Moto crew"
              className="img-moto w-full h-[380px] md:h-[540px] object-cover"
            />
          </div>
        </div>
      </Reveal>

      <div>
        <Reveal>
          <span className="text-[#4A7FB5] uppercase tracking-[0.25em] text-sm font-semibold">
            01 · Who We Are
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-4">
            <SectionTitle>Our Mission</SectionTitle>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 text-lg md:text-xl leading-relaxed text-dm-body font-light max-w-xl">
            Riders hand over a machine they love, and we earn that trust every
            single job. Real garages, real hands, real Montreal streets. No
            stock-photo promises, no corporate runaround.
          </p>
          <p className="mt-5 text-base leading-relaxed text-dm-muted max-w-xl">
            Every tie-down strap, every chrome finish, every stored bike is
            treated like it's our own. That's the Delta standard.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <button
            data-testid="mission-cta"
            onClick={() => scrollToId("services")}
            className="mt-10 group inline-flex items-center gap-3 border border-[#C9A227] px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#121212] transition-all duration-300"
          >
            Learn More
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </Reveal>
      </div>
    </div>
  </section>
);
