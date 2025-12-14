"use client";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  defaultValues,
  Schema,
  schema,
} from "../../app/(public)/landing/types/schema";
import ContactForm from "../../app/(public)/landing/components/Contactanos";

export function ContactsProvider() {
  const methods = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <ContactForm />
    </FormProvider>
  );
}
