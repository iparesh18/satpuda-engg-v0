"use client";

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
} from "lucide-react";

import ShinyText from "../../bits/shiny-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";
import Magnetic from "../../bits/magnetic.jsx";

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

  const nodes = [
    { id: 1, label: "Student",       x: 50, y: 20 },
    { id: 2, label: "Learning",      x: 20, y: 50 },
    { id: 3, label: "Innovation",    x: 50, y: 50 },
    { id: 4, label: "Collaboration", x: 80, y: 50 },
    { id: 5, label: "Success",       x: 50, y: 80 },
  ];

  const connections = [[1,2],[1,3],[1,4],[2,5],[3,5],[4,5]];

  useEffect(() => {
    if (!svgRef.current) return;

    // gsap.context scopes all tweens/ScrollTriggers so cleanup is reliable
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: svgRef.current,
        start: "top 80%",
        once: true,
        onEnter() {
          const svg = svgRef.current;
          if (!svg) return;

          // Lines — draw-on effect
          svg.querySelectorAll("line[data-anim]").forEach((line, i) => {
            const len = line.getTotalLength();
            gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
            gsap.to(line, {
              strokeDashoffset: 0,
              duration: 1.4,
              delay: i * 0.14,
              ease: "power2.inOut",
            });
          });

          // Circles — pop in
          svg.querySelectorAll("circle[data-node]").forEach((c, i) => {
            gsap.fromTo(
              c,
              { attr: { r: 0 }, opacity: 0 },
              { attr: { r: 2.5 }, opacity: 0.85, duration: 0.45,
                delay: i * 0.14 + 0.3, ease: "back.out(1.7)" }
            );
          });
        },
      });
    }, svgRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center bg-gradient-to-b from-background via-background/95 to-background/90 overflow-hidden pt-24">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden>
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="journey-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#journey-grid)" />
        </svg>
      </div>

      <div className="relative w-full max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            From Student to <span className="text-primary">Professional</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A transformation powered by excellence and innovation
          </p>
        </motion.div>

        {/* Plain div — stable dimensions so getTotalLength() works correctly */}
        <div className="relative aspect-square max-w-xl mx-auto">
          <svg ref={svgRef} viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="journey-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="rgb(59,130,246)"  stopOpacity="0.35" />
                <stop offset="100%" stopColor="rgb(168,85,247)"  stopOpacity="0.35" />
              </linearGradient>
            </defs>

            {connections.map(([a, b]) => {
              const from = nodes.find(n => n.id === a);
              const to   = nodes.find(n => n.id === b);
              return (
                <line
                  key={`${a}-${b}`}
                  data-anim
                  x1={from.x} y1={from.y}
                  x2={to.x}   y2={to.y}
                  stroke="url(#journey-line-grad)"
                  strokeWidth="0.8"
                />
              );
            })}

            {nodes.map(node => (
              <g key={node.id}>
                {/* Static halo */}
                <circle cx={node.x} cy={node.y} r={6} fill="rgb(59,130,246)" opacity="0.08" />
                {/* GSAP-animated dot — starts at r=0 */}
                <circle data-node cx={node.x} cy={node.y} r="0" fill="rgb(59,130,246)" opacity="0" />
                <text
                  x={node.x} y={node.y + 9}
                  textAnchor="middle"
                  fontSize="3.5"
                  fill="currentColor"
                  opacity="0.55"
                  className="pointer-events-none select-none"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto"
        >
          Every node represents transformation. Scroll to explore what we provide and what you gain.
        </motion.p>
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
  // Progress bar is updated via DOM ref — NO React state → no re-renders during scroll
  const progressBarRef = useRef(null);

  useEffect(() => {
    const track   = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const ctx = gsap.context(() => {
      const getTravelDist = () => -(track.scrollWidth - window.innerWidth);

      gsap.to(track, {
        x: getTravelDist,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${Math.abs(getTravelDist())}`,
          invalidateOnRefresh: true,
          onUpdate(self) {
            // Direct DOM mutation — zero React overhead
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-background/90 to-background overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Section header */}
      <div className="absolute top-0 left-0 right-0 z-10 pt-16 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-2">
            What We Provide <span className="text-primary">vs</span> What You Gain
          </h2>
          <p className="text-muted-foreground text-lg">Scroll to explore the transformation</p>
        </motion.div>
      </div>

      {/* Card track — plain div, GSAP owns the x-transform */}
      <div
        ref={trackRef}
        className="absolute top-1/2 -translate-y-1/2 flex gap-6 px-12"
        style={{ width: "fit-content", willChange: "transform" }}
      >
        {CARDS.map((card, idx) => {
          const Icon = card.icon;
          return (
            // No whileInView here — cards are inside a GSAP-moved container;
            // viewport intersection is unreliable. Simple opacity via CSS group.
            <div key={idx} className="flex-shrink-0 w-80 group">
              <SpotlightCard
                className={`overflow-hidden rounded-[2rem] border border-border/40 bg-linear-to-br ${card.color} backdrop-blur-xl p-8 h-full transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20`}
              >
                {/* Icon — CSS-only hover scale/rotate, no state */}
                <div className="mb-6 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/30 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-6">{card.title}</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1 font-medium">We Provide</p>
                    <p className="text-lg font-semibold text-foreground">{card.we}</p>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1 font-medium">You Gain</p>
                    <p className="text-lg font-semibold text-primary">{card.you}</p>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2 text-primary/50 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm">Growth Area</span>
                </div>
              </SpotlightCard>
            </div>
          );
        })}
      </div>

      {/* Progress bar — DOM-updated, no React state */}
      <div className="absolute bottom-6 left-8 right-8 pointer-events-none">
        <div className="w-full h-0.5 bg-border/30 rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-primary/60 to-accent/60 rounded-full"
            style={{ width: "0%", transition: "none" }}
          />
        </div>
        <div className="flex justify-center mt-3">
          <ArrowRight className="w-5 h-5 text-primary/40" />
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
                <SpotlightCard className="group overflow-hidden rounded-[2rem] border border-border/40 bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl p-8 h-full transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/15">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/30">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">
                        <ShinyText text={outcome.metric} />
                      </div>
                      <p className="text-sm font-semibold text-foreground">{outcome.label}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{outcome.description}</p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-[2.5rem] border border-border/40 bg-gradient-to-br from-primary/10 to-accent/5 backdrop-blur-xl p-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Skills You'll Master</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {SKILLS.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0.85, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07, duration: 0.35 }}
                  className="text-center p-4 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors cursor-default"
                >
                  <p className="font-semibold text-sm text-foreground">{skill}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

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
  return (
    <main className="bg-background">
      <JourneyNavbar />
      <NodeGraph />
      <HorizontalScrollCards />
      <OutcomesSection />
    </main>
  );
}
