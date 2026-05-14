import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import RootLayout from "../components/layout/root-layout.jsx";
import HomePage from "../components/pages/home/home-page.jsx";
import AboutPage from "../components/pages/about/about-page.jsx";
import CollegeOverviewPage from "../components/pages/about/overview-page.jsx";
import DirectorsMessagePage from "../components/pages/about/directors-message-page.jsx";
import PrincipalMessagePage from "../components/pages/about/principal-message-page.jsx";
import MissionVisionPage from "../components/pages/about/mission-vision-page.jsx";
import AcademicsPage from "../components/pages/academics/academics-page.jsx";
import AdmissionsPage from "../components/pages/admissions/admissions-page.jsx";
import AdmissionFormPage from "../components/pages/admissions/admission-form-page.jsx";
import ComputerLabPage from "../components/pages/our-campus/computer-lab-page.jsx";
import TransportPage from "../components/pages/our-campus/transport-page.jsx";
import ScholarshipPage from "../components/pages/our-campus/scholarship-page.jsx";
import LibraryPage from "../components/pages/our-campus/library-page.jsx";
import SportsPage from "../components/pages/our-campus/sports-page.jsx";
import GalleryPage from "../components/pages/our-campus/gallery-page.jsx";
import ContactPage from "../components/pages/contact/contact-page.jsx";
import CSEPage from "../components/pages/academics/cse-page.jsx";
import MiningPage from "../components/pages/academics/mining-page.jsx";
import CivilPage from "../components/pages/academics/civil-page.jsx";
import MechanicalPage from "../components/pages/academics/mechanical-page.jsx";
import ElectricalPage from "../components/pages/academics/electrical-page.jsx";
import CoursesOfferedPage from "../components/pages/admissions/courses-offered-page.jsx";
import { JourneyAtSatpudaSection } from "../components/sections/journey-at-satpuda/journey-at-satpuda-section.jsx";
import { PlacementsPage } from "../components/index.js";
import EventsNewsPage from "../components/pages/events-news/events-news-page.jsx";

import { ThemeProvider } from "../components/shared/theme-provider.jsx";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/overview" element={<CollegeOverviewPage />} />
          <Route path="/about/directors-message" element={<DirectorsMessagePage />} />
          <Route path="/about/principal-message" element={<PrincipalMessagePage />} />
          <Route path="/about/mission-vision" element={<MissionVisionPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/academics/computer-science-engineering" element={<CSEPage />} />
          <Route path="/academics/mining-engineering" element={<MiningPage />} />
          <Route path="/academics/civil-engineering" element={<CivilPage />} />
          <Route path="/academics/mechanical-engineering" element={<MechanicalPage />} />
          <Route path="/academics/electrical-engineering" element={<ElectricalPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/admissions/admission-form" element={<AdmissionFormPage />} />
          <Route path="/admissions/courses-offered" element={<CoursesOfferedPage />} />
          <Route path="/our-campus/computer-lab" element={<ComputerLabPage />} />
          <Route path="/our-campus/transport" element={<TransportPage />} />
          <Route path="/our-campus/scholarship" element={<ScholarshipPage />} />
          <Route path="/our-campus/library" element={<LibraryPage />} />
          <Route path="/our-campus/sports" element={<SportsPage />} />
          <Route path="/our-campus/gallery" element={<GalleryPage />} />
          <Route path="/placements" element={<PlacementsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/journey-at-satpuda" element={<JourneyAtSatpudaSection />} />
          <Route path="/events-news" element={<EventsNewsPage />} />
        </Routes>
      </RootLayout>
    </ThemeProvider>
  );
}
