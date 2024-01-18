import z from "zod";

const signupSchema = z.object({
  companyName: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast of three characters" })
    .max(200, { message: "Name must not be grater than 200" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid emeil address" })
    .min(3, { message: "Email must be atleast of three characters" })
    .max(200, { message: "Email must not be grater than 150" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be atleast 10 digits" }),
  phone: z.string().trim(),

  streetAddress1: z
    .string({ required_error: "Street Address is required" })
    .min(7, { message: "Minimum 7 characters" })
    .max(1024, {
      message: "Street Address can't be greater than 1024 characters",
    }),
  streetAddress2: z
    .string()
    .min(7, { message: "Minimum 7 characters" })
    .max(1024, {
      message: "Street Address can't be greater than 1024 characters",
    }),
  postalCode: z
    .string({ required_error: "Postal Code is required" })
    .min(5, { message: "Minimum 5 characters" })
    .max(1024, {
      message: "Postal Code can't be greater than 1024 characters",
    }),
  country: z
    .string({ required_error: "Country is required" })
    .min(3, { message: "Minimum 3 characters" })
    .max(1024, {
      message: "Country can't be greater than 1024 characters",
    }),
  hearAboutUs: z.string({
    required_error: "How do you hear about us is required",
  }),
  firstName: z
    .string({ required_error: "First Name is required" })
    .min(3, { message: "Minimum 3 characters" })
    .max(1024, {
      message: "First Name can't be greater than 1024 characters",
    }),
  lastName: z
    .string({ required_error: "Last Name is required" })
    .min(2, { message: "Minimum 32characters" })
    .max(1024, {
      message: "Last Name can't be greater than 1024 characters",
    }),
  jobTitle: z
    .string({ required_error: "Last Name is required" })
    .min(3, { message: "Minimum 3 characters" })
    .max(1024, {
      message: "Last Name can't be greater than 1024 characters",
    }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Minimum 7 characters" })
    .max(1024, { message: "Password can't be greater than 1024 characters" }),
});
export default signupSchema;
