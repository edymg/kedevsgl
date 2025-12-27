"use client";

import { useState } from "react";

import { CheckCircle } from "@mui/icons-material";

import WrapperModal from "@/components/ui/WrapperModal";
import ButtonContactModal from "./ButtonContactModal";
import Formulary from "./Formulary";
import { StarRating } from "./StarsRating";
import LogoHorizontal from "@/app/components/common/LogoHorizontal";
import AnimatedTitle from "./AnimatedTitle";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-white font-montserrat">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover "
        preload="metadata"
      >
        <source src="TechSolutions.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="z-50 text-center h-full flex flex-col justify-center items-center max-w-5xl mb-8">
        <LogoHorizontal />
        <h1 className="text-4xl md:text-6xl font-bold mt-4 sm:mt-16">
          Cuando tu <AnimatedTitle title="Negocio" color="secondary" /> depende
          de un Sistema, No puedes{" "}
          <AnimatedTitle title="Improvisar" color="secondary" />
        </h1>
        <p className="text-lg mt-4">
          Kedevs actúa como tu equipo técnico externo, desarrollando y
          gestionando sistemas a medida que impulsan la operación y las ventas
          de tu negocio, sin necesidad de contratar personal interno.
        </p>

        <div className="mt-6">
          <ButtonContactModal title="Reactiva y escala tu software" />
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          <StarRating rating={4.7} />
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-6 items-center justify-center pt-8 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#10B981]" />
            <span>Evolución constante del sistema</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-[#10B981]" />
            <span>Plan claro de crecimiento (roadmap)</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-[#10B981]" />
            <span>Control, estabilidad y orden</span>
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
