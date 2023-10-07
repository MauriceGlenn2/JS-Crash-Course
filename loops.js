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

let site = "Frontend Simplified";
for (let i = 0; i < site.length; i++) {
  //loop over string i < site.length
  console.log(site[i]);
}
