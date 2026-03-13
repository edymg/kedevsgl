import { z } from "zod";

import { patterns } from "../constants";

export const generateIncome = [
  { id: "1", label: "Con Excel o WhatsApp" },
  { id: "2", label: "Con un sistema parcial o básico" },
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
    label:
      "Tenemos varios trabajadores y la operación depende de pocas personas",
  },
  {
    id: "3",
    label: "Perdemos información, clientes o cobros por falta de orden",
  },
  { id: "4", label: "Apenas estamos comenzando a crecer" },
];

export const relationPartner = [
  { id: "1", label: "Controlar mejor a mis clientes y ventas" },
  {
    id: "2",
    label: "Ordenar los pagos y cobros del negocio",
  },
  {
    id: "3",
    label: "Controlar a mis trabajadores y operaciones",
  },
  { id: "4", label: "Centralizar toda la información del negocio" },
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
