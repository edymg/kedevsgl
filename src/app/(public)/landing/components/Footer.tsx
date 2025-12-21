import React from "react";
import { Instagram, YouTube, LinkedIn } from "@mui/icons-material";

import Link from "next/link";

import LogoHorizontal from "@/app/components/common/LogoHorizontal";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="px-5 py-12 mx-auto max-w-7xl sm:px-6 md:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 lg:gap-8 place-items-center">
          {/* Social */}
          <div className="space-y-4 sm:items-left lg:text-center hidden sm:block">
            <h3 className="text-sm font-semibold tracking-widest text-slate-900 uppercase text-center ">
              Social
            </h3>
            <div className="flex justify-center gap-2 sm:gap-4">
              {[
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/kedevs/",
                  label: "Instagram",
                },
                {
                  icon: YouTube,
                  href: "https://www.youtube.com/@kedevs",
                  label: "YouTube",
                },
                {
                  icon: LinkedIn,
                  href: "https://www.linkedin.com/company/kedevs/",
                  label: "LinkedIn",
                },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 transition-all rounded-full hover:bg-[#D2EA0A] hover:text-black hover:shadow-lg hover:-translate-y-1 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4 max-w-xs mx-auto sm:mx-0">
            <Link
              href="/"
              className="inline-block transition-transform hover:scale-105 active:scale-95"
              aria-label="Home"
            >
              <LogoHorizontal />
            </Link>
          </div>

          {/* Legal */}
          <div className="space-y-4 sm:text-center lg:text-center hidden sm:block">
            <h3 className="text-sm font-semibold tracking-widest text-slate-900 uppercase text-center">
              Legal
            </h3>
            <nav className="space-y-2.5">
              {[
                { name: "Política de Privacidad", href: "/privacidad" },
                { name: "Términos del servicio", href: "/terminos" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative block pb-0.5 text-sm text-slate-700 transition-all hover:text-[#065F46] text-center sm:text-left group"
                  target="_blank"
                >
                  <span className="inline-block">
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-[#065F46] transition-all group-hover:w-[calc(100%-0.5rem)] sm:left-0 sm:translate-x-0 sm:group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <p className="text-sm font-medium text-slate-800 text-center mb-[10px] sm:mb-8">
        © {new Date().getFullYear()} Kedevs. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
