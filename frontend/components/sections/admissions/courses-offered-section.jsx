"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  BookOpen, 
  Settings, 
  Users, 
  Award, 
  Download, 
  Headset, 
  Phone, 
  Mail, 
  ChevronRight,
  Info
} from "lucide-react";

import SplitText from "../../bits/split-text.jsx";
import BlurText from "../../bits/blur-text.jsx";
import ShinyText from "../../bits/shiny-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";
import Magnetic from "../../bits/magnetic.jsx";
import { Button } from "../../ui/button";

const stats = [
  { icon: GraduationCap, value: "10+", label: "Courses Offered", color: "text-blue-500" },
  { icon: BookOpen, value: "5", label: "B.Tech Programs", color: "text-indigo-500" },
  { icon: Settings, value: "5", label: "Diploma Programs", color: "text-emerald-500" },
  { icon: Users, value: "Experienced", label: "Faculty", color: "text-sky-500" },
  { icon: Award, value: "Quality", label: "Education", color: "text-violet-500" },
];

const btechPrograms = [
  { sno: 1, course: "B.Tech", branch: "Computer Science and Engineering", intake: 180, eligibility: "12th (Maths)" },
  { sno: 2, course: "B.Tech", branch: "Mechanical Engineering", intake: 60, eligibility: "12th (Maths)" },
  { sno: 3, course: "B.Tech", branch: "Civil Engineering", intake: 60, eligibility: "12th (Maths)" },
  { sno: 4, course: "B.Tech", branch: "Electrical Engineering", intake: 60, eligibility: "12th (Maths)" },
  { sno: 5, course: "B.Tech", branch: "Mining Engineering", intake: 120, eligibility: "12th (Maths)" },
];

const diplomaPrograms = [
  { sno: 6, course: "Diploma", branch: "Computer Science Engineering", intake: 60, eligibility: "10th Pass" },
  { sno: 7, course: "Diploma", branch: "Mechanical Engineering", intake: 120, eligibility: "10th Pass" },
  { sno: 8, course: "Diploma", branch: "Civil Engineering", intake: 60, eligibility: "10th Pass" },
  { sno: 9, course: "Diploma", branch: "Electrical Engineering", intake: 120, eligibility: "10th Pass" },
  { sno: 10, course: "Diploma", branch: "Mining & Mine Surveying", intake: 120, eligibility: "10th Pass" },
];

export function CoursesOfferedSection() {
  const [activeTab, setActiveTab] = useState("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="bg-background pb-20 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden border-b border-border/70 bg-card/40 pt-40 pb-16 lg:pt-48 lg:pb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 opacity-20 pointer-events-none">
          <img
            src="/images/overview/campus building.png"
            alt="Campus Building"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block"
            >
              Admission
            </motion.span>
            <h1 className="text-5xl font-bold text-foreground sm:text-7xl tracking-tighter mb-6">
              <SplitText text="Courses" delay={0.08} className="inline-block mr-4" />
              <SplitText text="Offered" delay={0.12} className="text-primary" />
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1.5 rounded-full bg-primary mb-8" 
            />
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              <BlurText text="Explore our wide range of undergraduate (B.Tech) and diploma programs designed to build your strong foundation for a successful future." />
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="relative -mt-10 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Magnetic intensity={0.2}>
                  <SpotlightCard className="h-full p-8 group cursor-default transition-all duration-500 hover:border-primary/50 bg-card/60 backdrop-blur-xl rounded-[2rem]">
                    <div className="relative">
                      <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500`}>
                        <stat.icon className="h-7 w-7" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-3xl font-bold text-foreground tracking-tighter">
                          <ShinyText text={stat.value} speed={3} color="rgba(59, 130, 246, 1)" />
                        </h3>
                        <p className="text-xs text-muted-foreground font-bold uppercase tracking-[0.2em] group-hover:text-primary transition-colors duration-300">
                          {stat.label}
                        </p>
                      </div>

                      {/* Expanding Line Effect like Mining Page */}
                      <div className="mt-8 h-1 w-12 rounded-full bg-primary/20 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
                    </div>
                  </SpotlightCard>
                </Magnetic>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {[
              { id: "all", label: "All Programs" },
              { id: "btech", label: "B.Tech Programs" },
              { id: "diploma", label: "Diploma Programs" },
            ].map((tab) => (
              <Magnetic key={tab.id} intensity={0.2}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                      : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  <span className="relative z-10">{tab.label}</span>
                  {activeTab !== tab.id && (
                    <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  )}
                </button>
              </Magnetic>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                },
                exit: { 
                  opacity: 0,
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
              className="space-y-12"
            >
              {/* B.Tech Section */}
              {(activeTab === "all" || activeTab === "btech") && (
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                    exit: { opacity: 0, y: -20 }
                  }}
                  className="rounded-[2.5rem] border border-border/50 bg-card/30 p-1 lg:p-2 backdrop-blur-sm group/section overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 p-10 opacity-5 group-hover/section:opacity-10 transition-opacity">
                    <GraduationCap className="h-40 w-40 rotate-12" />
                  </div>
                  
                  <div className="p-6 lg:p-10 relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <motion.div 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="h-12 w-12 flex items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500"
                      >
                        <GraduationCap className="h-6 w-6" />
                      </motion.div>
                      <h2 className="text-3xl font-bold text-foreground tracking-tight">
                        B.Tech Programs
                      </h2>
                    </div>

                    <div className="overflow-x-auto rounded-3xl border border-border/40 bg-background/40 backdrop-blur-md">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-muted/30">
                            <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">S.No.</th>
                            <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Course</th>
                            <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Branch / Specialization</th>
                            <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground text-center">Intake</th>
                            <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Eligibility</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/20">
                          {btechPrograms.map((program, i) => (
                            <motion.tr 
                              key={program.sno}
                              variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0 }
                              }}
                              className="hover:bg-blue-500/5 transition-all duration-300 group/row"
                            >
                              <td className="px-6 py-6">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/5 text-blue-500 font-bold text-xs group-hover/row:bg-blue-500 group-hover/row:text-white transition-all duration-300 group-hover/row:rotate-6">
                                  {program.sno}
                                </span>
                              </td>
                              <td className="px-6 py-6">
                                <span className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-500 font-bold text-xs uppercase tracking-wider">
                                  {program.course}
                                </span>
                              </td>
                              <td className="px-6 py-6">
                                <div className="flex flex-col">
                                  <span className="text-foreground font-semibold group-hover/row:text-blue-500 transition-colors">{program.branch}</span>
                                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1 opacity-0 group-hover/row:opacity-100 transition-opacity">Engineering Faculty</span>
                                </div>
                              </td>
                              <td className="px-6 py-6 text-center">
                                <motion.span 
                                  whileHover={{ scale: 1.1 }}
                                  className="inline-block px-4 py-1.5 rounded-full bg-background border border-border group-hover/row:border-blue-500/50 text-blue-500 font-bold text-sm shadow-sm"
                                >
                                  {program.intake}
                                </motion.span>
                              </td>
                              <td className="px-6 py-6">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500/40" />
                                  <span className="text-sm font-medium">{program.eligibility}</span>
                                </div>
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Diploma Section */}
              {(activeTab === "all" || activeTab === "diploma") && (
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                    exit: { opacity: 0, y: -20 }
                  }}
                  className="rounded-[2.5rem] border border-border/50 bg-card/30 p-1 lg:p-2 backdrop-blur-sm group/section overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 p-10 opacity-5 group-hover/section:opacity-10 transition-opacity">
                    <BookOpen className="h-40 w-40 -rotate-12" />
                  </div>

                  <div className="p-6 lg:p-10 relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <motion.div 
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="h-12 w-12 flex items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500"
                      >
                        <BookOpen className="h-6 w-6" />
                      </motion.div>
                      <h2 className="text-3xl font-bold text-foreground tracking-tight">
                        Diploma Programs
                      </h2>
                    </div>

                    <div className="overflow-x-auto rounded-3xl border border-border/40 bg-background/40 backdrop-blur-md">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-muted/30">
                            <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">S.No.</th>
                            <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Course</th>
                            <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Branch / Specialization</th>
                            <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground text-center">Intake</th>
                            <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Eligibility</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/20">
                          {diplomaPrograms.map((program, i) => (
                            <motion.tr 
                              key={program.sno}
                              variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0 }
                              }}
                              className="hover:bg-emerald-500/5 transition-all duration-300 group/row"
                            >
                              <td className="px-6 py-6">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/5 text-emerald-500 font-bold text-xs group-hover/row:bg-emerald-500 group-hover/row:text-white transition-all duration-300 group-hover/row:-rotate-6">
                                  {program.sno}
                                </span>
                              </td>
                              <td className="px-6 py-6">
                                <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-500 font-bold text-xs uppercase tracking-wider">
                                  {program.course}
                                </span>
                              </td>
                              <td className="px-6 py-6">
                                <div className="flex flex-col">
                                  <span className="text-foreground font-semibold group-hover/row:text-emerald-500 transition-colors">{program.branch}</span>
                                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1 opacity-0 group-hover/row:opacity-100 transition-opacity">Technical Faculty</span>
                                </div>
                              </td>
                              <td className="px-6 py-6 text-center">
                                <motion.span 
                                  whileHover={{ scale: 1.1 }}
                                  className="inline-block px-4 py-1.5 rounded-full bg-background border border-border group-hover/row:border-emerald-500/50 text-emerald-500 font-bold text-sm shadow-sm"
                                >
                                  {program.intake}
                                </motion.span>
                              </td>
                              <td className="px-6 py-6">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/40" />
                                  <span className="text-sm font-medium">{program.eligibility}</span>
                                </div>
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Info Note */}
          <motion.div 
            className="mt-12 flex items-start gap-4 p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Info className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
            <p className="text-sm text-blue-500/80 font-medium">
              Intake capacity is subject to change as per institutional and regulatory guidelines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Academic Ecosystem Visual */}
      <section className="py-24 relative overflow-hidden bg-card/10 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 text-primary"
                >
                  <div className="h-px w-10 bg-primary" />
                  <span className="text-sm font-bold uppercase tracking-widest">Academic Excellence</span>
                </motion.div>
                <h2 className="text-4xl font-bold text-foreground mt-4 leading-tight sm:text-6xl tracking-tight">
                  The Core of <br />
                  <span className="text-primary italic">Engineering Future</span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Our programs are more than just courses; they are nodes in a dynamic ecosystem designed to foster innovation, technical mastery, and professional leadership.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-border/50">
                <div className="group cursor-default">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
                    <p className="text-2xl font-black text-foreground tracking-tight group-hover:text-blue-500 transition-colors">Digital First</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Integrated digital platforms for modern engineering challenges.</p>
                </div>
                <div className="group cursor-default">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-2xl font-black text-foreground tracking-tight group-hover:text-emerald-500 transition-colors">Global Standards</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Curriculum aligned with international industry requirements.</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[4rem] overflow-hidden bg-background border border-border/50 shadow-2xl flex items-center justify-center group"
            >
              {/* Background Digital Grid */}
              <div className="absolute inset-0 opacity-[0.03] grid grid-cols-10 grid-rows-10">
                {[...Array(100)].map((_, i) => (
                  <div key={i} className="border-[0.5px] border-primary" />
                ))}
              </div>
              
              {/* Central Hub Visual */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Rotating Rings */}
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                    transition={{ duration: 20 + ring * 10, repeat: Infinity, ease: "linear" }}
                    className="absolute border border-primary/20 rounded-full"
                    style={{
                      width: `${40 + ring * 15}%`,
                      height: `${40 + ring * 15}%`,
                      borderStyle: ring === 2 ? 'dashed' : 'solid',
                    }}
                  />
                ))}

                {/* Central Core */}
                <Magnetic intensity={0.2}>
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      boxShadow: ["0 0 20px rgba(59,130,246,0.2)", "0 0 60px rgba(59,130,246,0.4)", "0 0 20px rgba(59,130,246,0.2)"]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative z-20 h-32 w-32 rounded-3xl bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center shadow-2xl"
                  >
                    <GraduationCap className="h-14 w-14 text-white" />
                  </motion.div>
                </Magnetic>

                {/* Orbital Department Nodes */}
                {[
                  { icon: BookOpen, label: "CSE", angle: 0, color: "text-blue-400" },
                  { icon: Settings, label: "Mining", angle: 72, color: "text-emerald-400" },
                  { icon: Users, label: "Civil", angle: 144, color: "text-amber-400" },
                  { icon: Award, label: "Mech", angle: 216, color: "text-rose-400" },
                  { icon: GraduationCap, label: "Elec", angle: 288, color: "text-violet-400" },
                ].map((node, i) => (
                  <motion.div
                    key={node.label}
                    className="absolute z-30"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    animate={{
                      top: `${50 + 35 * Math.sin((node.angle * Math.PI) / 180)}%`,
                      left: `${50 + 35 * Math.cos((node.angle * Math.PI) / 180)}%`,
                    }}
                    style={{ transform: 'translate(-50%, -50%)' }}
                  >
                    <Magnetic intensity={0.4}>
                      <div className="group/node relative">
                        <div className="h-16 w-16 rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg transition-all group-hover/node:border-primary group-hover/node:scale-110">
                          <node.icon className={`h-7 w-7 ${node.color}`} />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold opacity-0 group-hover/node:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest">
                          {node.label} Dept
                        </div>
                      </div>
                    </Magnetic>
                  </motion.div>
                ))}

                {/* Connection Pulses */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute border-2 border-primary/20 rounded-full"
                    initial={{ width: 0, height: 0, opacity: 0 }}
                    animate={{ 
                      width: ["0%", "130%"],
                      height: ["0%", "130%"],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 5,
                      delay: i * 1.5,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brochure CTA Section */}
      <section className="mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SpotlightCard className="p-10 lg:p-16 overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="flex items-center gap-8">
                <div className="h-20 w-20 flex items-center justify-center rounded-3xl bg-primary/10 text-primary animate-bounce-slow">
                  <Download className="h-10 w-10" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground tracking-tight mb-2">
                    Want to know more?
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-md">
                    Download our detailed brochure for complete information about courses and admissions.
                  </p>
                </div>
              </div>
              <Button className="h-16 px-10 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground group">
                <Download className="mr-3 h-6 w-6 group-hover:translate-y-1 transition-transform" />
                <span className="text-lg font-bold">Download Brochure</span>
              </Button>
            </div>
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          </SpotlightCard>
        </div>
      </section>

      {/* Help Section */}
      <section className="mt-12 mb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-8 p-8 rounded-3xl border border-border bg-card/50">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Headset className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Need Help?</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Our admission team is here to help you!</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">+91 6262 604 111</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Call Us</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">admission@satpuda.ac.in</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Email Us</p>
              </div>
            </div>

            <div className="md:ml-auto">
              <Button variant="outline" className="rounded-xl px-8 border-primary/20 hover:border-primary/50 text-primary group">
                Contact Us <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
