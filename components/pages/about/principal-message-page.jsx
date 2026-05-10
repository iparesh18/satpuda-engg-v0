"use client";

import { Header, Footer } from "../../index.js";
import { PrincipalMessageSection } from "../../sections/about/principal-message-section.jsx";

export default function PrincipalMessagePage() {
  return (
    <div>
      <Header />
      <PrincipalMessageSection />
      <Footer />
    </div>
  );
}
