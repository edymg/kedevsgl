"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { toast } from "sonner";
import ButtonContactModal from "./ButtonContactModal";

export function FaqSection() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [pregunta, setPregunta] = useState("");

  const handleSendQuestion = (event: React.FormEvent) => {
    event.preventDefault();
    if (pregunta.trim() === "") {
      toast.error("Por favor, escribe una pregunta antes de enviar.", {
        className: "bg-yellow-500 text-black",
      });
      return;
    }

    toast.success("Tu pregunta ha sido enviada con éxito!", {
      className: "bg-green-500 text-white",
    });
    setPregunta("");
  };

  return (
    <div className="w-full py-20 flex justify-center">
      <section
        id="FaqSection"
        className="relative overflow-hidden bg-gradient-to-b from-[#0b1e2e] via-[#112240] to-[#0a192f]  w-full max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-8 md:px-12 shadow-xl sm:rounded-lg"
      >
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

        <div className="absolute h-96 w-96 -top-48 -left-48 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute h-96 w-96 -bottom-48 -right-48 bg-emerald-500/20 rounded-full blur-3xl" />

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a192f] to-transparent"></div>

        <div className="relative px-6 py-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white text-center mb-10"
            viewport={{ once: true }}
          >
            Preguntas Frecuentes
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-3"
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  value: "item-1",
                  question: "¿Qué servicios ofrecemos?",
                  answer: (
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-[#00e64d]">
                          Desarrollo SaaS Personalizado
                        </h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>
                            Plataformas cloud escalables desde MVP hasta
                            enterprise
                          </li>
                          <li>
                            Arquitecturas multi-tenant listas para crecimiento
                          </li>
                          <li>
                            Integraciones API con ecosistemas empresariales
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#00e64d]">
                          Optimización de Procesos
                        </h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Automatización de flujos de trabajo complejos</li>
                          <li>Migración segura de legacy systems a la nube</li>
                          <li>Implementación de inteligencia operacional</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#00e64d]">
                          Soporte Continuo
                        </h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Monitoreo 24/7 con alertas proactivas</li>
                          <li>Actualizaciones automáticas sin downtime</li>
                          <li>Escalado de recursos bajo demanda</li>
                        </ul>
                      </div>

                      <p className="pt-2 text-sm italic">
                        Todos nuestros servicios incluyen análisis de datos en
                        tiempo real y reportes de ROI mensurables.
                      </p>
                    </div>
                  ),
                },
                {
                  value: "item-2",
                  question: "¿Cómo puedo contactarlos?",
                  answer: (
                    <div className="pt-2 text-sm italic">
                      Puedes contactarnos a través de nuestro{" "}
                      <span className="inline-block mt-2">
                        <ButtonContactModal title="Formulario de Contacto" />
                      </span>{" "}
                      enviarnos un correo a{" "}
                      <a
                        href="mailto:kedevs.pe@gmail.com"
                        className="text-emerald-400 hover:underline"
                      >
                        kedevs.pe@gmail.com
                      </a>{" "}
                      o escribirnos al WhatsApp que aparece en pantalla{" "}
                    </div>
                  ),
                },
                {
                  value: "item-3",
                  question: "¿Tienen garantía en sus servicios?",
                  answer: (
                    <div className="space-y-3">
                      <p>
                        <span className="font-semibold text-[#00e64d]">
                          Garantía de Rendimiento:
                        </span>{" "}
                        Si tu plataforma no cumple con los KPIs acordados,
                        realizamos mejoras gratuitas hasta alcanzar los
                        resultados prometidos.
                      </p>

                      <div className="flex items-start mt-3">
                        <div className="flex-shrink-0 text-[#00e64d] mr-2">
                          ✓
                        </div>
                        <div>
                          <span className="font-medium">
                            Periodo de gracia:
                          </span>{" "}
                          30 días de soporte prioritario post-implementación sin
                          costo adicional
                        </div>
                      </div>

                      <div className="pt-2">
                        <p className="text-sm italic">
                          *Los términos específicos varían según el plan
                          contratado. Incluimos cláusulas de confidencialidad y
                          ownership de código en todos nuestros contratos.
                        </p>
                      </div>
                    </div>
                  ),
                },
              ].map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="border-none mb-3"
                >
                  <div className="rounded-lg overflow-hidden">
                    <AccordionTrigger
                      onClick={() =>
                        setActiveItem(
                          activeItem === item.value ? null : item.value
                        )
                      }
                      className="w-full bg-[#ffffff18] hover:bg-[#ffffff22] px-6 py-4 text-left rounded-t-lg text-white text-lg font-medium flex justify-between items-center"
                    >
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="p-6 text-[#e2e8f0] bg-[#ffffff41] rounded-b-lg border-t border-[#2d3748]/50">
                      {item.answer}
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
