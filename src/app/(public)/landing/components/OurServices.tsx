"use client";
import { motion } from "framer-motion";

import { RiskSection } from "./RiskSection";

const OurServices = () => {
  return (
    <section className="w-full max-w-6xl mx-auto pt-8 sm:pt-14 m-8 sm:mt-16 px-4 sm:px-8 md:px-12 bg-gradient-to-b from-[#0b1e2e] via-[#112240] to-[#0a192f] sm:rounded-lg">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute h-96 w-96 -top-48 -left-48 bg-purple-500/20 rounded-full blur-3xl" />
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mt-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Tu <span className="text-[#10B981]">Software</span> ya no debería ser un
        riesgo
      </motion.h2>
      <div className="flex flex-col gap-4 sm:gap-8">
        <RiskSection />
      </div>
    </section>
  );
};

export default OurServices;
