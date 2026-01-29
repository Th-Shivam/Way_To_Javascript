let gameChar;

// Define the characters S, W, and G in an array
let chars = ['S', 'W', 'G'];

const game = (chars) => {
    // Get a random index between 0 and the length of the array
    const randomIndex = Math.floor(Math.random() * chars.length);
    // Return the character at the random index
    return chars[randomIndex];
};

gameChar = game(chars);  // Assign the random character to gameChar

console.log(gameChar);  // Outputs either 'S', 'W', or 'G'
