CREATE TABLE IF NOT EXISTS applications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstName TEXT,
  middleName TEXT,
  lastName TEXT,
  phoneNumber TEXT,
  gender TEXT,
  homeCity TEXT,
  taxReturn TEXT,
  streetAddress TEXT,
  city TEXT,
  state TEXT,
  zipCode TEXT,
  country TEXT,
  email TEXT,
  confirmEmail TEXT,
  grantType TEXT,
  grantAmount TEXT,
  accountType TEXT,
  receiveType TEXT,
  grantMailAddress TEXT,
  grantCity TEXT,
  grantState TEXT,
  grantZipCode TEXT,
  grantCountry TEXT,
  grantPhoneNumber TEXT,
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
