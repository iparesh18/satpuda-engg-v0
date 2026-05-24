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
  const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

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
          className="fixed inset-0 flex items-start justify-center overflow-y-auto bg-black/55 px-3 py-4 sm:items-center sm:px-4 sm:py-6"
          style={{ zIndex: 9999 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative mt-4 w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-white/20 bg-card/95 shadow-2xl backdrop-blur-xl sm:mt-0"
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

            <div className="grid max-h-[88vh] grid-cols-1 overflow-y-auto md:max-h-none md:grid-cols-[0.95fr_1.05fr] md:items-stretch">
              <div className="order-2 p-5 sm:p-6 md:order-1 md:p-7 lg:p-8 xl:p-10">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Admission Support</p>
                <h3 className="text-2xl font-bold text-foreground md:text-3xl">Get A Quick Call Back</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill the form and our team will contact you with course, fees, scholarship, and admission guidance.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Program *</label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="h-11 w-full rounded-xl border border-border/70 bg-background/80 px-3 text-sm text-foreground outline-none ring-0 focus:border-primary"
                    >
                      <option value="">-- Select Program --</option>
                      {PROGRAM_OPTIONS.map((program) => (
                        <option key={program} value={program}>{program}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Branch *</label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      required
                      disabled={!formData.program}
                      className="h-11 w-full rounded-xl border border-border/70 bg-background/80 px-3 text-sm text-foreground outline-none ring-0 focus:border-primary disabled:cursor-not-allowed disabled:bg-muted/40"
                    >
                      <option value="">-- Select Branch --</option>
                      {getBranchOptions(formData.program).map((branch) => (
                        <option key={branch} value={branch}>{branch}</option>
                      ))}
                    </select>
                  </div>
                  <input
                    required
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="h-11 w-full rounded-xl border border-border/70 bg-background/80 px-3 text-sm text-foreground outline-none ring-0 placeholder:text-muted-foreground focus:border-primary"
                  />
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-11 w-full rounded-xl border border-border/70 bg-background/80 px-3 text-sm text-foreground outline-none ring-0 placeholder:text-muted-foreground focus:border-primary"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-11 w-full rounded-xl border border-border/70 bg-background/80 px-3 text-sm text-foreground outline-none ring-0 placeholder:text-muted-foreground focus:border-primary"
                  />
                  <input
                    required
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="h-11 w-full rounded-xl border border-border/70 bg-background/80 px-3 text-sm text-foreground outline-none ring-0 placeholder:text-muted-foreground focus:border-primary"
                  />
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Message (optional)"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border/70 bg-background/80 px-3 py-2 text-sm text-foreground outline-none ring-0 placeholder:text-muted-foreground focus:border-primary"
                  />
                  {status && (
                    <p className={`text-xs font-medium ${status.type === "success" ? "text-primary" : "text-[#d60b0b]"}`}>
                      {status.message}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="h-11 w-full rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                  >
                    Request Callback
                  </button>
                </form>
              </div>

              <div className="relative order-1 min-h-56 overflow-hidden bg-slate-100 md:order-2 md:min-h-full md:h-full">
                <img
                  src="/images/popup.png"
                  alt="Student"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/80">Satpuda Admission Team</p>
                  <p className="mt-2 max-w-sm text-sm text-white/90">
                    Share your details and the team will follow up with the right course guidance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
