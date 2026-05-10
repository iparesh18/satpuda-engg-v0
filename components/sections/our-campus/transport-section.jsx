"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Bus, MapPin, Route, ShieldCheck, Navigation, Clock, ArrowRight, Users } from "lucide-react";
import Magnetic from "../../bits/magnetic.jsx";
import BlurText from "../../bits/blur-text.jsx";
import ShinyText from "../../bits/shiny-text.jsx";

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
        className="relative overflow-hidden border-b border-border/70 bg-card/40 pt-32 pb-10 lg:pt-28 lg:pb-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.08),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-end lg:px-8">
          <div>
            <h1 className="pt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Transport Facility</h1>
            <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary via-primary/70 to-accent" />
            <BlurText
              text="Safe, reliable, and student-focused transportation connecting every route with comfort and punctuality."
              className="mt-6 max-w-xl text-base text-muted-foreground"
            />
          </div>
          <div className="justify-self-start text-sm font-medium text-muted-foreground lg:justify-self-end">
            <span>Home</span>
            <span className="mx-2 text-muted-foreground/60">/</span>
            <span>Campus</span>
            <span className="mx-2 text-muted-foreground/60">/</span>
            <span className="text-foreground">Transport</span>
          </div>
        </div>
      </motion.section>

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-border/60 bg-card/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.1)] sm:p-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            {chips.map((chip) => (
              <span key={chip} className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-sm">
              <img src="/images/overview/campus view.png" alt="Transport fleet" className="h-[360px] w-full object-cover" />
            </div>
            <div className="rounded-[28px] border border-[#1b2a57] bg-[#0b1f4b] p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">Live Route Map</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Hover a route to explore coverage</h2>
              <p className="mt-3 text-sm text-sky-100/70">
                Interactive nodes highlight each corridor while the path stays clean and minimal.
              </p>

              <div className="relative mt-6 h-48 sm:h-56 overflow-hidden rounded-2xl border border-[#1b2a57] bg-[#0a1a3f]">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 260" fill="none" aria-hidden>
                  <defs>
                    <linearGradient id="routeLight" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="rgba(125,211,252,0.85)" />
                      <stop offset="100%" stopColor="rgba(99,102,241,0.8)" />
                    </linearGradient>
                  </defs>
                  <path
                    id="transportRoutePath"
                    d="M30 210 C140 60 240 60 320 140 C400 220 460 230 570 90"
                    stroke="url(#routeLight)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <g>
                    <circle r="12" fill="#7dd3fc" stroke="#0b1f4b" strokeWidth="2" />
                    <text
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="8"
                      fontWeight="700"
                      fill="#0b1f4b"
                    >
                      BUS
                    </text>
                    <animateMotion
                      dur="10s"
                      repeatCount="indefinite"
                      keyTimes="0;0.25;0.5;0.75;1"
                      keyPoints="0;0.28;0.52;0.76;1"
                      calcMode="linear"
                      rotate="auto"
                    >
                      <mpath href="#transportRoutePath" />
                    </animateMotion>
                  </g>
                </svg>
                {routeNodes.map((node) => (
                  <button
                    key={node.id}
                    type="button"
                    onMouseEnter={() => setActiveNode(node.id)}
                    className="absolute"
                    style={{ left: node.left, top: node.top }}
                  >
                    <span
                      className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/60 shadow-sm transition-all ${
                        activeNode === node.id ? "bg-sky-300" : "bg-[#e2ecff]"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <MapPin className="h-4 w-4 text-sky-200" />
                <p className="text-sm text-sky-100/80">
                  {routeNodes.find((node) => node.id === activeNode)?.id} ·
                  <span className="ml-2 font-semibold text-white">
                    {routeNodes.find((node) => node.id === activeNode)?.label}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border/60 bg-background/70 px-6 py-4">
            <Magnetic intensity={0.25}>
              <p className="text-center text-sm font-medium italic text-muted-foreground">
                From every corner of the city to one campus - safe, reliable, connected.
              </p>
            </Magnetic>
          </div>
        </div>
      </section>

      <motion.section
        className="mx-auto mt-12 grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-start lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="rounded-[28px] border border-border/60 bg-card/80 p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Overview</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Connecting Students Across Balaghat</h2>
          <BlurText
            text="Our transport facility delivers a comfortable, safe, and reliable commute. GPS-enabled buses and professional drivers ensure every trip is smooth and punctual."
            className="mt-4 text-base leading-relaxed text-muted-foreground"
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {overviewCards.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-background/80 p-5 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          <div className="overflow-hidden rounded-[24px] border border-border bg-card shadow-sm">
            <img src="/images/overview/student in class.png" alt="Bus arrival" className="h-48 w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-[24px] border border-border bg-card shadow-sm">
            <img src="/images/overview/campus building.png" alt="Bus interior" className="h-48 w-full object-cover" />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid gap-4 rounded-[28px] border border-border/60 bg-card/70 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4 rounded-2xl bg-background/80 px-4 py-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  <ShinyText text={value} speed={3} color="rgba(59, 130, 246, 0.85)" />
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center justify-between gap-6 rounded-[28px] border border-border/60 bg-card/70 p-6 sm:flex-row sm:p-8">
          <div>
            <p className="text-lg font-semibold text-foreground">Need transport assistance?</p>
            <p className="text-sm text-muted-foreground">Our support team helps with routes, pickup points and queries.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
            Contact Transport Office
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </motion.section>
    </main>
  );
}
