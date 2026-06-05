"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Users, 
  Building2, 
  Trophy, 
  Megaphone, 
  CalendarDays, 
  ArrowRight,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Share2,
  ThumbsUp,
  Camera,
  Play
} from "lucide-react";

// --- FACEBOOK CARD ---
function FacebookCard() {
  const [isInteractive, setIsInteractive] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 170, damping: 18 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-5 shadow-[0_24px_80px_rgba(2,21,69,0.08)]"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1877F2] text-white shadow-md shadow-blue-100">
              <Facebook className="h-6 w-6" fill="currentColor" strokeWidth={0} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-bold text-slate-800">Facebook Updates</h3>
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#1877F2] text-white">
                  <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              </div>
              <p className="text-xs text-slate-400">Latest posts & announcements</p>
            </div>
          </div>
          <div className="text-[#1877F2] bg-blue-50/50 p-2 rounded-full border border-blue-100/50 hover:scale-105 transition-transform cursor-pointer">
            <ThumbsUp className="h-4.5 w-4.5" fill="currentColor" strokeWidth={0} />
          </div>
        </div>

        {/* Content Box */}
        <div 
          className="rounded-2xl border border-slate-100 bg-white h-[380px] overflow-hidden shadow-inner flex justify-center relative group/frame"
          onMouseLeave={() => setIsInteractive(false)}
        >
          {/* Mobile Overlay to prevent scroll trapping */}
          {!isInteractive && (
            <div 
              className="absolute inset-0 z-10 md:hidden bg-black/5 flex items-center justify-center cursor-pointer"
              onClick={() => setIsInteractive(true)}
            >
               <div className="bg-black/70 text-white text-[10px] px-3 py-1.5 rounded-full font-medium shadow-lg backdrop-blur-sm">
                 Tap to scroll
               </div>
            </div>
          )}
          <iframe
            title="Satpuda College Facebook Feed"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSatpudaEnggPoly&tabs=timeline&width=340&height=380&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
            className="w-full h-full border-0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            loading="lazy"
            style={{ border: 0, overflow: "hidden" }}
          />
        </div>
      </div>

      {/* Primary Link Button */}
      <a
        href="https://www.facebook.com/SatpudaEnggPoly"
        target="_blank"
        rel="noreferrer"
        className="group/btn relative mt-5 flex w-full items-center justify-between rounded-2xl bg-[#1877F2] px-5 py-3.5 text-xs font-semibold text-white shadow-md shadow-blue-100 transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
        <div className="relative flex items-center gap-2">
          <Facebook className="h-4.5 w-4.5" fill="currentColor" strokeWidth={0} />
          <span>Visit Facebook Page</span>
        </div>
        <ArrowRight className="relative h-4.5 w-4.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
      </a>
    </motion.div>
  );
}

// --- INSTAGRAM CARD ---
function InstagramCard() {
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 170, damping: 18 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-5 shadow-[0_24px_80px_rgba(2,21,69,0.08)]"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-white shadow-md shadow-pink-100">
              <Instagram className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-bold text-slate-800">Instagram Highlights</h3>
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#1877F2] text-white">
                  <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              </div>
              <p className="text-xs text-slate-400">Moments, memories & campus life</p>
            </div>
          </div>
          <div className="text-[#FD1D1D] bg-pink-50/50 p-2 rounded-full border border-pink-100/50 hover:scale-105 transition-transform cursor-pointer">
            <Camera className="h-4.5 w-4.5" />
          </div>
        </div>

        {/* Content Box */}
        <div 
          className="rounded-2xl border border-slate-100 bg-slate-50/80 h-[380px] overflow-y-auto overflow-x-hidden flex justify-center shadow-inner relative group/frame custom-scrollbar"
          onMouseLeave={() => setIsInteractive(false)}
        >
          {/* Mobile Overlay to prevent scroll trapping */}
          {!isInteractive && (
            <div 
              className="absolute inset-0 z-10 md:hidden bg-black/5 flex items-center justify-center cursor-pointer"
              onClick={() => setIsInteractive(true)}
            >
               <div className="bg-black/70 text-white text-[10px] px-3 py-1.5 rounded-full font-medium shadow-lg backdrop-blur-sm">
                 Tap to scroll
               </div>
            </div>
          )}
          <div className="elfsight-app-0446b9b2-e8e8-4f45-9ba1-237eab098406 w-full h-full" data-elfsight-app-lazy></div>
        </div>
      </div>

      {/* Primary Link Button */}
      <a
        href="https://www.instagram.com/satpuda_engineering/"
        target="_blank"
        rel="noreferrer"
        className="group/btn relative mt-5 flex w-full items-center justify-between rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] px-5 py-3.5 text-xs font-semibold text-white shadow-md shadow-pink-100 transition-all duration-300 hover:opacity-95 hover:shadow-lg"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
        <div className="relative flex items-center gap-2">
          <Instagram className="h-4.5 w-4.5" />
          <span>Visit Instagram Page</span>
        </div>
        <ArrowRight className="relative h-4.5 w-4.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
      </a>
    </motion.div>
  );
}

// --- YOUTUBE CARD ---
function YouTubeCard() {
  const [videos, setVideos] = useState([]);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [isListInteractive, setIsListInteractive] = useState(false);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCm0GZ9f3VX-fde4YuM3lkLg')
      .then(res => res.json())
      .then(data => {
        if (data && data.items && data.items.length > 0) {
          const vids = data.items.slice(0, 15).map(item => ({
            id: item.guid.replace('yt:video:', ''),
            title: item.title,
            thumbnail: item.thumbnail,
            pubDate: new Date(item.pubDate).toLocaleDateString()
          }));
          setVideos(vids);
          setActiveVideoId(vids[0].id);
        }
      })
      .catch(err => console.error("Error fetching YouTube feed", err));
  }, []);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 170, damping: 18 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-5 shadow-[0_24px_80px_rgba(2,21,69,0.08)]"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center p-1 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
              <img src="/youtube.webp" alt="YouTube Logo" className="h-full w-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-bold text-slate-800">YouTube Videos</h3>
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#1877F2] text-white">
                  <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              </div>
              <p className="text-xs text-slate-400">Events, programs & campus stories</p>
            </div>
          </div>
          <div className="text-[#FF0000] bg-red-50/50 p-2 rounded-full border border-red-100/50 hover:scale-105 transition-transform cursor-pointer">
            <Play className="h-4.5 w-4.5" fill="currentColor" />
          </div>
        </div>

        {/* Content Box */}
        <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-2 flex flex-col gap-2 h-[380px]">
          {/* Main Video Player */}
          <div className="rounded-xl overflow-hidden bg-black aspect-video relative shadow-sm border border-slate-200 shrink-0">
            {activeVideoId ? (
              <iframe
                title="Satpuda College YouTube Channel"
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=0`}
                className="w-full h-full border-0 absolute inset-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-slate-500 text-sm">
                Loading videos...
              </div>
            )}
          </div>

          {/* Video List */}
          <div 
            className="flex flex-col gap-2 overflow-y-auto min-h-0 pr-1 flex-1 relative group/list"
            onMouseLeave={() => setIsListInteractive(false)}
          >
            {/* Mobile Overlay to prevent scroll trapping */}
            {!isListInteractive && (
              <div 
                className="absolute inset-0 z-10 md:hidden bg-black/5 flex items-center justify-center cursor-pointer"
                onClick={() => setIsListInteractive(true)}
              >
                 <div className="bg-black/70 text-white text-[10px] px-3 py-1.5 rounded-full font-medium shadow-lg backdrop-blur-sm">
                   Tap to scroll
                 </div>
              </div>
            )}
            
            {videos.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setActiveVideoId(vid.id)}
                className={`flex gap-3 bg-white p-2 rounded-xl border ${activeVideoId === vid.id ? 'border-red-400 bg-red-50' : 'border-slate-100'} shadow-[0_2px_8px_rgba(0,0,0,0.01)] group/vid cursor-pointer transition hover:border-red-200 hover:shadow-sm`}
              >
                {/* Thumbnail Container */}
                <div className="relative h-12 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-100 shadow-inner">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="h-full w-full object-cover transition duration-300 group-hover/vid:scale-105"
                    loading="lazy"
                  />
                  {/* Hover icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover/vid:opacity-100 transition-opacity">
                    <div className="rounded-full bg-[#FF0000] p-1 text-white shadow-md">
                      <Play className="h-2 w-2 fill-white" strokeWidth={0} />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-center min-w-0">
                  <h5 className={`text-[10px] font-bold leading-snug line-clamp-2 transition-colors ${activeVideoId === vid.id ? 'text-red-600' : 'text-slate-800'} group-hover/vid:text-[#FF0000]`}>
                    {vid.title}
                  </h5>
                  <p className="mt-1 text-[8px] text-slate-400 font-medium">
                    {vid.pubDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Primary Link Button */}
      <a
        href="https://www.youtube.com/channel/UCm0GZ9f3VX-fde4YuM3lkLg"
        target="_blank"
        rel="noreferrer"
        className="group/btn relative mt-5 flex w-full items-center justify-between rounded-2xl bg-[#FF0000] px-5 py-3.5 text-xs font-semibold text-white shadow-md shadow-red-100 transition-all duration-300 hover:bg-red-700 hover:shadow-lg"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
        <div className="relative flex items-center gap-2">
          <Youtube className="h-4.5 w-4.5" fill="currentColor" strokeWidth={0} />
          <span>Visit YouTube Channel</span>
        </div>
        <ArrowRight className="relative h-4.5 w-4.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
      </a>
    </motion.div>
  );
}

// --- HELPER PLUS ICON ---
function PlusIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}

// --- MAIN SECTION COMPONENT ---
function SocialMediaSection() {
  const features = [
    {
      icon: Users,
      title: "Strong Community",
      description: "Join our growing online family"
    },
    {
      icon: Megaphone,
      title: "Instant Updates",
      description: "Get the latest news & alerts"
    },
    {
      icon: CalendarDays,
      title: "Event Highlights",
      description: "Never miss any important event"
    },
    {
      icon: Trophy,
      title: "Proud Achievements",
      description: "Celebrating our milestones"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-[#f5f9ff] py-16 sm:py-20 lg:py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(2,21,69,0.08),transparent_30%),radial-gradient(circle_at_bottom,rgba(34,139,230,0.04),transparent_25%)]" />

      <div className="pointer-events-none absolute -right-16 top-16 h-44 w-44 rounded-full bg-sky-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-12 left-6 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow Pill */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-150 bg-white/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#021545] shadow-[0_4px_12px_rgba(2,21,69,0.04)] backdrop-blur">
              <Users className="h-3.5 w-3.5 text-blue-600" />
              <span>Our Social Media</span>
            </div>
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          </div>

          {/* Title with yellow curved underline */}
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-[#021545] sm:text-5xl lg:text-6xl">
            Stay Connected With{" "}
            <span className="relative inline-block text-blue-600 pb-1">
              Satpuda
              <svg className="absolute bottom-0 left-0 h-2.5 w-full text-amber-500" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2.5xl text-sm leading-relaxed text-slate-500 sm:text-base lg:text-lg">
            Follow Satpuda College of Engineering & Polytechnic, Balaghat on our official social platforms for latest updates, achievements, events, campus life, placements and much more.
          </p>

          {/* Divider */}
          <div className="mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-20 bg-gradient-to-r from-transparent via-blue-200 to-transparent sm:w-28" />
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-600 shadow-sm shadow-blue-50/50">
              <Building2 className="h-4.5 w-4.5" />
            </span>
            <span className="h-px w-20 bg-gradient-to-r from-transparent via-blue-200 to-transparent sm:w-28" />
          </div>
        </motion.div>

        {/* 3 Columns Social Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <FacebookCard />
          <InstagramCard />
          <YouTubeCard />
        </motion.div>

        {/* Bottom Dark Blue Highlight Bar */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 28 },
            show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
          }}
          className="mt-12 overflow-hidden rounded-[2.25rem] border border-[#021545] bg-[#021545] shadow-[0_24px_80px_rgba(2,21,69,0.18)]"
        >
          <div className="flex flex-col gap-6 px-6 py-5 lg:flex-row lg:items-stretch lg:justify-between lg:gap-8">
            {/* Features Columns */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:flex-1">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3.5 rounded-2xl border border-white/5 bg-white/5 px-4.5 py-3.5 text-white">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-md shadow-black/10">
                    <feature.icon className="h-5 w-5" strokeWidth={2.5} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold tracking-tight text-white leading-tight">{feature.title}</h3>
                    <p className="mt-0.5 text-xs text-slate-300 leading-snug">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Handwritten script on right */}
            <div className="flex shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-white lg:min-w-[240px]">
              <p className="font-script text-3xl leading-tight tracking-wide text-white">
                Stay connected.
                <br />
                <span className="text-amber-400">Stay inspired.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { SocialMediaSection };