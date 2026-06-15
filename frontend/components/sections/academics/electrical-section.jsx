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
  Star,
  FileText
} from "lucide-react";

import SplitText from "../../bits/split-text.jsx";
import BlurText from "../../bits/blur-text.jsx";
import ShinyText from "../../bits/shiny-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";
import Magnetic from "../../bits/magnetic.jsx";

const stats = [
  { icon: Users, value: "570+", label: "Students Enrolled" },
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
    image: "/images/overview/campus view.webp",
  },
  {
    icon: CircuitBoard,
    title: "Circuit & System Design",
    description: "Strong practical training in circuit analysis, control and embedded systems.",
    image: "/images/courses/elec-cir-st.webp",
  },
  {
    icon: Activity,
    title: "Lab-Centered Learning",
    description: "Hands-on exposure through machines, measurements and power labs.",
    image: "/images/courses/elec-lab-st.webp",
  },
  {
    icon: Users,
    title: "Mentored Growth",
    description: "Continuous guidance from faculty for technical and professional development.",
    image: "/images/courses/elec-cen-st.webp",
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
    image: "/images/courses/elec-lab-st.webp",
    title: "Power System Labs",
    description: "Analyze generation, transmission and distribution systems through practical setups.",
  },
  {
    image: "/images/courses/elec-auto-st.webp",
    title: "Automation Studios",
    description: "PLC, control panels and industrial automation workflows for modern plants.",
  },
  {
    image: "/images/courses/elec-cir-st.webp",
    title: "Machine Labs",
    description: "Hands-on experience with AC/DC machines, drives and performance testing.",
  },
  {
    image: "/images/courses/elec-ren-st.webp",
    title: "Renewable Projects",
    description: "Student-led projects in solar integration and energy-efficient solutions.",
  },
];

const facultyMembers = [
  {
    name: "Mr. Naveen Kumar Shrivastava",
    role: "Associate Professor",
    subject: "Electrical Machines",
    degree: "M.Tech,MBA",
    image: "/images/electrical/naveen sir.webp",
    badgeTitle: "Electrical",
    badgeSubtitle: "Machines",
    titlePart1: "Driving",
    titlePart2: "Machines.",
    titlePart3: "Mastering",
    titlePart4: "Power.",
  },
    {
    name: "Dr. Gorakhnath Bhure ",
    role: "CEO jobsahi,Training and placement officer ",
    subject: "Electrical Machines",
    degree: "Ph.D in Electronics",
    image: "/images/electrical/gorakh-bhure-ele.webp",
    badgeTitle: "Electrical",
    badgeSubtitle: "Machines",
    titlePart1: "Powering",
    titlePart2: "Machines.",
    titlePart3: "Mastering",
    titlePart4: "Energy.",
  },
  {
    name: "Mr. Ajay Baghele",
    role: "Lecturer",
    subject: "Renewable Energy",
    degree: "B.Tech",
    image: "/images/electrical/ajay baghele.webp",
    badgeTitle: "Renewable",
    badgeSubtitle: "Energy",
    titlePart1: "Harnessing",
    titlePart2: "Nature.",
    titlePart3: "Sustainable",
    titlePart4: "Power.",
  },
  {
    name: "Mr. Prashant Kamde",
    role: "Lecturer",
    subject: "Electrical Engineering",
    degree: "B.Tech",
    image: "/images/electrical/prashant.webp",
    badgeTitle: "Electrical",
    badgeSubtitle: "Engineering",
    titlePart1: "Powering",
    titlePart2: "Systems.",
    titlePart3: "Driving",
    titlePart4: "Innovation.",
  },
  {
    name: "Mr. Nishant Tathagatam",
    role: "Lecturer",
    subject: "Electrical Engineering",
    degree: "B.Tech",
    image: "/images/electrical/nishant.webp",
    badgeTitle: "Electrical",
    badgeSubtitle: "Engineering",
    titlePart1: "Powering",
    titlePart2: "Systems.",
    titlePart3: "Energizing",
    titlePart4: "Future.",
  },
  {
    name: "Mr. Pradeep Sharnagat",
    role: "Lecturer",
    subject: "Electrical Engineering",
    degree: "B.Tech",
    image: "/images/electrical/pradeep.webp",
    badgeTitle: "Electrical",
    badgeSubtitle: "Engineering",
    titlePart1: "Powering",
    titlePart2: "Systems.",
    titlePart3: "Driving",
    titlePart4: "Progress.",
  },
  {
    name: "Mr. Jitendra Kumar",
    role: "Lecturer",
    subject: "Machine & Electric Circuits",
    degree: "Diploma",
    image: "/images/electrical/jitendra.webp",
    badgeTitle: "Machine &",
    badgeSubtitle: "Circuits",
    titlePart1: "Building",
    titlePart2: "Circuits.",
    titlePart3: "Driving",
    titlePart4: "Machines.",
  },
  {
    name: "Mrs. Pratyanchaa Bisen",
    role: "Assistant Professor",
    subject: "Electronics",
    degree: "M.Tech",
    image: "/images/electrical/pratyancha-elec.webp",
    badgeTitle: "Electronics",
    badgeSubtitle: "Expert",
    titlePart1: "Designing",
    titlePart2: "Circuits.",
    titlePart3: "Crafting",
    titlePart4: "Electronics.",
  },
  {
    name: "Mrs Damini Nageshwar",
    role: "Assistant Professor",
    subject: "Power System",
    degree: "M.Tech",
    image: "/images/electrical/damini mam.webp",
    badgeTitle: "Power",
    badgeSubtitle: "System",
    titlePart1: "Managing",
    titlePart2: "Grids.",
    titlePart3: "Delivering",
    titlePart4: "Power.",
  },
  {
    name: "Miss Sakshi Choudhary",
    role: "Lecturer",
    subject: "Electrical Engineering",
    degree: "MBA",
    image: "/images/electrical/sakshi.webp",
    badgeTitle: "Electrical",
    badgeSubtitle: "Engineering",
    titlePart1: "Powering",
    titlePart2: "Systems.",
    titlePart3: "Driving",
    titlePart4: "Innovation.",
  },
  {
    name: "Mrs. Jhamiya mervi",
    role: "Assistant Professor",
    subject: "Power Electronics",
    degree: "M.Tech",
    image: "/images/electrical/jhamiya-ele1.webp",
    badgeTitle: "Power",
    badgeSubtitle: "Electronics",
    titlePart1: "Converting",
    titlePart2: "Power.",
    titlePart3: "Controlling",
    titlePart4: "Energy.",
  },
  {
    name: "Mrs. Sarika Tarware",
    role: "Assistant Professor",
    subject: "Energy And Environment",
    degree: "M.Tech",
    image: "/images/electrical/sarika mam.webp",
    badgeTitle: "Energy &",
    badgeSubtitle: "Environment",
    titlePart1: "Conserving",
    titlePart2: "Energy.",
    titlePart3: "Protecting",
    titlePart4: "Environment.",
  },
];

export function ElectricalSection() {
  const [activeProgram, setActiveProgram] = useState("btech");
  const [selectedFaculty, setSelectedFaculty] = useState(facultyMembers[0]);
  const [gridSlots, setGridSlots] = useState(facultyMembers.slice(1));

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
          <div className="absolute top-0 right-0 w-130 h-130 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
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
              <div className="mt-6 h-1.5 w-32 rounded-full bg-linear-to-r from-primary to-accent" />
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
                src="/images/courses/elect-hero-st.webp"
                alt="Electrical Engineering"
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
                  Electrical Excellence for <br />
                  <span className="text-primary">Smart Energy Futures</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Electrical Engineering at Satpuda integrates power systems, automation and electronics with practical lab exposure. Students are trained to solve real-world industrial and energy challenges with confidence.
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
              <img
                src="/images/courses/elec-cen-st.webp"
                alt="Electrical Projects"
                className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent" />
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
                  <SpotlightCard className="h-full group p-8 rounded-4xl border-border/50 bg-card/50 text-left hover:border-primary/50 transition-all cursor-default">
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

      {/* Faculty Section */}
      <section className="py-24 relative bg-background overflow-hidden">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] sm:rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch relative z-10">
              {/* Left Column (Cards) */}
              <div className="contents lg:flex lg:flex-col lg:justify-between lg:col-span-7 space-y-10 lg:space-y-0">
                <div className="order-1 lg:order-none space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-primary">
                    <span className="text-sm font-bold uppercase tracking-widest">Our Faculty</span>
                    <div className="h-px w-8 bg-primary" />
                    <div className="h-1 w-1 rounded-full bg-primary" />
                    <div className="h-px w-4 bg-primary" />
                  </div>
                  <h2 className="text-4xl font-bold text-foreground sm:text-5xl leading-tight tracking-tight">
                    The Experts That <br />
                    <span className="text-primary">Power Our World</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl text-sm sm:text-base">
                    Our Electrical Engineering faculty blend academic excellence with extensive industry experience, mentoring students to become innovative and efficient electrical professionals.
                  </p>
                </div>

                <div className="order-3 lg:order-none flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory w-full">
                  {gridSlots.map((faculty, i) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                      key={faculty.name} 
                      onClick={() => {
                        const newSelected = faculty;
                        const newSlots = [...gridSlots];
                        newSlots[i] = selectedFaculty;
                        setSelectedFaculty(newSelected);
                        setGridSlots(newSlots);
                      }}
                      className="flex-shrink-0 snap-start w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.75rem)] md:w-[calc(25%-1.125rem)] cursor-pointer rounded-2xl p-4 shadow-sm border flex flex-col h-full transition-all duration-300 group bg-card border-border/50 hover:shadow-md hover:border-primary/30 hover:bg-secondary/10"
                    >
                      <div className="relative mb-4 bg-secondary/30 rounded-xl overflow-hidden aspect-square">
                        <img 
                          src={faculty.image} 
                          alt={faculty.name} 
                          className="w-full h-full object-cover object-top transition-transform group-hover:scale-105 duration-500" loading="lazy" />
                        <div className="absolute top-2 right-2 h-7 w-7 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <Users className="h-3.5 w-3.5 text-primary" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xs sm:text-sm text-foreground leading-tight mb-1">{faculty.name}</h3>
                      <p className="text-[10px] sm:text-xs text-primary font-medium mb-3">{faculty.role}</p>
                      <div className="h-px w-8 bg-primary/30 mb-4" />
                      <div className="space-y-2 flex-grow">
                        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground">
                          <FileText className="h-3 w-3 shrink-0" />
                          <span className="truncate">{faculty.subject}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground">
                          <GraduationCap className="h-3 w-3 shrink-0" />
                          <span className="truncate">{faculty.degree}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>

              {/* Right Column (HOD) */}
              <div className="order-2 lg:order-none lg:col-span-5 relative flex items-center min-h-[350px] lg:min-h-[600px] mt-4 lg:mt-0 w-full max-w-full">
                {/* Large Theme Shape spanning right */}
                <div className="absolute inset-y-0 lg:inset-y-[-4rem] right-0 lg:right-[-4rem] left-0 lg:left-[-2rem] bg-primary/5 rounded-[2rem] lg:rounded-[3rem] lg:rounded-l-[6rem] lg:rounded-r-none -z-10" />
                
                {/* Decorative dots pattern */}
                <div className="absolute top-8 right-0 bottom-8 w-32 bg-[radial-gradient(currentColor_2px,transparent_2px)] text-primary/20 [background-size:16px_16px] opacity-30 -z-10" />

                <AnimatePresence mode="wait">
                  <motion.div 
                    key={selectedFaculty.name + "-text"}
                    initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative z-20 w-[60%] sm:w-[50%] lg:w-[45%] flex flex-col justify-center h-full pl-4 lg:pl-8 py-8 lg:py-12 pr-2 lg:pr-8"
                  >
                    {/* HOD Text Content */}
                    <div className="mb-4 lg:mb-6 min-h-[28px]">
                      {selectedFaculty.isHod && (
                        <span className="inline-flex items-center gap-1.5 lg:gap-2 px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-full bg-primary/10 text-primary text-[9px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                          <Users className="h-2.5 w-2.5 lg:h-3 lg:w-3" />
                          Head of Department
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg sm:text-xl lg:text-4xl font-bold leading-tight mb-2 lg:mb-4 text-foreground">
                      {selectedFaculty.titlePart1} <br className="hidden lg:block"/>
                      <span className="text-primary">{selectedFaculty.titlePart2}</span> <br className="hidden lg:block"/>
                      {selectedFaculty.titlePart3} <br className="hidden lg:block"/>
                      <span className="text-primary">{selectedFaculty.titlePart4}</span>
                    </h3>
                    
                    <div className="flex gap-1 mb-8">
                      <div className="h-1 w-8 bg-primary rounded-full" />
                      <div className="h-1 w-2 bg-primary/60 rounded-full" />
                    </div>
                    
                    <h4 className="text-base lg:text-xl sm:text-2xl font-bold text-foreground">{selectedFaculty.name}</h4>
                    <p className="text-xs lg:text-sm font-bold text-primary mb-4 lg:mb-6">{selectedFaculty.role}</p>
                    
                    <div className="flex items-start gap-2 lg:gap-3 bg-card/80 backdrop-blur-md p-2 lg:p-4 rounded-xl border border-border/40 w-[120%] lg:w-max relative z-20 shadow-sm mt-auto lg:mt-0">
                      <div className="mt-0.5 lg:mt-1 shrink-0">
                        <div className="h-4 w-4 lg:h-6 lg:w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <Star className="h-2 w-2 lg:h-3 lg:w-3 fill-primary text-primary" />
                        </div>
                      </div>
                      <div>
                        <p className="text-[9px] lg:text-xs font-bold text-foreground leading-tight">{selectedFaculty.badgeTitle} <br className="hidden lg:block"/> <span className="lg:hidden"> </span> {selectedFaculty.badgeSubtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* HOD Image positioned perfectly on the right, larger scale */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={selectedFaculty.name + "-image"}
                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute bottom-0 lg:bottom-[-4rem] right-0 lg:right-[-4rem] w-[65%] sm:w-[55%] lg:w-[70%] max-w-[550px] pointer-events-none z-10"
                  >
                    <img src={selectedFaculty.image} alt={selectedFaculty.name} className="w-full h-auto object-contain object-bottom mix-blend-darken drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] origin-bottom-right scale-[1.1] lg:scale-[1.15]" loading="lazy" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-24 pb-8 lg:pb-10">
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

