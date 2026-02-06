import * as yup from "yup";
const MAX_SIZE = 1 * 1024 * 1024; // 1 MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
export const ApplySchema = yup.object().shape({
  firstName: yup.string().required("First name required"),
  middleName: yup.string().required("Middle name required"),
  lastName: yup.string().required("Last name required"),
  phoneNumber: yup.string().required("Phone number required"),
  gender: yup.string().required("Gender required"),
  homeCity: yup.string(),
  taxReturn: yup.string(),
  streetAddress: yup.string(),
  city: yup.string(),
  state: yup.string(),
  zipCode: yup.string(),
  country: yup.string(),
  email: yup.string().required("Email is required"),
  confirmEmail: yup.string().required("Email is required"),
  grantType: yup.string(),
  grantAmount: yup.string(),
  accountType: yup.string(),
  grantMailAddress: yup.string(),
  grantCity: yup.string(),
  grantState: yup.string(),
  grantZipCode: yup.string(),
  grantCountry: yup.string(),
  grantPhoneNumber: yup.string(),
});
