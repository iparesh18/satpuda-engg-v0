"use client";
import { Header, Footer } from "../../index.js";
import { motion } from "framer-motion";
import { Button } from "../../ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";

export default function AcademicsPage() {
  const programs = [
    {
      name: "B.Tech Civil Engineering",
      duration: "4 Years",
      seats: "60 Seats",
      description: "Learn to design and build structures, bridges, and infrastructure.",
      icon: <Award className="h-8 w-8" />
    },
    {
      name: "B.Tech Mechanical Engineering",
      duration: "4 Years",
      seats: "60 Seats",
      description: "Master mechanical design, manufacturing, and thermal systems.",
      icon: <Award className="h-8 w-8" />
    },
    {
      name: "B.Tech Electrical Engineering",
      duration: "4 Years",
      seats: "60 Seats",
      description: "Specialize in power systems, electronics, and electrical machines.",
      icon: <Award className="h-8 w-8" />
    },
    {
      name: "Diploma Programs",
      duration: "3 Years",
      seats: "120 Seats",
      description: "Practical-oriented diploma programs with job placements.",
      icon: <Award className="h-8 w-8" />
    }
  ];

  const features = [
    { icon: <BookOpen className="h-6 w-6" />, title: "Experienced Faculty", desc: "PhD qualified professors with industry experience" },
    { icon: <Users className="h-6 w-6" />, title: "Small Class Size", desc: "Personalized attention for each student" },
    { icon: <Award className="h-6 w-6" />, title: "AICTE Approved", desc: "Recognized by AICTE and affiliated with RGPV" }
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
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Academic Excellence
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                We offer comprehensive engineering programs designed to create industry-ready professionals
              </p>
            </motion.div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-card/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Programs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all"
                >
                  <div className="text-primary mb-4">{program.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{program.name}</h3>
                  <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                    <span>📅 {program.duration}</span>
                    <span>👥 {program.seats}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why Our Academics?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Pursue Your Engineering Dream?</h2>
            <p className="text-lg text-muted-foreground mb-8">Join hundreds of successful engineers from Satpuda College</p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 px-10">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

