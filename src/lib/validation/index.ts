import { z } from "zod";

export const SignupValidationSchema = z.object({
  name: z.string().min(2, "Name must be atleast 2 characters"),
  username: z.string().min(2, "Username must be atleast 2 characters"),
  email: z.string().email(),
  password: z.string().min(8, "Password must be ay least 8 characters"),
});
