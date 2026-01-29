let arr = [1, 2, 3, 4, 50, 6];
// let a;
// do {
//     a = prompt("Enter the number you want to add in the array ");
//     a = Number.parseInt(a);
//     arr.push(a);
// } while(a!== 0)
let arr2 = arr.filter((x)=>{
    return x%10==0 ;
  
})

console.log(arr2) ; 