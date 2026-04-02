import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, vorname, email, telefon, nachricht, kommentarfeld, source } = body;

  const messageText = source === "karriere" ? kommentarfeld : nachricht;

  if (!name || !email || !telefon || !messageText) {
    return NextResponse.json({ error: "Pflichtfelder fehlen." }, { status: 400 });
  }

  const isKarriere = source === "karriere";

  const subject = isKarriere ? `Bewerbung von ${vorname} ${name}` : `Kontaktanfrage von ${name}`;

  const text = isKarriere
    ? `Neue Bewerbung\n\nVorname: ${vorname}\nNachname: ${name}\nE-Mail: ${email}\nTelefon: ${telefon}\n\nNachricht:\n${kommentarfeld}`
    : `Neue Kontaktanfrage\n\nName: ${name}\nE-Mail: ${email}\nTelefon: ${telefon}\n\nNachricht:\n${nachricht}`;

  const { error } = await resend.emails.send({
    from: "B-K Arbeitsschutz <info@b-k-arbeitsschutz.de>",
    to: "info@b-k-arbeitsschutz.de",
    replyTo: email,
    subject,
    text,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
