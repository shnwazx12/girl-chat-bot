import dotenv from "dotenv";
dotenv.config();

export const config = {
  token: process.env.BOT_TOKEN,
  mongo: process.env.MONGO_URI,
  ownerId: Number(process.env.OWNER_ID || 0),
  supportChannel: process.env.SUPPORT_CHANNEL || "https://t.me/",
  botName: process.env.BOT_NAME || "GirlBot",
  startImage: process.env.START_IMAGE || "",
  port: Number(process.env.PORT || 10000)
};
