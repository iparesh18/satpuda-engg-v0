"use client";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Twitter, Instagram, Youtube, GraduationCap, Users, Building2, Trophy, BookOpen, Briefcase, ArrowRight, Play, CheckCircle2, Star, Quote } from "lucide-react";
// ============================================
// HEADER
// ============================================
export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navItems = [
        { label: "Home", href: "/" },
        {
            label: "About Us",
            href: "/about",
            dropdown: ["Vision & Mission", "Management", "Infrastructure", "Accreditation"]
        },
        {
            label: "Academics",
            href: "/academics",
            dropdown: ["B.Tech Programs", "Polytechnic", "Faculty", "Syllabus"]
        },
        {
            label: "Admissions",
            href: "/admissions",
            dropdown: ["Eligibility", "Fee Structure", "Scholarships", "Apply Online"]
        },
        { label: "Placements", href: "/placements" },
        { label: "Contact", href: "/contact" },
    ];
    return (<header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
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
              <span className="hidden sm:inline font-medium">Admission Open 2026-27</span>
              <div className="flex items-center gap-3">
                <a href="#" className="hover:opacity-80 transition-opacity"><Facebook className="h-4 w-4"/></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><Instagram className="h-4 w-4"/></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><Twitter className="h-4 w-4"/></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><Youtube className="h-4 w-4"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-card/95 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center">
                <GraduationCap className="h-5 w-5 lg:h-6 lg:w-6 text-primary-foreground"/>
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-foreground text-sm lg:text-base leading-tight">Satpuda College</p>
                <p className="text-xs text-muted-foreground">Engineering & Polytechnic</p>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (<div key={item.label} className="relative group">
                  <a href={item.href} className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary">
                    {item.label}
                    {item.dropdown && <ChevronDown className="h-4 w-4 opacity-50"/>}
                  </a>
                  {item.dropdown && (<div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-card rounded-xl shadow-xl border border-border p-2 min-w-[200px]">
                        {item.dropdown.map((subItem) => (<a key={subItem} href="#" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors">
                            {subItem}
                          </a>))}
                      </div>
                    </div>)}
                </div>))}
            </div>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center gap-3">
              <Button className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
                Apply Now
              </Button>
              <button className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (<div className="lg:hidden bg-card border-t border-border">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (<a key={item.label} href={item.href} className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </a>))}
              <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                Apply Now
              </Button>
            </div>
          </div>)}
      </nav>
    </header>);
}
// ============================================
// HERO SECTION
// ============================================
export function HeroSection() {
  return (
    <section className="relative pt-28 lg:pt-32 min-h-screen flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-1.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0810]/95 via-[#4a0d1c]/80 to-[#4a0d1c]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-24">
        
        <div className="max-w-4xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 mb-8 shadow-xl">
            <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />

            <span className="text-sm tracking-wide font-medium text-white/90">
              AICTE Approved • RGPV Affiliated
            </span>
          </div>

          {/* Heading */}
         {/* Heading */}
<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1] tracking-[-0.03em] mb-8">
  
  <span className="block text-accent mb-3">
    Welcome to
  </span>

  <span className="block">
    Satpuda College
  </span>

  <span className="block text-white/90">
    of Engineering &
  </span>

  <span className="block text-white/70">
    Polytechnic
  </span>

</h1>

{/* Description */}
<p className="text-base sm:text-lg lg:text-xl text-white/75 leading-relaxed max-w-2xl mb-10 font-light">
  Empowering future engineers with world-class education,
  advanced infrastructure, industry-focused learning,
  and outstanding placement opportunities since 1995.
</p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-5 justify-start">
            
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 h-14 text-base font-semibold rounded-xl shadow-2xl gap-2 transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 px-8 h-14 rounded-xl text-base gap-2 transition-all duration-300"
            >
              <Play className="h-4 w-4" />
              Watch Campus Tour
            </Button>

          </div>

        </div>
      </div>
    </section>
  );
}
// ============================================
// STATS BAR
// ============================================
export function StatsBar() {
    const stats = [
        { value: "25+", label: "Years of Excellence", icon: <Trophy className="h-6 w-6"/> },
        { value: "5000+", label: "Alumni Network", icon: <Users className="h-6 w-6"/> },
        { value: "95%", label: "Placement Rate", icon: <Briefcase className="h-6 w-6"/> },
        { value: "50+", label: "Top Recruiters", icon: <Building2 className="h-6 w-6"/> },
    ];
    return (<section className="relative z-20 -mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl shadow-2xl border border-border p-6 lg:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (<div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3">
                  {stat.icon}
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>))}
          </div>
        </div>
      </div>
    </section>);
}
// ============================================
// ABOUT SECTION
// ============================================
export function AboutSection() {
    const features = [
        "State-of-the-art Infrastructure",
        "Experienced Faculty Members",
        "Industry Collaborations",
        "Research & Innovation Labs"
    ];
    return (<section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48 lg:h-64">
                  <img src="/images/hero-1.jpg" alt="Campus" width={300} height={256} className="w-full h-full object-cover"/>
                </div>
                <div className="rounded-2xl overflow-hidden h-32 lg:h-40">
                  <img src="/images/hero-4.jpg" alt="Library" width={300} height={160} className="w-full h-full object-cover"/>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden h-32 lg:h-40">
                  <img src="/images/hero-2.jpg" alt="Lab" width={300} height={160} className="w-full h-full object-cover"/>
                </div>
                <div className="rounded-2xl overflow-hidden h-48 lg:h-64">
                  <img src="/images/hero-5.jpg" alt="Students" width={300} height={256} className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-2xl p-4 shadow-xl">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm">Years of Trust</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              About Our Institution
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Shaping Engineers of Tomorrow Since 1995
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Satpuda College, we take pride in our state-of-the-art infrastructure, 
              highly qualified faculty, and strong industry connections, ensuring top placements 
              for our graduates. Whether you aspire to be an engineer, technologist, or innovator, 
              our programs are designed to foster creativity, leadership, and technical expertise.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Admissions for 2026-27 are now open! Join us to experience exceptional education, 
              vibrant campus life, and limitless career opportunities. Secure your future today
              because your journey towards success starts here!
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (<div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0"/>
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Discover More
                <ArrowRight className="ml-2 h-4 w-4"/>
              </Button>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <img src="/images/hero-3.jpg" alt="AICTE" width={40} height={40} className="rounded-full border-2 border-border"/>
                <span>AICTE Approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
// ============================================
// WHY CHOOSE US (3 BOXES)
// ============================================
export function WhyChooseUsSection() {
    const cards = [
        {
            icon: <BookOpen className="h-7 w-7"/>,
            title: "Academic Excellence",
            description: "Satpuda College of Engineering & Polytechnic is committed to delivering top-notch technical education with state-of-the-art labs, and experienced faculty. Our curriculum is designed to blend theory with practical learning for real-world success."
        },
        {
            icon: <Briefcase className="h-7 w-7"/>,
            title: "Placement & Career Growth",
            description: "With a dedicated Training & Placement Cell, we ensure students are industry-ready. Our strong industry connections and skill development programs help students secure placements in top companies."
        },
        {
            icon: <Building2 className="h-7 w-7"/>,
            title: "Campus Life & Facilities",
            description: "From modern infrastructure to co-curricular activities, sports, and hostel facilities, Satpuda College provides a dynamic environment for overall personality development. Enjoy an engaging and enriching college experience!"
        }
    ];
    return (<section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Building Skills, Shaping Futures!
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (<div key={index} className="group bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{card.description}</p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group/link">
                Apply Now
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform"/>
              </a>
            </div>))}
        </div>
      </div>
    </section>);
}
// ============================================
// PLACEMENTS SECTION
// ============================================
export function PlacementsSection() {
    const stats = [
        { icon: <Trophy className="h-6 w-6"/>, value: "#1", label: "College of Choice" },
        { icon: <Users className="h-6 w-6"/>, value: "3000+", label: "Students Placed" },
        { icon: <Building2 className="h-6 w-6"/>, value: "200+", label: "Recruiting Companies" },
        { icon: <Star className="h-6 w-6"/>, value: "Top", label: "Courses Available" },
    ];
    const companies = [
        "Suzuki", "Tata", "Apollo", "Hero", "Whirlpool", "MRF", "Videocon", "Reliance"
    ];
    return (<section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Our Achievements
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Record Breaking Placements
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Take the first step towards a successful career with Satpuda College of Engineering & Polytechnic, 
              where education meets excellence. Our institution is dedicated to nurturing young minds through 
              world-class education, industry-oriented training, and cutting-edge technology.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (<div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-secondary">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>))}
            </div>

            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Call for Admission
              <ArrowRight className="ml-2 h-4 w-4"/>
            </Button>
          </div>

          {/* Right - LPA Circle */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Outer ring with companies */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/20"/>
              <div className="absolute inset-4 rounded-full border border-accent/10"/>
              
              {/* Company logos positioned around circle */}
              {companies.map((company, index) => {
            const angle = (index * 45) * (Math.PI / 180);
            const radius = 140;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (<div key={company} className="absolute w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center text-xs font-medium text-muted-foreground border border-border" style={{
                    left: `calc(50% + ${x}px - 24px)`,
                    top: `calc(50% + ${y}px - 24px)`,
                }}>
                    {company.slice(0, 2)}
                  </div>);
        })}

              {/* Center LPA */}
              <div className="absolute inset-16 lg:inset-20 rounded-full bg-accent flex flex-col items-center justify-center text-accent-foreground shadow-2xl">
                <p className="text-4xl lg:text-5xl font-bold">4.20</p>
                <p className="text-sm font-medium">LPA</p>
                <p className="text-xs mt-1 opacity-80">Highest Domestic</p>
                <p className="text-xs opacity-80">Offer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
// ============================================
// TESTIMONIALS
// ============================================
export function TestimonialsSection() {
    const testimonials = [
        {
            name: "Rahul Sharma",
            role: "B.Tech CSE, 2024",
            company: "Placed at TCS",
            quote: "The faculty and placement cell at Satpuda College helped me secure my dream job. The practical training was exceptional.",
            image: "/images/hero-2.jpg"
        },
        {
            name: "Priya Patel",
            role: "B.Tech Civil, 2023",
            company: "Placed at L&T",
            quote: "Amazing infrastructure and supportive environment. The college prepared me well for industry challenges.",
            image: "/images/hero-3.jpg"
        },
        {
            name: "Amit Kumar",
            role: "Diploma ME, 2024",
            company: "Placed at Suzuki",
            quote: "From hands-on workshops to industry visits, every experience at Satpuda shaped my career path.",
            image: "/images/hero-5.jpg"
        }
    ];
    return (<section className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Student Voices
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground text-balance">
            What Our Students Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (<div key={index} className="bg-card rounded-2xl p-8 shadow-xl">
              <Quote className="h-10 w-10 text-accent/30 mb-4"/>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {`"${testimonial.quote}"`}
              </p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover"/>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-accent font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>))}
        </div>
      </div>
    </section>);
}
// ============================================
// CTA SECTION
// ============================================
export function CTASection() {
    return (<section className="py-24 bg-accent">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6 text-balance">
          Ready to Shape Your Future?
        </h2>
        <p className="text-lg text-accent-foreground/80 mb-10 max-w-2xl mx-auto">
          Join thousands of successful engineers who started their journey at Satpuda College. 
          Admissions for 2026-27 are now open!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Apply Now
            <ArrowRight className="ml-2 h-4 w-4"/>
          </Button>
          <Button size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
            Download Brochure
          </Button>
        </div>
      </div>
    </section>);
}
// ============================================
// MAP SECTION
// ============================================
export function MapSection() {
    return (<section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-2">Locate Us</h2>
          <p className="text-muted-foreground">Lalbarra - Balaghat Road, Manegaon, Balaghat (M.P.)</p>
        </div>
      </div>
      <div className="h-96 w-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.5!2d80.165!3d21.875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSatpuda+College+of+Engineering!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="grayscale hover:grayscale-0 transition-all duration-500"/>
      </div>
    </section>);
}
// ============================================
// FOOTER
// ============================================
export function Footer() {
    const links = {
        ourCampuses: ["About Us", "Library", "Transport", "Gallery"],
        importantLinks: ["AICTE", "AICTE Scholarship/Fellowship", "MP DTE", "SCHOLARSHIP", "RGPV, Bhopal"],
        admissions: ["Privacy Policy", "Anti-Ragging Affidavit", "Mandatory Disclosure", "Fee Structure"],
        institutions: ["Satpuda Valley Public School", "Satpuda ITI", "Satpuda Polytechnic", "Job Sahi"]
    };
    return (<footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-accent-foreground"/>
              </div>
              <div>
                <p className="font-bold text-sm">Satpuda College</p>
                <p className="text-xs opacity-70">Est. 1995</p>
              </div>
            </div>
            <p className="text-sm opacity-70 mb-6">
              Excellence in Engineering Education
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="h-4 w-4"/>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="h-4 w-4"/>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="h-4 w-4"/>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Youtube className="h-4 w-4"/>
              </a>
            </div>
          </div>

          {/* Our Campuses */}
          <div>
            <h4 className="font-semibold mb-4">Our Campuses</h4>
            <ul className="space-y-2">
              {links.ourCampuses.map((link) => (<li key={link}>
                  <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">{link}</a>
                </li>))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-semibold mb-4">Important Links</h4>
            <ul className="space-y-2">
              {links.importantLinks.map((link) => (<li key={link}>
                  <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">{link}</a>
                </li>))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="font-semibold mb-4">Admissions</h4>
            <ul className="space-y-2">
              {links.admissions.map((link) => (<li key={link}>
                  <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">{link}</a>
                </li>))}
            </ul>
          </div>

          {/* Our Institutions */}
          <div>
            <h4 className="font-semibold mb-4">Our Institutions</h4>
            <ul className="space-y-2">
              {links.institutions.map((link) => (<li key={link}>
                  <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">{link}</a>
                </li>))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-sm text-center opacity-70">
            Copyright © 2026 Satpuda College of Engineering & Polytechnic Balaghat (M.P.)
          </p>
        </div>
      </div>
    </footer>);
}
