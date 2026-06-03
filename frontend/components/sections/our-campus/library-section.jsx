"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Layers,
  Users,
  ShieldCheck,
  Wifi,
  Search,
  GraduationCap,
  Library,
  Sparkles,
  ArrowRight,
  Bookmark,
  Star,
  Zap,
  Coffee,
  Globe
} from "lucide-react";
import BlurText from "../../bits/blur-text.jsx";
import Magnetic from "../../bits/magnetic.jsx";
import SplitText from "../../bits/split-text.jsx";
import ShinyText from "../../bits/shiny-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";

const highlightChips = [
  "Massive Collection",
  "Digital Library",
  "Quiet Study Spaces",
  "Research Support",
  "Learning Empowerment",
];

const aboutCards = [
  {
    icon: BookOpen,
    title: "Books & Journals",
    description: "Extensive collection for reference and research.",
  },
  {
    icon: Search,
    title: "Digital Access",
    description: "Online resources, databases, and e-books.",
  },
  {
    icon: Users,
    title: "Study Spaces",
    description: "Peaceful, focused areas for learning.",
  },
];

const features = [
  { icon: Library, title: "Large Collection", description: "Thousands of books and journals." },
  { icon: Layers, title: "E-Resources", description: "Access to e-books and databases." },
  { icon: BookOpen, title: "Reading Area", description: "Calm and comfortable reading zones." },
  { icon: GraduationCap, title: "Research Support", description: "Guidance for students and faculty." },
  { icon: Wifi, title: "Wi-Fi Access", description: "Seamless connectivity across the library." },
  { icon: ShieldCheck, title: "Public Access", description: "Open access for learning and discovery." },
];

const glanceStats = [
  { icon: BookOpen, label: "Books", value: "25000+" },
  { icon: Library, label: "Journals", value: "120+" },
  { icon: Layers, label: "E-Books", value: "5000+" },
  { icon: ShieldCheck, label: "Magazines", value: "50+" },
  { icon: Search, label: "Databases", value: "30+" },
  { icon: Users, label: "Daily Visitors", value: "100+" },
];

const spaces = [
  {
    title: "Group Study Area",
    description: "Collaborate and learn together in well-designed spaces.",
    image: "/images/overview/student in class.webp",
  },
  {
    title: "Silent Zone",
    description: "Peaceful environment for deep focus and concentration.",
    image: "/images/overview/silent-st.webp",
  },
  {
    title: "Digital Library",
    description: "Computers with digital access to global knowledge.",
    image: "/images/overview/dig-lib-st.webp",
  },
  {
    title: "Reading Lounge",
    description: "Relax, read and refresh in our comfortable lounge.",
    image: "/images/overview/learn-lib-st.webp",
  },
];

export function LibrarySection() {

  return (
    <main className="bg-background pb-6 sm:pb-8 lg:pb-10">
      <motion.section
        className="relative overflow-hidden border-b border-border/70 bg-card/40 pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-20 lg:pb-24"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.1),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:100px_100px]" />
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
                The Knowledge Hub
              </motion.div>
              
              <SplitText
                text="Library & Learning Resources"
                className="text-5xl font-bold text-foreground sm:text-7xl lg:text-8xl tracking-tighter"
                delay={0.08}
              />
              <div className="mt-8 h-2 w-32 rounded-full bg-gradient-to-r from-primary via-primary/70 to-accent" />
              <p className="mt-10 max-w-xl text-xl text-muted-foreground leading-relaxed">
                <BlurText text="A sanctuary of wisdom that empowers minds, fuels curiosity, and supports academic excellence through a world-class collection." />
              </p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-12 flex flex-wrap gap-4"
              >
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("digital-archive-discovery")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-5 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 group inline-flex items-center gap-2"
                >
                  Explore Collection
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground ml-2">
                  <span>Our Campus</span>
                  <span className="text-muted-foreground/30">/</span>
                  <span className="text-foreground">Library</span>
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
                  src="/images/overview/e-library-st.jpeg"
                  alt="Library Hero"
                  className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <div className="absolute bottom-10 left-10 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-2 w-2 rounded-full bg-primary animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">Live Now</span>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight">Main Reading Hall</h3>
                </div>
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
                    <Bookmark className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-foreground tracking-tight">Resources</div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">25,000+ Collection</div>
                  </div>
                </motion.div>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[40px] border border-border/40 bg-card/40 backdrop-blur-md p-6 shadow-2xl sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 bg-primary/10 rounded-full blur-3xl opacity-50" />
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
            {highlightChips.map((chip) => (
              <Magnetic key={chip} intensity={0.2}>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/40 backdrop-blur-sm px-5 py-2.5 transition-all hover:bg-background/80 hover:border-primary/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {chip}
                </span>
              </Magnetic>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className="mx-auto mt-20 grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-start lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="rounded-[40px] border border-border/40 bg-card/40 backdrop-blur-md p-8 shadow-2xl sm:p-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 bg-primary/5 rounded-full blur-3xl" />
          
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">About Our Library</p>
          <h2 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl tracking-tight">A Space for Learning, A Lifetime of Growth</h2>
          <BlurText
            text="Our library is more than a collection of books. It is a dynamic space for learning, research, collaboration, and academic enrichment with curated resources for every learner's journey."
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          />
          
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {aboutCards.map(({ icon: Icon, title, description }) => (
              <SpotlightCard key={title} className="group rounded-[2rem] border-none bg-background/40 p-6 transition-all hover:-translate-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-foreground transition-colors group-hover:text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <motion.div 
            className="overflow-hidden rounded-[40px] border border-border/40 bg-card shadow-2xl group relative"
            whileHover={{ y: -8 }}
          >
            <img src="/images/overview/lib-intro-st.webp" alt="Library Culture" className="h-80 w-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <p className="text-sm font-bold tracking-widest uppercase mb-1">Academic Sanctuary</p>
              <h4 className="text-2xl font-bold">Deep Focus Environments</h4>
            </div>
          </motion.div>
          
          <div className="rounded-[40px] border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/5 p-8 backdrop-blur-xl">
            <Sparkles className="h-8 w-8 text-primary mb-4" />
            <h4 className="text-xl font-bold text-foreground">Premium Access</h4>
            <p className="mt-2 text-muted-foreground">Unlimited access to international journals, e-books, and high-speed research networks.</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="digital-archive-discovery"
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">What We Offer</p>
          <h3 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl tracking-tight">Library Features</h3>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <SpotlightCard key={title} className="group rounded-[2.5rem] border-none bg-card/40 p-8 transition-all hover:-translate-y-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>
              <h4 className="mt-6 text-xl font-bold text-foreground transition-colors group-hover:text-primary">{title}</h4>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
            </SpotlightCard>
          ))}
        </div>
      </motion.section>



      {/* Library Experience Video Section */}
      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary/40" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
                Our Library Experience
              </span>
              <div className="h-px w-12 bg-primary/40" />
            </div>
            <BookOpen className="h-4 w-4 text-primary mt-2 opacity-80" />
          </div>
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl tracking-tight mb-4">
            Explore Our Knowledge Hub
          </h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-6">
            Discover, Learn & Grow Beyond Classrooms
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our library serves as the intellectual heart of the campus, providing students with access to extensive academic resources, digital learning materials, research journals, and a peaceful study environment. Explore our modern facilities through the virtual tour below and experience a space designed to inspire knowledge, innovation, and academic excellence.
          </p>
        </div>

        <div className="relative rounded-[2rem] sm:rounded-[3rem] p-2 bg-gradient-to-b from-primary/40 to-primary/5 shadow-2xl mx-auto max-w-5xl">
          <div className="absolute inset-0 bg-primary/10 rounded-[2rem] sm:rounded-[3rem] blur-xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] border border-primary/20 bg-card aspect-video shadow-2xl">
            <video 
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/library tour.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="rounded-[40px] border border-border/40 bg-card/40 backdrop-blur-md p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr,1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Library at a Glance</p>
              <h3 className="mt-4 text-4xl font-bold text-foreground tracking-tight leading-tight">Resources that Inspire Success</h3>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Our library continuously grows to meet the academic needs of students, faculty, and researchers.
              </p>
            
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {glanceStats.map(({ icon: Icon, value, label }) => (
                <SpotlightCard
                  key={label}
                  className="group flex flex-col items-center justify-center rounded-[2.5rem] border-none bg-background/40 p-8 text-center transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="mt-6">
                    <p className="text-3xl font-black text-foreground tracking-tighter">
                      <ShinyText text={value} speed={3} color="#d60b0b" />
                    </p>
                    <p className="mt-2 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{label}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Spaces Designed for You</p>
          <h3 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl tracking-tight">Study. Focus. Achieve.</h3>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {spaces.map((space) => (
            <SpotlightCard key={space.title} className="group overflow-hidden rounded-[2.5rem] border-none bg-card/40 p-0 shadow-2xl transition-all hover:-translate-y-2">
              <div className="h-48 overflow-hidden relative">
                <img src={space.image} alt={space.title} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8">
                <p className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{space.title}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{space.description}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 lg:mb-10"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center gap-10 rounded-[40px] border border-border/40 bg-card/40 backdrop-blur-xl p-8 sm:flex-row sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 -mt-20 -ml-20 h-64 w-64 bg-primary/20 rounded-full blur-3xl opacity-30" />
          
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-inner">
            <Sparkles className="h-12 w-12" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.5em] text-primary mb-3">Need Help?</p>
            <h3 className="text-3xl font-bold text-foreground tracking-tight sm:text-4xl">We&apos;re Here to Help You Learn Better</h3>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Our library team is always ready to assist you in finding the right resources for your academic journey.
            </p>
          </div>
          <Magnetic intensity={0.3}>
            <Link to="/contact" className="group relative inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground transition-all hover:pr-12 shadow-xl shadow-primary/20">
              Ask a Librarian
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Magnetic>
        </div>
      </motion.section>
    </main>
  );
}

