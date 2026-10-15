"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea } from "@/components/ui/Field";
import { site } from "@/lib/content/site";
import {
  budgets,
  contactSchema,
  fieldErrors,
  projectTypes,
  type ContactErrors,
  type ContactField,
} from "@/lib/validation/contact";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error));
      return;
    }

    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json: { ok: boolean; errors?: ContactErrors; message?: string } = await res.json();
      if (json.ok) {
        setStatus("sent");
        return;
      }
      setErrors(json.errors ?? {});
      setMessage(json.message ?? "Check the highlighted fields.");
      setStatus("error");
    } catch {
      setMessage("We couldn't send your message. Please email us directly.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-lg border border-success/30 bg-success/5 p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-success" strokeWidth={1.75} />
        <h2 className="mt-4 text-2xl font-bold">Thanks, we got it.</h2>
        <p className="mt-2 text-muted">We&apos;ll reply within one business day.</p>
      </div>
    );
  }

  const err = (f: ContactField) =>
    errors[f] ? { "aria-invalid": true, "aria-describedby": `${f}-error` } : {};

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <Input id="name" name="name" autoComplete="name" required {...err("name")} />
        </Field>
        <Field id="email" label="Work email" error={errors.email}>
          <Input id="email" name="email" type="email" autoComplete="email" required {...err("email")} />
        </Field>
      </div>
      <Field id="company" label="Company" optional error={errors.company}>
        <Input id="company" name="company" autoComplete="organization" {...err("company")} />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="projectType" label="What do you need?" error={errors.projectType}>
          <Select id="projectType" name="projectType" defaultValue="" required {...err("projectType")}>
            <option value="" disabled>
              Choose one
            </option>
            {projectTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </Select>
        </Field>
        <Field id="budget" label="Budget" optional error={errors.budget}>
          <Select id="budget" name="budget" defaultValue="" {...err("budget")}>
            <option value="">Choose one</option>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </Select>
        </Field>
      </div>
      <Field id="message" label="Tell us about the project" error={errors.message}>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="What does your team do manually today? What should the software do?"
          {...err("message")}
        />
      </Field>

      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-sm border border-danger/30 bg-danger/5 px-4 py-3 text-sm text-danger">
          {message}{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto sm:justify-self-start">
        {status === "sending" ? (
          <>
            <Loader2 className="size-5 animate-spin" /> Sending
          </>
        ) : (
          <>
            Send message <ArrowRight className="size-5" strokeWidth={1.75} />
          </>
        )}
      </Button>
    </form>
  );
}
