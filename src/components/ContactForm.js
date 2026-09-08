"use client";

import { useState } from "react";
import { site } from "@/lib/site";

// No backend yet: submitting builds a pre-filled email and hands off to the
// visitor's mail client, so the form works today with zero setup. Swap this
// handler for a POST to an API route or a form service (Formspree, Resend, …)
// whenever you want submissions to land without opening an email app.
export default function ContactForm({ initialMessage = "" }) {
  const [form, setForm] = useState({ name: "", email: "", message: initialMessage });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`New project inquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          required
          value={form.name}
          onChange={update("name")}
          className="rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm outline-none focus:border-accent"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={update("email")}
          className="rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm outline-none focus:border-accent"
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Project details
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          className="resize-none rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm outline-none focus:border-accent"
          placeholder="What are you building, and what do you need help with?"
        />
      </div>

      <button type="submit" className="btn-primary justify-center">
        Send message
      </button>
    </form>
  );
}
