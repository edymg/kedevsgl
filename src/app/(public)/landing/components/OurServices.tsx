"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ButtonContactModal from "./ButtonContactModal";
import Image from "next/image";
import Link from "next/link";
import WrapperModal from "@/components/ui/WrapperModal";
import Formulary from "./Formulary";

const OurServices = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-8 md:px-12 bg-gradient-to-r from-[#0a1128] to-[#1a1f3c] sm:rounded-lg">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute h-96 w-96 -top-48 -left-48 bg-purple-500/20 rounded-full blur-3xl" />
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Ofrecemos <span className="text-green-letter">soluciones</span> para
        potenciar tu empresa
      </motion.h2>

      <div className="flex flex-col gap-8 sm:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row items-center gap-6 text-white"
        >
          <Image
            width={500}
            height={300}
            src="/CDigital.jpg"
            alt="Consultoría digital"
            className="w-full md:w-1/2 h-64 object-cover rounded-lg"
          />
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Consultoría digital
            </h3>
            <p className="text-gray-400 mt-2">
              Detectamos las oportunidades de mejora en tu negocio y creamos una
              estrategia digital alineada con tus objetivos. Con nuestra
              experiencia, te ayudamos a optimizar tu presencia online y
              transformar cada acción en resultados concretos.
            </p>
            <div className="mt-4 sm:mt-6">
              <ButtonContactModal title="Optimiza tu negocio hoy" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row-reverse items-center gap-6 text-white"
        >
          <Image
            width={500}
            height={300}
            src="/DigitalEcosystem.jpeg"
            alt="Evolución de ecosistemas"
            className="w-full md:w-1/2 h-64 object-cover rounded-lg"
          />
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Escala inteligente
            </h3>
            <p className="text-gray-400 mt-2">
              Impulsamos el crecimiento de tu empresa optimizando y modernizando
              tus aplicaciones. Nuestro equipo especializado garantiza un
              mantenimiento eficiente y el uso de tecnologías de vanguardia para
              crear soluciones robustas y escalables.
            </p>
            <div className="mt-4 sm:mt-6">
              <ButtonContactModal title="Moderniza tus aplicaciones" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row items-center gap-6 text-white"
        >
          <Image
            width={500}
            height={300}
            src="/SmartProcess.jpeg"
            alt="Optimización de procesos"
            className="w-full md:w-1/2 h-64 object-cover rounded-lg"
          />
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Procesos que vuelan
            </h3>
            <p className="text-gray-400 mt-2">
              Automatizamos y mejoramos la gestión de tu empresa con soluciones
              tecnológicas personalizadas. Desarrollamos software a medida que
              se adapta a tus necesidades, optimizando tiempos y reduciendo
              costos operativos.
            </p>
            <div className="mt-4 sm:mt-6">
              <ButtonContactModal title="Automatiza tus procesos" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
