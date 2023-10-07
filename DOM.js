//first way to access an element, need to make sure js loads after HTML, must use

document.querySelector('.title')
document.querySelector('h1')
console.log(document.querySelector('#title'))

//chanhe HTML
document.querySelector('.title').innerHTML = 'Frontend Simp'
document.querySelector(".title").innerHTML += "Frontend Simp";


//second way, only works if element has an id
//dont need to pass a #
document.getElementById('title')


//change CSS
// document.querySelector(".title").style.color = 'red'
document.querySelector(".title").style.fontSize = "48px";

//making a click listener
function changeTitleToRed () {
    document.querySelector('.title').style.color = 'red'
    console.log('clicked')
}

//making button, turn screen to darkmode
function darkMode () {
    document.querySelector("body").classList.toggle("dark-theme");
}
