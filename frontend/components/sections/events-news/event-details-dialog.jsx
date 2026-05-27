"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "../../ui/dialog.jsx";
import { Button } from "../../ui/button.jsx";
import { Calendar, MapPin, Clock, ArrowRight, Tag, BookOpen, AlertCircle, XIcon } from "lucide-react";

export function EventDetailsDialog({ isOpen, onClose, event, onRegister }) {
  if (!event) return null;

  const handleRegisterClick = () => {
    onClose();
    setTimeout(() => {
      onRegister(event.title, event.date);
    }, 150);
  };

  // Map category to nice tags/colors
  const getBadgeColor = (category) => {
    switch (category?.toLowerCase()) {
      case "technical":
      case "competitions":
        return "bg-purple-600 text-white";
      case "cultural":
        return "bg-orange-500 text-white";
      case "sports":
        return "bg-cyan-600 text-white";
      case "workshops":
        return "bg-green-600 text-white";
      case "seminars":
        return "bg-blue-600 text-white";
      default:
        return "bg-accent text-white";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent showCloseButton={false} className="fixed max-w-xl bg-background border border-border p-0 overflow-hidden rounded-3xl shadow-2xl flex flex-col max-h-[90vh]">
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-md bg-black/45 border border-white/20 text-white hover:bg-black/65 transition-all duration-200 z-50 cursor-pointer shadow-md hover:scale-105 active:scale-95"
          aria-label="Close"
        >
          <XIcon className="w-4 h-4" />
        </button>

        {/* Scrollable Container */}
        <div 
          className="overflow-y-auto flex-1 scrollbar-thin overscroll-contain" 
          style={{WebkitOverflowScrolling: 'touch'}}
          onWheel={(e) => {
            e.stopPropagation();
          }}
          onTouchMove={(e) => {
            e.stopPropagation();
          }}
        >
          {/* Cover Photo */}
          <div className="relative h-56 sm:h-64 w-full bg-muted overflow-hidden shrink-0">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            
            {/* Floating Category Badge */}
            <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full backdrop-blur-md bg-black/35 border border-white/20 flex items-center gap-2">
              <Tag className="w-3.5 h-3.5 text-accent" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">{event.category}</span>
            </div>
          </div>

          {/* Card Body Details */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight leading-tight">
                {event.title}
              </h3>
              
              {/* Meta details strip */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-xs text-muted-foreground font-semibold">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent shrink-0" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-border/60" />

            {/* Description Section */}
            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-muted-foreground">About the Event</h4>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {event.description} This event is designed to foster learning, networking, and creative excellence among students. Attendees will get to interact with industry mentors, experience practical learning modules, and collaborate on engaging activities.
              </p>
            </div>

            {/* Highlights / What you'll get */}
            <div className="rounded-2xl bg-secondary/40 border border-border/50 p-4 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-accent" /> Key Takeaways
              </h4>
              <ul className="text-xs text-foreground/75 leading-relaxed space-y-1.5 list-disc pl-5">
                <li>Comprehensive understanding of {event.title} core concepts.</li>
                <li>Hands-on practical demonstration and project-based experience.</li>
                <li>Certificate of Participation for all successfully registered candidates.</li>
                <li>Interactive QA and networking session with industry experts.</li>
              </ul>
            </div>

            {/* Registration Notice */}
            <div className="flex items-start gap-2.5 bg-accent/5 border border-accent/10 rounded-2xl p-4 text-xs text-muted-foreground">
              <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-foreground mb-0.5">Important Registration Note</p>
                <p>Registration is completely free but mandatory for entry. Limited seats are available on a first-come, first-served basis.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <DialogFooter className="bg-secondary/20 border-t border-border/40 p-6 flex flex-col sm:flex-row gap-3 shrink-0">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="flex-1 h-11 border border-border text-foreground hover:bg-muted font-bold rounded-xl"
          >
            Go Back
          </Button>
          <Button
            type="button"
            onClick={handleRegisterClick}
            className="flex-1 h-11 bg-accent text-white hover:bg-accent/90 flex items-center justify-center gap-2 font-semibold shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-105 active:scale-95 rounded-xl"
          >
            Register for Event
            <ArrowRight className="w-4 h-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
