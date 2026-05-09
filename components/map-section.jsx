"use client";

export function MapSection() {
  return (<section className="bg-background">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-2">Locate Us</h2>
        <p className="text-muted-foreground">Lalbarra - Balaghat Road, Manegaon, Balaghat (M.P.)</p>
      </div>
    </div>
    <div className="h-96 w-full">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.5!2d80.165!3d21.875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSatpuda+College+of+Engineering!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="grayscale hover:grayscale-0 transition-all duration-500" />
    </div>
  </section>);
}
