"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "../../ui/dialog.jsx";
import { Button } from "../../ui/button.jsx";
import { User, Phone, Mail, GraduationCap, CalendarRange, Send, CheckCircle2 } from "lucide-react";

export function RegistrationDialog({ isOpen, onClose, eventTitle, eventDate }) {
  const initialForm = {
    fullName: "",
    email: "",
    mobile: "",
    department: "",
    semester: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const departments = [
    "Computer Science Engineering",
    "Mining Engineering",
    "Civil Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Polytechnic (Diploma)"
  ];

  const semesters = ["1st Sem", "2nd Sem", "3rd Sem", "4th Sem", "5th Sem", "6th Sem", "7th Sem", "8th Sem"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({ type: "success", message: `Successfully registered for ${eventTitle}!` });
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Clear and close
      setTimeout(() => {
        setFormData(initialForm);
        setStatus(null);
        onClose();
      }, 2000);
    }, 1200);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-background border border-border p-6 rounded-2xl shadow-2xl">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
            <span className="p-2 bg-primary/10 rounded-xl text-primary shrink-0">
              <CalendarRange className="w-6 h-6" />
            </span>
            Event Registration
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Register below to reserve your seat for <span className="font-semibold text-primary">{eventTitle}</span> ({eventDate}).
          </DialogDescription>
        </DialogHeader>

        {status && status.type === "success" ? (
          <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Registration Successful!</h3>
            <p className="text-sm text-muted-foreground max-w-xs">{status.message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            {/* Full Name */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">Full Name *</label>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 h-11 focus-within:ring-2 focus-within:ring-primary/20">
                <User className="h-4 w-4 text-muted-foreground" />
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground/60"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">Email Address *</label>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 h-11 focus-within:ring-2 focus-within:ring-primary/20">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground/60"
                  placeholder="Enter email address"
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">Mobile No. *</label>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 h-11 focus-within:ring-2 focus-within:ring-primary/20">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground/60"
                  placeholder="Enter mobile number"
                />
              </div>
            </div>

            {/* Department & Semester */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">Branch *</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full h-11 rounded-lg border border-border bg-card px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">-- Branch --</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">Semester *</label>
                <select
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  required
                  className="w-full h-11 rounded-lg border border-border bg-card px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">-- Semester --</option>
                  {semesters.map((sem) => (
                    <option key={sem} value={sem}>{sem}</option>
                  ))}
                </select>
              </div>
            </div>

            {status && status.type === "error" && (
              <div className="rounded-lg bg-red-500/10 p-3 text-xs font-medium text-red-600">
                {status.message}
              </div>
            )}

            <DialogFooter className="pt-2 flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 h-11 border border-border text-foreground hover:bg-muted"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 h-11 bg-accent text-white hover:bg-accent/90 flex items-center justify-center gap-2 font-semibold shadow-lg shadow-accent/25 transition-all duration-300"
              >
                {isSubmitting ? "Registering..." : "Submit Registration"}
                <Send className="w-4 h-4" />
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
