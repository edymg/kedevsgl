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

      <div className="z-50 text-center h-full flex flex-col justify-center items-center max-w-5xl mb-8 mx-2 lg:mx-0">
        <LogoHorizontal />
        <h1 className="text-3xl md:text-6xl font-bold mt-4 sm:mt-16">
          Tu negocio está creciendo. Pero internamente es un{" "}
          <AnimatedTitle title="Caos" color="secondary" />
        </h1>
        <p className="text-lg mt-4 hidden sm:block">
          Kedevs es tu partner operativo mensual. Ordenamos, automatizamos y
          controlamos los procesos de tu negocio para que puedas crecer sin
          perder el control.
        </p>
        <p className="text-lg mt-4 block sm:hidden">
          Tu partner operativo mensual para ordenar y automatizar tu negocio y
          crecer sin caos
        </p>

        <div className="mt-6">
          <ButtonContactModal title="Diagnostica tu negocio" />
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          <StarRating rating={4.7} />
        </div>

        <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center pt-8 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#10B981]" />
            <span>Procesos automatizados mes a mes</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-[#10B981]" />
            <span>Control total del negocio</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-[#10B981]" />
            <span>Crecimiento sin caos operativo</span>
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
