arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let evenArr = arr.filter(function (ele){
  if (ele % 2 == 0) return true
  else false
})
console.log("even element from arr: ",evenArr)   

// OR

let lessThen5 = arr.filter( ele =>{
  return (ele < 5) 
})
console.log("less then 5 element from arr: ",lessThen5)  

// OR

let lessThen7 = arr.filter(ele => (ele<7))
console.log("less then 7 element from arr: ",lessThen7)  

// You can filter manually also by using loops