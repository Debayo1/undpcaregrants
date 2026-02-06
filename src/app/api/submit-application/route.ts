import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { db } from "@/lib/firebase";
import { ref, push } from "firebase/database";
import { sendApplicationEmail } from "@/lib/sendApplicationEmail";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export async function POST(req: Request) {
  const {
    firstName,
    middleName,
    lastName,
    phoneNumber,
    gender,
    homeCity,
    taxReturn,
    streetAddress,
    city,
    state,
    zipCode,
    country,
    email,
    confirmEmail,
    grantType,
    grantAmount,
    accountType,
    receiveType,
    grantMailAddress,
    grantCity,
    grantState,
    grantZipCode,
    grantCountry,
    grantPhoneNumber,
  } = await req.json();

  try {
    console.log("API Route /api/submit-application hit");
    console.log("Cloudinary Config present?", !!process.env.CLOUDINARY_NAME);

    const folderName = "udp-grants"; // Specify your folder name

    // Prepare data for Firebase
    const rawSubmissionData = {
      firstName,
      middleName,
      lastName,
      phoneNumber,
      gender,
      homeCity,
      taxReturn,
      streetAddress,
      city,
      state,
      zipCode,
      country,
      email,
      confirmEmail,
      grantType,
      grantAmount,
      accountType,
      receiveType, // Add receiveType
      grantMailAddress,
      grantCity,
      grantState, // Fixed from grantStates
      grantZipCode, // Fixed from grantZipCodes
      grantCountry, // Fixed from grantCountrys
      grantPhoneNumber,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Remove undefined values as Firebase does not support them
    const submissionData = Object.fromEntries(
      Object.entries(rawSubmissionData).filter(([_, v]) => v !== undefined)
    );

    console.log("Saving to Firebase Realtime Database...", submissionData);

    // Save to Firebase Realtime Database
    const applicationsRef = ref(db, "applications");
    await push(applicationsRef, submissionData);

    console.log("Successfully saved to Firebase.");

    /*
    await sendApplicationEmail({ ... }); 
    */
    // Commented email for debugging speed if needed, or keep it. 
    // Keeping it but logging before/after.

    try {
      await sendApplicationEmail({
        firstName,
        middleName,
        lastName,
        phoneNumber,
        gender,
        homeCity,
        taxReturn,
        streetAddress,
        city,
        state,
        zipCode,
        country,
        email,
        confirmEmail,
        grantType,
        grantAmount,
        accountType,
        grantMailAddress,
        grantCity,
        grantState, // Fixed from grantStates
        grantZipCode, // Fixed from grantZipCodes
        grantCountry, // Fixed from grantCountrys
        grantPhoneNumber,
      });
      console.log("Email sent successfully.");
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      // Continue execution to return success for the form submission itself
    }

    return NextResponse.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error in /api/submit-application:", error);
    return NextResponse.json(
      { message: "Failed to submit form", error: String(error) },
      { status: 500 }
    );
  }
}
