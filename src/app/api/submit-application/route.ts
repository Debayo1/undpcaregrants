import { NextResponse } from "next/server";
import { sendApplicationEmail } from "@/lib/sendApplicationEmail";

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    // Dispatch directly to the configured admin email inboxes
    await sendApplicationEmail(formData);
    console.log("Application received and emailed successfully to admin recipients.");

    return NextResponse.json({
      message: "Application submitted successfully! Our verification team will review the application to determine eligibility. You will receive a text on the status of your application soon. Good luck!",
    });
  } catch (error) {
    console.error("Error in /api/submit-application:", error);
    return NextResponse.json(
      { message: "Failed to submit application. Please try again.", error: String(error) },
      { status: 500 }
    );
  }
}


