import { Header, HeroSection, StatsBar, AboutSection, WhyChooseUsSection, PlacementsSection, TestimonialsSection, CTASection, MapSection, Footer } from "../components/college-website";
import { CoursesSection } from "../components/courses-section";
export default function Home() {
    return (<main className="min-h-screen">
      {/* 1. Header & Hero */}
      <Header />
      <HeroSection />
      
      {/* 2. Stats Bar - Quick credibility */}
      <StatsBar />
      
      {/* 3. About Us */}
      <AboutSection />
      
      {/* 4. Courses/Programs */}
      <CoursesSection />
      
      {/* 5. Why Choose Us (3 boxes) - Builds trust */}
      <WhyChooseUsSection />
      
      {/* 6. Placements - Proof of results */}
      <PlacementsSection />
      
      {/* 7. Testimonials - Social proof */}
      <TestimonialsSection />
      
      {/* 8. CTA Section - Drive conversions */}
      <CTASection />
      
      {/* 9. Location Map */}
      <MapSection />
      
      {/* 10. Footer - Always last */}
      <Footer />
    </main>);
}
