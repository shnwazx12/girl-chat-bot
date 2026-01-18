export function randomEmoji() {
  const emojis = ["💖", "✨", "🌸", "🥺", "💋", "😚", "🦋", "🍓", "🌙", "🔥", "😻"];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

export function cleanText(text = "") {
  return text.replace(/\s+/g, " ").trim();
}
