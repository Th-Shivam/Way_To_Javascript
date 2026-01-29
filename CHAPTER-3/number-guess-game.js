// a simple number guessing game
let gameNum = 24
let userNum = prompt("Guess the game number-->")
userNum = Number.parseInt(userNum)
while (userNum !== gameNum) {
    userNum = prompt("You entered a wrong number , Guess again -->")
    userNum = Number.parseInt(userNum)

}

alert("Congrats  you won the game ");