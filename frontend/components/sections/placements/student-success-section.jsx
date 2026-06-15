"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star, TrendingUp, Sparkles, ArrowRight, BadgeCheck, Briefcase, Calendar, GraduationCap } from "lucide-react";
import ShinyText from "../../bits/shiny-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";
import Magnetic from "../../bits/magnetic.jsx";
import BlurText from "../../bits/blur-text.jsx";

const SUCCESS_STORIES = [
  { name: "DEWANG MALEWAR", company: "FIRST STEP INNOVATION", photo: "/images/placement/company-01.webp", package: "4.0 LPA", year: "2026",branch:"CSE", borderColor: "border-blue-600", logo: "/images/first step innovation.webp" },
  { name: "YOJNA PARDHI", company: "ZENUS GROUP", photo: "/images/placement/yojna pardhi.webp", package: "7.0 LPA", year: "2026",branch:"CSE", borderColor: "border-purple-600", logo: "/images/zenus group.webp" },
  { name: "VISHAKHA BAGHELE", company: "FIRST STEP INNOVATION", photo: "/images/placement/company-02.webp", package: "4.0 LPA", year: "2026",branch:"CSE", borderColor: "border-green-500", logo: "/images/first step innovation.webp" },
  { name: "PREKSHA DWIVEDI", company: "ZENUS GROUP", photo: "/images/placement/company-03.webp", package: "7.0 LPA", year: "2026",branch:"CSE", borderColor: "border-purple-600", logo: "/images/zenus group.webp" },
  { name: "ANKUSH NANDAGOULI", company: "FIRST STEP INNOVATION", photo: "/images/placement/company-04.webp", package: "4.0 LPA", year: "2026",branch:"CSE", borderColor: "border-blue-600", logo: "/images/first step innovation.webp" },
  { name: "HIMANSHU PATLE", company: "ZENUS GROUP", photo: "/images/placement/himanshu patle.webp", package: "7.0 LPA", year: "2026",branch:"CSE", borderColor: "border-purple-600", logo: "/images/zenus group.webp" },
  { name: "RAJNEESH ASHWALE", company: "FIRST STEP INNOVATION", photo: "/images/placement/company-05.webp", package: "4.0 LPA", year: "2026",branch:"CSE", borderColor: "border-green-500", logo: "/images/first step innovation.webp" },
  { name: "ABHISHEK MANESHWAR", company: "GR INFRAPROJECTS LTD.", photo: "/images/placement/company-06.webp", package: "3.25 LPA", year: "2026",branch:"CIVIL", borderColor: "border-purple-600", logo: "/images/gr infraproject ltd.webp" },
  { name: "RANVEER SHARMA", company: "LLOYDS METALS AND ENERGY LTD", photo: "/images/placement/company-07.webp", package: "3.7 LPA", year: "2026",branch:"MINING", borderColor: "border-blue-600", logo: "/images/lloyds-metals.webp" },
  { name: "GAGAN PATLE", company: "ZENUS GROUP", photo: "/images/placement/gagan patle.webp", package: "4.0 LPA", year: "2026",branch:"Poly. Elec", borderColor: "border-purple-600", logo: "/images/zenus group.webp" },
  { name: "HARSHIT SELOKAR", company: "GR INFRAPROJECTS LTD.", photo: "/images/placement/company-08.webp", package: "3.25 LPA", year: "2026",branch:"CIVIL", borderColor: "border-green-500", logo: "/images/gr infraproject ltd.webp" },
  { name: "ANKIT BANDHE", company: "LLOYDS METALS AND ENERGY LTD", photo: "/images/placement/company-09.webp", package: "3.7 LPA", year: "2026",branch:"Mech.", borderColor: "border-purple-600", logo: "/images/lloyds-metals.webp" },
  { name: "TARUN BISEN", company: "ZENUS GROUP", photo: "/images/placement/tarun bisen.webp", package: "4.0 LPA", year: "2026",branch:"Poly. Mech.", borderColor: "border-purple-600", logo: "/images/zenus group.webp" },
  { name: "HIMANSHU DORAS", company: "GR INFRAPROJECTS LTD.", photo: "/images/placement/company-10.webp", package: "3.25 LPA", year: "2026",branch:"CIVIL", borderColor: "border-blue-600", logo: "/images/gr infraproject ltd.webp" },
  { name: "DISHANT THAKRE", company: "LLOYDS METALS AND ENERGY LTD", photo: "/images/placement/company-11.webp", package: "3.7 LPA", year: "2026",branch:"Poly. Mech.", borderColor: "border-green-500", logo: "/images/lloyds-metals.webp" },
  { name: "PRAFUL BITHLE", company: "ZENUS GROUP", photo: "/images/placement/praful bithle.webp", package: "4.0 LPA", year: "2026",branch:"Poly. Mech.", borderColor: "border-purple-600", logo: "/images/zenus group.webp" },
  { name: "OM DUBEY", company: "GR INFRAPROJECTS LTD.", photo: "/images/placement/company-12.webp", package: "3.25 LPA", year: "2026",branch:"CIVIL", borderColor: "border-purple-600", logo: "/images/gr infraproject ltd.webp" },
  { name: "DIPANSHU", company: "LLOYDS METALS AND ENERGY LTD", photo: "/images/placement/company-14.webp", package: "3.7 LPA", year: "2026",branch:"MECH", borderColor: "border-green-500", logo: "/images/lloyds-metals.webp" },
  { name: "ABHAY RAHANGDALE", company: "ZENUS GROUP", photo: "/images/placement/abhay rahangdale.webp", package: "4.0 LPA", year: "2026",branch:"Poly. Civil", borderColor: "border-purple-600", logo: "/images/zenus group.webp" },
  { name: "VINENDRA PAGARWAR", company: "GR INFRAPROJECTS LTD.", photo: "/images/placement/company-13.webp", package: "3.25 LPA", year: "2026",branch:"Poly. Civil", borderColor: "border-blue-600", logo: "/images/gr infraproject ltd.webp" },
  { name: "VIJESH KUMAR", company: "LLOYDS METALS AND ENERGY LTD", photo: "/images/placement/company-16.webp", package: "3.7 LPA", year: "2026",branch:"Poly. Elec", borderColor: "border-blue-600", logo: "/images/lloyds-metals.webp" },
  { name: "YASH SHRIVASTAVA", company: "ZENUS GROUP", photo: "/images/placement/yash Shrivastava.webp", package: "4.0 LPA", year: "2026",branch:"Poly. Civil", borderColor: "border-purple-600", logo: "/images/zenus group.webp" },
  { name: "NAVEEN GAJBHIYE", company: "GR INFRAPROJECTS LTD.", photo: "/images/placement/company-15.webp", package: "3.25 LPA", year: "2026",branch:"Poly. Civil", borderColor: "border-purple-600", logo: "/images/gr infraproject ltd.webp" },
  { name: "ADNAN KHAN", company: "LLOYDS METALS AND ENERGY LTD", photo: "/images/placement/company-17.webp", package: "3.7 LPA", year: "2026",branch:"Mining", borderColor: "border-green-500", logo: "/images/lloyds-metals.webp" },
  { name: "SANJEET PANCHESWAR", company: "GROUP R MINING & EXPLORATION INDIA PVT LTD", photo: "/images/placement/18.webp", package: "14.3 LPA", year: "2017",branch:"Poly. (MMS)", borderColor: "border-purple-600", logo: "/images/group r.webp" },
  { name: "VINENDRA PAGARWAR", company: "ZENUS GROUP", photo: "/images/placement/vinendra pagarwar.webp", package: "4.0 LPA", year: "2026",branch:"Poly. Civil", borderColor: "border-purple-600", logo: "/images/zenus group.webp" },
  { name: "MITHLESH KHERWAR", company: "GROUP R MINING & EXPLORATION INDIA PVT LTD", photo: "/images/placement/19.webp", package: "16.3 LPA", year: "2017",branch:"Poly. (MMS)", borderColor: "border-blue-600", logo: "/images/group r.webp" },
  { name: "ASHISH KOLTE", company: "WMW SRL BACAU (EUROPE)", photo: "/images/placement/Ak.webp", package: "15.30 LPA", year: "2022",branch:"Poly. Mech.", borderColor: "border-green-500", logo: "/images/WMW logo.webp" }
];

export function StudentSuccessSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden flex flex-col">
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
        <div className="hidden md:block absolute inset-y-0 left-0 w-32 md:w-64 bg-linear-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="hidden md:block absolute inset-y-0 right-0 w-32 md:w-64 bg-linear-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

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
                <div className={`w-[280px] sm:w-[350px] md:w-[400px] h-auto p-0 rounded-[2rem] overflow-hidden bg-white shadow-xl flex flex-col group border-b-4 ${story.borderColor} transition-transform duration-500 hover:-translate-y-2`}>
                  {/* Top Image Part */}
                  <div className="relative h-[200px] sm:h-[250px] md:h-[280px] w-full bg-gray-100">
                    <img src={story.photo} alt={story.name} className="w-full h-full object-cover object-[50%_15%]" loading="lazy" />
                  </div>

                  {/* Bottom White Part */}
                  <div className="relative bg-white pt-10 pb-6 px-6 flex-grow flex flex-col">
                    {/* Company Logo Floating */}
                    <div className="absolute -top-8 left-6 w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center p-2 z-10 overflow-hidden">
                      <img src={story.logo} alt={story.company} className="w-full h-full object-contain" loading="lazy" />
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
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                          <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div>
                          <p className="text-[8px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">PACKAGE</p>
                          <p className="text-xs sm:text-base font-black text-gray-900 leading-none">{story.package}</p>
                        </div>
                      </div>

                      <div className="w-px h-8 sm:h-10 bg-gray-100" />

                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                          <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div>
                          <p className="text-[8px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">BRANCH</p>
                          <p className="text-xs sm:text-base font-black text-gray-900 leading-none">{story.branch}</p>
                        </div>
                      </div>

                      <div className="w-px h-8 sm:h-10 bg-gray-100" />

                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div>
                          <p className="text-[8px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">PLACED IN</p>
                          <p className="text-xs sm:text-base font-black text-gray-900 leading-none">{story.year}</p>
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

