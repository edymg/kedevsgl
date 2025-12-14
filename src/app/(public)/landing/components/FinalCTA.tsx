"use client";

import ButtonContactModal from "./ButtonContactModal";
import WrapperModal from "@/components/ui/WrapperModal";
import Formulary from "./Formulary";
import { useState } from "react";

export function FinalCTA() {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(!open);

  return (
    <section className="bg-gradient-to-b from-[#0b1e2e] to-[#112240] text-white py-16 px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold">
        ¿Listo para dar el siguiente paso?
      </h2>
      <p className="text-lg text-[#e2e8f0] mt-4">
        Contáctanos hoy y descubre cómo podemos ayudarte.
      </p>
      <div className="mt-4 sm:mt-6">
        <ButtonContactModal title="Solicita tu solución digital" />
      </div>

      <WrapperModal open={open} onOpen={onOpen}>
        <Formulary />
      </WrapperModal>
    </section>
  );
}
