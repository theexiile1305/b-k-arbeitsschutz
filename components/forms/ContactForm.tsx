"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefon: (form.elements.namedItem("telefon") as HTMLInputElement).value,
      nachricht: (form.elements.namedItem("nachricht") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrorMsg(json.error || "Ein Fehler ist aufgetreten.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Netzwerkfehler. Bitte versuchen Sie es erneut.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
        <p className="text-green-800 font-semibold text-lg mb-1">Nachricht gesendet!</p>
        <p className="text-green-700 text-sm">
          Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-bk-text mb-1">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bk-light focus:border-transparent text-bk-text"
          placeholder="Ihr vollständiger Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-bk-text mb-1">
          E-Mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bk-light focus:border-transparent text-bk-text"
          placeholder="ihre@email.de"
        />
      </div>
      <div>
        <label htmlFor="telefon" className="block text-sm font-medium text-bk-text mb-1">
          Telefon *
        </label>
        <input
          type="tel"
          id="telefon"
          name="telefon"
          required
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bk-light focus:border-transparent text-bk-text"
          placeholder="+49 000 000000"
        />
      </div>
      <div>
        <label htmlFor="nachricht" className="block text-sm font-medium text-bk-text mb-1">
          Nachricht *
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          required
          rows={5}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bk-light focus:border-transparent text-bk-text resize-none"
          placeholder="Womit können wir Ihnen helfen?"
        />
      </div>
      {status === "error" && <p className="text-sm text-red-600">{errorMsg}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-bk-dark hover:bg-bk-mid text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Wird gesendet…" : "Nachricht senden"}
      </button>
      <p className="text-xs text-bk-gray">
        Mit dem Absenden stimmen Sie unserer{" "}
        <a href="/datenschutz" className="underline hover:text-bk-light">
          Datenschutzerklärung
        </a>{" "}
        zu.
      </p>
    </form>
  );
}
