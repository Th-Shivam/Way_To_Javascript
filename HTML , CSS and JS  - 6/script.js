let age = prompt("ENTER YOUR AGE => ")
age = Number.parseInt(age)
if(age<0){console.error("You entered an invalid age")}
if (age===4){location.href="https://www.google.com"}
if (age>=18){
    alert("You can drive")
  } 
  else(console.log("You cant drive"))
if(confirm("Do u want to see the prompt ?")) {
    console.log(age)
}
