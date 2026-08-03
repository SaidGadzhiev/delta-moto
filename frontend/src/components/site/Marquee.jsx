export const Marquee = () => {
  const items = ["Transport", "Detail", "Store", "Repeat"];
  const row = [...items, ...items, ...items, ...items];
  return (
    <div
      data-testid="marquee"
      className="border-y border-white/5 bg-[#121212] py-6 md:py-8 overflow-hidden select-none"
    >
      <div className="marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center pr-8" aria-hidden={dup === 1}>
            {row.map((t, i) => (
              <span key={`${dup}-${i}`} className="flex items-center">
                <span
                  className={`font-display italic font-bold uppercase text-4xl md:text-6xl px-6 ${
                    i % 2 === 0 ? "text-white" : "marquee-outline"
                  }`}
                >
                  {t}
                </span>
                <span className="text-[#C9A227] text-3xl md:text-5xl">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
