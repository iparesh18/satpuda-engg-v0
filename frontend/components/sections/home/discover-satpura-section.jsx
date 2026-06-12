import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Lightbulb, 
  Handshake, 
  Users, 
  Play, 
  Landmark, 
  User, 
  Award
} from "lucide-react";

export function DiscoverSatpuraSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const features = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Academic Excellence",
      description: "Quality education that builds strong foundations.",
      color: "accent"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation Driven",
      description: "Promoting research, creativity and real-world solutions.",
      color: "primary"
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Holistic Development",
      description: "Nurturing skills, values and leadership qualities.",
      color: "primary"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Stronger Together",
      description: "A vibrant community that supports and grows together.",
      color: "accent"
    }
  ];

  const stats = [
    { icon: <Landmark className="h-7 w-7 text-white" />, value: "22+", title: "Years of Excellence", desc: "A legacy of trust, quality\nand continuous growth." },
    { icon: <User className="h-7 w-7 text-white" />, value: "5000+", title: "Happy Students", desc: "Empowering thousands of\nminds to succeed." },
    { icon: <GraduationCap className="h-7 w-7 text-white" />, value: "350+", title: "Expert Faculty", desc: "Experienced educators\ncommitted to excellence." },
    { icon: <Award className="h-7 w-7 text-white" />, value: "100%", title: "Placement Assistance", desc: "Strong industry connections\nfor a successful future." },
  ];

  return (
    <section className="bg-background py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Part: Text & Video Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Text and Features */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4">Discover Satpuda</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-primary leading-[1.1] mb-6">
              Excellence in Education,<br /> Impacting <span className="text-accent">Tomorrow.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-12">
              At Satpuda Engineering College, we blend academic rigor with innovative thinking to create an environment where ideas thrive and futures are built.<br/><br/>Watch this video to see how we inspire minds, encourage innovation and shape a better tomorrow.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4 group cursor-pointer"
                >
                  <div className={`flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full border-2 transition-transform duration-300 group-hover:scale-110 ${feature.color === 'accent' ? 'border-accent text-accent' : 'border-primary text-primary'}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-base mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed pr-2">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Video Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full flex items-center"
          >
            {/* Main Card */}
            <div className="relative bg-primary rounded-[2.5rem] overflow-hidden w-full text-white shadow-2xl flex flex-col group border border-white/10">
              
              {/* Top half: Video */}
              <div className="relative h-72 sm:h-80 md:h-[350px] w-full bg-black">
                <video 
                  ref={videoRef}
                  src="/videos/campus.mp4" 
                  className="w-full h-full object-cover opacity-80"
                  controls={isPlaying}
                  onPause={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                  poster="/placeholder.webp"
                />
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/20 backdrop-blur-[2px] transition-all duration-500 group-hover:bg-transparent">
                    <button 
                      onClick={handlePlay}
                      aria-label="Play video"
                      className="w-20 h-20 bg-accent rounded-full border-[3px] border-white flex items-center justify-center text-white shadow-xl hover:scale-110 hover:bg-accent/90 transition-all duration-300 z-20 group-hover:shadow-[0_0_30px_rgba(214,11,11,0.5)]"
                    >
                      <Play className="w-8 h-8 ml-1 fill-current" />
                    </button>
                  </div>
                )}
              </div>
              
              {/* Bottom half: Text */}
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden bg-gradient-to-b from-primary to-[#051024]">
                {/* Decorative Pattern - Abstract lines simulating the wavy background */}
                <div className="absolute -right-24 -bottom-24 w-80 h-80 border-[1px] border-white/5 rounded-full z-0 pointer-events-none"></div>
                <div className="absolute -right-12 -bottom-12 w-80 h-80 border-[1px] border-white/5 rounded-full z-0 pointer-events-none"></div>
                <div className="absolute right-0 bottom-0 w-80 h-80 border-[1px] border-white/5 rounded-full z-0 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex items-center justify-center gap-4 mb-6 w-full">
                    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-accent"></div>
                    <p className="text-white/90 text-[13px] sm:text-sm font-semibold tracking-[0.15em] uppercase">Empowering Minds. Building Futures.</p>
                    <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-accent"></div>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-center mb-3 text-white tracking-tight">The Satpuda Story</h3>
                  <h4 className="text-xl sm:text-2xl font-bold text-center mb-6 text-white/90">
                    Passion. <span className="text-accent">Innovation.</span> Purpose.
                  </h4>
                  
                  <p className="text-center text-white/70 text-sm sm:text-base leading-relaxed max-w-[420px] mx-auto font-medium">
                    Our journey is defined by the achievements of our students, the dedication of our faculty and the trust of our community. Press play and be a part of our story.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Part: Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 bg-primary rounded-[2rem] p-8 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle decoration for the stats bar */}
          <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/90 to-primary pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className={`flex flex-col xl:flex-row gap-5 items-start ${idx !== 0 ? 'lg:pl-8 pt-6 sm:pt-0' : 'pt-6 sm:pt-0'} ${idx === 0 ? 'pt-0' : ''}`}>
                <div className="flex-shrink-0 w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-white/5 transition-transform duration-500 hover:-translate-y-1 hover:border-accent">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="text-3xl xl:text-4xl font-bold text-accent mb-1">{stat.value}</h4>
                  <p className="text-white font-semibold text-sm mb-2">{stat.title}</p>
                  <p className="text-white/60 text-[13px] leading-relaxed whitespace-pre-line">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
