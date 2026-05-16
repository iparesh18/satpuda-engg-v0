"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect, Suspense, lazy } from "react";
import {
  Award,
  ShieldCheck,
  HandHeart,
  Sparkles,
  GraduationCap,
  ClipboardCheck,
  FileText,
  CheckCircle,
  Download,
  ArrowRight,
  TrendingUp,
  Star,
  Zap,
  Globe
} from "lucide-react";
import BlurText from "../../bits/blur-text.jsx";
import Magnetic from "../../bits/magnetic.jsx";
import SplitText from "../../bits/split-text.jsx";
import ShinyText from "../../bits/shiny-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";

const highlightChips = [
  "Merit Based Support",
  "Financial Assistance",
  "Excellence Recognition",
  "Equal Opportunities",
  "Bright Futures",
];

const aboutCards = [
  {
    icon: Award,
    title: "Merit Recognition",
    description: "Rewards for academic excellence.",
  },
  {
    icon: HandHeart,
    title: "Need Based Aid",
    description: "Support for deserving students.",
  },
  {
    icon: ShieldCheck,
    title: "Equal Opportunity",
    description: "Encouraging talent from all backgrounds.",
  },
];

const opportunityCards = [
  {
    title: "Merit Based Scholarship",
    description: "Awarded to students with outstanding academic performance.",
    badge: "For High Achievers",
  },
  {
    title: "Need Based Scholarship",
    description: "Financial assistance for students from economically weaker sections.",
    badge: "Financial Support",
  },
  {
    title: "Government Scholarships",
    description: "Facilitating students to avail government schemes and welfare programs.",
    badge: "Govt. Approved",
  },
  {
    title: "Special Scholarships",
    description: "Scholarships for sports, cultural, technical and other achievements.",
    badge: "Talent Recognition",
  },
];

const eligibilityList = [
  "Students must be enrolled in regular programs.",
  "Minimum academic criteria varies for each scheme.",
  "Documents and income proof (if applicable) required.",
  "Renewal is subject to continued performance.",
  "Subject to institute and government norms.",
];

const applicationSteps = [
  {
    icon: ClipboardCheck,
    title: "Check Eligibility",
    description: "Review scheme details and eligibility criteria.",
  },
  {
    icon: FileText,
    title: "Prepare Documents",
    description: "Collect required documents and certificates.",
  },
  {
    icon: GraduationCap,
    title: "Submit Application",
    description: "Fill the application form and submit online/offline.",
  },
  {
    icon: CheckCircle,
    title: "Verification & Approval",
    description: "Institute verifies and approves eligible students.",
  },
];

const constellationNodes = [
  { top: "12%", left: "16%", size: "h-2.5 w-2.5", depth: 1 },
  { top: "18%", left: "62%", size: "h-3 w-3", depth: 1.4 },
  { top: "38%", left: "30%", size: "h-2 w-2", depth: 0.8 },
  { top: "44%", left: "76%", size: "h-2.5 w-2.5", depth: 1.2 },
  { top: "68%", left: "22%", size: "h-3 w-3", depth: 1.6 },
  { top: "70%", left: "58%", size: "h-2 w-2", depth: 1 },
  { top: "82%", left: "82%", size: "h-2.5 w-2.5", depth: 1.3 },
];

export function ScholarshipSection() {
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const [labTilt, setLabTilt] = useState({ glowX: 50, glowY: 50 });

  const handleGlowMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setGlow({ x, y });
  };

  const handleLabMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setLabTilt({ glowX: x, glowY: y });
  };

  const handleLabLeave = () => {
    setLabTilt({ glowX: 50, glowY: 50 });
  };

  const parallaxX = (labTilt.glowX - 50) / 4;
  const parallaxY = (labTilt.glowY - 50) / 4;

  return (
    <main className="bg-background pb-20">
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
          
          <motion.div 
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-primary font-semibold tracking-widest uppercase text-xs mb-6"
              >
                <div className="h-px w-8 bg-primary" />
                Financial Excellence
              </motion.div>
              
              <SplitText
                text="Scholarships & Fellowships"
                className="text-5xl font-bold text-foreground sm:text-7xl lg:text-8xl tracking-tighter"
                delay={0.08}
              />
              <div className="mt-8 h-2 w-32 rounded-full bg-gradient-to-r from-primary via-primary/70 to-accent" />
              <p className="mt-10 max-w-xl text-xl text-muted-foreground leading-relaxed">
                <BlurText text="Empowering talented and deserving students through financial support and recognition of academic excellence." />
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
                  Apply Now
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground ml-2">
                  <span>Our Campus</span>
                  <span className="text-muted-foreground/30">/</span>
                  <span className="text-foreground">Scholarships</span>
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
                  src="/images/overview/smart library.png"
                  alt="Scholarship Hero"
                  className="w-full h-[500px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              
              <Magnetic intensity={0.3}>
                <motion.div 
                  className="absolute -bottom-10 -right-10 bg-card shadow-2xl rounded-[2rem] p-8 flex items-center gap-5 border border-border/50 backdrop-blur-xl"
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
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-foreground tracking-tight">Support</div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Empowering Dreams</div>
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
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
            {highlightChips.map((chip) => (
              <Magnetic key={chip} intensity={0.2}>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/40 backdrop-blur-sm px-5 py-2.5 transition-all hover:bg-background/80 hover:border-primary/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {chip}
                </span>
              </Magnetic>
            ))}
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
          
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">About Scholarships</p>
          <h2 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl tracking-tight">Investing in Talent, Inspiring Futures</h2>
          <BlurText
            text="We believe financial limitations should never come in the way of quality education. Our scholarships and fellowships are designed to support meritorious, hardworking and deserving students."
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          />
          
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {aboutCards.map(({ icon: Icon, title, description }) => (
              <SpotlightCard key={title} className="group rounded-[2rem] border-none bg-background/40 p-6 transition-all hover:-translate-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-foreground transition-colors group-hover:text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <motion.div 
            className="overflow-hidden rounded-[40px] border border-border/40 bg-card shadow-2xl group relative"
            whileHover={{ y: -8 }}
          >
            <img src="/images/overview/student in lab.png" alt="Success Story" className="h-80 w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <p className="text-sm font-bold tracking-widest uppercase mb-1">Success Stories</p>
              <h4 className="text-2xl font-bold">Academic Excellence</h4>
            </div>
          </motion.div>
          
          <SpotlightCard className="group relative overflow-hidden rounded-[40px] border-none bg-gradient-to-br from-primary/10 to-accent/5 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
            {/* Background Decorative Mesh */}
            <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(var(--primary)_1px,transparent_1px)] [background-size:20px_20px] transition-transform duration-1000 group-hover:scale-110" />
            
            <div className="relative z-10">
              <Magnetic intensity={0.4}>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:rotate-12 shadow-lg">
                  <Globe className="h-8 w-8" />
                </div>
              </Magnetic>
              
              <h4 className="mt-8 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">Global Reach</h4>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Connecting local talent with international opportunities, prestigious global fellowships, and comprehensive government schemes.
              </p>
              
              <motion.div 
                className="mt-8 flex items-center gap-2 text-primary font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0"
              >
                <span>Explore Network</span>
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </div>
          </SpotlightCard>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Our Scholarship Schemes</p>
          <h3 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl tracking-tight">Scholarship Opportunities</h3>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {opportunityCards.map((card) => (
            <SpotlightCard key={card.title} className="group rounded-[2.5rem] border-none bg-card/40 p-8 text-center transition-all hover:-translate-y-2">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                <Award className="h-8 w-8" />
              </div>
              <h4 className="mt-6 text-xl font-bold text-foreground transition-colors group-hover:text-primary">{card.title}</h4>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              <span className="mt-6 inline-flex items-center rounded-full bg-primary/10 px-5 py-2 text-xs font-bold text-primary uppercase tracking-widest border border-primary/20">
                {card.badge}
              </span>
            </SpotlightCard>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className="group relative overflow-hidden rounded-[40px] border border-border/40 bg-card/40 backdrop-blur-xl p-8 shadow-2xl sm:p-12"
          onMouseMove={handleLabMove}
          onMouseLeave={handleLabLeave}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background: `radial-gradient(circle at ${labTilt.glowX}% ${labTilt.glowY}%, rgba(59,130,246,0.3), transparent 60%)`,
            }}
          />
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Scholarship Impact Lab</p>
              <h3 className="mt-4 text-4xl font-bold text-foreground tracking-tight">Interactive Connectivity</h3>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Hover to energize the scholarship constellation. Each node represents a support stream lighting up your educational journey.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-6 py-2 text-xs font-bold text-primary uppercase tracking-widest">
                  Live Impact
                </span>
                <ShinyText text="48 Active Scholarships" className="rounded-full border border-border/40 bg-background/40 px-6 py-2 text-xs font-bold uppercase tracking-widest" />
                <span className="rounded-full border border-border/40 bg-background/40 px-6 py-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  1,120 Students Supported
                </span>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-[3rem] border border-border/40 bg-background/20 backdrop-blur-xl group/galaxy">
              <div
                className="absolute inset-0 opacity-40 transition-opacity duration-1000 group-hover/galaxy:opacity-70"
                style={{
                  background: `radial-gradient(circle at ${labTilt.glowX}% ${labTilt.glowY}%, rgba(59,130,246,0.3), transparent 70%)`,
                }}
              />
              
              {/* Orbital System */}
              <div className="relative flex h-full w-full items-center justify-center">
                {/* Rotating Rings */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute h-64 w-64 rounded-full border border-primary/20"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute h-48 w-48 rounded-full border border-accent/10"
                />
                
                {/* Central Core */}
                <div className="relative z-20">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="h-20 w-20 rounded-full bg-primary/20 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)] border border-primary/30"
                  >
                    <Sparkles className="h-10 w-10 text-primary animate-pulse" />
                  </motion.div>
                </div>

                {/* Floating Scholarship Nodes */}
                {constellationNodes.map((node, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      top: node.top,
                      left: node.left,
                      x: parallaxX * node.depth,
                      y: parallaxY * node.depth,
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 3 + index,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`relative flex items-center justify-center`}
                    >
                      <div className={`absolute inset-0 rounded-full bg-primary/40 blur-xl opacity-0 group-hover/galaxy:opacity-100 transition-opacity duration-500`} />
                      <div className={`h-4 w-4 rounded-full bg-primary shadow-[0_0_15px_rgba(59,130,246,0.8)] border border-white/20`} />
                      
                      {/* Node Connection Lines (Pseudo) */}
                      <div className="absolute top-1/2 left-1/2 h-px w-32 bg-gradient-to-r from-primary/50 to-transparent origin-left -z-10 opacity-20 group-hover/galaxy:opacity-40 transition-opacity" style={{ transform: `rotate(${index * 45}deg)` }} />
                    </motion.div>
                  </motion.div>
                ))}

                {/* Floating HUD Elements */}
                <div className="absolute top-8 left-8">
                  <div className="flex items-center gap-3 rounded-full border border-border/40 bg-background/60 px-4 py-2 backdrop-blur-md">
                    <div className="h-2 w-2 rounded-full bg-primary animate-ping" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Live Connection</span>
                  </div>
                </div>

                <div className="absolute bottom-8 right-8">
                  <div className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 backdrop-blur-md">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Efficiency</p>
                    <p className="text-xl font-black text-foreground">98.4%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-20 grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr,1fr] lg:items-start lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="rounded-[40px] border border-border/40 bg-card/40 backdrop-blur-md p-8 shadow-2xl sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 -mt-20 -ml-20 h-64 w-64 bg-primary/5 rounded-full blur-3xl" />
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Eligibility Criteria</p>
          <h3 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl tracking-tight">Who Can Apply?</h3>
          <ul className="mt-8 space-y-4">
            {eligibilityList.map((item) => (
              <li key={item} className="flex items-center gap-4 text-muted-foreground group">
                <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(214, 11, 11, 1)]" />
                <span className="text-lg transition-colors group-hover:text-foreground">{item}</span>
              </li>
            ))}
          </ul>
          
          <SpotlightCard className="mt-12 rounded-[2rem] border-none bg-primary/5 p-8 border border-primary/20">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-2">Impact Analysis</p>
            <p className="text-3xl font-black text-foreground tracking-tighter">97% Recipient Rate</p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Our streamlined verification process ensures that support reaches those who need it most, with industry-leading efficiency.
            </p>
          </SpotlightCard>
        </div>

        <div className="rounded-[40px] border border-border/40 bg-card/40 backdrop-blur-md p-8 shadow-2xl sm:p-12 relative overflow-hidden">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Application Process</p>
          <h3 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl tracking-tight">How to Apply?</h3>
          <div className="mt-10 space-y-8">
            {applicationSteps.map(({ icon: Icon, title, description }, i) => (
              <div key={title} className="group flex gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">{title}</h4>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center justify-between gap-8 rounded-[40px] border border-border/40 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-xl p-8 sm:flex-row sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 -mt-20 -ml-20 h-64 w-64 bg-primary/20 rounded-full blur-3xl opacity-30" />
          
          <div className="relative z-10 flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <Download className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">Important Information</h3>
              <p className="mt-2 text-lg text-muted-foreground max-w-md">Download full guidelines and eligibility details for the academic session.</p>
            </div>
          </div>
          
          <Magnetic intensity={0.3}>
            <button className="group relative inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground transition-all hover:pr-12 shadow-xl shadow-primary/20">
              Download Guideline
              <Download className="h-5 w-5 transition-transform group-hover:translate-y-1" />
            </button>
          </Magnetic>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8 mb-20"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="rounded-[40px] border border-border/40 bg-card/40 backdrop-blur-xl p-8 sm:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-20 -right-20 h-96 w-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 h-96 w-96 bg-accent/5 rounded-full blur-[120px]" />
          
          <div className="relative flex flex-col items-center text-center gap-10">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-inner">
              <Sparkles className="h-12 w-12" />
            </div>
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.5em] text-primary mb-4">Dream Big, Achieve More</p>
              <h3 className="text-4xl font-bold text-foreground sm:text-6xl tracking-tighter">We&apos;re here to support your journey.</h3>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
                Our scholarships are more than financial aid - they are a commitment to your success and a brighter tomorrow. Join thousands of students who have empowered their future.
              </p>
            </div>
            <Magnetic intensity={0.3}>
              <button className="group relative inline-flex items-center gap-4 rounded-full bg-primary px-12 py-6 text-xl font-bold text-primary-foreground transition-all hover:pr-14 shadow-2xl shadow-primary/30">
                Apply for Scholarship
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
              </button>
            </Magnetic>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

