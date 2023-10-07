//<--------------------------------------Logical Operators---------------------------------------->
// && checks if the left and right side are true
//both need to be true to run

let cusDollars = 50;
let storePrice = 40;
let isStoreOpen = false;

if (cusDollars >= storePrice && isStoreOpen === true) {
  console.log("We have enough cash for product, print recept");
} else {
  console.log("the store is closed");
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
