"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Users,
  Wrench,
  Trophy,
  Briefcase,
  Cog,
  DraftingCompass,
  Gauge,
  Factory,
  ArrowRight,
  BookOpen,
  Microscope,
  Globe,
  Flame,
  ShieldCheck,
  Sparkles,
  Zap,
  Activity,
  Cpu,
  Star,
  FileText
} from "lucide-react";

import SplitText from "../../bits/split-text.jsx";
import BlurText from "../../bits/blur-text.jsx";
import ShinyText from "../../bits/shiny-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";
import Magnetic from "../../bits/magnetic.jsx";

const stats = [
  { icon: Users, value: "240+", label: "Students Enrolled" },
  { icon: GraduationCap, value: "24+", label: "Expert Faculty" },
  { icon: Wrench, value: "12+", label: "Labs & Workshops" },
  { icon: Trophy, value: "95%", label: "Placement Assistance" },
  { icon: Briefcase, value: "18+", label: "Industry Tie-ups" },
  { icon: BookOpen, value: "100%", label: "Hands-on Learning" },
];

const aboutHighlights = [
  {
    icon: ShieldCheck,
    title: "Industry-Ready Curriculum",
    description: "Program aligned with modern manufacturing, automation and design standards.",
    image: "/images/overview/campus overview.webp",
  },
  {
    icon: DraftingCompass,
    title: "Design & Analysis",
    description: "Practical training in machine design, drafting and engineering analysis.",
    image: "/images/overview/student in lab.webp",
  },
  {
    icon: Activity,
    title: "Workshop Immersion",
    description: "Extensive workshop and lab sessions for real engineering problem-solving.",
    image: "/images/courses/mech-shp-st.webp",
  },
  {
    icon: Users,
    title: "Mentored Development",
    description: "Guidance from experienced faculty for technical and career growth.",
    image: "/images/courses/mech-cad-st.jpg",
  },
];

const programData = {
  btech: [
    {
      icon: Cog,
      title: "Core Subjects",
      description: "Solid base in thermodynamics, fluid mechanics, machine design and manufacturing processes.",
    },
    {
      icon: Sparkles,
      title: "Specializations",
      description: "Explore areas like CAD/CAM, robotics, thermal systems and industrial engineering.",
    },
    {
      icon: Microscope,
      title: "Practical Training",
      description: "Hands-on work in CNC, simulation tools and product development projects.",
    },
    {
      icon: Globe,
      title: "Career Pathways",
      description: "Careers in automotive, aerospace, manufacturing, energy and core industries.",
    },
  ],
  diploma: [
    {
      icon: Gauge,
      title: "Technical Foundation",
      description: "Build core mechanical skills in machining, drafting and workshop practices.",
    },
    {
      icon: Factory,
      title: "Production Systems",
      description: "Understand shop-floor operations, quality checks and process planning.",
    },
    {
      icon: Flame,
      title: "Thermal & Utilities",
      description: "Fundamentals of heat engines, thermal systems and maintenance procedures.",
    },
    {
      icon: Briefcase,
      title: "Job Readiness",
      description: "Skill-focused learning for technician and supervisory roles in industry.",
    },
  ],
};

const highlights = [
  {
    image: "/images/courses/mech-shp-st.webp",
    title: "Advanced Workshops",
    description: "Precision machining, fitting and fabrication with modern equipment.",
  },
  {
    image: "/images/courses/mech-cad-st.jpg",
    title: "CAD/CAM Studios",
    description: "Digital design, modeling and manufacturing workflows for real-world applications.",
  },
  {
    image: "/images/courses/mech-therm-st.jpg",
    title: "Thermal Engineering Labs",
    description: "Practical understanding of engines, heat transfer and fluid systems.",
  },
  {
    image: "/images/overview/car-st.webp",
    title: "Innovation Projects",
    description: "Student-led mechanical builds focused on efficiency and performance.",
  },
];

const hodData = {
  isHod: true,
  name: "Mr. Tarun Biranwar",
  role: "HOD",
  subject: "BME Automobile Engg.",
  degree: "M.Tech",
  badgeTitle: "15+ Years of",
  badgeSubtitle: "Engineering Excellence",
  image: "/images/mechanical/tarun biranwar.png",

  titlePart1: "Engineering",
  titlePart2: "Solutions.",
  titlePart3: "Driving",
  titlePart4: "Progress.",
};

const facultyMembers = [
  {
    name: "Prof (Dr) Ashok Kumar Gupta",
    role: "Professor & Principal",
    subject: "Mechanical Engineering",
    degree: "M.Tech",
    image: "/images/mechanical/Ashok sir.png",
    badgeTitle: "Design",
    badgeSubtitle: "Expert",
    titlePart1: "Drafting",
    titlePart2: "Concepts.",
    titlePart3: "Building",
    titlePart4: "Realities.",
  },
  {
    name: "Mr. Shailesh Sahu",
    role: "Lecturer",
    subject: "Machine Design",
    degree: "B.Tech",
    image: "/images/mechanical/shailesh.png",
    badgeTitle: "Thermal",
    badgeSubtitle: "Professional",
    titlePart1: "Analyzing",
    titlePart2: "Heat.",
    titlePart3: "Maximizing",
    titlePart4: "Efficiency.",
  },
  {
    name: "Mr. Pankaj Bangre",
    role: "Assistant Professor",
    subject: "Thermal Engineering",
    degree: "M.Tech",
    image: "/images/mechanical/pankaj sir.png",
    badgeTitle: "Automation",
    badgeSubtitle: "Expert",
    titlePart1: "Programming",
    titlePart2: "Machines.",
    titlePart3: "Future",
    titlePart4: "Ready.",
  },
  {
    name: "Mr. Vedprakash Lilhare",
    role: "Lecturer",
    subject: "Engineering Drawing",
    degree: "B.Tech",
    image: "/images/mechanical/vedprakash.png",
    badgeTitle: "Automation",
    badgeSubtitle: "Expert",
    titlePart1: "Programming",
    titlePart2: "Machines.",
    titlePart3: "Future",
    titlePart4: "Ready.",
  },
  {
    name: "Mr. Nitin Harinkhede",
    role: "Lecturer",
    subject: "Manufacturing Engineering",
    degree: "B.Tech",
    image: "/images/mechanical/nitin sir.png",
    badgeTitle: "Automation",
    badgeSubtitle: "Expert",
    titlePart1: "Programming",
    titlePart2: "Machines.",
    titlePart3: "Future",
    titlePart4: "Ready.",
  },
  {
    name: "Miss Sakshee Kelkar",
    role: "Assistant Professor",
    subject: "Good Communicator",
    degree: "MA (English Literature)",
    image: "/images/mechanical/sakshi.png",
    badgeTitle: "Automation",
    badgeSubtitle: "Expert",
    titlePart1: "Programming",
    titlePart2: "Machines.",
    titlePart3: "Future",
    titlePart4: "Ready.",
  },
];

export function MechanicalSection() {
  const [activeProgram, setActiveProgram] = useState("btech");
  const [selectedFaculty, setSelectedFaculty] = useState(hodData);
  const [gridSlots, setGridSlots] = useState(facultyMembers);

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
                <SplitText text="Mechanical" delay={0.08} className="block" />
                <SplitText text="Engineering" delay={0.12} className="text-primary" />
              </h1>
              <div className="mt-6 h-1.5 w-32 rounded-full bg-linear-to-r from-primary to-accent" />
              <p className="mt-8 max-w-xl text-xl text-muted-foreground leading-relaxed">
                <BlurText text="Powering innovation through machine intelligence, design excellence and practical engineering mastery." />
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                  <span>Home</span>
                  <span className="text-muted-foreground/40">/</span>
                  <span>Academics</span>
                  <span className="text-muted-foreground/40">/</span>
                  <span className="text-primary font-medium">Mechanical Engineering</span>
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
                src="/images/overview/car-st.webp"
                alt="Mechanical Engineering"
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
                  Precision Engineering for <br />
                  <span className="text-primary">Industrial Tomorrow</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mechanical Engineering at Satpuda combines core engineering science with practical workshop training and digital design skills. Students develop the confidence to build efficient systems and products for modern industry.
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
                src="/images/courses/mech-cen-st.jpg"
                alt="Mechanical Projects"
                className="w-full h-full object-cover" loading="lazy" />
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
                B.Tech in Mechanical Engineering
              </button>
              <button
                onClick={() => setActiveProgram("diploma")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeProgram === "diploma"
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                Diploma in Mechanical Engineering
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
                    <span className="text-primary">Keep Us Moving</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl text-sm sm:text-base">
                    Our Mechanical Engineering faculty blend academic excellence with industry experience, mentoring students to become innovative design and manufacturing professionals.
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
                    className="absolute bottom-0 lg:bottom-[-4rem] right-0 lg:right-[-4rem] w-[75%] sm:w-[65%] lg:w-[70%] max-w-[550px] h-[320px] sm:h-[400px] lg:h-[550px] flex justify-end items-end pointer-events-none z-10"
                  >
                    <img src={selectedFaculty.image} alt={selectedFaculty.name} className="w-full h-full object-contain object-bottom mix-blend-darken drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] origin-bottom-right scale-[1.1] lg:scale-[1.2]" loading="lazy" />
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
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-16 sm:text-5xl tracking-tight">Design. Build. Optimize.</h2>

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

