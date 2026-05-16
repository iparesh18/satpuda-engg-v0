"use client";
import { motion } from "framer-motion";
import { Trophy, TrendingUp, Users, Building2 } from "lucide-react";
import BlurText from "../../bits/blur-text.jsx";
import ShinyText from "../../bits/shiny-text.jsx";

export function PlacementsHeroSection() {
  const stats = [
    { label: "Highest Package", value: "4.20 LPA", icon: Trophy, color: "text-yellow-500" },
    { label: "Top Recruiters", value: "200+", icon: Building2, color: "text-blue-500" },
    { label: "Students Placed", value: "3000+", icon: Users, color: "text-green-500" },
    { label: "Placement Rate", value: "95%", icon: TrendingUp, color: "text-purple-500" },
  ];

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ShinyText text="CAREER EXCELLENCE HUB" speed={3} color="#d60b0b" className="text-sm font-black tracking-[0.3em] uppercase mb-6 inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
            Launch Your <br />
            <span className="text-primary italic">Global Career</span>
          </h1>

          <BlurText
            text="Bridging the gap between academic excellence and industry leadership. Our placement cell ensures every student finds their dream career path."
            className="text-muted-foreground text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
            delay={0.05}
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative p-8 rounded-[2.5rem] bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/40 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-3xl md:text-4xl font-black tracking-tighter mb-2 group-hover:text-primary transition-colors">{stat.value}</p>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

