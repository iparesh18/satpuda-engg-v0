import { Header, HeroSection, StatsBar, AboutSection, WhyChooseUsSection, PlacementsSection, TestimonialsSection, CTASection, MapSection, Footer } from "../components/index.js";
import { CoursesSection } from "../components/courses-section";
export default function Home() {
    return (<main className="min-h-screen">
      {/* 1. Header & Hero */}
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      
      {/* 2. Stats Bar - Quick credibility */}
      <StatsBar />
      
      {/* 3. About Us */}
      <section id="about">
        <AboutSection />
      </section>
      
      {/* 4. Courses/Programs */}
      <section id="courses">
        <CoursesSection />
      </section>
      
      {/* 5. Why Choose Us (3 boxes) - Builds trust */}
      <WhyChooseUsSection />
      
      {/* 6. Placements - Proof of results */}
      <section id="placements">
        <PlacementsSection />
      </section>
      
      {/* 7. Testimonials - Social proof */}
      <TestimonialsSection />
      
      {/* 8. CTA Section - Drive conversions */}
      <CTASection />
      
      {/* 9. Location Map */}
      <MapSection />
      
      {/* 10. Footer - Always last */}
      <section id="contact">
        <Footer />
      </section>
    </main>);
}
