"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading.jsx";

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
    <section className="py-8 sm:py-10">
      <SectionHeading
        eyebrow="Recruiters & Partners"
        title="Companies Our Students Connect With"
        className="px-4 sm:px-6 lg:px-8"
        highlights={['Companies', 'Students']}
      />

      <div className="relative mt-5 w-full overflow-hidden py-2">
        <div className="overflow-hidden">
          <motion.div
            className="flex w-max items-center will-change-transform"
            animate={{ x: ["0%", "-25%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
          >
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center gap-12 pr-12 sm:gap-16 sm:pr-16" aria-hidden={index !== 0 ? "true" : undefined}>
                {companies.map((company) => (
                  <div
                    key={`${company.name}-${index}`}
                    className="flex h-16 w-40 flex-none items-center justify-center overflow-hidden rounded-2xl bg-white px-5 py-3 shadow-sm ring-1 ring-border/40 sm:h-18 sm:w-48 sm:px-6 lg:h-20 lg:w-56"
                  >
                    <img
                      src={company.src}
                      alt={company.name}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
