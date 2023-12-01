const catMap = {c: 1, a: 1, t: 1, s:1};
//first need to break the object down into array of keys
//using object.keys
//then check the length of the array
console.log(Object.keys(catMap).length)

//compare the lenght of the array of both objects, if not equal return false automatically\

//new way to do it es6
const catsMap = new Map();
catsMap.set('c', 1);
catsMap.set('a', 2);
catsMap.set('t', 3);
catsMap.set('s', 4);
//new way to do it es6
console.log(catsMap.size);


//replace spaces, replace takes in 2 arguments, the first is what you want to replace, the second is what you want to replace it with
console.log('A B C'.replaceAll(" ", '')); //ABC replace all spaces with nothing



//Example 2
//solve in 2 lines of code
//set both strings to lowercase
//remove all spaces
//array.sort()
const strA = "cat";
const strB = "act";
//convert to an array, sort, then join back to a string
console.log(strA.split('').sort().join('') === strB.split('').sort().join(''));

//solution
const anagrams = (str1, str2) => {
return cleanedStr(str1) === cleanedStr(str2);
};
//use helper function to clean the string
const cleanedStr = (str) => {
    return str.toLowerCase().replaceAll(" ", "").split("").sort().join("");
}

console.log(anagrams('cat', 'act')); //true
console.log(anagrams('C A T', 'act')); //true
console.log(anagrams("frontend", "simplified")); //FALSE