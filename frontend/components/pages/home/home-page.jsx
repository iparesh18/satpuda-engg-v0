import { Header, HeroSection, StatsBar, AboutSection, GateAchieversSection, CoursesSection, WhyChooseUsSection, PlacementsSection, CompanyMarquee, TestimonialsSection, CTASection, MapSection, Footer } from "../../index.js";

export default function HomePage() {
    return (<main className="min-h-screen">
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
      
      {/* 6. Why Choose Us (3 boxes) - Builds trust */}
      <WhyChooseUsSection />
      
      {/* 7. Placements - Proof of results */}
      <section id="placements">
        <PlacementsSection />
      </section>
      
      {/* 7b. Company Logos Marquee */}
      <CompanyMarquee />

      {/* 8. Testimonials - Social proof */}
      <TestimonialsSection />
      
      {/* 9. CTA Section - Drive conversions */}
      <CTASection />
      
      {/* 10. Location Map */}
      <MapSection />
      
      {/* 11. Footer - Always last */}
      <section id="contact">
        <Footer />
      </section>
    </main>);
}

