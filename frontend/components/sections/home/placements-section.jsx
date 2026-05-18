"use client";
import { motion } from "framer-motion";
import { Button } from "../../ui/button";
import { Trophy, Users, Building2, Star, ArrowRight } from "lucide-react";
import { SectionHeading } from "./section-heading.jsx";

export function PlacementsSection() {
  const stats = [
    { icon: <Trophy className="h-6 w-6" />, value: "#1", label: "College of Choice" },
    { icon: <Users className="h-6 w-6" />, value: "3000+", label: "Students Placed" },
    { icon: <Building2 className="h-6 w-6" />, value: "200+", label: "Recruiting Companies" },
    { icon: <Star className="h-6 w-6" />, value: "Top", label: "Courses Available" },
  ];

  const companies = [
    { name: "Mahindra", logo: "/images/mahindra logo.png" },
    { name: "Suzuki", logo: "/images/suzuki logo.png" },
    { name: "Hero", logo: "/images/Hero logo.png" },
    { name: "Tata", logo: "/images/tata.png" },
    { name: "Apollo", logo: "/images/apollo logo.png" },
    { name: "Eicher", logo: "/images/eicher logo.png" },
    { name: "Volvo", logo: "/images/volvo logo.jpg" },
    { name: "MRF", logo: "/images/mrf.png" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-background overflow-hidden py-16 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <SectionHeading
              align="left"
              eyebrow="Our Achievements"
              title="Record Breaking Placements"
              description="Take the first step towards a successful career with Satpuda College. Our institution is dedicated to nurturing young minds through world-class education and industry-oriented training."
              className="mb-10 mx-0"
              highlights={['Record Breaking', 'Placements']}
            />

            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{stat.value}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-16 px-10 rounded-2xl text-lg font-bold shadow-2xl transition-all duration-500 hover:-translate-y-1">
                Call for Admission
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* Right - Orbiting Logos */}
          <div className="relative flex items-center justify-center order-1 py-12 lg:order-2 lg:py-0">
            
            {/* Animated Orbit Rings */}
            <motion.div 
              className="relative w-80 h-80 lg:w-112.5 lg:h-112.5 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Outer Rings */}
              <div className="absolute inset-0 rounded-full border border-border" />
              <div className="absolute inset-12 rounded-full border border-border" />
              <div className="absolute inset-24 rounded-full border border-border" />
              
              {/* Rotating Container */}
              <motion.div 
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                {companies.map((company, index) => {
                  const angle = (index * (360 / companies.length));
                  return (
                    <div 
                      key={company.name} 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{ 
                        transform: `rotate(${angle}deg) translate(${typeof window !== 'undefined' && window.innerWidth > 1024 ? 250 : 180}px) rotate(-${angle}deg)` 
                      }}
                    >
                      <motion.div 
                        className="w-16 h-16 lg:w-24 lg:h-24 bg-white rounded-full border border-border shadow-2xl flex items-center justify-center p-3.5 lg:p-5 hover:border-primary/50 transition-all duration-300 group overflow-hidden"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      >
                        <img 
                          src={company.logo} 
                          alt={company.name} 
                          className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300" 
                        />
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

              {/* Center LPA - The Sun */}
              <motion.div 
                className="relative z-10 w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-accent flex flex-col items-center justify-center text-accent-foreground shadow-[0_0_80px_rgba(var(--accent),0.3)] border-4 border-background"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center">
                  <p className="text-4xl lg:text-6xl font-black leading-none tracking-tighter">16.3</p>
                  <p className="text-xs lg:text-sm font-bold uppercase tracking-[0.2em] mt-1">LPA</p>
                </div>
                <div className="absolute -bottom-4 bg-white text-[#02060d] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">
                  Highest Domestic
                </div>
              </motion.div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

