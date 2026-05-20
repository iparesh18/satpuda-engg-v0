"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Monitor, Mountain, Building2, Cog, Zap, ArrowRight, Clock, Users, Sparkles } from "lucide-react";
import Magnetic from "../../bits/magnetic.jsx";
import { SectionHeading } from "./section-heading.jsx";
const programs = [
  {
    id: "cse",
    name: "Computer Science Engineering",
    shortName: "CSE",
    icon: Monitor,
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/20",
    description: "Master programming, AI, machine learning, and cloud computing. Build the digital future with cutting-edge software development skills.",
    diplomaDescription: "Build a strong foundation in computer programming, web technologies, and software development for fast entry into IT roles.",
    highlights: ["AI & Machine Learning", "Full Stack Development", "Cybersecurity", "Cloud Computing"],
    diplomaHighlights: ["Programming Basics", "Web Development", "Hardware & Networking", "Database Management"],
    duration: "4 Years",
    seats: 120,
    image: "/images/courses/Btech CSE.jpeg",
    diplomaImage: "/images/courses/Btech CSE.jpeg"
  },
  {
    id: "mining",
    name: "Mining Engineering",
    shortName: "Mining",
    icon: Mountain,
    color: "from-amber-500 to-orange-400",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-500",
    borderColor: "border-amber-500/20",
    description: "Learn sustainable extraction techniques, mine planning, and environmental management for the mining industry.",
    diplomaDescription: "Gain practical skills in mine surveying, extraction methods, and basic geology for a successful career in mining operations.",
    highlights: ["Mine Planning", "Mineral Processing", "Safety Management", "Geo-Exploration"],
    diplomaHighlights: ["Mine Surveying", "Surface Mining", "Geology Basics", "Mine Safety"],
    duration: "4 Years",
    seats: 60,
    image: "/images/courses/Btech mining.jpeg",
    diplomaImage: "/images/courses/Btech mining.jpeg"
  },
  {
    id: "civil",
    name: "Civil Engineering",
    shortName: "Civil",
    icon: Building2,
    color: "from-emerald-500 to-teal-400",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-500",
    borderColor: "border-emerald-500/20",
    description: "Design and build infrastructure that shapes cities. Master structural analysis, construction, and sustainable development.",
    diplomaDescription: "Learn the fundamentals of construction technology, surveying, and civil drafting to assist in infrastructure projects.",
    highlights: ["Structural Design", "Construction Tech", "Urban Planning", "Green Building"],
    diplomaHighlights: ["Surveying", "Construction Tech", "Civil Drafting", "Building Materials"],
    duration: "4 Years",
    seats: 60,
    image: "/images/courses/Btech Civil.jpeg",
    diplomaImage: "/images/courses/Btech Civil.jpeg"
  },
  {
    id: "mechanical",
    name: "Mechanical Engineering",
    shortName: "Mechanical",
    icon: Cog,
    color: "from-rose-500 to-pink-400",
    bgColor: "bg-rose-500/10",
    textColor: "text-rose-500",
    borderColor: "border-rose-500/20",
    description: "From robotics to manufacturing, explore thermodynamics, automation, and product design for modern industries.",
    diplomaDescription: "Acquire hands-on training in machine operation, basic manufacturing processes, and mechanical maintenance.",
    highlights: ["Robotics", "CAD/CAM", "Automation", "Thermal Systems"],
    diplomaHighlights: ["Machine Operation", "Manufacturing", "Maintenance", "AutoCAD Basics"],
    duration: "4 Years",
    seats: 60,
    image: "/images/courses/Btech mechanical.jpeg",
    diplomaImage: "/images/courses/Btech mechanical.jpeg"
  },
  {
    id: "electrical",
    name: "Electrical Engineering",
    shortName: "Electrical",
    icon: Zap,
    color: "from-violet-500 to-purple-400",
    bgColor: "bg-violet-500/10",
    textColor: "text-violet-500",
    borderColor: "border-violet-500/20",
    description: "Power the future with expertise in electrical systems, renewable energy, and smart grid technologies.",
    diplomaDescription: "Develop essential skills in electrical circuit wiring, equipment maintenance, and basic power systems.",
    highlights: ["Power Systems", "Renewable Energy", "IoT", "Smart Grids"],
    diplomaHighlights: ["Circuit Wiring", "Equipment Maintenance", "Power Systems", "Electrical Safety"],
    duration: "4 Years",
    seats: 60,
    image: "/images/courses/Btech electrician.jpeg",
    diplomaImage: "/images/courses/Btech electrician.jpeg"
  },
];
export function CoursesSection() {
  const [activeProgram, setActiveProgram] = useState(0);
  const [activeDegree, setActiveDegree] = useState("btech");

  const currentProgram = programs[activeProgram];
  const Icon = currentProgram.icon;

  const getProgramName = (program) => {
    if (activeDegree === "diploma" && program.id === "mining") {
      return "Mining and Mine Surveying";
    }
    return program.name;
  };

  const getProgramDuration = (program) => {
    return activeDegree === "diploma" ? "3 Years" : program.duration;
  };

  const getProgramDescription = (program) => {
    return activeDegree === "diploma" ? program.diplomaDescription : program.description;
  };

  const getProgramHighlights = (program) => {
    return activeDegree === "diploma" ? program.diplomaHighlights : program.highlights;
  };

  const getProgramImage = (program) => {
    return activeDegree === "diploma" ? program.diplomaImage : program.image;
  };

  return (<section className="bg-background py-16 sm:py-18 lg:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Our Programs</span>
        </div>
        <SectionHeading
          align="center"
          title="Wide Array of Courses"
          description={activeDegree === "btech"
            ? "Comprehensive B.Tech programs designed to launch your career in engineering excellence."
            : "Industry-focused Polytechnic diploma programs providing hands-on technical skills."}
          className="mb-8"
          highlights={['Courses']}
        />

        <div className="flex justify-center w-full">
          <div className="p-1.5 rounded-2xl bg-background border border-border flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveDegree("btech")}
              className={`px-4 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 w-full sm:w-auto ${activeDegree === "btech"
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
            >
              B.Tech Programs
            </button>
            <button
              onClick={() => setActiveDegree("diploma")}
              className={`px-4 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 w-full sm:w-auto ${activeDegree === "diploma"
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
            >
              Diploma Programs
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left: Course Navigation */}
        <div className="lg:col-span-4 space-y-3">
          {programs.map((program, index) => {
            const ProgramIcon = program.icon;
            const isActive = activeProgram === index;
            return (
              <motion.button
                key={program.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setActiveProgram(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-500 group relative overflow-hidden backdrop-blur-xl ${isActive
                    ? `bg-primary/10 shadow-[0_20px_50px_rgba(59,130,246,0.1)] border-white/20`
                    : "bg-white/5 hover:bg-white/10 border-transparent hover:border-white/10 shadow-none"
                  } border`}
              >
                <div className="relative z-10 flex items-center gap-4">
                  <Magnetic intensity={0.2}>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${isActive
                        ? `bg-linear-to-br ${program.color} text-white shadow-lg rotate-6`
                        : `${program.bgColor} ${program.textColor} group-hover:rotate-6`
                      }`}>
                      <ProgramIcon className="h-6 w-6" />
                    </div>
                  </Magnetic>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-lg font-bold transition-colors ${isActive ? "text-primary" : "text-foreground/60 group-hover:text-primary"}`}>
                      {getProgramName(program)}
                    </h3>
                    <p className={`text-sm ${isActive ? "text-primary/70" : "text-muted-foreground"}`}>{getProgramDuration(program)} Program</p>
                  </div>
                  <ArrowRight className={`h-5 w-5 transition-all duration-500 ${isActive
                    ? `text-primary translate-x-0 opacity-100`
                    : "text-muted-foreground -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Right: Course Details */}
        <div className="lg:col-span-8">
          <motion.div
            key={activeProgram}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card/40 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.2)] overflow-hidden border border-white/10"
          >
            {/* Image Header */}
            <div className="relative h-64 overflow-hidden">
              <img src={getProgramImage(currentProgram)} alt={getProgramName(currentProgram)} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent dark:from-black/80 dark:via-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {getProgramName(currentProgram)}
                    </h3>
                    <p className="text-white/80">Department</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <p className="text-foreground/90 leading-relaxed text-lg font-medium">
                {getProgramDescription(currentProgram)}
              </p>

              {/* Highlights Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {getProgramHighlights(currentProgram).map((highlight, index) => (<div key={index} className={`flex items-center gap-3 p-3 rounded-xl ${currentProgram.bgColor} border ${currentProgram.borderColor}`}>
                  <div className={`w-2 h-2 rounded-full bg-blue-600`} />
                  <span className="text-sm font-semibold text-foreground">{highlight}</span>
                </div>))}
              </div>

              {/* Stats */}
              <div className="mt-6 flex items-center gap-6 py-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Clock className={`h-5 w-5 text-blue-600`} />
                  <div>
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="font-bold text-foreground">{getProgramDuration(currentProgram)}</p>
                  </div>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div className="flex items-center gap-2">
                  <Users className={`h-5 w-5 text-blue-600`} />
                  <div>
                    <p className="text-xs text-muted-foreground">Total Seats</p>
                    <p className="font-bold text-foreground">{currentProgram.seats}</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button className={`flex-1 py-3 px-6 rounded-xl bg-linear-to-r ${currentProgram.color} text-white font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}>
                  Apply Now
                </button>
                <button className={`flex-1 py-3 px-6 rounded-xl border-2 ${currentProgram.borderColor} ${currentProgram.textColor} font-semibold hover:${currentProgram.bgColor} transition-all duration-300`}>
                  Download Brochure
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>);
}

