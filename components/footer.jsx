"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const links = {
    ourCampuses: ["About Us", "Library", "Transport", "Gallery"],
    importantLinks: ["AICTE", "AICTE Scholarship/Fellowship", "MP DTE", "SCHOLARSHIP", "RGPV, Bhopal"],
    admissions: ["Privacy Policy", "Anti-Ragging Affidavit", "Mandatory Disclosure", "Fee Structure"],
    institutions: ["Satpuda Valley Public School", "Satpuda ITI", "Satpuda Polytechnic", "Job Sahi"]
  };
  return (<footer className="bg-background border-t border-border text-foreground">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
      >
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full p-1.5 shadow-sm overflow-hidden">
              <img src="/logo.png" alt="Satpuda College Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="font-bold text-base uppercase tracking-tighter">Satpuda College</p>
              <p className="text-[10px] opacity-70 uppercase tracking-widest">Est. 1995</p>
            </div>
          </div>
          <p className="text-sm opacity-70 mb-6">
            Excellence in Engineering Education
          </p>
          <div className="flex items-center gap-3">
            {Object.entries({ Facebook, Instagram, Twitter, Youtube }).map(([name, Icon], i) => (
              <motion.a 
                key={name}
                href="#" 
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>

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
            <h4 className="font-bold uppercase tracking-widest text-[10px] mb-6 text-foreground/40">{col.title}</h4>
            <ul className="space-y-3">
              {col.items.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Copyright */}
    <div className="border-t border-border bg-foreground/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-[10px] text-center opacity-40 uppercase tracking-[0.3em]">
          Copyright © 2026 Satpuda College of Engineering & Polytechnic Balaghat (M.P.)
        </p>
      </div>
    </div>
  </footer>);
}
