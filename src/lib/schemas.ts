import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your full name").max(80),
  email: z.string().email("Enter a valid email address").max(120),
  phone: z.string().optional().refine(
    (v) => !v || /^[+()\-\s\d]{7,20}$/.test(v),
    "Enter a valid phone number"
  ),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().min(10, "Tell us a little more (at least 10 characters)").max(1000),
});

export type QuoteInput = z.infer<typeof quoteSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name").max(80),
  email: z.string().email("Enter a valid email address").max(120),
  subject: z.string().min(3, "Please add a subject").max(120),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
