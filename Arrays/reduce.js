arr = [1,2,3,4,5]
console.log(arr)

let sum = arr.reduce(function(a,b){
  return a+b
})
console.log(sum)

let sub = arr.reduce(function(a,b){
  return a-b
})
console.log(sub)

let mul = arr.reduce(function(a,b){
  return a*b
})
console.log(mul)

let div = arr.reduce(function(a,b){
  return a/b
})
console.log(div)