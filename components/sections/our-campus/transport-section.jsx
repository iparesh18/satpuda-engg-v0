"use client";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Bus, MapPin, Route, ShieldCheck, Navigation, Clock, ArrowRight, Users, Sparkles, GraduationCap } from "lucide-react";
import Magnetic from "../../bits/magnetic.jsx";
import BlurText from "../../bits/blur-text.jsx";
import ShinyText from "../../bits/shiny-text.jsx";
import SplitText from "../../bits/split-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";

const chips = [
  "Safe Commute",
  "GPS Enabled",
  "Experienced Drivers",
  "City Coverage",
  "Student Safety",
  "Daily Routes",
];

const stats = [
  { icon: Bus, value: "25+", label: "Buses in Fleet" },
  { icon: Route, value: "25+", label: "Daily Routes" },
  { icon: Users, value: "1000+", label: "Students Daily" },
  { icon: MapPin, value: "6+", label: "City Coverage" },
];

const overviewCards = [
  {
    icon: ShieldCheck,
    title: "Safe Travel",
    description: "Well-maintained buses with strict safety standards.",
  },
  {
    icon: Navigation,
    title: "GPS Tracking",
    description: "Real-time monitoring for accurate arrivals.",
  },
  {
    icon: Users,
    title: "Professional Drivers",
    description: "Trained, verified, and experienced driving staff.",
  },
  {
    icon: Clock,
    title: "Timely Pickup",
    description: "Punctual routes designed for smooth daily commute.",
  },
];

const routeNodes = [
  { id: "R-01", label: "Balaghat", left: "12%", top: "22%" },
  { id: "R-07", label: "Gondia", left: "64%", top: "18%" },
  { id: "R-12", label: "Seoni", left: "82%", top: "50%" },
  { id: "R-18", label: "Katangi", left: "36%", top: "60%" },
  { id: "R-21", label: "Chhindwara", left: "18%", top: "74%" },
];

export function TransportSection() {
  const [activeNode, setActiveNode] = useState(routeNodes[0].id);

  return (
    <main className="bg-background pb-20">
      <style>{``}</style>
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

          {/* Floating decorative elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[100px]"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-accent/5 blur-[120px]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 text-primary font-semibold tracking-widest uppercase text-xs mb-6"
              >
                <div className="h-px w-8 bg-primary" />
                Campus Facility
              </motion.div>

              <SplitText
                text="Transport Facility"
                className="text-5xl font-bold text-foreground sm:text-7xl lg:text-8xl tracking-tighter"
                delay={0.08}
              />
              <div className="mt-8 h-2 w-32 rounded-full bg-gradient-to-r from-primary via-primary/70 to-accent" />
              <p className="mt-10 max-w-xl text-xl text-muted-foreground leading-relaxed">
                <BlurText text="Safe, reliable, and student-focused transportation connecting every route with comfort and punctuality." />
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-12 flex flex-wrap gap-4"
              >
                <button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-5 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 group inline-flex items-center gap-2"
                >
                  View Route Schedule
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground ml-2">
                  <span>Our Campus</span>
                  <span className="text-muted-foreground/30">/</span>
                  <span className="text-foreground">Transport</span>
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
                  src="/images/overview/college bus.png"
                  alt="Transport overview"
                  className="w-full h-[500px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <Magnetic intensity={0.3}>
                <motion.div
                  className="absolute -bottom-10 -left-10 bg-card shadow-2xl rounded-[2rem] p-8 flex items-center gap-5 border border-border/50 backdrop-blur-xl"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Bus className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-foreground tracking-tight">Reliability</div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Student Safety First</div>
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

          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80 mb-10">
            {chips.map((chip) => (
              <Magnetic key={chip} intensity={0.2}>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/40 backdrop-blur-sm px-5 py-2.5 transition-all hover:bg-background/80 hover:border-primary/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {chip}
                </span>
              </Magnetic>
            ))}
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="group relative overflow-hidden rounded-[32px] border border-border/40 bg-card shadow-2xl aspect-video">
              <img src="/images/overview/campus view.png" alt="Transport fleet" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
            </div>

            <div className="rounded-[32px] border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/5 p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Live Route Coverage</p>
                <h2 className="mt-4 text-3xl font-bold text-foreground">Interactive Corridor Map</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Hover over our primary nodes to explore the connectivity across the Balaghat region.
                </p>

                <div className="relative mt-8 h-56 sm:h-64 overflow-hidden rounded-3xl border border-border/40 bg-background/50 shadow-inner">
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 260" fill="none" aria-hidden>
                    <defs>
                      <linearGradient id="routeLight" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="var(--primary)" />
                        <stop offset="100%" stopColor="var(--accent)" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      id="transportRoutePath"
                      d="M30 210 C140 60 240 60 320 140 C400 220 460 230 570 90"
                      stroke="url(#routeLight)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      filter="url(#glow)"
                      className="opacity-80"
                    />
                    <g>
                      <animateMotion
                        dur="15s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#transportRoutePath" />
                      </animateMotion>
                      
                      {/* Premium 3D-ish Bus Visual */}
                      <motion.g 
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        className="cursor-pointer"
                      >
                        {/* Bus Body */}
                        <rect x="-18" y="-9" width="36" height="18" rx="4" fill="var(--primary)" filter="url(#glow)" />
                        {/* Windows */}
                        <rect x="-14" y="-6" width="8" height="6" rx="1" fill="white" opacity="0.3" />
                        <rect x="-2" y="-6" width="8" height="6" rx="1" fill="white" opacity="0.3" />
                        <rect x="10" y="-6" width="4" height="6" rx="1" fill="white" opacity="0.5" />
                        {/* Headlights */}
                        <circle cx="16" cy="-4" r="1.5" fill="#fef08a" filter="url(#glow)" />
                        <circle cx="16" cy="4" r="1.5" fill="#fef08a" filter="url(#glow)" />
                        {/* Wheels */}
                        <circle cx="-10" cy="9" r="3" fill="#0f172a" />
                        <circle cx="10" cy="9" r="3" fill="#0f172a" />
                      </motion.g>
                    </g>
                  </svg>
                  {routeNodes.map((node) => (
                    <button
                      key={node.id}
                      type="button"
                      onMouseEnter={() => setActiveNode(node.id)}
                      className="absolute group/node"
                      style={{ left: node.left, top: node.top }}
                    >
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-full border-2 border-white shadow-lg transition-all duration-300 group-hover/node:scale-150 ${activeNode === node.id ? "bg-primary scale-125" : "bg-muted"
                          }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <motion.div
                key={activeNode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 flex items-center gap-5 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-4"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary/70 uppercase tracking-widest">
                    {routeNodes.find((node) => node.id === activeNode)?.id}
                  </p>
                  <p className="text-xl font-bold text-foreground">
                    {routeNodes.find((node) => node.id === activeNode)?.label}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2.5rem] border border-border/40 bg-background/30 px-8 py-6 backdrop-blur-sm">
            <Magnetic intensity={0.2}>
              <p className="text-center text-base font-medium italic text-muted-foreground/80">
                &ldquo;Connecting every corner of the city to one campus - safe, reliable, and always on time.&rdquo;
              </p>
            </Magnetic>
          </div>
        </div>
      </section>

      <motion.section
        className="mx-auto mt-20 grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-start lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="rounded-[40px] border border-border/40 bg-card/40 backdrop-blur-md p-8 shadow-2xl sm:p-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 bg-primary/5 rounded-full blur-3xl" />

          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Overview</p>
          <h2 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl tracking-tight">Efficient Fleet Management</h2>
          <BlurText
            text="Our transport facility delivers a comfortable, safe, and reliable commute. GPS-enabled buses and professional drivers ensure every trip is smooth and punctual."
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {overviewCards.map(({ icon: Icon, title, description }) => (
              <SpotlightCard key={title} className="group rounded-[2rem] border-none bg-background/40 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <motion.div
            className="overflow-hidden rounded-[32px] border border-border/40 bg-card shadow-2xl group"
            whileHover={{ y: -8 }}
          >
            <img src="/images/overview/student in class.png" alt="Bus arrival" className="h-64 w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <p className="text-sm font-bold tracking-widest uppercase">Safe Boarding</p>
            </div>
          </motion.div>
          <motion.div
            className="overflow-hidden rounded-[32px] border border-border/40 bg-card shadow-2xl group"
            whileHover={{ y: -8 }}
          >
            <img src="/images/overview/campus building.png" alt="Bus interior" className="h-64 w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <p className="text-sm font-bold tracking-widest uppercase">Modern Infrastructure</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid gap-3 rounded-3xl border border-border/40 bg-muted/30 p-4 sm:grid-cols-2 lg:grid-cols-4 shadow-sm">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 px-6 py-6 transition-all duration-300 hover:-translate-y-[2px] lg:border-r lg:border-border/40 lg:last:border-r-0"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-4xl font-bold leading-none text-foreground tracking-tighter">
                  <ShinyText text={value} speed={3} color="rgba(59, 130, 246, 0.85)" />
                </p>
                <p className="mt-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8 mb-20"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center justify-between gap-8 rounded-[40px] border border-border/40 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-xl p-8 sm:flex-row sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 -mt-20 -ml-20 h-64 w-64 bg-primary/20 rounded-full blur-3xl opacity-30" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl">Need transport assistance?</h3>
            <p className="mt-3 text-lg text-muted-foreground max-w-md">Our support team helps with routes, pickup points and daily commute queries.</p>
          </div>

          <Magnetic intensity={0.3}>
            <button className="group relative inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground transition-all hover:pr-12 shadow-xl shadow-primary/20">
              Contact Transport Office
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </button>
          </Magnetic>
        </div>
      </motion.section>
    </main>
  );
}
