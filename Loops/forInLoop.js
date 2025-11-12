//  --> First learn about objects

let obj = {
  name : "Tejas",
  "fav profession" : "Web-devlopment",
  age : 18,
  isMaried : false,
}

for (const key in obj) {
  console.log(key,"-", obj[key])

}