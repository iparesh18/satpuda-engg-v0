"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Monitor, 
  Settings, 
  TrendingUp, 
  Users, 
  BookOpen,
  Wifi,
  Clock,
  Code,
  ShieldCheck,
  Play,
  Volume2,
  VolumeX,
  Maximize,
  Pause,
  Laptop
} from "lucide-react";

import SplitText from "../../bits/split-text.jsx";
import BlurText from "../../bits/blur-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";

const features = [
  {
    icon: Settings,
    title: "Modern Infrastructure",
    description: "State-of-the-art computers and latest software for hands-on learning.",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    icon: TrendingUp,
    title: "Industry Relevant",
    description: "Bridging the gap between academics and industry standards.",
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    icon: Users,
    title: "Skilled Professionals",
    description: "Highly qualified faculty and alumni working across sectors.",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    icon: BookOpen,
    title: "Holistic Learning",
    description: "Workshops, seminars and activities for overall development.",
    color: "bg-orange-500/10 text-orange-500"
  }
];

// Autoplay & Looping Lab Tour Video Player
function LabVideoPlayer() {
  return (
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-primary/20 bg-black shadow-[0_20px_50px_rgba(59,130,246,0.12)] group">
      {/* Video Element */}
      <video
        src="/videos/computer lab.mp4"
        className="w-full h-auto aspect-video object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Modern Brand Glassmorphic Overlay (Non-interactive) */}
      <div className="absolute top-6 left-6 select-none bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3 pointer-events-none hidden sm:block animate-fade-in">
        <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">Virtual Tour</span>
        <h4 className="text-white text-base font-extrabold tracking-tight mt-0.5">Advanced Computer Labs</h4>
      </div>
    </div>
  );
}

export function ComputerLabSection() {
  return (
    <main className="bg-background pb-20">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden border-b border-border/70 bg-card/40 pt-32 pb-10 lg:pt-28 lg:pb-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-y-0 right-0 w-full sm:w-4/5 lg:w-[52%] opacity-20">
          <img
            src="/images/overview/campus overview.webp"
            alt="Campus backdrop"
            className="h-full w-full object-cover object-right" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/96 to-background/88" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-end lg:px-8">
          <div>
            <SplitText
              text="Computer Lab"
              className="text-5xl font-bold text-foreground sm:text-7xl pt-3 tracking-tighter"
              delay={0.08}
            />
            <div className="mt-6 h-1.5 w-32 rounded-full bg-gradient-to-r from-primary via-primary/70 to-accent" />
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              <BlurText text="State-of-the-art computing facilities designed to foster innovation and technical excellence." />
            </p>
          </div>
          <div className="justify-self-start text-sm font-medium text-muted-foreground lg:justify-self-end">
            <span className="hover:text-primary transition-colors cursor-pointer">Home</span>
            <span className="mx-2 text-muted-foreground/60">/</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Our Campus</span>
            <span className="mx-2 text-muted-foreground/60">/</span>
            <span className="text-foreground">Computer Lab</span>
          </div>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Column */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner">
                <Monitor className="h-8 w-8" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Computer Lab at</p>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl tracking-tight">
                  Satpuda College of <span className="text-primary">Engineering & Polytechnic</span>
                </h2>
                <div className="mt-2 h-1 w-20 rounded-full bg-primary/30" />
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="h-full"
                >
                  <SpotlightCard 
                    className="h-full p-6 bg-card/50 border-border/50 hover:border-primary/20 transition-all duration-300 group"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${feature.color} group-hover:bg-primary group-hover:text-white transition-colors duration-300`}
                    >
                      <feature.icon className="h-5 w-5" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
            whileHover={{ scale: 1.02 }}
          >
            <div className="overflow-hidden rounded-[2.5rem] border-4 border-card shadow-2xl shadow-primary/5">
              <img
                src="/images/overview/cs-lab-st.webp"
                alt="Students in Computer Lab"
                className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[600px]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </div>
            {/* Floating Badge */}
            <motion.div 
              className="absolute -bottom-6 -left-6 rounded-2xl bg-card p-6 shadow-xl border border-border backdrop-blur-md hidden sm:block"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Settings className="h-6 w-6 animate-spin-slow" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">25+</p>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Modern Labs</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- ADDED PREMIUM IMAGE-BASED SECTIONS (SAME-TO-SAME COPY & LAYOUT) --- */}

      {/* Section 1: Digital Infrastructure & Video Tour */}
      <section className="relative overflow-hidden bg-gradient-to-b from-card/20 via-background to-card/10 py-20 lg:py-24 border-t border-border/40 mt-12 sm:mt-16">
        {/* Subtle decorative background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.05),transparent_40%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.03),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow Pill */}
          <div className="flex justify-center mb-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-primary shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              OUR DIGITAL INFRASTRUCTURE
            </motion.div>
          </div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-3xl font-extrabold text-foreground sm:text-5xl tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Experience The Future Of Learning In Our <span className="relative inline-block text-primary">Computer Labs<span className="absolute bottom-0.5 left-0 w-full h-[6px] rounded bg-gradient-to-r from-primary to-accent opacity-30" /></span>
          </motion.h2>

          {/* Paragraph Copy Exactly From Image */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-center text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto font-medium"
          >
            Discover our state-of-the-art computer laboratories designed to provide students with real-world technical exposure. Equipped with high-performance systems, high-speed internet, modern software environments, and smart learning infrastructure, our labs create the perfect ecosystem for coding, development, research, innovation, and practical learning experiences.
          </motion.p>

          {/* Interactive Video Tour Player Container */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 sm:mt-16"
          >
            <LabVideoPlayer />
          </motion.div>

          {/* Sub-Video Metric Stats Cards Row */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
            {[
              {
                icon: Laptop,
                value: "200+",
                label: "Systems Available",
                desc: "High Performance Systems"
              },
              {
                icon: Wifi,
                value: "High-Speed",
                label: "Internet Speed",
                desc: "Fiber Connectivity"
              },
              {
                icon: BookOpen,
                value: "Daily",
                label: "Practical Sessions",
                desc: "Regular Lab Practice"
              },
              {
                icon: Clock,
                value: "Multiple Labs",
                label: "Lab Availability",
                desc: "Spacious & Comfortable"
              }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative overflow-hidden rounded-2xl bg-card border border-border/80 p-5 sm:p-6 shadow-md hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-3 shadow-inner">
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground tracking-wider uppercase mb-1">{stat.label}</span>
                  <span className="text-lg sm:text-2xl font-extrabold text-foreground tracking-tight mb-1 group-hover:text-primary transition-colors">{stat.value}</span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground/80 leading-normal">{stat.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 2: Premium Facilities feature cards */}
      <section className="relative overflow-hidden bg-card/10 py-20 lg:py-24 border-t border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.04),transparent_30%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow Pill */}
          <div className="flex justify-center mb-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-accent shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              PREMIUM FACILITIES
            </motion.div>
          </div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-3xl font-extrabold text-foreground sm:text-5xl tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Advanced Facilities For Practical <span className="relative inline-block text-primary">Excellence<span className="absolute bottom-0.5 left-0 w-full h-[6px] rounded bg-gradient-to-r from-accent to-primary opacity-30" /></span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-center text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto font-medium"
          >
            Our computer laboratories are built to bridge the gap between theoretical learning and industry-level practical implementation through modern infrastructure and advanced digital tools.
          </motion.p>

          {/* Features Grid */}
          <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Monitor,
                title: "High Performance Systems",
                desc: "Latest generation computers optimized for development, programming, design, and simulations.",
                color: "bg-blue-500/10 text-blue-500 hover:border-blue-500/30"
              },
              {
                icon: Wifi,
                title: "High-Speed Internet",
                desc: "Seamless connectivity for cloud computing, research work, online learning, and real-time collaboration.",
                color: "bg-emerald-500/10 text-emerald-500 hover:border-emerald-500/30"
              },
              {
                icon: Code,
                title: "Industry Software Environment",
                desc: "Modern IDEs, development tools, compilers, database systems, and software platforms for hands-on learning.",
                color: "bg-purple-500/10 text-purple-500 hover:border-purple-500/30"
              },
              {
                icon: ShieldCheck,
                title: "Smart & Secure Labs",
                desc: "Well-maintained, secure, and monitored lab environments ensuring smooth and focused practical sessions.",
                color: "bg-amber-500/10 text-amber-500 hover:border-amber-500/30"
              }
            ].map((facility, idx) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="h-full"
              >
                <SpotlightCard className="h-full p-6 bg-card border border-border/80 shadow-md hover:shadow-2xl hover:border-primary/20 hover:bg-card/90 transition-all duration-300 group">
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${facility.color} transition-all duration-300 shadow-inner group-hover:scale-110`}>
                    <facility.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">{facility.title}</h3>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed font-medium">
                    {facility.desc}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 3: Lab Gallery Asymmetric Grid */}
      <section className="relative overflow-hidden py-20 lg:py-24 border-t border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.03),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow Pill */}
          <div className="flex justify-center mb-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-primary shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              LAB GALLERY
            </motion.div>
          </div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-3xl font-extrabold text-foreground sm:text-5xl tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Moments From Our Computer <span className="relative inline-block text-primary">Labs<span className="absolute bottom-0.5 left-0 w-full h-[6px] rounded bg-gradient-to-r from-primary to-accent opacity-30" /></span>
          </motion.h2>

          {/* Asymmetric Masonry Photo Grid */}
          <div className="mt-12 sm:mt-16 grid gap-6 md:grid-cols-3">
            
            {/* Left Column - Large portrait image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-3xl border border-border shadow-lg relative group h-[300px] md:h-[480px]"
            >
              <img 
                src="/images/overview/student in class.webp" 
                alt="Active lab session" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent flex items-end p-6">
                <div>
                  <h4 className="text-white text-lg font-bold tracking-tight">Collaborative Learning Sessions</h4>
                  <p className="text-white/80 text-xs mt-1">Students actively participating in discussions and practical learning activities.</p>
                </div>
              </div>
            </motion.div>

            {/* Middle Column - Two stacked landscape images */}
            <div className="flex flex-col gap-6 md:h-[480px] justify-between">
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-3xl border border-border shadow-lg relative group h-[140px] md:h-[228px]"
              >
                <img 
                  src="/images/journey/1.webp" 
                  alt="Students coding" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent flex items-end p-5">
                  <div>
                    <h4 className="text-white text-base font-bold tracking-tight">Advanced Computing Facilities</h4>
                    <p className="text-white/80 text-[10px] mt-0.5">Modern infrastructure supporting coding, research, and technical innovation.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-3xl border border-border shadow-lg relative group h-[140px] md:h-[228px]"
              >
                <img 
                  src="/images/journey/4.webp" 
                  alt="Modern Lab Setting" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent flex items-end p-5">
                  <div>
                    <h4 className="text-white text-base font-bold tracking-tight">Project Development Activities</h4>
                    <p className="text-white/80 text-[10px] mt-0.5">Hands-on project work fostering creativity, teamwork, and problem-solving skills.</p>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right Column - Close-up tech / RGB keyboard portrait image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-3xl border border-border shadow-lg relative group h-[300px] md:h-[480px]"
            >
              <img 
                src="/images/overview/learn-env-st.webp" 
                alt="Code display" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent flex items-end p-6">
                <div>
                  <h4 className="text-white text-lg font-bold tracking-tight">Industry-Ready Learning Environment</h4>
                  <p className="text-white/80 text-xs mt-1">Preparing students for real-world technology challenges through practical exposure.</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

    </main>
  );
}
