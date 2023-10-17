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
let newArr = arr.filter((element) => {
  // callback function
  console.log(element); //prints out every number in arr line by line
  return true; //filter only runs if returned "true"
});
console.log(newArr);

//only filter through certain elements if less than 50
// let arr2 = [20, 30, 40, 50, 100];
// let newArr2 = arr2.filter((element) => {
//   if (element < 50){
//     return true;
//   };
// });
console.log(newArr2); //prints [20,30,40]

//how to code one line
let arr3 = [20, 30, 40, 50, 100]; // if one line is just returning you can remove {} from callback
let newArr3 = arr2.filter((element) => element < 50); //if one arguement, dont need ()
//since this is a true statement we can just return
console.log(newArr3); //prints [20,30,40]

//Practice Problem
/**
 * Filter out all the FAIL elements in an array
 *  ex. ['A+', 'A', 'Fail'] => ['A+', 'A']
 */

let grades = ["A+", "A", "FAIL"]; //short way
let = passingGrades = grades.filter((grade) => grade !== "FAIL");
console.log(passingGrades);

let classScores = ["A+", "A", "FAIL"]; //long way
let passingScores = classScores.filter((scores) => {
  if (scores !== "FAIL") {
    return true;
  }
});
console.log(passingScores);

//looping over arrays, filter out fail grades without using .filter

let kidsScores = ["A+", "A", "FAIL"];
let kidsPassingScores = [];

for (let i = 0; i < kidsScores.length; i++) {
  // console.log(i)                     // make sure you're looping over the index
  console.log(kidsScores[i]); //brings up the elements in the array
  if (kidsScores[i] !== "FAIL") {
    kidsPassingScores.push(kidsScores[i]);
  }
}
console.log(kidsPassingScores);

//array Mapping arr.map this accepts a callback

let arr4 = [1, 4, 9, 16];

arr.map((elements) => {
  console.log(elements);
});
