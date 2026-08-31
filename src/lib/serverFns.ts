import { createServerFn } from "@tanstack/react-start";
import { contactSchema, newsletterSchema } from "@/lib/schemas/contact";
import { sendTelegramNotification } from "@/lib/telegram";

export type ActionState = {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export const submitContactFn = createServerFn({ method: "POST" })
  .validator((data: { name: string; email: string; phone?: string; message: string }) => data)
  .handler(async ({ data }): Promise<ActionState> => {
    const validated = contactSchema.safeParse(data);
    if (!validated.success) {
      return {
        success: false,
        errors: validated.error.flatten().fieldErrors as Record<string, string[]>,
        message: "Please check the form fields.",
      };
    }
    const { name, email, phone, message } = validated.data;
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
      return { success: false, message: "Error sending message. Please try again later." };
    }
    return { success: true, message: "Message sent successfully!" };
  });

export const subscribeNewsletterFn = createServerFn({ method: "POST" })
  .validator((data: { email: string }) => data)
  .handler(async ({ data }): Promise<ActionState> => {
    const validated = newsletterSchema.safeParse(data);
    if (!validated.success) {
      return {
        success: false,
        errors: validated.error.flatten().fieldErrors as Record<string, string[]>,
        message: "Invalid email.",
      };
    }
    const { email } = validated.data;
    const telegramMessage = `
📰 <b>New Newsletter Subscriber</b>

📧 <b>Email:</b> ${email}
`;
    const sent = await sendTelegramNotification(telegramMessage);
    if (!sent) {
      return { success: false, message: "Subscription failed." };
    }
    return { success: true, message: "Subscription confirmed!" };
  });
