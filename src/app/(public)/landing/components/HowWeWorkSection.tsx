import { CheckCircle2 } from "./../../../../../node_modules/lucide-react";
import AnimatedTitle from "./AnimatedTitle";

const benefits = [
  {
    title: "Evolución constante de la plataforma",
    description: "Tu software siempre actualizado y mejorando",
  },
  {
    title: "Roadmap técnico alineado",
    description: "Objetivos técnicos que impulsan el negocio",
  },
  {
    title: "Entregas semanales",
    description: "Comunicación directa y resultados constantes",
  },
  {
    title: "Mantenimiento y mejoras",
    description: "Nuevas funcionalidades sin interrupciones",
  },
  {
    title: "Reducción de riesgos",
    description: "Operación técnica estable y predecible",
  },
  {
    title: "Modelo escalable",
    description: "Crece con tu negocio de forma predecible",
  },
];

export function HowWeWorkSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-20 font-montserrat">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Cómo trabajamos en <AnimatedTitle title="Kedevs" color="primary" />
          </h2>
          <p className="text-[22px] text-gray-600">
            No somos una agencia. No somos freelancers. No vendemos proyectos
            aislados.
          </p>
        </div>
        <div className="bg-gradient-to-b from-[#0b1e2e] via-[#112240] to-[#0a192f]  border border-primary/20 rounded-2xl p-8 md:p-12 mb-8">
          <p className="text-xl md:text-2xl font-semibold mb-8 text-center text-white">
            Nos integramos como tu equipo técnico mensual, asumiendo la
            responsabilidad continua de tu software
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-turqueza-letter-light flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
