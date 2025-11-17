console.log("Hello")
let a = 6
console.log(a*a)

// Element Selection 
let headings = document.querySelectorAll("h1")
console.log(headings)

let heading1 = document.querySelectorAll(".hello1")
console.log(heading1)

let heading3 = document.querySelectorAll(".hello2")
console.log(heading3)

let heading4 = document.querySelector("#unique-heading")
console.log(heading4)

// Change css 
heading4.style.color = "red"
heading4.style.fontFamily = "Gill Sans"

let x = document.querySelector(".hello2")
x.style.color = "black"
x.style.backgroundColor = "yellow"

// Change html
x.innerHTML = "Hello Duniya"

setTimeout(function(){
  x.innerHTML = "Magic"
}, 2000)

// Change both
setTimeout(function(){
  x.innerHTML = "Change my color"
  x.style.color = "blue"
}, 4000)
