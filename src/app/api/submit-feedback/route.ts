import { NextResponse } from "next/server";
import { sendFeedbackEmail } from "@/lib/sendFeedbackEmail";

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { email, firstName, lastName, message, phoneNumber, reasons } =
      await req.json();

    await sendFeedbackEmail({
      email,
      firstName,
      lastName,
      message,
      phoneNumber,
      reasons,
    });
    console.log("Feedback emailed successfully to admin recipients.");

    return NextResponse.json({ message: "Feedback submitted successfully! Thank you." });
  } catch (error) {
    console.error("Error in /api/submit-feedback:", error);
    return NextResponse.json(
      { message: "Failed to submit feedback", error: String(error) },
      { status: 500 }
    );
  }
}

