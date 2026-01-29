let GameChar = prompt("Enter your full name in capital letters without any spaces ");
let score = 0;  // Initialize score to 0
console.log("You entered: " + GameChar);
console.log("Your name has " + GameChar.length + " characters");

function RandomChar() {
                        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                        return alphabet[Math.floor(Math.random() * alphabet.length)];
                      }

// Main game loop
while (GameChar.length > 0) {
    let GuessChar = RandomChar();
    score++;  // Increase score by 1 for each random character generated
    console.log("Random character generated: " + GuessChar);
    console.log("Current score: " + score);

    // Check if the GuessChar is present in GameChar
    if (GameChar.includes(GuessChar)) {
        // Remove the character from GameChar
        GameChar = GameChar.replace(GuessChar, "");
        console.log("Match found!");
    } else {
        console.log("No match found.");
    }
}

// Game over
console.log("Game over! Final score: " + score);
