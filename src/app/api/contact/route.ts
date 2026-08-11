import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Please fix the highlighted fields.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  const data = parsed.data;
  // In production this would enqueue to a CRM/email service.
  console.log(
    `[contact] ${data.name} <${data.email}> subject=${data.subject}`
  );

  return NextResponse.json({
    success: true,
    message: "Message received. We'll get back to you within one business day.",
    receivedAt: new Date().toISOString(),
  });
}
