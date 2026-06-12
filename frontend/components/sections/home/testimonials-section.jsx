"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Quote, Star, MessageSquarePlus } from "lucide-react";
import { SectionHeading } from "./section-heading.jsx";
import { Button } from "../../ui/button.jsx";

function getInitials(name) {
  return String(name || "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("") || "S";
}

function StarRow({ rating = 5, size = "h-4 w-4" }) {
  const filled = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="flex items-center gap-1 text-accent">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={`star-${index}`}
          className={`${size} ${index < filled ? "fill-current" : "text-accent/25"}`}
        />
      ))}
    </div>
  );
}

function Avatar({ name, size = "w-16 h-16 text-lg" }) {
  return (
    <div
      className={`${size} shrink-0 rounded-2xl bg-primary/10 text-primary font-bold flex items-center justify-center border-2 border-border group-hover:border-accent transition-colors duration-500`}
      aria-hidden="true"
    >
      {getInitials(name)}
    </div>
  );
}

function TestimonialCard({ testimonial, variant = "desktop", onExpandedChange }) {
  const isDesktop = variant === "desktop";
  const [expanded, setExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const quoteRef = useRef(null);
  const didMount = useRef(false);

  // Detect whether the clamped quote overflows so "Read more" only shows when needed.
  useEffect(() => {
    if (expanded) return;
    const el = quoteRef.current;
    if (!el) return;
    setIsTruncated(el.scrollHeight > el.clientHeight + 1);
  }, [testimonial.quote, expanded]);

  // Notify the parent when a card opens/closes so the mobile marquee can pause.
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    onExpandedChange?.(expanded);
  }, [expanded, onExpandedChange]);

  const heightClass = expanded ? "" : isDesktop ? "h-[420px]" : "h-[380px]";

  return (
    <div
      className={`${isDesktop ? "w-[340px] lg:w-[380px] p-8 hover:bg-card/80 group" : "w-80 flex-none p-6"} ${heightClass} flex flex-col bg-card/50 backdrop-blur-sm border border-border rounded-3xl shadow-xl transition-all duration-500`}
    >
      <div className={isDesktop ? "mb-5" : "mb-4"}>
        <StarRow rating={testimonial.rating} />
      </div>
      <Quote
        className={`${isDesktop ? "h-10 w-10 mb-6 group-hover:text-accent transition-colors duration-500" : "h-8 w-8 mb-4"} text-accent/30 shrink-0`}
      />
      <p
        ref={quoteRef}
        className={`text-foreground/70 leading-relaxed italic ${isDesktop ? "text-lg mb-3" : "text-base mb-2"} ${expanded ? "" : "line-clamp-5"}`}
      >
        {`"${testimonial.quote}"`}
      </p>
      {isTruncated ? (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className={`self-start font-semibold text-red-600 hover:text-red-700 hover:underline transition-colors ${isDesktop ? "text-sm mb-6" : "text-xs mb-4"}`}
        >
          {expanded ? "Read less" : "Read more ..."}
        </button>
      ) : null}
      <div className={`mt-auto flex items-center ${isDesktop ? "gap-5" : "gap-4"}`}>
        <Avatar name={testimonial.name} size={isDesktop ? "w-16 h-16 text-lg" : "w-14 h-14 text-base"} />
        <div>
          <p className={`font-bold text-foreground ${isDesktop ? "text-lg" : "text-base"} leading-none mb-1`}>
            {testimonial.name}
          </p>
          {testimonial.role ? (
            <p className={`${isDesktop ? "text-xs" : "text-[10px]"} text-muted-foreground uppercase tracking-widest`}>
              {testimonial.role}
            </p>
          ) : null}
          {testimonial.company ? (
            <p className={`${isDesktop ? "text-xs mt-2" : "text-[10px] mt-1"} text-accent font-bold uppercase tracking-tighter`}>
              {testimonial.company}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const apiBaseUrl = import.meta.env.VITE_API_URL || "";
  const [approved, setApproved] = useState([]);
  const [mobilePaused, setMobilePaused] = useState(false);
  const [desktopPaused, setDesktopPaused] = useState(false);
  const mobileExpandedCount = useRef(0);
  const desktopExpandedCount = useRef(0);

  // Pause the mobile marquee whenever at least one card is expanded.
  const handleMobileExpandedChange = useCallback((isOpen) => {
    mobileExpandedCount.current = Math.max(0, mobileExpandedCount.current + (isOpen ? 1 : -1));
    setMobilePaused(mobileExpandedCount.current > 0);
  }, []);

  // Pause the desktop marquee whenever at least one card is expanded.
  const handleDesktopExpandedChange = useCallback((isOpen) => {
    desktopExpandedCount.current = Math.max(0, desktopExpandedCount.current + (isOpen ? 1 : -1));
    setDesktopPaused(desktopExpandedCount.current > 0);
  }, []);

  useEffect(() => {
    let active = true;

    fetch(`${apiBaseUrl}/api/feedbacks/approved`)
      .then((response) => (response.ok ? response.json() : { items: [] }))
      .then((payload) => {
        if (!active) return;
        const items = Array.isArray(payload?.items) ? payload.items : [];
        setApproved(
          items.map((item) => ({
            name: item.name,
            role: [item.branch, item.year].filter(Boolean).join(", "),
            company: item.placed || "",
            rating: item.rating,
            quote: item.feedback
          }))
        );
      })
      .catch(() => {
        // Backend unreachable — silently fall back to static testimonials.
      });

    return () => {
      active = false;
    };
  }, [apiBaseUrl]);

  // Only admin-approved student feedback is shown.
  const testimonials = approved;
  const hasTestimonials = testimonials.length > 0;

  return (
    <section className="bg-background py-16 sm:py-18 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Student Voices"
          title="What Our Students Say"
          className="mb-12"
          highlights={['Students', 'Say']}
        />

        {!hasTestimonials ? (
          <div className="mx-auto max-w-xl rounded-3xl border border-dashed border-border bg-card/40 px-6 py-12 text-center">
            <p className="text-lg font-semibold text-foreground">Be the first to share your story</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Approved student feedback will appear here. Use the button below to share yours.
            </p>
          </div>
        ) : null}

        {/* Desktop View - Marquee */}
        {hasTestimonials ? (
        <div className="relative hidden md:block mt-2">
          <div className="absolute inset-y-0 left-0 w-32 lg:w-64 bg-linear-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 lg:w-64 bg-linear-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden group/marquee relative">
            <div className={`flex items-start py-6 animate-testimonial-marquee pause-on-hover ${desktopPaused ? "is-paused" : ""}`}>
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={`desktop-${index}`} className="flex-shrink-0 px-4">
                  <TestimonialCard
                    testimonial={testimonial}
                    variant="desktop"
                    onExpandedChange={handleDesktopExpandedChange}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        ) : null}
      </div>

      {/* Mobile View - Marquee */}
      {hasTestimonials ? (
      <div className="md:hidden relative w-full overflow-hidden mt-2">
        <div
          className={`flex w-max items-start gap-5 py-4 will-change-transform pl-4 animate-testimonial-marquee-mobile ${mobilePaused ? "is-paused" : ""}`}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard
              key={`mobile-${index}`}
              testimonial={testimonial}
              variant="mobile"
              onExpandedChange={handleMobileExpandedChange}
            />
          ))}
        </div>
      </div>
      ) : null}

      {/* Feedback CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 flex justify-center">
        <Button
          asChild
          className="h-12 px-7 bg-accent text-white hover:bg-accent/90 font-semibold shadow-lg shadow-accent/25 flex items-center gap-2 rounded-xl transition-all duration-300"
        >
          <Link to="/feedback">
            <MessageSquarePlus className="w-5 h-5" />
            Share Your Feedback
          </Link>
        </Button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes testimonial-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-testimonial-marquee {
          animation: testimonial-marquee 36s linear infinite;
        }
        .animate-testimonial-marquee-mobile {
          animation: testimonial-marquee 20s linear infinite;
        }
        .pause-on-hover:hover,
        .is-paused {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
