import nodemailer from "nodemailer";

export const sendFeedbackEmail = async ({
  email,
  firstName,
  lastName,
  message,
  phoneNumber,
  reasons,
}: {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  phoneNumber: string;
  reasons: string[];
}) => {
  const getEnv = (key: string): string | undefined => {
    try {
      if (typeof process !== "undefined" && process.env && process.env[key]) {
        return process.env[key];
      }
    } catch (_) {}
    return undefined;
  };

  const user =
    getEnv("GMAIL_USER") ||
    getEnv("SMTP_USER") ||
    getEnv("MAIL_USER") ||
    "";

  const pass =
    getEnv("GMAIL_APP_PASSWORD") ||
    getEnv("GMAIL_PASSWORD") ||
    getEnv("SMTP_PASS") ||
    getEnv("MAIL_PASS") ||
    "";

  const host = getEnv("SMTP_HOST") || "smtp.gmail.com";
  const port = Number(getEnv("SMTP_PORT")) || 465;
  const secure = port === 465;

  const sender = getEnv("MAIL_SENDER") || user || "UNDP Relief Assistance";

  const reasonText = Array.isArray(reasons)
    ? reasons.filter(Boolean).join(", ")
    : String(reasons || "N/A");

  const defaultRecipients = ["noblepediallc@gmail.com", "adebayotosin7665@gmail.com"];
  const adminEnv = getEnv("ADMIN_EMAILS") || getEnv("MAIL_ADMIN");
  let recipientEmails: string[] = adminEnv
    ? adminEnv.split(",").map((e) => e.trim()).filter(Boolean)
    : defaultRecipients;

  recipientEmails = recipientEmails.map((e) => {
    if (e.endsWith("@")) return e + "gmail.com";
    if (!e.includes(".")) return e + ".com";
    return e;
  });

  const htmlMessage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Feedback Report - UNDP Relief Assistance</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #f4f6f9;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
    }
    h1 {
      color: #0055b8;
      font-size: 20px;
      margin-top: 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 15px;
    }
    th, td {
      padding: 10px;
      border-bottom: 1px solid #e2e8f0;
      text-align: left;
      font-size: 14px;
    }
    th {
      background-color: #f8fafc;
      font-weight: 600;
      color: #475569;
      width: 35%;
    }
    td {
      color: #1e293b;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Feedback from ${firstName} ${lastName}</h1>
    <table>
      <tr><th>Full Name</th><td>${firstName} ${lastName}</td></tr>
      <tr><th>Email</th><td><a href="mailto:${email}">${email}</a></td></tr>
      <tr><th>Phone</th><td><a href="tel:${phoneNumber}">${phoneNumber}</a></td></tr>
      <tr><th>Reason(s)</th><td>${reasonText}</td></tr>
      <tr><th>Message</th><td style="white-space: pre-wrap;">${message}</td></tr>
    </table>
  </div>
</body>
</html>`;

  const transporter = nodemailer.createTransport({
    service: host.includes("gmail") ? "gmail" : undefined,
    host: !host.includes("gmail") ? host : undefined,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  const results = [];

  for (const recipientEmail of recipientEmails) {
    try {
      const info = await transporter.sendMail({
        from: sender,
        to: recipientEmail,
        replyTo: email || undefined,
        subject: `Feedback Report from ${firstName} ${lastName}`,
        html: htmlMessage,
      });

      console.log(`Feedback email dispatched to ${recipientEmail}:`, info.messageId);
      results.push({ email: recipientEmail, success: true, messageId: info.messageId });
    } catch (err: any) {
      console.error(`Failed to send feedback email to ${recipientEmail}:`, err);
      results.push({ email: recipientEmail, success: false, error: err?.message || String(err) });
    }
  }

  return results;
};


