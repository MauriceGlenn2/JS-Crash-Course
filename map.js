//<---------------------------------------Map---------------------------------------->
let arr = [1, 4, 9, 16]  // use map when you want to turn the array into something else

let newArray = arr.map((element) => {
    console.log(element)
    return undefined  //set rules to what you want to return in the array
})

console.log(newArray) //changes everything to "undefined"

//reducing lines of code
let arr1 = [1, 4, 9, 16];

let newArr1 = arr1.map(element => undefined)
console.log(newArray);

/**
 * turn each element in an array of dollars into cents
 * examples
 * [1, 5, 10, 31] => [100, 500, 1000, 300]
 * [0, 1000, 2000]
 */
//short way
let dollars = [1, 5, 10, 3]
let cents = dollars.map(element => element * 100)
console.log(cents)

//long way
let money = [1, 5, 10, 3];
let change = money.map((element) => {
    return element * 100
})
console.log(change)

//for loop
let funds = [1, 5, 10, 3];
let looseChange = []

for (let i = 0; i < funds.length; i++){
    looseChange.push(funds[i] * 100)
}
console.log(looseChange)

//^^^^^Theres 2 ways to change an array, push and map^^^^^