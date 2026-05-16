"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Users,
  Lightbulb,
  Trophy,
  Briefcase,
  Zap,
  Cpu,
  Gauge,
  Factory,
  ArrowRight,
  BookOpen,
  Microscope,
  Globe,
  CircuitBoard,
  ShieldCheck,
  Sparkles,
  Activity,
  Waves,
  Power,
} from "lucide-react";

import SplitText from "../../bits/split-text.jsx";
import BlurText from "../../bits/blur-text.jsx";
import ShinyText from "../../bits/shiny-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";
import Magnetic from "../../bits/magnetic.jsx";

const stats = [
  { icon: Users, value: "230+", label: "Students Enrolled" },
  { icon: GraduationCap, value: "23+", label: "Expert Faculty" },
  { icon: Lightbulb, value: "11+", label: "Labs & Facilities" },
  { icon: Trophy, value: "95%", label: "Placement Assistance" },
  { icon: Briefcase, value: "19+", label: "Industry Tie-ups" },
  { icon: BookOpen, value: "100%", label: "Practical Learning" },
];

const aboutHighlights = [
  {
    icon: ShieldCheck,
    title: "Industry-Aligned Curriculum",
    description: "Coursework aligned with power, automation and electronics industry needs.",
  },
  {
    icon: CircuitBoard,
    title: "Circuit & System Design",
    description: "Strong practical training in circuit analysis, control and embedded systems.",
  },
  {
    icon: Activity,
    title: "Lab-Centered Learning",
    description: "Hands-on exposure through machines, measurements and power labs.",
  },
  {
    icon: Users,
    title: "Mentored Growth",
    description: "Continuous guidance from faculty for technical and professional development.",
  },
];

const programData = {
  btech: [
    {
      icon: Zap,
      title: "Core Subjects",
      description: "Foundation in electrical machines, power systems, control systems and power electronics.",
    },
    {
      icon: Sparkles,
      title: "Specializations",
      description: "Explore renewable energy, industrial automation, smart grids and instrumentation.",
    },
    {
      icon: Microscope,
      title: "Practical Training",
      description: "Hands-on work with simulation tools, controllers and real electrical setups.",
    },
    {
      icon: Globe,
      title: "Career Pathways",
      description: "Opportunities in utilities, manufacturing, automation, energy and core sectors.",
    },
  ],
  diploma: [
    {
      icon: Gauge,
      title: "Technical Foundation",
      description: "Build strong fundamentals in circuit theory, machines and electrical maintenance.",
    },
    {
      icon: Factory,
      title: "Industrial Systems",
      description: "Learn practical operations in plant electrification and panel systems.",
    },
    {
      icon: Power,
      title: "Power & Protection",
      description: "Training in distribution systems, fault handling and electrical safety protocols.",
    },
    {
      icon: Briefcase,
      title: "Job Readiness",
      description: "Skill-focused learning for technician and supervisory roles in electrical domains.",
    },
  ],
};

const highlights = [
  {
    image: "/images/hero-1.jpg",
    title: "Power System Labs",
    description: "Analyze generation, transmission and distribution systems through practical setups.",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Automation Studios",
    description: "PLC, control panels and industrial automation workflows for modern plants.",
  },
  {
    image: "/images/hero-4.jpg",
    title: "Machine Labs",
    description: "Hands-on experience with AC/DC machines, drives and performance testing.",
  },
  {
    image: "/images/hero-5.jpg",
    title: "Renewable Projects",
    description: "Student-led projects in solar integration and energy-efficient solutions.",
  },
];

export function ElectricalSection() {
  const [activeProgram, setActiveProgram] = useState("btech");

  return (
    <main className="bg-background overflow-hidden">
      <motion.section
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-background to-background" />
          <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block text-sm font-semibold tracking-widest text-primary uppercase mb-4"
              >
                Department of
              </motion.span>
              <h1 className="text-5xl font-bold leading-tight text-foreground sm:text-7xl tracking-tighter">
                <SplitText text="Electrical" delay={0.08} className="block" />
                <SplitText text="Engineering" delay={0.12} className="text-primary" />
              </h1>
              <div className="mt-6 h-1.5 w-32 rounded-full bg-gradient-to-r from-primary to-accent" />
              <p className="mt-8 max-w-xl text-xl text-muted-foreground leading-relaxed">
                <BlurText text="Empowering innovation through intelligent power systems, automation and advanced electrical design." />
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                  <span>Home</span>
                  <span className="text-muted-foreground/40">/</span>
                  <span>Academics</span>
                  <span className="text-muted-foreground/40">/</span>
                  <span className="text-primary font-medium">Electrical Engineering</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square lg:aspect-video rounded-[2.5rem] overflow-hidden border border-border/50 group"
            >
              <img
                src="/images/hero-1.jpg"
                alt="Electrical Engineering"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="relative z-20 -mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-6 rounded-3xl border border-border/40 bg-card/80 backdrop-blur-xl shadow-2xl">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group flex flex-col items-center text-center lg:border-r border-border/40 last:border-0 cursor-default"
            >
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-3 transition-colors group-hover:bg-primary group-hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </motion.div>
              <p className="text-2xl font-bold text-foreground tracking-tight">
                <ShinyText text={value} speed={3} color="rgba(214, 11, 11, 1)" />
              </p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mt-1 group-hover:text-primary transition-colors">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-primary font-semibold tracking-widest uppercase text-sm">About the Department</span>
                <h2 className="text-4xl font-bold text-foreground mt-4 leading-tight sm:text-5xl">
                  Electrical Excellence for <br />
                  <span className="text-primary">Smart Energy Futures</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Electrical Engineering at Satpuda integrates power systems, automation and electronics with practical lab exposure. Students are trained to solve real-world industrial and energy challenges with confidence.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {aboutHighlights.map(({ icon: Icon, title, description }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors group"
                  >
                    <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">{title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-card shadow-2xl"
            >
              <img src="/images/hero-2.jpg" alt="Electrical Projects" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/30 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">Our Programs</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-12 sm:text-5xl tracking-tight">Wide Array of Courses</h2>

          <div className="flex justify-center mb-16">
            <div className="p-1.5 rounded-2xl bg-background border border-border flex gap-2">
              <button
                onClick={() => setActiveProgram("btech")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeProgram === "btech"
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                B.Tech in Electrical Engineering
              </button>
              <button
                onClick={() => setActiveProgram("diploma")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeProgram === "diploma"
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                Diploma in Electrical Engineering
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="wait">
              {programData[activeProgram].map((card, i) => (
                <motion.div
                  key={`${activeProgram}-${card.title}`}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <SpotlightCard className="h-full group p-8 rounded-[2rem] border-border/50 bg-card/50 text-left hover:border-primary/50 transition-all cursor-default">
                    <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                      <card.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{card.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                    <div className="mt-8 h-1 w-12 rounded-full bg-primary/20 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-card/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[4rem] overflow-hidden bg-background border border-border/50 shadow-2xl flex items-center justify-center group"
            >
              <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#d60b0b_1px,transparent_1px),linear-gradient(to_bottom,#d60b0b_1px,transparent_1px)] [background-size:36px_36px]" />

              <div className="relative w-full h-full flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="electricalLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
                      <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
                    </linearGradient>
                  </defs>
                  {[0, 72, 144, 216, 288].map((angle, i) => (
                    <motion.line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={`${50 + 35 * Math.cos((angle * Math.PI) / 180)}%`}
                      y2={`${50 + 35 * Math.sin((angle * Math.PI) / 180)}%`}
                      stroke="url(#electricalLineGrad)"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: i * 0.2 }}
                    />
                  ))}
                </svg>

                <Magnetic intensity={0.2}>
                  <motion.div
                    animate={{
                      boxShadow: ["0 0 20px rgba(59,130,246,0.3)", "0 0 50px rgba(59,130,246,0.6)", "0 0 20px rgba(59,130,246,0.3)"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="relative z-20 h-28 w-28 rounded-3xl bg-primary flex items-center justify-center shadow-2xl"
                  >
                    <Zap className="h-14 w-14 text-white animate-pulse" />
                    <div className="absolute inset-0 rounded-3xl bg-white/20 animate-ping" />
                  </motion.div>
                </Magnetic>

                {[
                  { icon: CircuitBoard, label: "Circuits" },
                  { icon: Cpu, label: "Control" },
                  { icon: Waves, label: "Power" },
                  { icon: Factory, label: "Automation" },
                  { icon: Power, label: "Protection" },
                ].map((node, i) => (
                  <motion.div
                    key={node.label}
                    className="absolute z-30"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    animate={{
                      top: `${50 + 35 * Math.sin((i * 72 * Math.PI) / 180)}%`,
                      left: `${50 + 35 * Math.cos((i * 72 * Math.PI) / 180)}%`,
                    }}
                    style={{ transform: "translate(-50%, -50%)" }}
                  >
                    <Magnetic intensity={0.4}>
                      <div className="group/node relative">
                        <div className="h-16 w-16 rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg transition-all group-hover/node:border-primary group-hover/node:scale-110">
                          <node.icon className="h-7 w-7 text-primary transition-transform group-hover/node:rotate-12" />
                        </div>
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold opacity-0 group-hover/node:opacity-100 transition-opacity whitespace-nowrap">
                          {node.label}
                        </div>
                      </div>
                    </Magnetic>
                  </motion.div>
                ))}
              </div>

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
            </motion.div>

            <div className="space-y-10">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 text-primary"
                >
                  <div className="h-px w-10 bg-primary" />
                  <span className="text-sm font-bold uppercase tracking-widest">Power Intelligence</span>
                </motion.div>
                <h2 className="text-4xl font-bold text-foreground sm:text-6xl leading-tight tracking-tight">
                  The Electrical Core of <br />
                  <span className="text-primary italic">Future Technology</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Explore an interactive electrical-tech ecosystem where power, control, automation and renewable systems connect seamlessly.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-border/50">
                <div className="group cursor-default">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-primary animate-ping" />
                    <p className="text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">Smart Power</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Designing efficient and reliable electrical systems for modern infrastructure.</p>
                </div>
                <div className="group cursor-default">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    <p className="text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">Clean Energy</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Engineering sustainable energy and automation solutions for tomorrow’s world.</p>
                </div>
              </div>

              <div className="pt-8">
                <button className="group relative inline-flex items-center gap-4 text-primary font-bold text-lg">
                  <span className="border-b-2 border-primary/30 group-hover:border-primary transition-all pb-1">Explore Electrical Systems</span>
                  <div className="h-10 w-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">Department Highlights</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-16 sm:text-5xl tracking-tight">Design. Control. Empower.</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-card border border-border/50 transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8 text-left">
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8 mb-24"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center gap-10 rounded-[40px] border border-border/40 bg-card/40 backdrop-blur-xl p-8 sm:flex-row sm:p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 -mt-20 -ml-20 h-64 w-64 bg-primary/20 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />

          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-inner group-hover:rotate-6 transition-transform duration-500">
            <Sparkles className="h-12 w-12" />
          </div>
          <div className="flex-1 text-center sm:text-left relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.5em] text-primary mb-3">Ready to Power the Future?</p>
            <h3 className="text-3xl font-bold text-foreground tracking-tight sm:text-5xl leading-tight">Build the Future with Electrical Engineering</h3>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Join Satpuda Electrical Engineering to create reliable power systems, smart automation and sustainable energy solutions.
            </p>
          </div>
          <Magnetic intensity={0.3}>
            <button className="group relative inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground transition-all hover:pr-12 shadow-xl shadow-primary/20 active:scale-95">
              <span>Know More</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </Magnetic>
        </div>
      </motion.section>
    </main>
  );
}

