//<--------------------------------------Ternary Operators---------------------------------------->
let hot = true;
hot ? console.log("weather is hot out") : console.log("weather is cold"); //weather is hot

let hotOut = false;
hotOut ? console.log("weather is hot out") : console.log("weather is cold"); //weather is cold

let subscribed = true;
let logIn = true;

let string = subscribed && logIn ? "show the video" : "log in please";
console.log(string);

//problem
let personCash = 50;
let departmentProduct = 40;
let isTheStoreOpen = true;

let answer =
  isTheStoreOpen && personCash >= departmentProduct
    ? "give recept"
    : "do not give recept";
console.log(answer);
