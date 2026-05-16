"use client";
import { Button } from "../../ui/button";
import { ArrowRight, Newspaper } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Magnetic from "../../bits/magnetic.jsx";
import ShinyText from "../../bits/shiny-text.jsx";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-90 w-90 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px] sm:h-125 sm:w-125 lg:h-150 lg:w-150 lg:blur-[120px]" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-card/50 p-6 shadow-2xl backdrop-blur-xl sm:p-10 lg:rounded-[2.5rem] lg:p-20"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 sm:mb-6"
          >
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl lg:text-6xl">
              Satpuda Pulse:
            </h2>
            <p className="mt-2 text-2xl font-bold text-[#295cae] sm:text-3xl lg:text-4xl">Events & News</p>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-8 max-w-2xl text-base text-foreground/60 sm:mb-10 sm:text-lg"
          >
            Stay updated with the latest campus highlights, technical breakthroughs, and upcoming events. 
            Immerse yourself in the vibrant life of Satpuda College.
          </motion.p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-6">
            <Magnetic intensity={0.2}>
              <Link to="/events-news">
                <Button size="lg" className="group relative h-14 w-full overflow-hidden rounded-2xl bg-accent px-7 text-base font-bold text-accent-foreground shadow-xl transition-all duration-300 hover:bg-accent/90 sm:h-16 sm:w-auto sm:px-10 sm:text-lg">
                  <span className="relative z-10 flex items-center">
                    <ShinyText text="Events & News" />
                    <Newspaper className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                    whileHover={{ scale: 1.5 }}
                  />
                </Button>
              </Link>
            </Magnetic>
            
            <Magnetic intensity={0.1}>
              <Button size="lg" variant="outline" className="h-14 w-full rounded-2xl border-border px-7 text-base text-foreground transition-all duration-300 hover:bg-foreground/5 sm:h-16 sm:w-auto sm:px-10 sm:text-lg">
                Join Community
              </Button>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



