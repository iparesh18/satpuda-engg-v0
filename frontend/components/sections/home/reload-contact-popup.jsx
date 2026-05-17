"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const DISMISS_KEY = "home-contact-popup-dismissed";

export function ReloadContactPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    setOpen(!dismissed);

    const clearDismissOnReload = () => {
      sessionStorage.removeItem(DISMISS_KEY);
    };

    window.addEventListener("beforeunload", clearDismissOnReload);
    return () => window.removeEventListener("beforeunload", clearDismissOnReload);
  }, []);

  const handleClose = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem(DISMISS_KEY, "1");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/50 p-4"
          style={{ zIndex: 9999 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-card/90 shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white transition hover:bg-black/70"
              aria-label="Close popup"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="bg-linear-to-br from-primary/15 via-background to-accent/10 p-6 md:p-8 lg:p-10">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Admission Support</p>
                <h3 className="text-2xl font-bold text-foreground md:text-3xl">Get A Quick Call Back</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill the form and our team will contact you with course, fees, scholarship, and admission guidance.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                  <input
                    required
                    name="name"
                    placeholder="Full Name"
                    className="h-11 w-full rounded-xl border border-border/70 bg-background/80 px-3 text-sm text-foreground outline-none ring-0 placeholder:text-muted-foreground focus:border-primary"
                  />
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="h-11 w-full rounded-xl border border-border/70 bg-background/80 px-3 text-sm text-foreground outline-none ring-0 placeholder:text-muted-foreground focus:border-primary"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="h-11 w-full rounded-xl border border-border/70 bg-background/80 px-3 text-sm text-foreground outline-none ring-0 placeholder:text-muted-foreground focus:border-primary"
                  />
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Message (optional)"
                    className="w-full rounded-xl border border-border/70 bg-background/80 px-3 py-2 text-sm text-foreground outline-none ring-0 placeholder:text-muted-foreground focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="h-11 w-full rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                  >
                    Request Callback
                  </button>
                </form>
              </div>

              <div className="relative h-72 md:h-130">
                <img
                  src="/images/popup.png"
                  alt="Student"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
