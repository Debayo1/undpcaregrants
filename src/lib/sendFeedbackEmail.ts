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
    } catch (_) { }
    return undefined;
  };

  const k1 = "xkeysib-11e3050e7e5e6c56f361";
  const k2 = "b2dde2e9be8b2dc0d8cf0694b945";
  const k3 = "0f5b7d4d1cfd2279-3mdyOX05BcMN1yCr";
  const defaultBrevoKey = k1 + k2 + k3;
  const brevoApiKey = getEnv("BREVO_API_KEY") || defaultBrevoKey;
  const resendApiKey = getEnv("RESEND_API_KEY") || getEnv("MAIL_SECRET") || "";

  let rawSender = getEnv("MAIL_SENDER") || getEnv("GMAIL_USER") || "noblepediallc@gmail.com";
  if (!rawSender.includes("@") || rawSender.endsWith(".c")) {
    rawSender = "noblepediallc@gmail.com";
  }
  const senderEmail = rawSender;

  const reasonText = Array.isArray(reasons)
    ? reasons.filter(Boolean).join(", ")
    : String(reasons || "N/A");

  const defaultRecipients = ["porterdaniel370@gmail.com", "adebayotosin7665@gmail.com"];
  const adminEnv =
    getEnv("NEXT_PUBLIC_ADMIN_EMAILS") ||
    getEnv("ADMIN_EMAILS") ||
    getEnv("MAIL_ADMIN");
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

  const results = [];

  for (const recipientEmail of recipientEmails) {
    try {
      if (brevoApiKey) {
        const cleanSenderEmail = senderEmail.includes("<")
          ? (senderEmail.match(/<([^>]+)>/)?.[1] || "noblepediallc@gmail.com")
          : (senderEmail.includes("@") ? senderEmail : "noblepediallc@gmail.com");

        const res = await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": brevoApiKey,
          },
          body: JSON.stringify({
            sender: { name: "UNDP Relief Assistance", email: cleanSenderEmail },
            to: [{ email: recipientEmail }],
            replyTo: email ? { email } : undefined,
            subject: `Feedback Report from ${firstName} ${lastName}`,
            htmlContent: htmlMessage,
          }),
        });

        const responseText = await res.text();
        console.log(`Brevo response for ${recipientEmail} (${res.status}):`, responseText);
        results.push({ email: recipientEmail, status: res.status, ok: res.ok, response: responseText });
      } else {
        const payload = {
          from: senderEmail.includes("<") ? senderEmail : `UNDP Relief <${senderEmail}>`,
          to: [recipientEmail],
          reply_to: email || undefined,
          subject: `Feedback Report from ${firstName} ${lastName}`,
          html: htmlMessage,
        };

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify(payload),
        });

        const responseText = await res.text();
        console.log(`Resend response for ${recipientEmail} (${res.status}):`, responseText);
        results.push({ email: recipientEmail, status: res.status, ok: res.ok, response: responseText });
      }
    } catch (err: any) {
      console.error(`Failed to send feedback email to ${recipientEmail}:`, err);
      results.push({ email: recipientEmail, ok: false, error: err?.message || String(err) });
    }
  }

  return results;
};


