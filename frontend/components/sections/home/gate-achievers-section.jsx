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
  { name: "DEWANG MALEWAR", company: "FIRST STEP INNOVATION", image: "/images/placement/company-01.jpeg" },
  { name: "VISHAKHA BAGHELE", company: "FIRST STEP INNOVATION", image: "/images/placement/company-02.jpeg" },
  { name: "PREKSHA DWIVEDI", company: "FIRST STEP INNOVATION", image: "/images/placement/company-03.jpeg" },
  { name: "ANKUSH NANDAGOULI", company: "FIRST STEP INNOVATION", image: "/images/placement/company-04.jpeg" },
  { name: "RAJNEESH ASHWALE", company: "FIRST STEP INNOVATION", image: "/images/placement/company-05.jpeg" },
  { name: "ABHISHEK MANESHWAR", company: "GR INFRAPROJECTS LTD.", image: "/images/placement/company-06.jpeg" },
  { name: "RANVEER SHARMA", company: "LLOYDS METALS AND ENERGY LIMITED", image: "/images/placement/company-07.jpeg" },
  { name: "HARSHIT SELOKAR", company: "GR INFRAPROJECTS LTD.", image: "/images/placement/company-08.jpeg" },
  { name: "ANKIT BANDHE", company: "LLYODS METALS AND ENERGY LIMITED", image: "/images/placement/company-09.jpeg" },
  { name: "HIMANSHU DORAS", company: "GR INFRAPROJECTS LTD.", image: "/images/placement/company-10.jpeg" },
  { name: "DISHANT THAKRE", company: "LLYODS METALS AND ENERGY LIMITED", image: "/images/placement/company-11.jpeg" },
  { name: "OM DUBEY", company: "GR INFRAPROJECTS LTD.", image: "/images/placement/company-12.jpeg" },
  { name: "VINENDRA PAGARWAR", company: "GR INFRAPROJECTS LTD.", image: "/images/placement/company-13.jpeg" },
  { name: "DIPANSHU", company: "LLYODS METALS AND ENERGY LIMITED", image: "/images/placement/company-14.jpeg" },
  { name: "NAVEEN GAJBHIYE", company: "GR INFRAPROJECTS LTD.", image: "/images/placement/company-15.jpeg" },
  { name: "VIJESH KUMAR", company: "LLYODS METALS AND ENERGY LIMITED", image: "/images/placement/company-16.jpeg" },
  { name: "ADNAN KHAN", company: "LLYODS METALS AND ENERGY LIMITED", image: "/images/placement/company-17.jpeg" },
  { name: "SANJEET PANCHESWAR", company: "GROUP R MINING & EXPLORATION INDIA PVT LTD.", image: "/images/placement/18.jpeg" },
  { name: "MITHLESH KHERWAR", company: "GROUP R MINING & EXPLORATION INDIA PVT LTD.", image: "/images/placement/19.jpeg" },
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
            <div className="relative">
              {/* Fade overlays for side images */}
              <div className="hidden sm:block pointer-events-none absolute bottom-12 left-0 top-0 z-10 w-16 bg-gradient-to-r from-[#f5f9ff] to-transparent sm:w-24 lg:w-40" />
              <div className="hidden sm:block pointer-events-none absolute bottom-12 right-0 top-0 z-10 w-16 bg-gradient-to-l from-[#f5f9ff] to-transparent sm:w-24 lg:w-40" />

              <Swiper
                modules={[EffectCoverflow, Navigation, Autoplay]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                speed={1200}
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
            </div>

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
