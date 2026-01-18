import { cleanText, randomEmoji } from "../utils/helpers.js";

export async function privateChatHandler(ctx) {
  const text = cleanText(ctx.message?.text || "");
  if (!text) return;

  const emoji = randomEmoji();

  const replies = [
    `${emoji} Awww yesss 😚 tell me more 💖`,
    `${emoji} Omg really? 🥺✨`,
    `${emoji} Hehe you’re cute 😻`,
    `${emoji} I’m listening baby 💕`,
    `${emoji} Say it again 😚🌸`
  ];

  const reply = replies[Math.floor(Math.random() * replies.length)];
  return ctx.reply(reply);
}
