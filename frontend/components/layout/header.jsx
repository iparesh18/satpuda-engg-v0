"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
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
    { label: "Placements", type: "page", href: "/placements" },
    { label: "Contact", type: "page", href: "/contact" },
  ];
  return (<header className="fixed top-0 left-0 right-0 z-50">
    {/* Top Bar */}
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 text-sm">
          <div className="hidden md:flex items-center gap-6">
            <a href="mailto:satpudaengineeringcollege@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span>satpudaengineeringcollege@gmail.com</span>
            </a>
            <a href="tel:+916262604111" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span>+91-6262604111</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline font-medium">Admission Open 2026-27</span>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="hover:opacity-80 transition-opacity"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="hover:opacity-80 transition-opacity"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="hover:opacity-80 transition-opacity"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Main Nav */}
    <nav className="bg-card/95 backdrop-blur-md border-b border-border">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white rounded-full p-1.5 shadow-sm overflow-hidden border border-white/20">
              <img src="/logo.png" alt="Satpuda College Logo" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-foreground text-sm lg:text-lg leading-tight uppercase tracking-tighter">
                <span className="flex items-center gap-[5px]">
                  <span>Satpuda</span>
                  <span>Engineering</span>
                  <span>College</span>
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Satpuda College of Engineering & Polytechnic</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (<div key={item.label} className="relative group">
              {item.type === "page" ? (
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="h-4 w-4 opacity-50" />}
                </Link>
              ) : (
                <button
                  onClick={() => handleScroll(item.scrollId)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="h-4 w-4 opacity-50" />}
                </button>
              )}
              {item.dropdown && (<div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card rounded-xl shadow-xl border border-border p-2 min-w-[200px]">
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
            </div>))}
          </div>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link to="/admissions/admission-form">
              <Button className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
                Apply Now
              </Button>
            </Link>
            <button className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (<div className="lg:hidden bg-card border-t border-border">
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (<div key={item.label}>
            {item.type === "page" ? (
              <Link
                to={item.href}
                className="w-full text-left block px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <button
                onClick={() => handleScroll(item.scrollId)}
                className="w-full text-left block px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                {item.label}
              </button>
            )}
            {item.dropdown && (
              <div className="pl-4 space-y-1">
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
  </header>);
}

