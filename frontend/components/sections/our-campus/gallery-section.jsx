"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  Camera,
  Image as ImageIcon,
  MapPin,
  Star,
  Trophy,
  Users,
  Calendar
} from "lucide-react";
import Magnetic from "../../bits/magnetic.jsx";
import SplitText from "../../bits/split-text.jsx";
import BlurText from "../../bits/blur-text.jsx";
import ShinyText from "../../bits/shiny-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";
import DomeGallery from "../../bits/DomeGallery.jsx";

const highlightChips = [
  "Events & Culture",
  "Student Life",
  "Labs & Innovation",
  "Sports & Fitness",
  "Community Moments",
  "Campus Views"
];

const awards = [
  {
    icon: Trophy,
    title: "Awwwards Inspired",
    description: "Editorial layouts with bold, immersive visuals.",
    value: "01"
  },
  {
    icon: Award,
    title: "Design Impact",
    description: "Every frame designed to feel premium and alive.",
    value: "02"
  },
  {
    icon: Star,
    title: "Campus Moments",
    description: "Authentic stories captured across the year.",
    value: "03"
  }
];

const galleryImages = [
  {
    src: "/images/overview/campus overview.png",
    title: "Golden Hour Campus",
    tag: "Architecture"
  },
  {
    src: "/images/overview/student in class.png",
    title: "Active Learning",
    tag: "Academics"
  },
  {
    src: "/images/overview/event and culture.png",
    title: "Festive Nights",
    tag: "Events"
  },
  {
    src: "/images/overview/sports and activity.png",
    title: "Athletic Spirit",
    tag: "Sports"
  },
  {
    src: "/images/overview/student in lab.png",
    title: "Innovation Lab",
    tag: "Labs"
  },
  {
    src: "/images/overview/campus building.png",
    title: "Landmark View",
    tag: "Campus"
  }
];

const domeImages = [
  { src: "/images/overview/campus view.png", alt: "Open greens" },
  { src: "/images/overview/smart library.png", alt: "Knowledge hub" },
  { src: "/images/overview/college bus.png", alt: "Transport" },
  { src: "/images/overview/event and culture.png", alt: "Cultural pulse" },
  { src: "/images/overview/sports and activity.png", alt: "Champions" },
  { src: "/images/overview/campus overview.png", alt: "Campus overview" },
  { src: "/images/overview/student in class.png", alt: "Student learning" },
  { src: "/images/overview/student in lab.png", alt: "Innovation lab" }
];


export function GallerySection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }
    return () => {
      if (mediaQuery.addEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return (
    <main className="bg-background pb-20">
      <motion.section
        className="relative overflow-hidden border-b border-border/70 bg-card/40 pt-32 pb-16 lg:pt-36 lg:pb-24"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.1),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:100px_100px]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-primary font-semibold tracking-widest uppercase text-xs mb-6"
              >
                <div className="h-px w-8 bg-primary" />
                Visual Stories
              </motion.div>

              <SplitText
                text="Campus Gallery"
                className="text-5xl font-bold text-foreground sm:text-7xl lg:text-8xl tracking-tighter"
                delay={0.08}
              />
              <div className="mt-8 h-2 w-32 rounded-full bg-gradient-to-r from-primary via-primary/70 to-accent" />
              <p className="mt-10 max-w-xl text-xl text-muted-foreground leading-relaxed">
                <BlurText text="An editorial-style gallery capturing achievements, culture, and the vibrant energy of Satpuda College." />
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-12 flex flex-wrap gap-4"
              >
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-5 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 group inline-flex items-center gap-2">
                  Explore Highlights
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground ml-2">
                  <span>Our Campus</span>
                  <span className="text-muted-foreground/30">/</span>
                  <span className="text-foreground">Gallery</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-card">
                <motion.img
                  src="/images/overview/campus overview.png"
                  alt="Gallery hero"
                  className="w-full h-[500px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <Magnetic intensity={0.3}>
                <motion.div
                  className="absolute -bottom-10 -left-10 bg-card shadow-2xl rounded-[2rem] p-8 flex items-center gap-5 border border-border/50 backdrop-blur-xl"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Camera className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-foreground tracking-tight">Live Moments</div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">2026 Highlights</div>
                  </div>
                </motion.div>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[40px] border border-border/40 bg-card/40 backdrop-blur-md p-6 shadow-2xl sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 bg-primary/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 bg-accent/10 rounded-full blur-3xl opacity-50" />

          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80 mb-2">
            {highlightChips.map((chip) => (
              <Magnetic key={chip} intensity={0.2}>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/40 backdrop-blur-sm px-5 py-2.5 transition-all hover:bg-background/80 hover:border-primary/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {chip}
                </span>
              </Magnetic>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <style>{`
          @keyframes gallery-marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes gallery-marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}</style>
        <div className="relative overflow-hidden rounded-[3rem] border border-border/40 bg-card/40 backdrop-blur-xl p-8 shadow-2xl sm:p-12">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Dome Gallery</p>
              <h2 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl tracking-tight">Curated Visual Dome</h2>
              <BlurText
                text="A sweeping arc of stories that feels editorial and immersive. Hover across the dome to reveal each highlight."
                className="mt-6 text-lg leading-relaxed text-muted-foreground"
              />
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ImageIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Gallery Count</p>
                  <p className="text-3xl font-bold text-foreground">
                    <ShinyText text="120+" speed={3} color="rgba(59, 130, 246, 0.85)" />
                  </p>
                </div>
              </div>
            </div>

            {isMobile ? (
              <div className="space-y-5">
                <div className="overflow-hidden rounded-[2rem] border border-border/40 bg-background/40">
                  <div
                    className="flex w-max items-center gap-0 py-4 will-change-transform"
                    style={{ animation: "gallery-marquee-right 30s linear infinite" }}
                  >
                    <div className="flex items-center gap-4 pr-4">
                      {domeImages.map((image, index) => (
                        <div key={`marquee-1a-${index}`} className="h-28 w-40 shrink-0 overflow-hidden rounded-[1.25rem]">
                          <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 pr-4" aria-hidden>
                      {domeImages.map((image, index) => (
                        <div key={`marquee-1b-${index}`} className="h-28 w-40 shrink-0 overflow-hidden rounded-[1.25rem]">
                          <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-[2rem] border border-border/40 bg-background/40">
                  <div
                    className="flex w-max items-center gap-0 py-4 will-change-transform"
                    style={{ animation: "gallery-marquee-left 26s linear infinite" }}
                  >
                    <div className="flex items-center gap-4 pr-4">
                      {domeImages.map((image, index) => (
                        <div key={`marquee-2a-${index}`} className="h-28 w-40 shrink-0 overflow-hidden rounded-[1.25rem]">
                          <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 pr-4" aria-hidden>
                      {domeImages.map((image, index) => (
                        <div key={`marquee-2b-${index}`} className="h-28 w-40 shrink-0 overflow-hidden rounded-[1.25rem]">
                          <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-[2rem] border border-border/40 bg-background/40">
                  <div
                    className="flex w-max items-center gap-0 py-4 will-change-transform"
                    style={{ animation: "gallery-marquee-right 30s linear infinite" }}
                  >
                    <div className="flex items-center gap-4 pr-4">
                      {domeImages.map((image, index) => (
                        <div key={`marquee-3a-${index}`} className="h-28 w-40 shrink-0 overflow-hidden rounded-[1.25rem]">
                          <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 pr-4" aria-hidden>
                      {domeImages.map((image, index) => (
                        <div key={`marquee-3b-${index}`} className="h-28 w-40 shrink-0 overflow-hidden rounded-[1.25rem]">
                          <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-[min(70vh,520px)] sm:h-[min(70vh,620px)] lg:h-[720px]">
                <DomeGallery
                  images={domeImages}
                  fit={0.9}
                  fitBasis="width"
                  minRadius={560}
                  maxVerticalRotationDeg={8}
                  segments={34}
                  dragDampening={2}
                  dragSensitivity={20}
                  padFactor={0.2}
                  openedImageWidth="min(360px, 80vw)"
                  openedImageHeight="min(360px, 80vw)"
                  autoRotate
                  autoRotateSpeed={0.03}
                  autoRotateDirection={1}
                  grayscale={false}
                />
              </div>
            )}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-20 grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:items-stretch lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {awards.map(({ icon: Icon, title, description, value }) => (
          <SpotlightCard
            key={title}
            className="group rounded-[2.5rem] border-border/40 bg-card/50 p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-4xl font-bold text-muted-foreground/20">{value}</span>
            </div>
            <h3 className="mt-6 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
          </SpotlightCard>
        ))}
      </motion.section>

      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.title}
              className={`group relative overflow-hidden rounded-[2.5rem] border border-border/40 bg-card shadow-2xl ${
                index === 1 ? "lg:row-span-2" : ""
              }`}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">{item.tag}</p>
                <p className="text-xl font-bold">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center justify-between gap-8 rounded-[40px] border border-border/40 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-xl p-8 sm:flex-row sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 -mt-20 -ml-20 h-64 w-64 bg-primary/20 rounded-full blur-3xl opacity-30" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl">Want to submit your moments?</h3>
            <p className="mt-3 text-lg text-muted-foreground max-w-md">Share your stories with the gallery team and get featured on our campus wall.</p>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 text-primary" />
                Student Stories
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-primary" />
                Event Archives
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                Campus Landmarks
              </div>
            </div>
          </div>

          <Magnetic intensity={0.3}>
            <button className="group relative inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground transition-all hover:pr-12 shadow-xl shadow-primary/20">
              Submit to Gallery
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </button>
          </Magnetic>
        </div>
      </motion.section>
    </main>
  );
}
