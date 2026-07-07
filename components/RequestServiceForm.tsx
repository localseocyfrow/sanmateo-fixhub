"use client";

import { useState } from "react";
import { site, clickToCall } from "@/lib/site";

const SERVICES = [
  "Stove Repair",
  "Gas Stove Repair",
  "Electric Stove Repair",
  "Emergency Stove Repair",
  "Range Repair",
  "Cooktop Repair",
  "Burner Repair",
  "Igniter Repair",
  "Control Board Repair",
  "Pilot Light Repair",
  "Not sure — need help diagnosing",
];

const CITIES = site.serviceAreas;

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

const inputBase =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink shadow-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100";
const labelBase = "mb-1.5 block text-sm font-semibold text-navy-800";

export function RequestServiceForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // No real endpoint configured yet — do NOT fake a submission.
    if (!site.forms.endpoint) {
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(site.forms.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "request-service-form", submittedTo: site.name }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6 text-center">
        <h3 className="text-lg font-bold text-navy-800">Thank you — your request was sent</h3>
        <p className="mt-2 text-ink-soft">
          We&apos;ll follow up about your stove repair. For faster help you can also call us directly.
        </p>
        <a href={clickToCall} className="mt-4 inline-block font-bold text-copper-700 underline">
          {site.phone.display}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8" noValidate>
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label className={labelBase} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" className={inputBase} />
        </div>
        <div>
          <label className={labelBase} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputBase} />
        </div>
        <div>
          <label className={labelBase} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={inputBase} />
        </div>
        <div>
          <label className={labelBase} htmlFor="city">
            City
          </label>
          <select id="city" name="city" required className={inputBase} defaultValue="">
            <option value="" disabled>
              Select your city
            </option>
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelBase} htmlFor="service">
            Service needed
          </label>
          <select id="service" name="service" required className={inputBase} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelBase} htmlFor="contactMethod">
            Preferred contact method
          </label>
          <select id="contactMethod" name="contactMethod" className={inputBase} defaultValue="Phone call">
            <option>Phone call</option>
            <option>Text message</option>
            <option>Email</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className={labelBase} htmlFor="description">
          Describe the stove problem
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className={inputBase}
          placeholder="e.g. Gas burner clicks but won't light, or electric element not heating."
        />
      </div>

      <div className="mt-4 flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-5 w-5 rounded border-line text-copper-600 focus:ring-teal-100"
        />
        <label htmlFor="consent" className="text-sm text-ink-soft">
          I agree to be contacted about my stove repair request. I understand this form does not send any personal
          emergency alerts. See our{" "}
          <a href="/privacy-policy/" className="font-semibold text-navy-700 underline">
            Privacy Policy
          </a>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-copper-600 px-6 py-3 font-bold text-white shadow-soft transition hover:bg-copper-700 hover:shadow-lift disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request Stove Service"}
      </button>

      {status === "error" && (
        <p role="alert" className="mt-3 text-sm font-semibold text-copper-700">
          Something went wrong sending your request. Please call us at{" "}
          <a href={clickToCall} className="underline">
            {site.phone.display}
          </a>
          .
        </p>
      )}
      {status === "unconfigured" && (
        <p role="alert" className="mt-3 rounded-lg bg-copper-50 p-3 text-sm text-navy-800">
          Online request handling isn&apos;t connected yet. Please call{" "}
          <a href={clickToCall} className="font-bold text-copper-700 underline">
            {site.phone.display}
          </a>{" "}
          to reach us now. <span className="text-ink-faint">(Configure a form endpoint to enable submissions.)</span>
        </p>
      )}
    </form>
  );
}
