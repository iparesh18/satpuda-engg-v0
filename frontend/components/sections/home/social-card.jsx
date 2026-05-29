"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function SocialCard({
  accent,
  badge,
  ctaHref,
  ctaLabel,
  description,
  feed,
  icon: Icon,
  title,
}) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 170, damping: 18 }}
      className="group isolate relative flex h-[760px] flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_80px_rgba(2,21,69,0.14)] backdrop-blur-xl sm:h-[820px] lg:h-[860px]"
    >
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,248,255,0.92))]" />
      <div className="absolute -right-20 -top-20 z-0 h-52 w-52 rounded-full bg-primary/10 blur-3xl transition duration-500 group-hover:bg-primary/15" />
      <div className="absolute -left-20 bottom-0 z-0 h-44 w-44 rounded-full bg-sky-200/50 blur-3xl transition duration-500 group-hover:bg-sky-200/70" />

      <div className="relative z-10 flex h-full flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/80 bg-gradient-to-br ${accent} text-white shadow-lg shadow-primary/10`}>
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                {badge}
              </div>
              <h3 className="mt-2 text-[1.05rem] font-bold text-foreground sm:text-[1.15rem]">
                {title}
              </h3>
            </div>
          </div>

          <div className="mt-1 hidden rounded-full border border-primary/10 bg-white/90 p-2 text-primary shadow-sm sm:block">
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <p className="mt-3 max-w-[34ch] text-sm leading-6 text-muted-foreground">
          {description}
        </p>

        <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
          <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
          Live feed
          <span className="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent" />
        </div>

        <div className="mt-4 min-h-0 flex-1 overflow-y-auto scrollbar-none rounded-[1.35rem] border border-slate-200/80 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
          {feed}
        </div>

        <a
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          className={`group/cta relative mt-4 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 ${accent}`}
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover/cta:translate-x-full" />
          <span className="relative flex items-center gap-2">
            {ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
          </span>
        </a>
      </div>
    </motion.article>
  );
}

export { SocialCard };