"use client";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "./section-heading.jsx";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "B.Tech CSE, 2024",
      company: "Placed at TCS",
      quote: "The faculty and placement cell at Satpuda College helped me secure my dream job. The practical training was exceptional.",
      image: "/images/faculty_male.png"
    },
    {
      name: "Priya Patel",
      role: "B.Tech Civil, 2023",
      company: "Placed at L&T",
      quote: "Amazing infrastructure and supportive environment. The college prepared me well for industry challenges.",
      image: "/images/faculty_female.png"
    },
    {
      name: "Amit Kumar",
      role: "Diploma ME, 2024",
      company: "Placed at Suzuki",
      quote: "From hands-on workshops to industry visits, every experience at Satpuda shaped my career path.",
      image: "/images/faculty_male.png"
    },
    {
      name: "Anjali Verma",
      role: "B.Tech EE, 2024",
      company: "Placed at Mahindra",
      quote: "Labs, projects, and mentoring gave me confidence to work on real-world electrical systems.",
      image: "/images/faculty_female.png"
    },
    {
      name: "Vikas Singh",
      role: "B.Tech ME, 2023",
      company: "Placed at Tata Motors",
      quote: "The workshop training and faculty guidance made me job-ready from day one.",
      image: "/images/faculty_male.png"
    },
    {
      name: "Neha Choudhary",
      role: "B.Tech CSE, 2025",
      company: "Intern at Infosys",
      quote: "Supportive mentors and strong fundamentals helped me crack my internship interviews.",
      image: "/images/faculty_female.png"
    },
    {
      name: "Rohit Tiwari",
      role: "Diploma EE, 2024",
      company: "Placed at MRF",
      quote: "Practical sessions and clear concepts turned me into a confident technician.",
      image: "/images/faculty_male.png"
    },
    {
      name: "Sneha Joshi",
      role: "B.Tech Civil, 2024",
      company: "Placed at GR Infraprojects",
      quote: "Field visits and lab work gave me hands-on exposure that companies value.",
      image: "/images/faculty_female.png"
    },
    {
      name: "Karan Malviya",
      role: "B.Tech Mining, 2023",
      company: "Placed at Lloyds Metals",
      quote: "Industry-oriented training and site exposure shaped my mining career.",
      image: "/images/faculty_male.png"
    },
    {
      name: "Meera Kulkarni",
      role: "Diploma CSE, 2024",
      company: "Placed at Job Sahi",
      quote: "Project-based learning helped me build a strong portfolio early.",
      image: "/images/faculty_female.png"
    },
    {
      name: "Arjun Patel",
      role: "B.Tech EE, 2023",
      company: "Placed at Eicher",
      quote: "The faculty made complex concepts easy and the labs built real skills.",
      image: "/images/faculty_male.png"
    },
    {
      name: "Pooja Thakur",
      role: "B.Tech CSE, 2024",
      company: "Placed at Wipro",
      quote: "Placements were well organized and the training sessions were excellent.",
      image: "/images/faculty_female.png"
    },
    {
      name: "Siddharth Rao",
      role: "Diploma Civil, 2023",
      company: "Placed at L&T",
      quote: "Great balance of theory and practice, plus very supportive faculty.",
      image: "/images/faculty_male.png"
    },
    {
      name: "Isha Sharma",
      role: "B.Tech ME, 2024",
      company: "Placed at Suzuki",
      quote: "Workshops and competitions improved my problem-solving and teamwork skills.",
      image: "/images/faculty_female.png"
    },
    {
      name: "Manish Yadav",
      role: "B.Tech Mining, 2024",
      company: "Placed at Apollo",
      quote: "Campus training and guidance prepared me for both interviews and on-site work.",
      image: "/images/faculty_male.png"
    }
  ];
  return (<section className="bg-background py-16 sm:py-18 lg:py-20 overflow-hidden">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Student Voices"
        title="What Our Students Say"
        className="mb-12"
        highlights={['Students', 'Say']}
      />

      {/* Desktop View - Marquee */}
      <div className="relative hidden md:block mt-2">
        <div className="absolute inset-y-0 left-0 w-32 lg:w-64 bg-linear-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 lg:w-64 bg-linear-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden group/marquee relative">
          <div className="flex py-6 animate-testimonial-marquee pause-on-hover">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={`desktop-${index}`} className="flex-shrink-0 px-4">
                <div className="w-[340px] lg:w-[380px] bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 shadow-xl hover:bg-card/80 transition-all duration-500 group">
                  <div className="mb-5 flex items-center gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={`star-${index}-${starIndex}`} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-10 w-10 text-accent/30 mb-6 group-hover:text-accent transition-colors duration-500" />
                  <p className="text-foreground/70 leading-relaxed mb-8 text-lg italic">
                    {`"${testimonial.quote}"`}
                  </p>
                  <div className="flex items-center gap-5">
                    <img src={testimonial.image} alt={testimonial.name} width={64} height={64} className="w-16 h-16 rounded-2xl object-cover border-2 border-border group-hover:border-accent transition-colors duration-500" />
                    <div>
                      <p className="font-bold text-foreground text-lg leading-none mb-1">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">{testimonial.role}</p>
                      <p className="text-xs text-accent font-bold mt-2 uppercase tracking-tighter">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Mobile View - Marquee */}
    <div className="md:hidden relative w-full overflow-hidden mt-2">
      <motion.div
        className="flex w-max items-stretch gap-5 py-4 will-change-transform pl-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div 
            key={`mobile-${index}`} 
            className="w-80 flex-none bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-6 shadow-xl"
          >
            <div className="mb-4 flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={`star-${index}-${starIndex}`} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <Quote className="h-8 w-8 text-accent/30 mb-4" />
            <p className="text-foreground/70 leading-relaxed mb-6 text-base italic">
              {`"${testimonial.quote}"`}
            </p>
            <div className="flex items-center gap-4">
              <img src={testimonial.image} alt={testimonial.name} width={56} height={56} className="w-14 h-14 rounded-xl object-cover border-2 border-border" />
              <div>
                <p className="font-bold text-foreground text-base leading-none mb-1">{testimonial.name}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{testimonial.role}</p>
                <p className="text-[10px] text-accent font-bold mt-1 uppercase tracking-tighter">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes testimonial-marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-testimonial-marquee {
        animation: testimonial-marquee 36s linear infinite;
      }
      .pause-on-hover:hover {
        animation-play-state: paused;
      }
    `}} />
  </section>);
}

