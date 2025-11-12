let obj = {
// key: value
  name : "Tejas",
  "fav profession" : "Web-devlopment",
  age : 18,
  isMaried : false,
}

console.log(obj)
console.log("age:", obj.age)
// console.log("age:", obj[age]) // --> This will give error
console.log("age:", obj["age"])
console.log("fav profession:", obj["fav profession"])