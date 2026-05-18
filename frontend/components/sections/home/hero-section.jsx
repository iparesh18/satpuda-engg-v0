"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  const heroImages = [
     "/images/bannerp.jpeg",
    "/images/banner1.jpeg",
    "/images/banner3.jpeg",
    "/images/hero-1.jpeg",
     "/images/banner9.jpeg",
    
   
  ];
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // change every 10s

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Preload images to avoid white flash between slides
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <motion.div
          className="h-full w-full flex"
          animate={{ x: `-${activeImage * 100}%` }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {heroImages.map((src, idx) => (
            <div key={idx} className="relative w-full h-full flex-shrink-0 overflow-hidden">
              <img
                src={src}
                alt={`banner-bg-${idx}`}
                className="absolute inset-0 h-full w-full object-cover scale-110 blur-sm opacity-45"
              />
              <img
                src={src}
                alt={`banner-${idx}`}
                className="relative z-10 h-full w-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="relative z-20 w-full px-6 md:px-10 lg:px-16 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 lg:bottom-[-200px] z-30 ]">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-4 bg-primary/45 backdrop-blur-xl border border-white/30 rounded-full px-4 py-3 shadow-2xl shadow-black/35"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 h-12 text-base font-bold rounded-xl shadow-lg gap-2 transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 backdrop-blur-sm text-white px-6 h-12 rounded-xl text-base gap-2 transition-all duration-300"
            >
              <Play className="h-4 w-4" />
              Watch Campus Tour
            </Button>

            <Link
              to="/journey-at-satpuda"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 text-base font-bold text-white transition-all duration-300"
            >
              Journey at Satpuda
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}


