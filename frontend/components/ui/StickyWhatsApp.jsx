import React from "react";


const StickyWhatsApp = () => {
  return (
    <a
      href="https://wa.me/916262604111"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-20
        right-4
        md:bottom-20
        md:right-6
        z-999
        group
      "
    >
      <div
        className="
         bg-[#25D366]
          p-3
          md:p-4
          rounded-full
          shadow-lg
          transition-all
          duration-300
          group-hover:scale-110
        "
      >
        <img
          src='/whatsapp.png'
          alt="WhatsApp"
          className="w-7 h-7 md:w-8 md:h-8"
        />
      </div>
    </a>
  );
};

export default StickyWhatsApp;
