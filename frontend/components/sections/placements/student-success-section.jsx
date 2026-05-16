"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import ShinyText from "../../bits/shiny-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";
import Magnetic from "../../bits/magnetic.jsx";
import BlurText from "../../bits/blur-text.jsx";

const SUCCESS_STORIES = [
  {
    name: "Aditya Raj",
    package: "45 LPA | Google",
    photo: "https://picsum.photos/400/400?random=11",
    doubt: "Non-tech background student",
    confidence: "Software Engineer at Google",
    quote: "Satpuda gave me the foundation and the confidence to crack top-tier companies. The mentors are world-class.",
    color: "from-blue-500/10 to-blue-600/10"
  },
  {
    name: "Sneha Verma",
    package: "32 LPA | Microsoft",
    photo: "https://picsum.photos/400/400?random=12",
    doubt: "Fear of coding algorithms",
    confidence: "Cloud Specialist at Microsoft",
    quote: "The practical approach to learning and the hands-on labs made all the difference in my career.",
    color: "from-purple-500/10 to-purple-600/10"
  },
  {
    name: "Rohan Das",
    package: "28 LPA | Amazon",
    photo: "https://picsum.photos/400/400?random=13",
    doubt: "Struggled with communication",
    confidence: "SDE-2 at Amazon",
    quote: "It's not just about technical skills; Satpuda groomed my overall personality for the global stage.",
    color: "from-orange-500/10 to-orange-600/10"
  },
  {
    name: "Kriti Singh",
    package: "25 LPA | Meta",
    photo: "https://picsum.photos/400/400?random=14",
    doubt: "Lacked industry exposure",
    confidence: "Product Designer at Meta",
    quote: "The internship opportunities and industry connections provided by the college are unparalleled.",
    color: "from-pink-500/10 to-rose-600/10"
  }
];

export function StudentSuccessSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative py-32 bg-background overflow-hidden flex flex-col">
      {/* Header Content - Top Aligned */}
      <div className="container mx-auto px-6 mb-16 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary/40" />
            <ShinyText text="ALUMNI IMPACT" speed={3} color="#d60b0b" className="text-xs font-bold tracking-[0.4em] uppercase text-primary/80" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
            Where <span className="text-primary italic">Futures</span> Get Hired
          </h2>
          <BlurText
            text="Cinematic transformation stories of our alumni who evolved from students to industry leaders at global giants."
            className="text-muted-foreground text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
            delay={0.04}
          />
        </motion.div>
      </div>

      {/* Marquee Section - Below Header */}
      <div className="relative mt-10">
        {/* Gradients to fade out the edges */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-linear-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-linear-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden group/marquee relative">
          <div className="flex py-10 animate-marquee-smooth pause-on-hover">
            {[...SUCCESS_STORIES, ...SUCCESS_STORIES, ...SUCCESS_STORIES].map((story, index) => (
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
                  <SpotlightCard className={`w-[320px] md:w-[450px] h-[500px] md:h-[550px] p-8 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border border-border/40 bg-linear-to-br ${story.color} backdrop-blur-2xl transition-all duration-700 relative flex flex-col group/card`}>
                    
                    <div className="absolute top-8 right-10 opacity-10 group-hover/card:opacity-20 transition-opacity">
                      <Quote className="w-12 h-12" />
                    </div>

                    <div className="flex items-center gap-5 mb-8 md:mb-10">
                      <div className="relative">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 border-primary/20 group-hover/card:border-primary/50 transition-colors">
                          <img src={story.photo} alt={story.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-accent text-accent-foreground flex items-center justify-center shadow-lg">
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold tracking-tight">{story.name}</h4>
                        <p className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest">{story.package}</p>
                      </div>
                    </div>

                    <div className="flex-grow space-y-8 md:space-y-10">
                      <div className="space-y-2 md:space-y-3">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">The Struggle</p>
                        <p className="text-lg md:text-xl font-medium line-through decoration-primary/30 opacity-60 italic leading-tight">{story.doubt}</p>
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="w-full h-px bg-linear-to-r from-transparent via-border to-transparent relative">
                           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center">
                              <TrendingUp className="w-4 h-4 text-primary" />
                           </div>
                        </div>
                      </div>

                      <div className="space-y-2 md:space-y-3">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">The Achievement</p>
                        <p className="text-xl md:text-3xl font-black tracking-tight text-foreground leading-none">{story.confidence}</p>
                      </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-border/50">
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic line-clamp-3 group-hover/card:line-clamp-none transition-all duration-500">
                        "{story.quote}"
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
        @keyframes marquee-smooth {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-smooth {
          animation: marquee-smooth 50s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Bottom CTA */}
      <div className="container mx-auto px-6 mt-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md"
        >
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          <p className="text-xs md:text-base font-bold text-foreground uppercase tracking-[0.2em]">
            Join the 3000+ Success Stories. <span className="text-primary italic cursor-pointer hover:underline">Apply Now</span>
          </p>
          <ArrowRight className="w-5 h-5 text-primary" />
        </motion.div>
      </div>
    </section>
  );
}

