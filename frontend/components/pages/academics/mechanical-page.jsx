"use client";

import { Header } from "../../layout/header.jsx";
import { Footer } from "../../sections/home/footer.jsx";
import { MechanicalSection } from "../../sections/academics/mechanical-section.jsx";

export default function MechanicalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MechanicalSection />
      <Footer />
    </div>
  );
}
