import { cleanText, randomEmoji } from "../utils/helpers.js";

export async function groupMessageHandler(ctx) {
  const text = cleanText(ctx.message?.text || "");
  if (!text) return;

  const botUsername = ctx.botInfo?.username;
  const isTagged = text.includes(`@${botUsername}`);

  if (!isTagged) return;

  const emoji = randomEmoji();
  const user = ctx.from?.first_name || "Baby";

  const replyText = `${emoji} Hii ${user} 😚\nYou tagged me so I’m here 💕\n\nSay something cute ✨`;

  return ctx.reply(replyText, { reply_to_message_id: ctx.message.message_id });
}
