import { cn } from "@/lib/utils";
import {
  Check,
  X,
  ShieldCheck,
  Users,
  Calendar,
  Rocket,
  MessageCircle,
  CheckCircle2,
} from "./../../../../../node_modules/lucide-react";
import ButtonContactModal from "./ButtonContactModal";
import AnimatedTitle from "./AnimatedTitle";

export function KedevsPartnership() {
  return (
    <section className="py-24 px-6 bg-linear-to-b from-background to-secondary/20 font-montserrat">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Cómo trabajamos en <AnimatedTitle title="Kedevs" color="primary" />
        </h2>
      </div>
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 bg-gradient-to-b from-[#0b1e2e] via-[#112240] to-[#0a192f] rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-4xl font-bold leading-tight text-white">
              Cómo te acompañamos en{" "}
              <span className="text-primary font-mono tracking-tighter text-turqueza-letter-light">
                KEDEVS
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed text-gray-500">
              Nos integramos como tu equipo técnico externo y nos encargamos de:
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Construcción del sistema desde cero o reconstrucción completa",
                "Mejora continua del sistema",
                "Plan mensual de evolución",
                "Entregas semanales con avances claros",
                "Soporte y mantenimiento continuo",
                "Comunicación constante",
                "Responsabilidad técnica total",
              ].map((benefit, index) => (
                <li
                  key={benefit}
                  className={cn(
                    `flex items-center gap-3 bg-secondary/30 p-3 rounded-xl bg-turqueza-letter-light/10 border border-turqueza-letter-light`,
                    index === 0 && "sm:col-span-2"
                  )}
                >
                  <div className="bg-primary/20 p-1 rounded-full">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-primary text-turqueza-letter-light" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:justify-center sm:items-center gap-4 items-center pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/50 px-4 py-2 rounded-full border border-border bg-white font-medium">
                <Calendar className="w-4 h-4 flex-shrink-0" /> Relación mínima:
                12 meses
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/50 px-4 py-2 rounded-full border border-border bg-white font-medium">
                <MessageCircle className="w-4 h-4 flex-shrink-0" /> Inversión
                Mensual definida en consultoría Estratégica
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative bg-card border border-border p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6">
              <div className="flex items-center gap-4 border-b border-border pb-6">
                <div className="p-2 rounded-full bg-[#168fd6]">
                  <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">
                    Tu Partner Técnico Mensual
                  </h3>
                  <p className="text-sm text-muted-foreground italic">
                    Nos encargamos del sistema como si fuera propio
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-turqueza-letter-light/10 border border-turqueza-letter-light/20">
                  <Check className="w-5 h-5 text-turqueza-letter-light shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">
                    Nos hacemos responsables del funcionamiento y escalabilidad
                    del sistema.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-turqueza-letter-light/10 border border-turqueza-letter-light/20">
                  <Check className="w-5 h-5 text-turqueza-letter-light shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">
                    Vendemos resultados y crecimiento.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-red-600/10 border border-red-600/20">
                  <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">
                    No hacemos trabajos puntuales.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-red-600/10 border border-red-600/20">
                  <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">No somos una agencia.</p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-red-600/10 border border-red-600/20">
                  <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">No somos freelancers.</p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-red-600/10 border border-red-600/20">
                  <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">
                    No vendemos tareas sueltas ni horas.
                  </p>
                </div>
              </div>

              {/* <Button
                className="w-full h-12 text-lg font-bold rounded-2xl shadow-lg shadow-turqueza-letter-light/20 hover:scale-[1.02] transition-transform"
                variant="contact"
              >
                Solicitar Consultoría Estratégica
              </Button> */}
              <ButtonContactModal
                title="Solicitar Consultoria Estratégica"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
