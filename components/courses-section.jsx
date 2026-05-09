"use client";
import { useState } from "react";
import { Monitor, Mountain, Building2, Cog, Zap, ArrowRight, Clock, Users, Sparkles } from "lucide-react";
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
        highlights: ["AI & Machine Learning", "Full Stack Development", "Cybersecurity", "Cloud Computing"],
        duration: "4 Years",
        seats: 120,
        image: "/images/hero-2.jpg"
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
        highlights: ["Mine Planning", "Mineral Processing", "Safety Management", "Geo-Exploration"],
        duration: "4 Years",
        seats: 60,
        image: "/images/hero-1.jpg"
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
        highlights: ["Structural Design", "Construction Tech", "Urban Planning", "Green Building"],
        duration: "4 Years",
        seats: 60,
        image: "/images/hero-1.jpg"
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
        highlights: ["Robotics", "CAD/CAM", "Automation", "Thermal Systems"],
        duration: "4 Years",
        seats: 60,
        image: "/images/hero-5.jpg"
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
        highlights: ["Power Systems", "Renewable Energy", "IoT", "Smart Grids"],
        duration: "4 Years",
        seats: 60,
        image: "/images/hero-2.jpg"
    },
];
export function CoursesSection() {
    const [activeProgram, setActiveProgram] = useState(0);
    const currentProgram = programs[activeProgram];
    const Icon = currentProgram.icon;
    return (<section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Sparkles className="h-4 w-4 text-primary"/>
            <span className="text-sm font-medium text-primary">Our Programs</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
            Wide Array of Courses
          </h2>
          <p className="mt-5 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            B.Tech and Polytechnic programs designed to launch your career in engineering excellence
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left: Course Navigation */}
          <div className="lg:col-span-4 space-y-3">
            {programs.map((program, index) => {
            const ProgramIcon = program.icon;
            const isActive = activeProgram === index;
            return (<button key={program.id} onClick={() => setActiveProgram(index)} className={`w-full text-left p-4 rounded-2xl transition-all duration-500 group ${isActive
                    ? `bg-white/10 shadow-2xl shadow-blue-500/10 border border-white/20`
                    : "bg-transparent hover:bg-white/5 border border-transparent hover:border-white/10 shadow-none"}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive
                    ? `bg-gradient-to-br ${program.color} text-white shadow-lg`
                    : `${program.bgColor} ${program.textColor}`}`}>
                      <ProgramIcon className="h-5 w-5"/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-bold transition-colors ${isActive ? "text-blue-600" : "text-slate-600 group-hover:text-blue-600"}`}>
                        {program.name}
                      </h3>
                      <p className={`text-sm ${isActive ? "text-blue-500/70" : "text-slate-400"}`}>{program.duration} Program</p>
                    </div>
                    <ArrowRight className={`h-5 w-5 transition-all duration-300 ${isActive
                    ? `${program.textColor} translate-x-0 opacity-100`
                    : "text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`}/>
                  </div>
                </button>);
        })}
          </div>

          {/* Right: Course Details */}
          <div className="lg:col-span-8">
            <div className="bg-transparent backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/10">
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <img src={currentProgram.image} alt={currentProgram.name} className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30">
                      <Icon className="h-7 w-7"/>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {currentProgram.name}
                      </h3>
                      <p className="text-white/80">Department</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-foreground/90 leading-relaxed text-lg font-medium">
                  {currentProgram.description}
                </p>

                {/* Highlights Grid */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {currentProgram.highlights.map((highlight, index) => (<div key={index} className={`flex items-center gap-3 p-3 rounded-xl ${currentProgram.bgColor} border ${currentProgram.borderColor}`}>
                      <div className={`w-2 h-2 rounded-full bg-blue-600`}/>
                      <span className="text-sm font-semibold text-foreground">{highlight}</span>
                    </div>))}
                </div>

                {/* Stats */}
                <div className="mt-6 flex items-center gap-6 py-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <Clock className={`h-5 w-5 text-blue-600`}/>
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="font-bold text-foreground">{currentProgram.duration}</p>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-slate-200"/>
                  <div className="flex items-center gap-2">
                    <Users className={`h-5 w-5 text-blue-600`}/>
                    <div>
                      <p className="text-xs text-muted-foreground">Total Seats</p>
                      <p className="font-bold text-foreground">{currentProgram.seats}</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button className={`flex-1 py-3 px-6 rounded-xl bg-gradient-to-r ${currentProgram.color} text-white font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}>
                    Apply Now
                  </button>
                  <button className={`flex-1 py-3 px-6 rounded-xl border-2 ${currentProgram.borderColor} ${currentProgram.textColor} font-semibold hover:${currentProgram.bgColor} transition-all duration-300`}>
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
