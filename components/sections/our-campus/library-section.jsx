"use client";

import { motion } from "framer-motion";
import { useState } from "react";
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
} from "lucide-react";
import BlurText from "../../bits/blur-text.jsx";
import Magnetic from "../../bits/magnetic.jsx";
import ShinyText from "../../bits/shiny-text.jsx";

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
    image: "/images/overview/student in class.png",
  },
  {
    title: "Silent Zone",
    description: "Peaceful environment for deep focus and concentration.",
    image: "/images/overview/campus overview.png",
  },
  {
    title: "Digital Library",
    description: "Computers with digital access to global knowledge.",
    image: "/images/overview/student in lab.png",
  },
  {
    title: "Reading Lounge",
    description: "Relax, read and refresh in our comfortable lounge.",
    image: "/images/overview/smart library.png",
  },
];

export function LibrarySection() {
  const [shelfFocus, setShelfFocus] = useState(50);
  const [isDraggingShelf, setIsDraggingShelf] = useState(false);

  const updateShelfFocus = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    setShelfFocus(Math.min(100, Math.max(0, x)));
  };

  const handleShelfDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDraggingShelf(true);
    updateShelfFocus(event);
  };

  const handleShelfMove = (event) => {
    if (!isDraggingShelf) {
      return;
    }
    updateShelfFocus(event);
  };

  const handleShelfUp = () => {
    setIsDraggingShelf(false);
  };

  return (
    <main className="bg-background pb-20">
      <motion.section
        className="relative overflow-hidden border-b border-border/70 bg-card/40 pt-32 pb-10 lg:pt-28 lg:pb-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.08),transparent_55%)]" />
        <div className="absolute right-0 top-0 hidden h-full w-[46%] opacity-30 lg:block">
          <img src="/images/overview/smart library.png" alt="Library sketch" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-end lg:px-8">
          <div>
            <h1 className="pt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Library & Learning Resources
            </h1>
            <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary via-primary/70 to-accent" />
            <BlurText
              text="A knowledge hub that empowers minds, fuels curiosity, and supports academic excellence."
              className="mt-6 max-w-xl text-base text-muted-foreground"
            />
          </div>
          <div className="justify-self-start text-sm font-medium text-muted-foreground lg:justify-self-end">
            <span>Home</span>
            <span className="mx-2 text-muted-foreground/60">/</span>
            <span>Our Campus</span>
            <span className="mx-2 text-muted-foreground/60">/</span>
            <span className="text-foreground">Library</span>
          </div>
        </div>
      </motion.section>

      <section className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-border/60 bg-card/70 px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          {highlightChips.map((chip) => (
            <span key={chip} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
              {chip}
            </span>
          ))}
        </div>
      </section>

      <motion.section
        className="mx-auto mt-10 grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr,1fr] lg:items-stretch lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="rounded-[28px] border border-border/60 bg-card/80 p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">About Our Library</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">A Space for Learning, A Lifetime of Growth</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our library is more than a collection of books. It is a dynamic space for learning, research, collaboration, and
            academic enrichment with curated resources for every learner&apos;s journey.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {aboutCards.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-background/80 p-4 text-center shadow-sm">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-3 text-sm font-semibold text-foreground">{title}</p>
                <p className="mt-2 text-xs text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-72 overflow-hidden rounded-[28px] border border-border bg-card shadow-sm sm:h-[360px] lg:h-[420px] lg:justify-self-center">
          <img
            src="/images/overview/smart library.png"
            alt="Library interior"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">What We Offer</p>
          <h3 className="mt-3 text-3xl font-bold text-foreground">Library Features</h3>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-border/60 bg-background/80 p-4 text-center shadow-sm">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-3 text-sm font-semibold text-foreground">{title}</p>
              <p className="mt-2 text-xs text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="group relative overflow-hidden rounded-[32px] border border-border/60 bg-card/80 p-6 shadow-sm sm:p-8">
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              backgroundImage: "url('/images/overview/smart library.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              maskImage: `radial-gradient(circle at ${shelfFocus}% 50%, rgba(0,0,0,0.9), transparent 60%)`,
              WebkitMaskImage: `radial-gradient(circle at ${shelfFocus}% 50%, rgba(0,0,0,0.9), transparent 60%)`,
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{
              background: `radial-gradient(circle at ${shelfFocus}% 50%, rgba(59,130,246,0.22), transparent 55%)`,
            }}
          />
          <div className="relative grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Interactive Highlight</p>
              <h3 className="mt-3 text-3xl font-bold text-foreground">Move to light up the knowledge shelf</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Hover across the shelf to reveal resource clusters and discover how knowledge flows through our library.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
                  Live Shelf Map
                </span>
                <span className="rounded-full border border-border/60 bg-background/80 px-4 py-1 text-xs font-semibold text-muted-foreground">
                  6 Learning Zones
                </span>
                <span className="rounded-full border border-border/60 bg-background/80 px-4 py-1 text-xs font-semibold text-muted-foreground">
                  18 Research Pods
                </span>
              </div>
            </div>
            <div
              className="relative h-48 overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-5 sm:h-56"
              onPointerMove={handleShelfMove}
              onPointerUp={handleShelfUp}
              onPointerLeave={handleShelfUp}
            >
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(37,99,235,0.08)_0%,rgba(37,99,235,0.08)_10%,transparent_10%,transparent_20%)] bg-[length:80px_100%]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.25)_0%,rgba(148,163,184,0.25)_12%,transparent_12%,transparent_24%)] bg-[length:140px_100%] opacity-60" />
              <div
                role="slider"
                aria-label="Shelf focus"
                tabIndex={0}
                className={`absolute top-5 h-28 w-16 rounded-2xl bg-gradient-to-b from-primary/80 via-primary/60 to-primary/30 shadow-[0_20px_50px_rgba(37,99,235,0.35)] transition-transform ${
                  isDraggingShelf ? "scale-[1.02]" : ""
                }`}
                style={{ left: `calc(${shelfFocus}% - 32px)` }}
                onPointerDown={handleShelfDown}
              />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs font-semibold text-muted-foreground">
                <span>New Arrivals</span>
                <span>Research</span>
                <span>E-Resources</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="rounded-[28px] border border-border/60 bg-card/70 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Library at a Glance</p>
              <h3 className="mt-3 text-3xl font-bold text-foreground">Resources that Inspire Success</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Our library continuously grows to meet the academic needs of students, faculty, and researchers.
              </p>
              <Magnetic intensity={0.2}>
                <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
                  Explore Collection
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Magnetic>
            </div>
            <div className="grid gap-3 rounded-3xl border border-border/40 bg-muted/30 p-4 sm:grid-cols-2 lg:grid-cols-3">
              {glanceStats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/80 px-4 py-4 transition-all duration-300 hover:-translate-y-[2px]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold leading-none text-foreground tracking-tighter">
                      <ShinyText text={value} speed={3} color="rgba(59, 130, 246, 0.85)" />
                    </p>
                    <p className="mt-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Spaces Designed for You</p>
          <h3 className="mt-3 text-3xl font-bold text-foreground">Study. Focus. Achieve.</h3>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {spaces.map((space) => (
            <div key={space.title} className="overflow-hidden rounded-3xl border border-border/60 bg-card/80 shadow-sm">
              <div className="h-36 overflow-hidden">
                <img src={space.image} alt={space.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <p className="text-base font-semibold text-foreground">{space.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{space.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center gap-6 rounded-[32px] border border-border/60 bg-card/70 p-6 sm:flex-row sm:p-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Sparkles className="h-9 w-9" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Need Help?</p>
            <h3 className="mt-3 text-2xl font-bold text-foreground">We&apos;re Here to Help You Learn Better</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our library team is always ready to assist you in finding the right resources for your academic journey.
            </p>
          </div>
          <Magnetic intensity={0.2}>
            <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Ask a Librarian
              <ArrowRight className="h-4 w-4" />
            </button>
          </Magnetic>
        </div>
      </motion.section>
    </main>
  );
}
