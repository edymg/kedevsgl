"use client";

import DiagonalBrandCarousel from "@/app/components/DiagonalBrandCarousel";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <div className="mx-2 md:mt-16 rounded-lg text-center font-montserrat">
      <motion.h2
        className="text-2xl md:text-6xl font-bold text-center  md:mx-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <span className="text-green-letter">Empresas </span>que operan con{" "}
        <span className="text-green-letter capitalize">software </span>crítico y
        confían su{" "}
        <span className="text-green-letter capitalize">evolución </span> técnica
        a <span className="text-green-letter">Kedevs</span>. Plataformas en{" "}
        <span className="text-green-letter capitalize">producción</span>, no
        proyectos experimentales.
      </motion.h2>

      <DiagonalBrandCarousel />
    </div>
  );
};

export default Partners;
