"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Target, Sparkles, ShieldCheck, Users, Lightbulb, Handshake, Award } from "lucide-react";
import SplitText from "../../bits/split-text.jsx";
import BlurText from "../../bits/blur-text.jsx";
import { useRef } from "react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for the highest standards in education and performance.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Encouraging creativity and new ideas to drive positive change.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Upholding honesty, ethical values and transparency.",
  },
  {
    icon: Handshake,
    title: "Teamwork",
    description: "Believing in the power of collaboration and mutual respect.",
  },
  {
    icon: Users,
    title: "Responsibility",
    description: "Committed to societal well-being and sustainable development.",
  },
  {
    icon: Sparkles,
    title: "Leadership",
    description: "Developing confident leaders ready to shape the future.",
  },
];

const marqueeItems = [
  "Empower",
  "Educate",
  "Elevate",
  "Innovate",
  "Integrate",
  "Inspire",
  "Integrity",
  "Excellence",
  "Leadership",
  "Teamwork",
];

const constellationNodes = [
  { ...values[0], top: "12%", left: "12%", lineLen: "150px", lineRot: "24deg" },
  { ...values[1], top: "18%", left: "68%", lineLen: "170px", lineRot: "160deg" },
  { ...values[2], top: "50%", left: "8%", lineLen: "190px", lineRot: "-12deg" },
  { ...values[3], top: "62%", left: "42%", lineLen: "140px", lineRot: "210deg" },
  { ...values[4], top: "32%", left: "74%", lineLen: "120px", lineRot: "200deg" },
  { ...values[5], top: "76%", left: "70%", lineLen: "150px", lineRot: "238deg" },
];


export function MissionVisionSection() {
  const constellationRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: constellationRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <main className="bg-background pb-20">
      <style>{`
        @keyframes mv-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .mv-constellation-node:hover .mv-constellation-line {
          opacity: 1;
        }
        @keyframes mv-star-drift {
          0% { transform: translateY(0); opacity: 0.45; }
          50% { opacity: 0.7; }
          100% { transform: translateY(-24px); opacity: 0.45; }
        }
      `}</style>
      <motion.section
        className="relative overflow-hidden border-b border-border/70 bg-card/40 pt-32 pb-10 lg:pt-28 lg:pb-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.08),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-end lg:px-8">
          <div>
            <SplitText
              text="Mission & Vision"
              className="pt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
              delay={0.06}
            />
            <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary via-primary/70 to-accent" />
            <BlurText
              text="Our purpose. Our promise. Our responsibility."
              className="mt-6 max-w-xl text-base text-muted-foreground"
            />
          </div>
          <div className="justify-self-start text-sm font-medium text-muted-foreground lg:justify-self-end">
            <span>Home</span>
            <span className="mx-2 text-muted-foreground/60">/</span>
            <span>About</span>
            <span className="mx-2 text-muted-foreground/60">/</span>
            <span className="text-foreground">Mission &amp; Vision</span>
          </div>
        </div>
      </motion.section>

      <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/70">
          <div className="flex w-[200%] items-center gap-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground"
            style={{ animation: "mv-marquee 24s linear infinite" }}
          >
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.section
        className="mx-auto mt-12 grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr,1fr] lg:items-center lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ rotateX: 3, rotateY: -3, y: -6 }}
          transition={{ type: "spring", stiffness: 160, damping: 14 }}
          className="group overflow-hidden rounded-[28px] border border-border bg-card shadow-lg transition-all duration-500 hover:shadow-[0_18px_50px_rgba(59,130,246,0.18)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src="/images/overview/student in class.png"
            alt="Students on campus"
            className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-96"
          />
        </motion.div>
        <motion.div
          whileHover={{ rotateX: 3, rotateY: 3, y: -6 }}
          transition={{ type: "spring", stiffness: 160, damping: 14 }}
          className="group rounded-[28px] border border-border/60 bg-card/80 p-6 shadow-sm transition-all duration-500 hover:shadow-[0_18px_50px_rgba(59,130,246,0.18)] sm:p-8"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-500 group-hover:rotate-6">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Mission</p>
              <SplitText
                text="Empower. Educate. Elevate."
                className="mt-2 text-2xl font-bold text-foreground sm:text-3xl"
                delay={0.05}
              />
            </div>
          </div>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground transition-all duration-500 group-hover:text-foreground">
            <BlurText
              text="We channel every learner toward full potential through structured learning and hands-on exposure."
              className="text-base leading-relaxed text-muted-foreground"
            />
            <p className="opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              The goal: <span className="font-semibold text-primary">confident, capable graduates</span> who contribute with
              purpose.
            </p>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="mx-auto mt-10 grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr,1.1fr] lg:items-center lg:px-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ rotateX: 3, rotateY: -3, y: -6 }}
          transition={{ type: "spring", stiffness: 160, damping: 14 }}
          className="group rounded-[28px] border border-border/60 bg-card/80 p-6 shadow-sm transition-all duration-500 hover:shadow-[0_18px_50px_rgba(59,130,246,0.18)] sm:p-8"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-500 group-hover:rotate-6">
              <Eye className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Vision</p>
              <SplitText
                text="Innovate. Integrate. Inspire."
                className="mt-2 text-2xl font-bold text-foreground sm:text-3xl"
                delay={0.05}
              />
            </div>
          </div>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground transition-all duration-500 group-hover:text-foreground">
            <BlurText
              text="A future-forward campus that blends modern tools with human-centered teaching."
              className="text-base leading-relaxed text-muted-foreground"
            />
            <p className="opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              We prepare students for <span className="font-semibold text-primary">industry-relevant impact</span> in a rapidly
              evolving world.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ rotateX: 3, rotateY: 3, y: -6 }}
          transition={{ type: "spring", stiffness: 160, damping: 14 }}
          className="group overflow-hidden rounded-[28px] border border-border bg-card shadow-lg transition-all duration-500 hover:shadow-[0_18px_50px_rgba(59,130,246,0.18)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src="/images/overview/campus building.png"
            alt="Campus community"
            className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-96"
          />
        </motion.div>
      </motion.section>

      <motion.section
        className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mb-10 rounded-[28px] border border-border/60 bg-card/70 p-6 sm:p-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Values Constellation</p>
            <h3 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">A map of what guides us</h3>
            <BlurText
              text="Hover a node to highlight its path and reveal its message."
              className="mt-3 text-sm text-muted-foreground"
            />
          </div>

          <div className="mt-10 hidden md:block">
            <div
              ref={constellationRef}
              className="relative mx-auto h-[700px] max-w-6xl overflow-hidden rounded-[36px] border border-border/60 bg-background/80"
            >
              <motion.div
                className="absolute inset-0"
                style={{ y: parallaxY }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(99,102,241,0.12),transparent_55%)]" />
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    backgroundImage: "radial-gradient(rgba(59,130,246,0.22) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-35"
                  style={{
                    backgroundImage: "radial-gradient(rgba(99,102,241,0.18) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                    animation: "mv-star-drift 18s ease-in-out infinite",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage: "radial-gradient(rgba(14,165,233,0.2) 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                    animation: "mv-star-drift 24s ease-in-out infinite",
                  }}
                />
              </motion.div>
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 500" aria-hidden>
                <defs>
                  <linearGradient id="mv-line" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.25)" />
                    <stop offset="100%" stopColor="rgba(99,102,241,0.18)" />
                  </linearGradient>
                </defs>
                <path d="M140 80 L480 170 L860 140" stroke="url(#mv-line)" strokeWidth="2" fill="none" />
                <path d="M120 260 L460 250 L820 360" stroke="url(#mv-line)" strokeWidth="2" fill="none" />
                <path d="M480 170 L460 250" stroke="url(#mv-line)" strokeWidth="2" fill="none" />
                <path d="M460 250 L860 140" stroke="url(#mv-line)" strokeWidth="2" fill="none" />
              </svg>

              <div className="absolute inset-0">
                <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl">
                  <Sparkles className="h-9 w-9" />
                </div>

                {constellationNodes.map(({ icon: Icon, title, description, top, left, lineLen, lineRot }) => (
                  <div key={title} className="mv-constellation-node absolute" style={{ top, left }}>
                    <span
                      className="mv-constellation-line absolute left-1/2 top-1/2 h-px w-[var(--line-length)] -translate-x-full -translate-y-1/2 bg-gradient-to-r from-primary/10 via-primary/60 to-primary/10 opacity-0 transition-opacity duration-300"
                      style={{
                        "--line-length": lineLen,
                        transform: `translate(-100%, -50%) rotate(${lineRot})`,
                      }}
                    />
                    <div className="group flex items-center gap-3 rounded-2xl border border-border/60 bg-background/95 px-4 py-3 shadow-lg backdrop-blur">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="max-w-[190px]">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">{title}</p>
                        <p className="mt-1 text-[11px] text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:hidden">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-background/85 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">{title}</p>
                <p className="mt-2 text-[11px] text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[28px] border border-border/60 bg-card/70 p-6 sm:p-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Core Values</p>
            <h3 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">The principles that guide us</h3>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {values.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-border/60 bg-background/80 p-4 text-center shadow-sm"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-3 text-sm font-semibold text-foreground">{title}</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
