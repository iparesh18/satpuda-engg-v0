"use client";

import { Header, Footer, AboutSection } from "../../components/index.js";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="pt-24">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
