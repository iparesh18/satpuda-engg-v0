"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star, TrendingUp, Sparkles, ArrowRight, BadgeCheck, Briefcase, Calendar } from "lucide-react";
import ShinyText from "../../bits/shiny-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";
import Magnetic from "../../bits/magnetic.jsx";
import BlurText from "../../bits/blur-text.jsx";

const SUCCESS_STORIES = [
  { name: "DEWANG MALEWAR", company: "FIRST STEP INNOVATION", photo: "/images/placement/company-01.jpeg", package: "4.0 LPA", year: "2026", borderColor: "border-blue-600", logo: "/images/first step innovation.png" },
  { name: "VISHAKHA BAGHELE", company: "FIRST STEP INNOVATION", photo: "/images/placement/company-02.jpeg", package: "4.0 LPA", year: "2026", borderColor: "border-green-500", logo: "/images/first step innovation.png" },
  { name: "PREKSHA DWIVEDI", company: "FIRST STEP INNOVATION", photo: "/images/placement/company-03.jpeg", package: "4.0 LPA", year: "2026", borderColor: "border-purple-600", logo: "/images/first step innovation.png" },
  { name: "ANKUSH NANDAGOULI", company: "FIRST STEP INNOVATION", photo: "/images/placement/company-04.jpeg", package: "4.0 LPA", year: "2026", borderColor: "border-blue-600", logo: "/images/first step innovation.png" },
  { name: "RAJNEESH ASHWALE", company: "FIRST STEP INNOVATION", photo: "/images/placement/company-05.jpeg", package: "4.0 LPA", year: "2026", borderColor: "border-green-500", logo: "/images/first step innovation.png" },
  { name: "ABHISHEK MANESHWAR", company: "GR INFRAPROJECTS LTD.", photo: "/images/placement/company-06.jpeg", package: "3.25 LPA", year: "2026", borderColor: "border-purple-600", logo: "/images/gr infraproject ltd.png" },
  { name: "RANVEER SHARMA", company: "LLOYDS METALS AND ENERGY LTD", photo: "/images/placement/company-07.jpeg", package: "5.5 LPA", year: "2026", borderColor: "border-blue-600", logo: "/images/lloyds-metals.jpg" },
  { name: "HARSHIT SELOKAR", company: "GR INFRAPROJECTS LTD.", photo: "/images/placement/company-08.jpeg", package: "3.25 LPA", year: "2026", borderColor: "border-green-500", logo: "/images/gr infraproject ltd.png" },
  { name: "ANKIT BANDHE", company: "LLOYDS METALS AND ENERGY LTD", photo: "/images/placement/company-09.jpeg", package: "3.7 LPA", year: "2026", borderColor: "border-purple-600", logo: "/images/lloyds-metals.jpg" },
  { name: "HIMANSHU DORAS", company: "GR INFRAPROJECTS LTD.", photo: "/images/placement/company-10.jpeg", package: "3.25 LPA", year: "2026", borderColor: "border-blue-600", logo: "/images/gr infraproject ltd.png" },
  { name: "DISHANT THAKRE", company: "LLOYDS METALS AND ENERGY LTD", photo: "/images/placement/company-11.jpeg", package: "3.7 LPA", year: "2026", borderColor: "border-green-500", logo: "/images/lloyds-metals.jpg" },
  { name: "OM DUBEY", company: "GR INFRAPROJECTS LTD.", photo: "/images/placement/company-12.jpeg", package: "3.25 LPA", year: "2026", borderColor: "border-purple-600", logo: "/images/gr infraproject ltd.png" },
  { name: "VINENDRA PAGARWAR", company: "GR INFRAPROJECTS LTD.", photo: "/images/placement/company-13.jpeg", package: "3.25 LPA", year: "2026", borderColor: "border-blue-600", logo: "/images/gr infraproject ltd.png" },
  { name: "DIPANSHU", company: "LLOYDS METALS AND ENERGY LTD", photo: "/images/placement/company-14.jpeg", package: "3.7 LPA", year: "2026", borderColor: "border-green-500", logo: "/images/lloyds-metals.jpg" },
  { name: "NAVEEN GAJBHIYE", company: "GR INFRAPROJECTS LTD.", photo: "/images/placement/company-15.jpeg", package: "3.25 LPA", year: "2026", borderColor: "border-purple-600", logo: "/images/gr infraproject ltd.png" },
  { name: "VIJESH KUMAR", company: "LLOYDS METALS AND ENERGY LTD", photo: "/images/placement/company-16.jpeg", package: "3.7 LPA", year: "2026", borderColor: "border-blue-600", logo: "/images/lloyds-metals.jpg" },
  { name: "ADNAN KHAN", company: "LLOYDS METALS AND ENERGY LTD", photo: "/images/placement/company-17.jpeg", package: "3.7 LPA", year: "2026", borderColor: "border-green-500", logo: "/images/lloyds-metals.jpg" }
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
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600">SUCCESS STORIES</span>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 text-gray-900 dark:text-white">
            From Campus To <span className="text-blue-600 relative inline-block">Careers
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 50 0 100 15" fill="transparent" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-medium">
            Real students. Real struggles. Real success.
          </p>
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
                    ? "blur-sm opacity-50 scale-95" 
                    : "blur-0 opacity-100 scale-100"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`w-[350px] md:w-[400px] h-auto p-0 rounded-[2rem] overflow-hidden bg-white shadow-xl flex flex-col group border-b-4 ${story.borderColor} transition-transform duration-500 hover:-translate-y-2`}>
                  {/* Top Image Part */}
                  <div className="relative h-[250px] md:h-[280px] w-full bg-gray-100">
                    <img src={story.photo} alt={story.name} className="w-full h-full object-cover object-[50%_15%]" />
                  </div>

                  {/* Bottom White Part */}
                  <div className="relative bg-white pt-10 pb-6 px-6 flex-grow flex flex-col">
                    {/* Company Logo Floating */}
                    <div className="absolute -top-8 left-6 w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center p-2 z-10 overflow-hidden">
                      <img src={story.logo} alt={story.company} className="w-full h-full object-contain" />
                    </div>

                    {/* Name & Company */}
                    <div className="mb-6 pl-[88px]">
                      <div className="flex items-center gap-1.5 mb-1">
                        <h4 className="text-xl font-bold text-gray-900 leading-none truncate">{story.name}</h4>
                        <BadgeCheck className="w-5 h-5 text-blue-600 shrink-0" />
                      </div>
                      <p className="text-sm font-semibold text-blue-600 truncate">{story.company}</p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">PACKAGE</p>
                          <p className="text-base font-black text-gray-900 leading-none">{story.package}</p>
                        </div>
                      </div>

                      <div className="w-px h-10 bg-gray-100" />

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">PLACED IN</p>
                          <p className="text-base font-black text-gray-900 leading-none">{story.year}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
          animation: marquee-smooth 80s linear infinite;
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

