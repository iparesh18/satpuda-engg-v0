"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination, Keyboard, A11y } from "swiper/modules";
import { Sparkles } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const slides = [
  {
    title: "Learning That Stays Practical",
    image: "/images/overview/student in class.png",
  },
  {
    title: "Hands-On Lab Culture",
    image: "/images/overview/student in lab.png",
  },
  {
    title: "Campus Built for Growth",
    image: "/images/overview/campus view.png",
  },
  {
    title: "Modern Campus Infrastructure",
    image: "/images/overview/campus building.png",
  },
  {
    title: "Smart Library & Study Zones",
    image: "/images/overview/smart library.png",
  },
  {
    title: "Events, Sports & College Life",
    image: "/images/overview/sports and activity.png",
  },
];

export function WhyChooseUsSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".why-strip-heading",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );
      gsap.fromTo(
        ".why-strip-subheading",
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.15, ease: "power3.out" }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#f4f9ff] py-14 sm:py-16 lg:py-18">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(2,21,69,0.08),transparent_32%),radial-gradient(circle_at_bottom,rgba(214,11,11,0.06),transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-4 max-w-3xl text-center sm:mb-5"
        >
          <span className="why-strip-label inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.26em] text-primary/80">
            <Sparkles className="h-4 w-4 text-accent" />
            Why Students Choose Satpuda
          </span>

          <h2 className="why-strip-heading mt-2 text-3xl font-black leading-[1.02] tracking-tight text-foreground opacity-0 sm:text-5xl lg:text-6xl">
            A visual look at the campus strengths
          </h2>

          <p className="why-strip-subheading mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground opacity-0 sm:text-base">
            Swipe through a quick cinematic strip of the spaces and experiences that shape student life.
          </p>
        </motion.div>

        <div className="relative rounded-4xl border border-border/60 bg-white/70 px-3 py-4 shadow-[0_30px_80px_rgba(2,21,69,0.12)] backdrop-blur-sm sm:px-4 sm:py-5 lg:rounded-[2.5rem]">
          <Swiper
            modules={[EffectCoverflow, Autoplay, Pagination, Keyboard, A11y]}
            effect="coverflow"
            centeredSlides
            grabCursor
            loop
            slidesPerView="auto"
            spaceBetween={12}
            speed={900}
            keyboard={{ enabled: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 28,
              stretch: 0,
              depth: 180,
              modifier: 1,
              slideShadows: false,
            }}
            className="why-strip-swiper overflow-visible pb-10"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.title} style={{ width: "clamp(240px, 24vw, 340px)" }}>
                <div className="group relative overflow-hidden rounded-3xl border border-border/70 bg-white shadow-[0_18px_50px_rgba(2,21,69,0.12)] transition-transform duration-500 hover:-translate-y-1">
                  <div className="relative aspect-[1.22/1] overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.08]"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/18 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/75">Satpuda</p>
                      <h3 className="mt-1 text-base font-bold leading-tight text-white sm:text-lg">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .why-strip-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        .why-strip-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.35);
          opacity: 1;
          transition: all 0.25s ease;
        }
        .why-strip-swiper .swiper-pagination-bullet-active {
          width: 26px;
          border-radius: 9999px;
          background: #d60b0b;
        }
      `}</style>
    </section>
  );
}
