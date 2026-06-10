"use client";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PROGRAM_OPTIONS, getBranchOptions, buildAdmissionCourse } from "../../shared/admission-options.js";

export function ReloadContactPopup() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    program: "",
    branch: "",
    fullName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const apiBaseUrl = import.meta.env.VITE_API_URL || "";

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      if (name === "program") {
        return { ...prev, program: value, branch: "" };
      }

      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);

    try {
      const course = buildAdmissionCourse(formData.program, formData.branch);

      if (!course) {
        throw new Error("Please select a course and branch.");
      }

      const response = await fetch(`${apiBaseUrl}/api/admissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          course,
          fullName: formData.fullName,
          mobile: formData.phone,
          email: formData.email,
          address: formData.address,
          message: formData.message,
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.error || "Failed to submit enquiry.");
      }

      setStatus({ type: "success", message: payload.message || "Enquiry submitted successfully." });
      confetti({
        particleCount: 110,
        spread: 75,
        origin: { y: 0.65 },
      });
      setTimeout(() => {
        setFormData({
          program: "",
          branch: "",
          fullName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        setOpen(false);
      }, 1000);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 overflow-y-auto overscroll-contain bg-black/55"
          style={{ zIndex: 9999 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
         <div className="flex min-h-full items-center justify-center p-3 sm:p-6">
          <motion.div
            className="relative w-full max-w-2xl overflow-hidden rounded-[1.75rem] border border-white/20 bg-card/95 shadow-2xl backdrop-blur-xl"
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

            <div className="p-4 sm:p-5 md:p-6 lg:p-7">
              <div className="mb-4 sm:mb-5">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Admission Support</p>
                <h3 className="text-xl font-bold text-foreground md:text-2xl">Get A Quick Call Back</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Fill details for course guidance, scholarship, and fees.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                    {/* Program */}
                    <div>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className="h-10 w-full rounded-xl border border-border/70 bg-background/80 px-3 text-xs text-foreground outline-none ring-0 focus:border-primary transition-all duration-200"
                      >
                        <option value="">-- Select Program * --</option>
                        {PROGRAM_OPTIONS.map((program) => (
                          <option key={program} value={program}>{program}</option>
                        ))}
                      </select>
                    </div>

                    {/* Branch */}
                    <div>
                      <select
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        required
                        disabled={!formData.program}
                        className="h-10 w-full rounded-xl border border-border/70 bg-background/80 px-3 text-xs text-foreground outline-none ring-0 focus:border-primary disabled:cursor-not-allowed disabled:bg-muted/40 transition-all duration-200"
                      >
                        <option value="">-- Select Branch * --</option>
                        {getBranchOptions(formData.program).map((branch) => (
                          <option key={branch} value={branch}>{branch}</option>
                        ))}
                      </select>
                    </div>

                    {/* Full Name */}
                    <div>
                      <input
                        required
                        name="fullName"
                        placeholder="Full Name *"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="h-10 w-full rounded-xl border border-border/70 bg-background/80 px-3 text-xs text-foreground outline-none ring-0 placeholder:text-muted-foreground/60 focus:border-primary transition-all duration-200"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-10 w-full rounded-xl border border-border/70 bg-background/80 px-3 text-xs text-foreground outline-none ring-0 placeholder:text-muted-foreground/60 focus:border-primary transition-all duration-200"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="md:col-span-2">
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                        className="h-10 w-full rounded-xl border border-border/70 bg-background/80 px-3 text-xs text-foreground outline-none ring-0 placeholder:text-muted-foreground/60 focus:border-primary transition-all duration-200"
                      />
                    </div>

                    {/* Address */}
                    <div className="md:col-span-2">
                      <input
                        required
                        name="address"
                        placeholder="Address *"
                        value={formData.address}
                        onChange={handleChange}
                        className="h-10 w-full rounded-xl border border-border/70 bg-background/80 px-3 text-xs text-foreground outline-none ring-0 placeholder:text-muted-foreground/60 focus:border-primary transition-all duration-200"
                      />
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2">
                      <textarea
                        name="message"
                        rows={1.5}
                        placeholder="Message (optional)"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border/70 bg-background/80 px-3 py-2 text-xs text-foreground outline-none ring-0 placeholder:text-muted-foreground/60 focus:border-primary transition-all duration-200 resize-none"
                      />
                    </div>
                  </div>

                  {status && (
                    <p className={`text-xs font-medium ${status.type === "success" ? "text-primary" : "text-[#d60b0b]"}`}>
                      {status.message}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="h-10 w-full rounded-xl bg-primary px-4 text-xs font-semibold text-primary-foreground transition hover:opacity-90 shadow-md active:scale-[0.98] cursor-pointer"
                  >
                    Request Callback
                  </button>
                </form>
              </div>
          </motion.div>
         </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
