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
    <footer className="bg-primary border-t border-primary/20 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Links Columns */}
          {[
            { title: "Our Campuses", items: links.ourCampuses },
            { title: "Important Links", items: links.importantLinks },
            { title: "Admissions", items: links.admissions },
            { title: "Our Institutions", items: links.institutions },
          ].map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="font-bold uppercase tracking-widest text-[10px] mb-6 text-primary-foreground/60">
                {col.title}
              </h4>

              <ul className="space-y-3">
                {col.items.map((link) => (
                  <li key={link}>
                    {campusLinkMap[link] ? (
                      <Link
                        to={campusLinkMap[link]}
                        className="text-sm text-primary-foreground/75 hover:text-accent transition-all duration-300 flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform mr-2" />
                        {link}
                      </Link>
                    ) : importantLinkMap[link] ? (
                      <a
                        href={importantLinkMap[link]}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-primary-foreground/75 hover:text-accent transition-all duration-300 flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform mr-2" />
                        {link}
                      </a>
                    ) : institutionLinkMap[link] ? (
                      <a
                        href={institutionLinkMap[link]}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-primary-foreground/75 hover:text-accent transition-all duration-300 flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform mr-2" />
                        {link}
                      </a>
                    ) : (
                      <a
                        href="#"
                        className="text-sm text-primary-foreground/75 hover:text-accent transition-all duration-300 flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform mr-2" />
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Center Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-3 items-center justify-between mt-14"
        >
          {/* College Logo */}
          <div className="w-64 sm:w-72 lg:w-80 lg:mt-9">
            <img
              src="/images/logo.webp"
              alt="Satpuda College of Engineering & Polytechnic"
              className="w-full h-auto object-contain "
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-5">
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
                <motion.a
                  key={name}
                  href={socialLinks[name]}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 text-primary-foreground flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ));
            })()}
          </div>

          {/* Job Logo */}
          <div className="mt-6 w-36 sm:w-40">
            <img
              src="/images/job.png"
              alt="Job Sahi"
              className="w-full h-auto object-contain"
            />
          </div>

          <p className="text-sm text-primary-foreground/70 mt-4 text-center">
            Excellence in Engineering Education
          </p>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/15 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-[10px] text-center text-white uppercase tracking-[0.3em]">
            Copyright © 2026 Satpuda College of Engineering & Polytechnic
            Balaghat (M.P.)
          </p>
        </div>
      </div>
    </footer>
  );
}