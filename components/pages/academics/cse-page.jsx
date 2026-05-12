"use client";

import { Header } from "../../layout/header.jsx";
import { Footer } from "../../sections/home/footer.jsx";
import { CSESection } from "../../sections/academics/cse-section.jsx";

export default function CSEPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CSESection />
      <Footer />
    </div>
  );
}
