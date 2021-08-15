const emojis = [
  {emoji: "😍"},
  {emoji: "😝"},
  {emoji: "🧐"},
  {emoji: "😊"},
  {emoji: "🤓"},
  {emoji: "👻"},
  {emoji: "😻"},
  {emoji: "🐭"},
  {emoji: "🐰"},
  {emoji: "🍍"},
];

const emoji = document.querySelector("#emoji span:first-child");

const todaysemoji = emojis[Math.floor(Math.random() * emojis.length)];

emoji.innerText = todaysemoji.emoji;