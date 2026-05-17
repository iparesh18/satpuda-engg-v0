"use client";

import DomeGallery from "../../bits/DomeGallery.jsx";
import { SectionHeading } from "./section-heading.jsx";

const domeImages = [
  { src: "/images/hero-1.jpeg", alt: "Campus overview" },
  { src: "/images/overview/campus view.png", alt: "Campus view" },
  { src: "/images/k-1.JPG", alt: "Campus building" },
  { src: "/images/overview/student in class.png", alt: "Students in class" },
  { src: "/images/hero-7.jpeg", alt: "Students in lab" },
  { src: "/images/overview/smart library.png", alt: "Smart library" },
  { src: "/images/overview/sports and activity.png", alt: "Sports and activity" },
  { src: "/images/k-0.jpg", alt: "Events and culture" },
  { src: "/images/overview/college bus.png", alt: "College bus" },
];

export function DomeGallerySection() {
  return (
    <section className="relative overflow-hidden bg-background py-14 sm:py-16 lg:py-18">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(2,21,69,0.07),transparent_35%),radial-gradient(circle_at_bottom,rgba(214,11,11,0.05),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Campus Gallery"
          title="A Dome View of Satpuda Life"
          description="Explore campus moments, classrooms, laboratories, and student life in a 3D interactive gallery built for the home page."
          highlights={["Dome View", "Satpuda"]}
          className="mb-8"
        />

        <div className="relative h-[min(72vh,680px)] sm:h-[min(74vh,760px)] lg:h-190 overflow-hidden rounded-4xl border border-border/60 bg-white/70 shadow-[0_35px_90px_rgba(2,21,69,0.14)] backdrop-blur-sm">
          <DomeGallery
            images={domeImages}
            fit={0.9}
            fitBasis="width"
            minRadius={560}
            maxVerticalRotationDeg={8}
            segments={34}
            dragDampening={2}
            dragSensitivity={20}
            padFactor={0.2}
            openedImageWidth="min(360px, 80vw)"
            openedImageHeight="min(360px, 80vw)"
            autoRotate
            autoRotateSpeed={0.03}
            autoRotateDirection={1}
            grayscale={false}
          />
        </div>
      </div>
    </section>
  );
}