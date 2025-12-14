"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CustomSnackbar from "../../../../components/ui/CustomSnackbar";
import Formulary from "./Formulary";

export default function ContactForm() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="w-full  flex justify-center">
      <section
        className="relative overflow-hidden shadow-xl sm:rounded-lg rounded-lg bg-gradient-to-b from-[#0b1e2e] via-[#112240] to-[#0a192f] w-full max-w-6xl mx-auto py-10 sm:py-20 px-4 sm:px-8 md:px-20"
        id="Forms"
      >
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

        <div className="absolute h-96 w-96 -top-48 -left-48 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute h-96 w-96 -bottom-48 -right-48 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a192f] to-transparent"></div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            <motion.h2
              className="text-4xl font-bold sm:text-5xl md:text-6xl leading-tight text-white font-sans text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ¡CONÉCTATE CON NOSOTROS!
            </motion.h2>
            <motion.div
              className="text-3xl sm:text-4xl md:text-5xl leading-tight text-[#00e64d] font-sans text-center sm:text-center md:text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Juntos podemos impulsar tu negocio al siguiente nivel
            </motion.div>
            <motion.div
              className="text-lg sm:text-xl text-bold text-gray-300 font-sans text-justify md:text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Un software a medida es la clave para resolver tus desafíos,
              optimizar procesos y garantizar seguridad a tus productos. En
              Kedevs tenemos años de experiencia desarrollando soluciones que
              impulsan el éxito de las compañías.
            </motion.div>
          </div>
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.h2
                className="text-[20px] leading-none text-justify text-[#f2f2f2] font-sans  py-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
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
