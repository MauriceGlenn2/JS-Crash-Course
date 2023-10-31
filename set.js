const arr = [1, 2, 3, 4, 5, 5, 5, 5, 5]
// trun an array into an array of unqiue values
//only stores the unique values, no duplicates
//add numbers [...new Set(arr), 1]
const uniqueArr = [...new Set(arr)]

console.log(uniqueArr);