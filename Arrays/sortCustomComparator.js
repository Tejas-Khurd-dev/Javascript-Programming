arr = [3,-2,4,1,5,-4,7,6]
console.log(arr)

arr = arr.sort() // --> Will not work for negative numbers
console.log(arr)

arr = arr.sort((a,b) => a-b) // --> Normal sort
console.log(arr)

arr = arr.sort((a,b) => b-a) // --> Reverse sort
console.log(arr)

arr = arr.sort((a,b) => Math.abs(a)-Math.abs(b)) // --> absolute normal sort
console.log(arr)