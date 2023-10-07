//<--------------------------------------Truthy vs falsey---------------------------------------->

// If statements will run with truthy values, else statement run if falsey

let val = "";

if (val) {
  console.log("truthy value", !!val);
} else {
  console.log("falsey value", !!val); //prints falsey
}

let otherVal = "David";
if (otherVal) {
  console.log(!!otherVal); //prints true
} else {
  console.log(!!otherVal);
}
