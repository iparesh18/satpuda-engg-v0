"use client";

const companies = [
  { name: "Mahindra", logo: "/images/mahindra logo.png" },
  { name: "Suzuki",   logo: "/images/suzuki logo.png"   },
  { name: "Hero",     logo: "/images/Hero logo.png"     },
  { name: "Tata",     logo: "/images/tata.png"          },
  { name: "Apollo",   logo: "/images/apollo logo.png"   },
  { name: "Eicher",   logo: "/images/eicher logo.png"   },
  { name: "Volvo",    logo: "/images/volvo logo.jpg"    },
  { name: "MRF",      logo: "/images/mrf.png"           },
];

// Duplicate for seamless infinite loop
const items = [...companies, ...companies];

export function CompanyMarquee() {
  return (
    <section className="company-marquee-section">
      {/* Label — matches site-wide section heading style */}
      <div className="company-marquee-header">
        <span className="company-marquee-label">Our Recruiters</span>
      </div>

      <div className="company-marquee-track-wrapper">
        {/* Soft fade edges */}
        <div className="company-marquee-fade-left"  />
        <div className="company-marquee-fade-right" />

        <div className="company-marquee-track">
          {items.map((company, i) => (
            <div key={`${company.name}-${i}`} className="company-marquee-item">
              <img
                src={company.logo}
                alt={company.name}
                className="company-marquee-logo"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .company-marquee-section {
          padding: 3rem 0 3.5rem;
          background: var(--background);
          overflow: hidden;
        }

        /* ── Label — mirrors "Our Achievements", "About Our Institution" style ── */
        .company-marquee-header {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .company-marquee-label {
          font-size: 0.875rem;      /* text-sm */
          font-weight: 600;         /* font-semibold */
          color: var(--accent);     /* text-accent */
          text-transform: uppercase;
          letter-spacing: 0.2em;   /* tracking-[0.2em] */
          white-space: nowrap;
        }

        /* ── Scrolling track ── */
        .company-marquee-track-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .company-marquee-fade-left,
        .company-marquee-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }
        .company-marquee-fade-left  { left:  0; background: linear-gradient(to right, var(--background), transparent); }
        .company-marquee-fade-right { right: 0; background: linear-gradient(to left,  var(--background), transparent); }

        .company-marquee-track {
          display: flex;
          align-items: center;
          gap: 3rem;
          width: max-content;
          animation: marquee-scroll 30s linear infinite;
        }

        .company-marquee-track:hover {
          animation-play-state: paused;
        }

        /* No borders, no background card — just the logo */
        .company-marquee-item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 140px;
          height: 80px;
          padding: 8px;
          transition: transform 0.3s ease;
        }

        .company-marquee-item:hover {
          transform: translateY(-4px);
        }

        .company-marquee-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.55;
          transition: filter 0.35s ease, opacity 0.35s ease;
          user-select: none;
        }

        .company-marquee-item:hover .company-marquee-logo {
          filter: grayscale(0%);
          opacity: 1;
        }

        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .company-marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
