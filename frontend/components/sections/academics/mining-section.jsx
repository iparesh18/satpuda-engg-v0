"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  Users, 
  Building2, 
  Trophy, 
  Briefcase, 
  Mountain, 
  HardHat, 
  Compass, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  BookOpen,
  Microscope,
  Globe,
  Pickaxe,
  Zap,
  Sparkles,
  Activity,
  Gem
} from "lucide-react";

import SplitText from "../../bits/split-text.jsx";
import BlurText from "../../bits/blur-text.jsx";
import ShinyText from "../../bits/shiny-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";
import Magnetic from "../../bits/magnetic.jsx";

const stats = [
  { icon: Users, value: "180+", label: "Students Enrolled" },
  { icon: GraduationCap, value: "20+", label: "Expert Faculty" },
  { icon: Building2, value: "12+", label: "Labs & Facilities" },
  { icon: Trophy, value: "95%", label: "Placement Assistance" },
  { icon: Briefcase, value: "15+", label: "Industry Tie-ups" },
  { icon: BookOpen, value: "100%", label: "Practical Learning" },
];

const aboutHighlights = [
  {
    icon: ShieldCheck,
    title: "Industry-Oriented Curriculum",
    description: "Designed to meet modern mining industry standards.",
  },
  {
    icon: Building2,
    title: "Advanced Laboratories",
    description: "Well-equipped labs for practical learning and research.",
  },
  {
    icon: Compass,
    title: "Field Exposure",
    description: "Industrial visits, site training and real-world experience.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Learn from experienced faculty and industry professionals.",
  },
];

const programData = {
  btech: [
    {
      icon: Layers,
      title: "Core Subjects",
      description: "Strong foundation in geology, mining methods, mineral processing, and rock mechanics.",
    },
    {
      icon: Sparkles,
      title: "Specializations",
      description: "Choose from Mine Planning, Mineral Processing, Surveying, and Mine Safety.",
    },
    {
      icon: Activity,
      title: "Practical Training",
      description: "Hands-on training in labs, workshops, and live mining environments.",
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description: "Opportunities in mining companies, PSUs, private sectors and government organisations.",
    },
  ],
  diploma: [
    {
      icon: HardHat,
      title: "Technical Foundation",
      description: "Basic mining engineering principles and safety protocols.",
    },
    {
      icon: Pickaxe,
      title: "Mining Operations",
      description: "Practical knowledge of excavation and material handling.",
    },
    {
      icon: Compass,
      title: "Surveying Basics",
      description: "Fundamental land and mine surveying techniques.",
    },
    {
      icon: ShieldCheck,
      title: "Safety Standards",
      description: "Introduction to mine health and safety regulations.",
    },
  ],
};

const highlights = [
  {
    image: "/images/hero-1.jpg",
    title: "Underground & Surface Mining",
    description: "Comprehensive understanding of modern mining techniques.",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Surveying & Exploration",
    description: "Advanced tools and methods for accurate surveying and exploration.",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Mineral Processing",
    description: "Learn extraction, beneficiation and processing of minerals.",
  },
  {
    image: "/images/hero-4.jpg",
    title: "Safety & Sustainability",
    description: "Focus on mine safety, environmental protection and sustainable practices.",
  },
];

export function MiningSection() {
  const [activeProgram, setActiveProgram] = useState("btech");

  return (
    <main className="bg-background overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
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
                <SplitText text="Mining" delay={0.08} className="block" />
                <SplitText text="Engineering" delay={0.12} className="text-primary" />
              </h1>
              <div className="mt-6 h-1.5 w-32 rounded-full bg-gradient-to-r from-primary to-amber-500" />
              <p className="mt-8 max-w-xl text-xl text-muted-foreground leading-relaxed">
                <BlurText text="Exploring the depths. Empowering the future. Mining Engineering drives sustainable resource extraction and nation building." />
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                  <span>Home</span>
                  <span className="text-muted-foreground/40">/</span>
                  <span>Academics</span>
                  <span className="text-muted-foreground/40">/</span>
                  <span className="text-primary font-medium">Mining Engineering</span>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square lg:aspect-video rounded-[2.5rem] overflow-hidden border border-border/50 group shadow-2xl"
            >
              <img 
                src="/images/hero-3.jpg" 
                alt="Mining Engineering" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                  <Pickaxe className="h-5 w-5 text-amber-500" />
                  <span className="text-sm font-bold text-white uppercase tracking-widest">Resource Hub</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Bar */}
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

      {/* About Section */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-primary font-semibold tracking-widest uppercase text-sm">About the Department</span>
                <h2 className="text-4xl font-bold text-foreground mt-4 leading-tight sm:text-5xl">
                  Building Careers. <br />
                  <span className="text-primary">Shaping Resources.</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mining Engineering focuses on the scientific and sustainable extraction of minerals from the earth. Our programs combine theory, practical training, and industry exposure to prepare students for global challenges in mining and earth sciences.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {aboutHighlights.map(({ icon: Icon, title, description }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors group shadow-sm hover:shadow-md"
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
              <img 
                src="/images/hero-1.jpg" 
                alt="Mining Operations" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-card/30 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">Our Programs</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-12 sm:text-5xl tracking-tight">Explore Our Courses</h2>
          
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
                B.Tech in Mining Engineering
              </button>
              <button
                onClick={() => setActiveProgram("diploma")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeProgram === "diploma" 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                Diploma in Mining Engineering
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

      {/* Interactive Visual Section - Upgraded Deep Earth Core */}
      <section className="py-24 relative overflow-hidden bg-card/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[4rem] overflow-hidden bg-background border border-border/50 shadow-2xl flex items-center justify-center group"
            >
              {/* Background Geological Strata */}
              <div className="absolute inset-0 opacity-[0.05] flex flex-col justify-between p-4">
                {[...Array(12)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 5, delay: i * 0.2, repeat: Infinity }}
                    className="h-px w-full bg-primary" 
                  />
                ))}
              </div>
              
              {/* Deep Earth Hub Visual */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Rotating Earth Crust Rings */}
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                    transition={{ duration: 15 + ring * 5, repeat: Infinity, ease: "linear" }}
                    className="absolute border border-primary/20 rounded-full"
                    style={{
                      width: `${40 + ring * 15}%`,
                      height: `${40 + ring * 15}%`,
                      borderStyle: ring === 2 ? 'dashed' : 'solid',
                      borderWidth: ring === 1 ? '2px' : '1px'
                    }}
                  />
                ))}

                {/* Central Drilling Hub */}
                <Magnetic intensity={0.2}>
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      boxShadow: ["0 0 20px rgba(245,158,11,0.2)", "0 0 60px rgba(245,158,11,0.4)", "0 0 20px rgba(245,158,11,0.2)"]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative z-20 h-36 w-36 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-2xl overflow-hidden"
                  >
                    <Pickaxe className="h-16 w-16 text-white relative z-10" />
                    {/* Inner Pulse */}
                    <motion.div
                      animate={{ y: [0, 100], opacity: [0, 0.5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 to-transparent"
                    />
                  </motion.div>
                </Magnetic>

                {/* Mineral & Tech Nodes */}
                {[
                  { icon: Gem, label: "Ore Body", angle: 0, color: "text-blue-400" },
                  { icon: Layers, label: "Strata", angle: 72, color: "text-amber-400" },
                  { icon: Microscope, label: "Analysis", angle: 144, color: "text-emerald-400" },
                  { icon: ShieldCheck, label: "Safety", angle: 216, color: "text-rose-400" },
                  { icon: Activity, label: "Seismic", angle: 288, color: "text-violet-400" },
                ].map((node, i) => (
                  <motion.div
                    key={node.label}
                    className="absolute z-30"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    animate={{
                      top: `${50 + 32 * Math.sin((node.angle * Math.PI) / 180)}%`,
                      left: `${50 + 32 * Math.cos((node.angle * Math.PI) / 180)}%`,
                    }}
                    style={{ transform: 'translate(-50%, -50%)' }}
                  >
                    <Magnetic intensity={0.4}>
                      <div className="group/node relative">
                        <div className="h-16 w-16 rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg transition-all group-hover/node:border-primary group-hover/node:scale-110">
                          <node.icon className={`h-7 w-7 ${node.color} transition-transform group-hover/node:rotate-12`} />
                        </div>
                        {/* Dynamic HUD Label */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold opacity-0 group-hover/node:opacity-100 transition-opacity whitespace-nowrap">
                          {node.label} DETECTED
                        </div>
                      </div>
                    </Magnetic>
                  </motion.div>
                ))}

                {/* Depth Pulse Scanning */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute border-2 border-primary/20 rounded-full"
                    initial={{ width: 0, height: 0, opacity: 0 }}
                    animate={{ 
                      width: ["0%", "120%"],
                      height: ["0%", "120%"],
                      opacity: [0, 0.4, 0]
                    }}
                    transition={{
                      duration: 4,
                      delay: i * 1,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>

              {/* Edge HUD Overlay */}
              <div className="absolute top-8 left-8 flex flex-col gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white tracking-widest uppercase">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#d60b0b] animate-pulse" />
                  Live Core Feed
                </div>
                <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white/60 tracking-widest uppercase">
                  Depth: 1,240m
                </div>
              </div>

              {/* Bottom Gradient Glow */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-amber-500/10 via-transparent to-transparent" />
            </motion.div>
            
            <div className="space-y-10">
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 text-primary"
                >
                  <div className="h-px w-10 bg-primary" />
                  <span className="text-sm font-bold uppercase tracking-widest text-amber-500">Resource Engineering</span>
                </motion.div>
                <h2 className="text-4xl font-bold text-foreground sm:text-6xl leading-tight tracking-tight">
                  The Core of <br />
                  <span className="text-amber-500 italic">Deep Frontiers</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Master the science of sustainable excavation through our interactive geological simulators. We visualize the earth's hidden resources with precision and innovation.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-border/50">
                <div className="group cursor-default">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-amber-500 animate-ping" />
                    <p className="text-2xl font-black text-foreground tracking-tight group-hover:text-amber-500 transition-colors">Digital Twin</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Simulating complex mining environments for risk-free training and planning.</p>
                </div>
                <div className="group cursor-default">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                    <p className="text-2xl font-black text-foreground tracking-tight group-hover:text-blue-500 transition-colors">Smart Mapping</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Leveraging geophysics for high-fidelity mineral deposit identification.</p>
                </div>
              </div>
              
              <div className="pt-8">
                <button className="group relative inline-flex items-center gap-4 text-primary font-bold text-lg">
                  <span className="border-b-2 border-primary/30 group-hover:border-primary transition-all pb-1">Geological Visual Systems</span>
                  <div className="h-10 w-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Highlights */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">Department Highlights</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-16 sm:text-5xl tracking-tight">Learn Today. Lead Tomorrow.</h2>
          
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
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 text-left">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 -mt-12 relative z-10 border-4 border-card">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Library Inspired */}
      <motion.section
        className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8 mb-24"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center gap-10 rounded-[40px] border border-border/40 bg-card/40 backdrop-blur-xl p-8 sm:flex-row sm:p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 -mt-20 -ml-20 h-64 w-64 bg-amber-500/20 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
          
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-amber-500/10 text-amber-500 shadow-inner group-hover:rotate-6 transition-transform duration-500">
            <HardHat className="h-12 w-12" />
          </div>
          <div className="flex-1 text-center sm:text-left relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.5em] text-amber-500 mb-3">Future of Mining</p>
            <h3 className="text-3xl font-bold text-foreground tracking-tight sm:text-5xl leading-tight">Shape the Future of Mining</h3>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Join a department that powers industries, builds infrastructure and supports a sustainable tomorrow. Your journey in earth sciences starts here.
            </p>
          </div>
          <Magnetic intensity={0.3}>
            <button className="group relative inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground transition-all hover:pr-12 shadow-xl shadow-primary/20 active:scale-95">
              <span>Explore Programs</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </Magnetic>
        </div>
      </motion.section>
    </main>
  );
}

