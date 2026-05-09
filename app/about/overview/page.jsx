"use client";

import { Header, Footer } from "../../../components/index.js";
import { CollegeOverviewSection } from "../../../components/college-overview-section.jsx";

export default function CollegeOverviewPage() {
  return (
    <div>
      <Header />
      <main className="pt-24">
        <CollegeOverviewSection />
      </main>
      <Footer />
    </div>
  );
}
