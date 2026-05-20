"use client";

import { Header, Footer, CollegeOverviewSection } from "../../index.js";

export default function CollegeOverviewPage() {
  return (
    <div>
      <Header />
      <main className="pt-0">
        <CollegeOverviewSection />
      </main>
      <Footer />
    </div>
  );
}

