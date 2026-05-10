"use client";

import { motion } from "framer-motion";
import { BookOpen, Building2, GraduationCap, ShieldCheck, Users, Briefcase } from "lucide-react";

import SplitText from "../../bits/split-text.jsx";
import BlurText from "../../bits/blur-text.jsx";
import ShinyText from "../../bits/shiny-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";

const stats = [
  { icon: GraduationCap, value: "2017", label: "Established" },
  { icon: Users, value: "2500+", label: "Students Enrolled" },
  { icon: ShieldCheck, value: "100+", label: "Experienced Faculty" },
  { icon: BookOpen, value: "30+", label: "Courses Offered" },
  { icon: Building2, value: "25+", label: "Modern Laboratories" },
  { icon: Briefcase, value: "100%", label: "Placement Support" },
];

const gallery = [
  "/images/overview/campus building.png",
  "/images/overview/student in lab.png",
  "/images/overview/smart library.png",
  "/images/overview/campus view.png",
];

export function PrincipalMessageSection() {
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
            className="h-full w-full object-cover object-right"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/96 to-background/88" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-end lg:px-8">
          <div>
            <SplitText
              text="Principal's Message"
              className="text-5xl font-bold text-foreground sm:text-7xl pt-3 tracking-tighter"
              delay={0.08}
            />
            <div className="mt-6 h-1.5 w-32 rounded-full bg-gradient-to-r from-primary via-primary/70 to-accent" />
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              <BlurText text="A message of guidance, inspiration and commitment to academic excellence." />
            </p>
          </div>
          <div className="justify-self-start text-sm font-medium text-muted-foreground lg:justify-self-end">
            <span>Home</span>
            <span className="mx-2 text-muted-foreground/60">/</span>
            <span>About</span>
            <span className="mx-2 text-muted-foreground/60">/</span>
            <span className="text-foreground">Principal&apos;s Message</span>
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
        <SpotlightCard className="group overflow-hidden rounded-[2.5rem] border-none bg-gradient-to-br from-card to-card/50 shadow-2xl transition-all duration-500">
          <div className="flex flex-col lg:flex-row">
            <div className="relative h-[500px] w-full overflow-hidden lg:h-[600px] lg:w-[45%]">
              <img
                src="/images/hero-3.jpg"
                alt="Principal portrait"
                className="h-full w-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                <h2 className="text-3xl font-bold text-white">Prof. (Dr.) Ashok Kumar Gupta</h2>
                <p className="text-white/80">Principal</p>
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
                  Prof. (Dr.) Ashok <span className="text-primary">Kumar Gupta</span>
                </h2>
              </div>
              <div className="mt-8 space-y-4">
                <p className="text-xl font-medium text-muted-foreground">
                  BE (MACT), M.Tech (MANIT), PGDM (AIMA), DMS (NIM, New Delhi)
                </p>
                <p className="text-lg text-muted-foreground/80 leading-relaxed">LL B, Ph.D (AISECT), FIBAKM, FCBA, FCKM</p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="border-l-2 border-primary/30 pl-4">
                  <p className="text-2xl font-bold text-foreground">20+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="border-l-2 border-primary/30 pl-4">
                  <p className="text-2xl font-bold text-foreground">40+</p>
                  <p className="text-sm text-muted-foreground">Awards & Honors</p>
                </div>
              </div>
              <div className="mt-12">
                <button className="group/btn relative inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-primary-foreground transition-all hover:pr-10">
                  <span className="font-semibold text-lg">Read Profile</span>
                  <Briefcase className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </SpotlightCard>

        <article className="relative overflow-hidden rounded-[2.5rem] border border-border/40 bg-background/60 backdrop-blur-xl p-6 sm:p-10 lg:p-14">
          <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-accent/5 blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-start gap-6">
              <span className="text-6xl font-serif text-primary/30 leading-none">“</span>
              <div className="max-w-3xl pt-2">
                <BlurText
                  text="Dear Students and Parents,"
                  className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl tracking-tight"
                  delay={0.05}
                />
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  It gives me great pleasure to welcome you to Satpuda College of Engineering & Polytechnic, a premier institution
                  offering Diploma and B.Tech programs. Our campus is designed to provide an environment that blends academic
                  excellence with real-world exposure.
                </p>
              </div>
            </div>

            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                We strive to create a nurturing environment that promotes critical thinking, creativity and innovation. Our faculty
                comprises experienced and well-qualified teachers dedicated to creating a conducive learning culture.
              </p>
              <p>
                We are committed to providing a world-class education that prepares students for future challenges and helps them
                become responsible citizens. We welcome you to Satpuda College and look forward to your journey with us.
              </p>
            </div>

            <div className="mt-12 flex items-center justify-between">
              <div>
                <p className="text-4xl leading-none text-foreground sm:text-5xl" style={{ fontFamily: "cursive" }}>
                  Ashok Kumar Gupta
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-1 w-8 rounded-full bg-primary" />
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Principal</p>
                </div>
              </div>
              <div className="hidden sm:block opacity-20">
                <p className="text-3xl font-serif italic text-foreground/50">AKG</p>
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
        <div className="grid gap-3 rounded-3xl border border-border/40 bg-muted/30 p-4 sm:grid-cols-2 lg:grid-cols-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-4 py-4 transition-all duration-300 hover:-translate-y-[2px] lg:border-r lg:border-border/40 lg:last:border-r-0"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-3xl font-bold leading-none text-foreground tracking-tighter">
                  <ShinyText text={value} speed={3} color="rgba(59, 130, 246, 0.85)" />
                </p>
                <p className="mt-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">{label}</p>
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
        <div className="grid gap-4 md:grid-cols-4">
          {gallery.map((src) => (
            <div key={src} className="group overflow-hidden rounded-[28px] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1">
              <img src={src} alt="Campus life" className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
