"use client";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, GraduationCap, Award, Building, Monitor as MonitorIcon, Mountain as MountainIcon, Building2 as Building2Icon, Cog as CogIcon, Zap as ZapIcon, Clock as ClockIcon, Users as UsersIcon, ArrowRight as ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";
const navigation = [
    { name: "Home", href: "#" },
    {
        name: "About Us",
        href: "#",
        children: [
            { name: "About College", href: "#" },
            { name: "Vision & Mission", href: "#" },
            { name: "Chairman Message", href: "#" },
            { name: "Principal Message", href: "#" },
        ]
    },
    {
        name: "Academics",
        href: "#",
        children: [
            { name: "Departments", href: "#" },
            { name: "Faculty", href: "#" },
            { name: "Syllabus", href: "#" },
            { name: "Academic Calendar", href: "#" },
        ]
    },
    {
        name: "Admission",
        href: "#",
        children: [
            { name: "Admission Process", href: "#" },
            { name: "Eligibility Criteria", href: "#" },
            { name: "Fee Structure", href: "#" },
            { name: "Scholarships", href: "#" },
        ]
    },
    {
        name: "Campus",
        href: "#",
        children: [
            { name: "Infrastructure", href: "#" },
            { name: "Laboratories", href: "#" },
            { name: "Library", href: "#" },
            { name: "Hostel", href: "#" },
        ]
    },
    { name: "Placements", href: "#" },
    { name: "Contact", href: "#contact" },
];
export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    return (<header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="hidden md:flex items-center gap-6">
              <a href="mailto:satpudaengineeringcollege@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail className="h-4 w-4"/>
                <span>satpudaengineeringcollege@gmail.com</span>
              </a>
              <a href="tel:+916262604111" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4"/>
                <span>+91-6262604111</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline font-medium text-accent">Admission Open 2026-27</span>
              <div className="flex items-center gap-3">
                <a href="#" className="hover:opacity-80 transition-opacity"><Facebook className="h-4 w-4"/></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><Twitter className="h-4 w-4"/></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><Instagram className="h-4 w-4"/></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><aedin className="h-4 w-4"/></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><Youtube className="h-4 w-4"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-card shadow-sm border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                S
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-foreground leading-tight">Satpuda College</h1>
                <p className="text-xs text-muted-foreground">Engineering & Polytechnic</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (<div key={item.name} className="relative group">
                  {item.children ? (<button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors" onMouseEnter={() => setOpenDropdown(item.name)} onMouseLeave={() => setOpenDropdown(null)}>
                      {item.name}
                      <ChevronDown className="h-4 w-4"/>
                    </button>) : (<a href={item.href} className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {item.name}
                    </a>)}
                  
                  {item.children && (<div className={`absolute left-0 top-full w-48 bg-card rounded-lg shadow-lg border border-border py-2 z-50 transition-all duration-200 ${openDropdown === item.name ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onMouseEnter={() => setOpenDropdown(item.name)} onMouseLeave={() => setOpenDropdown(null)}>
                      {item.children.map((child) => (<a key={child.name} href={child.href} className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">
                          {child.name}
                        </a>))}
                    </div>)}
                </div>))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Apply Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <button type="button" className="lg:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (<div className="lg:hidden bg-card border-t border-border">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (<div key={item.name}>
                  <a href={item.href} className="block py-2 text-foreground font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </a>
                </div>))}
              <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                Apply Now
              </Button>
            </div>
          </div>)}
      </nav>
    </header>);
}
export function HeroSection() {
    const images = [
        { src: "/images/hero-1.jpg", alt: "Campus Building" },
        { src: "/images/hero-2.jpg", alt: "Engineering Lab" },
        { src: "/images/hero-3.jpg", alt: "Graduation Ceremony" },
        { src: "/images/hero-4.jpg", alt: "Library" },
        { src: "/images/hero-5.jpg", alt: "Robotics Workshop" },
    ];
    const [currentImage, setCurrentImage] = useState(0);
    return (<section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={images[currentImage].src} alt={images[currentImage].alt} className="w-full h-full object-cover transition-opacity duration-700"/>
        <div className="absolute inset-0 bg-foreground/60"/>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-accent text-accent-foreground rounded-full">
            Admission Open 2026-27
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-card leading-tight mb-6">
            Welcome to{" "}
            <span className="text-accent">Satpuda College</span>{" "}
            of Engineering & Polytechnic
          </h1>
          <p className="text-lg sm:text-xl text-card/90 mb-8 leading-relaxed">
            Empowering future engineers with excellence in education, innovation, and research. 
            Approved by AICTE & Affiliated to RGPV Bhopal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
              Apply for Admission
            </Button>
            <Button size="lg" variant="outline" className="border-card text-card hover:bg-card/10 text-lg px-8">
              Explore Programs
            </Button>
          </div>
        </div>

        {/* Image Selector */}
        <div className="mt-12 flex gap-3">
          {images.map((_, index) => (<button key={index} onClick={() => setCurrentImage(index)} className={`w-3 h-3 rounded-full transition-all ${currentImage === index
                ? "bg-accent w-8"
                : "bg-card/50 hover:bg-card/70"}`} aria-label={`View image ${index + 1}`}/>))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5000+</div>
              <div className="text-sm text-muted-foreground">Alumni Network</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Industry Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
export function AboutSection() {
    return (<section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">About Us</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Shaping Future Engineers Since 1995
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Satpuda College of Engineering & Polytechnic, Balaghat is a premier institution 
              dedicated to providing quality technical education. Our state-of-the-art facilities, 
              experienced faculty, and industry partnerships ensure our students are well-prepared 
              for successful careers.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We offer comprehensive programs in various engineering disciplines, combining 
              theoretical knowledge with practical experience through our modern laboratories 
              and workshops.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent"/>
                <span className="text-sm font-medium text-foreground">AICTE Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5 text-accent"/>
                <span className="text-sm font-medium text-foreground">RGPV Affiliated</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-accent"/>
                <span className="text-sm font-medium text-foreground">NBA Accredited</span>
              </div>
            </div>
            <Button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              Learn More About Us
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/hero-1.jpg" alt="Campus" className="rounded-lg shadow-lg w-full h-48 object-cover"/>
            <img src="/images/hero-4.jpg" alt="Library" className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"/>
            <img src="/images/hero-2.jpg" alt="Lab" className="rounded-lg shadow-lg w-full h-48 object-cover"/>
            <img src="/images/hero-5.jpg" alt="Workshop" className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"/>
          </div>
        </div>
      </div>
    </section>);
}
export function ProgramsSection() {
    const [activeProgram, setActiveProgram] = useState(0);
    const programs = [
        {
            id: "cse",
            name: "Computer Science Engineering",
            shortName: "Computer Science",
            icon: <MonitorIcon className="h-6 w-6"/>,
            description: "Computers have become an inherent part of our routine life. No department or business can function efficiently without the integration of computer systems. Our Computer Science Engineering program focuses on programming, algorithms, artificial intelligence, machine learning, and database management. Students gain expertise in software development, cybersecurity, cloud computing, and emerging technologies to meet today's digital challenges.",
            highlights: ["AI & Machine Learning", "Software Development", "Cybersecurity", "Cloud Computing"],
            duration: "4 Years (B.Tech)",
            seats: 120,
        },
        {
            id: "mining",
            name: "Mining Engineering",
            shortName: "Mining",
            icon: <MountainIcon className="h-6 w-6"/>,
            description: "Mining Engineering is a specialized field that deals with the extraction of minerals from the earth. Our program covers mine planning, mineral processing, safety management, and environmental reclamation. Students learn advanced techniques in surveying, drilling, blasting, and sustainable mining practices essential for the mining industry.",
            highlights: ["Mine Planning", "Mineral Processing", "Safety Management", "Environmental Reclamation"],
            duration: "4 Years (B.Tech)",
            seats: 60,
        },
        {
            id: "civil",
            name: "Civil Engineering",
            shortName: "Civil",
            icon: <Building2Icon className="h-6 w-6"/>,
            description: "Civil Engineering is one of the oldest and most diverse engineering disciplines. Our program prepares students to design, construct, and maintain infrastructure projects including buildings, roads, bridges, and water systems. Emphasis is placed on structural analysis, geotechnical engineering, transportation, and sustainable construction practices.",
            highlights: ["Structural Design", "Construction Management", "Transportation", "Environmental Engineering"],
            duration: "4 Years (B.Tech)",
            seats: 60,
        },
        {
            id: "mechanical",
            name: "Mechanical Engineering",
            shortName: "Mechanical",
            icon: <CogIcon className="h-6 w-6"/>,
            description: "Mechanical Engineering is the backbone of the manufacturing industry. Our comprehensive program covers thermodynamics, fluid mechanics, manufacturing processes, and robotics. Students develop skills in CAD/CAM, automation, and product design, preparing them for careers in automotive, aerospace, and industrial sectors.",
            highlights: ["Thermodynamics", "Robotics & Automation", "CAD/CAM", "Manufacturing"],
            duration: "4 Years (B.Tech)",
            seats: 60,
        },
        {
            id: "electrical",
            name: "Electrical Engineering",
            shortName: "Electrical",
            icon: <ZapIcon className="h-6 w-6"/>,
            description: "Electrical Engineering powers our modern world. Our program provides comprehensive knowledge in power systems, electrical machines, control systems, and renewable energy. Students learn to design and maintain electrical infrastructure, work with smart grids, and contribute to sustainable energy solutions.",
            highlights: ["Power Systems", "Renewable Energy", "Control Systems", "Smart Grids"],
            duration: "4 Years (B.Tech)",
            seats: 60,
        },
    ];
    const currentProgram = programs[activeProgram];
    return (<section className="py-20 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground text-balance">
            Wide Array of Courses
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            B.Tech and Polytechnic courses tailored to support your journey towards academic and professional success
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {programs.map((program, index) => (<button key={program.id} onClick={() => setActiveProgram(index)} className={`px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${activeProgram === index
                ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25"
                : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 border border-primary-foreground/20"}`}>
              {program.shortName}
            </button>))}
        </div>

        {/* Content Card */}
        <div className="bg-card rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  {currentProgram.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {currentProgram.name} Department
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {currentProgram.description}
                </p>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentProgram.highlights.map((highlight, index) => (<span key={index} className="px-3 py-1 text-xs font-medium bg-secondary text-foreground rounded-full">
                      {highlight}
                    </span>))}
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ClockIcon className="h-4 w-4"/>
                    <span>{currentProgram.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <UsersIcon className="h-4 w-4"/>
                    <span>{currentProgram.seats} Seats</span>
                  </div>
                </div>

                {/* CTA */}
                <a href="#" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group">
                  Find out more
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-secondary px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Interested in this program? Get detailed syllabus and fee structure.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>);
}
export function CTASection() {
    return (<section className="py-20 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
          Ready to Start Your Engineering Journey?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Join thousands of successful engineers who started their career at Satpuda College. 
          Applications for 2026-27 are now open.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
            Apply Now
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8">
            Download Brochure
          </Button>
        </div>
      </div>
    </section>);
}
export function Footer() {
    return (<footer id="contact" className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                S
              </div>
              <div>
                <h3 className="font-bold text-background">Satpuda College</h3>
                <p className="text-xs text-background/70">Engineering & Polytechnic</p>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Excellence in engineering education since 1995. Approved by AICTE & affiliated to RGPV Bhopal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Academics</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Admission</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Placements</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Alumni</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-background mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-accent transition-colors">Computer Science</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Mechanical Engineering</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Civil Engineering</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Electrical Engineering</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Polytechnic Diploma</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-accent"/>
                <span>Satpuda College Road, Balaghat, Madhya Pradesh - 481001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent"/>
                <span>+91-6262604111, +91-6262604112</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent"/>
                <span>satpudaengineeringcollege@gmail.com</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="h-4 w-4"/>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="h-4 w-4"/>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="h-4 w-4"/>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors">
                <aedin className="h-4 w-4"/>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm text-background/60">
          <p>&copy; 2026 Satpuda College of Engineering & Polytechnic, Balaghat. All rights reserved.</p>
        </div>
      </div>
    </footer>);
}
