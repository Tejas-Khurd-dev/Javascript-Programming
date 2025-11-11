arr = [1,2,3,4,5]

for (let ele = 0; ele < arr.length; ele++) {
  arr[ele] *= 2 // // --> array elements are changing since it is operating on real elements of array 
  process.stdout.write(arr[ele] + " ")
}
console.log(", --> original array:",arr, "\n")


arr = [1,2,3,4,5]
for (let ele of arr){
  ele *= 2 // --> array elements are not changing since it is operating on copy of array elements
  process.stdout.write(ele + " ")
}
console.log(", --> original array:",arr, "\n")