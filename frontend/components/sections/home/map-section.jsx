"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import Magnetic from "../../bits/magnetic.jsx";
import { SectionHeading } from "./section-heading.jsx";

export function MapSection() {
  const [copied, setCopied] = useState(false);
  const [isMapInteractive, setIsMapInteractive] = useState(false);

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

        {/* Combined Layout for Desktop and Mobile */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Contact Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[380px] shrink-0"
          >
            <div className="flex flex-col rounded-3xl border border-border/50 bg-card/60 backdrop-blur shadow-xl overflow-hidden divide-y divide-border/30 h-full">
              {contactInfo.map((item, i) => (
                <div key={item.label} className="p-5 sm:p-6 flex-1 flex items-center gap-4 hover:bg-white/5 transition-colors">
                  <div className={`h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-xl sm:rounded-2xl ${item.color} bg-opacity-10 flex items-center justify-center`}>
                    <item.icon className={`h-6 w-6 sm:h-7 sm:w-7 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-widest">{item.label}</p>
                    <p className="text-sm sm:text-base font-bold text-foreground mt-0.5 sm:mt-1">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full relative overflow-hidden rounded-3xl border-4 border-card shadow-2xl sm:rounded-[3rem] h-[400px] sm:h-[500px]"
            onMouseLeave={() => setIsMapInteractive(false)}
          >
            {/* Click overlay to enable map interaction */}
            {!isMapInteractive && (
              <div 
                className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center bg-transparent group"
                onClick={() => setIsMapInteractive(true)}
                title="Click to interact with map"
              >
              </div>
            )}
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.8404414348593!2d80.14880717505493!3d21.82509498003108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a592263486c99%3A0xa4123dec04965bfb!2sSatpuda%20College%20of%20Engineering%20and%20Polytechnic%2C%20Balaghat!5e0!3m2!1sen!2sin!4v1778579078581!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={`w-full h-full transition-all duration-300 ${isMapInteractive ? "" : "pointer-events-none"}`}
            />
          </motion.div>
        </div>

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

