/** <------------------IMPORTANT QUESTION---------------------->
 * Counting the amount of chars in a string, you must use char map
 *
 * common questions:
 * Which char appears the most amount of times?
 * does string A contain the same char as string B (anagram)?
 * Are there any duplicate chars?
 * 
 */

//<-----------------------------------junior way-------------------------->
// const str = "Simplified !"
// const charMap = {}

// for(let char of str){// console.log(char) Check if loop is working

//     //if we havent see the char before, make it equal to 1
//    if(!charMap[char]){
//     charMap[char] = 1 
//    } 
//    //otherwise add 1 
//    else{
//     charMap[char] = charMap[char] + 1;
//    }
  
// }

// console.log(charMap)


//<------------------------------optimization------------------------->
// const str1 = "Simplified !";
// const charsMap = {};

// for(let char of str1){
//     //sets NaN to 1 with || 1, left side is a falsy value it will return the right had side
//     charsMap[char] = charsMap[char] + 1 || 1 
// }

// console.log(charsMap)


//<--------------------------------80K way------------------------->
// const maxCharacter = (str) => {
//   // create a character map
//   let charMap = {};

//   let max = 0;
//   let maxChar = "";
//   for (let char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   //loop over every char in the char map
//   for (let char in str) {
//     //if the value of the char is greater than max
//     if (charMap[char] > max) {
//       //set max to the value
//       max = charMap[char];
//       //set maxChar to the character
//       maxChar = char;
//     }
//   }
//   return maxChar
 
  
// };
// console.log(maxCharacter("aabbbccd"));

//<-------------------------------top tech way----------------->

const str =  "Simplifiesd !"
const charMap = new Map();

for (const char of str){
    const count = charMap.get(char)
    charMap.set(char, count + 1 || 1)
}

for(const [char, count] of charMap){
    console.log(char, count)
}

console.log(charMap) 