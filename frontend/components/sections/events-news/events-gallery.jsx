"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Tag, ArrowRight, Sparkles, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";
import SpotlightCard from "../../bits/spotlight-card.jsx";
import Magnetic from "../../bits/magnetic.jsx";
import ShinyText from "../../bits/shiny-text.jsx";
import BlurText from "../../bits/blur-text.jsx";

const GALLERY_EVENTS = [
  {
    title: "Annual Tech Fest 2024",
    date: "March 15, 2024",
    category: "Technical",
    location: "Main Campus",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070",
    description: "An incredible display of technical innovation, student projects, coding marathons, and robotics exhibitions.",
    color: "from-blue-500/10 to-cyan-600/10"
  },
  {
    title: "Cultural Extravaganza",
    date: "February 20, 2024",
    category: "Cultural",
    location: "Open Air Theatre",
    image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070",
    description: "A vibrant celebration of music, traditional dance, drama, and artistic achievements representing diverse cultures.",
    color: "from-purple-500/10 to-pink-600/10"
  },
  {
    title: "National Mining Seminar",
    date: "January 10, 2024",
    category: "Academic",
    location: "Seminar Hall A",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
    description: "Expert talk and research presentations by leading minds in mining engineering, safety operations, and resource management.",
    color: "from-amber-500/10 to-orange-600/10"
  },
  {
    title: "Sports Meet 2023",
    date: "December 05, 2023",
    category: "Sports",
    location: "College Grounds",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070",
    description: "Annual sports meet filled with high energy, team spirit, athletic records, and friendly competition.",
    color: "from-green-500/10 to-emerald-600/10"
  },
  {
    title: "Robotics Workshop",
    date: "November 18, 2023",
    category: "Workshop",
    location: "Innovation Lab",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070",
    description: "Hands-on robotics construction and autonomous programming workshop for engineering minds.",
    color: "from-[#d60b0b]/10 to-[#d60b0b]/10"
  },
  {
    title: "Alumni Meet 2023",
    date: "October 12, 2023",
    category: "Networking",
    location: "Grand Ballroom",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070",
    description: "A nostalgic and inspiring evening connecting our distinguished alumni with current students and faculty.",
    color: "from-indigo-500/10 to-blue-600/10"
  }
];

export function EventsGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-24 bg-background overflow-hidden flex flex-col border-t border-border/40">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Content */}
      <div className="container mx-auto px-6 mb-16 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-primary/40" />
            <ShinyText text="CAMPUS VIBRANCY" speed={3} color="#d60b0b" className="text-xs font-bold tracking-[0.4em] uppercase text-primary/80" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
            Satpuda Event <span className="text-primary italic">Gallery</span>
          </h2>
          <BlurText
            text="Explore the cinematic moments of technical excellence, cultural heritage, and student life at Satpuda."
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            delay={0.02}
          />
        </motion.div>
      </div>

      {/* Scrollable Gallery container with Left/Right Buttons */}
      <div className="relative container mx-auto px-6 z-10 group/gallery">
        {/* Navigation arrows (visible on desktop hover) */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-10 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-border bg-background/80 backdrop-blur-md text-foreground hover:bg-muted opacity-0 group-hover/gallery:opacity-100 transition-all duration-300 shadow-xl hidden md:flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-5 h-5 text-accent" />
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-10 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-border bg-background/80 backdrop-blur-md text-foreground hover:bg-muted opacity-0 group-hover/gallery:opacity-100 transition-all duration-300 shadow-xl hidden md:flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-5 h-5 text-accent" />
        </button>

        {/* Horizontal scroll section */}
        <div
          ref={scrollContainerRef}
          className="flex flex-col gap-6 pb-8 px-2 -mx-2 md:flex-row md:overflow-x-auto md:scroll-smooth md:gap-6 md:overflow-y-visible scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {GALLERY_EVENTS.map((event, index) => (
            <div
              key={index}
              className="w-full md:w-auto md:shrink-0 scroll-snap-align-start"
              style={{ scrollSnapAlign: "start" }}
            >
              <Magnetic intensity={0.04}>
                <div
                  onClick={() => setSelectedImage(event)}
                  className="w-full md:w-[380px] rounded-[2rem] border border-border/50 bg-card hover:border-accent/40 hover:shadow-2xl transition-all duration-500 group/card cursor-pointer overflow-hidden h-full flex flex-col hover:scale-[1.03] active:scale-98"
                >
                  <SpotlightCard
                    spotlightColor="rgba(214, 11, 11, 0.05)"
                    className="flex flex-col h-full"
                  >
                    {/* Cover Photo */}
                    <div className="relative w-full h-[200px] md:h-[240px] overflow-hidden bg-muted shrink-0">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-85" />

                      {/* Floating Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                        <Tag className="w-3 h-3 text-accent" />
                        <span className="text-[9px] font-bold text-white uppercase tracking-wider">{event.category}</span>
                      </div>

                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center gap-1.5 text-white/90">
                          <Calendar className="w-3.5 h-3.5 text-accent" />
                          <span className="text-xs font-semibold">{event.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-grow text-left">
                      <h4 className="text-xl md:text-2xl font-bold tracking-tight text-foreground leading-tight mb-2 group-hover/card:text-accent transition-colors">
                        {event.title}
                      </h4>

                      <div className="flex items-center gap-1.5 mb-4 text-xs text-muted-foreground font-semibold">
                        <MapPin className="w-3.5 h-3.5 text-accent" />
                        <span>{event.location}</span>
                      </div>

                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {event.description}
                      </p>
                    </div>
                  </SpotlightCard>
                </div>
              </Magnetic>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom Dialog Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-all border border-white/10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/80 shadow-2xl p-2 cursor-default"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[60vh] object-contain rounded-2xl mx-auto shadow-inner"
              />
              <div className="p-6 md:p-8 text-left bg-zinc-950/50 backdrop-blur-xs">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 bg-accent text-white rounded-full">
                    {selectedImage.category}
                  </span>
                  <span className="text-xs text-zinc-400 font-semibold flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    {selectedImage.date}
                  </span>
                  <span className="text-xs text-zinc-400 font-semibold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    {selectedImage.location}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
