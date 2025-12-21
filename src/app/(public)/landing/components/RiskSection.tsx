"use client";

import { XCircle } from "./../../../../../node_modules/lucide-react";
import { motion } from "framer-motion";

const risks = [
  {
    title: "No evolucionan al ritmo del negocio",
    description:
      "Tu plataforma no puede adaptarse a nuevas oportunidades de mercado",
  },
  {
    title: "Dependen de una sola persona",
    description: "Riesgo crítico si el desarrollador clave no está disponible",
  },
  {
    title: "Fallas y cuellos de botella ocultos",
    description:
      "Problemas técnicos que afectan la operación diaria del negocio",
  },
  {
    title: "Sin roadmap técnico claro",
    description:
      "No hay visión a largo plazo ni plan estratégico de desarrollo",
  },
];

export function RiskSection() {
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 text-center text-white sm:mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Cuando el software se estanca, el negocio paga las consecuencias
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {risks.map((risk, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-lg bg-blue-found/60 border border-border"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-white">
                    {risk.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {risk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
