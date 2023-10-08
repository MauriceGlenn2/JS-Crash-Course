//See in index2.HTML

//https://jsonplaceholder.typicode.com/users/1


 //console.log(fetch("https://jsonplaceholder.typicode.com/users/1")) //fetches data, but can not access


 const emailRef = document.querySelector(".email") // place defer in html <script>
//  console.log(emailRef)

//1. Then - runs in the background

// fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
//   // console.log(response); front end can not use
//   // console.log(response.json()); how to use with front end, consloe logs user info in https://jsonplaceholder.typicode.com/users/1 gives data locked in a promise
//     response.json().then((data) => {     //final step for front end usage
//         console.log(data);
//         emailRef.innerHTML = data.email  //change the HTML from the data pulled
//   });
// })

// //shorter verson
// fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
//     return response.json()
// }).then(data => {
//     emailRef.innerHTML = data.email;
// })
    

//2. async/await - runs line by line
//in order to use an await you to use an async function

// async function main () {                                          // async in front of a function
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1"); //need to store in a variable whole thing returns a response
//     const data = await response.json(); // unlocked data for front end
//     emailRef.innerHTML = data.email     //use data for front end
// }

// main();

//<------------------------Creating promisies----------------->
const statusRef = document.querySelector(".status");


//created promise
// function getSubscriptionStatus() {                // creat function
//     return new Promise((resolve, reject) => {    //exceptes resolve and reject, creates promise
//         resolve("VIP")                           //locked promise
//     })
// }

// console.log(getSubscriptionStatus());  
// //then
// getSubscriptionStatus().then(response => console.log(response)) //dont have to use json(no backend) since promise was created in frontend

// //using async
// async function main () {
//     console.log(await getSubscriptionStatus()) //shows VIP in console
// }

// main()

//placing data in elements from created promise


// async function main() {
//   const status = await getSubscriptionStatus(); //shows VIP in console
//   statusRef.innerHTML = status
// }

// main();

//<--------------------practice problem--------------->

/**
 * create a function called 'get video'
 * accept a parameter called 'subscription'
 * return a new promise inisde of the function that:
 *          -if VIP resolved "show video"
 *          -if Free resolve "show trailer"
 *          -otherwise reject "no video"
 * console log results of the getVideo(status) in main ()
 */


function getVideo (subscription) {
    return new Promise((resolve, reject) => {
        if ("VIP" === resolve){
            console.log("show video")
        }
        if ("FREE" === resolve){
            console.log('show trailer')
        }
        else{
            console.log("no video")
        }
    })
}

async function main() {
  const status = await Subscription(); //shows VIP in console
  console.log(status)
  statusRef.innerHTML = status;
  console.log(getVideo(status))
}

main();