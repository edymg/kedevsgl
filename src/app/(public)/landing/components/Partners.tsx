"use client";

import DiagonalBrandCarousel from "@/app/components/DiagonalBrandCarousel";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <div className="mx-2 py-10 rounded-lg mt-4 text-center">
      <motion.h2
        className="text-2xl md:text-6xl font-bold text-center mt-8 md:mx-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <span className="text-green-letter">Únete </span>a empresas que confían
        en <span className="text-green-letter">Kedevs </span>para excelencia
        técnica continua.
      </motion.h2>

      <DiagonalBrandCarousel />
    </div>
  );
};

export default Partners;
