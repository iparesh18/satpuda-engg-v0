"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Header, Footer } from "../../index.js";
import { Button } from "../../ui/button.jsx";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  RotateCcw,
  CheckCircle2,
  MessageCircle
} from "lucide-react";

export default function ContactPage() {
  const initialForm = {
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "Admission",
    subject: "",
    message: ""
  };

  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData(initialForm);
    setFormStatus(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const response = await fetch(`${apiBaseUrl}/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.error || "Failed to submit contact form.");
      }

      setFormStatus({ type: "success", message: payload.message });
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.7 }
      });
      setFormData(initialForm);
    } catch (error) {
      setFormStatus({ type: "error", message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Header />

      <main className="bg-background pt-28 pb-20">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-accent/10" />
          <div className="absolute -top-16 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-10 left-10 w-36 h-36 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                  <span>/</span>
                  <span className="text-foreground font-medium">Contact Us</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                  Contact Us
                </h1>
                <div className="h-1 w-12 bg-primary rounded-full mb-4" />
                <p className="text-muted-foreground max-w-xl">
                  We are here to help you with admissions, academics, and campus services. Share your query and our
                  team will respond within 24-48 hours.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-primary/10 blur-2xl" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-accent/10 blur-2xl" />

                <div className="relative bg-white/70 backdrop-blur-md rounded-3xl border border-border/60 shadow-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <MessageCircle className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground">Quick Response Promise</p>
                      <p className="text-sm text-muted-foreground">We reply within 1-2 working days</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      "Admission guidance",
                      "Course & fee details",
                      "Campus visit scheduling",
                      "Placement support"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span className="text-sm text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Support hours: 9 AM to 5 PM</span>
                    <span className="inline-flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Online
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
              {/* Contact Form */}
              <div className="bg-white rounded-3xl border border-border/60 shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground">Send a Message</h2>
                    <p className="text-sm text-muted-foreground">We will get back to you shortly.</p>
                  </div>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-foreground">Full Name *</label>
                      <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full h-11 rounded-lg border border-border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full h-11 rounded-lg border border-border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-foreground">Phone Number *</label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full h-11 rounded-lg border border-border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground">Inquiry Type *</label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full h-11 rounded-lg border border-border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                      >
                        {[
                          "Admission",
                          "Courses & Fees",
                          "Scholarship",
                          "Campus Visit",
                          "Placements",
                          "Other"
                        ].map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-foreground">Subject</label>
                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-2 w-full h-11 rounded-lg border border-border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="Optional subject"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-foreground">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full min-h-[140px] rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <Button
                      type="submit"
                      className="h-12 px-8 bg-primary text-white gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Send Message"}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      <RotateCcw className="h-4 w-4" />
                      Reset Form
                    </button>
                  </div>

                  {formStatus && (
                    <div
                      className={`rounded-lg px-4 py-3 text-sm font-medium ${
                        formStatus.type === "success"
                          ? "bg-primary/10 text-primary"
                          : "bg-[#d60b0b]/10 text-[#d60b0b]"
                      }`}
                    >
                      {formStatus.message}
                    </div>
                  )}
                </form>
              </div>

              {/* Contact info */}
              <div className="space-y-6">
                <div className="bg-white rounded-3xl border border-border/60 shadow-lg p-8">
                  <h3 className="text-lg font-bold text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Address</p>
                        <p className="text-sm text-muted-foreground">Lalbarra - Balaghat Road, Manjhapur, MP 481001</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Phone</p>
                        <p className="text-sm text-muted-foreground">+91 6262 604 111</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Email</p>
                        <p className="text-sm text-muted-foreground">admission@satpuda.ac.in</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Office Hours</p>
                        <p className="text-sm text-muted-foreground">Mon - Fri: 9 AM to 5 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-border/60 shadow-lg p-8">
                  <h3 className="text-lg font-bold text-foreground mb-6">Admissions Office</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    For urgent admission queries, contact our admissions team directly.
                  </p>
                  <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" /> +91 6262 604 111
                    </span>
                    <span className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" /> admission@satpuda.ac.in
                    </span>
                  </div>
                  <Button className="mt-6 w-full bg-primary text-white">
                    Contact Admissions <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

