"use server";

export async function sendTelegramMessage(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return { success: false, error: "Faltan configurar las credenciales de Telegram." };
  }

  const text = `
🎉 <b>Nuevo mensaje desde el Portfolio</b>

👤 <b>Nombre:</b> ${name}
📧 <b>Email:</b> ${email}

💬 <b>Mensaje:</b>
${message}
  `;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      throw new Error("Fallo al enviar a Telegram");
    }

    return { success: true };
  } catch (error) {
    console.error("Error enviando Telegram:", error);
    return { success: false, error: "Error de red o servidor." };
  }
}
