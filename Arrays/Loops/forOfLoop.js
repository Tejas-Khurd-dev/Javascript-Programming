arr = [1,2,3,4,5]

for (let ele = 0; ele < arr.length; ele++) {
  arr[ele] *= 2
  process.stdout.write(arr[ele] + " ")
}
console.log(arr, "\n")


arr = [1,2,3,4,5]
for (let ele of arr){
  ele *= 2 // --> array elements are not changing
  process.stdout.write(ele + " ")
}
console.log(arr, "\n")