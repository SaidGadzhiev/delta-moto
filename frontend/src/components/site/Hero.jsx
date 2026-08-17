import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { IMG } from "@/data/site";
import { scrollToId } from "@/hooks/useLenis";

const line = {
  hidden: { y: "115%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 0.9, delay: 0.25 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Line = ({ children, i }) => (
  <div className="overflow-hidden">
    <motion.div variants={line} custom={i} initial="hidden" animate="show">
      {children}
    </motion.div>
  </div>
);

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      data-testid="hero-section"
      className="relative h-[100svh] min-h-[620px] w-full overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={IMG.hero}
          alt="Delta Moto"
          className="h-full w-full object-cover"
          style={{ filter: "grayscale(1) contrast(1.2) brightness(0.6)" }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/45 to-[#121212]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/60 to-transparent" />

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 h-full max-w-7xl mx-auto px-5 md:px-10 flex flex-col justify-end pb-20 md:pb-24"
      >
        <h1 className="font-display font-bold italic uppercase text-white leading-[0.9] text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl">
          <Line i={0}>Ride In.</Line>
          <Line i={1}>
            <span className="text-[#C9A227]">Trust Us.</span> Ride Out.
          </Line>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-7 max-w-xl text-base md:text-lg text-dm-body font-light"
        >
          Montreal's trusted crew for motorcycle transport, detailing & storage.
          We move it, we clean it, we store it — you ride when you're ready.
        </motion.p>

        <motion.button
          data-testid="hero-cta"
          onClick={() => scrollToId("services")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-9 group inline-flex w-fit items-center gap-3 bg-[#C9A227] px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#121212] hover:brightness-110 transition-all"
        >
          Our Services
          <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  );
};
