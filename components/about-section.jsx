"use client";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function AboutSection() {
  const features = [
    "State-of-the-art Infrastructure",
    "Experienced Faculty Members",
    "Industry Collaborations",
    "Research & Innovation Labs"
  ];
  return (<section className="py-24 bg-background">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Images */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden h-48 lg:h-72 shadow-2xl border border-border">
                <img src="/images/hero-1.jpg" alt="Campus" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden h-32 lg:h-48 shadow-2xl border border-border">
                <img src="/images/hero-4.jpg" alt="Library" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </motion.div>
            </div>
            <div className="space-y-6 pt-12">
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden h-32 lg:h-48 shadow-2xl border border-border">
                <img src="/images/hero-2.jpg" alt="Lab" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden h-48 lg:h-72 shadow-2xl border border-border">
                <img src="/images/hero-5.jpg" alt="Students" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </motion.div>
            </div>
          </div>
          {/* Floating Badge */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -bottom-8 -right-8 bg-accent text-accent-foreground rounded-[2rem] p-6 lg:p-10 shadow-[0_20px_50px_rgba(var(--accent),0.3)] border-4 border-background"
          >
            <p className="text-4xl lg:text-6xl font-black leading-none">25+</p>
            <p className="text-xs lg:text-sm font-bold uppercase tracking-widest mt-1 opacity-80">Years of Trust</p>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-4">
            About Our Institution
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-balance leading-[1.1] tracking-tight">
            Shaping Engineers of Tomorrow <br />
            <span className="text-foreground/40">Since 1995</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            At Satpuda College, we take pride in our state-of-the-art infrastructure,
            highly qualified faculty, and strong industry connections, ensuring top placements
            for our graduates.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {features.map((feature, index) => (<motion.div 
              key={index} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="flex items-center gap-4 group"
            >
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle2 className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm font-semibold text-foreground/80">{feature}</span>
            </motion.div>))}
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 h-16 px-10 rounded-2xl text-lg font-bold shadow-xl transition-all duration-300 hover:translate-y-[-4px]">
              Discover More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex items-center gap-4 text-sm text-muted-foreground group">
              <div className="w-12 h-12 rounded-full border-2 border-border overflow-hidden group-hover:border-accent transition-colors duration-500">
                <img src="/images/hero-3.jpg" alt="AICTE" className="w-full h-full object-cover" />
              </div>
              <span className="font-semibold uppercase tracking-widest text-[10px]">AICTE Approved</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>);
}
