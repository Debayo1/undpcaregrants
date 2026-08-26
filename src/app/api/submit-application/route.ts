import { NextRequest, NextResponse } from "next/server";
import { sendApplicationEmail } from "@/lib/sendApplicationEmail";

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    let formData = {};
    try {
      formData = await req.json();
    } catch (e: any) {
      console.error("Failed to parse request JSON:", e);
    }

    const results = await sendApplicationEmail(formData as any);
    console.log("Application email dispatch results:", JSON.stringify(results));

    const hasSuccess = results.some(
      (r: any) => r.ok === true || r.status === 200 || r.status === 201
    );

    if (!hasSuccess && results.length > 0) {
      const firstErr = results[0]?.response || results[0]?.error || "Failed to dispatch email.";
      return NextResponse.json(
        {
          success: false,
          message: typeof firstErr === "string" ? firstErr : JSON.stringify(firstErr),
          results,
        },
        { status: 500 }
      );
    }

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




