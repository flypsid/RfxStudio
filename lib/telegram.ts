const TIMEOUT = 10000; // 10s timeout

export async function sendTelegramNotification(
  message: string
): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn(
      "TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID missing in env variables"
    );
    return false;
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), TIMEOUT);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: `🚀 <b>Source: RfxStudio</b>\n\n${message}`,
        parse_mode: "HTML",
      }),
      signal: controller.signal,
    });

    clearTimeout(id);

    if (!response.ok) {
      console.error("Telegram API Error:", await response.text());
      return false;
    }

    return true;
  } catch (error) {
    console.error("Failed to send Telegram notification:", error);
    return false;
  }
}
