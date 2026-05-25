"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const campusLinkMap = {
    "About Us": "/about/overview",
    Library: "/our-campus/library",
    Transport: "/our-campus/transport",
    Gallery: "/our-campus/gallery",
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
      "Anti-Ragging Affidavit",
      "Mandatory Disclosure",
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
    <footer className="bg-white border-t border-border text-foreground pt-8 sm:pt-12 mt-8 sm:mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6 sm:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8 lg:gap-10"
        >
          {/* Links Columns */}
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

          {/* Follow Us Column */}
          <div>
            <h4 className="font-bold text-[15px] mb-3 sm:mb-6 text-foreground">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
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
                    className="w-10 h-10 rounded-full border border-border text-foreground flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ));
              })()}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Left: Logos */}
            <div className="flex items-center gap-6">
              <img
                src="/images/logo.webp"
                alt="Satpuda College of Engineering & Polytechnic"
                className="w-72 sm:w-80 h-auto object-contain"
              />
            </div>

            {/* Center: Copyright */}
            <div className="text-[13px] text-muted-foreground text-center">
              Copyright © 2026. All Rights Reserved.
            </div>

            {/* Right: App Store / Play Store */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <img
                src="/images/google play.webp"
                alt="Get it on Google Play"
                className="h-10 sm:h-12 w-auto object-contain cursor-pointer transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}