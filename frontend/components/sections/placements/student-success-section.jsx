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
    name: "Placement Achiever 01",
    package: "Company 01",
    photo: "/images/placement/company-01.jpeg",
    doubt: "Aspiring young professional",
    confidence: "Successfully Placed",
    quote: "Grateful for the exceptional training and mentorship that shaped my career at Satpuda College.",
    color: "from-blue-500/10 to-blue-600/10"
  },
  {
    name: "Placement Achiever 02",
    package: "Company 02",
    photo: "/images/placement/company-02.jpeg",
    doubt: "Dedicated student",
    confidence: "Industry Ready",
    quote: "The hands-on projects and industry exposure prepared me perfectly for my role.",
    color: "from-purple-500/10 to-purple-600/10"
  },
  {
    name: "Placement Achiever 03",
    package: "Company 03",
    photo: "/images/placement/company-03.jpeg",
    doubt: "Hard-working scholar",
    confidence: "Career Launched",
    quote: "Satpuda's focus on both technical and soft skills made all the difference in my success.",
    color: "from-orange-500/10 to-orange-600/10"
  },
  {
    name: "Placement Achiever 04",
    package: "Company 04",
    photo: "/images/placement/company-04.jpeg",
    doubt: "Passionate learner",
    confidence: "Dream Achieved",
    quote: "The faculty's dedication and the college's network opened doors I didn't know existed.",
    color: "from-pink-500/10 to-rose-600/10"
  },
  {
    name: "Placement Achiever 05",
    package: "Company 05",
    photo: "/images/placement/company-05.jpeg",
    doubt: "Ambitious engineer",
    confidence: "Goal Accomplished",
    quote: "Every class, every project, every mentor interaction was a stepping stone to my success.",
    color: "from-green-500/10 to-green-600/10"
  },
  {
    name: "Placement Achiever 06",
    package: "Company 06",
    photo: "/images/placement/company-06.jpeg",
    doubt: "Determined student",
    confidence: "Professional Growth",
    quote: "The curriculum balanced theory with real-world applications, making me job-ready.",
    color: "from-red-500/10 to-red-600/10"
  },
  {
    name: "Placement Achiever 07",
    package: "Company 07",
    photo: "/images/placement/company-07.jpeg",
    doubt: "Driven individual",
    confidence: "Career Success",
    quote: "I credit my placement success to Satpuda's rigorous training and ethical values.",
    color: "from-yellow-500/10 to-yellow-600/10"
  },
  {
    name: "Placement Achiever 08",
    package: "Company 08",
    photo: "/images/placement/company-08.jpeg",
    doubt: "Committed scholar",
    confidence: "Dreams Realized",
    quote: "The mentorship and guidance I received transformed me into a confident professional.",
    color: "from-indigo-500/10 to-indigo-600/10"
  },
  {
    name: "Placement Achiever 09",
    package: "Company 09",
    photo: "/images/placement/company-09.jpeg",
    doubt: "Passionate engineer",
    confidence: "Milestone Reached",
    quote: "Satpuda's industry connections and internship programs were game-changers for me.",
    color: "from-cyan-500/10 to-cyan-600/10"
  },
  {
    name: "Placement Achiever 10",
    package: "Company 10",
    photo: "/images/placement/company-10.jpeg",
    doubt: "Focused professional",
    confidence: "Opportunity Seized",
    quote: "The college's placement cell's support and guidance made the journey smooth.",
    color: "from-teal-500/10 to-teal-600/10"
  },
  {
    name: "Placement Achiever 11",
    package: "Company 11",
    photo: "/images/placement/company-11.jpeg",
    doubt: "Motivated learner",
    confidence: "Success Achieved",
    quote: "Every skill I needed for my job, I learned and perfected at Satpuda.",
    color: "from-lime-500/10 to-lime-600/10"
  },
  {
    name: "Placement Achiever 12",
    package: "Company 12",
    photo: "/images/placement/company-12.jpeg",
    doubt: "Diligent student",
    confidence: "Goals Surpassed",
    quote: "The college's emphasis on innovation and practical learning set me apart.",
    color: "from-sky-500/10 to-sky-600/10"
  },
  {
    name: "Placement Achiever 13",
    package: "Company 13",
    photo: "/images/placement/company-13.jpeg",
    doubt: "Dedicated professional",
    confidence: "Career Established",
    quote: "I'm grateful for the holistic development approach that Satpuda provides.",
    color: "from-violet-500/10 to-violet-600/10"
  },
  {
    name: "Placement Achiever 14",
    package: "Company 14",
    photo: "/images/placement/company-14.jpeg",
    doubt: "Hard-working achiever",
    confidence: "Milestone Crossed",
    quote: "The peer learning and collaborative environment at Satpuda accelerated my growth.",
    color: "from-fuchsia-500/10 to-fuchsia-600/10"
  },
  {
    name: "Placement Achiever 15",
    package: "Company 15",
    photo: "/images/placement/company-15.jpeg",
    doubt: "Aspiring expert",
    confidence: "Excellence Attained",
    quote: "Satpuda's reputation is well-deserved; the education quality is outstanding.",
    color: "from-amber-500/10 to-amber-600/10"
  },
  {
    name: "Placement Achiever 16",
    package: "Company 16",
    photo: "/images/placement/company-16.jpeg",
    doubt: "Passionate technologist",
    confidence: "Future Ready",
    quote: "The college prepared me not just for a job, but for a fulfilling career.",
    color: "from-rose-500/10 to-rose-600/10"
  },
  {
    name: "Placement Achiever 17",
    package: "Company 17",
    photo: "/images/placement/company-17.jpeg",
    doubt: "Committed graduate",
    confidence: "Dream Position",
    quote: "I recommend Satpuda to any student seeking quality education and placements.",
    color: "from-slate-500/10 to-slate-600/10"
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

