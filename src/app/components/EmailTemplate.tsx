import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Column,
  Row,
  Link,
} from "@react-email/components";
import * as React from "react";
import { MailRequestBody } from "@/app/types/global";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const EmailTemplate: React.FC<Readonly<MailRequestBody>> = (
  mailProps,
) => {
  const { fullname, phoneNumber, email, country, location, message } =
    mailProps;
  const mailtoLink = `mailto:${email}?subject=Respuesta%20a%20tu%20mensaje&body=Hola%20${
    email.split("@")[0]
  },%0A%0A`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hola%20${
    email.split("@")[0]
  },%20te%20respondo%20a%20tu%20mensaje.`;
  return (
    <Html>
      <Head />
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/public/kedevs-logo_horizontal.png`}
            width="170"
            height="50"
            alt="Kedevs"
            style={logo}
          />
          <Text style={paragraph}>
            Hola equipo de Kedevs, soy{" "}
            <span className="font-medium">{fullname}</span>, te comparto
            información acerca de mí:{" "}
          </Text>
          <Section style={informationTable}>
            <Row style={informationTableRow}>
              <Column colSpan={2}>
                <Section>
                  <Row>
                    <Column style={informationTableColumn}>
                      <Text style={informationTableLabel}>Nombres: </Text>
                      <Link
                        style={{
                          ...informationTableValue,
                          color: "#15c",
                          textDecoration: "underline",
                        }}
                      >
                        {fullname}
                      </Link>
                    </Column>
                  </Row>

                  <Row>
                    <Column style={informationTableColumn}>
                      <Text style={informationTableLabel}>
                        Numero de Telefono:{" "}
                      </Text>
                      <Text style={informationTableValue}>{phoneNumber}</Text>
                    </Column>
                  </Row>

                  <Row>
                    <Column style={informationTableColumn}>
                      <Text style={informationTableLabel}>
                        Correo Electrónico:{" "}
                      </Text>
                      <Link
                        style={{
                          ...informationTableValue,
                          color: "#15c",
                          textDecoration: "underline",
                        }}
                      >
                        {email}
                      </Link>
                    </Column>
                  </Row>
                </Section>
              </Column>
              <Column style={informationTableColumn} colSpan={2}>
                <section>
                  <Row>
                    <Column style={informationTableColumn}>
                      <Text style={informationTableLabel}>País: </Text>
                      <Text style={informationTableValue}>{country}</Text>
                    </Column>
                  </Row>
                  <Row>
                    <Column style={informationTableColumn}>
                      <Text style={informationTableLabel}>Ubicación: </Text>
                      <Text style={informationTableValue}>{location}</Text>
                    </Column>
                  </Row>
                </section>
              </Column>
            </Row>
          </Section>

          <Text style={paragraph}>Mensaje: </Text>
          <Section style={informationTable}>
            <Text style={paragraph}>{message}</Text>
          </Section>

          <Text style={paragraph}>
            Muchas Gracias
            <br />
            Espero su respuesta
          </Text>

          <Hr style={hr} />

          <Section style={btnContainer}>
            Responder mensaje a {email}{" "}
            <Button style={button} href={mailtoLink}>
              Redactar
            </Button>
          </Section>
          <Section style={btnContainer}>
            Responder por Whatsapp a {phoneNumber}{" "}
            <Button style={buttonWhatsapp} href={whatsappLink}>
              Responder
            </Button>
          </Section>

          <Hr style={hr} />
          <Text style={footer}>
            {location}- {country}
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};
const buttonWhatsapp = {
  backgroundColor: "#25D366",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

const resetText = {
  margin: "0",
  padding: "0",
  lineHeight: 1.4,
};

const informationTable = {
  borderCollapse: "collapse" as const,
  borderSpacing: "0px",
  color: "rgb(51,51,51)",
  backgroundColor: "rgb(250,250,250)",
  borderRadius: "3px",
  fontSize: "12px",
};

const informationTableRow = {
  height: "46px",
};

const informationTableColumn = {
  paddingLeft: "20px",
  borderStyle: "solid",
  borderColor: "white",
  borderWidth: "0px 1px 1px 0px",
  height: "44px",
};

const informationTableLabel = {
  ...resetText,
  color: "rgb(102,102,102)",
  fontSize: "10px",
};

const informationTableValue = {
  fontSize: "12px",
  margin: "0",
  padding: "0",
  lineHeight: 1.4,
};
