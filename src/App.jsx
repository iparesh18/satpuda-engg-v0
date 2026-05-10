import { Route, Routes } from "react-router-dom";
import RootLayout from "../app/layout.jsx";
import Home from "../app/page.jsx";
import AboutPage from "../app/about/page.jsx";
import CollegeOverviewPage from "../app/about/overview/page.jsx";
import { ThemeProvider } from "../components/theme-provider.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/overview" element={<CollegeOverviewPage />} />
        </Routes>
      </RootLayout>
    </ThemeProvider>
  );
}
