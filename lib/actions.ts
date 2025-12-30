"use server";

import { contactSchema, newsletterSchema } from "@/lib/schemas/contact";
import { sendTelegramNotification } from "@/lib/telegram";

export type ActionState = {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  const validatedFields = contactSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Veuillez vérifier les champs du formulaire.",
    };
  }

  const { name, email, phone, message } = validatedFields.data;

  // Format message for Telegram
  const telegramMessage = `
📣 <b>Nouveau Contact Site Web</b>

👤 <b>Nom:</b> ${name}
📧 <b>Email:</b> ${email}
📱 <b>Tél:</b> ${phone || "Non renseigné"}

📝 <b>Message:</b>
${message}
`;

  const sent = await sendTelegramNotification(telegramMessage);

  if (!sent) {
    return {
      success: false,
      message:
        "Erreur lors de l'envoi du message. Veuillez réessayer plus tard.",
    };
  }

  return {
    success: true,
    message: "Message envoyé avec succès !",
  };
}

export async function subscribeNewsletter(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const rawData = {
    email: formData.get("email"),
  };

  const validatedFields = newsletterSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Email invalide.",
    };
  }

  const { email } = validatedFields.data;

  // Format message for Telegram
  const telegramMessage = `
📰 <b>Nouvel Abonné Newsletter</b>

📧 <b>Email:</b> ${email}
`;

  const sent = await sendTelegramNotification(telegramMessage);

  if (!sent) {
    return {
      success: false,
      message: "Erreur lors de l'inscription.",
    };
  }

  return {
    success: true,
    message: "Inscription confirmée !",
  };
}
