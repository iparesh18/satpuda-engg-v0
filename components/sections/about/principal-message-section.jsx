"use client";

import { BookOpen, Building2, GraduationCap, ShieldCheck, Users, Briefcase } from "lucide-react";

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
      <section className="relative overflow-hidden border-b border-border/70 bg-card/40 pt-32 pb-10 lg:pt-28 lg:pb-12">
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
            <h1 className="pt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Principal&apos;s Message</h1>
            <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary via-primary/70 to-accent" />
            <p className="mt-6 max-w-xl text-base text-muted-foreground">
              A message of guidance, inspiration and commitment.
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
      </section>

      <section className="mx-auto mt-12 grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[340px,1fr] lg:gap-20 lg:items-start lg:px-8">
        <article className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[0_10px_40px_rgba(0,0,0,0.06)] lg:flex lg:flex-row">
          <div className="h-[480px] w-full overflow-hidden sm:h-[520px] lg:h-[420px] lg:w-[42%]">
            <img
              src="/images/hero-3.jpg"
              alt="Principal portrait"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="bg-primary px-5 py-6 text-primary-foreground lg:flex lg:w-[58%] lg:flex-col lg:justify-center">
            <h2 className="text-2xl font-bold leading-tight">Prof. (Dr.) Ashok Kumar Gupta</h2>
            <p className="mt-3 text-sm text-primary-foreground/90">
              BE (MACT), M.Tech (MANIT), PGDM (AIMA), DMS (NIM, New Delhi)
            </p>
            <p className="mt-2 text-sm text-primary-foreground/90">LL B, Ph.D (AISECT), FIBAKM, FCBA, FCKM</p>
            <div className="my-5 h-px w-full bg-primary-foreground/25" />
            <p className="text-sm text-primary-foreground/90">Principal</p>
            <p className="text-sm text-primary-foreground/90">Satpuda College of Engineering & Polytechnic</p>
          </div>
        </article>

        <article className="rounded-3xl border border-border/50 bg-background p-6 shadow-none sm:p-8 lg:p-12">
          <div className="flex items-start gap-5">
            <p className="text-4xl font-semibold leading-none text-primary/80 sm:text-5xl">“</p>
            <div>
              <p className="max-w-3xl pt-1 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                Dear Students and Parents,
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                It gives me great pleasure to welcome you to Satpuda College of Engineering & Polytechnic, a premier institution
                offering Diploma and B.Tech programs. Our campus is designed to provide an environment that blends academic
                excellence with real-world exposure.
              </p>
            </div>
          </div>

          <div className="mt-7 h-px w-full bg-border/70" />

          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              We strive to create a nurturing environment that promotes critical thinking, creativity and innovation. Our faculty
              comprises experienced and well-qualified teachers dedicated to creating a conducive learning culture.
            </p>
            <p>
              We are committed to providing a world-class education that prepares students for future challenges and helps them
              become responsible citizens. We welcome you to Satpuda College and look forward to your journey with us.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-4xl leading-none text-foreground sm:text-5xl" style={{ fontFamily: "cursive" }}>
              Ashok Kumar Gupta
            </p>
            <p className="mt-2 text-sm font-medium text-muted-foreground">Principal</p>
          </div>
        </article>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-3 rounded-3xl border border-border/40 bg-muted/30 p-4 sm:grid-cols-2 lg:grid-cols-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3 px-4 py-4 lg:border-r lg:border-border/40 lg:last:border-r-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold leading-none text-foreground">{value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {gallery.map((src) => (
            <div key={src} className="overflow-hidden rounded-[28px] border border-border bg-card shadow-sm">
              <img src={src} alt="Campus life" className="h-56 w-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
