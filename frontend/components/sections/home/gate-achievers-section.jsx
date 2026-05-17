"use client";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const baseAchievers = [
  { name: "ALI ANSARI", company: "SHERYIANS", image: "https://i.pravatar.cc/400?img=11" },
  { name: "SARTHAK SHARMA", company: "SHERYIANS", image: "https://i.pravatar.cc/400?img=12" },
  { name: "HARSH SHARMA", company: "SHERYIANS", image: "https://i.pravatar.cc/400?img=13" },
  { name: "ANKUR PRAJAPATI", company: "SHERYIANS", image: "https://i.pravatar.cc/400?img=14" },
  { name: "AKSHIT SINGLA", company: "MICROSOFT", image: "https://i.pravatar.cc/400?img=15" },
];
const dummyAchievers = [...baseAchievers, ...baseAchievers];

export function GateAchieversSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Achievement Spotlight</p>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight text-foreground sm:text-3xl lg:text-4xl">GATE 2026 Achievers</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Celebrating students who qualified in GATE with outstanding ranks and dedication.
            </p>
          </div>

          <Link
            to="/academics"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
          >
            Explore Academics
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

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
      <section className="relative overflow-hidden bg-[#f5f9ff] py-16 sm:py-20 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Our Recent Placement Achievers
            </h2>
          </motion.div>

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
                1024: { slidesPerView: 5 },
              }}
              coverflowEffect={{
                rotate: 15,
                stretch: 0,
                depth: 150,
                modifier: 1.5,
                slideShadows: true,
              }}
              navigation={{
                prevEl: ".achiever-prev",
                nextEl: ".achiever-next",
              }}
              className="!pb-12"
            >
              {dummyAchievers.map((achiever, idx) => (
                <SwiperSlide key={idx}>
                  <div className="group relative mx-auto aspect-[3/4] w-full max-w-[340px] overflow-hidden rounded-[2.5rem] bg-[#a93026] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(169,48,38,0.25)]">
                    {/* Icon placeholder */}
                    <div className="absolute right-6 top-6 z-10 opacity-80">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>

                    <img
                      src={achiever.image}
                      alt={achiever.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

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
