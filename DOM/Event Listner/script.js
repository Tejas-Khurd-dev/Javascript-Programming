// let ele1 = document.querySelector("#mewtwo")
// OR
let x = document.getElementById("mewtwo")
x.addEventListener("click", function () {
  x.style.color = "white"
  x.style.backgroundColor = "purple"
})

let y = document.querySelector("#pikachu")
y.addEventListener("mousemove", function () {
  y.style.color = "yellow"
  y.style.backgroundColor = "red"
})

let z = document.querySelector("#charlizard")
z.addEventListener("mouseenter", function () {
  z.style.color = "white"
  z.style.backgroundColor = "orange"
})

let a = document.querySelector("#bulbasaur")
a.addEventListener("mouseenter", function () {
  a.style.color = "white"
  a.style.backgroundColor = "green"
})

a.addEventListener("mouseleave", function () {
  a.style.color = "black"
  a.style.backgroundColor = "white"
})

let e = document.querySelector("#evolve")
e.addEventListener("click", function () {
  y.innerHTML = "Raichu"
  y.style.color = "orange"
  y.style.backgroundColor = "black"
})