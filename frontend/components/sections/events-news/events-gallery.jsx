"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight, Sparkles, Camera, MapPin } from "lucide-react";
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
    color: "from-blue-500/10 to-cyan-600/10"
  },
  {
    title: "Cultural Extravaganza",
    date: "February 20, 2024",
    category: "Cultural",
    location: "Open Air Theatre",
    image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070",
    color: "from-purple-500/10 to-pink-600/10"
  },
  {
    title: "National Mining Seminar",
    date: "January 10, 2024",
    category: "Academic",
    location: "Seminar Hall A",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
    color: "from-amber-500/10 to-orange-600/10"
  },
  {
    title: "Sports Meet 2023",
    date: "December 05, 2023",
    category: "Sports",
    location: "College Grounds",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070",
    color: "from-green-500/10 to-emerald-600/10"
  },
  {
    title: "Robotics Workshop",
    date: "November 18, 2023",
    category: "Workshop",
    location: "Innovation Lab",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070",
    color: "from-[#d60b0b]/10 to-[#d60b0b]/10"
  },
  {
    title: "Alumni Meet 2023",
    date: "October 12, 2023",
    category: "Networking",
    location: "Grand Ballroom",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070",
    color: "from-indigo-500/10 to-blue-600/10"
  }
];

export function EventsGallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative py-32 bg-background overflow-hidden flex flex-col">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Content */}
      <div className="container mx-auto px-6 mb-20 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary/40" />
            <ShinyText text="CAMPUS VIBRANCY" speed={3} color="#d60b0b" className="text-xs font-bold tracking-[0.4em] uppercase text-primary/80" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
            Satpuda Event <span className="text-primary italic">Gallery</span>
          </h2>
          <BlurText
            text="Explore the cinematic moments of technical excellence, cultural heritage, and student life at Satpuda."
            className="text-muted-foreground text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
            delay={0.04}
          />
        </motion.div>
      </div>

      {/* Marquee Section */}
      <div className="relative mt-10">
        {/* Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-linear-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-linear-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden group/marquee relative">
          <div className="flex py-10 animate-marquee-slow pause-on-hover">
            {[...GALLERY_EVENTS, ...GALLERY_EVENTS].map((event, index) => (
              <div 
                key={index} 
                className={`flex-shrink-0 px-4 transition-all duration-700 ${
                  hoveredIndex !== null && hoveredIndex !== index 
                    ? "blur-md opacity-30 scale-95" 
                    : "blur-0 opacity-100 scale-100"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Magnetic intensity={0.1}>
                  <SpotlightCard className={`w-[320px] md:w-[420px] rounded-[2.5rem] md:rounded-[3rem] border border-border/40 bg-linear-to-br ${event.color} backdrop-blur-2xl transition-all duration-700 relative flex flex-col group/card overflow-hidden h-full pb-8`}>
                    
                    {/* Cover Photo */}
                    <div className="relative w-full h-[220px] md:h-[260px] overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60" />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2">
                        <Tag className="w-3 h-3 text-primary" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">{event.category}</span>
                      </div>
                      
                      <div className="absolute bottom-6 left-6">
                         <div className="flex items-center gap-2 text-white/80">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span className="text-xs font-medium">{event.date}</span>
                         </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-8 mt-8 flex flex-col flex-grow">
                      <h4 className="text-2xl md:text-3xl font-black tracking-tight text-foreground leading-tight mb-4 group-hover/card:text-primary transition-colors">
                        {event.title}
                      </h4>
                      
                      <div className="flex items-center gap-2 mb-6 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">{event.location}</span>
                      </div>

                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3 mb-8">
                        {event.description}
                      </p>
                    </div>
                  </SpotlightCard>
                </Magnetic>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 40s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Bottom CTA */}
      <div className="container mx-auto px-6 mt-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md cursor-pointer group/cta"
        >
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          <p className="text-xs md:text-base font-bold text-foreground uppercase tracking-[0.2em]">
            Witness the legacy in action. <span className="text-primary italic group-hover/cta:underline">Explore Full Archives</span>
          </p>
          <ArrowRight className="w-5 h-5 text-primary group-hover/cta:translate-x-1 transition-transform" />
        </motion.div>
      </div>
    </section>
  );
}


