"use client";
import { motion } from "framer-motion";
import { Button } from "../../ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
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
    <section className="relative pt-20 lg:pt-24 min-h-[90vh] flex items-center overflow-hidden font-inter">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-1.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >

        <div className="max-w-5xl">

          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full px-4 py-2 mb-8 shadow-xl"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />

            <span className="text-xs tracking-widest font-semibold text-foreground/90 uppercase">
              AICTE Approved • RGPV Affiliated
            </span>
          </motion.div>


          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.0] tracking-[-0.03em] mb-8">

            <motion.span variants={itemVariants} className="block text-accent mb-4 text-lg sm:text-xl font-bold tracking-[0.2em] uppercase opacity-90">
              Welcome to
            </motion.span>

            <motion.span variants={itemVariants} className="block overflow-hidden text-[#295cae]">
              Satpuda College
            </motion.span>

            <motion.span variants={itemVariants} className="block overflow-hidden text-[#295cae]/90">
              of Engineering and
            </motion.span>

            <motion.span variants={itemVariants} className="block overflow-hidden text-[#295cae]/70">
              Polytechnic
            </motion.span>

          </h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-foreground/60 leading-relaxed max-w-2xl mb-10 font-medium tracking-normal"
          >
            Empowering future engineers with world-class education,
            advanced infrastructure, and outstanding placement opportunities since 1995.
          </motion.p>

          {/* Buttons */}
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
              className="border-foreground/20 bg-foreground/5 backdrop-blur-md text-foreground hover:bg-foreground/10 px-8 h-14 rounded-xl text-base gap-2 transition-all duration-500"
            >
              <Play className="h-4 w-4" />
              Watch Campus Tour
            </Button>

          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
