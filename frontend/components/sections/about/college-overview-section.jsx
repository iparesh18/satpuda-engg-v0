import { ArrowRight, BookOpen, Building2, Users, Trophy, Briefcase, Sparkles, GraduationCap } from "lucide-react";
import { Button } from "../../ui/button";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SplitText from "../../bits/split-text.jsx";
import BlurText from "../../bits/blur-text.jsx";

function CountingNumber({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ""));
  
  const spring = useSpring(0, {
    duration: 2000,
    bounce: 0,
  });
  
  const displayValue = useTransform(spring, (current) => 
    Math.floor(current).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, spring, numericValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export function CollegeOverviewSection() {
  const featureCards = [
    {
      title: "Industry Oriented Curriculum",
      description: "Career-ready programs aligned with evolving industry needs.",
      icon: BookOpen,
    },
    {
      title: "Modern Labs & Infrastructure",
      description: "Hands-on practice with advanced tools and facilities.",
      icon: Building2,
    },
    {
      title: "Experienced Faculty",
      description: "Mentors with strong academic and practical expertise.",
      icon: Users,
    },
  ];

  const excellenceItems = [
    {
      title: "24+ Years of Academic Excellence",
      description: "A legacy of quality education and successful graduates.",
      icon: Trophy,
    },
    {
      title: "Hands-on Learning & Innovation",
      description: "Workshops, labs, and projects for real-world exposure.",
      icon: Sparkles,
    },
    {
      title: "Strong Industry Connections",
      description: "Training, internships, and placement support.",
      icon: Briefcase,
    },
  ];

  const stats = [
    { value: "24+", label: "Years of Excellence" },
    { value: "2500+", label: "Students Enrolled" },
    { value: "15+", label: "Modern Labs" },
    { value: "100+", label: "Expert Faculty" },
  ];

  const lifeCards = [
    {
      title: "Smart Library",
      description: "A rich collection of resources for knowledge and research.",
      image: "/images/overview/smart library.png",
      span: "lg:col-span-2 lg:row-span-2",
    },
    {
      title: "Advanced Labs",
      description: "Hands-on practice with modern technology.",
      image: "/images/overview/student in lab.png",
      span: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Sports & Activities",
      description: "Encouraging sportsmanship and teamwork.",
      image: "/images/overview/sports and activity.png",
      span: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Events & Culture",
      description: "Celebrating talent, culture, and creativity.",
      image: "/images/overview/event and culture.png",
      span: "lg:col-span-2 lg:row-span-1",
    },
  ];

  return (
    <main className="bg-background min-h-screen">
      {/* Premium Hero Section */}
      <motion.section
        className="relative overflow-hidden border-b border-border/70 bg-card/40 pt-16 pb-16 sm:pt-20 lg:pt-24 lg:pb-24"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-y-0 right-0 w-full sm:w-4/5 lg:w-[52%] opacity-10">
          <img
            src="/images/overview/campus overview.png"
            alt="Campus backdrop"
            className="h-full w-full object-cover object-right"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/96 to-background/88 lg:from-background lg:via-background/90 lg:to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:items-start">
            {/* Left Column: Text Content */}
            <div className="relative z-10">
              <SplitText
                text="College Overview"
                className="text-5xl font-bold text-foreground sm:text-7xl pt-3 tracking-tighter"
                delay={0.08}
              />
              <div className="mt-6 h-1.5 w-32 rounded-full bg-linear-to-r from-primary via-primary/70 to-accent" />
              <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
                <BlurText text="Empowering future engineers with knowledge, innovation, and academic excellence since 24+ years." />
              </p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-12 flex flex-wrap gap-4"
              >
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-7 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 group"
                >
                  Explore Our Campus
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground ml-2">
                  <span>Home</span>
                  <span className="text-muted-foreground/30">/</span>
                  <span className="text-foreground">Overview</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Featured Image with Badge */}
            <motion.div 
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-card">
                <motion.img
                  src="/images/overview/campus overview.png"
                  alt="Campus overview"
                  className="w-full h-125 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Excellence Badge */}
              <motion.div 
                className="absolute -bottom-10 -left-10 bg-card shadow-2xl rounded-4xl p-8 flex items-center gap-5 border border-border/50 backdrop-blur-xl"
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
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-black text-foreground tracking-tight">Excellence</div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Since 24+ Years</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-background pb-20">


        {/* Who We Are */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-white text-primary text-xs font-semibold tracking-widest px-3 py-1 rounded-full border border-primary/10 shadow-sm"
            >
              <Sparkles className="h-3 w-3" />
              WHO WE ARE
            </motion.div>
            <div className="overflow-hidden">
              <motion.h3 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900"
              >
                Shaping Engineers,
                <br />
                <span className="text-primary">Building Tomorrow.</span>
              </motion.h3>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-4 text-slate-600 leading-relaxed"
            >
              Satpuda College of Engineering & Polytechnic is dedicated to providing
              industry-focused education, modern infrastructure, and research-driven
              opportunities.
            </motion.p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {featureCards.map((item, index) => (
                <motion.div 
                  key={item.title} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-white/60 group hover:border-primary/30 hover:shadow-md transition-all cursor-default"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors"
                  >
                    <item.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                  <div className="mt-3 text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors">{item.title}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "backOut" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-3/4"
            >
              <img
                src="/images/overview/student in class.png"
                alt="Students in class"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: "backOut" }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-3/4 mt-8"
            >
              <img
                src="/images/overview/student in lab.png"
                alt="Students lab"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>

        {/* Experience Excellence */}
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-primary font-semibold tracking-wide flex items-center gap-2">
                <div className="h-px w-8 bg-primary" />
                Experience Excellence at
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
                Satpuda College
              </h3>
              <p className="mt-3 text-slate-600 max-w-xl">
                We focus on innovation, practical learning and overall development of our students.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-4">
              {excellenceItems.map((item, index) => (
                <motion.div 
                  key={item.title} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-white/60 group hover:border-primary/20 hover:shadow-xl transition-all"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors"
                  >
                    <item.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                  <div className="mt-3 text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors">{item.title}</div>
                  <div className="mt-2 text-xs text-slate-500 line-clamp-2">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 bg-linear-to-r from-primary to-accent rounded-3xl px-6 py-10 text-white relative overflow-hidden group shadow-2xl shadow-primary/20"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 bg-white/10 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-150" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-40 w-40 bg-black/10 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-150" />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center relative z-10">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold mb-1">
                    <CountingNumber 
                      value={stat.value} 
                      suffix={stat.value.includes("+") ? "+" : ""} 
                    />
                  </div>
                  <div className="text-xs text-white/70 uppercase tracking-widest font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Life at Satpuda */}
        <div className="mt-20">
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">Life at Satpuda</h3>
          </motion.div>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 h-auto lg:h-150">
            {lifeCards.map((card, index) => (
              <motion.div 
                key={card.title} 
                className={`group relative rounded-3xl overflow-hidden shadow-sm border border-white/60 bg-slate-100 h-64 lg:h-auto ${card.span}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.img 
                  src={card.image} 
                  alt={card.title} 
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 p-6 text-white translate-y-6 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <div className="text-xl font-bold">{card.title}</div>
                  <div className="text-sm text-white/80 mt-2 line-clamp-2">{card.description}</div>
                  <motion.div 
                    className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
                    whileHover={{ x: 5 }}
                  >
                    View Details <ArrowRight className="h-3 w-3" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Campus */}
        <div className="mt-20">
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Campus</h3>
              <p className="text-slate-500 text-sm mt-1">Exploring the environment where innovation thrives.</p>
            </div>
              <div className="hidden sm:flex items-center gap-2">
              <motion.div 
                className="h-px w-12 bg-primary/30"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 1 }}
              />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Gallery</span>
            </div>
          </motion.div>
          
          <div className="mt-8 grid lg:grid-cols-[2fr_1fr] gap-6">
            <motion.div 
              className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white group relative h-75 sm:h-112.5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ skewY: 0.5 }}
            >
              <img
                src="/images/overview/campus view.png"
                alt="Campus view"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              <div className="absolute bottom-6 left-6">
                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-slate-900 shadow-xl">
                  Main Entrance & Greenery
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-rows-2 gap-6">
              <motion.div 
                className="rounded-3xl overflow-hidden shadow-xl border-4 border-white group relative h-52.5"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ rotate: -1 }}
              >
                <img
                  src="/images/overview/college bus.png"
                  alt="Campus bus"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </motion.div>
              <motion.div 
                className="rounded-3xl overflow-hidden shadow-xl border-4 border-white group relative h-52.5"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ rotate: 1 }}
              >
                <img
                  src="/images/overview/campus building.png"
                  alt="Campus building"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

