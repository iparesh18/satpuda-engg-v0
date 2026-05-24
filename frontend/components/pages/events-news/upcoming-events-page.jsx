"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header, Footer } from "../../index.js";
import { UpcomingEventsList } from "../../sections/events-news/upcoming-events-list.jsx";
import { RegistrationDialog } from "../../sections/events-news/registration-dialog.jsx";
import { EventDetailsDialog } from "../../sections/events-news/event-details-dialog.jsx";
import { Calendar, ArrowRight, Home, ChevronRight } from "lucide-react";

export default function UpcomingEventsPage() {
  const [isRegOpen, setIsRegOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({ title: "", date: "" });

  // Event details modal state
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

  const handleScrollToSection = () => {
    const el = document.getElementById("upcoming-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION - Dark premium style matching Reference UI 2 */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#030e2b]">
          {/* Background image of professional college tech event workshop */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070"
              alt="Upcoming events header background"
              className="w-full h-full object-cover opacity-20 filter brightness-[0.7] contrast-[1.15]"
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
              
              {/* Breadcrumbs / Discover */}
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
                What's Next. <br />
                <span className="text-accent italic heading-underline">Get Involved</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/70 font-medium max-w-xl mb-8 leading-relaxed"
              >
                Explore exciting upcoming events, technical workshops, seminars and cultural fests at Satpuda College.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={handleScrollToSection}
                  className="group inline-flex items-center gap-2.5 rounded-2xl bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-accent/25 hover:bg-accent/90 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Explore Events
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={handleScrollToSection}
                  className="inline-flex items-center gap-2.5 rounded-2xl border border-white/20 hover:border-white/40 bg-white/5 backdrop-blur-md px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  View Calendar
                  <Calendar className="h-4 w-4 text-accent" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* UPCOMING EVENTS CONTAINER */}
        <div id="upcoming-section">
          <UpcomingEventsList
            onRegister={handleOpenRegistration}
            onViewDetails={handleOpenDetails}
          />
        </div>
      </main>

      {/* Event Details Dialog */}
      <EventDetailsDialog
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        event={detailedEvent}
        onRegister={handleOpenRegistration}
      />

      {/* Registration dialog popup */}
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
