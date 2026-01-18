import mongoose from "mongoose";
import { config } from "../config.js";

export async function connectMongo() {
  if (!config.mongo) {
    console.log("❌ MONGO_URI missing!");
    return;
  }

  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(config.mongo, {
      autoIndex: true,
      serverSelectionTimeoutMS: 10000
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.log("❌ MongoDB Connection Error:", err.message);
  }
}
