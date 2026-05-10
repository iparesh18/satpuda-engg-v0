"use client";
import { Header, Footer } from "../../index.js";
import { motion } from "framer-motion";
import { Button } from "../../ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AdmissionsPage() {
  const eligibility = [
    "12th Pass (Any Stream)",
    "JEE Main/Advanced (For B.Tech)",
    "RGPV CET (For Diploma)",
    "Minimum 50% in 12th (General)",
    "Minimum 45% in 12th (SC/ST/OBC)"
  ];

  const documents = [
    "Class 12th Certificate",
    "Birth Certificate",
    "Category Certificate (if applicable)",
    "Aadhar Card",
    "Bank Passbook",
    "Passport Size Photographs",
    "JEE Main/RGPV CET Score Card"
  ];

  const feeStructure = [
    { program: "B.Tech Per Semester", amount: "₹45,000" },
    { program: "Diploma Per Semester", amount: "₹18,000" },
    { program: "Development Fees (One Time)", amount: "₹25,000" },
    { program: "Hostel Fee Per Year", amount: "₹60,000" }
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Admissions 2026-27
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Start Your Journey to Success Today
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 px-10">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-20 bg-card/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12">Eligibility Criteria</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Basic Requirements</h3>
                <ul className="space-y-4">
                  {eligibility.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </motion.div>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Required Documents</h3>
                <ul className="space-y-4">
                  {documents.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </motion.div>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12">Fee Structure</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {feeStructure.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-between items-center p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-all"
                >
                  <span className="text-lg text-foreground font-semibold">{item.program}</span>
                  <span className="text-2xl font-bold text-accent">{item.amount}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-card/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Admission Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Submit Form", desc: "Fill the online application form" },
                { step: "2", title: "Merit List", desc: "Check merit list announcement" },
                { step: "3", title: "Document Verification", desc: "Verify your documents" },
                { step: "4", title: "Admission Confirmation", desc: "Complete your admission" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground font-bold text-2xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Scholarships Info */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-6">Scholarships Available</h2>
            <div className="bg-primary/10 rounded-lg p-8 border border-primary/20">
              <p className="text-lg text-foreground mb-4">
                We offer various scholarships to deserving students:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Merit-based Scholarships (Up to 50% fees)</li>
                <li>✓ State Government Scholarships for SC/ST/OBC</li>
                <li>✓ Central Government Scholarships</li>
                <li>✓ Sports Scholarships</li>
                <li>✓ Need-based Financial Aid</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Join Satpuda College?</h2>
            <p className="text-lg mb-8 opacity-90">Complete your application and secure your seat today!</p>
            <Button size="lg" className="bg-accent-foreground hover:bg-accent-foreground/90 text-accent h-14 px-10 font-semibold">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
