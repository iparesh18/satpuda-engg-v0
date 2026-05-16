"use client";
import { motion } from "framer-motion";
import { Calendar, Layout, User, Info } from "lucide-react";



const events = [
  {
    id: 1,
    title: "158 नए सिविल डिफेंस वॉलंटियर्स को दिया गया प्रशिक्षण !!",
    date: "21 May, 2024",
    description: "सतपुड़ा इंजीनियरिंग कॉलेज में जिला प्रशासन के सहयोग से सिविल डिफेंस वॉलंटियर्स के लिए प्रशिक्षण कार्यक्रम आयोजित किया गया। इस कार्यक्रम में 158 छात्र-छात्राओं ने भाग लिया और आपदा प्रबंधन, प्राथमिक उपचार एवं सुरक्षा उपायों का व्यावहारिक प्रशिक्षण प्राप्त किया।",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    layout: "image-left"
  },
  {
    id: 2,
    title: "Career Guidance Seminar by Ms. Farkhanda Quershi",
    date: "16 May, 2024",
    description: "सतपुड़ा कॉलेज में छात्र-छात्राओं के उज्जवल भविष्य हेतु करियर गाइडेंस सेमिनार का आयोजन किया गया। प्रसिद्ध वक्ता Ms. Farkhanda Quershi ने विभिन्न प्रतियोगी परीक्षाओं, करियर विकल्पों एवं व्यक्तित्व विकास पर मूल्यवान मार्गदर्शन दिया।",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
    layout: "image-right"
  },
  {
    id: 3,
    title: "Project Representation By B.tech Student At RGPV Bhopal",
    date: "12 May, 2024",
    description: "हमारे B.Tech छात्रों ने RGPV भोपाल में आयोजित प्रोजेक्ट प्रदर्शनी में भाग लेकर अपनी प्रतिभा का शानदार प्रदर्शन किया।",
    details: [
      { icon: <Layout className="w-5 h-5 text-primary" />, label: "Project Title", value: "Li-Fi Based Audio Transmission System - A High-Speed, Secure, and Eco-Friendly Wireless Communication System" },
      { icon: <User className="w-5 h-5 text-primary" />, label: "Presented By", value: "B.Tech 3rd Year Students, Department of Computer Science & Engineering" },
      { icon: <Info className="w-5 h-5 text-primary" />, label: "Project Overview", value: "Li-Fi (Light Fidelity) is a revolutionary wireless communication technology that transmits data using visible light instead of traditional radio waves. This project demonstrates a Li-Fi based audio transmission system, which is capable of high-speed data transfer and can be used for secure and fast short-range communication." }
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    layout: "image-left-detailed"
  }
];

export function EventsList() {
  return (
    <section className="py-20 bg-background/50 relative">
      <div className="container mx-auto px-4 space-y-32">
        {events.map((event, index) => (
          <motion.div 
            key={event.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`flex flex-col ${event.layout === "image-right" ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 group">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-border shadow-2xl aspect-[4/3]">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Calendar size={18} />
                <span>{event.date}</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
                {event.title}
              </h2>
              
              <p className="text-lg text-foreground/60 leading-relaxed">
                {event.description}
              </p>

              {event.details && (
                <div className="space-y-4 pt-4">
                  {event.details.map((detail, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4 p-5 rounded-3xl bg-card/40 border border-border/50 backdrop-blur-md hover:border-primary/30 transition-colors"
                    >
                      <div className="shrink-0 p-3 bg-primary/10 rounded-2xl h-fit">
                        {detail.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-lg mb-1">{detail.label}</h4>
                        <p className="text-sm text-foreground/60 leading-relaxed">{detail.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}


            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

