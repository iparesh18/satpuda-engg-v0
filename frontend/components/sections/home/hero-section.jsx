"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  const heroImages = [
    "/images/banner1.jpeg",
    "/images/banner2.jpeg",
    "/images/banner3.jpeg",
  ];
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen font-inter flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={heroImages[activeImage]}
            src={heroImages[activeImage]}
            alt="Satpuda campus"
            className="absolute inset-0 h-full w-full object-cover object-center"
            initial={{ x: "100%", opacity: 0.95 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0.95 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-linear-to-r from-[#021545]/50 via-[#021545]/32 to-[#021545]/10" />
        <div className="absolute inset-0 bg-black/12" />
      </div>

      <motion.div
        className="relative z-20 w-full px-6 md:px-10 lg:px-16 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col items-start">
          <div className="w-full text-left max-w-4xl mr-auto">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 shadow-xl"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs tracking-widest font-semibold text-white uppercase">
                AICTE Approved • RGPV Affiliated
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-[-0.03em] mb-5"
            >
              <span className="block text-accent mb-3 text-sm sm:text-base font-semibold tracking-[0.18em] uppercase opacity-90">
                Welcome to
              </span>
              <span className="block">Satpuda College of</span>
              <span className="block text-white/90">
                <span className="text-[#d60b0b]">Engineering</span> &amp; Polytechnic
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed max-w-2xl mb-8 font-medium tracking-normal"
            >
              Empowering future engineers with world-class education, advanced infrastructure, and outstanding placement
              opportunities since 1995.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 justify-start"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 h-14 text-base font-bold rounded-xl shadow-2xl gap-2 transition-all duration-500 hover:scale-[1.02] active:scale-95"
              >
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-8 h-14 rounded-xl text-base gap-2 transition-all duration-500"
              >
                <Play className="h-4 w-4" />
                Watch Campus Tour
              </Button>

              <Link
                to="/journey-at-satpuda"
                className="inline-flex h-14 items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-8 text-base font-bold text-white transition-all duration-500 hover:border-white/70 hover:bg-white/20"
              >
                Journey at Satpuda
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

