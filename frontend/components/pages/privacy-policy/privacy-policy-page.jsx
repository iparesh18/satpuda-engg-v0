"use client";

import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FileText, 
  Database, 
  Cpu, 
  Cookie, 
  ShieldCheck, 
  Link2, 
  UserCheck, 
  RefreshCw, 
  Mail, 
  ChevronRight, 
  Info, 
  Lock, 
  Phone, 
  MapPin, 
  Calendar,
  ShieldAlert
} from "lucide-react";
import { Header, Footer } from "../../index.js";
import { Button } from "../../ui/button.jsx";

// Section definitions with their corresponding icons, ids, and content
const SECTIONS = [
  {
    id: "introduction",
    title: "1. Introduction",
    icon: Info,
    heading: "Introduction & Scope",
    subtitle: "Understanding our commitment to your privacy",
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    icon: Database,
    heading: "Types of Data Collected",
    subtitle: "What information we gather from users and applicants",
  },
  {
    id: "how-we-use-information",
    title: "3. How We Use Information",
    icon: Cpu,
    heading: "Purpose of Data Processing",
    subtitle: "How we utilize the collected information",
  },
  {
    id: "cookies-analytics",
    title: "4. Cookies & Analytics",
    icon: Cookie,
    heading: "Tracking & Technical Information",
    subtitle: "Our use of cookies and analytics technologies",
  },
  {
    id: "data-security",
    title: "5. Data Security",
    icon: ShieldCheck,
    heading: "Protecting Your Data",
    subtitle: "Security measures to guard your personal details",
  },
  {
    id: "third-party-links",
    title: "6. Third-Party Links",
    icon: Link2,
    heading: "External Portals & Integrations",
    subtitle: "Links to university, government, and payment gateways",
  },
  {
    id: "user-consent",
    title: "7. User Consent",
    icon: UserCheck,
    heading: "Your Acknowledgment & Consent",
    subtitle: "Agreeing to our data policies and practices",
  },
  {
    id: "policy-updates",
    title: "8. Policy Updates",
    icon: RefreshCw,
    heading: "Amendments & Modifications",
    subtitle: "How we manage changes to this policy over time",
  },
  {
    id: "contact-information",
    title: "9. Contact Information",
    icon: Mail,
    heading: "Get in Touch",
    subtitle: "Contact information for queries and clarifications",
  },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const observerRef = useRef(null);

  // Set up intersection observer for scroll spy
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Focus on the middle section of the screen
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, options);

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observerRef.current.observe(element);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Find element position relative to viewport
      const offset = 100; // Account for any navigation or top space
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div>
      <Header />

      <main className="bg-background min-h-screen pb-20">
        {/* Premium Hero Section */}
        <section className="relative overflow-hidden border-b border-border/70 py-16 sm:py-24">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/overview/campus overview.webp"
              alt="Satpuda Campus Backdrop"
              className="h-full w-full object-cover object-center opacity-15"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#021545]/98 via-[#021545]/95 to-[#021545]/90" />
            
            {/* Soft background glow circles */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              {/* Breadcrumb */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 text-sm text-white/60 mb-6 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10"
              >
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="h-3 w-3 text-white/40" />
                <span className="text-white font-medium">Privacy Policy</span>
              </motion.div>

              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
              >
                Privacy <span className="text-accent">Policy</span>
              </motion.h1>
              
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-1 bg-accent rounded-full my-6"
              />

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/80 max-w-2xl text-base sm:text-lg font-light leading-relaxed"
              >
                We value your trust and are fully committed to protecting the privacy of our students, 
                faculty, applicants, and visitors. Learn how we handle your personal data.
              </motion.p>

              {/* Revision Date */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6 flex items-center gap-2 text-xs text-white/50"
              >
                <Calendar className="h-3.5 w-3.5" />
                <span>Last Updated: May 2026</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section with Sticky Sidebar Grid */}
        <section className="mt-12 sm:mt-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
              
              {/* Sticky Sidebar Table of Contents Wrapper */}
              <aside className="hidden lg:block sticky top-28 self-start bg-white border border-slate-100 rounded-3xl p-5 shadow-xs max-h-[calc(100vh-8rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
                  <Lock className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-base text-slate-800">Policy Sections</h3>
                </div>

                <nav className="space-y-1">
                  {SECTIONS.map((section) => {
                    const IconComponent = section.icon;
                    const isActive = activeSection === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-2xl transition-all duration-300 text-left group ${
                          isActive 
                            ? "bg-primary text-white shadow-md shadow-primary/10" 
                            : "text-slate-600 hover:text-primary hover:bg-slate-50"
                        }`}
                      >
                        <IconComponent className={`h-4 w-4 shrink-0 transition-transform group-hover:scale-110 ${isActive ? "text-white" : "text-slate-400 group-hover:text-primary"}`} />
                        <span className="truncate">{section.title.split(". ")[1]}</span>
                      </button>
                    );
                  })}
                </nav>
              </aside>

              {/* Policy Content Cards */}
              <div className="space-y-8">
                
                {/* Introduction Section */}
                <motion.div 
                  id="introduction"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-28 bg-white border border-slate-100/70 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Info className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">1. Introduction & Scope</h2>
                      <p className="text-sm text-slate-400">Understanding our commitment to your privacy</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                    <p>
                      Welcome to the official website of <strong>Satpuda College of Engineering & Polytechnic, Balaghat</strong>. 
                      We recognize the importance of your privacy and are committed to protecting it. This Privacy Policy details the policies and 
                      procedures governing the collection, storage, processing, transfer, and protection of information when you interact with our website 
                      (<a href="/" className="text-primary hover:text-accent font-medium transition-colors">satpudaengineering.org</a>), 
                      our campus student portals, or when you communicate with us online.
                    </p>
                    <p>
                      This policy applies to all visitors of our website, applicants seeking admission, current students, alumni, faculty members, 
                      and partners. By accessing our services or submitting any forms, you acknowledge that you accept the terms and guidelines 
                      outlined in this document.
                    </p>
                  </div>
                </motion.div>

                {/* Information We Collect */}
                <motion.div 
                  id="information-we-collect"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-28 bg-white border border-slate-100/70 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Database className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">2. Information We Collect</h2>
                      <p className="text-sm text-slate-400">What information we gather from users and applicants</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                    <p>
                      We collect different types of information to serve your educational inquiries and contact needs:
                    </p>
                    <ul className="space-y-3 list-disc pl-5">
                      <li>
                        <strong className="text-slate-800">Form Submission Details:</strong> 
                        When you submit the Admissions Form or Contact Form on our website, we collect personal details you explicitly choose to provide, including your full name, email address, mobile/phone number, residential address, choice of academic program (Engineering/Polytechnic), selected branch of study, and any specific inquiries or messages you submit.
                      </li>
                      <li>
                        <strong className="text-slate-800">Technical & Technical Usage Data:</strong> 
                        We automatically gather basic device and technical details when you visit our website, including your IP address, browser type and version, operating system, pages visited, and date and time of visits.
                      </li>
                      <li>
                        <strong className="text-slate-800">Communication Records:</strong> 
                        Messages, queries, and feedback sent directly through our website’s form systems or email channels, helping us address your needs and follow up.
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* How We Use Information */}
                <motion.div 
                  id="how-we-use-information"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-28 bg-white border border-slate-100/70 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Cpu className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">3. How We Use Information</h2>
                      <p className="text-sm text-slate-400">How we utilize the collected information</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                    <p>
                      Satpuda Engineering College uses the collected information for purposes directly associated with managing inquiries and communications:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mt-2">
                      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                        <h4 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          Admissions & Inquiries
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500">
                          Reviewing admission submissions, coordinating inquiries, answering academic/course questions, and contacting you regarding your admission request.
                        </p>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                        <h4 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          Administrative Support
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500">
                          Managing database inquiries, facilitating communication with the admissions office, and optimizing the contact forms on our website.
                        </p>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                        <h4 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          Communications & Alerts
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500">
                          Responding directly to your messages, sending relevant admission guidelines, and notifying you about placement procedures.
                        </p>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                        <h4 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          Website Optimization
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500">
                          Analyzing web traffic statistics to improve loading times, interface design, search functionality, and contents.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Cookies & Analytics */}
                <motion.div 
                  id="cookies-analytics"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-28 bg-white border border-slate-100/70 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Cookie className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">4. Cookies & Analytics</h2>
                      <p className="text-sm text-slate-400">Our use of cookies and analytics technologies</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                    <p>
                      Cookies are small text files placed on your device to ensure website functionality. We use them as follows:
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>
                        <strong className="text-slate-800">Essential Cookies:</strong> Critical for navigation, user login sessions, 
                        and secured forms submissions. Disabling them may affect the functionality of core features.
                      </li>
                      <li>
                        <strong className="text-slate-800">Performance & Analytics:</strong> We use third-party analytics tools (e.g. Google Analytics) 
                        to observe user demographics, behavior, page trends, and website performance. All data is aggregated, anonymized, 
                        and does not identify you personally.
                      </li>
                    </ul>
                    <p className="mt-2 text-sm bg-slate-50 border border-slate-100 rounded-2xl p-4">
                      <strong>Managing Settings:</strong> Most web browsers accept cookies automatically. You can change your browser settings 
                      to restrict, block, or delete cookies. Note that disabling cookies might disable certain parts of the website services.
                    </p>
                  </div>
                </motion.div>

                {/* Data Security */}
                <motion.div 
                  id="data-security"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-28 bg-white border border-slate-100/70 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">5. Data Security</h2>
                      <p className="text-sm text-slate-400">Security measures to guard your personal details</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                    <p>
                      Satpuda Engineering College protects your data with the highest standards of safety:
                    </p>
                    <ul className="space-y-3 list-disc pl-5">
                      <li>
                        <strong className="text-slate-800">Encryption:</strong> Our web portals use SSL/TLS encryption for transferring 
                        confidential data (such as login details or form submissions).
                      </li>
                      <li>
                        <strong className="text-slate-800">Access Control:</strong> Personal and academic records are stored inside firewall-protected 
                        secure servers. Only authorized institutional personnel have permission to view this data.
                      </li>
                      <li>
                        <strong className="text-slate-800">Constant Auditing:</strong> We conduct periodic security evaluations of our network systems 
                        and servers to minimize potential threats, malware, and hacking attempts.
                      </li>
                    </ul>
                    <div className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-2xl p-4 text-red-800 text-xs sm:text-sm">
                      <ShieldAlert className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                      <p>
                        <strong>Disclaimer:</strong> While we employ industry-standard safety protocols, no digital transmission or data storage 
                        method is completely secure. We cannot guarantee absolute security for data submitted via the public internet.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Third-Party Links */}
                <motion.div 
                  id="third-party-links"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-28 bg-white border border-slate-100/70 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Link2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">6. Third-Party Links</h2>
                      <p className="text-sm text-slate-400">Links to university, government, and payment gateways</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                    <p>
                      Our website contains links directing you to external websites for standard guidelines and services. These include:
                    </p>
                    <ul className="space-y-2 list-disc pl-5 text-sm">
                      <li>AICTE Official Website</li>
                      <li>MP DTE Counselling Portal</li>
                      <li>Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal</li>
                      <li>MPTAAS Scholarship Portal</li>
                      <li>Secure Payment Gateways for online fee transactions</li>
                    </ul>
                    <p>
                      We do not control the privacy models or contents of these third-party platforms. Once you click on these links and leave 
                      our website, we strongly recommend reviewing their respective privacy policies before sharing any information.
                    </p>
                  </div>
                </motion.div>

                {/* User Consent */}
                <motion.div 
                  id="user-consent"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-28 bg-white border border-slate-100/70 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <UserCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">7. User Consent</h2>
                      <p className="text-sm text-slate-400">Agreeing to our data policies and practices</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                    <p>
                      By continuing to use our website, online services, or submitting admissions/inquiry applications, you explicitly consent 
                      to the practices described in this Privacy Policy.
                    </p>
                    <p>
                      If you provide details about a parent, guardian, or sponsor, you represent that you have obtained their respective permission 
                      to share their information with us under the terms of this document.
                    </p>
                  </div>
                </motion.div>

                {/* Policy Updates */}
                <motion.div 
                  id="policy-updates"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-28 bg-white border border-slate-100/70 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <RefreshCw className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">8. Policy Updates</h2>
                      <p className="text-sm text-slate-400">Amendments & Modifications</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                    <p>
                      Satpuda Engineering College reserves the right to edit, modify, or update this policy page at any time to align with legal 
                      regulations or administrative shifts. 
                    </p>
                    <p>
                      When updates are made, we will change the "Last Updated" date at the top of the page. We suggest reviewing this page 
                      periodically to remain informed on how we guard your details.
                    </p>
                  </div>
                </motion.div>

                {/* Contact Information */}
                <motion.div 
                  id="contact-information"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-28 bg-white border border-slate-100/70 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">9. Contact Information</h2>
                      <p className="text-sm text-slate-400">Contact information for queries and clarifications</p>
                    </div>
                  </div>
                  
                  <div className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                    <p>
                      If you have questions, feedback, or need clarification regarding this policy page or how we process your information, 
                      please contact our administration team:
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Email Address</p>
                        <p className="mt-0.5 break-all text-xs font-semibold text-slate-900 leading-snug">
                          satpudaengineeringcollege@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Phone Support</p>
                        <p className="mt-0.5 text-xs font-semibold text-slate-900 leading-snug">
                          +91 94258 36824<br />+91 6262 604 111
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Campus Address</p>
                        <p className="mt-0.5 text-xs font-semibold text-slate-900 leading-snug">
                          Lalbarra - Balaghat Road, Manjhapur, Balaghat, MP 481001
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
