"use client";

import { Circle } from "@mui/icons-material";
import { XCircle } from "./../../../../../node_modules/lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const risks = [
  {
    title: "Pérdida de dinero",
    description: "Errores en pagos y cobros manuales",
    description2: "Clientes y ventas que se pierden sin seguimiento",
    color: "red",
  },
  {
    title: "Falta de control",
    description: "Información dispersa en WhatsApp y Excel",
    description2: "No sabes qué pasa realmente en tu negocio",
    color: "warnig",
  },
  {
    title: "Crecimiento caótico",
    description: "Más trabajo, más errores, más dependencia de personas",
    description2:
      "El negocio crece pero se vuelve más difícil de manejar",
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
            Cuando un negocio crece sin procesos claros, aparecen estos
            problemas
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
