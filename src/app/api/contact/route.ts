import { NextResponse } from "next/server";
import { EmailNotConfiguredError } from "@/lib/integrations/email";
import { submitEnquiry } from "@/lib/services/contact";
import { isRateLimited } from "@/lib/utils/rate-limit";
import { contactSchema, fieldErrors } from "@/lib/validation/contact";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, message: "Too many requests. Try again in a few minutes." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    // A filled honeypot means a bot: pretend success so it does not retry.
    if (parsed.error.issues.some((i) => i.path[0] === "website")) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ok: false, errors: fieldErrors(parsed.error) }, { status: 422 });
  }

  try {
    await submitEnquiry(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const requestId = crypto.randomUUID();
    console.error(`[contact] ${requestId}`, error instanceof EmailNotConfiguredError ? error.message : error);
    return NextResponse.json(
      { ok: false, message: "We couldn't send your message. Please email us directly." },
      { status: 500 },
    );
  }
}
