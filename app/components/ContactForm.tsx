"use client";

import { useState, FormEvent } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgonwvpy";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-transparent border border-marrow-white/20 text-marrow-white placeholder-marrow-white/40 px-4 py-3 text-base focus:outline-none focus:border-marrow-red transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className={inputClass}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          className={inputClass}
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className={inputClass}
      />
      <textarea
        name="message"
        placeholder="Tell us what you're building or trying to solve."
        required
        rows={5}
        className={`${inputClass} resize-none`}
      />

      {status === "success" ? (
        <p className="text-marrow-red text-sm font-medium">
          Sent. We'll be in touch.
        </p>
      ) : status === "error" ? (
        <p className="text-marrow-red text-sm">
          Something went wrong. Email us directly at{" "}
          <a href="mailto:hello@getmarrow.co" className="underline">
            hello@getmarrow.co
          </a>
        </p>
      ) : (
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center gap-2 bg-marrow-red text-marrow-white px-8 py-3 text-base font-medium hover:bg-marrow-white hover:text-charcoal transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending…" : "Send it →"}
        </button>
      )}
    </form>
  );
}
