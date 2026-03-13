"use client";

import { useState } from "react";

import WrapperModal from "@/components/ui/WrapperModal";
import ButtonContactModal from "./ButtonContactModal";
import Formulary from "./Formulary";

export function FinalCTA() {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(!open);

  return (
    <section className="bg-gradient-to-b from-[#0b1e2e] to-[#112240] text-white py-16 px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold">
        Tu negocio está listo para operar con orden
      </h2>
      <p className="text-lg text-[#e2e8f0] mt-4">
        Si tu negocio está creciendo pero internamente sigue siendo un caos,
        es momento de ordenarlo. Trabajamos como tu partner operativo mensual.
      </p>
      <div className="mt-4 sm:mt-6">
        <ButtonContactModal title="Agenda un diagnóstico del negocio" />
      </div>

      <WrapperModal open={open} onOpen={onOpen}>
        <Formulary />
      </WrapperModal>
    </section>
  );
}
