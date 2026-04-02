import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const source = formData.get("source");
    const name = formData.get("name");
    const vorname = formData.get("vorname");
    const email = formData.get("email");
    const telefon = formData.get("telefon");
    const nachricht = formData.get("nachricht");
    const kommentarfeld = formData.get("kommentarfeld");

    // TODO: Wire up to email service (e.g. Resend, SendGrid, Nodemailer)
    console.log("Contact form submission:", {
      source,
      name,
      vorname,
      email,
      telefon,
      nachricht,
      kommentarfeld,
    });

    const redirectPath = source === "karriere" ? "/karriere?success=1" : "/kontakt?success=1";
    return NextResponse.redirect(new URL(redirectPath, request.url));
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Fehler beim Senden der Nachricht." }, { status: 500 });
  }
}
