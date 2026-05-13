"use client";
import { motion } from "framer-motion";
import { Trophy, Users, Briefcase, Building2 } from "lucide-react";
import ShinyText from "../../bits/shiny-text.jsx";

export function StatsBar() {
  const stats = [
    { value: "25+", label: "Years of Excellence", icon: <Trophy className="h-6 w-6" /> },
    { value: "5000+", label: "Alumni Network", icon: <Users className="h-6 w-6" /> },
    { value: "95%", label: "Placement Rate", icon: <Briefcase className="h-6 w-6" /> },
    { value: "50+", label: "Top Recruiters", icon: <Building2 className="h-6 w-6" /> },
  ];
  return (<section className="relative z-20 -mt-16">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="bg-card/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-border p-6 lg:p-10"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {stats.map((stat, index) => (<motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="text-center group"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-500">
              {stat.icon}
            </div>
            <p className="text-3xl lg:text-5xl font-bold text-foreground tracking-tighter">
              <ShinyText text={stat.value} speed={3} color="rgba(59, 130, 246, 0.85)" />
            </p>
            <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">{stat.label}</p>
          </motion.div>))}
        </div>
      </motion.div>
    </div>
  </section>);
}
