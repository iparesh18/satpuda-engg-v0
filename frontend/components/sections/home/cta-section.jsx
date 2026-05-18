"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Newspaper, ArrowRight, Calendar } from "lucide-react";
import { SectionHeading } from "./section-heading.jsx";

/* ─── News / Event card data ─────────────────────────────────────────────── */
const newsItems = [
  {
    id: 1,
    category: "Tech Fest",
    categoryColor: "text-primary",
    tag: "Event",
    title: "Free Webinar on Time Management Successfully Conducted",
    author: "admin",
    date: "Apr 2024",
    image: "/images/banner1.jpeg",
  },
  {
    id: 2,
    category: "Mechanical",
    categoryColor: "text-accent",
    tag: "Visit",
    title: "Industrial Visit to Malajkhand Mines by Mechanical Department",
    author: "admin",
    date: "Mar 2024",
    image: "/images/hero-3.jpg",
  },
  {
    id: 3,
    category: "Civil",
    categoryColor: "text-primary",
    tag: "News",
    title: "Civil Engineering Students Initiate Drainage Project in Campus",
    author: "admin",
    date: "Feb 2024",
    image: "/images/banner2.jpeg",
  },
  {
    id: 4,
    category: "Civil",
    categoryColor: "text-accent",
    tag: "Achievement",
    title: "Educational & Industrial Visit Conducted by Civil & Mining Dept.",
    author: "admin",
    date: "Jan 2024",
    image: "/images/banner0.jpeg",
  },
  {
    id: 5,
    category: "CSE",
    categoryColor: "text-primary",
    tag: "Event",
    title: "Annual Hackathon 2024 — Students Build Innovative Solutions",
    author: "admin",
    date: "Dec 2023",
    image: "/images/banner3.jpeg",
  },
  {
    id: 6,
    category: "Campus",
    categoryColor: "text-accent",
    tag: "Achievement",
    title: "Satpuda Polytechnic Achieves State Rank in GATE 2024",
    author: "admin",
    date: "Nov 2023",
    image: "/images/hero-5.jpg",
  },
];

/* duplicate for seamless loop */
const marqueeTrack = [...newsItems, ...newsItems];

/* ─── Component ──────────────────────────────────────────────────────────── */
export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-background py-14 sm:py-16 lg:py-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[110px]" />

      <div className="relative z-10">
        {/* ── Heading ─────────────────────────────────────────────────── */}
        <motion.div
          className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Campus Highlights"
            title="Satpuda Pulse: Events & News"
            description="Stay updated with the latest campus highlights, technical breakthroughs, and upcoming events. Immerse yourself in the vibrant life of Satpuda College."
            highlights={["Satpuda Pulse", "Events & News"]}
          />
        </motion.div>

        {/* ── Marquee track ────────────────────────────────────────────── */}
        <div className="relative w-full overflow-hidden">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent sm:w-32" />

          <motion.div
            className="flex w-max items-stretch gap-5 py-4 will-change-transform sm:gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 42 }}
          >
            {marqueeTrack.map((item, index) => (
              <NewsCard key={`${item.id}-${index}`} item={item} />
            ))}
          </motion.div>
        </div>

        {/* ── CTA button ──────────────────────────────────────────────── */}
        <motion.div
          className="mt-10 flex justify-center px-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link to="/events-news">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-xl transition-all duration-300 hover:bg-accent/90"
            >
              <Newspaper className="h-4 w-4" />
              View All Events &amp; News
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Individual news card ───────────────────────────────────────────────── */
function NewsCard({ item }) {
  return (
    <div className="group flex-none w-64 sm:w-72 lg:w-76 overflow-hidden rounded-2xl border border-border bg-card/80 shadow-md backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-44 sm:h-48 overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Tag pill */}
        <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-accent-foreground shadow-md">
          {item.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        {/* Category */}
        <p className={`mb-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] ${item.categoryColor}`}>
          {item.category}
        </p>

        {/* Title */}
        <h3 className="mb-3 line-clamp-2 text-sm font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
          {item.title}
        </h3>

        {/* Meta */}
        <div className="flex items-center justify-between border-t border-border/60 pt-3">
          <span className="text-xs text-muted-foreground">by {item.author}</span>
          <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {item.date}
          </span>
        </div>
      </div>
    </div>
  );
}
