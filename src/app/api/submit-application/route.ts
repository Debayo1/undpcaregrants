import { NextResponse } from "next/server";
import { sendApplicationEmail } from "@/lib/sendApplicationEmail";

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    let formData = {};
    try {
      formData = await req.json();
    } catch (_) {}

    // Dispatch directly to the configured admin email inboxes via Resend
    const results = await sendApplicationEmail(formData as any);
    console.log("Application received and email dispatched:", JSON.stringify(results));

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully!",
      results,
    });
  } catch (error: any) {
    console.error("Error in /api/submit-application:", error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to send email application.",
      },
      { status: 500 }
    );
  }
}




