"use client";

import { Header } from "../../layout/header.jsx";
import { Footer } from "../../sections/home/footer.jsx";
import { WhyChooseUsSection } from "../../sections/home/why-choose-us-section.jsx";
import { PlacementsHeroSection } from "../../sections/placements/placements-hero-section.jsx";
import { StudentSuccessSection } from "../../sections/placements/student-success-section.jsx";
import { SuccessGlobeSection } from "../../sections/placements/success-globe-section.jsx";
import { HorizontalScrollSection } from "../../sections/placements/horizontal-scroll-section.jsx";
import { PlacementCellSection } from "../../sections/placements/placement-cell-section.jsx";

export default function PlacementsPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        {/* Cinematic Hero */}
        <PlacementsHeroSection />
        
        {/* Sheryians-inspired Student Success Section */}
        <StudentSuccessSection />
        
        {/* Mind-blowing Success Globe Section */}
        <SuccessGlobeSection />
        
        {/* Cinematic Horizontal Scroll Section */}
        <HorizontalScrollSection />
        
        {/* Placement Cell Section */}
        <PlacementCellSection />
        
        {/* Why Choose Us Section */}
        <div className="bg-card/30">
          <WhyChooseUsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

