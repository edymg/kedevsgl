"use client";

import React, { useState, useEffect } from "react";

import { AiOutlineWhatsApp } from "react-icons/ai";

const FloatingButtons = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showScrollUp && (
        <div className="fixed bottom-8 right-4 lg:bottom-8 lg:right-8 z-40">
          <a
            href="/#contact"
            aria-label="Contact us on WhatsApp"
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
