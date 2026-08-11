import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/schemas";

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

  const parsed = quoteSchema.safeParse(body);
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
    `[quote] ${data.name} <${data.email}> service=${data.service} phone=${data.phone ?? "n/a"}`
  );

  return NextResponse.json({
    success: true,
    message: "Quote request received. A senior advisor will reach out within one business day.",
    receivedAt: new Date().toISOString(),
    service: data.service,
  });
}
