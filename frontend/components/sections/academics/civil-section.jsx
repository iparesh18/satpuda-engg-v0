"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Users,
  Building2,
  Trophy,
  Briefcase,
  HardHat,
  DraftingCompass,
  Ruler,
  Landmark,
  ArrowRight,
  BookOpen,
  Microscope,
  Globe,
  Mountain,
  ShieldCheck,
  Sparkles,
  Zap,
  Activity,
  Layers,
} from "lucide-react";

import SplitText from "../../bits/split-text.jsx";
import BlurText from "../../bits/blur-text.jsx";
import ShinyText from "../../bits/shiny-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";
import Magnetic from "../../bits/magnetic.jsx";

const stats = [
  { icon: Users, value: "220+", label: "Students Enrolled" },
  { icon: GraduationCap, value: "22+", label: "Expert Faculty" },
  { icon: Building2, value: "10+", label: "Labs & Facilities" },
  { icon: Trophy, value: "96%", label: "Placement Assistance" },
  { icon: Briefcase, value: "20+", label: "Industry Tie-ups" },
  { icon: BookOpen, value: "100%", label: "Practical Learning" },
];

const aboutHighlights = [
  {
    icon: ShieldCheck,
    title: "Industry-Aligned Curriculum",
    description: "Modern syllabus aligned with infrastructure and smart-city demands.",
    image: "/images/overview/campus building.webp",
  },
  {
    icon: DraftingCompass,
    title: "Design & Planning",
    description: "Hands-on training in structural design and surveying workflows.",
    image: "/images/courses/civ-des-st.jpg",
  },
  {
    icon: Activity,
    title: "Field Exposure",
    description: "Site visits and practical learning with real construction contexts.",
    image: "/images/courses/civ-fld-st.jpg",
  },
  {
    icon: Users,
    title: "Mentored Growth",
    description: "Continuous guidance from experienced faculty and professionals.",
    image: "/images/courses/civ-ment-st.jpg",
  },
];

const programData = {
  btech: [
    {
      icon: Landmark,
      title: "Core Subjects",
      description: "Strong foundation in structural analysis, RCC, geotechnical and transportation engineering.",
    },
    {
      icon: Sparkles,
      title: "Specializations",
      description: "Focus areas include Construction Management, Environmental, and Smart Infrastructure.",
    },
    {
      icon: Microscope,
      title: "Practical Training",
      description: "CAD/BIM tools, material testing labs and project-based experiential learning.",
    },
    {
      icon: Globe,
      title: "Career Pathways",
      description: "Opportunities in construction firms, consulting, infrastructure and government sectors.",
    },
  ],
  diploma: [
    {
      icon: Ruler,
      title: "Technical Foundation",
      description: "Practical fundamentals of surveying, drafting and building construction.",
    },
    {
      icon: Layers,
      title: "Site Operations",
      description: "Real-world understanding of estimation, scheduling and execution workflows.",
    },
    {
      icon: HardHat,
      title: "Safety & Quality",
      description: "Training in construction safety protocols and quality control standards.",
    },
    {
      icon: Briefcase,
      title: "Job Readiness",
      description: "Skill-focused curriculum for faster entry into technician and site roles.",
    },
  ],
};

const highlights = [
  {
    image: "/images/courses/civ-des-st.jpg",
    title: "Structural Design Studios",
    description: "Design safe and efficient structures with modern engineering tools.",
  },
  {
    image: "/images/overview/learn-env-st.webp",
    title: "Surveying & Mapping",
    description: "Advanced survey instruments and digital terrain mapping workflows.",
  },
  {
    image: "/images/courses/civ-lab-st.webp",
    title: "Construction Labs",
    description: "Material testing, concrete technology and quality evaluation practices.",
  },
  {
    image: "/images/courses/civ-prj-st.webp",
    title: "Project Excellence",
    description: "Student-led civil projects addressing real infrastructure challenges.",
  },
];

export function CivilSection() {
  const [activeProgram, setActiveProgram] = useState("btech");

  return (
    <main className="bg-background overflow-hidden">
      <motion.section
        className="relative pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-20 lg:pb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-primary/8 via-background to-background" />
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
                <SplitText text="Civil" delay={0.08} className="block" />
                <SplitText text="Engineering" delay={0.12} className="text-primary" />
              </h1>
              <div className="mt-6 h-1.5 w-32 rounded-full bg-linear-to-r from-primary to-accent" />
              <p className="mt-8 max-w-xl text-xl text-muted-foreground leading-relaxed">
                <BlurText text="Designing resilient infrastructure and sustainable cities through engineering precision, practical experience and innovation." />
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                  <span>Home</span>
                  <span className="text-muted-foreground/40">/</span>
                  <span>Academics</span>
                  <span className="text-muted-foreground/40">/</span>
                  <span className="text-primary font-medium">Civil Engineering</span>
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
                src="/images/overview/learn-env-st.webp"
                alt="Civil Engineering"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
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
                  Engineering Foundations for <br />
                  <span className="text-primary">Sustainable Futures</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Civil Engineering at Satpuda blends structural science, practical site learning, and technology-led workflows. Students are prepared to design and deliver safe, efficient and future-ready infrastructure.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {aboutHighlights.map(({ icon: Icon, title, description, image }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors group"
                  >
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border/50 transition-transform group-hover:scale-105">
                      <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-white" />
                      </div>
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
              <img src="/images/courses/civil-cen-st.webp" alt="Civil Projects" className="w-full h-full object-cover" loading="lazy" />
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
                B.Tech in Civil Engineering
              </button>
              <button
                onClick={() => setActiveProgram("diploma")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeProgram === "diploma"
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                Diploma in Civil Engineering
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

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">Department Highlights</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-16 sm:text-5xl tracking-tight">Design. Build. Transform.</h2>

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
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
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

      
    </main>
  );
}

