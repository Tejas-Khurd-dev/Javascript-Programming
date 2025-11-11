arr = [1,2,3,4,5]

arr.forEach(ele => {
  ele *= ele
  process.stdout.write(ele+" ")
})
console.log(", --> original array:",arr)