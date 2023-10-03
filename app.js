// <-------------------------------------Strings----------------------------------------->
console.log('hello world')
console.log('I love amanda' + ' sometimes')

//How to locate an index in a string
console.log('Moe'[0])
//spacing counts as an index number
console.log('Hello World'[10])

//find the length of a string
console.log('Maurice is great'.length)

//get the last index of any string
let str = "Maurice"
console.log(str[str.length-1])
console.log(str[5-1])

//<--------------------------------------Data Types---------------------------------------->
//How to find if a number is even or odd by using modelo % calculates the remainder 
//take any number and % 2 if it does not give you 0 it is an odd number, if it comes out 0 then its even
//boolean is true or false

//<--------------------------------------Variables---------------------------------------->
//let can be changed, const can not be changed

/**Convert Temperatures
 * Celsisus-to-Fahrenheit formula
 * F = C x 1.8 +32
 */

let celsisus = 10;
let fahrenheit = celsisus * 1.8 + 32;
console.log(fahrenheit)

//<--------------------------------------Equality---------------------------------------->
//let ranNumber ='1' == 1 //true, checks the value
//let ranNumber ='1' === 1 //false, checks the value and Type

//check if something is not equal to 
//!= checks vaules not equal
//!== checks vaules and types not equal
let ranNumber ='1' != 1 //false, values are equal
console.log(ranNumber);

let bool ='1' !== '1' //false, value and types not equal 
console.log(bool)

//<--------------------------------------Conditionals---------------------------------------->

//let subscribed = false

//if (subscribed === true) {
  //  console.log('show the video')
//}

//else {
  //  console.log('please subscribe')
//}

//elseif statements

let subscribe = false
let loggedIn = true

if (subscribe === true) {
  console.log("show the video");
} 
else if (loggedIn === true) {
  console.log("tell user to upgrage thei subscription");
} 
else {
  console.log("please subscribe");
}

let cash = 50
let price = 40

if (cash > price){
    console.log("you paid extra heres your change") //if statement runs
}

let money = 40
let cost = 40

if (money > cost) {
    console.log("heres you change")
}
else if (cash === price){
    console.log('you paid the exact amount') //else if statement runs
}

let funds = 30
let productCost = 40

if (funds > productCost) {
  console.log("heres you change");
} 
else if (funds === productCost) {
  console.log("you paid the exact amount");
}
else{
    console.log("you dont have enough money") //else statment runs
}

//Solve this problem

let custMoney = 45
let productAmount = 100
let difference = custMoney - productAmount

if (custMoney > productAmount) {
    console.log(`you paid extra here is you ${difference} dollars change`)
}
else if ( custMoney === productAmount) {
    console.log('you paid the exact amount')
}
else{
    console.log(`You still owe ${difference * (-1)} dallars`)
}