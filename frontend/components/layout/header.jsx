"use client";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (item) => {
    if (item.type === "page" && item.href) {
      if (item.href === "/") return currentPath === "/";
      return currentPath.startsWith(item.href);
    }
    if (item.dropdown) {
      return item.dropdown.some(subItem => subItem.href && currentPath.startsWith(subItem.href));
    }
    return false;
  };

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileDropdown = (label) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const navItems = [
    { label: "Home", type: "page", href: "/" },
    {
      label: "About Us",
      href: "#about",
      scrollId: "about",
      dropdown: [
        { label: "College Overview", type: "page", href: "/about/overview" },
        { label: "Director's Message", type: "page", href: "/about/directors-message" },
        { label: "Principal's Message", type: "page", href: "/about/principal-message" },
        { label: "Mission & Vision", type: "page", href: "/about/mission-vision" }
      ]
    },
    {
      label: "Our Campus",
      href: "#our-campus",
      scrollId: "our-campus",
      dropdown: [
        { label: "Computer Lab", type: "page", href: "/our-campus/computer-lab" },
        { label: "Transport", type: "page", href: "/our-campus/transport" },
        { label: "Scholarship", type: "page", href: "/our-campus/scholarship" },
        { label: "Library", type: "page", href: "/our-campus/library" },
        { label: "Sports", type: "page", href: "/our-campus/sports" },
        { label: "Gallery", type: "page", href: "/our-campus/gallery" }
      ]
    },
    {
      label: "Academics",
      href: "#academics",
      scrollId: "academics",
      dropdown: [
        { label: "Computer Science Engineering", type: "page", href: "/academics/computer-science-engineering" },
        { label: "Mining Engineering", type: "page", href: "/academics/mining-engineering" },
        { label: "Civil Engineering", type: "page", href: "/academics/civil-engineering" },
        { label: "Mechanical Engineering", type: "page", href: "/academics/mechanical-engineering" },
        { label: "Electrical Engineering", type: "page", href: "/academics/electrical-engineering" }
      ]
    },
    {
      label: "Admissions",
      href: "#admissions",
      scrollId: "admissions",
      dropdown: [
        { label: "Courses Offered",type : "page", href: "/admissions/courses-offered" },
        { label: "Admission Form", type: "page", href: "/admissions/admission-form" }
      ]
    },
    /* {
      label: "Events & News",
      href: "#events",
      scrollId: "events",
      dropdown: [
        { label: "Recent Events", type: "page", href: "/events/recent" },
        { label: "Upcoming Events", type: "page", href: "/events/upcoming" }
      ]
    }, */
    { label: "Placements", type: "page", href: "/placements" },
    { label: "Contact", type: "page", href: "/contact" },
  ];
  return (<header className="relative z-50">
      <style>{`
        @keyframes admission-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>
      {/* Red Marquee */}
      <div className="bg-[#b30000] text-white border-b border-red-500 shadow-lg">
        <div className="overflow-hidden py-2">
          <div className="marquee w-full">
            <div className="marquee__track">
              <div className="marquee__content">
                <span className="font-semibold">🚨 Admission Open 2026</span>
                <span className="font-semibold">Apply Now for Engineering & Polytechnic</span>
                <span className="font-semibold">Limited Seats Available</span>
                <span className="font-semibold">AICTE Approved • RGPV Affiliated</span>
              </div>
              <div className="marquee__content" aria-hidden="true">
                <span className="font-semibold">🚨 Admission Open 2026</span>
                <span className="font-semibold">Apply Now for Engineering & Polytechnic</span>
                <span className="font-semibold">Limited Seats Available</span>
                <span className="font-semibold">AICTE Approved • RGPV Affiliated</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blue Navbar */}
      <div className="bg-[#021545]/95 backdrop-blur-md border-b border-white/10">
    {/* Top Bar */}
    <div className="bg-primary text-primary-foreground px-8">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 text-sm">
          {/* Left Side: Email and Phone */}
          <div className="flex items-center gap-6">
            <a href="mailto:satpudaengineeringcollege@gmail.com" className="flex items-center gap-1.5 md:gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              {/* Only show email text on desktop to save space on mobile, or show a tiny version if really needed. Based on user request, we show the icon on mobile to represent email, and text on desktop. */}
              <span className="hidden lg:inline">satpudaengineeringcollege@gmail.com</span>
            </a>
            <a href="tel:+916262604111" className="hidden md:flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4 shrink-0" />
              <span className="text-xs">+91 94258 36824, +91 62626 04111</span>
            </a>
          </div>

          {/* Center: Admission Open (Mobile Only) */}
          <div className="md:hidden flex-1 flex justify-center items-center px-2">
            <Link
              to="/admissions/admission-form"
              className="font-semibold text-[11px] whitespace-nowrap"
              style={{ animation: "admission-blink 1.6s infinite" }}
            >
              Admission Open -2026-27
            </Link>
          </div>

          {/* Right Side: Admission (Desktop) and Socials */}
          <div className="flex items-center gap-4">
            <Link
              to="/admissions/admission-form"
              className="hidden md:inline font-medium cursor-pointer"
              style={{ animation: "admission-blink 1.6s infinite" }}
            >
              Admission Open 2026-27
            </Link>
            <div className="flex items-center gap-2.5 md:gap-3">
              <a href="https://www.facebook.com/SatpudaEnggPoly" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/satpuda_engineering/" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/satpuda-college-of-engineering-and-polytechnic-balaghat-781906352/" target="_blank" rel="noreferrer" className="hidden sm:inline hover:opacity-80 transition-opacity">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@satpudaengineering231" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Main Nav */}
    <nav className="bg-[#ffffff] border-b border-border px-8">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <img src="/images/SATPUDA-LOGO.webp" alt="Satpuda College Logo" className="h-12 lg:h-16 w-auto object-contain" loading="lazy" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0 lg:gap-1">
            {navItems.map((item) => {
              const active = isActive(item);
              return (
              <div key={item.label} className="relative group">
                {item.type === "page" ? (
                  <Link
                    to={item.href}
                    className={`flex items-center gap-0.5 lg:gap-1 px-2 lg:px-4 py-1.5 lg:py-2 text-[12px] lg:text-[15px] font-semibold transition-colors rounded-lg hover:bg-secondary ${active ? 'text-accent' : 'text-foreground hover:text-primary'}`}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="h-3 w-3 lg:h-4 lg:w-4 opacity-50" />}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleScroll(item.scrollId)}
                    className={`flex items-center gap-0.5 lg:gap-1 px-2 lg:px-4 py-1.5 lg:py-2 text-[12px] lg:text-[15px] font-semibold transition-colors rounded-lg hover:bg-secondary ${active ? 'text-accent' : 'text-foreground hover:text-primary'}`}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="h-3 w-3 lg:h-4 lg:w-4 opacity-50" />}
                  </button>
                )}
              {item.dropdown && (<div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card rounded-xl shadow-xl border border-border p-2 min-w-50">
                  {item.dropdown.map((subItem) => (
                    subItem.type === "page" ? (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="w-full text-left block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ) : (
                      <button
                        key={subItem.label}
                        onClick={() => handleScroll(subItem.scrollId)}
                        className="w-full text-left block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                      >
                        {subItem.label}
                      </button>
                    )
                  ))}
                </div>
              </div>)}
              </div>);
            })}
          </div>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-2 lg:gap-3">
            <Link to="/admissions/admission-form">
              <Button className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground px-3 lg:px-4 text-xs lg:text-sm h-8 lg:h-10">
                Apply Now
              </Button>
            </Link>
            <button className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (<div className="md:hidden bg-card border-t border-border">
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (<div key={item.label}>
            <div className="flex items-center gap-2 rounded-lg hover:bg-secondary transition-colors">
              {item.type === "page" ? (
                <Link
                  to={item.href}
                  className="flex-1 text-left block px-4 py-3 text-base font-semibold text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={() => handleScroll(item.scrollId)}
                  className="flex-1 text-left block px-4 py-3 text-base font-semibold text-foreground"
                >
                  {item.label}
                </button>
              )}

              {item.dropdown && (
                <button
                  type="button"
                  onClick={() => toggleMobileDropdown(item.label)}
                  className="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-background hover:text-foreground"
                  aria-label={`Toggle ${item.label} submenu`}
                  aria-expanded={Boolean(mobileDropdownOpen[item.label])}
                >
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileDropdownOpen[item.label] ? "rotate-180" : ""}`} />
                </button>
              )}
            </div>

            {item.dropdown && mobileDropdownOpen[item.label] && (
              <div className="mt-1 pl-4 space-y-1 border-l border-border/70">
                {item.dropdown.map((subItem) => (
                  subItem.type === "page" ? (
                    <Link
                      key={subItem.label}
                      to={subItem.href}
                      className="w-full text-left block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ) : (
                    <button
                      key={subItem.label}
                      onClick={() => handleScroll(subItem.scrollId)}
                      className="w-full text-left block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                    >
                      {subItem.label}
                    </button>
                  )
                ))}
              </div>
            )}
          </div>))}
          <Link to="/admissions/admission-form" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
              Apply Now
            </Button>
          </Link>
        </div>
      </div>)}
    </nav>
      </div>
  </header>);
}


