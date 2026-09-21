import { NextResponse } from "next/server";
import { sendApplicationEmail } from "@/lib/sendApplicationEmail";

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    let formData = {};
    try {
      formData = await req.json();
    } catch (_) {}

    const results = await sendApplicationEmail(formData as any);
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
        message: error?.message || String(error) || "Failed to send email application.",
      },
      { status: 500 }
    );
  }
}




