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
import ComputerLabPage from "../components/pages/our-campus/computer-lab-page.jsx";
import TransportPage from "../components/pages/our-campus/transport-page.jsx";
import ScholarshipPage from "../components/pages/our-campus/scholarship-page.jsx";
import LibraryPage from "../components/pages/our-campus/library-page.jsx";
import SportsPage from "../components/pages/our-campus/sports-page.jsx";
import GalleryPage from "../components/pages/our-campus/gallery-page.jsx";
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
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/our-campus/computer-lab" element={<ComputerLabPage />} />
          <Route path="/our-campus/transport" element={<TransportPage />} />
          <Route path="/our-campus/scholarship" element={<ScholarshipPage />} />
          <Route path="/our-campus/library" element={<LibraryPage />} />
          <Route path="/our-campus/sports" element={<SportsPage />} />
          <Route path="/our-campus/gallery" element={<GalleryPage />} />
        </Routes>
      </RootLayout>
    </ThemeProvider>
  );
}
