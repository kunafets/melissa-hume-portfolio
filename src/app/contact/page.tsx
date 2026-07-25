"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="px-6 md:px-12 py-16 max-w-xl mx-auto">
      <h1 className="text-sm tracking-widest uppercase text-stone-500 mb-4 text-center">
        Contact
      </h1>
      <p className="text-stone-500 mb-12 text-center max-w-sm mx-auto">
        To inquire about available work or just to say hello, feel free to get in touch
      </p>

      {status === "success" ? (
        <div className="text-center text-stone-600 py-12">
          <p className="text-lg">Thank you for your message.</p>
          <p className="mt-2 text-stone-400">Melissa will be in touch soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm text-stone-500 mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border border-stone-200 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-stone-400 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-stone-500 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-stone-200 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-stone-400 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-stone-500 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full border border-stone-200 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-stone-400 transition-colors resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-500">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full border border-stone-800 bg-transparent px-6 py-3 text-sm tracking-widest uppercase text-stone-800 hover:bg-stone-800 hover:text-white transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}