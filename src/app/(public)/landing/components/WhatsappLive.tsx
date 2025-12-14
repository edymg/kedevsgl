"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineWhatsApp, AiOutlineArrowUp } from "react-icons/ai";

const FloatingButtons = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showScrollUp && (
        <div className="fixed bottom-8 right-4 lg:bottom-8 lg:right-8 z-40">
          <a
            href="https://api.whatsapp.com/send/?phone=51988900827&text=¡Hola!%20Somos%20Kedevs.%20¿Buscas%20una%20solución%20SaaS%20a%20medida?%20%20Te%20ayudamos%20a:%20%0A✔%20Automatizar%20procesos%0A✔%20Escalar%20tu%20negocio%0A✔%20Reducir%20costos%0A%0A¡Agenda%20una%20llamada%20%20o%20cuéntanos%20tu%20necesidad!%20&type=phone_number&app_absent=0"
            target="_blank"
            aria-label="Contact us on WhatsApp"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
          >
            <span className="hidden lg:flex absolute inset-0 animate-ping opacity-60 rounded-full bg-green-400"></span>
            <AiOutlineWhatsApp className="w-7 h-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20" />
          </a>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
