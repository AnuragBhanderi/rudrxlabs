import "server-only";
import { EmailNotConfiguredError, sendEmail } from "@/lib/integrations/email";
import type { ContactInput } from "@/lib/validation/contact";

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

export async function submitEnquiry(input: ContactInput) {
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!to || !from) throw new EmailNotConfiguredError("CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is not set");

  const rows: [string, string][] = [
    ["Name", input.name],
    ["Email", input.email],
    ["Company", input.company || "—"],
    ["Project type", input.projectType],
    ["Budget", input.budget || "—"],
  ];

  const text = [...rows.map(([k, v]) => `${k}: ${v}`), "", input.message].join("\n");
  const html = `
    <h2 style="font-family:sans-serif">New enquiry from rudrxlabs.com</h2>
    <table style="font-family:sans-serif;font-size:14px">
      ${rows.map(([k, v]) => `<tr><td style="color:#5b6270;padding:4px 12px 4px 0">${k}</td><td>${escapeHtml(v)}</td></tr>`).join("")}
    </table>
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(input.message)}</p>`;

  await sendEmail({
    to,
    from,
    replyTo: input.email,
    subject: `New enquiry: ${input.projectType} — ${input.name}`,
    html,
    text,
  });
}
