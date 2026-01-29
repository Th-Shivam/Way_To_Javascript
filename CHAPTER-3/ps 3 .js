let GameNum = 55 ;
let UserNum = prompt("Enter the Game Number => ");
UserNum = Number.parseInt(UserNum) ;
while (UserNum !== GameNum) {
    UserNum =  prompt("Enter the Game Number => ") ;
    UserNum = Number.parseInt(UserNum) ;
    if (UserNum == GameNum){console.log("u won the game")}
}      