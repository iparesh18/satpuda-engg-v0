"use client";
import { motion } from "framer-motion";
import { Users, Briefcase, Building2, GraduationCap, Handshake, TrendingUp } from "lucide-react";
import Magnetic from "../../bits/magnetic.jsx";

export function PlacementCellSection() {
  return (
    <section className="relative bg-[#fafafa] py-20 lg:py-28 overflow-hidden font-sans">
      {/* Background Dots Pattern */}
      <div className="absolute top-20 left-10 opacity-30 pointer-events-none hidden lg:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#d60b0b" />
          </pattern>
          <rect x="0" y="0" width="60" height="60" fill="url(#dots)" />
        </svg>
      </div>
      <div className="absolute top-20 right-10 opacity-30 pointer-events-none hidden lg:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dots2" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#d60b0b" />
          </pattern>
          <rect x="0" y="0" width="60" height="60" fill="url(#dots2)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#d60b0b]" />
            <h3 className="text-[#d60b0b] font-bold tracking-[0.2em] uppercase text-sm">Placement Cell</h3>
            <div className="w-1.5 h-1.5 rounded-full bg-[#d60b0b]" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] tracking-tight leading-[1.1] mb-8"
          >
            Connecting Students To <br className="hidden md:block" />
            <span className="text-[#d60b0b] relative inline-block">
              Successful Careers
              {/* Animated SVG Underline */}
              <motion.svg 
                className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-4 text-[#d60b0b]" 
                viewBox="0 0 400 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
              >
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                  d="M2 15C100 5 250 -5 398 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" 
                />
              </motion.svg>
            </span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-8 md:w-12 h-px bg-[#d60b0b]/60 origin-left" 
            />
            <p className="text-[#475569] font-medium text-sm md:text-base tracking-wide">
              Building industry connections. Creating opportunities. Transforming futures.
            </p>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-8 md:w-12 h-px bg-[#d60b0b]/60 origin-right" 
            />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[#334155] leading-relaxed text-[15px] md:text-base mx-auto max-w-3xl"
          >
            The Placement Cell of <span className="text-[#d60b0b] font-bold">Satpuda College of Engineering & Polytechnic</span> serves as a bridge 
            between talented students and leading organizations. Through strong corporate partnerships, 
            campus recruitment drives, internship opportunities and career development initiatives, 
            our dedicated team ensures that students are well-prepared to excel in 
            today's competitive professional world.
          </motion.p>
        </div>

        {/* Divider & Secondary Heading */}
        <div className="text-center mb-10">
          <div className="flex flex-col items-center justify-center">
            <Magnetic intensity={0.2}>
              <div className="w-14 h-14 rounded-full bg-[#d60b0b]/10 flex items-center justify-center mb-4 text-[#d60b0b] cursor-pointer hover:bg-[#d60b0b] hover:text-white transition-colors duration-300">
                <Users size={24} />
              </div>
            </Magnetic>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0f172a] leading-tight">
              Meet The People Behind <br />
              <span className="text-[#d60b0b]">Every Placement Success</span>
            </h3>
            <div className="flex items-center justify-center gap-1.5 mt-4">
              <div className="w-10 h-px bg-[#d60b0b]/40" />
              <div className="flex gap-1">
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} className="w-1 h-1 rounded-full bg-[#d60b0b]" />
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} className="w-1 h-1 rounded-full bg-[#d60b0b]" />
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="w-1 h-1 rounded-full bg-[#d60b0b]" />
              </div>
              <div className="w-10 h-px bg-[#d60b0b]/40" />
            </div>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto mb-12">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(214, 11, 11, 0.15)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-gray-100 cursor-pointer"
          >
            {/* Floating Left Icon */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden md:block z-20">
              <Magnetic intensity={0.3}>
                <div className="w-12 h-12 bg-white rounded-xl shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)] flex items-center justify-center border border-gray-50">
                  <Briefcase className="w-5 h-5 text-[#d60b0b] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" strokeWidth={2} />
                </div>
              </Magnetic>
            </div>

            <div className="shrink-0 relative">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-[6px] border-white shadow-lg bg-[radial-gradient(circle_at_center,#f87171_0%,#b91c1c_100%)]">
                {/* Fallback image if user doesn't have one */}
                <img src="/images/Dr. Gorakhnath bhure.webp" onError={(e) => {e.target.src = "https://ui-avatars.com/api/?name=Rahul+Mishra&background=d60b0b&color=fff&size=150"}} alt="Dr. Gorakhnath Bhure" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out" loading="lazy" />
              </div>
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-1 group-hover:text-[#d60b0b] transition-colors duration-300">Dr. Gorakhnath Bhure</h4>
              <p className="text-[#d60b0b] font-semibold text-sm mb-4">Training & Placement Officer</p>
              <motion.div 
                className="w-full h-px bg-gray-100 mb-4" 
                whileHover={{ scaleX: 1.05 }}
              />
              <p className="text-[#64748b] text-sm leading-relaxed">
                Leading campus recruitment initiatives, corporate relations and student placement activities to empower careers and build strong industry connections.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(214, 11, 11, 0.15)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
            className="group relative bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-gray-100 cursor-pointer"
          >
            {/* Floating Right Icon */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden md:block z-20">
              <Magnetic intensity={0.3}>
                <div className="w-12 h-12 bg-white rounded-xl shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)] flex items-center justify-center border border-gray-50">
                  <Users className="w-5 h-5 text-[#d60b0b] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" strokeWidth={2} />
                </div>
              </Magnetic>
            </div>

            <div className="shrink-0 relative">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-[6px] border-white shadow-lg bg-[radial-gradient(circle_at_center,#f87171_0%,#b91c1c_100%)]">
                {/* Fallback image if user doesn't have one */}
                <img src="/images/mansuri sir.webp" onError={(e) => {e.target.src = "https://ui-avatars.com/api/?name=Amit+Sahu&background=d60b0b&color=fff&size=150"}} alt="Mr. Amit Sahu" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out" loading="lazy" />
              </div>
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-1 group-hover:text-[#d60b0b] transition-colors duration-300">Mohd. Firoz Mansuri</h4>
              <p className="text-[#d60b0b] font-semibold text-sm mb-4">Training & Placement Officer</p>
              <motion.div 
                className="w-full h-px bg-gray-100 mb-4" 
                whileHover={{ scaleX: 1.05 }}
              />
              <p className="text-[#64748b] text-sm leading-relaxed">
                Strengthening industry partnerships, organizing recruitment drives and enhancing employability opportunities for our students across sectors.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-50 p-6 md:p-10 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-gray-100">
            
            {/* Stat 1 */}
            <div className="group flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:px-4 lg:px-8 cursor-default">
              <Magnetic intensity={0.2}>
                <div className="w-14 h-14 rounded-full bg-[#d60b0b]/10 flex items-center justify-center shrink-0 group-hover:bg-[#d60b0b] group-hover:shadow-lg transition-colors duration-300">
                  <Building2 className="w-6 h-6 text-[#d60b0b] group-hover:text-white transition-colors duration-300" />
                </div>
              </Magnetic>
              <div>
                <h4 className="text-3xl font-black text-[#d60b0b] mb-1 group-hover:-translate-y-1 transition-transform duration-300">100+</h4>
                <p className="text-sm font-semibold text-[#334155] leading-tight">Recruiters<br/>Connected</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:px-4 lg:px-8 cursor-default">
              <Magnetic intensity={0.2}>
                <div className="w-14 h-14 rounded-full bg-[#d60b0b]/10 flex items-center justify-center shrink-0 group-hover:bg-[#d60b0b] group-hover:shadow-lg transition-colors duration-300">
                  <GraduationCap className="w-6 h-6 text-[#d60b0b] group-hover:text-white transition-colors duration-300" />
                </div>
              </Magnetic>
              <div>
                <h4 className="text-3xl font-black text-[#d60b0b] mb-1 group-hover:-translate-y-1 transition-transform duration-300">500+</h4>
                <p className="text-sm font-semibold text-[#334155] leading-tight">Student<br/>Placements</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:px-4 lg:px-8 cursor-default">
              <Magnetic intensity={0.2}>
                <div className="w-14 h-14 rounded-full bg-[#d60b0b]/10 flex items-center justify-center shrink-0 group-hover:bg-[#d60b0b] group-hover:shadow-lg transition-colors duration-300">
                  <Handshake className="w-6 h-6 text-[#d60b0b] group-hover:text-white transition-colors duration-300" />
                </div>
              </Magnetic>
              <div>
                <h4 className="text-3xl font-black text-[#d60b0b] mb-1 group-hover:-translate-y-1 transition-transform duration-300">50+</h4>
                <p className="text-sm font-semibold text-[#334155] leading-tight">Industry<br/>Partnerships</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="group flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:px-4 lg:px-8 cursor-default">
              <Magnetic intensity={0.2}>
                <div className="w-14 h-14 rounded-full bg-[#d60b0b]/10 flex items-center justify-center shrink-0 group-hover:bg-[#d60b0b] group-hover:shadow-lg transition-colors duration-300">
                  <TrendingUp className="w-6 h-6 text-[#d60b0b] group-hover:text-white transition-colors duration-300" />
                </div>
              </Magnetic>
              <div>
                <h4 className="text-3xl font-black text-[#d60b0b] mb-1 group-hover:-translate-y-1 transition-transform duration-300">1000+</h4>
                <p className="text-sm font-semibold text-[#334155] leading-tight">Career<br/>Opportunities</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
