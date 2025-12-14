import React, { Children } from "react";
import type { Metadata } from "next";
import NavBar from "../landing/components/Navbar";
import Footer from "../landing/components/Footer";

import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Term and Conditions | Kedevs",
  description: "Our Terms and Conditions",
  openGraph: {
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "kedevs logo",
      },
    ],
  },
};

function page() {
  return (
    <>
      <Toaster />
      <NavBar />
      <section className="relative w-full h-screen flex items-center  justify-center text-white  ">
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
                <a href="/terminos" rel="bookmark">
                  Términos del servicio
                </a>
              </p>
            </li>
          </ul>
          <p className="hover:text-[#D2EA0A] transition">
            Se ruega leer con atención los siguientes Términos y Condiciones.
          </p>
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1e2e] via-[#112240] to-[#0a192f] w-full max-w-6xl mx-auto rounded-2xl shadow-2xl backdrop-blur-sm border border-[#1fd856]/20 my-10 px-6 sm:px-8 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1fd856] to-[#D2EA0A] mb-4">
              Términos y Condiciones
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

          <div className="space-y-10">
            {/* Introduction */}
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="mt-1.5 h-3 w-3 rounded-full bg-[#1fd856] flex-shrink-0 group-hover:bg-[#D2EA0A] transition-colors"></div>
                <div>
                  <p className="text-lg text-[#1fd856]">
                    <strong>
                      Los siguientes Términos y Condiciones rigen el uso de cada
                      uno de los sitios Web ubicados o vinculados a la URL{" "}
                    </strong>
                    <a
                      href="https://www.kedevs.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D2EA0A] transition-colors underline underline-offset-4 decoration-[#1fd856]/50 text-[#9ff0b7]"
                    >
                      https://www.kedevs.tech
                    </a>
                    <strong>
                      {" "}
                      y los servicios que se pudieran ofrecer en el sitio; la
                      información proporcionada en los sitios y la posibilidad
                      de registrarse en nuestra base de datos, recibir boletines
                      y correos electrónicos promocionales; así como también
                      cualquier enlace relacionado (colectivamente, nuestros
                      {" Sitios"}).
                    </strong>
                  </p>
                  <p className="text-[#ccd6f6] mt-4 pl-7 border-l-2 border-[#1fd856]/30">
                    Al utilizar cualquiera de nuestros Sitios, usted comprende y
                    acepta expresamente estar legalmente obligado por estos
                    Términos y Condiciones y cumplir estos Términos y
                    Condiciones y todas las leyes y regulaciones aplicables que
                    rigen nuestros Sitios.
                  </p>
                  <p className="text-[#ccd6f6] mt-4 pl-7 border-l-2 border-[#1fd856]/30">
                    Los Términos y Condiciones sustituirán a los términos o
                    condiciones posteriores incluidos en cualquier orden de
                    compra, independientemente de que dichos términos o
                    condiciones estén o no firmados por Kedevs.INC (
                    {" Kedevs.INC, nosotros"}).
                  </p>
                  <p className="text-[#ccd6f6] mt-4 pl-7 border-l-2 border-[#1fd856]/30">
                    Nos reservamos el derecho de cambiar estos Términos y
                    Condiciones en cualquier momento, con vigencia inmediata
                    después de su publicación en nuestros Sitios. Si viola lo
                    estipulado en estos Términos y Condiciones, podemos
                    rescindir su uso de los Sitios, prohibirle el uso futuro de
                    los Sitios y/o tomar las medidas legales apropiadas en su
                    contra.
                  </p>
                </div>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="group">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#9ff0b7] hover:text-[#D2EA0A] transition-colors flex items-center gap-3 mb-4">
                <span className="h-2 w-2 rounded-full bg-[#1fd856] group-hover:bg-[#D2EA0A] transition-colors"></span>
                AVISO DE DERECHOS DE AUTOR Y MARCA REGISTRADA
              </h2>
              <p className="text-[#ccd6f6] pl-7 border-l-2 border-[#1fd856]/30">
                Kedevs.INC tiene los derechos de autor de todo el material
                disponible en nuestros Sitios, a menos que se indique lo
                contrario. Todos los derechos están reservados y el contenido no
                puede reproducirse, descargarse, difundirse ni transferirse, de
                ninguna forma ni por ningún medio, excepto con el previo
                consentimiento por escrito de Kedevs.INC o como se indica a
                continuación.
              </p>
              <p className="text-[#ccd6f6] mt-4 pl-7 border-l-2 border-[#1fd856]/30">
                Uso permitido: Los usuarios pueden descargar páginas u otro
                contenido para su propio uso personal en una sola computadora,
                pero ninguna parte de dicho contenido puede reproducirse,
                descargarse, difundirse o transferirse de ninguna forma ni por
                ningún medio, excepto con el acuerdo previo por escrito de
                Kedevs.INC y con atribución expresa a este. Usted acepta que
                solo está autorizado para visitar, ver y retener una copia de
                las páginas de los Sitios para su uso personal, y que no deberá
                duplicar, descargar, publicar, modificar o distribuir el
                material de los Sitios para ningún otro propósito que no sea
                para uso personal, a menos que lo autoricemos específicamente a
                hacerlo. También acepta no hacer un enlace profundo al sitio
                para ningún propósito, a menos que lo autoricemos
                específicamente a hacerlo.
              </p>
            </div>

            {/* Disclaimer Section */}
            <div className="group">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#9ff0b7] hover:text-[#D2EA0A] transition-colors flex items-center gap-3 mb-4">
                <span className="h-2 w-2 rounded-full bg-[#1fd856] group-hover:bg-[#D2EA0A] transition-colors"></span>
                AVISO LEGAL GENERAL Y EXONERACIÓN DE RESPONSABILIDAD
              </h2>
              <p className="text-[#ccd6f6] pl-7 border-l-2 border-[#1fd856]/30">
                Ponemos a disposición nuestros Sitios y la información y
                servicios contenidos en ellos {" en el estado en que se"}
                {"encuentran"}, y si bien Kedevs.INC hace todo lo posible para
                presentar información precisa y confiable en nuestros Sitios,
                Kedevs.INC no respalda, aprueba ni certifica dicha información,
                ni garantiza la exactitud, integridad, eficacia u actualidad de
                dicha información. El uso de dicha información es voluntario, y
                solo se debe confiar en ella después de una revisión
                independiente realizada por expertos calificados.
              </p>
              <p className="text-[#ccd6f6] mt-4 pl-7 border-l-2 border-[#1fd856]/30">
                La referencia contenida aquí a cualquier producto, proceso o
                servicio comercial específico no constituye ni implica respaldo,
                recomendación o favoritismo por parte de Kedevs.INC.
              </p>
              <p className="text-[#ccd6f6] mt-4 pl-7 border-l-2 border-[#1fd856]/30">
                En ciertos lugares de este sitio, se puede acceder a{" "}
                {" enlaces"}
                directos a otros sitios Web. Dichos sitios externos contienen
                información creada, publicada, mantenida o cargada por
                instituciones u organizaciones independientes de Kedevs.INC.
                Kedevs.INC no respalda, aprueba, certifica ni controla estos
                sitios externos y no garantiza la precisión, integridad,
                eficacia o actualidad de la información que se encuentra en
                dichos sitios. El uso de cualquier información obtenida en
                dichos sitios es voluntario, y solo se debe confiar en ella
                después de una revisión independiente realizada por expertos
                calificados.
              </p>
              <p className="text-[#ccd6f6] mt-4 pl-7 border-l-2 border-[#1fd856]/30">
                Kedevs.INC no asume ninguna responsabilidad por las
                consecuencias derivadas del uso de la información contenida
                aquí, o del uso de la información obtenida en sitios enlazados,
                o de cualquier aspecto del contenido de dicha información.
                Kedevs.INC no se hace responsable y renuncia expresamente a toda
                responsabilidad por daños y perjuicios de cualquier tipo que
                surjan del uso, referencia, dependencia o confianza en dicha
                información.
              </p>
            </div>

            {/* Privacy Policy */}
            <div className="group">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#9ff0b7] hover:text-[#D2EA0A] transition-colors flex items-center gap-3 mb-4">
                <span className="h-2 w-2 rounded-full bg-[#1fd856] group-hover:bg-[#D2EA0A] transition-colors"></span>
                POLÍTICA DE PRIVACIDAD
              </h2>
              <p className="text-[#ccd6f6] pl-7 border-l-2 border-[#1fd856]/30">
                Kedevs.INC valora la privacidad individual y queremos darles a
                los visitantes de nuestro Sitio la oportunidad de saber qué
                información recopilamos sobre ellos y cómo la tratamos. Si desea
                obtener más información, visite nuestra página de política de
                privacidad.
              </p>
            </div>

            {/* Divisibility */}
            <div className="group">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#9ff0b7] hover:text-[#D2EA0A] transition-colors flex items-center gap-3 mb-4">
                <span className="h-2 w-2 rounded-full bg-[#1fd856] group-hover:bg-[#D2EA0A] transition-colors"></span>
                DIVISIBILIDAD
              </h2>
              <p className="text-[#ccd6f6] pl-7 border-l-2 border-[#1fd856]/30">
                La invalidez o inaplicabilidad de cualquier disposición
                particular de esta Política no afectará las disposiciones
                restantes de la misma, y esta Política se interpretará en todos
                los aspectos como si se hubiera omitido dicha disposición
                inválida o inaplicable.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default page;
