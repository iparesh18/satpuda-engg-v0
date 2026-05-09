"use client";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (<section className="py-24 bg-background relative overflow-hidden">
    {/* Decorative Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
    
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <div className="bg-card/50 backdrop-blur-xl border border-border rounded-[2.5rem] p-12 lg:p-20 shadow-2xl">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-foreground mb-6 text-balance tracking-tighter uppercase">
          Ready to Shape Your Future?
        </h2>
        <p className="text-lg text-foreground/60 mb-10 max-w-2xl mx-auto">
          Join thousands of successful engineers who started their journey at Satpuda College.
          Admissions for 2026-27 are now open!
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 h-16 text-lg font-bold rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02]">
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-foreground/5 px-10 h-16 rounded-2xl text-lg transition-all duration-300">
            Download Brochure
          </Button>
        </div>
      </div>
    </div>
  </section>);
}
