import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 40, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionTitle = ({ children, flanked = false, id }) => {
  if (flanked)
    return (
      <div className="flex items-center gap-6 md:gap-10 mb-16">
        <span className="dm-rule" />
        <h2 id={id} className="dm-heading text-4xl md:text-6xl whitespace-nowrap">
          {children}
        </h2>
        <span className="dm-rule" />
      </div>
    );
  return (
    <h2 id={id} className="dm-heading text-4xl md:text-6xl">
      {children}
    </h2>
  );
};
