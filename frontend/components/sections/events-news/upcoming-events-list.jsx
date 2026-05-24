"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "../../bits/spotlight-card.jsx";
import Magnetic from "../../bits/magnetic.jsx";
import {
  Calendar as CalendarIcon,
  MapPin,
  Clock,
  ChevronRight,
  ChevronLeft,
  Search,
  SlidersHorizontal,
  RefreshCw,
  Sparkles,
  ArrowRight
} from "lucide-react";

// Dynamic colors mapping for event categories
const CATEGORY_COLORS = {
  cultural: {
    bg: "bg-red-500",
    text: "text-red-500",
    border: "border-red-500",
    hoverBg: "hover:bg-red-500/10",
    dot: "bg-red-500"
  },
  technical: {
    bg: "bg-purple-600",
    text: "text-purple-600",
    border: "border-purple-600",
    hoverBg: "hover:bg-purple-600/10",
    dot: "bg-purple-600"
  },
  workshop: {
    bg: "bg-green-600",
    text: "text-green-600",
    border: "border-green-600",
    hoverBg: "hover:bg-green-600/10",
    dot: "bg-green-600"
  },
  seminar: {
    bg: "bg-blue-600",
    text: "text-blue-600",
    border: "border-blue-600",
    hoverBg: "hover:bg-blue-600/10",
    dot: "bg-blue-600"
  },
  sports: {
    bg: "bg-red-500",
    text: "text-red-500",
    border: "border-red-500",
    hoverBg: "hover:bg-red-500/10",
    dot: "bg-red-500"
  },
  default: {
    bg: "bg-accent",
    text: "text-accent",
    border: "border-accent",
    hoverBg: "hover:bg-accent/10",
    dot: "bg-accent"
  }
};

const getCategoryColor = (category) => {
  const cat = category?.toLowerCase();
  if (cat?.includes("cultural")) return CATEGORY_COLORS.cultural;
  if (cat?.includes("technical")) return CATEGORY_COLORS.technical;
  if (cat?.includes("workshop")) return CATEGORY_COLORS.workshop;
  if (cat?.includes("seminar")) return CATEGORY_COLORS.seminar;
  if (cat?.includes("sports")) return CATEGORY_COLORS.sports;
  return CATEGORY_COLORS.default;
};

// Upcoming events list (matching May 2026 timeline)
const UPCOMING_EVENTS = [
  {
    id: "up-1",
    title: "AI & ML Workshop",
    category: "Technical",
    date: "MAY 20",
    dayNumber: 20,
    description: "Hands-on workshop on AI/ML basics and real-world applications.",
    time: "10:00 AM - 01:00 PM",
    location: "IT Block, Room 204",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070"
  },
  {
    id: "up-2",
    title: "Nritya 2K25",
    category: "Cultural",
    date: "MAY 22",
    dayNumber: 22,
    description: "A spectacular cultural evening celebrating art, music & dance.",
    time: "05:00 PM - 09:00 PM",
    location: "Auditorium",
    image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070"
  },
  {
    id: "up-3",
    title: "Robotics Dev Workshop",
    category: "Workshop",
    date: "MAY 24",
    dayNumber: 24,
    description: "Build and program autonomous miniature robots from scratch.",
    time: "09:00 AM - 05:00 PM",
    location: "Innovation Lab",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070"
  },
  {
    id: "up-4",
    title: "Career in Data Science",
    category: "Seminar",
    date: "MAY 28",
    dayNumber: 28,
    description: "Expert talk on building a career in data science & analytics.",
    time: "11:00 AM - 12:30 PM",
    location: "Seminar Hall, Block A",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070"
  }
];

const CATEGORIES = [
  "All Events",
  "Technical",
  "Cultural",
  "Sports",
  "Workshops",
  "Seminars",
  "Webinars",
  "Competitions"
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

export function UpcomingEventsList({ onRegister, onViewDetails }) {
  const [activeFilter, setActiveFilter] = useState("All Events");
  const [searchQuery, setSearchQuery] = useState("");
  const [calendarView, setCalendarView] = useState("Month"); // Month, Week, Day
  const [selectedDate, setSelectedDate] = useState(null);

  // Date filters states
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Filter list
  const filteredEvents = UPCOMING_EVENTS.filter((event) => {
    const matchesFilter =
      activeFilter === "All Events" ||
      event.category.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());

    const eventDateObj = parseEventDate(event.date);
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

  // Calendar dates generator for May 2026
  // May 1st 2026 starts on Friday
  const startDayOffset = 5; 
  const totalDays = 31;
  const prevMonthDays = [26, 27, 28, 29, 30]; // filling empty days at start
  const nextMonthDays = [1, 2, 3, 4, 5, 6];   // filling empty days at end

  const calendarDays = [];

  // Add prev month trailing days
  prevMonthDays.forEach((day) => {
    calendarDays.push({ day, currentMonth: false });
  });

  // Add current month days
  for (let i = 1; i <= totalDays; i++) {
    const event = UPCOMING_EVENTS.find((e) => e.dayNumber === i);
    calendarDays.push({
      day: i,
      currentMonth: true,
      event: event || null
    });
  }

  // Add next month leading days
  nextMonthDays.forEach((day) => {
    calendarDays.push({ day, currentMonth: false });
  });

  const handleDateClick = (dayObj) => {
    if (dayObj.currentMonth && dayObj.event) {
      setSelectedDate(dayObj.day);
      onViewDetails(dayObj.event);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">

        {/* SEARCH & FILTERS HEADER CONTROLS */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Upcoming Events</h2>
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
            {/* Filters Dropdown */}
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

        {/* CATEGORIES NAVIGATION */}
        <div className="flex overflow-x-auto pb-4 mb-12 scrollbar-none -mx-6 px-6 gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-accent text-white shadow-lg shadow-accent/25 scale-105"
                    : "bg-card border border-border hover:border-accent/40 text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* SPLIT LAYOUT: LIST ON LEFT, CALENDAR ON RIGHT */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          
          {/* LEFT COLUMN: HORIZONTAL EVENTS LIST */}
          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredEvents.length === 0 ? (
                <div className="text-center py-20 rounded-[2.5rem] border border-dashed border-border bg-card/50">
                  <Sparkles className="w-8 h-8 text-accent/40 mx-auto mb-3" />
                  <p className="text-muted-foreground font-medium">No upcoming events found matching your query.</p>
                </div>
              ) : (
                filteredEvents.map((event) => {
                  const eventColors = getCategoryColor(event.category);
                  return (
                    <motion.div
                      key={event.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Magnetic intensity={0.03}>
                        <SpotlightCard
                          spotlightColor="rgba(2, 21, 69, 0.05)"
                          onClick={() => onViewDetails(event)}
                          className="overflow-hidden border border-border bg-card/70 hover:bg-card/90 backdrop-blur-md rounded-3xl p-6 hover:border-accent/30 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                        >
                          <div className="flex flex-col md:flex-row gap-6 items-center">
                            {/* Image area with date badge */}
                            <div className="relative w-full md:w-48 h-36 rounded-2xl overflow-hidden shrink-0 bg-muted">
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              {/* Date Badge over image */}
                              <div className="absolute top-3 left-3 rounded-lg bg-background/95 backdrop-blur-md border border-border/40 py-1.5 px-2 flex flex-col items-center justify-center text-center shadow-md min-w-[2.8rem]">
                                <span className="text-[9px] font-black text-accent uppercase leading-none tracking-wider">{event.date.split(" ")[0]}</span>
                                <span className="text-sm font-black text-foreground leading-none mt-0.5">{event.date.split(" ")[1]}</span>
                              </div>
                            </div>

                            {/* Content Area */}
                            <div className="flex-grow space-y-3 w-full text-left">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                                  {event.title}
                                </h4>
                                
                                <div className="flex items-center gap-2">
                                  <span className={`text-[9px] font-black tracking-widest uppercase text-white px-3 py-1 rounded-full ${eventColors.bg}`}>
                                    {event.category}
                                  </span>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      onViewDetails(event);
                                    }}
                                    className="p-1 rounded-full bg-primary/5 group-hover:bg-accent/15 group-hover:translate-x-1 transition-all text-accent cursor-pointer"
                                  >
                                    <ChevronRight className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>

                              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                {event.description}
                              </p>

                              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 border-t border-border/60 text-xs text-muted-foreground/80 font-medium">
                                <div className="flex items-center gap-2">
                                  <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                                  <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                                  <span className="line-clamp-1">{event.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SpotlightCard>
                      </Magnetic>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>

            {filteredEvents.length > 0 && (
              <div className="pt-4 flex justify-center">
                <button className="group inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-border hover:border-accent/40 bg-card hover:bg-muted text-xs font-bold uppercase tracking-wider text-foreground transition-all duration-300">
                  View All Events
                  <ArrowRight className="w-3.5 h-3.5 text-accent group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: EVENT CALENDAR */}
          <SpotlightCard
            spotlightColor="rgba(214, 11, 11, 0.04)"
            className="border border-border bg-card/85 backdrop-blur-md rounded-3xl p-6 shadow-xl"
          >
            <div className="flex flex-col gap-6">
              
              {/* Calendar Header with line indicator and Month/Week/Day tabs */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-border/60 pb-5">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-bold text-foreground">Event Calendar</h3>
                  <div className="h-0.5 w-12 bg-accent rounded-full" />
                </div>

                {/* View togglers */}
                <div className="flex rounded-lg bg-background p-1 border border-border h-9 shrink-0">
                  {["Month", "Week", "Day"].map((view) => (
                    <button
                      key={view}
                      onClick={() => setCalendarView(view)}
                      className={`px-3 text-xs font-bold rounded-md transition-all cursor-pointer ${
                        calendarView === view
                          ? "bg-accent text-white shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {view}
                    </button>
                  ))}
                </div>
              </div>

              {/* Month Navigation */}
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-foreground">May 2026</span>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 rounded-lg border border-border bg-background text-muted-foreground hover:text-foreground hover:bg-muted/50 cursor-pointer">
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-1.5 rounded-lg border border-border bg-background text-muted-foreground hover:text-foreground hover:bg-muted/50 cursor-pointer">
                    <RefreshCw className="w-3.5 h-3.5 text-accent" />
                  </button>
                  <button className="p-1.5 rounded-lg border border-border bg-background text-muted-foreground hover:text-foreground hover:bg-muted/50 cursor-pointer">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Calendar Monthly Grid */}
              <div className="grid grid-cols-7 text-center gap-y-2 mt-2">
                {/* Days of week */}
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
                  <span key={d} className="text-[10px] font-black text-muted-foreground/60 tracking-wider pb-2">
                    {d}
                  </span>
                ))}

                {/* Grid Numbers */}
                {calendarDays.map((dayObj, index) => {
                  const isSelected = selectedDate === dayObj.day && dayObj.currentMonth;
                  const eventColors = dayObj.event ? getCategoryColor(dayObj.event.category) : null;
                  return (
                    <div key={index} className="aspect-square flex items-center justify-center p-0.5 relative">
                      {dayObj.currentMonth ? (
                        dayObj.event ? (
                          <button
                            onClick={() => handleDateClick(dayObj)}
                            className={`w-9 h-9 rounded-full flex flex-col items-center justify-center text-xs font-bold transition-all duration-300 relative group/day cursor-pointer ${
                              isSelected
                                ? `${eventColors.bg} text-white scale-110 shadow-lg shadow-accent/20`
                                : `bg-primary/5 ${eventColors.hoverBg} border ${eventColors.border}/40 text-foreground`
                            }`}
                          >
                            <span>{dayObj.day}</span>
                            {/* Color Dot indicating category */}
                            <span className={`absolute bottom-1 w-1.5 h-1.5 rounded-full ${eventColors.bg}`} />
                            
                            {/* Tooltip on hover */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/day:block bg-foreground text-background text-[10px] font-bold py-1 px-2.5 rounded-md whitespace-nowrap shadow-xl z-20">
                              {dayObj.event.title}
                            </div>
                          </button>
                        ) : (
                          <span className="w-9 h-9 flex items-center justify-center text-xs font-semibold text-muted-foreground/75 hover:bg-muted/50 rounded-full transition-colors">
                            {dayObj.day}
                          </span>
                        )
                      ) : (
                        <span className="w-9 h-9 flex items-center justify-center text-xs font-normal text-muted-foreground/35">
                          {dayObj.day}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Legends Section */}
              <div className="border-t border-border/60 pt-5 mt-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-muted-foreground font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                    <span>Technical</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span>Cultural</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-600" />
                    <span>Workshop</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    <span>Seminar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-400" />
                    <span>Other</span>
                  </div>
                </div>
              </div>

            </div>
          </SpotlightCard>

        </div>

      </div>
    </section>
  );
}
