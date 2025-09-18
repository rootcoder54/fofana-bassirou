import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, societe, text, toEmail } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const contenu = `<div>
                    <div>Nom Complet : ${name}</div><br />
                    <div>Societé : ${societe}</div><br />
                    <div>Email : ${toEmail}</div><br />
                    <div>Message : ${text}</div><br />
                  </div>`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Agence one",
    html: contenu
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email envoyé avec succès!" }); // <-- ici
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email", detail: error },
      { status: 500 }
    ); // <-- ici
  }
}