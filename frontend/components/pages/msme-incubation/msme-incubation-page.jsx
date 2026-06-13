"use client";

import { useEffect } from "react";
import { Header, Footer } from "../../index.js";
import { MsmeIncubationSection } from "../../sections/msme-incubation/msme-incubation-section.jsx";

const PAGE_TITLE =
  "MSME Innovation & Incubation Center | Satpuda College of Engineering & Polytechnic";
const PAGE_DESCRIPTION =
  "Satpuda College MSME Innovation & Incubation Center supports students, innovators, startups, and entrepreneurs through mentorship, technical support, infrastructure, training, and commercialization guidance.";

export default function MsmeIncubationPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;

    let meta = document.querySelector('meta[name="description"]');
    let created = false;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
      created = true;
    }
    const previousDescription = meta.getAttribute("content");
    meta.setAttribute("content", PAGE_DESCRIPTION);

    return () => {
      document.title = previousTitle;
      if (created) {
        meta.remove();
      } else if (previousDescription !== null) {
        meta.setAttribute("content", previousDescription);
      }
    };
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <MsmeIncubationSection />
      <Footer />
    </div>
  );
}
