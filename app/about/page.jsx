"use client";
import { Header, Footer } from "../../components/index.js";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const sections = [
    {
      title: "College Overview",
      content: "Satpuda College of Engineering & Polytechnic is a premier educational institution dedicated to providing world-class technical education. Established in 1995, we have been shaping the future of engineering education in central India."
    },
    {
      title: "Our Mission",
      content: "To provide quality technical education that empowers students to become ethical, competent, and socially responsible engineers capable of contributing to national development and global competitiveness."
    },
    {
      title: "Our Vision",
      content: "To be recognized as a center of excellence in engineering and technical education, known for academic rigor, innovation, research, and producing professionals who make meaningful contributions to society."
    }
  ];

  const achievements = [
    "AICTE Approved Institution",
    "Affiliated with RGPV Bhopal",
    "25+ Years of Excellence",
    "5000+ Successful Alumni",
    "95% Placement Rate",
    "State-of-the-art Infrastructure",
    "Experienced Faculty",
    "Industry Partnerships"
  ];

  return (
    <div>
      <Header />
      
      <main className="bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                About Satpuda College
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Empowering Engineers, Building Futures Since 1995
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        {sections.map((section, index) => (
          <section key={index} className={index % 2 === 0 ? "py-20 bg-card/30" : "py-20"}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-foreground mb-6">{section.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {section.content}
                </p>
              </motion.div>
            </div>
          </section>
        ))}

        {/* Achievements Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Achievements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border"
                >
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground font-semibold">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Years of Excellence", value: "25+" },
                { label: "Alumni Network", value: "5000+" },
                { label: "Placement Rate", value: "95%" },
                { label: "Top Recruiters", value: "50+" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-4xl font-bold text-accent mb-2">{stat.value}</p>
                  <p className="text-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
