"use client";

import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, Typography } from "@mui/material";

import {
  schema,
  defaultValues,
  Schema,
  generateIncome,
  systemStage,
  relationPartner,
} from "../types/schema";

import { RHFAutocomplete } from "@/components/ui/Autocomplete";
import { RHFTextField } from "@/components/ui/TextField";
import { RHFSwitch } from "@/components/ui/Switch";

export default function Formulary() {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;

  const sendMessageWsp = (data: Schema) => {
    const lines = [
      `Hola *Kedevs*!`,
      ``,
      `Me gustaria agendar un diagnostico de mi negocio.`,
      ``,
      `*Nombre:* ${data.fullname}`,
      `*Correo:* ${data.emailCompany}`,
      `*Empresa:* ${data.nameCompany}`,
      `*Como controlan actualmente a sus clientes?* ${data.generateIncome}`,
      `*Cual es la situacion actual del negocio?* ${data.systemStage}`,
      `*Que problema operativo quieren resolver?* ${data.relationPartner}`,
      ``,
      `Quedo atento a su respuesta. Gracias!`,
    ];

    const message = encodeURIComponent(lines.join("\n"));
    const whatsappURL = `https://wa.me/${process.env.NEXT_PUBLIC_NUMBER_WSP}?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  const onSubmit: SubmitHandler<Schema> = async (data) => {
    const formattedData = {
      ...data,
      generateIncome:
        generateIncome.find((_, index) => String(index) === data.generateIncome)
          ?.label || data.generateIncome,
      systemStage:
        systemStage.find((_, index) => String(index) === data.systemStage)
          ?.label || data.systemStage,
      relationPartner:
        relationPartner.find(
          (_, index) => String(index) === data.relationPartner
        )?.label || data.relationPartner,
    };

    try {
      sendMessageWsp(formattedData);
      reset();
    } catch (error) {
      console.error("Email sending from contacts failed:", error);
    }
  };

  return (
    <div
      id="contact"
      className="px-4 md:px-6 py-6 sm:py-4 scroll-mt-12 md:scroll-mt-28"
    >
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="form1"
          autoComplete="on"
          className="space-y-2"
        >
          <h2 className="text-2xl font-semibold text-center text-turqueza-letter-light capitalize pb-1">
            ¡Agenda un diagnóstico de tu negocio!
          </h2>

          <Stack spacing={1} className="grid grid-cols-1 md:grid-cols-2">
            <RHFTextField<Schema>
              name="fullname"
              label="Nombre Completo"
              placeholder="Escribe tu nombre completo"
            />
            <RHFTextField<Schema>
              name="emailCompany"
              label="Correo"
              placeholder="Escribe tu correo"
            />
            <RHFTextField<Schema>
              name="nameCompany"
              label="Nombre de la Empresa"
            />

            <div>
              <Typography
                variant="body2"
                fontSize="17px"
                color="info"
                sx={{ display: "block", margin: "2px 0 2px 0" }}
                className="text-gray-500 dark:text-gray-300"
              >
                ¿Cómo controlan actualmente a sus clientes?
              </Typography>
              <RHFAutocomplete<Schema>
                name="generateIncome"
                label="Opciones"
                options={generateIncome.map((opt, i) => ({
                  id: String(i),
                  label: opt.label,
                }))}
              />
            </div>

            <div>
              <Typography
                variant="body2"
                fontSize="17px"
                color="info"
                sx={{ display: "block", margin: "2px 0 2px 0" }}
                className="text-gray-500 dark:text-gray-300"
              >
                ¿Cuál es la situación actual de tu negocio?
              </Typography>
              <RHFAutocomplete<Schema>
                name="systemStage"
                label="Opciones"
                options={systemStage.map((opt, i) => ({
                  id: String(i),
                  label: opt.label,
                }))}
              />
            </div>

            <div>
              <Typography
                variant="body2"
                fontSize="17px"
                color="info"
                sx={{ display: "block", margin: "2px 0 2px 0" }}
                className="text-gray-500 dark:text-gray-300"
              >
                ¿Qué problema operativo quieres resolver?
              </Typography>
              <RHFAutocomplete<Schema>
                name="relationPartner"
                label="Opciones"
                options={relationPartner.map((opt, i) => ({
                  id: String(i),
                  label: opt.label,
                }))}
              />
            </div>

            <RHFSwitch<Schema>
              name="aceptaTerms"
              label={
                <span className="text-sm  text-gray-500 dark:text-gray-300">
                  Acepto los{" "}
                  <a
                    rel="nofollow"
                    href="/terminos"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                    target="_blank"
                  >
                    Términos de Servicio
                  </a>{" "}
                  y la{" "}
                  <a
                    rel="nofollow"
                    href="/privacidad"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                    target="_blank"
                  >
                    Política de Privacidad
                  </a>{" "}
                  de Kedevs.
                </span>
              }
            />
            <Button
              type="submit"
              className="group bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 font-bold uppercase"
            >
              {" "}
              <span className="relative z-10 font-bold drop-shadow-sm text-white">
                Agendar diagnóstico gratuito
              </span>
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </div>
  );
}
