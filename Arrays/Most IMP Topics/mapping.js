arr = [2,-3,1,-4]

// Manual mapping

// sqrr = []
// absrr = []

// for (let ele of arr) {
//   ele = ele**2
//   sqrr.push(ele)
// }

// for (let ele of arr) {
//   absrr.push(Math.abs(ele))
// }

// console.log(arr)
// console.log("squaring arr values: ",sqrr)
// console.log("absoluting arr values: ",absrr)

// Using map 

function twice(arrEle){
  return 2*arrEle
}

let twiceArr = arr.map(twice) // --> Callback function
console.log("Twice of arr is:",twiceArr)              

// OR

let add10 = arr.map(function (ele){
  return ele+10
})
console.log("arr + 10 is:",add10)

// OR

let thriceArr = arr.map( ele => {
  return ele*3
}) // --> Arrow funtion
console.log("Thrice of arr is:",arr)

// OR

arr = arr.map(ele => ele**3) // --> Arrow funtion
console.log("Cube of arr own element is:",arr)   
