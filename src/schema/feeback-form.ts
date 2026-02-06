import * as yup from "yup";

export const feedbackFormSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  message: yup.string().required("Message is required"),
  reasons: yup.array(),
});
