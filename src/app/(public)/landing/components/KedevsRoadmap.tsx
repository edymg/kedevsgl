import {
  Map,
  Code2,
  LineChart,
} from "./../../../../../node_modules/lucide-react";

export function KedevsRoadmap() {
  return (
    <section className="py-24 px-6 relative overflow-hidden font-montserrat">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Todo comienza con un{" "}
            <span className="text-green-letter italic">Plan Claro</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto text-pretty">
            Sin un plan claro, cualquier sistema termina fallando. Diseñamos el
            roadmap correcto desde el primer día.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-turqueza-letter-light/70 via-border to-turqueza-letter-light/20 -translate-y-1/2 z-0" />

          {[
            {
              icon: Map,
              title: "Entendemos el negocio",
              description:
                "Analizamos cómo ganas dinero y cuáles son tus objetivos reales antes de escribir una sola línea de código.",
              step: "01",
            },
            {
              icon: Code2,
              title: "Diseño del sistema",
              description:
                "Arquitectura sólida pensada para escalar. Elegimos las herramientas adecuadas para tu caso específico.",
              step: "02",
            },
            {
              icon: LineChart,
              title: "Plan de crecimiento",
              description:
                "Definimos etapas de evolución constantes para que tu sistema nunca se quede atrás.",
              step: "03",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card/50 backdrop-blur-xs border border-border p-8 rounded-3xl relative z-10 transition-all border-turqueza-letter-light group bg-turqueza-letter-light/40 bg-linear-to-r from-turqueza-letter-light/20 via-border to-turqueza-letter-light/10"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#168fd6] text-primary-foreground rounded-full flex items-center justify-center font-bold shadow-lg shadow-primary/20">
                {item.step}
              </div>
              <item.icon className="w-12 h-12 text-turqueza-letter-light mb-6" />
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
