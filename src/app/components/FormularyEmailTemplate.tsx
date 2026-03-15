import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Column,
  Row,
} from "@react-email/components";
import * as React from "react";

interface FormularyEmailProps {
  fullname: string;
  emailCompany: string;
  nameCompany: string;
  generateIncome: string;
  systemStage: string;
  relationPartner: string;
  description?: string;
  whatsappNumber?: string;
}

export const FormularyEmailTemplate: React.FC<
  Readonly<FormularyEmailProps>
> = ({ fullname, emailCompany, nameCompany, generateIncome, systemStage, relationPartner, description, whatsappNumber }) => {
  return (
    <Html>
      <Head />
      <Preview>Nuevo lead del formulario — {fullname} ({nameCompany})</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={title}>📋 Nuevo lead del formulario</Text>
          <Text style={subtitle}>
            Este contacto aún <strong>no genera ingresos constantes</strong>. No es un cliente potencial inmediato.
          </Text>

          <Hr style={hr} />

          <Section style={table}>
            <Row style={row}>
              <Column style={label}>Nombre</Column>
              <Column style={value}>{fullname}</Column>
            </Row>
            <Row style={row}>
              <Column style={label}>Correo</Column>
              <Column style={value}>{emailCompany}</Column>
            </Row>
            <Row style={row}>
              <Column style={label}>Empresa</Column>
              <Column style={value}>{nameCompany}</Column>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section style={table}>
            <Row style={row}>
              <Column style={label}>Control de información</Column>
              <Column style={value}>{generateIncome}</Column>
            </Row>
            <Row style={row}>
              <Column style={label}>Situación del negocio</Column>
              <Column style={value}>{systemStage}</Column>
            </Row>
            <Row style={row}>
              <Column style={label}>Ingresos constantes</Column>
              <Column style={value}>{relationPartner}</Column>
            </Row>
          </Section>

          {(description || whatsappNumber) && (
            <>
              <Hr style={hr} />
              <Section style={table}>
                {whatsappNumber && (
                  <Row style={row}>
                    <Column style={label}>WhatsApp</Column>
                    <Column style={value}>{whatsappNumber}</Column>
                  </Row>
                )}
                {description && (
                  <Row style={row}>
                    <Column style={label}>Descripción</Column>
                    <Column style={value}>{description}</Column>
                  </Row>
                )}
              </Section>
            </>
          )}

          <Hr style={hr} />

          <Text style={footer}>
            Kedevs — Lead registrado automáticamente desde el formulario de diagnóstico
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "32px 24px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  maxWidth: "560px",
};

const title = {
  fontSize: "22px",
  fontWeight: "bold",
  color: "#1a1a1a",
  marginBottom: "4px",
};

const subtitle = {
  fontSize: "14px",
  color: "#555",
  marginBottom: "16px",
};

const table = {
  width: "100%",
};

const row = {
  borderBottom: "1px solid #eeeeee",
};

const label = {
  padding: "10px 0",
  fontSize: "12px",
  color: "#888",
  width: "45%",
  verticalAlign: "top" as const,
};

const value = {
  padding: "10px 0",
  fontSize: "14px",
  color: "#1a1a1a",
  verticalAlign: "top" as const,
};

const hr = {
  borderColor: "#e6e6e6",
  margin: "16px 0",
};

const footer = {
  color: "#aaaaaa",
  fontSize: "11px",
  textAlign: "center" as const,
};
