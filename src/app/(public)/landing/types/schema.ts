import { z } from "zod";

import { patterns } from "../constants";

export const generateIncome = [
  { id: "1", label: "Suscripciones o contratos mensuales" },
  {
    id: "2",
    label: "Software propio crítico para operación o ingresos",
  },
  { id: "3", label: "SaaS en lanzamiento con monetización definida" },
  { id: "4", label: "No tenemos un modelo recurrente" },
] as const;

export const systemStage = [
  {
    id: "1",
    label:
      "Ya tenemos un sistema funcionando y necesitamos evolución continua y control",
  },
  {
    id: "2",
    label:
      "Tenemos un sistema, pero no contamos con un partner técnico responsable",
  },
  {
    id: "3",
    label:
      "Vamos a desarrollar un sistema desde cero como base de un negocio escalable",
  },
  { id: "4", label: "Solo buscamos un desarrollo puntual sin continuidad" },
];

export const relationPartner = [
  { id: "1", label: "Equipo técnico mensual responsable del sistema" },
  {
    id: "2",
    label: "Acompañamiento estratégico con roadmap y evolución continua",
  },
  {
    id: "3",
    label: "Relación a largo plazo orientada a estabilidad y escalabilidad",
  },
  { id: "4", label: "Proveedor puntual para un proyecto específico" },
];

export const schema = z.object({
  fullname: z.string().min(1, { message: "Es requerido" }),
  emailCompany: z
    .string()
    .min(1, { message: "El requerido" })
    .refine((text) => patterns.email.test(text), {
      message: "El correo electrónico no es válido",
    }),
  nameCompany: z.string().min(1, { message: "Es Requerido" }),
  generateIncome: z
    .string()
    .min(1, { message: "Deberia seleccionar una opción" }),
  systemStage: z.string().min(1, { message: "Deberia seleccionar una opción" }),
  relationPartner: z
    .string()
    .min(1, { message: "Deberia seleccionar una opción" }),
  aceptaTerms: z.boolean().refine((v) => v === true, {
    message: "Debes aceptar los términos",
  }),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  fullname: "",
  emailCompany: "",
  nameCompany: "",
  generateIncome: "",
  systemStage: "",
  relationPartner: "",
  aceptaTerms: false,
};
