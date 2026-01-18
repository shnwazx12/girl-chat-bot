import { Markup } from "telegraf";
import { config } from "../config.js";
import { randomEmoji } from "../utils/helpers.js";

export async function startHandler(ctx) {
  const emoji = randomEmoji();
  const name = ctx.from?.first_name || "Cutie";

  const caption = `
${emoji} *Hey ${name}!*  
I’m *${config.botName}* 💕  
A cute girl chatbot made for *groups + private chat* ✨

🌸 *Features:*
• Reply when tagged in groups  
• Cute girl style replies 😚  
• Safe + fast MongoDB support  
• Clean Render deploy ready 🚀

👑 *Owner ID:* \`${config.ownerId}\`

Tap buttons below 👇
`;

  const buttons = Markup.inlineKeyboard([
    [Markup.button.url("💬 Support Channel", config.supportChannel)],
    [Markup.button.url("➕ Add Me To Group", `https://t.me/${ctx.botInfo.username}?startgroup=true`)]
  ]);

  if (config.startImage) {
    return ctx.replyWithPhoto(config.startImage, {
      caption,
      parse_mode: "Markdown",
      ...buttons
    });
  }

  return ctx.reply(caption, { parse_mode: "Markdown", ...buttons });
}
