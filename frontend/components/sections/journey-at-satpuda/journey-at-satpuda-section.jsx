"use client";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, HelpCircle, Zap, Users, Award, Sparkles } from "lucide-react";
import Magnetic from "../../bits/magnetic.jsx";
import BlurText from "../../bits/blur-text.jsx";

const CHAPTERS = [
  {
    id: 1,
    number: "01",
    title: "The First Step",
    subtitle: "CHAPTER 1",
    description: "New place. New people. Same dreams in every heart.",
    image: "/images/journey/1.png",
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
    image: "/images/journey/2.png",
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
    image: "/images/journey/3.png",
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
    image: "/images/journey/4.png",
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
    image: "/images/journey/5.png",
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
    image: "/images/journey/6.png",
    icon: Sparkles,
    color: "from-indigo-500/20 to-indigo-600/20",
    iconBg: "bg-indigo-500"
  }
];

const MEMORIES = [
  { image: "/images/journey/1.png", title: "Class of 2026" },
  { image: "/images/journey/2.png", title: "Tech Fest 2025" },
  { image: "/images/journey/3.png", title: "Project Launch" },
  { image: "/images/journey/4.png", title: "Placement Drive" },
  { image: "/images/journey/5.png", title: "Campus Life" },
  { image: "/images/journey/6.png", title: "Graduation" },
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
        <h2 className="text-lg font-bold text-gray-900">Your Journey</h2>
        <div className="w-12" />
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white pt-24 overflow-hidden flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-block">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em]">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 leading-tight">
            It Started <br />
            With a <span className="text-red-600">Dream.</span>
            <br />
            And One Step.
            <br />
            <span className="text-blue-600">Then Everything</span>
            <br />
            Changed.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-md">
            The real stories. The real struggle. The real growth.
          </p>
          <Magnetic>
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30">
              Start to Explore
              <ArrowRight className="w-5 h-5" />
            </button>
          </Magnetic>
        </motion.div>

        {/* Right: Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 shadow-xl">
            <div className="space-y-8">
              <div>
                <div className="text-4xl font-black text-blue-600 mb-2">500+</div>
                <p className="text-gray-700 font-semibold">Students & Counting</p>
              </div>
              <div className="w-full h-px bg-blue-200" />
              <div className="space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Satpuda College transforms ambitious learners into industry-ready professionals. Every student here is building their legacy.
                </p>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="w-3 h-3 rounded-full bg-blue-600"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
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
