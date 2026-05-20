"use client";

import { Header, Footer, AboutSection } from "../../index.js";
import { motion } from "framer-motion";
import SplitText from "../../bits/split-text.jsx";
import BlurText from "../../bits/blur-text.jsx";

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        {/* Page Banner - Same as Director's Message */}
        <motion.section
          className="relative overflow-hidden border-b border-border/70 bg-card/40 pt-24 pb-10 lg:pt-20 lg:pb-12"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-end lg:px-8 z-20">
            <div>
              <SplitText
                text="College Overview"
                className="text-5xl font-bold text-foreground sm:text-7xl pt-3 tracking-tighter"
                delay={0.08}
              />
              <div className="mt-6 h-1.5 w-32 rounded-full bg-gradient-to-r from-primary via-primary/70 to-accent" />
              <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
                <BlurText text="Discover our legacy of excellence, state-of-the-art infrastructure, and commitment to shaping the engineers of tomorrow." />
              </p>
            </div>
            <div className="justify-self-start text-sm font-medium text-muted-foreground lg:justify-self-end">
              <span>Home</span>
              <span className="mx-2 text-muted-foreground/60">/</span>
              <span>About</span>
              <span className="mx-2 text-muted-foreground/60">/</span>
              <span className="text-foreground">College Overview</span>
            </div>
          </div>
        </motion.section>

        <AboutSection className="pb-16 sm:pb-18 lg:pb-20 pt-16 sm:pt-20 lg:pt-24" />
      </main>
      <Footer />
    </div>
  );
}

