"use client";

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Header, Footer } from "../../index.js";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Search,
  Sparkles,
  X,
  BookOpen,
  Music,
  Trophy,
  Wrench,
  Presentation,
  Tv,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const UPCOMING_EVENTS = [
  {
    id: 1,
    title: "Training on Web Development with Python & Django",
    date: "2026-05-24",
    time: "11:00 AM - 02:00 PM",
    location: "Computer Lab, Room F1",
    description:
      "Hands-on workshop on Python and machine learning fundamentals, tools, and real-world use cases.",
    category: "Technical",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070",
  },
  // {
  //   id: 2,
  //   title: "Nritya 2K25",
  //   date: "2026-05-28",
  //   time: "05:00 PM - 09:00 PM",
  //   location: "Auditorium",
  //   description: "A cultural evening featuring student performances, music, dance, and stage arts.",
  //   category: "Cultural",
  //   image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070",
  // },
  // {
  //   id: 3,
  //   title: "Career in Data Science",
  //   date: "2026-05-30",
  //   time: "11:00 AM - 12:30 PM",
  //   location: "Seminar Hall, Block A",
  //   description: "An expert session on data science careers, portfolio building, and industry expectations.",
  //   category: "Seminar",
  //   image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070",
  // },
  // {
  //   id: 4,
  //   title: "HackElite 5.0",
  //   date: "2026-05-31",
  //   time: "09:00 AM - 09:00 AM",
  //   location: "Innovation Lab",
  //   description: "A fast-paced 24-hour hackathon for coding, innovation, and collaborative problem solving.",
  //   category: "Competition",
  //   image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070",
  // },
];

const RECENT_EVENTS = [
  {
    id: 101,
    title: "Free Webinar on Time Management Successfully Conducted",
    date: "2026-04-10",
    description:
      "A free webinar on time management was successfully conducted, helping participants learn effective strategies to improve productivity and manage time efficiently.",
    category: "Tech Fest",
    image: "/images/time-mng-st.webp",
    time: "02:00 PM - 04:00 PM",
    location: "CSE Lab 2",
  },
  {
    id: 102,
    category: "Civil",
    title: "Civil Engineering Students Initiate Drainage Project in Campus",
    image: "/images/civil-drainage-st.webp",
    date: "2026-04-12",
    description:
      "Civil Engineering students started a campus drainage project to enhance practical learning and water management.",
    time: "06:00 PM - 09:30 PM",
    location: "Open Air Theatre",
  },
  {
    id: 103,
    title: "Industrial Visit to Malajkhand Mines by Mechanical Department",
    date: "2026-04-05",
    description:
      "Industrial visit to Malajkhand Mines organized to provide practical exposure to mining and mechanical operations.",
    category: "Mechanical",
    image: "/images/malaj-mine-st.webp",
    time: "08:00 AM - 05:00 PM",
    location: "Malajkhand Mines",
  },
  {
    id: 104,
    title: "Educational & Industrial Visit Conducted by Civil & Mining Dept.",
    date: "2026-04-30",
    description:
      "Civil & Mining Department organized an educational and industrial visit for practical industry exposure.",
    category: "Civil",
    image: "/images/educational-ind-st.webp",
    time: "10:00 AM - 04:00 PM",
    location: "Seminar Hall B",
  },
  {
    id: 105,
    title: "Annual Hackathon 2026 — Students Build Innovative Solutions",
    date: "2026-03-18",
    description:
      "Annual Hackathon 2026 encouraged students to build innovative and real-world technology solutions.",
    category: "CSE",
    image: "/images/journey/6.jpeg",
    time: "11:00 AM - 02:00 PM",
    location: "Auditorium",
  },
  {
    id: 106,
    title:
      "International Rated Chess Tournament Successfully Conducted at Satpuda College",
    date: "2026-03-10",
    description:
      "An international rated chess tournament was successfully held at Satpuda College.",
    category: "CSE",
    image: "/images/chess-tourn-st.webp",
    time: "10:00 AM - 04:00 PM",
    location: "College Auditorium",
  },
];

const CATEGORY_META = {
  Technical: { icon: BookOpen, pill: "bg-[#021545] text-white" },
  Cultural: { icon: Music, pill: "bg-[#d60b0b] text-white" },
  Sports: { icon: Trophy, pill: "bg-slate-700 text-white" },
  Workshop: { icon: Wrench, pill: "bg-[#021545] text-white" },
  Seminar: { icon: Presentation, pill: "bg-[#d60b0b] text-white" },
  Webinar: { icon: Tv, pill: "bg-slate-700 text-white" },
  Competition: { icon: Award, pill: "bg-[#021545] text-white" },
};

const CALENDAR_MONTH = 4;
const CALENDAR_YEAR = 2026;

const formatDate = (dateString) =>
  new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));

const formatShortDate = (dateString) =>
  new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
  }).format(new Date(dateString));

const buildCalendarGrid = (year, monthIndex) => {
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const totalDays = new Date(year, monthIndex + 1, 0).getDate();
  const cells = Array.from({ length: firstDay }, () => null);

  for (let day = 1; day <= totalDays; day += 1) {
    cells.push(day);
  }

  return cells;
};

export default function EventsNewsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Events");
  const [query, setQuery] = useState("");
  const [recentIndex, setRecentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    if (!selectedEvent) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedEvent(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedEvent]);

  const upcomingEvents = useMemo(() => {
    const filtered = UPCOMING_EVENTS.filter((event) => {
      const categoryMatch =
        activeCategory === "All Events" || event.category === activeCategory;
      const queryMatch =
        query.trim() === "" ||
        event.title.toLowerCase().includes(query.toLowerCase()) ||
        event.location.toLowerCase().includes(query.toLowerCase()) ||
        event.description.toLowerCase().includes(query.toLowerCase());

      return categoryMatch && queryMatch;
    });

    return filtered;
  }, [activeCategory, query]);

  const recentEvents = useMemo(() => {
    const filtered = RECENT_EVENTS.filter((event) => {
      const categoryMatch =
        activeCategory === "All Events" || event.category === activeCategory;
      const queryMatch =
        query.trim() === "" ||
        event.title.toLowerCase().includes(query.toLowerCase()) ||
        event.location.toLowerCase().includes(query.toLowerCase()) ||
        event.description.toLowerCase().includes(query.toLowerCase());

      return categoryMatch && queryMatch;
    });

    return filtered;
  }, [activeCategory, query]);

  const eventsByDay = useMemo(() => {
    const map = new Map();

    [...upcomingEvents, ...recentEvents].forEach((event) => {
      const date = new Date(event.date);
      if (
        date.getMonth() === CALENDAR_MONTH &&
        date.getFullYear() === CALENDAR_YEAR
      ) {
        const day = date.getDate();
        map.set(day, [...(map.get(day) || []), event]);
      }
    });

    return map;
  }, [upcomingEvents, recentEvents]);

  const calendarDays = useMemo(
    () => buildCalendarGrid(CALENDAR_YEAR, CALENDAR_MONTH),
    [],
  );

  const today = new Date();

  const openEvent = (event) => setSelectedEvent(event);

  const handleCalendarDayClick = (day) => {
    const matchedEvents = eventsByDay.get(day);
    if (matchedEvents?.length) {
      setSelectedEvent(matchedEvents[0]);
    }
  };

  const visibleRecentEvents = recentEvents.slice(recentIndex, recentIndex + 4);

  const handleRecentShift = (direction) => {
    if (!recentEvents.length) return;

    setRecentIndex((current) => {
      const next = direction === "left" ? current - 1 : current + 1;
      if (next < 0) return recentEvents.length - 1;
      if (next >= recentEvents.length) return 0;
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex flex-col">
      <style>{`
        @keyframes recent-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .recent-marquee-track {
          animation: recent-marquee 28s linear infinite;
        }
        .recent-marquee:hover .recent-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#021545_0%,#0b1f5b_55%,#d60b0b_180%)] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,11,11,0.25),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_24%)] pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-white/80 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Satpuda Engineering College Events
              </span>
              <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
                Events & News
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base lg:text-lg">
                Clean cards, a modern calendar widget, and a smooth mobile-first
                layout designed for touch devices and professional college
                presentation.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => {
                    const target = document.getElementById(
                      "upcoming-events-section",
                    );
                    if (target)
                      target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-accent/25 transition-transform duration-300 hover:scale-[1.02] active:scale-95"
                >
                  View Upcoming Events
                  <ArrowRight className="h-4 w-4" />
                </button>

               
              </div>
            </div>
          </div>
        </section>

        <section
          id="upcoming-events-section"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16"
        >
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-accent">
                Upcoming Events
              </p>
              <h2 className="mt-3 text-2xl font-black text-foreground sm:text-3xl lg:text-4xl">
                Learn, participate, and stay connected
              </h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative w-full sm:w-80">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search events..."
                  className="h-12 w-full rounded-2xl border border-border bg-card pl-11 pr-4 text-sm text-foreground outline-none transition focus:border-accent/40 focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <button
                type="button"
                onClick={() => setFiltersOpen((prev) => !prev)}
                className={`inline-flex h-12 items-center justify-center gap-2 rounded-2xl border px-4 text-sm font-semibold transition ${
                  filtersOpen || activeCategory !== "All Events"
                    ? "border-accent bg-accent/5 text-accent"
                    : "border-border bg-card text-foreground hover:bg-muted/50"
                }`}
              >
                <Calendar className="h-4 w-4" />
                Filters
              </button>
            </div>
          </div>

          {filtersOpen && (
            <div className="mb-8 rounded-3xl border border-border bg-card/80 p-4 shadow-sm">
              <div className="flex flex-wrap gap-2">
                {[
                  "All Events",
                  "Technical",
                  "Cultural",
                  "Sports",
                  "Workshop",
                  "Seminar",
                  "Webinar",
                  "Competition",
                ].map((category) => {
                  const active = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                        active
                          ? "border-[#021545] bg-[#021545] text-white shadow-lg shadow-[#021545]/15"
                          : "border-border bg-background text-foreground hover:border-accent/40 hover:text-accent"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] lg:items-start">
            <div className="order-1 space-y-8">
              <div className="rounded-4xl border border-border/70 bg-white p-5 sm:p-6 shadow-[0_18px_50px_rgba(2,21,69,0.08)]">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                      Upcoming Events List
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {upcomingEvents.length} event
                      {upcomingEvents.length === 1 ? "" : "s"} available
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 rounded-full bg-[#021545]/5 px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#021545]">
                    <Calendar className="h-4 w-4 text-accent" />
                    Scroll safe
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                  {upcomingEvents.map((event) => {
                    const meta =
                      CATEGORY_META[event.category] || CATEGORY_META.Technical;
                    const Icon = meta.icon;

                    return (
                      <motion.button
                        key={event.id}
                        type="button"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => openEvent(event)}
                        className="group overflow-hidden rounded-[1.75rem] border border-border bg-[#f9fafc] text-left shadow-sm transition-all hover:border-accent/30 hover:shadow-xl"
                      >
                        <div className="flex flex-col sm:flex-row">
                          <div className="relative h-48 w-full sm:h-auto sm:w-48 shrink-0 overflow-hidden bg-slate-100">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/55 to-transparent" />
                            <div
                              className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${meta.pill}`}
                            >
                              {Icon && <Icon className="h-3.5 w-3.5" />}
                              {event.category}
                            </div>
                          </div>

                          <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                                  {formatShortDate(event.date)}
                                </p>
                                <h4 className="mt-2 text-lg font-bold text-foreground transition-colors group-hover:text-[#021545]">
                                  {event.title}
                                </h4>
                              </div>
                              <span className="rounded-full bg-[#021545]/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#021545]">
                                Upcoming
                              </span>
                            </div>

                            <p className="mt-3 text-sm leading-6 text-muted-foreground">
                              {event.description}
                            </p>

                            <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 shrink-0 text-accent" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 shrink-0 text-accent" />
                                <span>{event.location}</span>
                              </div>
                            </div>

                            <div className="mt-5 flex items-center justify-between gap-3 border-t border-border/60 pt-4">
                              <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                                Tap for full details
                              </span>
                              <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-accent">
                                View Details{" "}
                                <ArrowRight className="h-3.5 w-3.5" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            <aside className="order-2 lg:sticky lg:top-6">
              <div className="rounded-4xl border border-border/70 bg-white p-5 sm:p-6 shadow-[0_18px_50px_rgba(2,21,69,0.08)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-accent">
                      Calendar
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-foreground">
                      May 2026
                    </h3>
                  </div>
                  <div className="rounded-full bg-[#d60b0b]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#d60b0b]">
                    Event days highlighted
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-7 gap-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div key={day} className="py-1">
                        {day}
                      </div>
                    ),
                  )}
                </div>

                <div className="mt-3 grid grid-cols-7 gap-2">
                  {calendarDays.map((day, index) => {
                    if (!day) {
                      return (
                        <div
                          key={`empty-${index}`}
                          className="aspect-square rounded-2xl bg-transparent"
                        />
                      );
                    }

                    const dayEvents = eventsByDay.get(day) || [];
                    const isToday =
                      today.getFullYear() === CALENDAR_YEAR &&
                      today.getMonth() === CALENDAR_MONTH &&
                      today.getDate() === day;
                    const hasEvent = dayEvents.length > 0;

                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => handleCalendarDayClick(day)}
                        className={`relative aspect-square rounded-2xl border text-sm font-bold transition-all duration-300 ${
                          hasEvent
                            ? "border-[#021545]/15 bg-white text-[#021545] shadow-sm hover:-translate-y-0.5"
                            : "border-border bg-[#f7f8fc] text-foreground hover:border-accent/40 hover:bg-muted/50"
                        } ${isToday && !hasEvent ? "ring-2 ring-accent/30" : ""}`}
                        aria-label={
                          hasEvent ? `Open event on day ${day}` : `Day ${day}`
                        }
                      >
                        <span
                          className={`absolute left-2 top-2 text-xs font-bold ${hasEvent ? "text-[#021545]" : ""}`}
                        >
                          {day}
                        </span>
                        {hasEvent && (
                          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-2xl border border-border/60 bg-[#f9fafc] p-4">
                  <p className="text-sm font-bold text-foreground">
                    Calendar Tips
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li>• Highlighted dates have events.</li>
                    <li>• Tap a highlighted date to open the event popup.</li>
                    <li>• The layout stacks naturally on tablet and mobile.</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-border/60 bg-[#f2f4f8] py-12 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-accent">
                  Recent Events
                </p>
                <h3 className="mt-2 text-2xl font-black text-foreground sm:text-3xl">
                  Campus highlights
                </h3>
              </div>
              <p className="max-w-xl text-sm text-muted-foreground">
                Auto-scrolling cards with hover pause and the same detail popup
                for a consistent user experience.
              </p>
            </div>

            <div className="recent-marquee group overflow-hidden rounded-4xl border border-border bg-white/70 p-4 shadow-[0_18px_50px_rgba(2,21,69,0.06)]">
              <div className="recent-marquee-track flex w-[200%] gap-4 will-change-transform">
                {[...recentEvents, ...recentEvents].map((event, index) => (
                  <motion.button
                    key={`${event.id}-${index}`}
                    type="button"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => openEvent(event)}
                    className="group/recent flex w-72 shrink-0 overflow-hidden rounded-3xl border border-border bg-white text-left shadow-sm transition-all hover:border-accent/30 hover:shadow-xl"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover/recent:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/65 to-transparent" />
                      <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                        {formatShortDate(event.date)}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                        {event.category}
                      </p>
                      <h4 className="mt-2 text-base font-bold text-foreground group-hover/recent:text-[#021545]">
                        {event.title}
                      </h4>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => handleRecentShift("left")}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-accent/40 hover:text-accent"
                  aria-label="Scroll recent events left"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                  Hover to pause marquee
                </div>
                <button
                  type="button"
                  onClick={() => handleRecentShift("right")}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-accent/40 hover:text-accent"
                  aria-label="Scroll recent events right"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-4xl border border-white/10 bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
                aria-label="Close event details"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="grid max-h-[88vh] grid-cols-1 overflow-y-auto lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative min-h-64 bg-slate-100 lg:min-h-full">
                  <img
                    src={
                      selectedEvent.image ||
                      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070"
                    }
                    alt={selectedEvent.title}
                    className="h-full w-full object-contain "
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                    {selectedEvent.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-accent">
                    Event Details
                  </p>
                  <h3 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                    {selectedEvent.title}
                  </h3>

                  <div className="mt-5 space-y-3 rounded-2xl border border-border bg-[#f7f8fc] p-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 shrink-0 text-accent" />
                      <span>{formatDate(selectedEvent.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 shrink-0 text-accent" />
                      <span>{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 shrink-0 text-accent" />
                      <span>{selectedEvent.location}</span>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-foreground/80 sm:text-base">
                    {selectedEvent.description}
                  </p>

                  <div className="mt-6 flex">
                    <button
                      type="button"
                      onClick={() => setSelectedEvent(null)}
                      className="inline-flex w-full items-center justify-center rounded-2xl border border-border bg-white px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-foreground transition hover:bg-muted/40"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
