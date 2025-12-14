// import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/app/components/EmailTemplate";
import { Resend } from "resend";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is missing");
  }

  const resend = new Resend(apiKey);
  const emailAccount = process.env.EMAIL_ACCOUNT || "";

  if (req.method === "POST") {
    try {
      const body = await req.json();
      const { subject } = body;

      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [emailAccount],
        subject: subject,
        react: EmailTemplate(body),
        text: "",
      });

      if (data || error) {
        return NextResponse.json(
          { error: "Error al enviar el correo" },
          { status: 400 }
        );
      }
      return NextResponse.json(data, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: "Error interno del servidor" },
        { status: 500 }
      );
    }
  }
}
