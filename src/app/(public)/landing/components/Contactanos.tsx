"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import Formulary from "./Formulary";
import AnimatedTitle from "./AnimatedTitle";
import CustomSnackbar from "@/components/ui/CustomSnackbar";

const renderIconOnline = (text: string) => {
  return (
    <div className="flex gap-1.5">
      <span className="relative flex h-2.5 w-2.5">
        <span className="bg-turqueza-letter-light absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 mt-2"></span>
        <span className="bg-turqueza-letter-light inline-flex h-2.5 w-2.5 rounded-full mt-2"></span>
      </span>
      <span className="flex gap-2 text-lg text-gray-300">{text}</span>
    </div>
  );
};

export default function ContactForm() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div id="contact" className="w-full flex justify-center font-montserrat">
      <section
        className="relative overflow-hidden shadow-xl sm:rounded-lg rounded-lg bg-gradient-to-b from-[#0b1e2e] via-[#112240] to-[#0a192f] w-full max-w-6xl mx-auto py-10 sm:py-12 px-4 sm:px-8 md:px-12"
        id="Forms"
      >
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

        <div className="absolute h-96 w-96 -top-48 -left-48 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute h-96 w-96 -bottom-48 -right-48 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a192f] to-transparent"></div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center space-y-6 md:space-y-4">
            <motion.h2
              className="text-4xl font-bold sm:text-5xl md:text-6xl leading-tight text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Consultoría técnica estratégica{" "}
              <AnimatedTitle title="(sin costo)" className="mt-2" />
            </motion.h2>
            <motion.div
              className="text-3xl sm:text-4xl md:text-5xl leading-tight text-[#00e64d] text-center sm:text-center md:text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              No es una llamada de ventas.
            </motion.div>
            <motion.div
              className="text-lg sm:text-xl text-bold text-gray-300 mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="font-bold mb-2">Es una conversación donde:</h2>
              <ul>
                {renderIconOnline("Evaluamos el estado de tu software")}
                {renderIconOnline("Identificamos riesgos y puntos críticos")}
                {renderIconOnline(
                  "Definimos si necesitas un sistema nuevo o una reconstrucción completa"
                )}
                {renderIconOnline(
                  "Evaluamos si KEDEVS es el partner adecuado para acompañarte"
                )}

                {/* {renderIconOnline("Evaluamos el estado de tu software")}

                <li className="flex items-center gap-2">
                  {renderIconOnline("Identificamos riesgos y oportunidades")}
                </li> */}
              </ul>

              <h2 className="mt-4 font-bold">Definimos el mejor camino:</h2>
              <ul>
                <li>
                  {renderIconOnline(
                    "Acompañamiento mensual continuo o fase inicial de implementación + mensualidad"
                  )}
                </li>
              </ul>
            </motion.div>
          </div>
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-[20px] leading-none text-justify text-[#f2f2f2] py-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Llevemos tu negocio&nbsp;a lo más alto:
              </motion.h2>
              <div className="bg-white/90 backdrop-blur-sm w-full p-6 sm:p-8 rounded-lg border border-gray-200 shadow-lg">
                <Formulary />
              </div>
            </motion.div>
            <CustomSnackbar
              open={snackbarOpen}
              onClose={handleCloseSnackbar}
              message="Mensaje enviado exitosamente!"
              severity="success"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
