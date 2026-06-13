"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Rocket,
  Cpu,
  Briefcase,
  GraduationCap,
  Building2,
  BookOpen,
  Users,
  Wrench,
  ShieldCheck,
  Network,
  Award,
  TrendingUp,
  CheckCircle2,
  Wallet,
  FileCheck,
  Search,
  Boxes,
  Handshake,
  Store,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import BlurText from "../../bits/blur-text.jsx";
import Magnetic from "../../bits/magnetic.jsx";
import SplitText from "../../bits/split-text.jsx";
import ShinyText from "../../bits/shiny-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";

const highlightChips = [
  "MSME Host Institute",
  "Startup Support",
  "Mentorship",
  "Technical Guidance",
  "Idea to Venture",
];

const supportAreas = [
  { icon: Building2, title: "Institutional Facilities", description: "State-of-the-art infrastructure to build and test ideas." },
  { icon: Briefcase, title: "Business Advisory", description: "Guidance on planning, strategy, and venture building." },
  { icon: Users, title: "Mentoring", description: "Continuous mentorship from faculty and industry experts." },
  { icon: Cpu, title: "Technical Services", description: "Hands-on technical and engineering support." },
  { icon: Boxes, title: "Product Development", description: "Help in turning concepts into market-ready products." },
  { icon: Rocket, title: "Entrepreneurship Support", description: "End-to-end support for startups and entrepreneurs." },
];

const objectives = [
  "Encouraging individual innovators to develop new innovative products.",
  "Nurturing ideas through to commercialization.",
  "Supporting existing and prospective entrepreneurs.",
  "Helping students participate in idea development as part of career building.",
  "Promoting an entrepreneurship culture inside the institution.",
];

const facilities = [
  {
    icon: Lightbulb,
    title: "Technology Consultancy",
    description:
      "Assistance in identification, evaluation, and improvement of technology and technical know-how.",
  },
  {
    icon: Briefcase,
    title: "Business Facilitation",
    description:
      "Support for pre-feasibility studies, project appraisal, market research, techno-economic studies, and commercialization guidance.",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description:
      "Training programs based on entrepreneur requirements in technical areas, entrepreneurship development, and management skills.",
  },
  {
    icon: Building2,
    title: "Infrastructure Support",
    description:
      "Ready-to-use institutional infrastructure, workspace support, connectivity, office support, and common facilities such as meeting and discussion rooms.",
  },
  {
    icon: BookOpen,
    title: "Library Access",
    description:
      "Entrepreneurs and incubatees may use the institute library and knowledge resources for research and development.",
  },
  {
    icon: Wrench,
    title: "Technical & Management Support",
    description:
      "Faculty members and experts provide necessary technical, project, and management support to incubatees.",
  },
];

const benefits = [
  { icon: Award, title: "Strong Brand Image", description: "Build on the trusted institutional identity of Satpuda." },
  { icon: Network, title: "Effective Networking", description: "Connect with technical institutions, industries, and incubators." },
  { icon: Building2, title: "Ready Infrastructure", description: "Ready-to-use infrastructure and workspace support." },
  { icon: Users, title: "Institutional Support", description: "Backing from management and academic departments." },
  { icon: ShieldCheck, title: "Advisory Guidance", description: "Direction from the governing body and advisory committee." },
  { icon: TrendingUp, title: "Expert Exposure", description: "Access to industrial, financial, technical, and management experts." },
  { icon: CheckCircle2, title: "Idea to Market", description: "Support for idea validation, prototype development, and commercialization." },
];

const processSteps = [
  { icon: FileCheck, title: "Idea Submission", description: "Share your innovative idea or concept." },
  { icon: Search, title: "Screening & Evaluation", description: "Ideas are reviewed and assessed for potential." },
  { icon: Lightbulb, title: "Mentorship & Guidance", description: "Receive technical mentoring and direction." },
  { icon: Boxes, title: "Prototype Development", description: "Build and refine a working prototype." },
  { icon: Handshake, title: "Business Support", description: "Get business, financial, and advisory support." },
  { icon: Store, title: "Commercialization", description: "Take your product or venture to market." },
];

const galleryImages = [
  { src: "/images/overview/campus building.webp", title: "Innovation Campus" },
  { src: "/images/overview/lab-st.webp", title: "Development Labs" },
  { src: "/images/overview/seminar-st.webp", title: "Mentoring Sessions" },
  { src: "/images/overview/student in lab.webp", title: "Hands-on Prototyping" },
  { src: "/images/overview/e-library-st.webp", title: "Knowledge Resources" },
  { src: "/images/overview/learn-env-st.webp", title: "Collaborative Spaces" },
];

// Outer orbit — what defines us and our quality
const orbitNodes = [
  { icon: Lightbulb, label: "Innovation" },
  { icon: Award, label: "Quality" },
  { icon: Users, label: "Mentorship" },
  { icon: Cpu, label: "Technology" },
  { icon: GraduationCap, label: "Learning" },
  { icon: Network, label: "Industry" },
  { icon: Wrench, label: "Engineering" },
  { icon: TrendingUp, label: "Growth" },
];

// Inner orbit — the outcomes
const innerOrbitNodes = [
  { icon: Rocket, label: "Startups" },
  { icon: Boxes, label: "Products" },
  { icon: Handshake, label: "Ventures" },
];

const scrollToId = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export function MsmeIncubationSection() {
  return (
    <main className="bg-background pb-6 sm:pb-8 lg:pb-10">
      {/* Hero */}
      <motion.section
        className="relative overflow-hidden border-b border-border/70 bg-card/40 pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-20 lg:pb-24"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.1),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:100px_100px]" />
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
                MSME Host Institute • Govt. of India
              </motion.div>

              <SplitText
                text="MSME Innovation & Incubation Center"
                className="text-4xl font-bold text-foreground sm:text-6xl lg:text-7xl tracking-tighter"
                delay={0.05}
              />
              <div className="mt-8 h-2 w-32 rounded-full bg-gradient-to-r from-primary via-primary/70 to-accent" />
              <p className="mt-10 max-w-xl text-xl text-muted-foreground leading-relaxed">
                <BlurText text="Empowering innovators, entrepreneurs, and students to transform ideas into successful ventures through mentorship, technical guidance, infrastructure support, and industry-oriented incubation." />
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-12 flex flex-wrap gap-4"
              >
                <button
                  type="button"
                  onClick={() => scrollToId("facilities")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-5 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 group inline-flex items-center gap-2"
                >
                  Explore Facilities
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToId("contact")}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-10 py-5 text-lg font-bold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:text-primary"
                >
                  Contact Incubation Cell
                </button>
              </motion.div>
            </div>

            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-card group">
                <motion.img
                  src="/images/overview/seminar-st.webp"
                  alt="MSME Innovation & Incubation Center"
                  className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-2 w-2 rounded-full bg-primary animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">Innovate. Build. Launch.</span>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight">From Idea to Venture</h3>
                </div>
              </div>

              <Magnetic intensity={0.3}>
                <motion.div
                  className="absolute -bottom-10 -right-10 bg-card shadow-2xl rounded-[2rem] p-8 flex items-center gap-5 border border-border/50 backdrop-blur-xl"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-foreground tracking-tight">Incubation</div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Startups & Innovators</div>
                  </div>
                </motion.div>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Highlight chips */}
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

      {/* About Incubation */}
      <motion.section
        className="mx-auto mt-20 grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-start lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="rounded-[40px] border border-border/40 bg-card/40 backdrop-blur-md p-8 shadow-2xl sm:p-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 bg-primary/5 rounded-full blur-3xl" />
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">About the Incubation Center</p>
          <h2 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl tracking-tight">Turning Ideas into Ventures</h2>
          <BlurText
            text="Satpuda College of Engineering & Polytechnic, Balaghat is recognized as an MSME Host Institute under the Ministry of Micro, Small & Medium Enterprises, Government of India."
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          />
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            The incubation center supports innovators, students, startups, and prospective entrepreneurs in converting innovative ideas into market-ready products and successful business ventures.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {supportAreas.slice(0, 3).map(({ icon: Icon, title, description }) => (
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
          <motion.div className="overflow-hidden rounded-[40px] border border-border/40 bg-card shadow-2xl group relative" whileHover={{ y: -8 }}>
            <img src="/images/overview/student in lab.webp" alt="Innovation at Satpuda" className="h-80 w-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <p className="text-sm font-bold tracking-widest uppercase mb-1">Build & Test</p>
              <h4 className="text-2xl font-bold">Hands-on Innovation</h4>
            </div>
          </motion.div>

          <div className="rounded-[40px] border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/5 p-8 backdrop-blur-xl">
            <Sparkles className="h-8 w-8 text-primary mb-4" />
            <h4 className="text-xl font-bold text-foreground">Support Areas</h4>
            <ul className="mt-4 space-y-2">
              {supportAreas.slice(3).map(({ title }) => (
                <li key={title} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span>{title}</span>
                </li>
              ))}
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                <span>Business advisory & mentoring</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Innovation Core — signature animated showcase representing Satpuda & its quality */}
      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative overflow-hidden rounded-[40px] border border-border/40 bg-gradient-to-b from-card/60 via-background to-background p-8 sm:p-12 shadow-2xl">
          {/* aurora background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
            <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />
            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>

          <div className="relative grid gap-12 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-primary font-semibold tracking-widest uppercase text-xs mb-6">
                <div className="h-px w-8 bg-primary" />
                The Satpuda Difference
              </div>
              <h3 className="text-4xl font-bold text-foreground sm:text-5xl tracking-tight leading-[1.05]">
                One Engine.
                <br />
                <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                  Endless Innovation.
                </span>
              </h3>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                Every idea that enters Satpuda is powered by a living ecosystem — innovation, quality, mentorship, and engineering excellence orbiting a single core, propelling raw ideas into real ventures.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  { value: "100%", label: "Idea Focus" },
                  { value: "24/7", label: "Mentorship" },
                  { value: "∞", label: "Possibilities" },
                ].map((stat) => (
                  <div key={stat.label} className="min-w-0 rounded-2xl border border-border/40 bg-background/50 p-3 text-center backdrop-blur-sm sm:p-4">
                    <p className="text-2xl font-black tracking-tighter text-foreground sm:text-3xl">
                      <ShinyText text={stat.value} speed={3} color="#d60b0b" className="block" />
                    </p>
                    <p className="mt-1 break-words text-[9px] font-bold uppercase leading-tight tracking-[0.08em] text-muted-foreground sm:text-[10px] sm:tracking-[0.2em]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The orbital animation */}
            <div className="relative mx-auto aspect-square w-full max-w-[460px]">
              {/* spinning conic glow */}
              <motion.div
                className="absolute inset-[8%] rounded-full opacity-50 blur-2xl [background:conic-gradient(from_0deg,var(--color-primary,#d60b0b),transparent,var(--color-accent,#1e3a8a),transparent,var(--color-primary,#d60b0b))]"
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              />

              {/* pulsing concentric rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`pulse-${i}`}
                  className="absolute left-1/2 top-1/2 h-1/3 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30"
                  animate={{ scale: [1, 2.6, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: i * 1.3 }}
                />
              ))}

              {/* dashed orbit guides */}
              <div className="absolute inset-0 rounded-full border border-dashed border-border/40" />
              <div className="absolute inset-[26%] rounded-full border border-dashed border-border/40" />

              {/* OUTER orbit */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
              >
                {orbitNodes.map(({ icon: Icon, label }, i) => {
                  const angle = (360 / orbitNodes.length) * i - 90;
                  const rad = (angle * Math.PI) / 180;
                  const x = 50 + 46 * Math.cos(rad);
                  const y = 50 + 46 * Math.sin(rad);
                  return (
                    <div
                      key={label}
                      className="absolute"
                      style={{ top: `${y}%`, left: `${x}%`, transform: "translate(-50%, -50%)" }}
                    >
                      <motion.div
                        className="flex flex-col items-center gap-1"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/50 bg-card text-primary shadow-lg backdrop-blur transition-colors sm:h-12 sm:w-12">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground sm:text-[10px]">{label}</span>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

              {/* INNER orbit (counter-rotating) */}
              <motion.div
                className="absolute inset-[26%]"
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              >
                {innerOrbitNodes.map(({ icon: Icon, label }, i) => {
                  const angle = (360 / innerOrbitNodes.length) * i - 90;
                  const rad = (angle * Math.PI) / 180;
                  const x = 50 + 50 * Math.cos(rad);
                  const y = 50 + 50 * Math.sin(rad);
                  return (
                    <div
                      key={label}
                      className="absolute"
                      style={{ top: `${y}%`, left: `${x}%`, transform: "translate(-50%, -50%)" }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      >
                        <Icon className="h-4 w-4" />
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

              {/* CORE */}
              <motion.div
                className="absolute left-1/2 top-1/2 flex h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-primary/30 bg-gradient-to-br from-primary to-accent text-center text-primary-foreground shadow-2xl shadow-primary/40"
                animate={{ scale: [1, 1.07, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Rocket className="h-6 w-6 sm:h-7 sm:w-7" />
                <span className="mt-1 text-[10px] font-black uppercase tracking-tight leading-none sm:text-xs">Satpuda</span>
                <span className="text-[7px] font-semibold uppercase tracking-[0.15em] opacity-80 sm:text-[8px]">Innovation Core</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Objective */}
      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="rounded-[40px] border border-border/40 bg-card/40 backdrop-blur-md p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 -mt-20 -ml-20 h-64 w-64 bg-primary/10 rounded-full blur-3xl opacity-40" />
          <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Our Purpose</p>
              <h3 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl tracking-tight leading-tight">Objective of the Incubation Center</h3>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                To promote innovative ideas and sharpen entrepreneurship acumen under the MSME scheme
                <span className="font-semibold text-foreground"> “Support for Entrepreneurial and Managerial Development of SMEs through Incubators.”</span>
              </p>
            </div>
            <div className="grid gap-4">
              {objectives.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-4 rounded-2xl border border-border/40 bg-background/40 p-5 transition-all hover:border-primary/30"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-black text-primary">{i + 1}</div>
                  <p className="text-base text-muted-foreground leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Facilities */}
      <motion.section
        id="facilities"
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">What We Offer</p>
          <h3 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl tracking-tight">Facilities Available</h3>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map(({ icon: Icon, title, description }) => (
            <SpotlightCard key={title} className="group rounded-[2.5rem] border-none bg-card/40 p-8 transition-all hover:-translate-y-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>
              <h4 className="mt-6 text-xl font-bold text-foreground transition-colors group-hover:text-primary">{title}</h4>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
            </SpotlightCard>
          ))}
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Along With These, You Get</p>
          <h3 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl tracking-tight">Benefits for Incubatees</h3>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }) => (
            <SpotlightCard key={title} className="group flex items-start gap-5 rounded-[2rem] border-none bg-background/40 p-6 transition-all hover:-translate-y-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">{title}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </motion.section>

      {/* Financial Assistance */}
      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative overflow-hidden rounded-[40px] border border-primary/20 bg-gradient-to-br from-primary/10 via-card/40 to-accent/5 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="absolute top-0 right-0 -mt-24 -mr-24 h-72 w-72 bg-primary/20 rounded-full blur-3xl opacity-40" />
          <div className="relative">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-inner">
                <Wallet className="h-8 w-8" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary">MSME Incubation Scheme</p>
                <h3 className="mt-2 text-3xl font-bold text-foreground tracking-tight sm:text-4xl">Financial Assistance</h3>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-border/40 bg-background/50 p-8 backdrop-blur-sm">
                <p className="text-4xl font-black tracking-tighter text-foreground sm:text-5xl">
                  <ShinyText text="Up to ₹15 Lakh" speed={3} color="#d60b0b" className="block" />
                </p>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Per idea may be provided to the Host Institute for developing and nurturing approved innovative ideas.
                </p>
              </div>
              <div className="rounded-[2rem] border border-border/40 bg-background/50 p-8 backdrop-blur-sm">
                <p className="text-4xl font-black tracking-tighter text-foreground sm:text-5xl">
                  <ShinyText text="Up to ₹1 Crore" speed={3} color="#d60b0b" className="block" />
                </p>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  May be provided to the Host Institute for procurement and installation of relevant plant, machinery, hardware, software, R&D facilities, and common facilities for incubatees, subject to scheme approval and eligibility.
                </p>
              </div>
            </div>

            <p className="mt-8 flex items-start gap-3 rounded-2xl border border-border/40 bg-background/40 p-5 text-sm text-muted-foreground">
              <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
              <span>Financial assistance is subject to MSME scheme norms, approval, eligibility, and official guidelines.</span>
            </p>
          </div>
        </div>
      </motion.section>

      {/* Process / How it works */}
      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">The Journey</p>
          <h3 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl tracking-tight">How It Works</h3>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-[2.5rem] border border-border/40 bg-card/40 p-8 backdrop-blur-md transition-all hover:-translate-y-2 hover:border-primary/30"
            >
              <div className="absolute top-6 right-8 text-6xl font-black text-primary/10 transition-colors group-hover:text-primary/20">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>
              <h4 className="mt-6 text-xl font-bold text-foreground transition-colors group-hover:text-primary">{title}</h4>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Gallery */}
      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">A Glimpse Inside</p>
          <h3 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl tracking-tight">Gallery</h3>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img) => (
            <SpotlightCard key={img.title} className="group overflow-hidden rounded-[2.5rem] border-none bg-card/40 p-0 shadow-2xl transition-all hover:-translate-y-2">
              <div className="h-56 overflow-hidden relative">
                <img src={img.src} alt={img.title} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-bold tracking-tight">{img.title}</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 lg:mb-10 scroll-mt-24"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative overflow-hidden rounded-[40px] border border-border/40 bg-card/40 backdrop-blur-xl p-8 sm:p-12 shadow-2xl">
          <div className="absolute top-0 left-0 -mt-20 -ml-20 h-64 w-64 bg-primary/20 rounded-full blur-3xl opacity-30" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3 sm:tracking-[0.5em]">Get In Touch</p>
            <h3 className="text-3xl font-bold text-foreground tracking-tight sm:text-4xl">Contact MSME Incubation Center</h3>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Have an idea or want to know more about incubation support? Reach out to our incubation cell.
            </p>

            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <li className="flex items-start gap-4 text-muted-foreground">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-foreground">Satpuda College of Engineering & Polytechnic</p>
                  <p className="text-sm leading-relaxed">Satpuda Campus, Lalbarra Road, Manjhapur Garra, Balaghat, Madhya Pradesh</p>
                </div>
              </li>
              <li className="flex items-start gap-4 text-muted-foreground">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-foreground">Phone</p>
                  <p className="text-sm">
                    <a href="tel:6262604111" className="hover:text-primary transition-colors">6262604111</a>,{" "}
                    <a href="tel:6262604112" className="hover:text-primary transition-colors">6262604112</a>
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 text-muted-foreground">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-foreground">Email</p>
                  <p className="text-sm">
                    <a href="mailto:satpudaengineeringcollege@gmail.com" className="break-all hover:text-primary transition-colors">satpudaengineeringcollege@gmail.com</a>
                  </p>
                </div>
              </li>
            </ul>

            <a
              href="tel:6262604111"
              className="group relative mt-10 inline-flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground shadow-xl shadow-primary/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40"
            >
              {/* awwwards-style fill sweep */}
              <span className="absolute inset-0 translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-background">
                Contact Incubation Cell
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
