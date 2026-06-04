"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, Copy, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const [isMapInteractive, setIsMapInteractive] = useState(false);

  const campusLinkMap = {
    "About Us": "/about/overview",
    Library: "/our-campus/library",
    Transport: "/our-campus/transport",
    Gallery: "/our-campus/gallery",
    "Privacy Policy": "/privacy-policy",
    "Fee Structure": "/fee-structure",
  };

  const importantLinkMap = {
    AICTE: "https://aicte.gov.in/",
    "MP DTE": "https://dte.mponline.gov.in/portal/services/onlinecounselling/counshomepage/home.aspx",
    SCHOLARSHIP: "https://www.tribal.mp.gov.in/MPTAAS",
    "RGPV, Bhopal": "https://www.rgpv.ac.in/",
  };

  const institutionLinkMap = {
    "Satpuda Valley Public School": "https://satpudavalleyschool.com/",
    "Satpuda ITI": "https://satpudaiti.com/campus-balaghat/",
    "Satpuda Polytechnic": "https://satpudapolytechnic.com/index.php",
    "Job Sahi": "https://jobsahi.com/",
  };

  const contactItems = [
    { icon: MapPin, label: "Address", value: "Lalbarra - Balaghat Road, Manjhapur, MP 481001" },
    { icon: Phone, label: "Phone", value: "+91 94258 36824, +91 6262 604 111" },
    { icon: Mail, label: "Email", value: "satpudaengineeringcollege@gmail.com" },
    { icon: Clock, label: "Hours", value: "Mon - Sat: 10 AM - 5 PM" },
  ];

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText("Lalbarra - Balaghat Road, Manjhapur, Madhya Pradesh 481001");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const links = {
    ourCampuses: ["About Us", "Library", "Transport", "Gallery"],
    importantLinks: [
      "AICTE",
      "MP DTE",
      "SCHOLARSHIP",
      "RGPV, Bhopal",
    ],
    admissions: [
      "Privacy Policy",
      "Fee Structure",
    ],
    institutions: [
      "Satpuda Valley Public School",
      "Satpuda ITI",
      "Satpuda Polytechnic",
      "Job Sahi",
    ],
  };

  return (
    <footer className="bg-white border-t border-border text-foreground pt-6 sm:pt-8 mt-6 sm:mt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4 sm:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8 lg:gap-10"
        >
          {/* Column 1: Logo + Social Links + Play/App store buttons */}
          <div className="flex flex-col gap-4">
            <img
              src="/images/logo.webp"
              alt="Satpuda College of Engineering & Polytechnic"
              className="mr-10 w-60 sm:w-72 h-auto object-contain"
              loading="lazy"
            />
            
            {/* Social Links */}
            <div>
              <div className="flex flex-wrap gap-2 pt-1">
                {(() => {
                  const socialLinks = {
                    Facebook: "https://www.facebook.com/SatpudaEnggPoly",
                    Instagram: "https://www.instagram.com/satpuda_engineering/",
                    Linkedin: "https://www.linkedin.com/in/satpuda-college-of-engineering-and-polytechnic-balaghat-781906352/",
                    Youtube: "https://www.youtube.com/@satpudaengineering231",
                  };

                  return Object.entries({
                    Facebook,
                    Instagram,
                    Linkedin,
                    Youtube,
                  }).map(([name, Icon]) => (
                    <a
                      key={name}
                      href={socialLinks[name]}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8.5 h-8.5 rounded-full border border-border text-foreground flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ));
                })()}
              </div>
            </div>

            {/* App Buttons */}
            <div className="flex flex-col gap-2 pt-1">
              <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="w-fit">
                <img
                  src="/images/google play.webp"
                  alt="Get it on Google Play"
                  className="h-8.5 w-auto object-contain cursor-pointer transition-transform hover:scale-105"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          {/* Columns 2-5: Link Sections */}
          {[
            { title: "Our Campuses", items: links.ourCampuses },
            { title: "Important Links", items: links.importantLinks },
            { title: "Admissions", items: links.admissions },
            { title: "Our Institutions", items: links.institutions },
          ].map((col, i) => (
            <div key={col.title}>
              <h4 className="font-bold text-[15px] mb-3 sm:mb-6 text-foreground">
                {col.title}
              </h4>

              <ul className="space-y-2 sm:space-y-4">
                {col.items.map((link) => (
                  <li key={link}>
                    {campusLinkMap[link] ? (
                      <Link
                        to={campusLinkMap[link]}
                        className="text-[13px] text-muted-foreground hover:text-accent transition-all duration-300 flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform mr-2" />
                        {link}
                      </Link>
                    ) : importantLinkMap[link] ? (
                      <a
                        href={importantLinkMap[link]}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[13px] text-muted-foreground hover:text-accent transition-all duration-300 flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform mr-2" />
                        {link}
                      </a>
                    ) : institutionLinkMap[link] ? (
                      <a
                        href={institutionLinkMap[link]}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[13px] text-muted-foreground hover:text-accent transition-all duration-300 flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform mr-2" />
                        {link}
                      </a>
                    ) : (
                      <a
                        href="#"
                        className="text-[13px] text-muted-foreground hover:text-accent transition-all duration-300 flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform mr-2" />
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
            {/* Left: Contact Details Card */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              className="flex-1 rounded-2xl border border-border/70 bg-white p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 flex-col sm:flex-row">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Contact</p>
                  <h3 className="mt-1.5 text-xl font-semibold text-foreground">Get in touch</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Lalbarra - Balaghat Road, Manjhapur, MP 481001
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? "Copied" : "Copy Address"}
                  </button>
                  <a
                    href="https://maps.google.com/?q=Satpuda+College+of+Engineering+Balaghat"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
                  >
                    Get Directions
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex w-full items-start gap-3 rounded-xl border border-border/60 bg-slate-50 px-3 py-3 sm:px-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1 flex flex-col gap-0.5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 leading-none">
                        {item.label}
                      </p>
                      <p className="text-xs leading-snug text-foreground sm:text-sm break-words">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Map Card */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              className="relative overflow-hidden rounded-2xl border border-border/70 bg-slate-100 shadow-sm min-h-48 sm:min-h-56 lg:w-[38%]"
              onMouseLeave={() => setIsMapInteractive(false)}
            >
              {!isMapInteractive ? (
                <button
                  type="button"
                  onClick={() => setIsMapInteractive(true)}
                  className="absolute inset-0 z-10 flex items-center justify-center bg-transparent"
                  aria-label="Enable map interaction"
                >
                  <span className="rounded-full border border-border bg-white/95 px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                    Tap to interact with map
                  </span>
                </button>
              ) : null}

              <iframe
                title="Satpuda College location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.8404414348593!2d80.14880717505493!3d21.82509498003108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a592263486c99%3A0xa4123dec04965bfb!2sSatpuda%20College%20of%20Engineering%20and%20Polytechnic%2C%20Balaghat!5e0!3m2!1sen!2sin!4v1778579078581!5m2!1sen!2sin"
                className={`absolute inset-0 h-full w-full ${isMapInteractive ? "" : "pointer-events-none"}`}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          <div className="mt-4 flex flex-col items-center justify-center border-t border-border pt-4">
            <div className="text-[13px] text-muted-foreground text-center">
              Copyright © 2026. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}