"use client";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header, Footer } from "../../index.js";
import { Button } from "../../ui/button.jsx";
import { User, MessageSquareQuote, Star, Send, CheckCircle2, ArrowLeft } from "lucide-react";

export default function FeedbackPage() {
  const apiBaseUrl = import.meta.env.VITE_API_URL || "";
  const navigate = useNavigate();
  const initialForm = { name: "", feedback: "", branch: "", year: "", placed: "" };

  const [formData, setFormData] = useState(initialForm);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      setFormData(initialForm);
      setRating(0);
      setHoverRating(0);
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Header />

      <main className="bg-background pb-20">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-background to-primary/10" />
          <div className="absolute -top-20 -right-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute top-10 left-10 w-36 h-36 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Share Feedback</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              Share Your Feedback
            </h1>
            <div className="h-1 w-12 bg-accent rounded-full mb-4" />
            <p className="text-muted-foreground max-w-xl">
              Tell us about your experience at Satpuda College. Approved feedback appears on our homepage.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="relative">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-border bg-card/60 backdrop-blur-sm shadow-xl p-6 sm:p-8">
              {status && status.type === "success" ? (
                <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
                  <p className="text-sm text-muted-foreground max-w-sm">{status.message}</p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStatus(null)}
                      className="h-11 border border-border text-foreground hover:bg-muted"
                    >
                      Submit Another
                    </Button>
                    <Button
                      type="button"
                      onClick={() => navigate("/")}
                      className="h-11 bg-accent text-white hover:bg-accent/90 font-semibold"
                    >
                      Back to Home
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="p-2.5 bg-accent/10 rounded-xl text-accent shrink-0">
                      <MessageSquareQuote className="w-6 h-6" />
                    </span>
                    <div>
                      <p className="font-bold text-foreground text-lg leading-none">Your Feedback</p>
                      <p className="text-xs text-muted-foreground mt-1">Fields marked * are mandatory.</p>
                    </div>
                  </div>

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
                              className={`h-8 w-8 transition-colors ${active ? "fill-accent text-accent" : "text-muted-foreground/40"}`}
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
                      rows={5}
                      maxLength={500}
                      className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/20 placeholder:text-muted-foreground/60 resize-none"
                      placeholder="Share your experience..."
                    />
                  </div>

                  {/* Optional details — only if the student studied here */}
                  <div className="rounded-lg border border-dashed border-border bg-card/40 p-4 space-y-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Studied here? <span className="font-medium normal-case tracking-normal">(optional)</span>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

                  <div className="flex flex-col-reverse sm:flex-row gap-3 pt-1">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => navigate("/")}
                      className="sm:flex-1 h-11 border border-border text-foreground hover:bg-muted flex items-center justify-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to Home
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="sm:flex-1 h-11 bg-accent text-white hover:bg-accent/90 flex items-center justify-center gap-2 font-semibold shadow-lg shadow-accent/25 transition-all duration-300"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Feedback"}
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
