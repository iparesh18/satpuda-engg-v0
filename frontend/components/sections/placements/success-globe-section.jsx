"use client";
import InfiniteMenu from "../../bits/infinite-menu.jsx";
import { motion } from "framer-motion";
import BlurText from "../../bits/blur-text.jsx";
import { MousePointer2 } from "lucide-react";

const SUCCESS_ITEMS = [
  {
    image: '/images/placement/company-01.webp',
    link: '#',
    title: 'DEWANG MALEWAR',
    description: 'FIRST STEP INNOVATION'
  },
  {
    image: '/images/placement/company-02.webp',
    link: '#',
    title: 'VISHAKHA BAGHELE',
    description: 'FIRST STEP INNOVATION'
  },
  {
    image: '/images/placement/company-03.webp',
    link: '#',
    title: 'PREKSHA DWIVEDI',
    description: 'ZENUS GROUP'
  },
  {
    image: '/images/placement/company-04.webp',
    link: '#',
    title: 'ANKUSH NANDAGOULI',
    description: 'FIRST STEP INNOVATION'
  },
  {
    image: '/images/placement/company-05.webp',
    link: '#',
    title: 'RAJNEESH ASHWALE',
    description: 'FIRST STEP INNOVATION'
  },
  {
    image: '/images/placement/company-06.webp',
    link: '#',
    title: 'ABHISHEK MANESHWAR',
    description: 'GR INFRAPROJECTS LTD.'
  },
  {
    image: '/images/placement/company-07.webp',
    link: '#',
    title: 'RANVEER SHARMA',
    description: 'LLOYDS METALS AND ENERGY LIMITED'
  },
  {
    image: '/images/placement/company-08.webp',
    link: '#',
    title: 'HARSHIT SELOKAR',
    description: 'GR INFRAPROJECTS LTD.'
  },
  {
    image: '/images/placement/company-09.webp',
    link: '#',
    title: 'ANKIT BANDHE',
    description: 'LLOYDS METALS AND ENERGY LIMITED'
  },
  {
    image: '/images/placement/company-10.webp',
    link: '#',
    title: 'HIMANSHU DORAS',
    description: 'GR INFRAPROJECTS LTD.'
  },
  {
    image: '/images/placement/company-11.webp',
    link: '#',
    title: 'DISHANT THAKRE',
    description: 'LLOYDS METALS AND ENERGY LIMITED'
  },
  {
    image: '/images/placement/company-12.webp',
    link: '#',
    title: 'OM DUBEY',
    description: 'GR INFRAPROJECTS LTD.'
  },
  {
    image: '/images/placement/company-13.webp',
    link: '#',
    title: 'VINENDRA PAGARWAR',
    description: 'GR INFRAPROJECTS LTD.'
  },
  {
    image: '/images/placement/company-14.webp',
    link: '#',
    title: 'DIPANSHU',
    description: 'LLOYDS METALS AND ENERGY LIMITED'
  },
  {
    image: '/images/placement/company-15.webp',
    link: '#',
    title: 'NAVEEN GAJBHIYE',
    description: 'GR INFRAPROJECTS LTD.'
  },
  {
    image: '/images/placement/company-16.webp',
    link: '#',
    title: 'VIJESH KUMAR',
    description: 'LLOYDS METALS AND ENERGY LIMITED'
  },
  {
    image: '/images/placement/company-17.webp',
    link: '#',
    title: 'ADNAN KHAN',
    description: 'LLOYDS METALS AND ENERGY LIMITED'
  },
  {
    image: '/images/placement/18.webp',
    link: '#',
    title: 'SANJEET PANCHESWAR',
    description: 'GROUP R MINING & EXPLORATION INDIA PVT LTD'
  },
  {
    image: '/images/placement/19.webp',
    link: '#',
    title: 'MITHLESH KHERWAR',
    description: 'GROUP R MINING & EXPLORATION INDIA PVT LTD'
  },
  {
    image: '/images/placement/Ak.webp',
    link: '#',
    title: 'ASHISH KOLTE',
    description: 'WMW SRL BACAU (EUROPE)'
  },
  {
    image: '/images/placement/abhay rahangdale.webp',
    link: '#',
    title: 'ABHAY RAHANGDALE',
    description: 'ZENUS GROUP'
  },
  {
    image: '/images/placement/gagan patle.webp',
    link: '#',
    title: 'GAGAN PATLE',
    description: 'ZENUS GROUP'
  },
  {
    image: '/images/placement/himanshu patle.webp',
    link: '#',
    title: 'HIMANSHU PATLE',
    description: 'ZENUS GROUP'
  },
  {
    image: '/images/placement/praful bithle.webp',
    link: '#',
    title: 'PRAFUL BITHLE',
    description: 'ZENUS GROUP'
  },
  {
    image: '/images/placement/tarun bisen.webp',
    link: '#',
    title: 'TARUN BISEN',
    description: 'ZENUS GROUP'
  },
  {
    image: '/images/placement/vinendra pagarwar.webp',
    link: '#',
    title: 'VINENDRA PAGARWAR',
    description: 'ZENUS GROUP'
  },
  {
    image: '/images/placement/yash Shrivastava.webp',
    link: '#',
    title: 'YASH SHRIVASTAVA',
    description: 'ZENUS GROUP'
  },
  {
    image: '/images/placement/yojna pardhi.webp',
    link: '#',
    title: 'YOJNA PARDHI',
    description: 'ZENUS GROUP'
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

