"use client";

import { motion } from "framer-motion";
import { 
  Monitor, 
  Settings, 
  TrendingUp, 
  Users, 
  BookOpen
} from "lucide-react";

import SplitText from "../../bits/split-text.jsx";
import BlurText from "../../bits/blur-text.jsx";
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

export function ComputerLabSection() {
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
            src="/images/overview/campus overview.webp"
            alt="Campus backdrop"
            className="h-full w-full object-cover object-right" loading="lazy" />
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
                src="/images/overview/student in lab.webp"
                alt="Students in Computer Lab"
                className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[600px]" loading="lazy" />
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
    </main>
  );
}
