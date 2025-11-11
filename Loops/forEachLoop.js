arr = [1,2,3,4,5]

// array.forEach((element, index, array) => {
//   console.log(element)
// })

arr.forEach(ele => {
  console.log(ele)
})
console.log()

arr.forEach((ele,i,arr) => {
  console.log(ele, i, arr)
})