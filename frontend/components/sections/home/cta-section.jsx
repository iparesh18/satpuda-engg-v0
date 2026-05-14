"use client";
import { Button } from "../../ui/button";
import { ArrowRight, Newspaper } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Magnetic from "../../bits/magnetic.jsx";
import ShinyText from "../../bits/shiny-text.jsx";

export function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-card/50 backdrop-blur-xl border border-border rounded-[2.5rem] p-12 lg:p-20 shadow-2xl"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-foreground mb-6 text-balance tracking-tighter uppercase"
          >
            <h1 className="text-5xl">Satpuda Pulse:</h1> 
            <h2 className="text-4xl text-[#295cae]">Events & News</h2>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-foreground/60 mb-10 max-w-2xl mx-auto"
          >
            Stay updated with the latest campus highlights, technical breakthroughs, and upcoming events. 
            Immerse yourself in the vibrant life of Satpuda College.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-6">
            <Magnetic intensity={0.2}>
              <Link to="/events-news">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 h-16 text-lg font-bold rounded-2xl shadow-xl transition-all duration-300 group overflow-hidden relative">
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
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-foreground/5 px-10 h-16 rounded-2xl text-lg transition-all duration-300">
                Join Community
              </Button>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


