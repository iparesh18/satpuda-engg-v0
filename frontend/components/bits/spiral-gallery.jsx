"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * SpiralGallery
 * A scroll-driven 3D spiral / vortex of rounded cards inspired by
 * pacomepertant.com. On desktop the stage is pinned and the spiral is
 * scrubbed by scroll: cards travel down a helix, tumbling and rounding,
 * with the focal card sharp & centred while the rest recede + blur.
 *
 * Colours stay on-brand: deep navy (primary) stage, white type,
 * accent-red editorial labels.
 */
export default function SpiralGallery({
  images = [],
  eyebrow = "Spiral Showreel",
  title = "Scroll the Spiral",
  subtitle = "Scroll to spin through campus moments — each frame drifts down the vortex, rounding into focus and away again.",
}) {
  const triggerRef = useRef(null);
  const stageRef = useRef(null);
  const sceneRef = useRef(null);
  const cardRefs = useRef([]);

  const cards = useMemo(() => images.filter(Boolean), [images]);
  const total = cards.length;

  // Click-to-enlarge lightbox (mirrors the DomeGallery open-on-click behaviour).
  const [active, setActive] = useState(null);
  const openCard = (card) => (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setActive({ card, rect });
  };
  const closeCard = () => setActive(null);
  const onCardKeyDown = (card) => (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const rect = e.currentTarget.getBoundingClientRect();
      setActive({ card, rect });
    }
  };

  useEffect(() => {
    if (!active) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  useEffect(() => {
    const scene = sceneRef.current;
    const stage = stageRef.current;
    const trigger = triggerRef.current;
    if (!scene || !stage || !trigger || total === 0) return undefined;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (prefersReduced || !isDesktop) return undefined;

    const els = cardRefs.current.filter(Boolean);

    // Position one card relative to the moving focal point of the spiral.
    const place = (el, f) => {
      const width = stage.clientWidth || 1100;
      const k = Math.min(1, Math.max(0.55, width / 1180));

      const ANGLE = 0.62; // radians of swirl per unit of distance
      const R = 360 * k; // helix radius
      const Y_STEP = 132 * k; // vertical travel per card
      const a = f * ANGLE;

      const x = Math.sin(a) * R;
      const z = (Math.cos(a) - 1) * R; // focal card sits at the front (z = 0)
      const y = -f * Y_STEP; // upcoming cards wait above, then descend through focus

      const abs = Math.abs(f);
      const scale = Math.max(0.4, 1 - abs * 0.12);
      const opacity = Math.max(0.06, 1 - abs * 0.17);
      const blur = Math.min(7, Math.max(0, abs * 0.95 - 0.35));
      const rotY = -f * 16; // degrees — face follows the swirl
      const rotZ = f * 4.5; // the "rounding rounding" tumble
      const rotX = Math.sin(a) * 5;

      el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg) scale(${scale})`;
      el.style.opacity = `${opacity}`;
      el.style.zIndex = `${Math.round(1000 - abs * 12)}`;
      const img = el.firstElementChild;
      if (img) img.style.filter = `blur(${blur}px)`;
    };

    const render = (p) => {
      const offset = p * (total - 1);
      for (let i = 0; i < els.length; i += 1) {
        place(els[i], i - offset);
      }
    };

    const proxy = { p: 0 };
    const tween = gsap.to(proxy, {
      p: 1,
      ease: "none",
      scrollTrigger: {
        trigger,
        start: "top top",
        end: () => `+=${Math.max(1800, total * 280)}`,
        pin: stage,
        scrub: 1,
        anticipatePin: 1,
      },
      onUpdate: () => render(proxy.p),
    });

    render(0);

    const onResize = () => render(proxy.p);
    window.addEventListener("resize", onResize);
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const refreshTimer = setTimeout(refresh, 600);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", refresh);
      clearTimeout(refreshTimer);
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [total]);

  if (total === 0) return null;

  return (
    <section ref={triggerRef} className="mt-20">
      {/* Desktop — pinned, scroll-scrubbed 3D spiral */}
      <div
        ref={stageRef}
        className="relative hidden h-screen w-full overflow-hidden rounded-[3rem] border border-border/40 bg-[radial-gradient(circle_at_50%_30%,#0a2a6b_0%,#021545_55%,#01092a_100%)] shadow-2xl md:block"
      >
        {/* Brand glows + grid */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/3 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(214,11,11,0.18),transparent_60%)] blur-2xl" />
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:90px_90px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(1,9,42,0.85)_100%)]" />
        </div>

        {/* Editorial labels */}
        <div className="pointer-events-none absolute left-10 top-10 z-[1200] flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          spiral
          <span className="text-white/25">/</span>
          showreel
        </div>
        <div className="pointer-events-none absolute right-10 top-10 z-[1200] text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
          2026 · campus
        </div>

        {/* Heading */}
        <div className="pointer-events-none absolute inset-x-0 top-20 z-[1200] flex flex-col items-center px-6 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
          <p className="mt-3 hidden max-w-md text-sm leading-relaxed text-white/60 sm:block">{subtitle}</p>
        </div>

        {/* 3D scene */}
        <div className="absolute inset-0 z-[100]" style={{ perspective: "1400px" }}>
          <div
            ref={sceneRef}
            className="absolute left-1/2 top-1/2"
            style={{ transformStyle: "preserve-3d" }}
          >
            {cards.map((card, i) => (
              <div
                key={`${card.src}-${i}`}
                className="absolute left-0 top-0"
                style={{ transform: "translate(-50%, -50%)", transformStyle: "preserve-3d" }}
              >
                <div
                  ref={(el) => (cardRefs.current[i] = el)}
                  role="button"
                  tabIndex={0}
                  aria-label={card.title ? `Open ${card.title}` : "Open image"}
                  onClick={openCard(card)}
                  onKeyDown={onCardKeyDown(card)}
                  className="cursor-pointer overflow-hidden rounded-[1.75rem] border border-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10 transition-shadow will-change-transform hover:ring-2 hover:ring-accent/70"
                  style={{
                    width: "clamp(200px, 20vw, 300px)",
                    height: "clamp(260px, 27vw, 400px)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <img
                    src={card.src}
                    alt={card.title || card.alt || "Campus moment"}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  {(card.tag || card.title) && (
                    <div className="absolute bottom-4 left-4 right-4">
                      {card.tag && (
                        <p className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-accent">{card.tag}</p>
                      )}
                      {card.title && (
                        <p className="mt-1 text-sm font-bold leading-tight text-white">{card.title}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="pointer-events-none absolute inset-x-0 bottom-8 z-[1200] flex flex-col items-center gap-2 text-white/50">
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.4em]">Scroll</span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
            <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
          </span>
        </div>
      </div>

      {/* Mobile — clean rounded gallery on the same navy stage */}
      <div className="relative overflow-hidden rounded-[2rem] border border-border/40 bg-[radial-gradient(circle_at_50%_20%,#0a2a6b_0%,#021545_60%,#01092a_100%)] px-5 py-12 shadow-2xl md:hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:70px_70px]" />
        <div className="relative mb-8 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
        </div>
        <div className="relative grid grid-cols-2 gap-4">
          {cards.slice(0, 6).map((card, i) => (
            <motion.div
              key={`m-${card.src}-${i}`}
              role="button"
              tabIndex={0}
              aria-label={card.title ? `Open ${card.title}` : "Open image"}
              onClick={openCard(card)}
              onKeyDown={onCardKeyDown(card)}
              initial={{ opacity: 0, y: 24, rotate: i % 2 ? 4 : -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 2 : -2 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative cursor-pointer overflow-hidden rounded-[1.5rem] border border-white/15 shadow-2xl ${
                i % 3 === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[3/4]"
              }`}
            >
              <img
                src={card.src}
                alt={card.title || card.alt || "Campus moment"}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              {card.title && (
                <div className="absolute bottom-3 left-3 right-3">
                  {card.tag && (
                    <p className="text-[0.55rem] font-bold uppercase tracking-[0.2em] text-accent">{card.tag}</p>
                  )}
                  <p className="text-xs font-bold leading-tight text-white">{card.title}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Click-to-enlarge lightbox — grows from the card into a centred view */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {active &&
              (() => {
                const { rect, card } = active;
                const vw = window.innerWidth;
                const vh = window.innerHeight;
                const aspect = rect.width / rect.height || 0.75;
                let h = Math.min(vh * 0.84, 780);
                let w = h * aspect;
                if (w > vw * 0.92) {
                  w = vw * 0.92;
                  h = w / aspect;
                }
                const left = (vw - w) / 2;
                const top = (vh - h) / 2;
                const scale = rect.width / w;
                const dx = rect.left - left;
                const dy = rect.top - top;

                return (
                  <motion.div
                    key="spiral-lightbox"
                    className="fixed inset-0 z-[10000] flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={closeCard} />

                    <button
                      type="button"
                      onClick={closeCard}
                      aria-label="Close"
                      className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-8 sm:top-8"
                    >
                      <X className="h-5 w-5" />
                    </button>

                    <motion.div
                      className="absolute overflow-hidden rounded-[2rem] border border-white/15 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.85)]"
                      style={{ top, left, width: w, height: h, transformOrigin: "top left" }}
                      initial={{ x: dx, y: dy, scale }}
                      animate={{ x: 0, y: 0, scale: 1 }}
                      exit={{ x: dx, y: dy, scale }}
                      transition={{ type: "spring", stiffness: 210, damping: 26 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src={card.src}
                        alt={card.title || card.alt || "Campus moment"}
                        className="h-full w-full object-cover"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      {(card.tag || card.title) && (
                        <div className="absolute bottom-6 left-6 right-6">
                          {card.tag && (
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">{card.tag}</p>
                          )}
                          {card.title && (
                            <p className="mt-1 text-2xl font-bold text-white sm:text-3xl">{card.title}</p>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })()}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
