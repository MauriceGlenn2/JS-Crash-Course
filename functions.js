//<--------------------------------------Functions---------------------------------------->

//Function definition, accepts a param as "name"
function welcomePersonToFes(firstName, lastName) {
  console.log(`welcome to FES, ${firstName} ${lastName}`);
}
//call a function, arguements need to be the same number and order in params in the definition
welcomePersonToFes("moe", "glenn");

function fn() {
  return 5; //runs return and stops running
  console.log("my function"); //does not run
}
console.log(fn()); // returns 5

function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}
console.log(sumOfTwoNumbers(10, 10));

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
  return celsisus * 1.8 + 32;
};
console.log(convertCelsisusToFahrenheit(0)); //prints 32
