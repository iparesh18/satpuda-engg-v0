"use client";

import { Header } from "../../layout/header.jsx";
import { Footer } from "../../sections/home/footer.jsx";
import { CivilSection } from "../../sections/academics/civil-section.jsx";

export default function CivilPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CivilSection />
      <Footer />
    </div>
  );
}

