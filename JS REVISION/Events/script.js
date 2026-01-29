const element = document.getElementById("first") ;
element.addEventListener('mouseenter' , ()=>{
    element.textContent = "Shivam is Developer "
    element.style.backgroundColor = "Red" ;
})

const box = document.getElementById("box");

// Let box listen for mouseover
box.addEventListener("mouseover", function () {
  box.innerHTML = "Mouse is over me!";
});

// Let box listen for mouseout
box.addEventListener("mouseout", function () {
  box.innerHTML = "Move is out!";
});