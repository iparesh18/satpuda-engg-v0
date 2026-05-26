"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";

export function HeroSection() {
  const heroImages = [
     "/images/bannerp.jpeg",
    "/images/banner1.png",
    "/images/banner3.jpeg",
    "/images/hero-1.jpeg",
     "/images/banner9.jpeg",
     "/images/hbanner.png",
     "/images/hbanner2.jpeg",
     "/images/hbanner3.jpeg",
     "/images/hbanner4.jpeg",
    
   
  ];
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleNext = () => {
    setActiveImage((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrev = () => {
    setActiveImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

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
    <section className="relative font-inter flex flex-col overflow-hidden bg-background">
      <div className="relative aspect-video lg:aspect-auto lg:h-[85vh] z-0 w-full overflow-hidden bg-background">
        <motion.div
          className="h-full w-full flex transform-gpu"
          style={{ willChange: "transform" }}
          animate={{ x: `-${activeImage * 100}%` }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {heroImages.map((src, idx) => (
            <div key={idx} className="relative w-full h-full shrink-0 overflow-hidden flex items-center justify-center">
              <img
                src={src}
                alt={`banner-${idx}`}
                className="relative z-10 w-full h-full object-fill"
              />
            </div>
          ))}
        </motion.div>

        {/* Manual Navigation */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-border bg-white/90 backdrop-blur-sm text-foreground shadow-sm transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
        >
          <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1.5} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-border bg-white/90 backdrop-blur-sm text-foreground shadow-sm transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
        >
          <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1.5} />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 md:bottom-[120px] lg:bottom-[140px] left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${
                activeImage === idx ? "w-8 bg-primary" : "w-2.5 bg-white/80 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="relative z-20 w-full px-4 py-6 md:absolute md:bottom-0 md:left-0 md:w-full md:px-16 md:py-16 pointer-events-none"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-10 xl:bottom-12 w-full md:w-max max-w-[95vw] mx-auto z-30 pointer-events-auto flex justify-center">
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row flex-wrap items-stretch md:items-center justify-center gap-4 md:gap-6 bg-primary/60 md:bg-primary/45 backdrop-blur-xl border border-white/30 rounded-2xl md:rounded-full px-4 py-4 md:py-3 shadow-2xl shadow-black/35 w-full md:w-auto"
          >
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 h-12 text-sm md:text-base font-bold rounded-xl shadow-lg gap-2 transition-all duration-300 w-full md:w-auto flex justify-center">
              <Link to="/admissions/admission-form">Start Your Journey</Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-white/30 hover:bg-white/10 bg-white/5 backdrop-blur-sm text-white px-6 h-12 rounded-xl text-sm md:text-base gap-2 transition-all duration-300 w-full md:w-auto flex justify-center">
              <Link to="/our-campus/gallery" className="inline-flex items-center gap-2">
                <Play className="h-4 w-4" />
                Watch Campus Tour
              </Link>
            </Button>

            <Link
              to="/journey-at-satpuda"
              className="inline-flex justify-center h-12 items-center gap-2 rounded-xl border border-white/30 bg-white/5 hover:bg-white/10 px-6 text-sm md:text-base font-bold text-white transition-all duration-300 w-full md:w-auto"
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


