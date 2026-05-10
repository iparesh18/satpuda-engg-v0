"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Lightbulb, ShieldCheck, Users, Building2, Telescope } from "lucide-react";

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
        className="relative overflow-hidden border-b border-border/70 bg-card/40 pt-32 pb-10 lg:pt-28 lg:pb-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-y-0 right-0 w-full sm:w-4/5 lg:w-[52%] opacity-20">
          <img
            src="/images/overview/campus overview.png"
            alt="Campus backdrop"
            className="h-full w-full object-cover object-right transition-transform duration-1000"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/96 to-background/88" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-end lg:px-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl pt-3 tracking-tight">Director&apos;s Message</h1>
            <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary via-primary/70 to-accent" />
            <p className="mt-6 max-w-xl text-base text-muted-foreground">A message of vision, leadership and commitment.</p>
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
        <article className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)] lg:flex lg:flex-row">
          <div className="h-[480px] w-full overflow-hidden sm:h-[520px] lg:h-[420px] lg:w-[42%]">
            <img src="/images/director.webp" alt="Mr. Anshul Jaiswal" className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]" />
          </div>
          <div className="bg-primary px-5 py-6 text-primary-foreground lg:flex lg:w-[58%] lg:flex-col lg:justify-center">
            <h2 className="text-2xl font-bold leading-tight">Mr. Anshul Jaiswal</h2>
            <p className="mt-3 text-sm text-primary-foreground/90">Ph.D., M.S (Nanoelectronics)</p>
            <p className="mt-2 text-sm text-primary-foreground/90">Director | Educator | Research Advocate</p>
            <div className="my-5 h-px w-full bg-primary-foreground/25" />
            <p className="text-sm text-primary-foreground/90">Satpuda College of Engineering and Polytechnic, Balaghat</p>
          </div>
        </article>

        <article className="rounded-3xl border border-border/50 bg-background p-6 shadow-none transition-colors duration-300 hover:border-border sm:p-8 lg:p-12">
          <div className="flex items-start gap-5">
            <p className="text-4xl font-semibold leading-none text-primary/80 sm:text-5xl">“</p>
            <p className="max-w-3xl pt-1 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              At Satpuda, we believe in building more than careers - we build confident, capable and compassionate human beings.
            </p>
          </div>

          <div className="mt-7 h-px w-full bg-border/70" />

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Education is the most powerful tool to transform lives and create a better world. Our goal is to provide a learning
            environment that encourages curiosity, innovation and practical skills for real-world challenges.
          </p>

          <div className="mt-8 space-y-7">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="group flex items-start gap-4 border-b border-border/50 pb-6 transition-all duration-300 last:border-b-0 last:pb-0 hover:translate-x-1">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105 group-hover:bg-primary/15">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            I invite every student to take full advantage of the opportunities here and become a part of this journey of growth,
            excellence and nation-building.
          </p>

          <div className="mt-8">
            <p className="text-4xl leading-none text-foreground sm:text-5xl" style={{ fontFamily: "cursive" }}>
              Anshul Jaiswal
            </p>
            <p className="mt-2 text-sm font-medium text-muted-foreground">Director</p>
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
            <div key={label} className="flex items-center gap-3 px-4 py-4 transition-all duration-300 hover:translate-y-[-2px] lg:border-r lg:border-border/40 lg:last:border-r-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-3xl font-bold leading-none text-foreground">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
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