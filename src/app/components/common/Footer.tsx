"use client";

import React from "react";
import LogoHorizontal from "./LogoHorizontal";

import {
  KEDEVS_PHONE_NUMBER,
  KEDEVS_PHONE_NUMBER_WSP,
} from "@/utils/whatsappUtils";
import Link from "next/link";

import {
  YouTube,
  Instagram,
  LinkedIn,
  Mail,
  MarkEmailUnread,
} from "@mui/icons-material";

const experiences = [
  "Desarrollo Web",
  "Desarrollo Movil",
  "Automatización de Procesos",
];

const socialLinks = [
  { icon: YouTube, href: "https://youtube.com/@kedevs" },
  { icon: Instagram, href: "https://instagram.com/kedevs" },
  { icon: LinkedIn, href: "https://linkedin.com/company/kedevs" },
];

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="pt-16 lg:mx-32 mx-5 text-zinc-500 tracking-wide leading-loose rounde">
      <hr />

      <div className="bg-gray-100 text-gray-800 my-8 rounded-lg">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Experiencia</h3>
              <ul className="space-y-2">
                {experiences.map((experience, index) => (
                  <li key={index}>
                    <Link
                      href={`/projects`}
                      className="hover:text-gray-600 transition-colors"
                    >
                      {experience}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  <a
                    href="/contact"
                    className="hover:text-gray-600 transition-colors"
                  >
                    kedevs.pe@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <MarkEmailUnread className="mr-2 h-5 w-5" />
                  <Link
                    href={`https://wa.me/${KEDEVS_PHONE_NUMBER_WSP}?text=Hola,%20quisiera%20información%20sobre%20sus%20servicios.`}
                    className="hover:text-gray-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {KEDEVS_PHONE_NUMBER}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-600 transition-colors"
                  >
                    <Icon className="h-6 w-6 text-gray-600 hover:text-gray-800" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full">
        <div className="border-t border-gray-300 flex-1"></div>
        <div className="mx-4">
          <LogoHorizontal />
        </div>
        <div className="border-t border-gray-300 flex-1"></div>
      </div>

      <main className="mb-4 mt-2">
        <div className="text-center">
          <h1 className="text-sm">
            COPYRIGHT © 2024-{currentYear} Kedevs, INC.
          </h1>
          <p className="text-xs">Todos los derechos reservados</p>
        </div>
      </main>
    </footer>
  );
}

export default Footer;
