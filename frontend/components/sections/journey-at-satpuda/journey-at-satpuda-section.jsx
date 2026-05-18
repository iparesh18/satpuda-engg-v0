"use client";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, HelpCircle, Zap, Users, Award, Sparkles, GraduationCap, Building, Trophy, PieChart, FlaskConical, Globe } from "lucide-react";
import Magnetic from "../../bits/magnetic.jsx";
import BlurText from "../../bits/blur-text.jsx";

const CHAPTERS = [
  {
    id: 1,
    number: "01",
    title: "The First Step",
    subtitle: "CHAPTER 1",
    description: "New place. New people. Same dreams in every heart.",
    image: "/images/journey/1.jpeg",
    icon: BookOpen,
    color: "from-blue-500/20 to-blue-600/20",
    iconBg: "bg-blue-500"
  },
  {
    id: 2,
    number: "02",
    title: "The Confusion",
    subtitle: "CHAPTER 2",
    description: "So many paths. So many questions. Finding direction wasn't easy.",
    image: "/images/journey/2.jpeg",
    icon: HelpCircle,
    color: "from-purple-500/20 to-purple-600/20",
    iconBg: "bg-purple-500"
  },
  {
    id: 3,
    number: "03",
    title: "The Deep Dive",
    subtitle: "CHAPTER 3",
    description: "Late nights. Endless bugs. But every line of code made us stronger.",
    image: "/images/journey/3.jpeg",
    icon: Zap,
    color: "from-pink-500/20 to-pink-600/20",
    iconBg: "bg-pink-500"
  },
  {
    id: 4,
    number: "04",
    title: "The Power of Collaboration",
    subtitle: "CHAPTER 4",
    description: "We learned. We collaborated. We built together.",
    image: "/images/journey/4.jpeg",
    icon: Users,
    color: "from-orange-500/20 to-orange-600/20",
    iconBg: "bg-orange-500"
  },
  {
    id: 5,
    number: "05",
    title: "The Breakthrough",
    subtitle: "CHAPTER 5",
    description: "That one project. That one moment. That changed everything.",
    image: "/images/journey/5.jpeg",
    icon: Award,
    color: "from-green-500/20 to-green-600/20",
    iconBg: "bg-green-500"
  },
  {
    id: 6,
    number: "06",
    title: "The Moment We Made It",
    subtitle: "CHAPTER 6",
    description: "From classrooms to careers. From learners to professionals.",
    image: "/images/journey/6.jpeg",
    icon: Sparkles,
    color: "from-indigo-500/20 to-indigo-600/20",
    iconBg: "bg-indigo-500"
  }
];

const MEMORIES = [
  { image: "/images/journey/1.jpeg", title: "Class of 2026" },
  { image: "/images/journey/2.jpeg", title: "Tech Fest 2025" },
  { image: "/images/journey/3.jpeg", title: "Project Launch" },
  { image: "/images/journey/4.jpeg", title: "Placement Drive" },
  { image: "/images/journey/5.jpeg", title: "Campus Life" },
  { image: "/images/journey/6.jpeg", title: "Graduation" },
];

function JourneyNavbar() {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold text-gray-900">Our <span className="text-blue-600">Journey</span></h2>
          <div className="h-0.5 w-8 bg-blue-600 mt-0.5 rounded-full" />
        </div>
        <div className="w-12" />
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white pt-24 pb-32 lg:pb-0 overflow-hidden flex flex-col lg:block">
      {/* Right Background Image */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%] z-0">
        <img
          src="/images/overview/campus view.png"
          alt="Satpuda College Building"
          className="w-full h-full object-cover"
        />
        {/* Gradient fade to blend with left side white background */}
        <div className="absolute inset-y-0 left-0 w-32 lg:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        {/* Gradient fade from bottom for small screens */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/80 to-transparent z-10 lg:hidden" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center min-h-[calc(100vh-6rem)]">
        {/* Top Content Row */}
        <div className="w-full lg:w-[60%] pt-12 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] flex items-center gap-2">
              OUR LEGACY. OUR FUTURE.
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-black tracking-tight text-gray-900 leading-[1.1]">
              Built On Vision.<br />
              Driven By Innovation.<br />
              Powered By <span className="text-blue-600">Students.</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              From a small beginning to a center of excellence.<br />
              Our journey is a story of belief, hard work,<br />
              and a commitment to shaping better tomorrows.
            </p>

            <div className="pt-2">
              <Magnetic>
                <button className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30">
                  Discover Our Story
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Magnetic>
            </div>
          </motion.div>

          {/* 4 Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 mb-12 lg:mb-32"
          >
            {/* Card 1 */}
            <div className="group bg-white rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-start gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-blue-200">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-100">
                <GraduationCap className="w-5 h-5 transition-colors duration-300 group-hover:text-blue-700" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-blue-600">Industry Focused</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Curriculum aligned<br />with real world needs.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group bg-white rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-start gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-purple-200">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-purple-100">
                <Users className="w-5 h-5 transition-colors duration-300 group-hover:text-purple-700" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-purple-600">Expert Mentors</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Guiding minds with<br />experience & care.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group bg-white rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-start gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-emerald-200">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-100">
                <Building className="w-5 h-5 transition-colors duration-300 group-hover:text-emerald-700" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-emerald-600">Practical Learning</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Hands-on labs, projects<br />& live training.</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="group bg-white rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-start gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-orange-200">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange-100">
                <Trophy className="w-5 h-5 transition-colors duration-300 group-hover:text-orange-700" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-orange-600">Bright Futures</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Building successful<br />careers since 2008.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ChaptersSection() {
  return (
    <section className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em]">The Story</span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mt-4 leading-tight">
              Every Pixel Tells a <span className="text-red-600">Story</span>
            </h2>
          </motion.div>
        </div>

        <div className="space-y-20">
          {CHAPTERS.map((chapter, idx) => {
            const Icon = chapter.icon;
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-cols-2 lg:[&>*:first-child]:order-2"}`}
              >
                {/* Image */}
                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={chapter.image}
                    alt={chapter.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full ${chapter.iconBg} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-blue-600 uppercase tracking-widest">{chapter.subtitle}</div>
                      <div className="text-3xl font-black text-gray-900">{chapter.number}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-4xl font-black text-gray-900 mb-3">{chapter.title}</h3>
                    <p className="text-xl text-gray-600 leading-relaxed">{chapter.description}</p>
                  </div>

                  <div className="flex gap-2">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="h-1 flex-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full origin-left"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MemoriesSection() {
  return (
    <section className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
            Memories That Made <span className="text-red-600">Us ❤️</span>
          </h2>
          <p className="text-gray-600 text-lg">Some moments stay forever.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {MEMORIES.map((memory, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-lg"
            >
              <img
                src={memory.image}
                alt={memory.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                <p className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">{memory.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Your Journey
            <br />
            <span className="text-blue-600">Starts Now.</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">The next story is yours to write.</p>
        </motion.div>

        <Magnetic>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-blue-600/40 transition-all duration-300 text-lg"
          >
            Start Your Journey
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </Magnetic>

        <p className="text-sm text-gray-500 pt-8">
          Join 500+ students building their future at Satpuda College
        </p>
      </div>
    </section>
  );
}

export function JourneyAtSatpudaSection() {
  return (
    <main className="bg-white">
      <JourneyNavbar />
      <HeroSection />
      <ChaptersSection />
      <MemoriesSection />
      <CTASection />
    </main>
  );
}
