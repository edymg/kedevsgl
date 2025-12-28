"use client";

import { Circle } from "@mui/icons-material";
import { XCircle } from "./../../../../../node_modules/lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const risks = [
  {
    title: "Riesgo operativo",
    description: "Dependencia de una sola persona",
    description2: "Si el desarrollador falla, el negocio se detiene",
    color: "red",
  },
  {
    title: "Crecimiento limitado",
    description: "El sistema no acompaña el crecimiento del negocio",
    description2: "Oportunidades que no se pueden aprovechar",
    color: "warnig",
  },
  {
    title: "Falta de control",
    description: "No existe un plan claro de evolución",
    description2: "Las decisiones se toman por urgencia, no por estrategia",
    color: "warnig",
  },
];

export function RiskSection() {
  return (
    <section>
      <div className="container mx-auto px-4 py-16 md:py-20 font-montserrat">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-xl md:text-3xl font-bold text-center text-gray-400 mb-6 sm:mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Cuando un sistema se construye sin una visión clara, el negocio se
            vuelve frágil
          </motion.h2>

          <div className="flex flex-wrap gap-6 justify-center">
            {risks.map((risk, index) => (
              <div
                key={index}
                className={cn(
                  "flex gap-4 p-6 rounded-lg w-[400px] bg-blue-found/60 border border-red-600/50",
                  risk.color === "red" ? "border-red-600" : "border-yellow-600"
                )}
              >
                <div
                  className={
                    (cn(
                      "flex-shrink-0 w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center"
                    ),
                    risk.color === "red"
                      ? "border-red-600"
                      : "border-yellow-600")
                  }
                >
                  <XCircle
                    className={cn(
                      "w-5 h-5",
                      risk.color === "red" ? "text-red-600" : "text-yellow-600"
                    )}
                  />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-white">
                    {risk.title}
                  </h3>
                  <div className="flex gap-2">
                    <Circle
                      sx={{ width: "8px", height: "8px", marginTop: "5px" }}
                      className="flex-shrink-0 text-gray-400"
                    />
                    <p className="text-sm text-gray-400 mb-2">
                      {risk.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Circle
                      sx={{ width: "8px", height: "8px", marginTop: "5px" }}
                      className="flex-shrink-0 text-gray-400"
                    />
                    <p className="text-sm text-gray-400 mb-2">
                      {risk.description2}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
