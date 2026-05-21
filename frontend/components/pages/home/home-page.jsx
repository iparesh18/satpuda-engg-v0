import { Header, HeroSection, StatsBar, AboutSection, GateAchieversSection, CoursesSection, BlueInfoMarqueeSection, WhyChooseUsSection, PlacementsSection, CompanyMarquee, RedInfoMarqueeSection, DomeGallerySection, TestimonialsSection, CTASection, MapSection, Footer } from "../../index.js";
import { ReloadContactPopup } from "../../sections/home/reload-contact-popup.jsx";
import { ArrowUp } from "lucide-react";

export default function HomePage() {
    return (<main className="min-h-screen">
  <ReloadContactPopup />

      {/* 1. Header & Hero */}
      <Header />
      <HeroSection />
      
      {/* 2. Stats Bar - Quick credibility */}
      <StatsBar />

      {/* 3. About Us */}
      <section id="about">
        <AboutSection />
      </section>

      {/* 4. GATE Achievers */}
      <section id="gate-achievers">
        <GateAchieversSection />
      </section>
      
      {/* 5. Courses/Programs */}
      <section id="courses">
        <CoursesSection />
      </section>

      {/* 5b. Blue Information Marquee */}
      <BlueInfoMarqueeSection />
      
      {/* 6. Why Choose Us (3 boxes) - Builds trust */}
      <WhyChooseUsSection />
      
      {/* 7. Placements - Proof of results */}
      <section id="placements">
        <PlacementsSection />
      </section>
      
      {/* 7b. Company Logos Marquee */}
      <CompanyMarquee />

      {/* 7b1. Red Information Marquee */}
      <RedInfoMarqueeSection />

      {/* 7c. Dome Gallery */}
      <DomeGallerySection />

      {/* 8. Testimonials - Social proof */}
      <TestimonialsSection />
      
      {/* 9. CTA Section - Drive conversions */}
      <CTASection />
      
      {/* 10. Location Map */}
      <MapSection />
      
      {/* 11. Footer - Always last */}
      <section id="contact">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6 flex justify-center">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
        <Footer />
      </section>
    </main>);
}

