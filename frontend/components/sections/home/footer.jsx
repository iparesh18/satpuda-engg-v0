"use client";

import { motion } from "framer-motion";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {

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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 sm:gap-8 lg:gap-10"
        >
          {/* Column 1: Logo + Social Links + Play/App store buttons */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            <img
              src="/images/logo.webp"
              alt="Satpuda College of Engineering & Polytechnic"
              className="w-72 sm:w-80 md:w-96 lg:w-[400px] h-auto object-contain -mt-2 lg:-mt-4 -ml-2"
              loading="lazy"
            />
            
            {/* Social Links */}
            <div className="-mt-2 lg:-mt-8 ml-1">
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
              <a href="https://play.google.com/store/search?q=jobsahi&c=apps" target="_blank" rel="noreferrer" className="w-fit">
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

          {/* Column 6: Get In Touch */}
          <div>
            <h4 className="font-bold text-[15px] mb-3 sm:mb-6 text-foreground">
              Get In Touch
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center gap-3 text-[13px] text-muted-foreground group">
                <MapPin className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:scale-110" />
                <span>Lalbarra - Balaghat Road, Manjhapur, MP 481001</span>
              </li>
              <li className="flex items-center gap-3 text-[13px] text-muted-foreground group">
                <Phone className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:scale-110" />
                <span>+91 94258 36824, +91 6262 604 111</span>
              </li>
              <li className="flex items-center gap-3 text-[13px] text-muted-foreground group">
                <Mail className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:scale-110" />
                <span>satpudaengineeringcollege@gmail.com</span>
              </li>
            </ul>

            {/* Map in responsive view only */}
            <div className="mt-6 lg:hidden relative overflow-hidden rounded-xl border border-border/70 bg-slate-100 shadow-sm h-48 w-full">
              <iframe
                title="Satpuda College location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.8404414348593!2d80.14880717505493!3d21.82509498003108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a592263486c99%3A0xa4123dec04965bfb!2sSatpuda%20College%20of%20Engineering%20and%20Polytechnic%2C%20Balaghat!5e0!3m2!1sen!2sin!4v1778579078581!5m2!1sen!2sin"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col items-center justify-center">
            <div className="text-[13px] text-muted-foreground text-center">
              Copyright © 2026. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}