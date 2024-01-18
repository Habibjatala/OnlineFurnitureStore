import z from "zod";
const contactShema = z.object({
  username: z
    .string({ required_error: "company Name is required" })
    .trim()
    .min(3)
    .max(30),
  email: z.string({ required_error: "Email is required" }).email().trim(),
  message: z
    .string({ required_error: "Message is required" })
    .min(10, { message: "Minimum 10 characters" }),
});
export default contactShema;
