/** Given an array along with a chunk size, return a new array that contains
 * many subarrays where the length of each subarray is length `size`.
 *
 * @example
 * arrayChunk([0, 1, 2, 3], 2) === [[0, 1], [2, 3]]
 * arrayChunk([0, 1, 2, 3, 4], 2) === [[0, 1], [2, 3], [4]]
 * arrayChunk([0, 1, 2, 3, 4], 3) === [[0, 1, 2], [3, 4]]
 * 
 *  * create an empty array to hold chunks called chunkedArray
 * for each index in the array that is divisible by size ([0, 1, 2, 3, 4], 2) this would be 0 and 2 and 4
 * create a subarray of lenght "size" that slices from the current index
 * push the subarray into the chunkedArray
 */

const arr = [0, 1, 2, 3, 4];
const size = 2;

// for(i = 0; i < arr.length; i++) {
//     if (i % size !== 0) {
//       continue
//     }
//     console.log(i); //0, 2, 4 only divisible by 2
// }


//better practice 
//for each index in the array that is divisible by size
for(i = 0; i < arr.length; i += size) {
    console.log(i); //0, 2, 4 only divisible by 2
}

const arrayChunk = (array, size) => {
  //create an empty array to hold chunks called chunkedArray
  const chunkedArray = [];
  //for each index in the array that is divisible by size
  for (let i = 0; i < array.length; i += size) {
    //create a subarray of lenght "size" that slices from the current index
    const subarray = array.slice(i, i + size);
    //push the subarray into the chunkedArray
    chunkedArray.push(subarray);
  }
  return chunkedArray;
};