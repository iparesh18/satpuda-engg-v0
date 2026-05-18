"use client";
import InfiniteMenu from "../../bits/infinite-menu.jsx";
import { motion } from "framer-motion";
import BlurText from "../../bits/blur-text.jsx";
import { MousePointer2 } from "lucide-react";

const SUCCESS_ITEMS = [
  {
    image: '/images/placement/company-01.jpeg',
    link: '#',
    title: 'DEWANG MALEWAR',
    description: 'FIRST STEP INNOVATION'
  },
  {
    image: '/images/placement/company-02.jpeg',
    link: '#',
    title: 'VISHAKHA BAGHELE',
    description: 'FIRST STEP INNOVATION'
  },
  {
    image: '/images/placement/company-03.jpeg',
    link: '#',
    title: 'PREKSHA DWIVEDI',
    description: 'FIRST STEP INNOVATION'
  },
  {
    image: '/images/placement/company-04.jpeg',
    link: '#',
    title: 'ANKUSH NANDAGOULI',
    description: 'FIRST STEP INNOVATION'
  },
  {
    image: '/images/placement/company-05.jpeg',
    link: '#',
    title: 'RAJNEESH ASHWALE',
    description: 'FIRST STEP INNOVATION'
  },
  {
    image: '/images/placement/company-06.jpeg',
    link: '#',
    title: 'ABHISHEK MANESHWAR',
    description: 'GR INFRAPROJECTS LTD.'
  },
  {
    image: '/images/placement/company-07.jpeg',
    link: '#',
    title: 'RANVEER SHARMA',
    description: 'LLOYDS METALS AND ENERGY LIMITED'
  },
  {
    image: '/images/placement/company-08.jpeg',
    link: '#',
    title: 'HARSHIT SELOKAR',
    description: 'GR INFRAPROJECTS LTD.'
  },
  {
    image: '/images/placement/company-09.jpeg',
    link: '#',
    title: 'ANKIT BANDHE',
    description: 'LLOYDS METALS AND ENERGY LIMITED'
  },
  {
    image: '/images/placement/company-10.jpeg',
    link: '#',
    title: 'HIMANSHU DORAS',
    description: 'GR INFRAPROJECTS LTD.'
  },
  {
    image: '/images/placement/company-11.jpeg',
    link: '#',
    title: 'DISHANT THAKRE',
    description: 'LLOYDS METALS AND ENERGY LIMITED'
  },
  {
    image: '/images/placement/company-12.jpeg',
    link: '#',
    title: 'OM DUBEY',
    description: 'GR INFRAPROJECTS LTD.'
  },
  {
    image: '/images/placement/company-13.jpeg',
    link: '#',
    title: 'VINENDRA PAGARWAR',
    description: 'GR INFRAPROJECTS LTD.'
  },
  {
    image: '/images/placement/company-14.jpeg',
    link: '#',
    title: 'DIPANSHU',
    description: 'LLOYDS METALS AND ENERGY LIMITED'
  },
  {
    image: '/images/placement/company-15.jpeg',
    link: '#',
    title: 'NAVEEN GAJBHIYE',
    description: 'GR INFRAPROJECTS LTD.'
  },
  {
    image: '/images/placement/company-16.jpeg',
    link: '#',
    title: 'VIJESH KUMAR',
    description: 'LLOYDS METALS AND ENERGY LIMITED'
  },
  {
    image: '/images/placement/company-17.jpeg',
    link: '#',
    title: 'ADNAN KHAN',
    description: 'LLOYDS METALS AND ENERGY LIMITED'
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

