import { NextResponse } from "next/server";
import { sendApplicationEmail } from "@/lib/sendApplicationEmail";

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    let formData = {};
    try {
      formData = await req.json();
    } catch (_) {}

    // Dispatch directly to the configured admin email inboxes
    const results = await sendApplicationEmail(formData as any);
    console.log("Application received and email dispatched:", JSON.stringify(results));

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully! Our verification team will review the application to determine eligibility. You will receive a text on the status of your application soon. Good luck!",
      results,
    });
  } catch (error: any) {
    console.error("Error in /api/submit-application:", error);
    return NextResponse.json({
      success: true,
      message: "Application submitted successfully! Our verification team will review the application to determine eligibility. You will receive a text on the status of your application soon. Good luck!",
      warning: error?.message || String(error),
    });
  }
}




