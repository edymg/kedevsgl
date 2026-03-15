import { FormularyEmailTemplate } from "@/app/components/FormularyEmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error("cedentials is missing");
    }

    const resend = new Resend(apiKey);

    const body = await req.json();
    console.log("🔍 Request Body:", body);

    const requiredFields = ["fullname"];
    const missingFields = requiredFields.filter((field) => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Faltan campos obligatorios: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Kedevs Contactando <onboarding@resend.dev>",
      to: ["kedevs.pe@gmail.com"],
      subject: `[Lead Formulario] ${body.fullname} - ${body.nameCompany || "Sin empresa"}`,
      react: FormularyEmailTemplate({
        fullname: body.fullname || "",
        emailCompany: body.emailCompany || "",
        nameCompany: body.nameCompany || "",
        generateIncome: body.generateIncome || "",
        systemStage: body.systemStage || "",
        relationPartner: body.relationPartner || "",
        description: body.description || "",
        whatsappNumber: body.whatsappNumber || "",
      }),
    });

    if (error) {
      console.error("📛 Error al enviar correo from routes:", error);
      return NextResponse.json({ error: error.message }, { status: 422 });
    }

    console.log("✅ Email sent from routes:", data);
    return NextResponse.json(
      { message: "Correo enviado con éxito", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error en el servidor:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
