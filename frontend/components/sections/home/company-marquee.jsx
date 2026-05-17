"use client";

import { motion } from "framer-motion";

const companies = [
  { name: "Tata", src: "/images/tata.png" },
  { name: "Mahindra", src: "/images/mahindra logo.png" },
  { name: "Volvo", src: "/images/volvo logo.jpg" },
  { name: "Eicher", src: "/images/eicher logo.png" },
  { name: "Suzuki", src: "/images/suzuki logo.png" },
  { name: "Apollo", src: "/images/apollo logo.png" },
  { name: "MRF", src: "/images/mrf.png" },
];

const marqueeTrack = [...companies, ...companies];

export function CompanyMarquee() {
  return (
    <section className="bg-white py-8 sm:py-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full px-4 sm:px-6 lg:px-8 text-center"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Recruiters & Partners</p>
        <h2 className="mt-2 text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
          Companies Our Students Connect With
        </h2>
      </motion.div>

      <div className="relative mt-5 w-full overflow-hidden py-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent sm:w-28" />

        <div className="overflow-hidden">
          <motion.div
            className="flex w-max items-center will-change-transform"
            animate={{ x: ["0%", "-25%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
          >
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center gap-10 sm:gap-14 pr-10 sm:pr-14" aria-hidden={index !== 0 ? "true" : undefined}>
                {companies.map((company) => (
                  <img
                    key={`${company.name}-${index}`}
                    src={company.src}
                    alt={company.name}
                    className="h-10 w-auto max-w-36 flex-none object-contain sm:h-12 sm:max-w-44"
                    loading="lazy"
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
