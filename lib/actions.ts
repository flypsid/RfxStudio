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
      message: "Please check the form fields.",
    };
  }

  const { name, email, phone, message } = validatedFields.data;

  // Format message for Telegram
  const telegramMessage = `
📣 <b>New Website Contact</b>

👤 <b>Name:</b> ${name}
📧 <b>Email:</b> ${email}
📱 <b>Phone:</b> ${phone || "Not provided"}

📝 <b>Message:</b>
${message}
`;

  const sent = await sendTelegramNotification(telegramMessage);

  if (!sent) {
    return {
      success: false,
      message: "Error sending message. Please try again later.",
    };
  }

  return {
    success: true,
    message: "Message sent successfully!",
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
      message: "Invalid email.",
    };
  }

  const { email } = validatedFields.data;

  // Format message for Telegram
  const telegramMessage = `
📰 <b>New Newsletter Subscriber</b>

📧 <b>Email:</b> ${email}
`;

  const sent = await sendTelegramNotification(telegramMessage);

  if (!sent) {
    return {
      success: false,
      message: "Subscription failed.",
    };
  }

  return {
    success: true,
    message: "Subscription confirmed!",
  };
}
