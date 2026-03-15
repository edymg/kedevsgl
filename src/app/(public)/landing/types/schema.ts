import { z } from "zod";

import { patterns } from "../constants";

export const generateIncome = [
  { id: "1", label: "Excel + WhatsApp" },
  { id: "2", label: "Algunos procesos organizados pero mucho sigue manual" },
  { id: "3", label: "No tenemos un control definido" },
] as const;

export const systemStage = [
  {
    id: "1",
    label:
      "El negocio está creciendo y los procesos se están volviendo difíciles de controlar",
  },
  {
    id: "2",
    label: "Perdemos información, clientes o cobros por falta de orden",
  },
  { id: "3", label: "Apenas estamos comenzando a crecer" },
];

export const relationPartner = [
  { id: "1", label: "Sí, el negocio ya genera ingresos estables todos los meses" },
  {
    id: "2",
    label: "Sí, pero los ingresos aún son variables",
  },
  {
    id: "3",
    label: "Estamos comenzando y aún no hay ingresos constantes",
  },
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
  description: z.string().optional(),
  whatsappNumber: z.string().optional(),
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
  description: "",
  whatsappNumber: "",
};
