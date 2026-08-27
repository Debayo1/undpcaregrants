CREATE TABLE IF NOT EXISTS applications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstName TEXT,
  middleName TEXT,
  lastName TEXT,
  motherMaidenName TEXT,
  streetAddress TEXT,
  streetAddress2 TEXT,
  city TEXT,
  state TEXT,
  country TEXT,
  email TEXT,
  phoneNumber TEXT,
  gender TEXT,
  maritalStatus TEXT,
  applicationReason TEXT,
  amountPreferred TEXT,
  doYouWork TEXT,
  occupation TEXT,
  annualIncome TEXT,
  ssnEin TEXT,
  driverLicense TEXT,
  disbursementMethod TEXT,
  overviewReason TEXT,
  createdAt TEXT
);

CREATE TABLE IF NOT EXISTS feedbacks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT,
  firstName TEXT,
  lastName TEXT,
  message TEXT,
  phoneNumber TEXT,
  reasons TEXT,
  createdAt TEXT
);
