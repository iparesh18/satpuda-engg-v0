import { ArrowRight, BookOpen, Building2, Users, Trophy, Briefcase, Sparkles, GraduationCap } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
    <section className="bg-[#f6f5ff] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* About Overview Hero */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-muted-foreground mb-4"
            >
              Home / About / Overview
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight"
            >
              About
              <br />
              <span className="text-[#5b5bd6]">Overview</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-4 text-slate-600 max-w-lg"
            >
              Empowering Future Engineers with Knowledge, Innovation & Excellence.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6"
            >
              <Button 
                className="bg-[#5b5bd6] hover:bg-[#4d4dc3] text-white rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5b5bd6]/30 group"
              >
                Explore Our Campus
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              className="rounded-3xl overflow-hidden shadow-2xl border border-white/70"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.img
                src="/images/overview/campus overview.png"
                alt="Campus overview"
                className="w-full h-[340px] sm:h-[380px] object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 right-6 bg-white shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 border border-slate-100"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="h-10 w-10 rounded-full bg-[#5b5bd6]/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-[#5b5bd6]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Excellence</div>
                <div className="text-xs text-slate-500">Since 24+ Years</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

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
              className="inline-flex items-center gap-2 bg-white text-[#5b5bd6] text-xs font-semibold tracking-widest px-3 py-1 rounded-full border border-[#5b5bd6]/10 shadow-sm"
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
                <span className="text-[#5b5bd6]">Building Tomorrow.</span>
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
                  className="bg-white rounded-2xl p-4 shadow-sm border border-white/60 group hover:border-[#5b5bd6]/30 hover:shadow-md transition-all cursor-default"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    className="h-10 w-10 rounded-xl bg-[#5b5bd6]/10 flex items-center justify-center group-hover:bg-[#5b5bd6] transition-colors"
                  >
                    <item.icon className="h-5 w-5 text-[#5b5bd6] group-hover:text-white transition-colors" />
                  </motion.div>
                  <div className="mt-3 text-sm font-semibold text-slate-900 group-hover:text-[#5b5bd6] transition-colors">{item.title}</div>
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
              className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4]"
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
              className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] mt-8"
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
              <div className="text-[#5b5bd6] font-semibold tracking-wide flex items-center gap-2">
                <div className="h-[1px] w-8 bg-[#5b5bd6]" />
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
                  className="bg-white rounded-2xl p-5 shadow-sm border border-white/60 group hover:border-[#5b5bd6]/20 hover:shadow-xl transition-all"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="h-10 w-10 rounded-xl bg-[#5b5bd6]/10 flex items-center justify-center group-hover:bg-[#5b5bd6] transition-colors"
                  >
                    <item.icon className="h-5 w-5 text-[#5b5bd6] group-hover:text-white transition-colors" />
                  </motion.div>
                  <div className="mt-3 text-sm font-semibold text-slate-900 group-hover:text-[#5b5bd6] transition-colors">{item.title}</div>
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
            className="mt-10 bg-[#5b5bd6] rounded-3xl px-6 py-10 text-white relative overflow-hidden group shadow-2xl shadow-[#5b5bd6]/20"
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
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 h-auto lg:h-[600px]">
            {lifeCards.map((card, index) => (
              <motion.div 
                key={card.title} 
                className={`group relative rounded-3xl overflow-hidden shadow-sm border border-white/60 bg-slate-100 ${card.span}`}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
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
                className="h-[1px] w-12 bg-[#5b5bd6]/30"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 1 }}
              />
              <span className="text-[#5b5bd6] text-xs font-bold tracking-widest uppercase">Gallery</span>
            </div>
          </motion.div>
          
          <div className="mt-8 grid lg:grid-cols-[2fr_1fr] gap-6">
            <motion.div 
              className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white group relative h-[300px] sm:h-[450px]"
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
                className="rounded-3xl overflow-hidden shadow-xl border-4 border-white group relative h-[210px]"
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
                className="rounded-3xl overflow-hidden shadow-xl border-4 border-white group relative h-[210px]"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
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
    </section>
  );
}
