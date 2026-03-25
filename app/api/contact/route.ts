import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const telefon = formData.get("telefon");
    const nachricht = formData.get("nachricht");

    // TODO: Wire up to email service (e.g. Resend, SendGrid, Nodemailer)
    console.log("Contact form submission:", { name, email, telefon, nachricht });

    return NextResponse.redirect(new URL("/kontakt?success=1", request.url));
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Fehler beim Senden der Nachricht." }, { status: 500 });
  }
}
