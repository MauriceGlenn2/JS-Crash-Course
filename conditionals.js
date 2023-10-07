//<--------------------------------------Conditionals---------------------------------------->

//let subscribed = false

//if (subscribed === true) {
//  console.log('show the video')
//}

//else {
//  console.log('please subscribe')
//}

//elseif statements

let subscribe = false;
let loggedIn = true;

if (subscribe === true) {
  console.log("show the video");
} else if (loggedIn === true) {
  console.log("tell user to upgrage thei subscription");
} else {
  console.log("please subscribe");
}

let cash = 50;
let price = 40;

if (cash > price) {
  console.log("you paid extra heres your change"); //if statement runs
}

let money = 40;
let cost = 40;

if (money > cost) {
  console.log("heres you change");
} else if (cash === price) {
  console.log("you paid the exact amount"); //else if statement runs
}

let funds = 30;
let productCost = 40;

if (funds > productCost) {
  console.log("heres you change");
} else if (funds === productCost) {
  console.log("you paid the exact amount");
} else {
  console.log("you dont have enough money"); //else statment runs
}

//Solve this problem

let custMoney = 45;
let productAmount = 100;
let difference = custMoney - productAmount;

if (custMoney > productAmount) {
  console.log(`you paid extra here is you ${difference} dollars change`);
} else if (custMoney === productAmount) {
  console.log("you paid the exact amount");
} else {
  console.log(`You still owe ${difference * -1} dallars`);
}
