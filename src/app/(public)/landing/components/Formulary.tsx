"use client";

import { useEffect, useState } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  schema,
  defaultValues,
  Schema,
  countries,
  optionPay,
} from "../types/schema";
import { Button, Stack, CircularProgress, Typography } from "@mui/material";
import { RHFAutocomplete } from "@/components/ui/Autocomplete";
import { RHFTextField } from "@/components/ui/TextField";
import { RHFSwitch } from "@/components/ui/Switch";
import Image from "next/image";

export default function Formulary() {
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const { handleSubmit, watch, setValue } = methods;

  const selectedCountry = watch("countries");

  useEffect(() => {
    if (selectedCountry) {
      const country = countries.find(
        (c) => c.code === selectedCountry || c.label === selectedCountry
      );
      if (country) {
        setValue("countries", country.code);
      }
    }
  }, [selectedCountry, setValue]);

  const onSubmit: SubmitHandler<Schema> = async (data) => {
    console.log("Form Submitted from contacts!", data);

    const formattedData = {
      ...data,
      countries: countries.find((country) => country.code === data.countries)
        ? `${
            countries.find((country) => country.code === data.countries)?.label
          } (+${
            countries.find((country) => country.code === data.countries)?.phone
          })`
        : data.countries,
      payOptions:
        optionPay.find((size, index) => String(index) === data.payOpt)?.label ||
        data.payOpt,
    };
    console.log("Formatted Data:", formattedData);

    try {
      await sendEmail(formattedData);
    } catch (error) {
      console.error("Email sending from contacts failed:", error);
    }
  };

  async function sendEmail(data: any) {
    setIsLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Email failed to send from Contacts.");
      }

      methods.reset();
      console.log("Email sent successfully from contacts!");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="form1"
          autoComplete="on"
          className="space-y-2"
        >
          <h2 className="text-2xl font-semibold text-center text-turqueza-letter-light capitalize">
            ¡Solicita una consultoría técnica estratégica!
          </h2>

          <Stack spacing={1} className="grid grid-cols-1 md:grid-cols-2">
            <RHFTextField<Schema>
              name="fullname"
              label="Nombre Completo"
              placeholder="Escribe tu nombre completo"
            />
            <RHFTextField<Schema>
              name="nameCompany"
              label="Nombre de la Empresa"
            />

            <div className="grid grid-cols-2 gap-4">
              <RHFAutocomplete<Schema>
                name="countries"
                label="País"
                options={countries.map((country) => ({
                  id: country.code,
                  label: `${country.label} (+${country.phone})`,
                  code: country.code,
                }))}
                renderOption={(props, option) => {
                  const { key, ...restProps } = props;
                  return (
                    <li
                      key={key}
                      {...restProps}
                      className="flex items-center gap-2 p-2 rounded-md transition-colors hover:bg-emerald-50 hover:text-emerald-700 cursor-pointer"
                    >
                      <Image
                        height={20}
                        width={20}
                        loading="lazy"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        alt={`Flag of ${option.label}`}
                        className="flex-shrink-0"
                      />
                      <span className="truncate">{option.label}</span>
                    </li>
                  );
                }}
              />
              <RHFTextField<Schema> name="phone" label="Telefono" />
            </div>
            <div className="">
              <Typography
                variant="body2"
                fontSize="17px"
                color="info"
                align="center"
                sx={{ display: "block", margin: "2px 0 2px 0" }}
                className="text-gray-500 dark:text-gray-300"
              >
                Trabajamos con empresas que invierten mensualmente en la
                evolución de su software.
              </Typography>
              <RHFAutocomplete<Schema>
                name="payOpt"
                label="Opciones"
                options={optionPay.map((opt, i) => ({
                  id: String(i),
                  label: opt.label,
                }))}
              />
            </div>
            <RHFTextField<Schema>
              className="md:col-span-2"
              name="message"
              label="Proyecto o Idea:"
              multiline
              rows={3}
              placeholder="Por ejemplo: Necesito un software para gestionar el inventario de mi empresa..."
            />
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
              disabled={isLoading}
              className="group bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 font-bold uppercase"
            >
              {" "}
              {isLoading ? (
                <CircularProgress size={30} color="inherit" />
              ) : (
                <span className="relative z-10 font-bold drop-shadow-sm text-white">
                  Enviar Mensaje
                </span>
              )}
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </div>
  );
}
