"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Header, Footer } from "../../index.js";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button.jsx";
import {
  ArrowRight,
  ClipboardList,
  User,
  Phone,
  Mail,
  MapPin,
  Info,
  ShieldCheck,
  Send,
  RotateCcw,
  CheckCircle2
} from "lucide-react";

export default function AdmissionFormPage() {
  const initialForm = {
    course: "",
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    message: ""
  };
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const courses = [
    "B.Tech - Computer Science Engineering",
    "B.Tech - Civil Engineering",
    "B.Tech - Mechanical Engineering",
    "B.Tech - Electrical Engineering",
    "B.Tech - Mining Engineering",
    "Diploma - Computer Science",
    "Diploma - Civil Engineering",
    "Diploma - Mechanical Engineering",
    "Diploma - Electrical Engineering",
    "Diploma - Mining Engineering"
  ];

  const infoItems = [
    "All fields marked with * are mandatory.",
    "Ensure that all the details provided are correct.",
    "Our admission team will contact you shortly.",
    "For any queries, please contact the admission office."
  ];

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
      const response = await fetch(`${apiBaseUrl}/api/admissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.error || "Failed to submit application.");
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
          <div className="absolute -top-20 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-10 left-10 w-36 h-36 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                  <span>/</span>
                  <Link to="/admissions" className="hover:text-primary transition-colors">Admission</Link>
                  <span>/</span>
                  <span className="text-foreground font-medium">Admission Form</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                  Admission Form
                </h1>
                <div className="h-1 w-12 bg-primary rounded-full mb-4" />
                <p className="text-muted-foreground max-w-xl">
                  Take the first step towards a brighter future. Fill in the details below to
                  apply for admission at Satpuda College.
                </p>
              </div>

              {/* Illustration card */}
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-primary/10 blur-2xl" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-accent/10 blur-2xl" />

                <div className="relative bg-white/70 backdrop-blur-md rounded-3xl border border-border/60 shadow-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <ClipboardList className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground">Admission Checklist</p>
                      <p className="text-sm text-muted-foreground">Verify your details before submitting</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {["Personal Details", "Course Selection", "Contact Info", "Submit Application"].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span className="text-sm text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Study! Your Future is Here!</span>
                    <span className="inline-flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Admission Open
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* College info strip */}
            <div className="mt-10 bg-white/80 backdrop-blur-md border border-border/60 rounded-2xl shadow-sm px-6 py-5 grid md:grid-cols-[auto_1fr] gap-6 items-center">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-border flex items-center justify-center">
                  <img src="/logo.png" alt="Satpuda College" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Satpuda College of Engineering and Polytechnic</p>
                  <p className="text-sm text-primary font-semibold">Study! Your Future is Here!</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Satpuda College fosters excellence with top facilities and expert faculty. We inspire innovation and
                holistic growth for a brighter future and prepare students for global challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
              {/* Form */}
              <div className="bg-white rounded-3xl border border-border/60 shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground">Personal Information</h2>
                    <p className="text-sm text-muted-foreground">Please fill in the details carefully.</p>
                  </div>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label className="text-sm font-semibold text-foreground">Select Your Course *</label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full h-11 rounded-lg border border-border bg-white px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="">-- Select Course --</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-foreground">Full Name *</label>
                      <div className="mt-2 flex items-center gap-2 rounded-lg border border-border bg-white px-3 h-11">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <input
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full text-sm outline-none"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground">Mobile No. *</label>
                      <div className="mt-2 flex items-center gap-2 rounded-lg border border-border bg-white px-3 h-11">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <input
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                          className="w-full text-sm outline-none"
                          placeholder="Enter mobile number"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-foreground">Email Address *</label>
                      <div className="mt-2 flex items-center gap-2 rounded-lg border border-border bg-white px-3 h-11">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full text-sm outline-none"
                          placeholder="Enter email address"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground">Address *</label>
                      <div className="mt-2 flex items-center gap-2 rounded-lg border border-border bg-white px-3 h-11">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <input
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          className="w-full text-sm outline-none"
                          placeholder="Enter your address"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-foreground">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 w-full min-h-[120px] rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="Enter your message..."
                    />
                  </div>

                  <div className="flex items-center gap-3 bg-primary/5 border border-primary/10 rounded-lg px-4 py-3">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">Your information is safe with us. We respect your privacy.</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <Button
                      type="submit"
                      className="h-12 px-8 bg-primary text-white gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                      <Send className="h-4 w-4" />
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

              {/* Info card */}
              <div className="bg-white rounded-3xl border border-border/60 shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Info className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Important Information</h3>
                </div>

                <div className="space-y-4">
                  {infoItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-primary/5 border border-primary/10 p-5 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground mb-2">Need help?</p>
                  <p>Our admission team is here to assist you with your application.</p>
                </div>

                <div className="mt-6 rounded-2xl bg-white border border-border/60 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Call Us</p>
                      <p className="text-sm font-semibold text-foreground">+91 6262 604 111</p>
                    </div>
                  </div>
                  <Button variant="outline" className="h-9 px-4">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Help strip */}
        <section className="py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-border/60 shadow-md rounded-2xl p-4 grid md:grid-cols-[1fr_auto_auto_auto] gap-4 items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Info className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Need Help?</p>
                  <p className="text-xs text-muted-foreground">Our admission team is here to help you!</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +91 6262 604 111
              </div>
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                admission@satpuda.ac.in
              </div>
              <Button className="h-10 px-5 bg-primary text-white">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

