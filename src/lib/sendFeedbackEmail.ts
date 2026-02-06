import { createClient } from "smtpexpress";

const smtpClient = createClient({
  projectId: process.env.MAIL_ID as string,
  projectSecret: process.env.MAIL_SECRET as string,
});

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
  const reason = `${reasons
    .filter((item: string) => item !== null)
    .map((item: string) => `<span>${item}</span>`)}`;

  await smtpClient.sendApi.sendMail({
    subject: `Feedback report`,
    sender: {
      name: `${firstName}`,
      email: process.env.MAIL_SENDER as string,
    },
    recipients: [
      {
        name: "Udpgrants",
        email: "michealpedelton111@gmail.com", // TODO: Replace with "jessicamatt91@gmail.com" once created
      },
    ],
    responseAddress: {
      name: firstName,
      email: email,
    },
    message: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grant Application Details</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    h1 {
      text-align: center;
      color: #333;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    th, td {
      padding: 10px;
      border-bottom: 1px solid #ddd;
      text-align: left;
    }
    th {
      background-color: #f7f7f7;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Feedback from ${firstName}</h1>
    <table>
      <tr><th>First Name</th><td>${firstName}</td></tr>
      <tr><th>Last Name</th><td>${lastName}</td></tr>
      <tr><th>Message</th><td>${message}</td></tr>
      <tr><th>Phone Number</th><td>${phoneNumber}</td></tr>
      <tr><th>Email</th><td>${email}</td></tr>
      <tr><th>Reasons</th><td style={{display:flex;gap:8px;}}>${reason}</td></tr>
    </table>
  </div>
</body>
</html>
`,
  });
};
