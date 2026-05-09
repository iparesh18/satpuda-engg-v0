"use client";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { BookOpen, Briefcase, Building2, ArrowRight } from "lucide-react";

export function WhyChooseUsSection() {
  const cards = [
    {
      icon: <BookOpen className="h-7 w-7" />,
      title: "Academic Excellence",
      description: "Satpuda College is committed to delivering top-notch technical education with state-of-the-art labs and experienced faculty."
    },
    {
      icon: <Briefcase className="h-7 w-7" />,
      title: "Placement Growth",
      description: "With a dedicated Training & Placement Cell, we ensure students are industry-ready for top multinational companies."
    },
    {
      icon: <Building2 className="h-7 w-7" />,
      title: "Campus Life",
      description: "From modern infrastructure to sports and hostel facilities, we provide a dynamic environment for development."
    }
  ];
  return (<section className="py-24 bg-background">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="inline-block text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-4">
          Why Choose Us
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-[1.1] tracking-tight">
          Building Skills, <br />
          <span className="text-foreground/40">Shaping Futures!</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((card, index) => (<motion.div 
          key={index} 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ y: -10 }}
          className="group bg-card/50 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-sm border border-border hover:shadow-2xl hover:border-primary/30 transition-all duration-500"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
            {card.icon}
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">{card.title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-8 text-sm lg:text-base">{card.description}</p>
          <a href="#" className="inline-flex items-center gap-3 text-sm font-bold text-primary uppercase tracking-widest hover:text-accent transition-colors group/link">
            Apply Now
            <ArrowRight className="h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
          </a>
        </motion.div>))}
      </div>
    </div>
  </section>);
}
