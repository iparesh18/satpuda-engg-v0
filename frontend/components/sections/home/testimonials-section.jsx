"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star, MessageSquarePlus } from "lucide-react";
import { SectionHeading } from "./section-heading.jsx";
import { Button } from "../../ui/button.jsx";
import { FeedbackDialog } from "./feedback-dialog.jsx";

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

export function TestimonialsSection() {
  const apiBaseUrl = import.meta.env.VITE_API_URL || "";
  const [approved, setApproved] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

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
            <div className="flex py-6 animate-testimonial-marquee pause-on-hover">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={`desktop-${index}`} className="flex-shrink-0 px-4">
                  <div className="w-[340px] lg:w-[380px] bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 shadow-xl hover:bg-card/80 transition-all duration-500 group">
                    <div className="mb-5">
                      <StarRow rating={testimonial.rating} />
                    </div>
                    <Quote className="h-10 w-10 text-accent/30 mb-6 group-hover:text-accent transition-colors duration-500" />
                    <p className="text-foreground/70 leading-relaxed mb-8 text-lg italic">
                      {`"${testimonial.quote}"`}
                    </p>
                    <div className="flex items-center gap-5">
                      <Avatar name={testimonial.name} />
                      <div>
                        <p className="font-bold text-foreground text-lg leading-none mb-1">{testimonial.name}</p>
                        {testimonial.role ? (
                          <p className="text-xs text-muted-foreground uppercase tracking-widest">{testimonial.role}</p>
                        ) : null}
                        {testimonial.company ? (
                          <p className="text-xs text-accent font-bold mt-2 uppercase tracking-tighter">{testimonial.company}</p>
                        ) : null}
                      </div>
                    </div>
                  </div>
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
        <motion.div
          className="flex w-max items-stretch gap-5 py-4 will-change-transform pl-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`mobile-${index}`}
              className="w-80 flex-none bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-6 shadow-xl"
            >
              <div className="mb-4">
                <StarRow rating={testimonial.rating} />
              </div>
              <Quote className="h-8 w-8 text-accent/30 mb-4" />
              <p className="text-foreground/70 leading-relaxed mb-6 text-base italic">
                {`"${testimonial.quote}"`}
              </p>
              <div className="flex items-center gap-4">
                <Avatar name={testimonial.name} size="w-14 h-14 text-base" />
                <div>
                  <p className="font-bold text-foreground text-base leading-none mb-1">{testimonial.name}</p>
                  {testimonial.role ? (
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{testimonial.role}</p>
                  ) : null}
                  {testimonial.company ? (
                    <p className="text-[10px] text-accent font-bold mt-1 uppercase tracking-tighter">{testimonial.company}</p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      ) : null}

      {/* Feedback CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 flex justify-center">
        <Button
          type="button"
          onClick={() => setDialogOpen(true)}
          className="h-12 px-7 bg-accent text-white hover:bg-accent/90 font-semibold shadow-lg shadow-accent/25 flex items-center gap-2 rounded-xl transition-all duration-300"
        >
          <MessageSquarePlus className="w-5 h-5" />
          Share Your Feedback
        </Button>
      </div>

      <FeedbackDialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes testimonial-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-testimonial-marquee {
          animation: testimonial-marquee 36s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
