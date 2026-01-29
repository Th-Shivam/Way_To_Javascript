let gameNum = 982977;
let userNum = prompt("Guess the game number -->");
userNum = Number.parseInt(userNum);

while (userNum !== gameNum) {
    for (let i = 0; i <= 1000000; i++) {
        if (i === gameNum) {
            userNum = i;
            console.log("the game number is " + i)
            break;
        }
    }
}

alert("Congrats, you won the game!");
