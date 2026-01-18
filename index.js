import http from "http";
import { Telegraf } from "telegraf";
import { config } from "./config.js";
import { connectMongo } from "./database/mongo.js";
import { startHandler } from "./handlers/start.js";
import { groupMessageHandler } from "./handlers/group.js";
import { privateChatHandler } from "./handlers/chat.js";

if (!config.token) {
  console.log("❌ BOT_TOKEN missing!");
  process.exit(1);
}

const bot = new Telegraf(config.token);

// Mongo Connect
await connectMongo();

// Start Command
bot.start(startHandler);

// Messages
bot.on("text", async (ctx) => {
  if (ctx.chat.type === "private") return privateChatHandler(ctx);
  return groupMessageHandler(ctx);
});

// Render Port Binding Fix
http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Girl Bot is running 💖");
}).listen(config.port, () => {
  console.log(`✅ Server running on PORT: ${config.port}`);
});

// Launch
bot.launch().then(() => console.log("🤖 Bot Started Successfully 💕"));

// Graceful Stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
