"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "../../ui/dialog.jsx";
import { Button } from "../../ui/button.jsx";
import { User, MessageSquareQuote, Star, Send, CheckCircle2 } from "lucide-react";

export function FeedbackDialog({ isOpen, onClose }) {
  const apiBaseUrl = import.meta.env.VITE_API_URL || "";
  const initialForm = { name: "", feedback: "", branch: "", year: "", placed: "" };

  const [formData, setFormData] = useState(initialForm);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetAndClose = () => {
    setFormData(initialForm);
    setRating(0);
    setHoverRating(0);
    setStatus(null);
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!rating) {
      setStatus({ type: "error", message: "Please select a star rating." });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${apiBaseUrl}/api/feedbacks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          rating,
          feedback: formData.feedback,
          branch: formData.branch,
          year: formData.year,
          placed: formData.placed
        })
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.error || "Failed to submit feedback.");
      }

      setStatus({ type: "success", message: payload.message });

      setTimeout(() => {
        resetAndClose();
      }, 2200);
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={resetAndClose}>
      <DialogContent className="flex w-full max-w-md flex-col gap-0 overflow-hidden rounded-2xl border border-border bg-background p-0 shadow-2xl max-h-[90dvh]">
        <DialogHeader className="shrink-0 space-y-2 border-b border-border px-6 pt-6 pb-4 pr-12 text-left">
          <DialogTitle className="flex items-center gap-2 text-xl font-bold text-foreground sm:text-2xl">
            <span className="p-2 bg-accent/10 rounded-xl text-accent shrink-0">
              <MessageSquareQuote className="w-5 h-5 sm:w-6 sm:h-6" />
            </span>
            Share Your Feedback
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Tell us about your experience at Satpuda College. Approved feedback appears on our homepage.
          </DialogDescription>
        </DialogHeader>

        {status && status.type === "success" ? (
          <div className="flex flex-col items-center justify-center space-y-3 px-6 py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Thank You!</h3>
            <p className="text-sm text-muted-foreground max-w-xs">{status.message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
           <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-6 py-5">
            {/* Name */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">Your Name *</label>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 h-11 focus-within:ring-2 focus-within:ring-accent/20">
                <User className="h-4 w-4 text-muted-foreground" />
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={60}
                  className="w-full text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground/60"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">Your Rating *</label>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, index) => {
                  const value = index + 1;
                  const active = value <= (hoverRating || rating);
                  return (
                    <button
                      key={`rate-${value}`}
                      type="button"
                      onClick={() => setRating(value)}
                      onMouseEnter={() => setHoverRating(value)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 transition-transform duration-150 hover:scale-110"
                      aria-label={`${value} star${value > 1 ? "s" : ""}`}
                    >
                      <Star
                        className={`h-7 w-7 transition-colors ${active ? "fill-accent text-accent" : "text-muted-foreground/40"}`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Feedback */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">Your Feedback *</label>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                required
                rows={4}
                maxLength={500}
                className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/20 placeholder:text-muted-foreground/60 resize-none"
                placeholder="Share your experience..."
              />
            </div>

            {/* Optional details — only if the student studied here */}
            <div className="rounded-lg border border-dashed border-border bg-card/40 p-3 space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                Studied here? <span className="font-medium normal-case tracking-normal">(optional)</span>
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-muted-foreground block mb-1">Branch</label>
                  <input
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    maxLength={60}
                    className="w-full text-sm bg-card rounded-lg border border-border px-3 h-10 outline-none text-foreground focus:ring-2 focus:ring-accent/20 placeholder:text-muted-foreground/60"
                    placeholder="e.g. CSE"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-muted-foreground block mb-1">Sem / Year</label>
                  <input
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    maxLength={40}
                    className="w-full text-sm bg-card rounded-lg border border-border px-3 h-10 outline-none text-foreground focus:ring-2 focus:ring-accent/20 placeholder:text-muted-foreground/60"
                    placeholder="e.g. 2024"
                  />
                </div>
              </div>
              <div>
                <label className="text-[11px] font-semibold text-muted-foreground block mb-1">Placed At</label>
                <input
                  name="placed"
                  value={formData.placed}
                  onChange={handleChange}
                  maxLength={80}
                  className="w-full text-sm bg-card rounded-lg border border-border px-3 h-10 outline-none text-foreground focus:ring-2 focus:ring-accent/20 placeholder:text-muted-foreground/60"
                  placeholder="e.g. Placed at TCS"
                />
              </div>
            </div>

            {status && status.type === "error" && (
              <div className="rounded-lg bg-red-500/10 p-3 text-xs font-medium text-red-600">
                {status.message}
              </div>
            )}
           </div>

            <DialogFooter className="shrink-0 flex gap-3 border-t border-border bg-background p-4">
              <Button
                type="button"
                variant="outline"
                onClick={resetAndClose}
                className="flex-1 h-11 border border-border text-foreground hover:bg-muted"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 h-11 bg-accent text-white hover:bg-accent/90 flex items-center justify-center gap-2 font-semibold shadow-lg shadow-accent/25 transition-all duration-300"
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
                <Send className="w-4 h-4" />
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
