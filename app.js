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

//<--------------------------------------Logical Operators---------------------------------------->
// && checks if the left and right side are true
//both need to be true to run


let cusDollars = 50
let storePrice = 40
let isStoreOpen = false

if (cusDollars >= storePrice && isStoreOpen === true){
    console.log('We have enough cash for product, print recept')
}
else{
    console.log('the store is closed')
}

// || checks if the left or right side of the comparison is true

let custDollars = 50;
let storesPrice = 40;
let isStoresOpen = false;

if (custDollars >= storesPrice || isStoresOpen) {
  console.log("We have enough cash for product, print recept");
} else {
  console.log("the store is closed");
}

//<--------------------------------------Truthy vs falsey---------------------------------------->

// If statements will run with truthy values, else statement run if falsey

let val =""

if (val) {
    console.log('truthy value', !!val)
}
else{
    console.log('falsey value', !!val) //prints falsey
}

let otherVal ="David"
if (otherVal) {
    console.log(!!otherVal) //prints true
}
else {
    console.log(!!otherVal)
}

//<--------------------------------------Ternary Operators---------------------------------------->
let hot = true
hot ? console.log('weather is hot out') : console.log('weather is cold') //weather is hot

let hotOut = false
hotOut ? console.log('weather is hot out') : console.log('weather is cold') //weather is cold

let subscribed = true
let logIn = true

let string = subscribed && logIn ? 'show the video' : 'log in please'
console.log(string)

//problem
let personCash = 50
let departmentProduct = 40
let isTheStoreOpen = true

let answer = isTheStoreOpen && personCash >= departmentProduct ? 'give recept' : 'do not give recept'
console.log(answer)

//<--------------------------------------Loops---------------------------------------->
//While Loop
// let count = 1

// while (count <= 100){
//     console.log(count) //prints 1 -100
//     count = count +1
// }

//for loop
// for (let i = 0; i < 100; i ++) { //incerment count by 1 ++, decerment count by 1 --
//     console.log(i + 1)
// }

//problem
/**write a for loop that loops through 1 to 20
 * if the number is divis by 3, print "frontend "
 * if the number is divis by 5, print "simplified "
 * if the number is divis by 3 and 5 , print "frontend simplified "
 *if the number is not divis by either 3 or 5, print the number  
 */


//  for (let i = 1; i <= 20; i++){
//     if (i % 5 === 0 && i % 3 === 0)
//       console.log(`${i} ---->frontend simplified`); // have to place at the top so it executes first

//     else if (i % 3 === 0) {
//         console.log(`${i} --->frontend`)
//     }

//     else if (i % 5 === 0) {
//         console.log(`${i} --->simplified`);
//     }
    
//     else{
//         console.log(`${i}--->${i}`)
//     }
//  }

 /**print out every character from the string :
 * Forntend Simplified
 * @example
 * f
 * r
 * o
 * ...
 * e
 * d
 *
 */

 let site = "Frontend Simplified"
 for (let i = 0; i < site.length; i++ ){ //loop over string i < site.length
    console.log(site[i])
 }

 //<--------------------------------------Functions---------------------------------------->

 //Function definition, accepts a param as "name"
function welcomePersonToFes(firstName, lastName) {
  console.log(`welcome to FES, ${firstName} ${lastName}`)
}
//call a function, arguements need to be the same number and order in params in the definition
welcomePersonToFes('moe', 'glenn')

function fn( ) {
  return 5 //runs return and stops running 
  console.log('my function') //does not run
}
console.log(fn()) // returns 5

function sumOfTwoNumbers (num1, num2) {
  return num1 + num2
}
console.log(sumOfTwoNumbers(10, 10))

//problem
//*Create a funtion that converts C to F
// C  to F formula:
// F = C x 1.8 + 32


// Ex. convertCelsisusToFahrenheit(0) --> 32

// function convertCelsisusToFahrenheit (temp){
//   return temp * 1.8 + 32
// }
// console.log(convertCelsisusToFahrenheit(0))
// console.log(convertCelsisusToFahrenheit(10));
// console.log(convertCelsisusToFahrenheit(30));

//Another way to write fuctions

const convertCelsisusToFahrenheit = (celsisus) => {
  return celsisus * 1.8 + 32
}
console.log(convertCelsisusToFahrenheit(0)); //prints 32

 //<--------------------------------------Arrays---------------------------------------->
// let arr = [20, 30, 40, 50, 100]
// //first element in the array:
// console.log(arr[0])
// //last element in the array:
// console.log(arr[arr.length-1]) // better practice
// console.log(arr[4]);
// // add elements:
// arr.push(200)

// console.log(arr)

let arr = [20, 30, 40, 50, 100];
let newArr = arr.filter((element) => {   // callback function
  console.log(element);                 //prints out every number in arr line by line
  return true                           //filter only runs if returned "true"
});
console.log(newArr)

//only filter through certain elements if less than 50
let arr2 = [20, 30, 40, 50, 100];
let newArr2 = arr2.filter((element) => {
  if (element < 50){
    return true; 
  }; 
});
console.log(newArr2); //prints [20,30,40]

//how to code one line
let arr3 = [20, 30, 40, 50, 100];                       // if one line is just returning you can remove {} from callback
let newArr3 = arr2.filter((element) => element < 50); //if one arguement, dont need ()
                                                      //since this is a true statement we can just return
console.log(newArr3); //prints [20,30,40]


//Practice Problem
/**
 * Filter out all the FAIL elements in an array
 *  ex. ['A+', 'A', 'Fail'] => ['A+', 'A']
 */

let grades = ['A+', 'A', 'FAIL'] //short way
let = passingGrades = grades.filter((grade) => grade !=='FAIL' )
console.log(passingGrades)

let classScores = ["A+", "A", "FAIL"]; //long way
let passingScores = classScores.filter((scores) => {
  if (scores !== "FAIL"){
    return true
  }
})
console.log(passingScores)


//looping over arrays

