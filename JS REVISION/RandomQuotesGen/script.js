const quotes = [
  "Dream big, start small, but start today.",
  "Code is poetry written in logic.",
  "Consistency beats motivation every single time.",
  "Your future depends on what you do today.",
  "Learning never exhausts the mind.",
  "First solve the problem, then write the code.",
  "Success is built one line of code at a time.",
  "Don’t wait for opportunity, create it.",
  "Great things take time and patience.",
  "Errors are proof that you are trying.",
  "Focus on progress, not perfection.",
  "Discipline will take you where motivation can’t.",
  "Small steps daily lead to big results.",
  "Every expert was once a beginner.",
  "Debugging is twice as hard as writing the code.",
  "Hard work beats talent when talent doesn’t work.",
  "Learn. Build. Break. Fix. Repeat.",
  "Your only limit is your mindset.",
  "Stay curious, stay hungry.",
  "Code today, change tomorrow."
];


const button = document.querySelector("button");
const quoteText = document.querySelector("h1");

button.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
});