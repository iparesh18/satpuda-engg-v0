"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Lightbulb, ShieldCheck, Users, Building2, Telescope, ArrowRight } from "lucide-react";
import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

import SplitText from "../../bits/split-text.jsx";
import BlurText from "../../bits/blur-text.jsx";
import ShinyText from "../../bits/shiny-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";

const highlights = [
  {
    icon: GraduationCap,
    title: "Practical Learning",
    description: "Industry-focused curriculum with hands-on experience, modern labs and live projects.",
  },
  {
    icon: Briefcase,
    title: "Industry Readiness",
    description: "Training students with the latest technologies, soft skills and entrepreneurial mindset.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Research",
    description: "Promoting creativity, research and problem-solving to drive meaningful change.",
  },
];

const stats = [
  { icon: ShieldCheck, value: "25+", label: "Years of Excellence" },
  { icon: Users, value: "2500+", label: "Students Enrolled" },
  { icon: GraduationCap, value: "100+", label: "Qualified Faculty" },
  { icon: Building2, value: "15+", label: "Modern Labs" },
];

const pillars = [
  {
    title: "Our Vision",
    accent: "bg-blue-500",
    icon: Telescope,
    description:
      "To be a center of excellence in technical education and innovation, shaping future leaders who contribute meaningfully to society and the world.",
  },
  {
    title: "Our Mission",
    accent: "bg-emerald-500",
    icon: GraduationCap,
    description:
      "To deliver quality education, promote research and innovation, and prepare students with skills and values for successful careers.",
  },
  {
    title: "Our Values",
    accent: "bg-violet-500",
    icon: ShieldCheck,
    description:
      "Integrity, innovation, excellence, teamwork and social responsibility are the pillars that guide our decisions and actions.",
  },
];

export function DirectorsMessageSection() {
  return (
    <main className="bg-background pb-20">
      <motion.section
        className="relative overflow-hidden border-b border-border/70 bg-card/40 pt-16 pb-10 sm:pt-20 lg:pt-24 lg:pb-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="absolute inset-0 bg-background/50" />}>
            <Spline 
              scene="https://prod.spline.design/6Wq1Q7YGyHjSE7re/scene.splinecode" 
              onError={() => console.error("Spline failed to load")}
            />
          </Suspense>
        </div> */}
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/90 to-transparent z-10" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-end lg:px-8 z-20">
          <div>
            <SplitText
              text="Director's Message"
              className="text-5xl font-bold text-foreground sm:text-7xl pt-3 tracking-tighter"
              delay={0.08}
            />
            <div className="mt-6 h-1.5 w-32 rounded-full bg-linear-to-r from-primary via-primary/70 to-accent" />
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              <BlurText text="Empowering the next generation of engineers with innovation, leadership and a commitment to excellence." />
            </p>
          </div>
          <div className="justify-self-start text-sm font-medium text-muted-foreground lg:justify-self-end">
            <span>Home</span>
            <span className="mx-2 text-muted-foreground/60">/</span>
            <span>About</span>
            <span className="mx-2 text-muted-foreground/60">/</span>
            <span className="text-foreground">Director&apos;s Message</span>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-12 grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[340px,1fr] lg:gap-20 lg:items-start lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SpotlightCard className="group overflow-hidden rounded-[2.5rem] border-none bg-linear-to-br from-card to-card/50 shadow-2xl transition-all duration-500">
          <div className="flex flex-col lg:flex-row">
            <div className="relative h-125 w-full overflow-hidden lg:h-150 lg:w-[45%]">
              <img
                src="/images/director.webp"
                alt="Mr. Anshul Jaiswal"
                className="h-full w-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                <h2 className="text-3xl font-bold text-white">Mr. Anshul Jaiswal</h2>
                <p className="text-white/80">Director</p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 lg:w-[55%] lg:p-14">
              <div className="hidden lg:block">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="inline-block text-sm font-semibold tracking-widest text-primary uppercase mb-4"
                >
                  Leadership & Vision
                </motion.span>
                <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl tracking-tight">
                  Mr. Anshul <span className="text-primary">Jaiswal</span>
                </h2>
              </div>
              <div className="mt-8 space-y-4">
                <p className="text-xl font-medium text-muted-foreground">Ph.D., M.S (Nanoelectronics)</p>
                <p className="text-lg text-muted-foreground/80 leading-relaxed">
                  A visionary educator and research advocate dedicated to transforming technical education in Balaghat and beyond.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="border-l-2 border-primary/30 pl-4">
                  <p className="text-2xl font-bold text-foreground">25+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="border-l-2 border-primary/30 pl-4">
                  <p className="text-2xl font-bold text-foreground">150+</p>
                  <p className="text-sm text-muted-foreground">Projects Guided</p>
                </div>
              </div>
              <div className="mt-12">
                <button className="group/btn relative inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-primary-foreground transition-all hover:pr-10">
                  <span className="font-semibold text-lg">Read Biography</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </SpotlightCard>

        <article className="relative overflow-hidden rounded-[2.5rem] border border-border/40 bg-background/60 backdrop-blur-xl p-8 sm:p-12 lg:p-16">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-start gap-6">
              <span className="text-6xl font-serif text-primary/30 leading-none">“</span>
              <div className="max-w-3xl pt-2">
                <BlurText
                  text="At Satpuda, we believe in building more than careers - we build confident, capable and compassionate human beings."
                  className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl tracking-tight"
                  delay={0.05}
                />
              </div>
            </div>

            <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />

            <div className="mt-12 space-y-10">
              {highlights.map(({ icon: Icon, title, description }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-start gap-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground max-w-xl">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 flex items-center justify-between">
              <div>
                <p className="text-5xl font-medium tracking-tighter text-foreground" style={{ fontFamily: "cursive" }}>
                  Anshul Jaiswal
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-1 w-8 rounded-full bg-primary" />
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Director</p>
                </div>
              </div>
              <div className="hidden sm:block opacity-20">
                <p className="text-3xl font-serif italic text-foreground/50">AJ</p>
              </div>
            </div>
          </div>
        </article>
      </motion.section>

      <motion.section
        className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid gap-3 rounded-3xl border border-border/40 bg-muted/30 p-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 lg:border-r lg:border-border/40 lg:last:border-r-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-4xl font-bold leading-none text-foreground tracking-tighter">
                  <ShinyText text={value} speed={3} color="rgba(214, 11, 11, 0.85)" />
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wide">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {pillars.map(({ title, description, accent, icon: Icon }) => (
            <article key={title} className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{title}</h3>
                  <div className={`mt-2 h-1.5 w-14 rounded-full ${accent}`} />
                </div>
              </div>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {["/images/overview/campus building.png", "/images/overview/student in lab.png", "/images/overview/student in class.png"].map((src) => (
            <div key={src} className="group overflow-hidden rounded-[28px] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1">
              <img src={src} alt="Campus life" className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
