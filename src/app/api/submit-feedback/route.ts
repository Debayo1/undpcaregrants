import { db } from "@/lib/firebase";
import { ref, push } from "firebase/database";
import { sendFeedbackEmail } from "@/lib/sendFeedbackEmail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, firstName, lastName, message, phoneNumber, reasons } =
    await req.json();
  try {
    const data = {
      email,
      firstName,
      lastName,
      message,
      phoneNumber,
      reasons,
    };
    // Connect to MongoDB and save the data
    // Save to Firebase Realtime Database
    const feedbackRef = ref(db, "feedbacks");
    await push(feedbackRef, data);

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
    return NextResponse.json(error, { status: 500 });
  }
}
