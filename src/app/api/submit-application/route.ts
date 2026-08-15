import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
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
    const db: any = process.env.DB;

    if (db) {
      await db.prepare(`
        INSERT INTO applications (
          firstName, middleName, lastName, phoneNumber, gender, homeCity, taxReturn,
          streetAddress, city, state, zipCode, country, email, confirmEmail,
          grantType, grantAmount, accountType, receiveType, grantMailAddress,
          grantCity, grantState, grantZipCode, grantCountry, grantPhoneNumber, createdAt
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        firstName || null,
        middleName || null,
        lastName || null,
        phoneNumber || null,
        gender || null,
        homeCity || null,
        taxReturn || null,
        streetAddress || null,
        city || null,
        state || null,
        zipCode || null,
        country || null,
        email || null,
        confirmEmail || null,
        grantType || null,
        grantAmount || null,
        accountType || null,
        receiveType || null,
        grantMailAddress || null,
        grantCity || null,
        grantState || null,
        grantZipCode || null,
        grantCountry || null,
        grantPhoneNumber || null,
        new Date().toISOString()
      ).run();
      console.log("Successfully saved to Cloudflare D1.");
    } else {
      console.warn("Cloudflare D1 DB binding not found.");
    }

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
        grantState,
        grantZipCode,
        grantCountry,
        grantPhoneNumber,
      });
      console.log("Email sent successfully.");
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
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
