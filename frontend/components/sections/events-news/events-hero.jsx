"use client";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export function EventsHero() {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden bg-background">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-foreground/60 text-sm mb-6"
            >
              <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                <Home size={14} /> Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-foreground/40">Events & News</span>
              <ChevronRight size={14} />
              <span className="text-primary font-medium">Recent Highlights</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 tracking-tighter uppercase"
            >
              Recent <span className="text-primary">Highlights</span>
            </motion.h1>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-1.5 bg-primary mb-8 rounded-full"
            />

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-foreground/60 leading-relaxed"
            >
              Stay updated with the latest happenings, events and activities at Satpuda College.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
