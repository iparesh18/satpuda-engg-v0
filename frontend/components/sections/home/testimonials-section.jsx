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
      image: "/images/hero-2.jpg"
    },
    {
      name: "Priya Patel",
      role: "B.Tech Civil, 2023",
      company: "Placed at L&T",
      quote: "Amazing infrastructure and supportive environment. The college prepared me well for industry challenges.",
      image: "/images/hero-3.jpg"
    },
    {
      name: "Amit Kumar",
      role: "Diploma ME, 2024",
      company: "Placed at Suzuki",
      quote: "From hands-on workshops to industry visits, every experience at Satpuda shaped my career path.",
      image: "/images/hero-5.jpg"
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

      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (<motion.div 
          key={index} 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ y: -10 }}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 lg:p-10 shadow-xl hover:bg-card/80 transition-all duration-500 group"
        >
          <div className="mb-5 flex items-center gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <Star key={starIndex} className="h-4 w-4 fill-current" />
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
        </motion.div>))}
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
  </section>);
}

