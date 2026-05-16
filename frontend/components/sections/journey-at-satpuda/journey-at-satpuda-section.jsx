"use client";

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  ArrowRight,
  ArrowLeft,
  Code2,
  Brain,
  Lightbulb,
  Users,
  TrendingUp,
  Star,
  Award,
  Sparkles,
  Coffee,
  BookOpen,
  GraduationCap,
} from "lucide-react";

import ShinyText from "../../bits/shiny-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";
import Magnetic from "../../bits/magnetic.jsx";
import SplitText from "../../bits/split-text.jsx";
import BlurText from "../../bits/blur-text.jsx";
gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
function JourneyNavbar() {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/20 bg-background/80 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <h2 className="text-lg font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
          Your Journey
        </h2>
        <div className="w-12" />
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────
// NODE GRAPH
// ─────────────────────────────────────────────
function NodeGraph() {
  const svgRef = useRef(null);
  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });


  const nodes = [
    { id: 1, label: "Aspiration",       x: 50, y: 5,  icon: Sparkles },
    { id: 2, label: "Foundation",       x: 20, y: 30, icon: BookOpen },
    { id: 3, label: "Core Skills",      x: 80, y: 30, icon: Code2 },
    { id: 4, label: "Innovation Hub",    x: 50, y: 50, icon: Lightbulb },
    { id: 5, label: "Collaboration",     x: 20, y: 70, icon: Users },
    { id: 6, label: "Tech Mastery",     x: 80, y: 70, icon: Brain },
    { id: 7, label: "Industry Success", x: 50, y: 95, icon: Award },

  ];

  const connections = [
    [1, 2], [1, 3],
    [2, 4], [3, 4],
    [4, 5], [4, 6],
    [5, 7], [6, 7]
  ];

  // Helper to generate curved path between two points
  const getCurvedPath = (from, to) => {
    const dy = to.y - from.y;
    // Vertical S-Curve flow
    const cp1y = from.y + dy * 0.5;
    const cp2y = to.y - dy * 0.5;
    return `M ${from.x} ${from.y} C ${from.x} ${cp1y}, ${to.x} ${cp2y}, ${to.x} ${to.y}`;
  };



  useEffect(() => {
    if (!svgRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: svgRef.current,
        start: "top 80%",
        once: true,
        onEnter() {
          const svg = svgRef.current;
          if (!svg) return;

          svg.querySelectorAll("path[data-base-path]").forEach((path, i) => {
            const len = path.getTotalLength();
            gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
            gsap.to(path, {
              strokeDashoffset: 0,
              duration: 2.5,
              delay: 0.5 + (i * 0.1),
              ease: "power4.out",
            });
          });

        },
      });
    }, svgRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });
      }}
      className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-24"
    >
      {/* Interactive Mouse Follower Glow */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)`
        }}
      />

      {/* Background Animated Glows */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Technical Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '200px 200px'
        }}
      />


      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-bold mb-6 tracking-tighter"
          >
            From Student to <span className="text-primary">Professional</span>
          </motion.h2>
          <BlurText
            text="A cinematic transformation powered by excellence, innovation, and global industry standards."
            className="text-muted-foreground text-xl max-w-2xl mx-auto"
            delay={0.04}
          />
        </div>

        <motion.div 
          style={{
            x: (mousePos.x - 50) * 0.2,
            y: (mousePos.y - 50) * 0.2,
          }}
          className="relative aspect-square max-w-2xl mx-auto"
        >

          {/* SVG Connections with Glow and Flow */}
          <svg ref={svgRef} viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <defs>
              <linearGradient id="journey-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="rgb(59,130,246)"  stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(168,85,247)"  stopOpacity="0.4" />
              </linearGradient>
              <filter id="glow-heavy">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {connections.map(([a, b]) => {
              const from = nodes.find(n => n.id === a);
              const to   = nodes.find(n => n.id === b);
              const path = getCurvedPath(from, to);
              const isConnectedToHovered = hoveredNodeId === a || hoveredNodeId === b;
              
              return (
                <g key={`${a}-${b}`} className="transition-opacity duration-500">
                  {/* Base Path */}
                  <path
                    d={path}
                    data-base-path
                    stroke="url(#journey-line-grad)"
                    strokeWidth={isConnectedToHovered ? "0.6" : "0.3"}
                    fill="none"
                    className={`transition-all duration-500 ${isConnectedToHovered ? "opacity-100" : "opacity-20"}`}
                  />


                  {/* Animated Flow Line */}
                  <path
                    d={path}
                    stroke="rgb(59,130,246)"
                    strokeWidth="0.4"
                    fill="none"
                    strokeDasharray="1, 10"
                    strokeDashoffset="0"
                    className={isConnectedToHovered ? "opacity-100" : "opacity-40"}
                  >

                    <animate
                      attributeName="stroke-dashoffset"
                      from="11"
                      to="0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </path>
                  {/* Glowing Pulse Path (Active on Hover) */}
                  <path
                    d={path}
                    stroke="rgb(168,85,247)"
                    strokeWidth="0.8"
                    fill="none"
                    strokeDasharray="4, 100"
                    strokeDashoffset="0"
                    className={`transition-opacity blur-[2px] ${isConnectedToHovered ? "opacity-100" : "opacity-0"}`}
                  >

                     <animate
                      attributeName="stroke-dashoffset"
                      from="104"
                      to="0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              );
            })}
          </svg>


          {/* Interactive Nodes */}
          {nodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.3 + (i * 0.08) 
                }}
                style={{
                  position: 'absolute',
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className="group z-20"
              >
                <Magnetic intensity={0.2}>
                  <div 
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    className="relative cursor-pointer"
                  >

                    {/* Pulsing Aura */}
                    <div className="absolute inset-0 -m-8 pointer-events-none">
                       <motion.div 
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-full bg-primary/20 rounded-full blur-2xl"
                      />
                    </div>

                    {/* Outer Ring */}
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 -m-3 border border-dashed border-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" 
                    />
                    
                    {/* Node Circle - Premium Glassmorphism */}
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-background/40 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center group-hover:scale-110 group-hover:border-primary transition-all duration-500 overflow-hidden group">
                      <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 opacity-40 group-hover:opacity-100 transition-opacity" />
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-500 relative z-10" />
                      
                      {/* Internal Glare */}
                      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    {/* Label with Glassmorphic Tooltip style */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 pointer-events-none">
                      <div className="px-5 py-2.5 rounded-2xl bg-background/90 backdrop-blur-2xl border border-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <motion.div
                          className="text-xs md:text-sm font-black tracking-[0.2em] uppercase text-primary"
                        >
                           <BlurText text={node.label} delay={0.02} />
                        </motion.div>
                      </div>
                      {/* Triangle Arrow */}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-background/90 border-l border-t border-primary/20 rotate-45" />
                    </div>


                    {/* Static Label (Visible by default, but subtle) */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 whitespace-nowrap group-hover:opacity-0 transition-opacity duration-300">
                      <span className="text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase opacity-40">
                        {node.label}
                      </span>
                    </div>
                  </div>
                </Magnetic>
              </motion.div>
            );
          })}

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Every node represents transformation. Scroll to explore.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// HORIZONTAL SCROLL CARDS
// ─────────────────────────────────────────────
const CARDS = [
  { title: "Technical Expertise",  we: "Industry-Standard Curriculum", you: "Advanced Programming Skills", icon: Code2,      color: "from-blue-500/20 to-blue-600/20"   },
  { title: "Critical Thinking",    we: "Problem-Based Learning",       you: "Analytical Mindset",          icon: Brain,      color: "from-purple-500/20 to-purple-600/20" },
  { title: "Innovation",           we: "State-of-the-Art Labs",        you: "Creative Solutions",           icon: Lightbulb,  color: "from-yellow-500/20 to-orange-600/20" },
  { title: "Collaboration",        we: "Team Projects & Events",       you: "Leadership Abilities",         icon: Users,      color: "from-pink-500/20 to-rose-600/20"    },
  { title: "Industry Ready",       we: "Internship & Mentoring",       you: "Professional Network",         icon: TrendingUp, color: "from-green-500/20 to-emerald-600/20" },
];

function HorizontalScrollCards() {
  const trackRef   = useRef(null);
  const sectionRef = useRef(null);
  const progressBarRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const track   = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const ctx = gsap.context(() => {
      const getTravelDist = () => -(track.scrollWidth - window.innerWidth);

      // Horizontal Scroll
      const scrollAnim = gsap.to(track, {
        x: getTravelDist,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.2,
          start: "top top",
          end: () => `+=${Math.abs(getTravelDist())}`,
          invalidateOnRefresh: true,
          onUpdate(self) {
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      // Individual Card Cinematic Animations (Theatre-style but via GSAP)
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card, 
          { 
            y: 50, 
            rotateZ: -5, 
            scale: 0.9, 
            opacity: 0.5,
            filter: "brightness(0.5) blur(10px)"
          },
          {
            y: 0,
            rotateZ: 0,
            scale: 1,
            opacity: 1,
            filter: "brightness(1) blur(0px)",
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollAnim, // Connect to horizontal scroll
              start: "left 80%",
              end: "left 20%",
              scrub: true,
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] border-[1px] border-primary/5 rounded-full"
        />
      </div>

      {/* Section header */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-16 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-4 tracking-tight">
            What We Provide <span className="text-primary italic">vs</span> What You Gain
          </h2>
          <p className="text-muted-foreground text-xl">Cinematic exploration of your future</p>
        </motion.div>
      </div>

      {/* Card track */}
      <div
        ref={trackRef}
        className="absolute top-1/2 -translate-y-1/2 flex gap-12 px-[20vw]"
        style={{ width: "fit-content", willChange: "transform" }}
      >
        {CARDS.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div 
              key={idx} 
              ref={el => cardRefs.current[idx] = el}
              className="flex-shrink-0 w-[24rem] h-[32rem]"
            >
              <Magnetic intensity={0.2}>
                    <SpotlightCard
                      className={`overflow-hidden rounded-[2.5rem] border border-border/40 bg-linear-to-br ${card.color} backdrop-blur-2xl p-10 h-full transition-all duration-700 hover:border-primary/60 hover:shadow-[0_0_50px_rgba(59,130,246,0.1)] group`}
                    >
                      {/* Floating Particles in Card */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              y: [-20, 20, -20],
                              x: [-10, 10, -10],
                              opacity: [0.2, 0.5, 0.2]
                            }}
                            transition={{ duration: 3 + i, repeat: Infinity }}
                            className="absolute w-2 h-2 bg-primary/20 rounded-full blur-xs"
                            style={{ 
                              top: `${20 + i * 25}%`, 
                              left: `${20 + i * 30}%` 
                            }}
                          />
                        ))}
                      </div>

                      <div className="relative z-10 h-full flex flex-col">
                        <div className="mb-8 w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/30 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>

                        <h3 className="text-3xl font-bold mb-8 leading-tight">{card.title}</h3>

                        <div className="space-y-8 flex-grow">
                          <div className="group/item">
                            <p className="text-xs text-muted-foreground mb-2 font-bold uppercase tracking-widest opacity-60">We Provide</p>
                            <p className="text-xl font-medium text-foreground group-hover/item:text-primary transition-colors">{card.we}</p>
                          </div>
                          <div className="w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
                          <div className="group/item">
                            <p className="text-xs text-muted-foreground mb-2 font-bold uppercase tracking-widest opacity-60">You Gain</p>
                            <p className="text-xl font-bold text-primary group-hover/item:scale-105 origin-left transition-transform inline-block">{card.you}</p>
                          </div>
                        </div>

                        <div className="mt-8 flex items-center gap-3 text-primary font-bold tracking-tighter transition-all duration-500 group-hover:gap-4">
                          <Sparkles className="w-5 h-5 animate-pulse" />
                          <span className="text-sm uppercase italic">Evolution Track</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                        </div>
                      </div>
                    </SpotlightCard>
              </Magnetic>
            </div>
          );
        })}
      </div>

      {/* Cinematic Progress Bar */}
      <div className="absolute bottom-12 left-12 right-12 flex flex-col items-center gap-4 pointer-events-none">
        <div className="w-full max-w-md h-[2px] bg-border/20 rounded-full overflow-hidden backdrop-blur-sm">
          <div
            ref={progressBarRef}
            className="h-full bg-linear-to-r from-primary via-accent to-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            style={{ width: "0%", transition: "none" }}
          />
        </div>
        <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/40">
          <span>01 Start</span>
          <div className="w-12 h-px bg-border/20" />
          <span className="text-primary/60">Exploring Journey</span>
          <div className="w-12 h-px bg-border/20" />
          <span>05 Finish</span>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// COLLEGE LIFE STORYTELLING
// ─────────────────────────────────────────────
const STORY_CHAPTERS = [
  {
    id: "first-step",
    title: "The First Step",
    description: "Walking through the gates with a bag full of dreams and a heart full of curiosity. The journey of a thousand miles begins with a single classroom.",
    image: "/story/first-day.png",
    icon: BookOpen,
    accent: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "deep-dive",
    title: "The Deep Dive",
    description: "Midnight oil and neon screens. Mastering the complex algorithms and turning blue errors into green successes. Here, passion meets precision.",
    image: "/story/coding.png",
    icon: Coffee,
    accent: "from-purple-500/20 to-indigo-500/20"
  },
  {
    id: "beyond-books",
    title: "Beyond Books",
    description: "Lifelong friendships forged over project discussions and canteen tea. Learning that collaboration is just as important as calculation.",
    image: "/story/friendship.png",
    icon: Users,
    accent: "from-orange-500/20 to-[#d60b0b]/20"
  },
  {
    id: "the-launch",
    title: "The Professional Launch",
    description: "From a student to a visionary. Throwing the cap high, ready to solve global challenges with the knowledge and spirit gained here.",
    image: "/story/graduation.png",
    icon: GraduationCap,
    accent: "from-emerald-500/20 to-teal-500/20"
  }
];

function CollegeLifeStory() {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Background Story Track */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <BlurText 
            text="The Student Chronicles"
            className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4"
          />
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter">
            Every Pixel Tells a <span className="text-primary">Story</span>
          </h2>
        </div>

        <div className="space-y-40">
          {STORY_CHAPTERS.map((chapter, idx) => {
            const Icon = chapter.icon;
            const isEven = idx % 2 === 0;

            return (
              <div key={chapter.id} className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Visual Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`${isEven ? "lg:order-1" : "lg:order-2"} relative group`}
                >
                  <div className={`relative aspect-4/3 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]`}>
                    <img 
                      src={chapter.image} 
                      alt={chapter.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
                    
                    {/* Floating Info Badge */}
                    <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-bold text-sm tracking-widest uppercase">Chapter 0{idx + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Glow */}
                  <div className={`absolute -inset-4 bg-linear-to-br ${chapter.accent} blur-3xl opacity-30 -z-10 group-hover:opacity-50 transition-opacity`} />
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`${isEven ? "lg:order-2 lg:pl-12" : "lg:order-1 lg:pr-12"} text-left`}
                >
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest text-primary/80">Memory Lane</span>
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight">
                    {chapter.title}
                  </h3>
                  
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                    {chapter.description}
                  </p>

                  <button className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                    <span className="w-12 h-px bg-white/20 group-hover:bg-primary transition-colors" />
                    Read Full Story
                  </button>
                </motion.div>

                {/* Center Node Dot (Desktop Only) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1], opacity: [0, 1] }}
                    viewport={{ once: true }}
                    className="w-4 h-4 rounded-full bg-background border-4 border-primary shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// OUTCOMES SECTION
// ─────────────────────────────────────────────
const OUTCOMES = [
  { metric: "95%",  label: "Placement Rate",    description: "Graduates placed in top companies within 6 months", icon: TrendingUp },
  { metric: "4.2x", label: "Salary Growth",     description: "Career progression from entry to mid-level",        icon: Award      },
  { metric: "500+", label: "Industry Partners", description: "Connected with leading companies",                   icon: Users      },
  { metric: "10k+", label: "Alumni Network",    description: "Successful professionals community",                 icon: Star       },
];

const SKILLS = [
  "Full-Stack Development",
  "System Design",
  "Cloud Computing",
  "AI/ML Fundamentals",
  "DevOps & Deployment",
  "Team Leadership",
];

function OutcomesSection() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center bg-gradient-to-t from-background via-background/95 to-background/90 overflow-hidden py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What Our Students <span className="text-primary">Develop</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real outcomes from real education
          </p>
        </motion.div>

        {/* Outcome cards — CSS-only hover, no useState */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {OUTCOMES.map((outcome, idx) => {
            const Icon = outcome.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <Magnetic intensity={0.1}>
                  <SpotlightCard className="group relative overflow-hidden rounded-[2.5rem] border border-border/40 bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl p-10 h-full transition-all duration-500 hover:-translate-y-3 hover:border-primary/40 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-primary group-hover:text-white">
                        <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-grow">
                        <div className="text-4xl font-black text-primary mb-2 tracking-tighter">
                          <ShinyText text={outcome.metric} speed={3} color="rgba(214, 11, 11, 0.9)" />
                        </div>
                        <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{outcome.label}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">{outcome.description}</p>
                    
                    {/* Decorative bottom line */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-700" />
                  </SpotlightCard>
                </Magnetic>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Tag Cloud — No Cards, Awwwards Style */}
        <div className="max-w-4xl mx-auto mt-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold tracking-[0.2em] uppercase text-primary/60 mb-2">Technical Arsenal</h3>
            <p className="text-sm text-muted-foreground uppercase tracking-widest">Hover to interact with your future toolkit</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {SKILLS.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.05,
                  type: "spring",
                  stiffness: 100 
                }}
              >
                <Magnetic intensity={0.2}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative px-8 py-4 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-xl group cursor-none overflow-hidden"
                  >
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating Glow Point */}
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-700 group-hover:translate-x-1/2 group-hover:translate-y-1/2" />

                    <div className="relative z-10 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
                      <span className="font-bold text-base lg:text-lg tracking-tight text-foreground/80 group-hover:text-primary transition-colors">
                        {skill}
                      </span>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500" />
                  </motion.div>
                </Magnetic>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-20 text-center"
        >
          <Magnetic>
            <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-linear-to-r from-primary to-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </button>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────
export function JourneyAtSatpudaSection() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <main className="bg-background">
      <JourneyNavbar />
      <NodeGraph />
      <HorizontalScrollCards />
      <CollegeLifeStory />
      <OutcomesSection />
    </main>
  );
}

