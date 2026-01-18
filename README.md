# 💖 Girl Chat Bot (Telegram) — Render + MongoDB

A **cute girl-style Telegram chatbot** 🤖💗  
Fast, clean, and deploy-ready for **Render** 🚀 with **MongoDB** support.

---

## ✨ Features
✅ Cute girl replies in private chat  
✅ Group reply only when **tagged** `@YourBotUsername`  
✅ `/start` message with **random emojis** 💖✨  
✅ Start **image + buttons** (Support + Add to Group)  
✅ MongoDB connected (safe & clean)  
✅ Render Port binding fixed (no deploy errors)  

---

## 📁 Repo Structure
```
girl-chat-bot/
│── index.js
│── package.json
│── render.yaml
│── config.js
│── .env.example
│── database/
│   └── mongo.js
│── handlers/
│   ├── start.js
│   ├── chat.js
│   └── group.js
│── utils/
│   ├── helpers.js
│   └── logger.js
```

---

## 🛠️ Setup (Local)
### 1) Install
```bash
npm install
```

### 2) Create `.env`
Copy `.env.example` → `.env`

### 3) Run
```bash
npm start
```

---

## 🌍 Deploy on Render (Fast 🚀)
### 1) Create Web Service
- Build Command:
```bash
npm install
```
- Start Command:
```bash
npm start
```

### 2) Add ENV Variables
Render → **Environment** add:

| KEY | VALUE |
|---|---|
| BOT_TOKEN | your telegram bot token |
| MONGO_URI | your mongodb url |
| OWNER_ID | 8206476526 |
| SUPPORT_CHANNEL | https://t.me/yourchannel |
| BOT_NAME | ShinchanVibeGirl |
| START_IMAGE | image link |
| PORT | 10000 |

---

## 💬 Group Usage
Tag bot in group:
```
@YourBotUsername hello
```

---

## 💖 Made With Love
If you want more features like **AI replies**, **ban/mute/warn**, **broadcast**, tell me 😄🔥
