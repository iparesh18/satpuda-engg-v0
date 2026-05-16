"use client";

import { Header, Footer } from "../../index.js";
import { DirectorsMessageSection } from "../../sections/about/directors-message-section.jsx";

export default function DirectorsMessagePage() {
  return (
    <div>
      <Header />
      <DirectorsMessageSection />
      <Footer />
    </div>
  );
}
