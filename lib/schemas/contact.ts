import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Format d'email invalide"),
  phone: z
    .string()
    .min(8, "Numéro de téléphone invalide")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Format d'email invalide"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
