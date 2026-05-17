"use client";

const marqueeItems = [
  "Admissions Open for 2026-27",
  "AICTE Approved Programs",
  "Scholarships Available for Eligible Students",
  "Strong Placement Support",
  "Industry-Aligned Curriculum",
];

export function RedInfoMarqueeSection() {
  const content = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative overflow-hidden bg-accent py-3 text-accent-foreground">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-accent to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-accent to-transparent sm:w-24" />

      <div className="relative overflow-hidden">
        <div className="flex w-max items-center gap-8 pr-8 will-change-transform sm:gap-12 sm:pr-12" style={{ animation: "red-info-marquee 22s linear infinite" }}>
          {content.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-8 sm:gap-12">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] sm:text-sm">{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes red-info-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}