"use client";

import { Header } from "../../layout/header.jsx";
import { Footer } from "../../sections/home/footer.jsx";
import { MiningSection } from "../../sections/academics/mining-section.jsx";

export default function MiningPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MiningSection />
      <Footer />
    </div>
  );
}

