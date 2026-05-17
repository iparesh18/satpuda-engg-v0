"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import Magnetic from "../../bits/magnetic.jsx";
import { SectionHeading } from "./section-heading.jsx";

export function MapSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("Lalbarra - Balaghat Road, Manjhapur, Madhya Pradesh 481001");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactInfo = [
    { icon: MapPin, label: "Address", value: "Lalbarra - Balaghat Road, Manjhapur, MP 481001", color: "text-blue-500" },
    { icon: Phone, label: "Phone", value: "+91-7624-267-xxx", color: "text-green-500" },
    { icon: Mail, label: "Email", value: "info@satpudaengg.edu.in", color: "text-purple-500" },
    { icon: Clock, label: "Hours", value: "Mon - Fri: 9 AM - 5 PM", color: "text-orange-500" },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-14 sm:py-16 lg:py-18">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 h-100 w-100 -translate-y-1/2 translate-x-1/2 animate-pulse rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-75 w-75 translate-y-1/2 -translate-x-1/2 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeading
          eyebrow="Visit Us"
          title="Find Our Campus"
          description="Located in the heart of Madhya Pradesh, our state-of-the-art campus is designed for excellence and innovation."
          className="mb-10 sm:mb-12"
          highlights={['Campus']}
        />

        <div className="mb-10 grid gap-6 sm:gap-8 lg:grid-cols-3">
          {/* Contact Info Cards */}
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className={`h-12 w-12 rounded-xl ${item.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-lg font-bold text-foreground leading-relaxed group-hover:text-primary transition-colors">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-3xl border-4 border-card shadow-2xl sm:rounded-[3rem]"
        >
          {/* Map frame with enhanced styling */}
          <div className="absolute inset-0 z-20 bg-linear-to-br from-primary/5 via-transparent to-transparent pointer-events-none transition-all duration-500 group-hover:from-primary/10" />
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.8404414348593!2d80.14880717505493!3d21.82509498003108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a592263486c99%3A0xa4123dec04965bfb!2sSatpuda%20College%20of%20Engineering%20and%20Polytechnic%2C%20Balaghat!5e0!3m2!1sen!2sin!4v1778579078581!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-96 w-full transition-all duration-700 ease-out sm:h-125"
          />
        </motion.div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-6">
          <Magnetic intensity={0.2}>
            <button
              onClick={handleCopyAddress}
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-card border-2 border-primary/30 hover:border-primary text-primary font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              {copied ? (
                <>
                  <Check className="h-5 w-5 animate-bounce" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </Magnetic>

          <Magnetic intensity={0.3}>
            <a
              href="https://maps.google.com/?q=Satpuda+College+of+Engineering+Balaghat"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40 active:scale-95"
            >
              <span>Get Directions</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Magnetic>
        </div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-sm font-semibold text-primary">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-primary"
            />
            <span>Open Monday to Friday, 9 AM to 5 PM IST</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

