"use client";
import InfiniteMenu from "../../bits/infinite-menu.jsx";
import { motion } from "framer-motion";
import BlurText from "../../bits/blur-text.jsx";
import { MousePointer2 } from "lucide-react";

const SUCCESS_ITEMS = [
  {
    image: '/images/placement/company-01.jpeg',
    link: '#',
    title: 'Placement Achiever 01',
    description: 'Company 01 - Successfully placed through Satpuda College placement drive.'
  },
  {
    image: '/images/placement/company-02.jpeg',
    link: '#',
    title: 'Placement Achiever 02',
    description: 'Company 02 - A great career milestone achieved with college support.'
  },
  {
    image: '/images/placement/company-03.jpeg',
    link: '#',
    title: 'Placement Achiever 03',
    description: 'Company 03 - Industry-ready skills from Satpuda engineering programs.'
  },
  {
    image: '/images/placement/company-04.jpeg',
    link: '#',
    title: 'Placement Achiever 04',
    description: 'Company 04 - Excelling in career with Satpuda education foundation.'
  },
  {
    image: '/images/placement/company-05.jpeg',
    link: '#',
    title: 'Placement Achiever 05',
    description: 'Company 05 - Professional growth story starting from Satpuda.'
  },
  {
    image: '/images/placement/company-06.jpeg',
    link: '#',
    title: 'Placement Achiever 06',
    description: 'Company 06 - Success achieved through dedicated training and mentorship.'
  },
  {
    image: '/images/placement/company-07.jpeg',
    link: '#',
    title: 'Placement Achiever 07',
    description: 'Company 07 - Thriving in role with skills learned at Satpuda.'
  },
  {
    image: '/images/placement/company-08.jpeg',
    link: '#',
    title: 'Placement Achiever 08',
    description: 'Company 08 - Career launched successfully post-graduation.'
  },
  {
    image: '/images/placement/company-09.jpeg',
    link: '#',
    title: 'Placement Achiever 09',
    description: 'Company 09 - Making impact in the industry as Satpuda alumnus.'
  },
  {
    image: '/images/placement/company-10.jpeg',
    link: '#',
    title: 'Placement Achiever 10',
    description: 'Company 10 - Realizing dreams with quality education from Satpuda.'
  },
  {
    image: '/images/placement/company-11.jpeg',
    link: '#',
    title: 'Placement Achiever 11',
    description: 'Company 11 - Excellence in career with Satpuda foundation.'
  },
  {
    image: '/images/placement/company-12.jpeg',
    link: '#',
    title: 'Placement Achiever 12',
    description: 'Company 12 - Success story of dedication and quality learning.'
  },
  {
    image: '/images/placement/company-13.jpeg',
    link: '#',
    title: 'Placement Achiever 13',
    description: 'Company 13 - Building successful career with industry exposure.'
  },
  {
    image: '/images/placement/company-14.jpeg',
    link: '#',
    title: 'Placement Achiever 14',
    description: 'Company 14 - Professional excellence achieved at Satpuda.'
  },
  {
    image: '/images/placement/company-15.jpeg',
    link: '#',
    title: 'Placement Achiever 15',
    description: 'Company 15 - Career advancement through quality education.'
  },
  {
    image: '/images/placement/company-16.jpeg',
    link: '#',
    title: 'Placement Achiever 16',
    description: 'Company 16 - Success milestone with Satpuda engineering programs.'
  },
  {
    image: '/images/placement/company-17.jpeg',
    link: '#',
    title: 'Placement Achiever 17',
    description: 'Company 17 - Living the dream career journey from Satpuda College.'
  }
];

export function SuccessGlobeSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-black"
          >
            The Success <br />
            <span className="text-primary italic">Universe</span>
          </motion.h2>
          <BlurText
            text="Interact with our global network of successful alumni."
            className="text-muted-foreground text-xl mt-6 max-w-2xl mx-auto"
          />
          
          {/* Interaction Instruction Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="inline-flex items-center gap-3 px-6 py-3 mt-10 rounded-full bg-primary/10 border border-primary/20"
          >
            <MousePointer2 className="w-5 h-5 text-primary animate-bounce" />
            <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Drag to rotate & Explore</span>
          </motion.div>
        </div>
      </div>

      <div className="relative w-full h-[800px] md:h-[1000px] -mt-40">
        <InfiniteMenu items={SUCCESS_ITEMS} scale={1.2} />
      </div>

      {/* Subtle Background Elements for White Theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}

