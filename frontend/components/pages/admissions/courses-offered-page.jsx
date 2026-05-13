"use client";

import { Header, Footer } from "../../index.js";
import { CoursesOfferedSection } from "../../sections/admissions/courses-offered-section.jsx";

export default function CoursesOfferedPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CoursesOfferedSection />
      <Footer />
    </div>
  );
}
