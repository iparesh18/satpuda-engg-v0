"use client";

import { Header } from "../../layout/header.jsx";
import { Footer } from "../../sections/home/footer.jsx";
import { ElectricalSection } from "../../sections/academics/electrical-section.jsx";

export default function ElectricalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ElectricalSection />
      <Footer />
    </div>
  );
}
