"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Award,
  ShieldCheck,
  HandHeart,
  Sparkles,
  GraduationCap,
  ClipboardCheck,
  FileText,
  CheckCircle,
  Download,
  ArrowRight,
} from "lucide-react";
import BlurText from "../../bits/blur-text.jsx";
import Magnetic from "../../bits/magnetic.jsx";

const highlightChips = [
  "Merit Based Support",
  "Financial Assistance",
  "Excellence Recognition",
  "Equal Opportunities",
  "Bright Futures",
];

const aboutCards = [
  {
    icon: Award,
    title: "Merit Recognition",
    description: "Rewards for academic excellence.",
  },
  {
    icon: HandHeart,
    title: "Need Based Aid",
    description: "Support for deserving students.",
  },
  {
    icon: ShieldCheck,
    title: "Equal Opportunity",
    description: "Encouraging talent from all backgrounds.",
  },
];

const opportunityCards = [
  {
    title: "Merit Based Scholarship",
    description: "Awarded to students with outstanding academic performance.",
    badge: "For High Achievers",
  },
  {
    title: "Need Based Scholarship",
    description: "Financial assistance for students from economically weaker sections.",
    badge: "Financial Support",
  },
  {
    title: "Government Scholarships",
    description: "Facilitating students to avail government schemes and welfare programs.",
    badge: "Govt. Approved",
  },
  {
    title: "Special Scholarships",
    description: "Scholarships for sports, cultural, technical and other achievements.",
    badge: "Talent Recognition",
  },
];

const eligibilityList = [
  "Students must be enrolled in regular programs.",
  "Minimum academic criteria varies for each scheme.",
  "Documents and income proof (if applicable) required.",
  "Renewal is subject to continued performance.",
  "Subject to institute and government norms.",
];

const applicationSteps = [
  {
    icon: ClipboardCheck,
    title: "Check Eligibility",
    description: "Review scheme details and eligibility criteria.",
  },
  {
    icon: FileText,
    title: "Prepare Documents",
    description: "Collect required documents and certificates.",
  },
  {
    icon: GraduationCap,
    title: "Submit Application",
    description: "Fill the application form and submit online/offline.",
  },
  {
    icon: CheckCircle,
    title: "Verification & Approval",
    description: "Institute verifies and approves eligible students.",
  },
];

const constellationNodes = [
  { top: "12%", left: "16%", size: "h-2.5 w-2.5", depth: 1 },
  { top: "18%", left: "62%", size: "h-3 w-3", depth: 1.4 },
  { top: "38%", left: "30%", size: "h-2 w-2", depth: 0.8 },
  { top: "44%", left: "76%", size: "h-2.5 w-2.5", depth: 1.2 },
  { top: "68%", left: "22%", size: "h-3 w-3", depth: 1.6 },
  { top: "70%", left: "58%", size: "h-2 w-2", depth: 1 },
  { top: "82%", left: "82%", size: "h-2.5 w-2.5", depth: 1.3 },
];

export function ScholarshipSection() {
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const [labTilt, setLabTilt] = useState({ glowX: 50, glowY: 50 });

  const handleGlowMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setGlow({ x, y });
  };

  const handleLabMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setLabTilt({ glowX: x, glowY: y });
  };

  const handleLabLeave = () => {
    setLabTilt({ glowX: 50, glowY: 50 });
  };

  const parallaxX = (labTilt.glowX - 50) / 4;
  const parallaxY = (labTilt.glowY - 50) / 4;

  return (
    <main className="bg-background pb-20">
      <motion.section
        className="relative overflow-hidden border-b border-border/70 bg-card/40 pt-32 pb-10 lg:pt-28 lg:pb-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.08),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-end lg:px-8">
          <div>
            <h1 className="pt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Scholarships & Fellowships</h1>
            <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary via-primary/70 to-accent" />
            <BlurText
              text="Empowering talented and deserving students through financial support and recognition of academic excellence."
              className="mt-6 max-w-xl text-base text-muted-foreground"
            />
          </div>
          <div className="justify-self-start text-sm font-medium text-muted-foreground lg:justify-self-end">
            <span>Home</span>
            <span className="mx-2 text-muted-foreground/60">/</span>
            <span>Academics</span>
            <span className="mx-2 text-muted-foreground/60">/</span>
            <span className="text-foreground">Scholarships & Fellowships</span>
          </div>
        </div>
      </motion.section>

      <section className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-border/60 bg-card/70 px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          {highlightChips.map((chip) => (
            <span key={chip} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
              {chip}
            </span>
          ))}
        </div>
      </section>

      <motion.section
        className="mx-auto mt-10 grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr,1fr] lg:items-stretch lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="rounded-[28px] border border-border/60 bg-card/80 p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">About Scholarships</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Investing in Talent, Inspiring Futures</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We believe financial limitations should never come in the way of quality education. Our scholarships and fellowships
            are designed to support meritorious, hardworking and deserving students at every stage of their academic journey.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {aboutCards.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-background/80 p-4 text-center shadow-sm">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-3 text-sm font-semibold text-foreground">{title}</p>
                <p className="mt-2 text-xs text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-72 overflow-hidden rounded-[28px] border border-border bg-card shadow-sm sm:h-[360px] lg:h-[420px] lg:justify-self-center">
          <img
            src="/images/overview/smart library.png"
            alt="Scholarship support"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Our Scholarship Schemes</p>
          <h3 className="mt-3 text-3xl font-bold text-foreground">Scholarship Opportunities</h3>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {opportunityCards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-border/60 bg-background/80 p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Award className="h-6 w-6" />
              </div>
              <h4 className="mt-4 text-lg font-semibold text-foreground">{card.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
              <span className="mt-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {card.badge}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className="group relative overflow-hidden rounded-[32px] border border-border/60 bg-card/80 p-6 shadow-sm sm:p-8"
          onMouseMove={handleLabMove}
          onMouseLeave={handleLabLeave}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background: `radial-gradient(circle at ${labTilt.glowX}% ${labTilt.glowY}%, rgba(59,130,246,0.25), transparent 55%)`,
            }}
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Scholarship Experience Lab</p>
              <h3 className="mt-3 text-3xl font-bold text-foreground">Move to power the constellation</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Hover to tilt the card and energize the scholarship constellation. Each node represents a support stream
                lighting up your journey.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
                  Live Impact
                </span>
                <span className="rounded-full border border-border/60 bg-background/80 px-4 py-1 text-xs font-semibold text-muted-foreground">
                  48 Active Scholarships
                </span>
                <span className="rounded-full border border-border/60 bg-background/80 px-4 py-1 text-xs font-semibold text-muted-foreground">
                  1,120 Students Supported
                </span>
              </div>
            </div>
            <div className="relative h-56 overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-6 sm:h-64">
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  background: `radial-gradient(circle at ${labTilt.glowX}% ${labTilt.glowY}%, rgba(99,102,241,0.18), transparent 60%)`,
                }}
              />
              <div className="relative h-full w-full">
                {constellationNodes.map((node, index) => (
                  <span
                    key={`${node.left}-${index}`}
                    className={`absolute ${node.size} rounded-full bg-primary/70 shadow-[0_0_16px_rgba(59,130,246,0.35)]`}
                    style={{
                      top: node.top,
                      left: node.left,
                      transform: `translate(${parallaxX * node.depth}px, ${parallaxY * node.depth}px)`,
                    }}
                  />
                ))}
                <div
                  className="absolute inset-x-6 bottom-6 rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-xs font-semibold text-primary"
                  style={{
                    transform: `translate(${parallaxX * 1.4}px, ${parallaxY * 1.4}px)`,
                  }}
                >
                  Scholarship Energy: 86%
                </div>
                <div
                  className="absolute right-6 top-6 rounded-full border border-border/60 bg-background/90 px-3 py-1 text-[11px] font-semibold text-muted-foreground"
                  style={{
                    transform: `translate(${parallaxX * 1.2}px, ${parallaxY * 1.2}px)`,
                  }}
                >
                  Hover + tilt
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-12 grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr,1fr] lg:items-start lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="rounded-[28px] border border-border/60 bg-card/80 p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Eligibility Criteria</p>
          <h3 className="mt-3 text-3xl font-bold text-foreground">Who Can Apply?</h3>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {eligibilityList.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div
            className="mt-6 rounded-2xl border border-border/60 bg-background/80 p-5"
            onMouseMove={handleGlowMove}
            style={{
              background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(59,130,246,0.18), rgba(255,255,255,0.9))`,
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Scholarship Impact</p>
            <p className="mt-2 text-lg font-semibold text-foreground">97% of applicants receive support</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Interactive highlight adapts to your cursor to reveal the impact zone.
            </p>
          </div>
        </div>

        <div className="rounded-[28px] border border-border/60 bg-card/80 p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Application Process</p>
          <h3 className="mt-3 text-3xl font-bold text-foreground">How to Apply?</h3>
          <div className="mt-6 space-y-4">
            {applicationSteps.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground">{title}</p>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-start justify-between gap-4 rounded-[28px] border border-border/60 bg-card/70 p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Download className="h-6 w-6" />
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">Important Information</p>
              <p className="text-sm text-muted-foreground">
                Scholarship amounts, eligibility and selection criteria are subject to change as per institute and government
                guidelines. All decisions are final.
              </p>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
            Download Guideline
            <Download className="h-4 w-4" />
          </button>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="rounded-[32px] border border-border/60 bg-card/70 p-6 sm:p-8">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Sparkles className="h-10 w-10" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Dream Big, Achieve More</p>
              <h3 className="mt-3 text-3xl font-bold text-foreground">We&apos;re here to support your journey.</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Our scholarships are more than financial aid - they are a commitment to your success and a brighter tomorrow.
              </p>
            </div>
            <Magnetic intensity={0.2}>
              <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
                Apply for Scholarship
                <ArrowRight className="h-4 w-4" />
              </button>
            </Magnetic>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
