import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "@/data/site";
import { Reveal, SectionTitle } from "./Reveal";

export const DeltaWay = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    const id = setInterval(() => embla.scrollNext(), 3800);
    return () => {
      clearInterval(id);
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <section data-testid="gallery-section" className="py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <Reveal>
          <div className="flex justify-center">
            <SectionTitle flanked>The Delta Way</SectionTitle>
          </div>
        </Reveal>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5 md:gap-6">
            {GALLERY.map((g, i) => (
              <div
                key={i}
                className="group relative flex-[0_0_80%] sm:flex-[0_0_48%] lg:flex-[0_0_38%] dm-frame p-2"
                data-testid={`gallery-slide-${i}`}
              >
                <div className="overflow-hidden">
                  <img
                    src={g.url}
                    alt={g.label}
                    className="img-moto w-full h-[300px] md:h-[440px] object-cover"
                  />
                </div>
                <span className="absolute bottom-5 left-5 font-display italic font-bold uppercase text-white text-xl tracking-wide">
                  {g.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-2">
            {GALLERY.map((_, i) => (
              <button
                key={i}
                onClick={() => embla && embla.scrollTo(i)}
                aria-label={`Slide ${i + 1}`}
                data-testid={`gallery-dot-${i}`}
                className={`h-1 transition-all duration-300 ${
                  selected === i ? "w-10 bg-[#C9A227]" : "w-5 bg-white/20"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <ArrowBtn testid="gallery-prev" onClick={scrollPrev}>
              <ChevronLeft size={22} />
            </ArrowBtn>
            <ArrowBtn testid="gallery-next" onClick={scrollNext}>
              <ChevronRight size={22} />
            </ArrowBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

const ArrowBtn = ({ children, onClick, testid }) => (
  <button
    data-testid={testid}
    onClick={onClick}
    className="h-12 w-12 flex items-center justify-center border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#121212] transition-all"
  >
    {children}
  </button>
);
