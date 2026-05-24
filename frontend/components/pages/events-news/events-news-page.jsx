"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Header, Footer } from "../../index.js";
import SpotlightCard from "../../bits/spotlight-card.jsx";
import Magnetic from "../../bits/magnetic.jsx";
import { RegistrationDialog } from "../../sections/events-news/registration-dialog.jsx";
import { EventDetailsDialog } from "../../sections/events-news/event-details-dialog.jsx";
import { EventsGallery } from "../../sections/events-news/events-gallery.jsx";
import {
  Calendar,
  MapPin,
  Clock,
  Search,
  SlidersHorizontal,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Tv,
  Presentation,
  Award,
  Sparkles,
  Trophy,
  Wrench,
  Music,
  BookOpen
} from "lucide-react";

// Mock Event Data based on the reference UI and Satpuda requirements
const TODAY_EVENTS = [
  {
    id: "today-1",
    title: "AI & ML Workshop",
    category: "Workshops",
    date: "MAY 20",
    description: "Hands-on workshop on AI/ML basics and real-world applications.",
    time: "10:00 AM - 01:00 PM",
    location: "IT Block, Room 204",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070",
    badgeColor: "bg-green-600 text-white"
  },
  {
    id: "today-2",
    title: "Nritya 2K25",
    category: "Cultural",
    date: "MAY 22",
    description: "A spectacular cultural evening celebrating art, music & dance.",
    time: "05:00 PM - 09:00 PM",
    location: "Auditorium",
    image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070",
    badgeColor: "bg-red-500 text-white"
  },
  {
    id: "today-3",
    title: "HackElite 5.0",
    category: "Competitions",
    date: "MAY 24",
    description: "24-hour hackathon to build innovative tech solutions.",
    time: "09:00 AM (24 May) - 09:00 AM (25 May)",
    location: "Innovation Lab",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070",
    badgeColor: "bg-purple-600 text-white"
  },
  {
    id: "today-4",
    title: "Career in Data Science",
    category: "Seminars",
    date: "MAY 28",
    description: "Expert talk on building a career in data science & analytics.",
    time: "11:00 AM - 12:30 PM",
    location: "Seminar Hall, Block A",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070",
    badgeColor: "bg-blue-600 text-white"
  }
];

const PAST_EVENTS = [
  {
    id: "past-1",
    title: "CodeStorm 1.0",
    category: "Competitions",
    date: "APR 10",
    description: "Competitive coding contest for all tech enthusiasts.",
    time: "02:00 PM - 05:00 PM",
    location: "CSE Lab 2",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2070",
    badgeColor: "bg-purple-600 text-white"
  },
  {
    id: "past-2",
    title: "Swaranjali",
    category: "Cultural",
    date: "APR 12",
    description: "An unforgettable night of music and melodies.",
    time: "06:00 PM - 09:30 PM",
    location: "Open Air Theatre",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2070",
    badgeColor: "bg-red-500 text-white"
  },
  {
    id: "past-3",
    title: "Sports Meet 2K25",
    category: "Sports",
    date: "APR 05",
    description: "Annual sports meet with fun, fitness and fantastic energy.",
    time: "08:00 AM - 05:00 PM",
    location: "College Grounds",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070",
    badgeColor: "bg-red-500 text-white"
  },
  {
    id: "past-4",
    title: "Web Dev Bootcamp",
    category: "Workshops",
    date: "APR 30",
    description: "A hands-on session on modern web development.",
    time: "10:00 AM - 04:00 PM",
    location: "Seminar Hall B",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070",
    badgeColor: "bg-green-600 text-white"
  },
  {
    id: "past-5",
    title: "AI Chatbot Seminar",
    category: "Seminars",
    date: "MAR 18",
    description: "Seminar on Generative AI and building custom chatbots.",
    time: "11:00 AM - 01:00 PM",
    location: "Auditorium",
    image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?q=80&w=2070",
    badgeColor: "bg-blue-600 text-white"
  },
  {
    id: "past-6",
    title: "Robotics Exhibition",
    category: "Technical",
    date: "MAR 10",
    description: "Displaying student projects on automated and manual robots.",
    time: "10:00 AM - 04:00 PM",
    location: "College Main Lobby",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070",
    badgeColor: "bg-purple-600 text-white"
  }
];

const CATEGORIES = [
  { label: "All Events", icon: null },
  { label: "Technical", icon: BookOpen },
  { label: "Cultural", icon: Music },
  { label: "Sports", icon: Trophy },
  { label: "Workshops", icon: Wrench },
  { label: "Seminars", icon: Presentation },
  { label: "Webinars", icon: Tv },
  { label: "Competitions", icon: Award }
];

const parseEventDate = (dateStr) => {
  const parts = dateStr.trim().split(/\s+/);
  if (parts.length < 2) return new Date();
  const months = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
  };
  const month = months[parts[0].toLowerCase()] ?? 4; // default to May
  const day = parseInt(parts[1], 10) || 1;
  return new Date(2026, month, day);
};

export default function EventsNewsPage() {
  const [activeFilter, setActiveFilter] = useState("All Events");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isRegOpen, setIsRegOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({ title: "", date: "" });
  const [pastStartIndex, setPastStartIndex] = useState(0);

  // Event details states
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [detailedEvent, setDetailedEvent] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const handleOpenRegistration = (title, date) => {
    setSelectedEvent({ title, date });
    setIsRegOpen(true);
  };

  const handleOpenDetails = (event) => {
    setDetailedEvent(event);
    setIsDetailsOpen(true);
  };

  // Filter & Search Logics
  const filterAndSearch = (list) => {
    return list.filter((item) => {
      const matchesFilter =
        activeFilter === "All Events" ||
        item.category.toLowerCase() === activeFilter.toLowerCase();
      
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase());

      const eventDateObj = parseEventDate(item.date);
      let matchesStartDate = true;
      let matchesEndDate = true;

      if (startDate) {
        const start = new Date(startDate);
        start.setHours(0, 0, 0, 0);
        const eventCopy = new Date(eventDateObj);
        eventCopy.setHours(0, 0, 0, 0);
        matchesStartDate = eventCopy >= start;
      }

      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        const eventCopy = new Date(eventDateObj);
        eventCopy.setHours(0, 0, 0, 0);
        matchesEndDate = eventCopy <= end;
      }

      return matchesFilter && matchesSearch && matchesStartDate && matchesEndDate;
    });
  };

  const filteredTodayEvents = filterAndSearch(TODAY_EVENTS);
  const filteredPastEvents = filterAndSearch(PAST_EVENTS);

  // Past events carousel slider helpers
  const handlePastNext = () => {
    if (pastStartIndex + 4 < filteredPastEvents.length) {
      setPastStartIndex((prev) => prev + 1);
    }
  };

  const handlePastPrev = () => {
    if (pastStartIndex > 0) {
      setPastStartIndex((prev) => prev - 1);
    }
  };

  const visiblePastEvents = filteredPastEvents.slice(pastStartIndex, pastStartIndex + 4);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION - Dark premium style matching Reference UI 1 */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#030e2b]">
          {/* Background image with high quality university building dusk scene */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070"
              alt="Recent events header background"
              className="w-full h-full object-cover opacity-25 filter brightness-[0.75] contrast-[1.1]"
            />
            {/* Cinematic dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030e2b] via-[#030e2b]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030e2b] via-[#030e2b]/40 to-transparent" />
            
            {/* Subtle premium ambient colored glows (no harsh white glow) */}
            <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[200px] pointer-events-none" />
          </div>

          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-4"
              >
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-accent-foreground/80">
                  DISCOVER • CONNECT • GROW
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight uppercase mb-6"
              >
                Moments That <br />
                <span className="text-accent italic heading-underline">Inspire</span> Us.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/70 font-medium max-w-xl mb-8 leading-relaxed"
              >
                Relive the energy, laughter, and achievements from our recent events. Stay tuned to our campus life.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => {
                    const el = document.getElementById("events-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group inline-flex items-center gap-2.5 rounded-2xl bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-accent/25 hover:bg-accent/90 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  View All Highlights
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <Link to="/events/upcoming">
                  <button className="inline-flex items-center gap-2.5 rounded-2xl border border-white/20 hover:border-white/40 bg-white/5 backdrop-blur-md px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95">
                    Upcoming Events
                    <Calendar className="h-4 w-4 text-accent" />
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* RECENT EVENTS CONTAINER */}
        <section id="events-section" className="py-20 bg-background pb-8">
          <div className="container mx-auto px-6">
            
            {/* SEARCH & FILTERS CONTROLS */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Recent Events</h2>
                <div className="h-1 w-16 bg-accent mt-2 rounded-full" />
              </div>

              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full xl:w-auto">
                {/* Search Field */}
                <div className="relative flex-grow md:w-80">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search events..."
                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
                {/* Filters Dropdown/Status */}
                <div
                  onClick={() => setShowFilterPanel(!showFilterPanel)}
                  className={`flex items-center justify-center gap-2 px-4 h-12 rounded-xl border border-border bg-card text-sm font-semibold text-foreground hover:bg-muted/50 cursor-pointer transition-all ${
                    showFilterPanel || startDate || endDate ? "border-accent text-accent" : ""
                  }`}
                >
                  <SlidersHorizontal className="w-4 h-4 text-accent" />
                  <span>Filters</span>
                </div>
              </div>
            </div>

            {/* EXPANDABLE DATE FILTER PANEL */}
            <AnimatePresence>
              {showFilterPanel && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mb-8"
                >
                  <div className="p-6 rounded-2xl border border-border bg-card/65 backdrop-blur-md flex flex-col md:flex-row items-end gap-6">
                    <div className="flex-1 w-full space-y-2 text-left">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                        Start Date
                      </label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full h-11 px-4 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20"
                      />
                    </div>
                    <div className="flex-1 w-full space-y-2 text-left">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                        End Date
                      </label>
                      <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full h-11 px-4 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20"
                      />
                    </div>
                    <div className="flex gap-3 w-full md:w-auto shrink-0">
                      <button
                        onClick={() => {
                          setStartDate("");
                          setEndDate("");
                        }}
                        className="flex-1 md:flex-none px-6 h-11 rounded-xl border border-border hover:bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground transition-all cursor-pointer font-bold"
                      >
                        Reset
                      </button>
                      <button
                        onClick={() => setShowFilterPanel(false)}
                        className="flex-1 md:flex-none px-6 h-11 rounded-xl bg-accent hover:bg-accent/90 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-bold"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* TODAY'S EVENTS SECTION */}
            <div className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Today's Events</h3>
                  <div className="h-0.5 w-16 bg-accent rounded-full hidden sm:block" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-accent hover:underline flex items-center gap-1 cursor-pointer">
                  View All Today's Events <ChevronRight className="w-4 h-4" />
                </span>
              </div>

              {filteredTodayEvents.length === 0 ? (
                <div className="text-center py-12 rounded-3xl border border-dashed border-border bg-card/50">
                  <Sparkles className="w-8 h-8 text-accent/40 mx-auto mb-3" />
                  <p className="text-muted-foreground font-medium">No events found matching your query today.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <AnimatePresence mode="popLayout">
                    {filteredTodayEvents.map((event) => (
                      <motion.div
                        key={event.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Magnetic intensity={0.06}>
                          <SpotlightCard
                            spotlightColor="rgba(214, 11, 11, 0.08)"
                            className="h-full flex flex-col group overflow-hidden border border-border bg-card/85 backdrop-blur-md rounded-[2rem] hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                          >
                            {/* Card Image and Badges */}
                            <div className="relative h-48 w-full overflow-hidden bg-muted">
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                              
                              {/* Date badge top left */}
                              <div className="absolute top-4 left-4 rounded-xl bg-background/95 backdrop-blur-md border border-border/40 py-2 px-3 flex flex-col items-center justify-center text-center shadow-lg min-w-[3.5rem]">
                                <span className="text-[10px] font-black text-accent uppercase leading-none tracking-widest">{event.date.split(" ")[0]}</span>
                                <span className="text-lg font-black text-foreground leading-none mt-1">{event.date.split(" ")[1]}</span>
                              </div>

                              {/* Category pill bottom left */}
                              <span className={`absolute bottom-4 left-4 text-[9px] font-black tracking-widest uppercase text-white px-3 py-1 rounded-full ${event.badgeColor}`}>
                                {event.category}
                              </span>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex-grow flex flex-col text-left">
                              <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors line-clamp-1 mb-2">
                                {event.title}
                              </h4>
                              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-6">
                                {event.description}
                              </p>

                              <div className="space-y-2 mt-auto text-xs text-muted-foreground/80 font-medium">
                                <div className="flex items-center gap-2.5">
                                  <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                                  <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                                  <span className="line-clamp-1">{event.location}</span>
                                </div>
                              </div>

                              <div className="border-t border-border/60 mt-5 pt-4">
                                <button
                                  onClick={() => handleOpenDetails(event)}
                                  className="text-xs font-black text-accent hover:text-accent/80 flex items-center gap-1.5 transition-colors uppercase tracking-widest cursor-pointer"
                                >
                                  View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </button>
                              </div>
                            </div>
                          </SpotlightCard>
                        </Magnetic>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* PAST EVENTS SECTION */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Past Events</h3>
                  <div className="h-0.5 w-16 bg-accent rounded-full hidden sm:block" />
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs sm:text-sm font-bold text-accent hover:underline flex items-center gap-1 cursor-pointer">
                    View All Past Events
                  </span>
                  {/* Slider Control buttons if multiple items */}
                  {filteredPastEvents.length > 4 && (
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={handlePastPrev}
                        disabled={pastStartIndex === 0}
                        className="p-1.5 rounded-lg border border-border bg-card text-foreground hover:bg-muted disabled:opacity-40 transition-all cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handlePastNext}
                        disabled={pastStartIndex + 4 >= filteredPastEvents.length}
                        className="p-1.5 rounded-lg border border-border bg-card text-foreground hover:bg-muted disabled:opacity-40 transition-all cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {filteredPastEvents.length === 0 ? (
                <div className="text-center py-12 rounded-3xl border border-dashed border-border bg-card/50">
                  <Sparkles className="w-8 h-8 text-accent/40 mx-auto mb-3" />
                  <p className="text-muted-foreground font-medium">No past events found matching your query.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <AnimatePresence mode="popLayout">
                    {visiblePastEvents.map((event) => (
                      <motion.div
                        key={event.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Magnetic intensity={0.06}>
                          <SpotlightCard
                            spotlightColor="rgba(214, 11, 11, 0.06)"
                            className="h-full flex flex-col group overflow-hidden border border-border bg-card/85 backdrop-blur-md rounded-[2rem] hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                          >
                            {/* Card Image and Badges */}
                            <div className="relative h-48 w-full overflow-hidden bg-muted">
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                              
                              {/* Date badge */}
                              <div className="absolute top-4 left-4 rounded-xl bg-background/95 backdrop-blur-md border border-border/40 py-2 px-3 flex flex-col items-center justify-center text-center shadow-lg min-w-[3.5rem]">
                                <span className="text-[10px] font-black text-accent uppercase leading-none tracking-widest">{event.date.split(" ")[0]}</span>
                                <span className="text-lg font-black text-foreground leading-none mt-1">{event.date.split(" ")[1]}</span>
                              </div>

                              {/* Category pill */}
                              <span className={`absolute bottom-4 left-4 text-[9px] font-black tracking-widest uppercase text-white px-3 py-1 rounded-full ${event.badgeColor}`}>
                                {event.category}
                              </span>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex-grow flex flex-col text-left">
                              <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors line-clamp-1 mb-2">
                                {event.title}
                              </h4>
                              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-6">
                                {event.description}
                              </p>

                              <div className="space-y-2 mt-auto text-xs text-muted-foreground/80 font-medium">
                                <div className="flex items-center gap-2.5">
                                  <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                                  <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                                  <span className="line-clamp-1">{event.location}</span>
                                </div>
                              </div>

                              <div className="border-t border-border/60 mt-5 pt-4">
                                <button
                                  onClick={() => handleOpenDetails(event)}
                                  className="text-xs font-black text-accent hover:text-accent/80 flex items-center gap-1.5 transition-colors uppercase tracking-widest cursor-pointer"
                                >
                                  View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </button>
                              </div>
                            </div>
                          </SpotlightCard>
                        </Magnetic>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* EVENTS GALLERY SECTION */}
        <EventsGallery />
      </main>

      {/* Event Details Dialog */}
      <EventDetailsDialog
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        event={detailedEvent}
        onRegister={handleOpenRegistration}
      />

      {/* Registration Dialog */}
      <RegistrationDialog
        isOpen={isRegOpen}
        onClose={() => setIsRegOpen(false)}
        eventTitle={selectedEvent.title}
        eventDate={selectedEvent.date}
      />

      <Footer />
    </div>
  );
}
