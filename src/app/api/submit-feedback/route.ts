import { NextResponse } from "next/server";
import { sendFeedbackEmail } from "@/lib/sendFeedbackEmail";

export async function POST(req: Request) {
  const { email, firstName, lastName, message, phoneNumber, reasons } =
    await req.json();
  try {
    const db: any = process.env.DB;

    if (db) {
      await db.prepare(`
        INSERT INTO feedbacks (email, firstName, lastName, message, phoneNumber, reasons, createdAt)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(
        email || null,
        firstName || null,
        lastName || null,
        message || null,
        phoneNumber || null,
        typeof reasons === "object" ? JSON.stringify(reasons) : (reasons || null),
        new Date().toISOString()
      ).run();
    }

    await sendFeedbackEmail({
      email,
      firstName,
      lastName,
      message,
      phoneNumber,
      reasons,
    });

    return NextResponse.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error in /api/submit-feedback:", error);
    return NextResponse.json({ message: "Failed to submit feedback", error: String(error) }, { status: 500 });
  }
}
