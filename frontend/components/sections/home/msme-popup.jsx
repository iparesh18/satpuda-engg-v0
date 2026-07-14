"use client";
import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

export function MsmePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the popup automatically after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-[480px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in duration-300">
        
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col p-4 sm:p-5">
          
          {/* Header */}
          <div className="text-center mb-3 sm:mb-4 pt-2">
            <div className="flex items-center justify-center gap-2">
              <div className="hidden sm:flex flex-col gap-1">
                <span className="w-5 h-[2px] bg-yellow-400 rounded-full"></span>
                <span className="w-7 h-[2px] bg-yellow-400 rounded-full"></span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#021545] leading-tight">
                MSME Idea Hackathon 6.0
              </h2>
              <div className="hidden sm:flex flex-col gap-1">
                <span className="w-7 h-[2px] bg-yellow-400 rounded-full"></span>
                <span className="w-5 h-[2px] bg-yellow-400 rounded-full"></span>
              </div>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#021545] mt-1">
              Apply through our host institute
            </p>
          </div>

          {/* Main Image */}
          <div className="w-full rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white flex items-center justify-center">
            <img 
              src="/msme%20image.jpeg" 
              alt="MSME Idea Hackathon 6.0" 
              className="w-full object-contain max-h-[55vh]"
            />
          </div>

          {/* Footer Button */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="hidden sm:flex flex-col gap-1.5 items-end">
              <span className="w-5 h-[2.5px] bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-[2.5px] bg-yellow-400 rounded-full"></span>
            </div>
            
            <a 
              href="https://my.msme.gov.in/inc/Hackathon_Reg.aspx" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[#0a3187] hover:bg-[#021545] text-white px-6 py-2.5 rounded-xl font-bold text-base sm:text-lg transition-colors shadow-lg w-full sm:w-auto"
            >
              Register Now
              <ArrowRight className="h-5 w-5" />
            </a>

            <div className="hidden sm:flex flex-col gap-1.5 items-start">
              <span className="w-5 h-[2.5px] bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-[2.5px] bg-yellow-400 rounded-full"></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
