"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, ArrowRight, Award, Briefcase, Globe } from "lucide-react";
import SpotlightCard from "../../bits/spotlight-card.jsx";
import Magnetic from "../../bits/magnetic.jsx";

gsap.registerPlugin(ScrollTrigger);

const PARTNERS = [
  { name: "Mahindra & Mahindra", type: "Manufacturing", icon: Building2, color: "from-[#d60b0b]/20 to-[#d60b0b]/20" },
  { name: "Tata Consultancy Services", type: "Technology", icon: Globe, color: "from-blue-500/20 to-blue-600/20" },
  { name: "L&T Construction", type: "Infrastructure", icon: Award, color: "from-yellow-500/20 to-yellow-600/20" },
  { name: "Reliance Industries", type: "Conglomerate", icon: Briefcase, color: "from-green-500/20 to-green-600/20" },
  { name: "Infosys Limited", type: "IT Services", icon: Globe, color: "from-purple-500/20 to-purple-600/20" },
  { name: "Wipro Tech", type: "Software", icon: Building2, color: "from-cyan-500/20 to-cyan-600/20" },
];

export function HorizontalScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-background">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen w-[400vw] flex flex-row relative items-center px-[10vw]">
          
          {/* Intro Slide */}
          <div className="h-screen w-[100vw] flex flex-col justify-center shrink-0 pr-[20vw]">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-6"
            >
              Industry Network
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight mb-8">
              Our Elite <br />
              <span className="text-muted-foreground/30 italic">Recruitment</span> <br />
              Partners
            </h2>
            <div className="flex items-center gap-6">
              <div className="w-20 h-px bg-border" />
              <p className="text-muted-foreground text-xl max-w-md">
                Scroll to explore the global brands that hire our exceptional talent every year.
              </p>
            </div>
          </div>

          {/* Partner Cards Slide */}
          {PARTNERS.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div key={index} className="h-screen w-[50vw] flex items-center justify-center shrink-0 px-8">
                <Magnetic intensity={0.1}>
                  <SpotlightCard className={`w-full max-w-md aspect-square rounded-[3rem] bg-linear-to-br ${partner.color} border border-white/10 backdrop-blur-3xl p-12 flex flex-col justify-between group`}>
                    <div>
                      <div className="w-20 h-20 rounded-3xl bg-background/50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-4xl font-bold tracking-tight mb-4">{partner.name}</h3>
                      <p className="text-primary/60 font-bold uppercase tracking-widest text-sm">{partner.type}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground text-sm font-medium">Hiring Partner since 2018</span>
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </SpotlightCard>
                </Magnetic>
              </div>
            );
          })}

          {/* Final CTA Slide */}
          <div className="h-screen w-[100vw] flex flex-col justify-center items-center shrink-0">
             <div className="relative">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10"
                />
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-center mb-12">
                  Ready to <br />
                  <span className="text-primary italic">Join Them?</span>
                </h2>
                <div className="flex justify-center">
                   <button className="group relative px-12 py-6 bg-accent text-accent-foreground rounded-2xl font-black text-xl overflow-hidden shadow-2xl hover:-translate-y-1 transition-all">
                      <span className="relative z-10 flex items-center gap-4">
                        GET STARTED NOW
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                   </button>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

