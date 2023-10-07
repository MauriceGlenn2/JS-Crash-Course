//<--------------------------------objects---------------------------------->
let user = {
  username: "David",
  email: "david@gmail.com",
  subscription: "VIP",
  discordId: "david#001",
  lessonsCompleted: [0, 1],
};

//prints david, treated like a string
console.log(user.username[0]); //prints "D"

//treated as an array, you can user map, and filter
console.log(user.lessonsCompleted);
console.log(user.lessonsCompleted.map((elem) => elem * 2));

let users = [
  {
    username: "David",
    email: "david@gmail.com",
    subscription: "VIP",
    password: "12345",
    discordId: "david#001",
    lessonsCompleted: [0, 1],
  },
  {
    username: "mo",
    email: "mo@gmail.com",
    password: "4321",
    subscription: "VIP",
    discordId: "mo#001",
    lessonsCompleted: [0, 1],
  },
];

//access first element in array
console.log(users[0].username); //shows first object entirely
console.log(users[1].lessonsCompleted.map((ele) => ele * 6)); //targets mo user, and maps

//loging a user in, loop over array
function login(email, password) {
  for (let i = 0; i < users.length; i++) {
    console.log(users[i]);              //shows both full objects in browser
    if (users[i].email === email) {     // === email checks what we are passing in the function

      console.log(users[i]);            // only object we get is the one that is passed trough in the login function
      if (users[i].password === password) {
        console.log("log user in");
      } else {
        console.log("wrong password");  //only targets the wrong password
      }
      return
    }
  }
  console.log('coould not find an email that matched') //outside the for loop, if input info is not found
}
login("mo@gmail.com", "4321"); //user input

//practice problem

/**
 * create a register function
 * 
 * inside your register function:
 * 1. creat a user objeck
 * 2.push this user object onto the 'users' array
 */


function register (user) { //step one
    users.push(user)                                                                       //step two
    console.log(user)    
}

register({username:'Amanda', 
email:'Amanda@gmail.com', 
password:'0987', 
subscription:'VIP', 
discordId:'Amanda#000', 
lessonsCompleted:[0, 2]}) //trun this into an object by using {} and adding properties
console.log(users)