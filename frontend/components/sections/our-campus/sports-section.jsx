"use client";

import { motion } from "framer-motion";
import { useState, Suspense, lazy } from "react";
import {
  Trophy,
  Users,
  Target,
  Zap,
  Medal,
  Dribbble,
  Flag,
  Timer,
  Heart,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Map,
  Activity,
  Award
} from "lucide-react";
import BlurText from "../../bits/blur-text.jsx";
import Magnetic from "../../bits/magnetic.jsx";
import SplitText from "../../bits/split-text.jsx";
import ShinyText from "../../bits/shiny-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";

const stats = [
  { icon: Target, value: "15+", label: "Sports Facilities" },
  { icon: Flag, value: "20+", label: "Sports Events" },
  { icon: Users, value: "500+", label: "Active Students" },
  { icon: Trophy, value: "30+", label: "Tournament Wins" },
  { icon: Medal, value: "100%", label: "Participation" },
];

const facilities = [
  { icon: Map, title: "Playgrounds", description: "Spacious and well-maintained outdoor playgrounds." },
  { icon: Activity, title: "Indoor Complex", description: "Modern indoor facilities for multiple indoor sports." },
  { icon: Timer, title: "Changing Rooms", description: "Hygienic and comfortable changing rooms for students." },
  { icon: Heart, title: "Medical Support", description: "On-ground first aid and medical assistance available." },
  { icon: Zap, title: "Sports Equipment", description: "High-quality and regular maintained sports equipment." },
  { icon: Award, title: "Expert Coaches", description: "Experienced coaches and trainers to guide and motivate." },
];

const sportsOffered = [
  { title: "Cricket", image: "/images/overview/campus building.png", icon: Medal },
  { title: "Football", image: "/images/overview/campus overview.png", icon: Target },
  { title: "Volleyball", image: "/images/overview/student in class.png", icon: Activity },
  { title: "Badminton", image: "/images/overview/campus view.png", icon: Zap },
  { title: "Basketball", image: "/images/overview/student in lab.png", icon: Dribbble },
  { title: "Table Tennis", image: "/images/overview/smart library.png", icon: Timer },
  { title: "Chess", image: "/images/overview/college library.png", icon: Sparkles },
  { title: "Athletics", image: "/images/overview/campus life.png", icon: Activity },
  { title: "Kabaddi", image: "/images/overview/campus overview.png", icon: Users },
  { title: "Yoga & Fitness", image: "/images/overview/student in class.png", icon: Heart },
];

export function SportsSection() {
  const [activeSport, setActiveSport] = useState(null);
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
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/2 h-[500px] w-[500px] rounded-full border border-primary/10 blur-[100px]" 
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
                Athletic Excellence
              </motion.div>
              
              <SplitText
                text="Sports Excellence"
                className="text-5xl font-bold text-foreground sm:text-7xl lg:text-8xl tracking-tighter"
                delay={0.08}
              />
              <div className="mt-8 h-2 w-32 rounded-full bg-gradient-to-r from-primary via-primary/70 to-accent" />
              <p className="mt-10 max-w-xl text-xl text-muted-foreground leading-relaxed">
                <BlurText text="Building champions on the field and leaders in life. Sports at Satpuda shape character, teamwork and a winning spirit." />
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
                  Join the Team
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground ml-2">
                  <span>Home</span>
                  <span className="text-muted-foreground/30">/</span>
                  <span>Our Campus</span>
                  <span className="text-muted-foreground/30">/</span>
                  <span className="text-foreground">Sports</span>
                </div>
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
                  src="/images/overview/campus view.png"
                  alt="Sports Excellence"
                  className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
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
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-foreground tracking-tight">Winning</div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">30+ Tournaments</div>
                  </div>
                </motion.div>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section (Principal Style) */}
      <motion.section
        className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid gap-3 rounded-3xl border border-border/40 bg-muted/30 p-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 px-4 py-4 transition-all duration-300 hover:bg-background/40 rounded-2xl lg:border-r lg:border-border/40 lg:last:border-r-0"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-3xl font-bold leading-none text-foreground tracking-tighter">
                  <ShinyText text={value} speed={3} color="#d60b0b" />
                </p>
                <p className="mt-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">About Sports</p>
          <h2 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl tracking-tight">Stronger Body. Sharper Mind. Greater You.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            At Satpuda, we believe in the holistic development of students, and sports play an integral role in shaping character, teamwork, and leadership.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map(({ icon: Icon, title, description }) => (
            <SpotlightCard key={title} className="group rounded-[2.5rem] border-none bg-card/40 p-10 transition-all hover:-translate-y-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                <Icon className="h-8 w-8" />
              </div>
              <h4 className="mt-8 text-xl font-bold text-foreground group-hover:text-primary transition-colors">{title}</h4>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{description}</p>
            </SpotlightCard>
          ))}
        </div>
      </motion.section>

      {/* Building Character Section */}
      <motion.section
        className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="group relative overflow-hidden rounded-[40px] border border-border/40 bg-card/40 backdrop-blur-xl shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-[400px] lg:h-full overflow-hidden">
              <motion.img 
                src="/images/overview/sports and activity.png" 
                alt="Sports Character" 
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                style={{
                  scale: 1.1 // Initial scale for parallax feel
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60 hidden lg:block" />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 bg-primary/10 rounded-full blur-3xl opacity-50" />
              
              <p className="text-xs font-bold uppercase tracking-[0.5em] text-primary mb-4">Beyond Classrooms</p>
              <h3 className="text-4xl font-bold text-foreground tracking-tight sm:text-5xl leading-tight">Building Character Through Sports</h3>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Sports teach discipline, time management, leadership and resilience. We encourage every student to step out, play and grow into their best selves.
              </p>
              
              <ul className="mt-12 space-y-5">
                {[
                  "Teamwork & Collaboration",
                  "Discipline & Consistency",
                  "Confidence & Focus",
                  "Leadership & Responsibility"
                ].map((item) => (
                  <motion.li 
                    key={item} 
                    className="flex items-center gap-5 text-foreground font-bold group/item cursor-default"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-all group-hover/item:bg-primary group-hover/item:text-white group-hover/item:rotate-12">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                    <span className="group-hover/item:text-primary transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-14">
                <button className="group relative inline-flex items-center gap-4 rounded-full bg-primary px-12 py-5 text-xl font-bold text-primary-foreground transition-all hover:pr-14 hover:shadow-2xl hover:shadow-primary/30">
                  <span className="relative z-10">Join the Spirit</span>
                  <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2 z-10" />
                  <div className="absolute inset-0 z-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Interactive Sports Physics Arena */}
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
            {/* 3D-like Arena Container */}
            <motion.div 
              className="relative h-[450px] sm:h-[550px] overflow-hidden rounded-[2.5rem] border border-border/40 bg-background/40 backdrop-blur-md perspective-[1000px] group/arena"
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
                className="relative h-full w-full flex items-center justify-center preserve-3d"
                style={{
                  rotateX: typeof window !== "undefined" && window.innerWidth > 1024 ? (shelfFocus - 50) * 0.2 : 0,
                  rotateY: typeof window !== "undefined" && window.innerWidth > 1024 ? (shelfFocus - 50) * 0.1 : 0,
                }}
              >
                {/* Arena Grid System */}
                <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />

                {/* Rotating Stadium Rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
                    className="absolute rounded-full border border-primary/20 shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                    style={{
                      width: `${200 + i * 80}px`,
                      height: `${200 + i * 80}px`,
                      translateZ: i * 20
                    }}
                  />
                ))}

                {/* Core Arena Hub */}
                <motion.div 
                  className="relative z-20 h-40 w-40 rounded-full bg-primary flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.4)] border-4 border-white/20"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                >
                  <Trophy className="h-16 w-16 text-white drop-shadow-2xl" />
                  
                  {/* Orbital Icons */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-40px]"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-10 w-10 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg">
                      <Medal className="h-5 w-5 text-primary" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Interactive Hotspots */}
                {[
                  { x: 25, y: 30, label: "Main Arena" },
                  { x: 75, y: 25, label: "Indoor Court" },
                  { x: 30, y: 70, label: "Fitness Lab" },
                  { x: 70, y: 75, label: "Olympic Pool" }
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
                      <div className="h-4 w-4 rounded-full bg-primary animate-ping opacity-40" />
                      <div className="absolute inset-0 h-4 w-4 rounded-full bg-primary border-2 border-white shadow-lg cursor-pointer" />
                      
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover/spot:opacity-100 group-hover/spot:scale-100 transition-all duration-300 pointer-events-none">
                        <div className="bg-background/95 backdrop-blur-xl border border-primary/30 rounded-xl p-3 shadow-2xl min-w-[120px]">
                          <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Location</p>
                          <p className="text-xs font-bold text-foreground">{spot.label}</p>
                          <div className="mt-2 flex items-center gap-1">
                            <div className="h-1 w-1 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[8px] text-muted-foreground uppercase font-bold tracking-tighter">Live Status</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* HUD Status Bar */}
              <div className="absolute top-8 left-8 right-8 flex items-center justify-between pointer-events-none">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground">Arena Network</span>
                  </div>
                  <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest ml-3.5">Online • Stable</span>
                </div>
                
                <div className="flex gap-2">
                  <div className="rounded-lg bg-primary/10 border border-primary/20 px-3 py-1 backdrop-blur-md">
                    <span className="text-[9px] font-black text-primary uppercase">v.9.0</span>
                  </div>
                </div>
              </div>

              {/* Bottom Context */}
              <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  <Activity className="h-3 w-3 text-primary" />
                  Physics Simulation
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-50">
                  Interactive 3D Arena
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-[10px] mb-4"
              >
                <div className="h-px w-6 bg-primary" />
                Performance Data
              </motion.div>
              <h3 className="text-4xl font-bold text-foreground tracking-tight sm:text-5xl">The Physics of Excellence</h3>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We use advanced training methodologies and data-driven performance tracking to ensure our athletes reach their peak potential across all disciplines.
              </p>
              
              <div className="mt-10 grid gap-4">
                {[
                  { label: "Motion Analysis", value: "98.2%", trend: "up" },
                  { label: "Performance Recovery", value: "High-Tier", trend: "stable" },
                  { label: "Training Efficiency", value: "Optimized", trend: "up" }
                ].map((stat) => (
                  <motion.div 
                    key={stat.label} 
                    className="group/stat relative flex items-center justify-between rounded-2xl border border-border/40 bg-background/40 p-6 transition-all duration-500 hover:bg-background/80 hover:border-primary/40 hover:-translate-y-1 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover/stat:translate-x-full transition-transform duration-1000"
                    />
                    
                    <div className="relative z-10 flex flex-col">
                      <span className="font-black text-primary uppercase tracking-[0.2em] text-[10px] mb-1">Live Metric</span>
                      <span className="font-bold text-foreground transition-colors group-hover/stat:text-primary">{stat.label}</span>
                    </div>

                    <div className="relative z-10 flex items-center gap-4">
                      <div className="h-1 w-16 rounded-full bg-primary/10 overflow-hidden hidden sm:block">
                        <motion.div 
                          className="h-full bg-primary"
                          initial={{ width: "30%" }}
                          whileInView={{ width: stat.trend === "up" ? "90%" : "70%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                      <span className="font-black text-foreground text-2xl tracking-tighter group-hover/stat:scale-110 transition-transform">{stat.value}</span>
                      <Activity className="h-4 w-4 text-primary animate-pulse opacity-0 group-hover/stat:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Sports We Offer */}
      <motion.section
        className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8 mb-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Sports We Offer</p>
          <h3 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl tracking-tight">Play. Compete. Excel.</h3>
        </div>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {[
            { title: "Cricket", img: "/images/overview/sports and activity.png" },
            { title: "Football", img: "/images/overview/campus view.png" },
            { title: "Volleyball", img: "/images/overview/event and culture.png" },
            { title: "Badminton", img: "/images/overview/student in class.png" },
            { title: "Basketball", img: "/images/overview/campus overview.png" },
            { title: "Table Tennis", img: "/images/overview/smart library.png" },
            { title: "Chess", img: "/images/overview/student in lab.png" },
            { title: "Athletics", img: "/images/overview/campus building.png" },
            { title: "Kabaddi", img: "/images/overview/event and culture.png" },
            { title: "Yoga & Fitness", img: "/images/overview/sports and activity.png" },
          ].map((sport, i) => (
            <Magnetic key={sport.title} intensity={window.innerWidth > 1024 ? 0.2 : 0}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-border/40 bg-card/40 shadow-2xl transition-all duration-500 hover:border-primary/30"
              >
                <div className="h-56 overflow-hidden relative">
                  <motion.img 
                    src={sport.img} 
                    alt={sport.title} 
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-125" 
                  />
                  {/* Cinematic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Reveal Reveal Label */}
                  <div className="absolute top-4 left-4 opacity-0 -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="rounded-full bg-primary/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/20">
                      Active
                    </span>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors tracking-tight">{sport.title}</h4>
                  <div className="mt-2 h-0.5 w-0 bg-primary mx-auto transition-all duration-500 group-hover:w-12" />
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
              </motion.div>
            </Magnetic>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8 mb-20"
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
              <p className="text-xs font-bold uppercase tracking-[0.5em] text-primary mb-4">Ready to Unleash Your Potential?</p>
              <h3 className="text-4xl font-bold text-foreground sm:text-6xl tracking-tighter">Be a part of our sports community.</h3>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
                Join our elite teams and represent Satpuda with pride. Whether you are a pro or a beginner, there is a place for you on the field.
              </p>
            </div>
            <Magnetic intensity={0.3}>
              <button className="group relative inline-flex items-center gap-4 rounded-full bg-primary px-12 py-6 text-xl font-bold text-primary-foreground transition-all hover:pr-14 shadow-2xl shadow-primary/30">
                Explore Sports
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
              </button>
            </Magnetic>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

