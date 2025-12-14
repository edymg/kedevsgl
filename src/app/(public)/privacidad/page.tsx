import React, { Children } from "react";
import type { Metadata } from "next";
import NavBar from "../landing/components/Navbar";
import Footer from "../landing/components/Footer";
import WhatsappLive from "../landing/components/WhatsappLive";

import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Privacy Policy|Kedevs",
  description: "Our Privacy Policy",
  openGraph: {
    images: [
      {
        url: "/kedevs.jpg",
        width: 1200,
        height: 630,
        alt: "kedevs logo",
      },
    ],
  },
};

function page() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  return (
    <>
      <Toaster />
      <NavBar />
      <section className="relative w-full h-screen flex items-center  justify-center text-white ">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover "
        >
          <source src="TechSolutions.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="relative z-10 text-center max-w-3xl px-6">
          <ul className="text-4xl md:text-6xl font-bold">
            <li>
              <p className="description">
                <a href="/privacidad" rel="bookmark">
                  Politica de Privacidad
                </a>
              </p>
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-4 hover:text-[#D2EA0A] transition">
            Última revisión: 1 of {currentMonth} {currentYear}
          </h3>
          <p className="space-y-2 hover:text-[#D2EA0A] transition">
            En Kedevs, INC. respetamos y protegemos la privacidad de nuestros
            usuarios. A continuación, te explicamos cómo recopilamos, utilizamos
            y protegemos tu información.
          </p>
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1e2e] via-[#112240] to-[#0a192f] w-full max-w-6xl mx-auto rounded-2xl shadow-2xl backdrop-blur-sm border border-[#1fd856]/20 my-10 px-6 sm:px-8 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1fd856] to-[#D2EA0A] mb-4">
              Política de Privacidad
            </h1>
            <p className="text-lg text-[#ccd6f6]">
              Última actualización:{" "}
              {new Date().toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="space-y-8">
            {/* Information We Collect */}
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="mt-1.5 h-3 w-3 rounded-full bg-[#1fd856] flex-shrink-0 group-hover:bg-[#D2EA0A] transition-colors"></div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#9ff0b7] hover:text-[#D2EA0A] transition-colors mb-4">
                    Información que Recopilamos
                  </h2>
                  <div className="bg-[#112240]/50 p-6 rounded-lg border border-[#1e3a5e] hover:border-[#1fd856]/50 transition-colors">
                    <p className="text-[#ccd6f6] mb-4">
                      A través de nuestros formularios en Facebook Ads e
                      Instagram Ads, podemos recopilar los siguientes datos
                      personales:
                    </p>
                    <ul className="space-y-3 pl-5">
                      <li className="flex items-start">
                        <span className="text-[#1fd856] mr-2 mt-1">•</span>
                        <span className="text-[#ccd6f6]">Nombre Completo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#1fd856] mr-2 mt-1">•</span>
                        <span className="text-[#ccd6f6]">
                          Correo electrónico
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#1fd856] mr-2 mt-1">•</span>
                        <span className="text-[#ccd6f6]">
                          Número de teléfono
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#1fd856] mr-2 mt-1">•</span>
                        <span className="text-[#ccd6f6]">
                          Nombre de la empresa
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Use of Information */}
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="mt-1.5 h-3 w-3 rounded-full bg-[#1fd856] flex-shrink-0 group-hover:bg-[#D2EA0A] transition-colors"></div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#9ff0b7] hover:text-[#D2EA0A] transition-colors mb-4">
                    Uso de la Información
                  </h2>
                  <div className="bg-[#112240]/50 p-6 rounded-lg border border-[#1e3a5e] hover:border-[#1fd856]/50 transition-colors">
                    <p className="text-[#ccd6f6] mb-4">
                      Los datos proporcionados serán utilizados exclusivamente
                      para los siguientes fines:
                    </p>
                    <ul className="space-y-3 pl-5">
                      <li className="flex items-start">
                        <span className="text-[#1fd856] mr-2 mt-1">•</span>
                        <span className="text-[#ccd6f6]">
                          Contactarte y ofrecerte información personalizada
                          sobre nuestros servicios de desarrollo de software a
                          medida
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#1fd856] mr-2 mt-1">•</span>
                        <span className="text-[#ccd6f6]">
                          Responder a tus consultas o solicitudes específicas
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#1fd856] mr-2 mt-1">•</span>
                        <span className="text-[#ccd6f6]">
                          Enviarte actualizaciones o promociones relacionadas
                          con nuestros servicios (siempre con tu consentimiento
                          previo)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="mt-1.5 h-3 w-3 rounded-full bg-[#1fd856] flex-shrink-0 group-hover:bg-[#D2EA0A] transition-colors"></div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#9ff0b7] hover:text-[#D2EA0A] transition-colors mb-4">
                    Protección de Datos
                  </h2>
                  <div className="bg-[#112240]/50 p-6 rounded-lg border border-[#1e3a5e] hover:border-[#1fd856]/50 transition-colors">
                    <p className="text-[#ccd6f6] mb-4">
                      En Kedevs, nos comprometemos a proteger la
                      confidencialidad de tu información. Por ello:
                    </p>
                    <ul className="space-y-3 pl-5">
                      <li className="flex items-start">
                        <span className="text-[#1fd856] mr-2 mt-1">•</span>
                        <span className="text-[#ccd6f6]">
                          Tus datos no serán compartidos con terceros sin tu
                          autorización previa
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#1fd856] mr-2 mt-1">•</span>
                        <span className="text-[#ccd6f6]">
                          Implementamos medidas técnicas y organizativas para
                          proteger tu información contra accesos no autorizados,
                          uso indebido, pérdida o alteración
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* User Options - Only section with WhatsAppLive */}
            <div className="group relative">
              <div className="flex items-start gap-4">
                <div className="mt-1.5 h-3 w-3 rounded-full bg-[#1fd856] flex-shrink-0 group-hover:bg-[#D2EA0A] transition-colors"></div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#9ff0b7] hover:text-[#D2EA0A] transition-colors mb-4">
                    Opciones del Usuario
                  </h2>
                  <div className="bg-[#112240]/50 p-6 rounded-lg border border-[#1e3a5e] hover:border-[#1fd856]/50 transition-colors">
                    <p className="text-[#ccd6f6] mb-4">
                      Puedes solicitar la modificación, actualización o
                      eliminación de tus datos personales en cualquier momento.
                      Solo tienes que contactarnos a través de:
                    </p>
                    <ul className="space-y-3 pl-5">
                      <li className="flex items-start">
                        <span className="text-[#1fd856] mr-2 mt-1">•</span>
                        <span className="text-[#ccd6f6]">
                          Correo electrónico:{" "}
                          <a
                            href="mailto:kedevs.pe@gmail.com"
                            className="text-[#9ff0b7] hover:text-[#D2EA0A] underline underline-offset-4 transition-colors"
                            aria-label="Enviar correo electrónico a Kedevs"
                          >
                            kedevs.pe@gmail.com
                          </a>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#1fd856] mr-2 mt-1">•</span>
                        <span className="text-[#ccd6f6]">
                          WhatsApp:{" "}
                          {/* <a
                            href="https://wa.me/51988900827"
                            className="text-[#9ff0b7] hover:text-[#D2EA0A] underline underline-offset-4 transition-colors"
                            aria-label="Contactar a Kedevs por WhatsApp"
                          >
                            +51 988 900 827
                          </a> */}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* WhatsAppLive component positioned here */}
              <WhatsappLive />
            </div>

            {/* Policy Changes */}
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="mt-1.5 h-3 w-3 rounded-full bg-[#1fd856] flex-shrink-0 group-hover:bg-[#D2EA0A] transition-colors"></div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#9ff0b7] hover:text-[#D2EA0A] transition-colors mb-4">
                    Cambios en Esta Política
                  </h2>
                  <div className="bg-[#112240]/50 p-6 rounded-lg border border-[#1e3a5e] hover:border-[#1fd856]/50 transition-colors">
                    <p className="text-[#ccd6f6]">
                      Nos reservamos el derecho de actualizar esta política en
                      cualquier momento. Cualquier cambio será comunicado a
                      través de nuestras plataformas.
                    </p>
                    <p className="text-[#ccd6f6] mt-4">
                      Si tienes preguntas o inquietudes sobre esta política de
                      privacidad, no dudes en contactarnos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default page;
