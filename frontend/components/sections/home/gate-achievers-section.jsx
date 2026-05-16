"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function GateAchieversSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Achievement Spotlight</p>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight text-foreground sm:text-3xl lg:text-4xl">GATE 2026 Achievers</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Celebrating students who qualified in GATE with outstanding ranks and dedication.
            </p>
          </div>

          <Link
            to="/academics"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
          >
            Explore Academics
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_20px_45px_rgba(2,10,40,0.16)]"
        >
          <img
            src="/images/gate.png"
            alt="Satpuda College GATE 2026 achievers"
            className="h-auto w-full object-contain"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
