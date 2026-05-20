"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Target, Sparkles, ShieldCheck, Users, Lightbulb, Handshake, Award } from "lucide-react";
import SplitText from "../../bits/split-text.jsx";
import BlurText from "../../bits/blur-text.jsx";
import { useRef, useState, useEffect } from "react";
import Magnetic from "../../bits/magnetic.jsx";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for the highest standards in education and performance.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Encouraging creativity and new ideas to drive positive change.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Upholding honesty, ethical values and transparency.",
  },
  {
    icon: Handshake,
    title: "Teamwork",
    description: "Believing in the power of collaboration and mutual respect.",
  },
  {
    icon: Users,
    title: "Responsibility",
    description: "Committed to societal well-being and sustainable development.",
  },
  {
    icon: Sparkles,
    title: "Leadership",
    description: "Developing confident leaders ready to shape the future.",
  },
];

const marqueeItems = [
  "Empower",
  "Educate",
  "Elevate",
  "Innovate",
  "Integrate",
  "Inspire",
  "Integrity",
  "Excellence",
  "Leadership",
  "Teamwork",
];

const constellationNodes = [
  { ...values[0], top: "15%", left: "12%", floatDelay: 0 },
  { ...values[1], top: "22%", left: "68%", floatDelay: 1 },
  { ...values[2], top: "52%", left: "10%", floatDelay: 2 },
  { ...values[3], top: "65%", left: "42%", floatDelay: 0.5 },
  { ...values[4], top: "35%", left: "78%", floatDelay: 1.5 },
  { ...values[5], top: "78%", left: "72%", floatDelay: 2.5 },
];

export function MissionVisionSection() {
  const constellationRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState(null);

  const { scrollYProgress } = useScroll({
    target: constellationRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const handleMouseMove = (e) => {
    if (!constellationRef.current) return;
    const { left, top, width, height } = constellationRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setMousePos({ x, y });
  };

  return (
    <main className="bg-background pb-20">
      <style>{`
        @keyframes mv-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes mv-star-drift {
          0% { transform: translateY(0); opacity: 0.45; }
          50% { opacity: 0.7; }
          100% { transform: translateY(-24px); opacity: 0.45; }
        }
        .constellation-glow {
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
        }
      `}</style>
      <motion.section
        className="relative overflow-hidden border-b border-border/70 bg-card/40 pt-16 pb-10 sm:pt-20 lg:pt-24 lg:pb-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.08),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-end lg:px-8">
          <div>
            <SplitText
              text="Mission & Vision"
              className="pt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
              delay={0.06}
            />
            <div className="mt-4 h-1.5 w-24 rounded-full bg-linear-to-r from-primary via-primary/70 to-accent" />
            <BlurText
              text="Our purpose. Our promise. Our responsibility."
              className="mt-6 max-w-xl text-base text-muted-foreground"
            />
          </div>
          <div className="justify-self-start text-sm font-medium text-muted-foreground lg:justify-self-end">
            <span>Home</span>
            <span className="mx-2 text-muted-foreground/60">/</span>
            <span>About</span>
            <span className="mx-2 text-muted-foreground/60">/</span>
            <span className="text-foreground">Mission &amp; Vision</span>
          </div>
        </div>
      </motion.section>

      <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/70">
          <div className="flex w-[200%] items-center gap-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground"
            style={{ animation: "mv-marquee 24s linear infinite" }}
          >
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision Sections ... (omitted for brevity in this replace call, but keeping logic) */}
      <motion.section
        className="mx-auto mt-12 grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr,1fr] lg:items-center lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ rotateX: 3, rotateY: -3, y: -6 }}
          transition={{ type: "spring", stiffness: 160, damping: 14 }}
          className="group overflow-hidden rounded-[28px] border border-border bg-card shadow-lg transition-all duration-500 hover:shadow-[0_18px_50px_rgba(59,130,246,0.18)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src="/images/overview/student in class.png"
            alt="Students on campus"
            className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-96"
          />
        </motion.div>
        <motion.div
          whileHover={{ rotateX: 3, rotateY: 3, y: -6 }}
          transition={{ type: "spring", stiffness: 160, damping: 14 }}
          className="group rounded-[28px] border border-border/60 bg-card/80 p-6 shadow-sm transition-all duration-500 hover:shadow-[0_18px_50px_rgba(59,130,246,0.18)] sm:p-8"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-500 group-hover:rotate-6">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Mission</p>
              <SplitText
                text="Empower. Educate. Elevate."
                className="mt-2 text-2xl font-bold text-foreground sm:text-3xl"
                delay={0.05}
              />
            </div>
          </div>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground transition-all duration-500 group-hover:text-foreground">
            <BlurText
              text="We channel every learner toward full potential through structured learning and hands-on exposure."
              className="text-base leading-relaxed text-muted-foreground"
            />
            <p className="opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              The goal: <span className="font-semibold text-primary">confident, capable graduates</span> who contribute with
              purpose.
            </p>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="mx-auto mt-10 grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr,1.1fr] lg:items-center lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ rotateX: 3, rotateY: -3, y: -6 }}
          transition={{ type: "spring", stiffness: 160, damping: 14 }}
          className="group rounded-[28px] border border-border/60 bg-card/80 p-6 shadow-sm transition-all duration-500 hover:shadow-[0_18px_50px_rgba(59,130,246,0.18)] sm:p-8"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-500 group-hover:rotate-6">
              <Eye className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Vision</p>
              <SplitText
                text="Innovate. Integrate. Inspire."
                className="mt-2 text-2xl font-bold text-foreground sm:text-3xl"
                delay={0.05}
              />
            </div>
          </div>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground transition-all duration-500 group-hover:text-foreground">
            <BlurText
              text="A future-forward campus that blends modern tools with human-centered teaching."
              className="text-base leading-relaxed text-muted-foreground"
            />
            <p className="opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              We prepare students for <span className="font-semibold text-primary">industry-relevant impact</span> in a rapidly
              evolving world.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ rotateX: 3, rotateY: 3, y: -6 }}
          transition={{ type: "spring", stiffness: 160, damping: 14 }}
          className="group overflow-hidden rounded-[28px] border border-border bg-card shadow-lg transition-all duration-500 hover:shadow-[0_18px_50px_rgba(59,130,246,0.18)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src="/images/overview/campus building.png"
            alt="Campus community"
            className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-96"
          />
        </motion.div>
      </motion.section>

      {/* Values Constellation Section */}
      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="mb-10 rounded-[3rem] border border-border/60 bg-card/70 p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.15),transparent_40%)] pointer-events-none" 
            style={{ "--mouse-x": `${mousePos.x * 100}%`, "--mouse-y": `${mousePos.y * 100}%` }}
          />
          
          <div className="text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xs font-bold uppercase tracking-[0.4em] text-primary"
            >
              Values Constellation
            </motion.p>
            <h3 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl tracking-tight">
              A map of what <span className="text-primary">guides us</span>
            </h3>
            <BlurText
              text="Interact with the nodes to explore our core principles."
              className="mt-4 text-base text-muted-foreground"
            />
          </div>

          <div className="mt-16 hidden md:block">
            <div
              ref={constellationRef}
              onMouseMove={handleMouseMove}
              className="relative mx-auto h-187.5 max-w-6xl overflow-hidden rounded-[3rem] border border-border/40 bg-background/40 backdrop-blur-sm cursor-crosshair group/container"
            >
              {/* Star Background */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ 
                  y: parallaxY,
                  x: useTransform(scrollYProgress, [0, 1], [30, -30])
                }}
              >
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: "radial-gradient(rgba(59,130,246,0.3) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "radial-gradient(rgba(124,58,237,0.2) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                    animation: "mv-star-drift 20s ease-in-out infinite",
                  }}
                />
              </motion.div>

              {/* Connecting Lines SVG */}
              <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 1000 750">
                <defs>
                  <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.4)" />
                    <stop offset="100%" stopColor="rgba(124,58,237,0.4)" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                
                {/* Dynamic Lines between nodes */}
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                  {[
                    [0, 1], [0, 2], [1, 4], [2, 3], [3, 5], [4, 5], [2, 4]
                  ].map(([a, b], idx) => {
                    const nodeA = constellationNodes[a];
                    const nodeB = constellationNodes[b];
                    const isActive = hoveredNode === a || hoveredNode === b;
                    
                    return (
                      <motion.line
                        key={`line-${idx}`}
                        x1={`${parseFloat(nodeA.left)}%`}
                        y1={`${parseFloat(nodeA.top)}%`}
                        x2={`${parseFloat(nodeB.left)}%`}
                        y2={`${parseFloat(nodeB.top)}%`}
                        stroke="url(#line-grad)"
                        strokeWidth={isActive ? "2.5" : "1"}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ 
                          pathLength: 1, 
                          opacity: isActive ? 0.8 : 0.2,
                          strokeDasharray: isActive ? "0" : "4 4"
                        }}
                        transition={{ duration: 1.5, delay: 0.5 + idx * 0.1 }}
                        className={isActive ? "constellation-glow" : ""}
                      />
                    );
                  })}
                </motion.g>
              </svg>

              {/* Central Core */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <Magnetic intensity={0.2}>
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 90, 180, 270, 360]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="flex h-32 w-32 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_50px_rgba(59,130,246,0.5)] border-4 border-white/20"
                  >
                    <Sparkles className="h-12 w-12" />
                  </motion.div>
                </Magnetic>
              </div>

              {/* Interactive Nodes */}
              <div className="absolute inset-0 z-30">
                {constellationNodes.map((node, index) => (
                  <div
                    key={node.title}
                    className="absolute"
                    style={{ top: node.top, left: node.left }}
                    onMouseEnter={() => setHoveredNode(index)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <Magnetic intensity={0.4}>
                      <motion.div
                        animate={{ 
                          y: [0, -15, 0],
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: node.floatDelay
                        }}
                        className={`group relative flex items-center gap-4 rounded-4xl border border-white/20 bg-background/80 px-6 py-4 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:bg-background/95 ${hoveredNode === index ? "scale-110 -translate-y-2 z-50" : "z-10"}`}
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                          <node.icon className="h-6 w-6" />
                        </div>
                        <div className="max-w-55">
                          <p className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">{node.title}</p>
                          <motion.p 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ 
                              height: hoveredNode === index ? "auto" : 0,
                              opacity: hoveredNode === index ? 1 : 0
                            }}
                            className="mt-2 text-xs text-muted-foreground leading-relaxed overflow-hidden"
                          >
                            {node.description}
                          </motion.p>
                        </div>
                        
                        {/* Pulse effect */}
                        <div className="absolute -inset-1 rounded-4xl bg-primary/20 opacity-0 group-hover:animate-ping pointer-events-none" />
                      </motion.div>
                    </Magnetic>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile view ... (rest of the file) */}

          <div className="mt-8 grid grid-cols-2 gap-3 md:hidden">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-background/85 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">{title}</p>
                <p className="mt-2 text-[11px] text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[28px] border border-border/60 bg-card/70 p-6 sm:p-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Core Values</p>
            <h3 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">The principles that guide us</h3>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {values.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border border-border/60 bg-background/80 p-4 text-center shadow-sm hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500"
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <h4 className="mt-3 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{title}</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}

