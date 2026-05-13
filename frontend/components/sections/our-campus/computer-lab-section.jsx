"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Monitor, 
  Settings, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Star, 
  Award, 
  GraduationCap, 
  Heart,
  ChevronRight,
  Target,
  Zap,
  ArrowRight,
  Cpu,
  Terminal,
  Database,
  Network,
  Layers,
  Code,
  Server,
  Activity,
  Cloud,
  ShieldCheck,
  HardDrive
} from "lucide-react";

import Magnetic from "../../bits/magnetic.jsx";
import SplitText from "../../bits/split-text.jsx";
import BlurText from "../../bits/blur-text.jsx";
import ShinyText from "../../bits/shiny-text.jsx";
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

const listItems = [
  {
    icon: Monitor,
    content: "Computers have become an inherent part of our routine life. No department or business can be thought of being fully functional and automated without the use of computers. Proper use of computerized facilities results in cost cutting, proper resource utilization that includes machinery and manpower, increased efficiency and productivity in terms of quality and timeliness, better statistical analysis for critical decisions related to business growth and numerous other advantages.",
    color: "bg-blue-600"
  },
  {
    icon: Star,
    content: <>With the uncountable advantages, every organization is looking for computer engineering professionals. The professionals with mastered skills are offered very high pay scales and with several other benefits like world tours. With state of the art infrastructure and adequate facilities, <span className="font-bold text-primary">Satpuda College of Engineering & Polytechnic</span> is at the top of the list in Balaghat.</>,
    color: "bg-indigo-600"
  },
  {
    icon: Award,
    content: "The department has one of the best and finest computing facilities in the region. The department has produced quality computer professionals and feels proud of its alumni employed in public, private and educational sectors, bringing fame to their alma mater.",
    color: "bg-violet-600"
  },
  {
    icon: GraduationCap,
    content: "In addition to imparting conventional technical education and a rich learning environment, the emphasis is laid on technical activities such as workshops, debates, guest lecturers and quizzes to prepare students for the highly competitive job environment.",
    color: "bg-blue-700"
  },
  {
    icon: Heart,
    content: "The objective of department is to provide knowledge of modern computing systems as well as sound theoretical background. The department also aims at establishing a strong relationship with the industry so as to bridge the gap between the academic and corporate sector. The department strongly aims at cultivating qualities like leadership, teamwork, self-confidence and good communication skills among its students.",
    color: "bg-blue-800"
  }
];

export function ComputerLabSection() {
  const [shelfFocus, setShelfFocus] = useState(50);

  const updateShelfFocus = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setShelfFocus(x);
  };

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
            src="/images/overview/campus overview.png"
            alt="Campus backdrop"
            className="h-full w-full object-cover object-right"
          />
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
                src="/images/overview/student in lab.png"
                alt="Students in Computer Lab"
                className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[600px]"
              />
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

      {/* Interactive Virtual Silicon Arena */}
      <motion.section
        className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8"
        onPointerMove={updateShelfFocus}
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="group relative overflow-hidden rounded-[3rem] border border-border/40 bg-card/40 backdrop-blur-xl p-8 shadow-2xl sm:p-12">
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-16 items-center">
            {/* 3D-like Silicon Arena Container */}
            <motion.div 
              className="relative h-[450px] sm:h-[600px] overflow-hidden rounded-[2.5rem] border border-border/40 bg-background/40 backdrop-blur-md perspective-[1000px] group/arena"
              style={{
                perspective: "1200px"
              }}
            >
              {/* Dynamic Mouse-Following Glow */}
              <div 
                className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-700 group-hover/arena:opacity-100"
                style={{
                  background: `radial-gradient(600px circle at ${shelfFocus}% 50%, rgba(59,130,246,0.15), transparent 80%)`,
                }}
              />
              
              <motion.div 
                className="relative h-full w-full flex items-center justify-center"
                style={{
                  transformStyle: 'preserve-3d',
                  rotateX: typeof window !== "undefined" && window.innerWidth > 1024 ? (shelfFocus - 50) * 0.25 : 0,
                  rotateY: typeof window !== "undefined" && window.innerWidth > 1024 ? (shelfFocus - 50) * 0.15 : 0,
                }}
              >
                {/* Arena Circuit Grid System */}
                <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />

                {/* Rotating Data Rings */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{ duration: 15 + i * 8, repeat: Infinity, ease: "linear" }}
                    className="absolute rounded-full border border-primary/10 shadow-[0_0_40px_rgba(59,130,246,0.05)]"
                    style={{
                      width: `${240 + i * 90}px`,
                      height: `${240 + i * 90}px`,
                      translateZ: i * 25
                    }}
                  />
                ))}

                {/* Core Silicon Processor Hub */}
                <Magnetic intensity={0.3}>
                  <motion.div 
                    className="relative z-20 h-44 w-44 rounded-3xl bg-primary flex items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.5)] border-4 border-white/20"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                  >
                    <Cpu className="h-20 w-20 text-white drop-shadow-2xl animate-pulse" />
                    
                    {/* Orbital Data Nodes */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-50px]"
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-12 w-12 rounded-2xl bg-card border border-primary/30 flex items-center justify-center shadow-xl backdrop-blur-xl">
                        <Terminal className="h-6 w-6 text-primary" />
                      </div>
                    </motion.div>
                  </motion.div>
                </Magnetic>

                {/* Interactive Tech Hotspots */}
                {[
                  { x: 20, y: 25, label: "AI_NODE_X", icon: Network },
                  { x: 80, y: 30, label: "CLOUD_CORE", icon: Cloud },
                  { x: 25, y: 75, label: "CYBER_SHIELD", icon: ShieldCheck },
                  { x: 75, y: 70, label: "DATA_VAULT", icon: HardDrive }
                ].map((spot, i) => (
                  <motion.div
                    key={i}
                    className="absolute z-30 group/spot"
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <div className="relative">
                      <div className="h-5 w-5 rounded-full bg-primary animate-ping opacity-40" />
                      <div className="absolute inset-0 h-5 w-5 rounded-full bg-primary border-2 border-white shadow-2xl cursor-pointer flex items-center justify-center">
                        <spot.icon className="h-2.5 w-2.5 text-white" />
                      </div>
                      
                      <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover/spot:opacity-100 group-hover/spot:scale-100 transition-all duration-300 pointer-events-none">
                        <div className="bg-background/95 backdrop-blur-2xl border border-primary/30 rounded-2xl p-4 shadow-2xl min-w-[140px]">
                          <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Module</p>
                          <p className="text-xs font-black text-foreground">{spot.label}</p>
                          <div className="mt-3 flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[8px] text-muted-foreground uppercase font-black tracking-tighter">Sync: Active</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* HUD Console Overlays */}
              <div className="absolute top-10 left-10 right-10 flex items-center justify-between pointer-events-none">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 bg-background/60 backdrop-blur-md px-4 py-2 rounded-xl border border-primary/20">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground">Silicon Arena v.9.0</span>
                  </div>
                  <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest ml-4">Compute Grid • Stable</span>
                </div>
                
                <div className="flex gap-3">
                  <div className="rounded-xl bg-primary/10 border border-primary/20 px-4 py-2 backdrop-blur-md">
                    <span className="text-[10px] font-black text-primary uppercase">Uptime: 99.9%</span>
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry */}
              <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-3 rounded-full border border-border/40 bg-background/60 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground backdrop-blur-md">
                  <Activity className="h-4 w-4 text-primary" />
                  Neural Processing Hub
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">
                  Virtual Lab Environment
                </div>
              </div>
            </motion.div>

            {/* Content Side - Replicated from Sports Performance Style */}
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-primary font-bold tracking-widest uppercase text-[10px]"
              >
                <div className="h-px w-8 bg-primary" />
                Technical Infrastructure
              </motion.div>
              <h3 className="text-4xl font-bold text-foreground tracking-tight sm:text-6xl leading-[1.1]">The Architecture of Innovation</h3>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
                Our computer labs utilize a high-performance grid architecture, providing students with the computational power required for AI research, cloud development, and complex algorithm modeling.
              </p>
              
              <div className="mt-12 grid gap-5">
                {[
                  { label: "Neural Network Throughput", value: "1.2 PB/s", trend: "up" },
                  { label: "Cloud Sync Latency", value: "Low-Tier", trend: "stable" },
                  { label: "Processing Efficiency", value: "Optimized", trend: "up" }
                ].map((stat) => (
                  <motion.div 
                    key={stat.label} 
                    className="group/stat relative flex items-center justify-between rounded-2xl border border-border/40 bg-background/40 p-8 transition-all duration-500 hover:bg-background/80 hover:border-primary/40 hover:-translate-y-2 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover/stat:translate-x-full transition-transform duration-1000"
                    />
                    
                    <div className="relative z-10 flex flex-col">
                      <span className="font-black text-primary uppercase tracking-[0.3em] text-[10px] mb-2">Live Metric</span>
                      <span className="font-bold text-xl text-foreground transition-colors group-hover/stat:text-primary tracking-tight">{stat.label}</span>
                    </div>

                    <div className="relative z-10 text-right">
                      <p className="text-2xl font-black text-foreground tracking-tighter">{stat.v || stat.value}</p>
                      <div className="mt-1 flex items-center justify-end gap-1.5">
                        <div className={`h-1.5 w-1.5 rounded-full ${stat.trend === 'up' ? 'bg-green-500' : 'bg-primary'}`} />
                        <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">{stat.trend}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-14 group relative inline-flex items-center gap-5 rounded-full bg-primary px-14 py-7 text-xl font-black text-primary-foreground transition-all hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]"
              >
                Access Lab Resources
                <ArrowRight className="h-7 w-7 transition-transform group-hover:translate-x-3" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Bottom List Section */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[3rem] border border-border/50 bg-card/30 p-4 sm:p-8 lg:p-12 backdrop-blur-sm">
          <div className="space-y-6">
            {listItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, backgroundColor: "rgba(var(--secondary), 0.5)" }}
                className="group flex gap-6 p-6 rounded-2xl hover:bg-secondary/50 transition-all duration-300 border border-transparent hover:border-border/50 cursor-default"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.color} text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="h-5 w-5" />
                </motion.div>
                <div className="flex-1">
                  <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {item.content}
                  </p>
                  {index < listItems.length - 1 && (
                    <div className="mt-6 h-px w-full bg-gradient-to-r from-border/50 via-border/20 to-transparent" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
