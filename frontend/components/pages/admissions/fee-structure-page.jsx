"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  GraduationCap,
  ScrollText,
  FileText,
  ShieldCheck,
  Award,
  Bus,
  LayoutGrid
} from "lucide-react";
import { Header, Footer } from "../../index.js";

// Data Definitions
const BTECH_FEES = [
  { sNo: "1.", branch: "Civil Engineering", fee: "₹55,000/-" },
  { sNo: "2.", branch: "Electrical Engineering", fee: "₹55,000/-" },
  { sNo: "3.", branch: "Mechanical Engineering", fee: "₹55,000/-" },
  { sNo: "4.", branch: "Computer Science & Engineering", fee: "₹55,000/-" },
  { sNo: "5.", branch: "Mining Engineering", fee: "₹55,000/-" },
];

const DIPLOMA_FEES = [
  { sNo: "1.", branch: "Civil Engineering", fee: "₹35,000/-" },
  { sNo: "2.", branch: "Electrical Engineering", fee: "₹35,000/-" },
  { sNo: "3.", branch: "Mechanical Engineering", fee: "₹35,000/-" },
  { sNo: "4.", branch: "Computer Science & Engineering", fee: "₹35,000/-" },
  { sNo: "5.", branch: "Mining Engineering", fee: "₹45,000/-" },
];

export default function FeeStructurePage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div>
      <Header />

      <main className="bg-slate-50 min-h-screen pb-20">
        {/* Premium Hero Section */}
        <section className="relative overflow-hidden border-b border-border/70 py-16 sm:py-24">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/overview/campus overview.webp"
              alt="Satpuda Campus Backdrop"
              className="h-full w-full object-cover object-center opacity-15"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#021545]/98 via-[#021545]/95 to-[#021545]/90" />

            {/* Soft background glow circles */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              {/* Breadcrumb */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center sm:justify-start gap-2 text-sm text-white/60 mb-6 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10"
              >
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="h-3 w-3 text-white/40" />
                <span className="text-white font-medium">Fee Structure</span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
              >
                Fee Structure
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-1 bg-accent rounded-full my-6 sm:mx-0 mx-auto"
              />

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/80 max-w-2xl text-base sm:text-lg font-light leading-relaxed"
              >
                Explore detailed fee structure for B.Tech and Diploma programs.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="mt-10 sm:mt-16 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-white shadow-sm border border-slate-100 rounded-full p-1.5 gap-1">
              <button
                onClick={() => setActiveTab("all")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "all" ? "bg-primary text-white shadow-md" : "text-slate-600 hover:text-primary hover:bg-slate-50"
                  }`}
              >
                <LayoutGrid className="h-4 w-4" /> All
              </button>
              <button
                onClick={() => setActiveTab("btech")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "btech" ? "bg-primary text-white shadow-md" : "text-slate-600 hover:text-primary hover:bg-slate-50"
                  }`}
              >
                <GraduationCap className="h-4 w-4" /> B.Tech
              </button>
              <button
                onClick={() => setActiveTab("diploma")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "diploma" ? "bg-primary text-white shadow-md" : "text-slate-600 hover:text-primary hover:bg-slate-50"
                  }`}
              >
                <ScrollText className="h-4 w-4" /> Diploma
              </button>
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            <div className="space-y-8">

              {/* B.Tech Section */}
              {(activeTab === "all" || activeTab === "btech") && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl border border-slate-100 shadow-[0_2px_20px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row"
                >
                  {/* Left Sidebar */}
                  <div className="bg-slate-50/50 border-b md:border-b-0 md:border-r border-slate-100 md:w-64 shrink-0 flex flex-col items-center justify-center p-5 md:p-8 text-center">
                    {/* Mobile = row | Desktop = column */}
                    <div className="flex items-center justify-center md:flex-col gap-3 md:gap-5 w-full">
                      <div className="h-14 w-14 md:h-24 md:w-24 bg-[#021545]/5 text-[#021545] rounded-full flex items-center justify-center shrink-0">
                        <GraduationCap className="h-7 w-7 md:h-12 md:w-12" />
                      </div>
                      <div className="flex flex-col items-start md:items-center text-left md:text-center">
                        <h2 className="text-xl md:text-3xl font-bold text-[#021545] leading-none">B.Tech</h2>
                        <p className="text-[10px] md:text-xs text-slate-500 font-medium mt-1 md:mb-6">(4 Years, 8 Semesters)</p>
                      </div>
                    </div>
                    
                    <div className="w-full h-px bg-slate-200 my-4 md:mb-6"></div>
                    
                    <h3 className="text-[#021545] text-sm md:text-base font-semibold mb-1 md:mb-2">Eligibility</h3>
                    <p className="text-xs md:text-sm text-slate-600">
                      JEE / 12th Pass<br className="hidden md:block" />(PCM)
                    </p>

                    <div className="mt-4 md:mt-8 bg-white border border-[#021545]/10 rounded-xl px-3 py-2 md:px-4 md:py-3 flex items-center justify-center md:justify-start gap-2 md:gap-3 shadow-sm w-full mx-auto">
                      <FileText className="h-4 w-4 md:h-5 md:w-5 text-[#021545] shrink-0" />
                      <div className="text-left">
                        <p className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-wider">Academic Year</p>
                        <p className="text-xs md:text-sm font-bold text-[#021545]">2025-26</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 p-4 sm:p-6 lg:p-8">
                    <div className="overflow-hidden rounded-xl border border-slate-100">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-[#021545] text-white">
                            <th className="py-3 px-3 sm:py-4 sm:px-5 font-semibold text-xs sm:text-sm">S.No.</th>
                            <th className="py-3 px-3 sm:py-4 sm:px-5 font-semibold text-xs sm:text-sm">Branch</th>
                            <th className="py-3 px-3 sm:py-4 sm:px-5 font-semibold text-xs sm:text-sm text-right">Per Year Fees</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                          {BTECH_FEES.map((item, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                              <td className="py-3 px-3 sm:py-4 sm:px-5 text-xs sm:text-sm font-medium text-slate-500">{item.sNo}</td>
                              <td className="py-3 px-3 sm:py-4 sm:px-5 text-xs sm:text-sm font-medium text-slate-800 break-words">{item.branch}</td>
                              <td className="py-3 px-3 sm:py-4 sm:px-5 text-xs sm:text-sm font-bold text-slate-700 text-right whitespace-nowrap">{item.fee}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6 bg-slate-50/80 border border-slate-100 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#021545]/5 flex items-center justify-center shrink-0 text-[#021545]">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#021545] mb-2">Additional Charges</h4>
                        <div className="text-sm text-slate-600 space-y-1.5">
                          <p><strong>₹1,500/-</strong> (Registration Fee)</p>
                          <p>Includes 1st-Year Uniform + Scholarship</p>
                          <p>(OBC - ₹30,000/- | SC/ST - ₹50,000/-) Approx</p>
                          <p className="pt-2 text-xs font-medium text-slate-500 mt-2 block border-t border-slate-200">Bus Facility for All Branches | Available for All Years</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Diploma Section */}
              {(activeTab === "all" || activeTab === "diploma") && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl border border-slate-100 shadow-[0_2px_20px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row"
                >
                  {/* Left Sidebar */}
                  <div className="bg-slate-50/50 border-b md:border-b-0 md:border-r border-slate-100 md:w-64 shrink-0 flex flex-col items-center justify-center p-5 md:p-8 text-center">
                    {/* Mobile = row | Desktop = column */}
                    <div className="flex items-center justify-center md:flex-col gap-3 md:gap-5 w-full">
                      <div className="h-14 w-14 md:h-24 md:w-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                        <ScrollText className="h-7 w-7 md:h-12 md:w-12" />
                      </div>
                      <div className="flex flex-col items-start md:items-center text-left md:text-center">
                        <h2 className="text-xl md:text-3xl font-bold text-emerald-700 leading-none">Diploma</h2>
                        <p className="text-[10px] md:text-xs text-slate-500 font-medium mt-1 md:mb-6">(2 Years, 4 Semesters)</p>
                      </div>
                    </div>
                    
                    <div className="w-full h-px bg-slate-200 my-4 md:mb-6"></div>
                    
                    <h3 className="text-emerald-700 text-sm md:text-base font-semibold mb-1 md:mb-2">Eligibility</h3>
                    <p className="text-xs md:text-sm text-slate-600">
                      2 Years ITI<br className="hidden md:block"/>Passout Only
                    </p>

                    <div className="mt-4 md:mt-8 bg-white border border-emerald-100 rounded-xl px-3 py-2 md:px-4 md:py-3 flex items-center justify-center md:justify-start gap-2 md:gap-3 shadow-sm w-full mx-auto">
                      <FileText className="h-4 w-4 md:h-5 md:w-5 text-emerald-600 shrink-0" />
                      <div className="text-left">
                        <p className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-wider">Academic Year</p>
                        <p className="text-xs md:text-sm font-bold text-emerald-800">2025-26</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 p-4 sm:p-6 lg:p-8">
                    <div className="overflow-hidden rounded-xl border border-slate-100">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-emerald-700 text-white">
                            <th className="py-3 px-3 sm:py-4 sm:px-5 font-semibold text-xs sm:text-sm">S.No.</th>
                            <th className="py-3 px-3 sm:py-4 sm:px-5 font-semibold text-xs sm:text-sm">Branch</th>
                            <th className="py-3 px-3 sm:py-4 sm:px-5 font-semibold text-xs sm:text-sm text-right">Per Year Fees</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                          {DIPLOMA_FEES.map((item, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                              <td className="py-3 px-3 sm:py-4 sm:px-5 text-xs sm:text-sm font-medium text-slate-500">{item.sNo}</td>
                              <td className="py-3 px-3 sm:py-4 sm:px-5 text-xs sm:text-sm font-medium text-slate-800 break-words">{item.branch}</td>
                              <td className="py-3 px-3 sm:py-4 sm:px-5 text-xs sm:text-sm font-bold text-slate-700 text-right whitespace-nowrap">{item.fee}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6 bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                        <Award className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-emerald-800 mb-2">Scholarship</h4>
                        <div className="text-sm text-slate-600 space-y-1.5">
                          <p>(OBC - ₹10,000/- to 12,000/-) Approx</p>
                          <p>(SC/ST - ₹25,000/- to 30,000/-) Approx</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </AnimatePresence>

          {/* Bottom Info Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-slate-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-800 mb-1">Easy Payment</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Flexible payment options available</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-800 mb-1">Secure & Transparent</h4>
                <p className="text-xs text-slate-500 leading-relaxed">100% transparent fee structure</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-800 mb-1">Scholarships</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Merit & category based scholarships available</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                <Bus className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-800 mb-1">Bus Facility</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Transport facility available for all branches</p>
              </div>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
