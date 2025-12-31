import { benefits } from "../data/benefits";

import ButtonContactModal from "./ButtonContactModal";

export function BenefitsSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-20 font-montserrat">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Por qué trabajar con un partner técnico mensual?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit) => (
            <div key={benefit.number} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-turqueza-letter-light/30 flex items-center justify-center border border-turqueza-letter-light">
                <span className="text-2xl font-bold text-turqueza-letter-light">
                  {benefit.number}
                </span>
              </div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-b from-[#0b1e2e] via-[#112240] to-[#0a192f]  border rounded-2xl p-8 md:p-12 text-center">
          <p className="text-2xl md:text-3xl font-bold mb-4 text-balance text-white">
            Tu software deja de ser un problema y se convierte en un activo
            estratégico
          </p>
          <ButtonContactModal title="Agenda una evaluación técnica" />
        </div>
      </div>
    </section>
  );
}
