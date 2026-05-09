"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Twitter, Instagram, Youtube, GraduationCap, Users, Building2, Trophy, BookOpen, Briefcase, ArrowRight, Play, CheckCircle2, Star, Quote } from "lucide-react";
// ============================================
// HEADER
// ============================================
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "/about",
      dropdown: ["Vision & Mission", "Management", "Infrastructure", "Accreditation"]
    },
    {
      label: "Academics",
      href: "/academics",
      dropdown: ["B.Tech Programs", "Polytechnic", "Faculty", "Syllabus"]
    },
    {
      label: "Admissions",
      href: "/admissions",
      dropdown: ["Eligibility", "Fee Structure", "Scholarships", "Apply Online"]
    },
    { label: "Placements", href: "/placements" },
    { label: "Contact", href: "/contact" },
  ];
  return (<header className="fixed top-0 left-0 right-0 z-50">
    {/* Top Bar */}
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 text-sm">
          <div className="hidden md:flex items-center gap-6">
            <a href="mailto:satpudaengineeringcollege@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span>satpudaengineeringcollege@gmail.com</span>
            </a>
            <a href="tel:+916262604111" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span>+91-6262604111</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline font-medium">Admission Open 2026-27</span>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="hover:opacity-80 transition-opacity"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="hover:opacity-80 transition-opacity"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="hover:opacity-80 transition-opacity"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Main Nav */}
    <nav className="bg-card/95 backdrop-blur-md border-b border-border">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white rounded-full p-1.5 shadow-sm overflow-hidden border border-white/20">
              <img src="/logo.png" alt="Satpuda College Logo" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-foreground text-sm lg:text-lg leading-tight uppercase tracking-tighter">
                <div className="parent  flex items-center gap-[5px]">
                  <div>Satpuda</div>
                <div>Engineering</div>
                <div>College</div>
                </div>
              </p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Satpuda College of Engineering & Polytechnic</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (<div key={item.label} className="relative group">
              <a href={item.href} className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary">
                {item.label}
                {item.dropdown && <ChevronDown className="h-4 w-4 opacity-50" />}
              </a>
              {item.dropdown && (<div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card rounded-xl shadow-xl border border-border p-2 min-w-[200px]">
                  {item.dropdown.map((subItem) => (<a key={subItem} href="#" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors">
                    {subItem}
                  </a>))}
                </div>
              </div>)}
            </div>))}
          </div>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
              Apply Now
            </Button>
            <button className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (<div className="lg:hidden bg-card border-t border-border">
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (<a key={item.label} href={item.href} className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
            {item.label}
          </a>))}
          <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
            Apply Now
          </Button>
        </div>
      </div>)}
    </nav>
  </header>);
}
// ============================================
// HERO SECTION
// ============================================
export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative pt-20 lg:pt-24 min-h-[90vh] flex items-center overflow-hidden font-inter">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-1.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0810]/95 via-[#4a0d1c]/80 to-[#4a0d1c]/20" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >

        <div className="max-w-5xl">

          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8 shadow-xl"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />

            <span className="text-xs tracking-widest font-semibold text-white/90 uppercase">
              AICTE Approved • RGPV Affiliated
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.0] tracking-[-0.03em] mb-8">

            <motion.span variants={itemVariants} className="block text-accent mb-4 text-lg sm:text-xl font-bold tracking-[0.2em] uppercase opacity-90">
              Welcome to
            </motion.span>

            <motion.span variants={itemVariants} className="block overflow-hidden">
              Satpuda College
            </motion.span>

            <motion.span variants={itemVariants} className="block overflow-hidden text-white/90">
              of Engineering and
            </motion.span>

            <motion.span variants={itemVariants} className="block overflow-hidden text-white/70">
              Polytechnic
            </motion.span>

          </h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-white/60 leading-relaxed max-w-2xl mb-10 font-medium tracking-normal"
          >
            Empowering future engineers with world-class education,
            advanced infrastructure, and outstanding placement opportunities since 1995.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 justify-start"
          >

            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 h-14 text-base font-bold rounded-xl shadow-2xl gap-2 transition-all duration-500 hover:scale-[1.02] active:scale-95"
            >
              Start Your Journey
              <ArrowRight className="h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 px-8 h-14 rounded-xl text-base gap-2 transition-all duration-500"
            >
              <Play className="h-4 w-4" />
              Watch Campus Tour
            </Button>

          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
// ============================================
// STATS BAR
// ============================================
export function StatsBar() {
  const stats = [
    { value: "25+", label: "Years of Excellence", icon: <Trophy className="h-6 w-6" /> },
    { value: "5000+", label: "Alumni Network", icon: <Users className="h-6 w-6" /> },
    { value: "95%", label: "Placement Rate", icon: <Briefcase className="h-6 w-6" /> },
    { value: "50+", label: "Top Recruiters", icon: <Building2 className="h-6 w-6" /> },
  ];
  return (<section className="relative z-20 -mt-16">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="bg-card/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/5 p-6 lg:p-10"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {stats.map((stat, index) => (<motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="text-center group"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-500">
              {stat.icon}
            </div>
            <p className="text-3xl lg:text-5xl font-bold text-foreground tracking-tighter">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">{stat.label}</p>
          </motion.div>))}
        </div>
      </motion.div>
    </div>
  </section>);
}
// ============================================
// ABOUT SECTION
// ============================================
export function AboutSection() {
  const features = [
    "State-of-the-art Infrastructure",
    "Experienced Faculty Members",
    "Industry Collaborations",
    "Research & Innovation Labs"
  ];
  return (<section className="py-24 bg-background">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Images */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden h-48 lg:h-72 shadow-2xl border border-white/5">
                <img src="/images/hero-1.jpg" alt="Campus" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden h-32 lg:h-48 shadow-2xl border border-white/5">
                <img src="/images/hero-4.jpg" alt="Library" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </motion.div>
            </div>
            <div className="space-y-6 pt-12">
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden h-32 lg:h-48 shadow-2xl border border-white/5">
                <img src="/images/hero-2.jpg" alt="Lab" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden h-48 lg:h-72 shadow-2xl border border-white/5">
                <img src="/images/hero-5.jpg" alt="Students" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </motion.div>
            </div>
          </div>
          {/* Floating Badge */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -bottom-8 -right-8 bg-accent text-accent-foreground rounded-[2rem] p-6 lg:p-10 shadow-[0_20px_50px_rgba(var(--accent),0.3)] border-4 border-background"
          >
            <p className="text-4xl lg:text-6xl font-black leading-none">25+</p>
            <p className="text-xs lg:text-sm font-bold uppercase tracking-widest mt-1 opacity-80">Years of Trust</p>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-4">
            About Our Institution
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-balance leading-[1.1] tracking-tight">
            Shaping Engineers of Tomorrow <br />
            <span className="text-white/40">Since 1995</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            At Satpuda College, we take pride in our state-of-the-art infrastructure,
            highly qualified faculty, and strong industry connections, ensuring top placements
            for our graduates.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {features.map((feature, index) => (<motion.div 
              key={index} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="flex items-center gap-4 group"
            >
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle2 className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm font-semibold text-foreground/80">{feature}</span>
            </motion.div>))}
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 h-16 px-10 rounded-2xl text-lg font-bold shadow-xl transition-all duration-300 hover:translate-y-[-4px]">
              Discover More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex items-center gap-4 text-sm text-muted-foreground group">
              <div className="w-12 h-12 rounded-full border-2 border-white/10 overflow-hidden group-hover:border-accent transition-colors duration-500">
                <img src="/images/hero-3.jpg" alt="AICTE" className="w-full h-full object-cover" />
              </div>
              <span className="font-semibold uppercase tracking-widest text-[10px]">AICTE Approved</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>);
}
// ============================================
// WHY CHOOSE US (3 BOXES)
// ============================================
export function WhyChooseUsSection() {
  const cards = [
    {
      icon: <BookOpen className="h-7 w-7" />,
      title: "Academic Excellence",
      description: "Satpuda College is committed to delivering top-notch technical education with state-of-the-art labs and experienced faculty."
    },
    {
      icon: <Briefcase className="h-7 w-7" />,
      title: "Placement Growth",
      description: "With a dedicated Training & Placement Cell, we ensure students are industry-ready for top multinational companies."
    },
    {
      icon: <Building2 className="h-7 w-7" />,
      title: "Campus Life",
      description: "From modern infrastructure to sports and hostel facilities, we provide a dynamic environment for development."
    }
  ];
  return (<section className="py-24 bg-background">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="inline-block text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-4">
          Why Choose Us
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-[1.1] tracking-tight">
          Building Skills, <br />
          <span className="text-white/40">Shaping Futures!</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((card, index) => (<motion.div 
          key={index} 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ y: -10 }}
          className="group bg-card/50 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-sm border border-white/5 hover:shadow-2xl hover:border-primary/30 transition-all duration-500"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
            {card.icon}
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">{card.title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-8 text-sm lg:text-base">{card.description}</p>
          <a href="#" className="inline-flex items-center gap-3 text-sm font-bold text-primary uppercase tracking-widest hover:text-accent transition-colors group/link">
            Apply Now
            <ArrowRight className="h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
          </a>
        </motion.div>))}
      </div>
    </div>
  </section>);
}
// ============================================
// PLACEMENTS SECTION
// ============================================
export function PlacementsSection() {
  const stats = [
    { icon: <Trophy className="h-6 w-6" />, value: "#1", label: "College of Choice" },
    { icon: <Users className="h-6 w-6" />, value: "3000+", label: "Students Placed" },
    { icon: <Building2 className="h-6 w-6" />, value: "200+", label: "Recruiting Companies" },
    { icon: <Star className="h-6 w-6" />, value: "Top", label: "Courses Available" },
  ];

  const companies = [
    { name: "Mahindra", logo: "/images/mahindra logo.png" },
    { name: "Suzuki", logo: "/images/suzuki logo.png" },
    { name: "Hero", logo: "/images/Hero logo.png" },
    { name: "Tata", logo: "/images/tata.png" },
    { name: "Apollo", logo: "/images/apollo logo.png" },
    { name: "Eicher", logo: "/images/eicher logo.png" },
    { name: "Volvo", logo: "/images/volvo logo.jpg" },
    { name: "MRF", logo: "/images/mrf.png" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.span variants={itemVariants} className="inline-block text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-4">
              Our Achievements
            </motion.span>
            
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-balance leading-[1.1] tracking-tight">
              Record Breaking <br />
              <span className="text-white/40">Placements</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed mb-12 text-lg max-w-xl">
              Take the first step towards a successful career with Satpuda College. Our institution is dedicated to nurturing young minds through 
              world-class education and industry-oriented training.
            </motion.p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-white/5 hover:border-primary/20 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{stat.value}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-16 px-10 rounded-2xl text-lg font-bold shadow-2xl transition-all duration-500 hover:translate-y-[-4px]">
                Call for Admission
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* Right - Orbiting Logos */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 py-20 lg:py-0">
            
            {/* Animated Orbit Rings */}
            <motion.div 
              className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Outer Rings */}
              <div className="absolute inset-0 rounded-full border border-white/5" />
              <div className="absolute inset-12 rounded-full border border-white/5" />
              <div className="absolute inset-24 rounded-full border border-white/5" />
              
              {/* Rotating Container */}
              <motion.div 
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                {companies.map((company, index) => {
                  const angle = (index * (360 / companies.length));
                  return (
                    <div 
                      key={company.name} 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{ 
                        transform: `rotate(${angle}deg) translate(${typeof window !== 'undefined' && window.innerWidth > 1024 ? 225 : 160}px) rotate(-${angle}deg)` 
                      }}
                    >
                      <motion.div 
                        className="w-14 h-14 lg:w-20 lg:h-20 bg-white rounded-full border border-white/10 shadow-2xl flex items-center justify-center p-3 lg:p-4 hover:border-primary/50 transition-all duration-300 group overflow-hidden"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      >
                        <img 
                          src={company.logo} 
                          alt={company.name} 
                          className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300" 
                        />
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

              {/* Center LPA - The Sun */}
              <motion.div 
                className="relative z-10 w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-accent flex flex-col items-center justify-center text-accent-foreground shadow-[0_0_80px_rgba(var(--accent),0.3)] border-4 border-background"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center">
                  <p className="text-4xl lg:text-6xl font-black leading-none tracking-tighter">4.20</p>
                  <p className="text-xs lg:text-sm font-bold uppercase tracking-[0.2em] mt-1">LPA</p>
                </div>
                <div className="absolute -bottom-4 bg-white text-[#02060d] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">
                  Highest Domestic
                </div>
              </motion.div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
// ============================================
// TESTIMONIALS
// ============================================
export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "B.Tech CSE, 2024",
      company: "Placed at TCS",
      quote: "The faculty and placement cell at Satpuda College helped me secure my dream job. The practical training was exceptional.",
      image: "/images/hero-2.jpg"
    },
    {
      name: "Priya Patel",
      role: "B.Tech Civil, 2023",
      company: "Placed at L&T",
      quote: "Amazing infrastructure and supportive environment. The college prepared me well for industry challenges.",
      image: "/images/hero-3.jpg"
    },
    {
      name: "Amit Kumar",
      role: "Diploma ME, 2024",
      company: "Placed at Suzuki",
      quote: "From hands-on workshops to industry visits, every experience at Satpuda shaped my career path.",
      image: "/images/hero-5.jpg"
    }
  ];
  return (<section className="py-24 bg-background">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="inline-block text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-4">
          Student Voices
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance leading-[1.1] tracking-tight">
          What Our <br />
          <span className="text-white/40">Students Say</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (<motion.div 
          key={index} 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ y: -10 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10 shadow-xl hover:bg-white/10 transition-all duration-500 group"
        >
          <Quote className="h-10 w-10 text-accent/30 mb-6 group-hover:text-accent transition-colors duration-500" />
          <p className="text-white/70 leading-relaxed mb-8 text-lg italic">
            {`"${testimonial.quote}"`}
          </p>
          <div className="flex items-center gap-5">
            <img src={testimonial.image} alt={testimonial.name} width={64} height={64} className="w-16 h-16 rounded-2xl object-cover border-2 border-white/10 group-hover:border-accent transition-colors duration-500" />
            <div>
              <p className="font-bold text-white text-lg leading-none mb-1">{testimonial.name}</p>
              <p className="text-xs text-white/50 uppercase tracking-widest">{testimonial.role}</p>
              <p className="text-xs text-accent font-bold mt-2 uppercase tracking-tighter">{testimonial.company}</p>
            </div>
          </div>
        </motion.div>))}
      </div>
    </div>
  </section>);
}
// ============================================
// CTA SECTION
// ============================================
export function CTASection() {
  return (<section className="py-24 bg-background relative overflow-hidden">
    {/* Decorative Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
    
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <div className="bg-card/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-12 lg:p-20 shadow-2xl">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-6 text-balance tracking-tighter uppercase">
          Ready to Shape Your Future?
        </h2>
        <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
          Join thousands of successful engineers who started their journey at Satpuda College.
          Admissions for 2026-27 are now open!
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 h-16 text-lg font-bold rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02]">
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 px-10 h-16 rounded-2xl text-lg transition-all duration-300">
            Download Brochure
          </Button>
        </div>
      </div>
    </div>
  </section>);
}
// ============================================
// MAP SECTION
// ============================================
export function MapSection() {
  return (<section className="bg-background">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-2">Locate Us</h2>
        <p className="text-muted-foreground">Lalbarra - Balaghat Road, Manegaon, Balaghat (M.P.)</p>
      </div>
    </div>
    <div className="h-96 w-full">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.5!2d80.165!3d21.875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSatpuda+College+of+Engineering!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="grayscale hover:grayscale-0 transition-all duration-500" />
    </div>
  </section>);
}
// ============================================
// FOOTER
// ============================================
export function Footer() {
  const links = {
    ourCampuses: ["About Us", "Library", "Transport", "Gallery"],
    importantLinks: ["AICTE", "AICTE Scholarship/Fellowship", "MP DTE", "SCHOLARSHIP", "RGPV, Bhopal"],
    admissions: ["Privacy Policy", "Anti-Ragging Affidavit", "Mandatory Disclosure", "Fee Structure"],
    institutions: ["Satpuda Valley Public School", "Satpuda ITI", "Satpuda Polytechnic", "Job Sahi"]
  };
  return (<footer className="bg-background border-t border-white/5 text-foreground">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
      >
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full p-1.5 shadow-sm overflow-hidden">
              <img src="/logo.png" alt="Satpuda College Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="font-bold text-base uppercase tracking-tighter">Satpuda College</p>
              <p className="text-[10px] opacity-70 uppercase tracking-widest">Est. 1995</p>
            </div>
          </div>
          <p className="text-sm opacity-70 mb-6">
            Excellence in Engineering Education
          </p>
          <div className="flex items-center gap-3">
            {Object.entries({ Facebook, Instagram, Twitter, Youtube }).map(([name, Icon], i) => (
              <motion.a 
                key={name}
                href="#" 
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Links Columns */}
        {[
          { title: "Our Campuses", items: links.ourCampuses },
          { title: "Important Links", items: links.importantLinks },
          { title: "Admissions", items: links.admissions },
          { title: "Our Institutions", items: links.institutions },
        ].map((col, i) => (
          <motion.div 
            key={col.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h4 className="font-bold uppercase tracking-widest text-[10px] mb-6 text-white/40">{col.title}</h4>
            <ul className="space-y-3">
              {col.items.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Copyright */}
    <div className="border-t border-white/5 bg-black/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-[10px] text-center opacity-40 uppercase tracking-[0.3em]">
          Copyright © 2026 Satpuda College of Engineering & Polytechnic Balaghat (M.P.)
        </p>
      </div>
    </div>
  </footer>);
}
