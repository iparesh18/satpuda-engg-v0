"use client";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { SectionHeading } from "./section-heading.jsx";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const baseAchievers = [
  { name: "Placement Achiever 01", company: "Company 01", image: "/images/placement/company-01.jpeg" },
  { name: "Placement Achiever 02", company: "Company 02", image: "/images/placement/company-02.jpeg" },
  { name: "Placement Achiever 03", company: "Company 03", image: "/images/placement/company-03.jpeg" },
  { name: "Placement Achiever 04", company: "Company 04", image: "/images/placement/company-04.jpeg" },
  { name: "Placement Achiever 05", company: "Company 05", image: "/images/placement/company-05.jpeg" },
  { name: "Placement Achiever 06", company: "Company 06", image: "/images/placement/company-06.jpeg" },
  { name: "Placement Achiever 07", company: "Company 07", image: "/images/placement/company-07.jpeg" },
  { name: "Placement Achiever 08", company: "Company 08", image: "/images/placement/company-08.jpeg" },
  { name: "Placement Achiever 09", company: "Company 09", image: "/images/placement/company-09.jpeg" },
  { name: "Placement Achiever 10", company: "Company 10", image: "/images/placement/company-10.jpeg" },
  { name: "Placement Achiever 11", company: "Company 11", image: "/images/placement/company-11.jpeg" },
  { name: "Placement Achiever 12", company: "Company 12", image: "/images/placement/company-12.jpeg" },
  { name: "Placement Achiever 13", company: "Company 13", image: "/images/placement/company-13.jpeg" },
  { name: "Placement Achiever 14", company: "Company 14", image: "/images/placement/company-14.jpeg" },
  { name: "Placement Achiever 15", company: "Company 15", image: "/images/placement/company-15.jpeg" },
  { name: "Placement Achiever 16", company: "Company 16", image: "/images/placement/company-16.jpeg" },
  { name: "Placement Achiever 17", company: "Company 17", image: "/images/placement/company-17.jpeg" },
];

export function GateAchieversSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            align="left"
            eyebrow="Achievement Spotlight"
            title="GATE 2026 Achievers"
            description="Celebrating students who qualified in GATE with outstanding ranks and dedication."
                       className="mx-0 max-w-2xl"
            highlights={['GATE', 'Achievers']}
          />

          <Link
            to="/academics"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
          >
            Explore Academics
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_20px_45px_rgba(2,10,40,0.16)]"
        >
          <img
            src="/images/gate.png"
            alt="Satpuda College GATE 2026 achievers"
            className="h-auto w-full object-contain"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>

      {/* NEW SECTION: Placement Achievers */}
      <section className="relative overflow-hidden bg-[#f5f9ff] py-12 sm:py-14 lg:py-16">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Placement Spotlight"
            title="Our Recent Placement Achievers"
            className="mb-10"
            highlights={['Placement', 'Achievers']}
          />

          <div className="relative mx-auto max-w-6xl">
            <Swiper
              modules={[EffectCoverflow, Navigation, Autoplay]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 40,
                depth: 220,
                modifier: 1,
                scale: 0.9,
                slideShadows: false,
              }}
              navigation={{
                prevEl: ".achiever-prev",
                nextEl: ".achiever-next",
              }}
              className="pb-12!"
            >
              {baseAchievers.map((achiever, idx) => (
                <SwiperSlide key={idx}>
                  <div className="group relative mx-auto h-[440px] w-[300px] overflow-hidden rounded-[2.5rem] bg-[#a93026] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(169,48,38,0.25)] sm:h-[460px] sm:w-[310px] lg:h-[480px] lg:w-[320px]">
                    {/* Icon placeholder */}
                    <div className="absolute right-6 top-6 z-10 opacity-80">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>

                    <img
                      src={achiever.image}
                      alt={achiever.name}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-8 text-center">
                      <h3 className="text-2xl font-bold text-white tracking-wide">{achiever.name}</h3>
                      <p className="mt-2 text-xs font-bold uppercase tracking-[0.4em] text-white/70">
                        {achiever.company}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            <div className="mt-8 flex items-center justify-center gap-6">
              <button className="achiever-prev flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button className="achiever-next flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <style>{`
          .achiever-prev.swiper-button-disabled,
          .achiever-next.swiper-button-disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        `}</style>
      </section>
    </>
  );
}
