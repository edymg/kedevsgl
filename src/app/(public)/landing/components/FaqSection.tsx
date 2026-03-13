"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import ButtonContactModal from "./ButtonContactModal";

export function FaqSection() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

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
                  question: "¿Qué hace exactamente KEDEVS?",
                  answer: (
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-[#00e64d]">
                          Ordenamos las operaciones del negocio
                        </h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>
                            Identificamos dónde el negocio pierde dinero y
                            control por operar manualmente
                          </li>
                          <li>
                            Automatizamos procesos de clientes, pagos y
                            trabajadores
                          </li>
                          <li>
                            Centralizamos la información del negocio en un solo
                            lugar
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#00e64d]">
                          Trabajamos como partner operativo mensual
                        </h4>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Cada mes mejoramos y automatizamos nuevos procesos</li>
                          <li>No vendemos proyectos únicos ni trabajos puntuales</li>
                          <li>Acompañamos el crecimiento del negocio de forma continua</li>
                        </ul>
                      </div>

                      <p className="pt-2 text-sm italic">
                        Nuestro objetivo es que tu negocio pueda crecer sin
                        caos operativo y con control real en todo momento.
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
                  question: "¿Cómo funciona el servicio mensual?",
                  answer: (
                    <div className="space-y-3">
                      <p>
                        <span className="font-semibold text-[#00e64d]">
                          Modelo de partner operativo:
                        </span>{" "}
                        Trabajamos con tu negocio de forma continua. Cada mes
                        definimos qué procesos ordenar y automatizar para que
                        sientas resultados concretos.
                      </p>

                      <div className="flex items-start mt-3">
                        <div className="flex-shrink-0 text-[#00e64d] mr-2">
                          ✓
                        </div>
                        <div>
                          <span className="font-medium">
                            Inversión mínima:
                          </span>{" "}
                          $1,000 USD mensuales. Trabajamos con pocos clientes
                          para garantizar resultados reales.
                        </div>
                      </div>

                      <div className="pt-2">
                        <p className="text-sm italic">
                          *Ordenar y automatizar un negocio no es un proyecto
                          puntual. Es un proceso continuo que trabajamos mes a
                          mes junto a ti.
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
