"use client";
import { Header, Footer } from "../../index.js";
import { EventsHero } from "../../sections/events-news/events-hero.jsx";
import { EventsList } from "../../sections/events-news/events-list.jsx";
import { EventsGallery } from "../../sections/events-news/events-gallery.jsx";

export default function EventsNewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <EventsHero />
        <EventsList />
        <EventsGallery />
      </main>
      <Footer />
    </div>
  );
}
