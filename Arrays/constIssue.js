let arr = [1,2,3,4,5]
arr[0] = 6
arr.push(2)
console.log(arr)

arr = 3.14 

console.log(arr)
console.log("--------------------------------\n")
// ----------------------------------------------------------------------------------------------------------------------

const constantArr = [1,2,3,4,5] // --> If this is constant array then to it is updating and also push funtion is working
constantArr[0] = 6
constantArr.push(2)
console.log(constantArr)

// constantArr = 3.14 // --> This will give error because it is declared as constant, const mean it will not change it dataTypes
console.log(constantArr)
// ----------------------------------------------------------------------------------------------------------------------