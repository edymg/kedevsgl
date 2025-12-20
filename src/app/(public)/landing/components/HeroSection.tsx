"use client";

import { useState } from "react";

import { CheckCircle } from "@mui/icons-material";

import WrapperModal from "@/components/ui/WrapperModal";
import ButtonContactModal from "./ButtonContactModal";
import Formulary from "./Formulary";
import { StarRating } from "./StarsRating";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white font-montserrat">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover "
      >
        <source src="TechSolutions.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold sm:mt-8">
          Cuando tu Software falla,{" "}
          <span className="text-[#10B981]">tu Negocio pierde Dinero</span>
        </h1>
        <p className="text-lg mt-4">
          Kedevs se encarga de que eso no pase. Partner técnico mensual para
          empresas con ingresos recurrentes y plataformas críticas.
        </p>

        <div className="mt-6">
          <ButtonContactModal title="Reactiva y escala tu software" />
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          <StarRating rating={4.7} />
        </div>

        <div className="flex flex-col gap-6 justify-center pt-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-[#10B981]" />
            <span>Diagnóstico técnico estratégico sin costo.</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-[#10B981]" />
            <span>
              Identificamos riesgos operativos, cuellos de botella y
              oportunidades de crecimiento en tu software.
            </span>
          </div>
        </div>
      </div>

      <WrapperModal open={open} onOpen={setOpen}>
        <Formulary />
      </WrapperModal>
    </section>
  );
};

export default HeroSection;
