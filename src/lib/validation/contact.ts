import { z } from "zod";

export const projectTypes = [
  "Inventory or point of sale",
  "Distribution or ordering portal",
  "Internal tool or dashboard",
  "Automation or integration",
  "New product or MVP",
  "Something else",
] as const;

export const budgets = ["Not sure yet", "Under $5k", "$5k – $15k", "$15k – $40k", "$40k+"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(100),
  email: z.string().trim().email("Enter a valid email address.").max(200),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  projectType: z.enum(projectTypes, { errorMap: () => ({ message: "Choose a project type." }) }),
  budget: z.enum(budgets).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a little more (at least 20 characters).")
    .max(5000, "Keep it under 5000 characters."),
  // Honeypot: real visitors never see or fill this field.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactField = keyof ContactInput;
export type ContactErrors = Partial<Record<ContactField, string>>;

export function fieldErrors(error: z.ZodError<ContactInput>): ContactErrors {
  const out: ContactErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0] as ContactField;
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
