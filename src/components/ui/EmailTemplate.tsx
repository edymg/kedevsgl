import * as React from "react";

interface EmailTemplateProps {
  fullname: string;
  emailCompany: string;
  countries: string;
  phone: string;
  nameCompany: string;
  generateIncome: string;
  systemStage: string;
  relationPartner: string;
  aceptaTerms: boolean;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullname,
  emailCompany,
  countries,
  phone,
  nameCompany,
  generateIncome,
  systemStage,
  relationPartner,
  aceptaTerms,
}) => (
  <div
    style={{
      fontFamily: '"Helvetica Neue", Arial, sans-serif',
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      background:
        "linear-gradient(to bottom,rgb(151, 183, 209),rgb(18, 63, 141), #0a192f)",
    }}
  >
    <h1
      style={{
        color: "#2c3e50",
        fontSize: "24px",
        marginBottom: "20px",
        textAlign: "center",
        borderBottom: "2px solid #3498db",
        paddingBottom: "10px",
      }}
    >
      📬 New Contact For Kedevs
    </h1>

    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "6px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <p style={{ margin: "10px 0", lineHeight: "1.6" }}>
        <span
          style={{
            display: "inline-block",
            width: "120px",
            fontWeight: "bold",
            color: "#3498db",
          }}
        >
          Full Name:
        </span>
        {fullname}
      </p>

      <p style={{ margin: "10px 0", lineHeight: "1.6" }}>
        <span
          style={{
            display: "inline-block",
            width: "120px",
            fontWeight: "bold",
            color: "#3498db",
          }}
        >
          Company Email:
        </span>
        {emailCompany}
      </p>

      <p style={{ margin: "10px 0", lineHeight: "1.6" }}>
        <span
          style={{
            display: "inline-block",
            width: "120px",
            fontWeight: "bold",
            color: "#3498db",
          }}
        >
          Country:
        </span>
        {countries || "Not specified"}
      </p>

      <p style={{ margin: "10px 0", lineHeight: "1.6" }}>
        <span
          style={{
            display: "inline-block",
            width: "120px",
            fontWeight: "bold",
            color: "#3498db",
          }}
        >
          Phone:
        </span>
        {phone}
      </p>

      <p style={{ margin: "10px 0", lineHeight: "1.6" }}>
        <span
          style={{
            display: "inline-block",
            width: "120px",
            fontWeight: "bold",
            color: "#3498db",
          }}
        >
          Company Name:
        </span>
        {nameCompany}
      </p>

      <p style={{ margin: "10px 0", lineHeight: "1.6" }}>
        <span
          style={{
            display: "inline-block",
            // width: "120px",
            fontWeight: "bold",
            color: "#3498db",
          }}
        >
          ¿Cómo genera ingresos actualmente tu empresa?:
        </span>
        {generateIncome}
      </p>

      <p style={{ margin: "10px 0", lineHeight: "1.6" }}>
        <span
          style={{
            display: "inline-block",
            fontWeight: "bold",
            color: "#3498db",
          }}
        >
          ¿En qué etapa se encuentra tu plataforma o sistema?
        </span>
        {systemStage}
      </p>

      <p style={{ margin: "10px 0", lineHeight: "1.6" }}>
        <span
          style={{
            display: "inline-block",
            fontWeight: "bold",
            color: "#3498db",
          }}
        >
          ¿Qué tipo de relación buscas con tu partner tecnológico?
        </span>
        {relationPartner}
      </p>

      <p style={{ margin: "10px 0", lineHeight: "1.6" }}>
        <span
          style={{
            display: "inline-block",
            width: "120px",
            fontWeight: "bold",
            color: "#3498db",
          }}
        >
          Accepted Terms:
        </span>
        <span
          style={{
            color: aceptaTerms ? "#27ae60" : "#e74c3c",
            fontWeight: "bold",
          }}
        >
          {aceptaTerms ? "✓ Yes" : "✗ No"}
        </span>
      </p>
    </div>

    <p
      style={{
        marginTop: "20px",
        fontSize: "12px",
        color: "#7f8c8d",
        textAlign: "center",
      }}
    >
      This message was sent from the Contactanos form on the Kedevs/landing
      website.
    </p>
  </div>
);
