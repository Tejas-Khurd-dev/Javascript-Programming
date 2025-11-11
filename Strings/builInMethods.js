let s1 = "Coder"

console.log(s1)

upperCaseString = s1.toUpperCase()
console.log(upperCaseString) // --> doesn't change original string but return new string

lowerCaseString = s1.toLowerCase()
console.log(lowerCaseString) // --> doesn't change original string but return new string
console.log("--------------------------------\n");
// ----------------------------------------------------------------------------------------------------------------------

let s2 = "        Coder     Hacker        |   "
console.log(s2,"--> s2 length is: ", s2.length)

let trimS2 = s2.trim() // --> It removes front and back extra spaces
console.log(trimS2,"--> s2 trimmed length is: ", trimS2.length)
console.log("--------------------------------\n");
// ----------------------------------------------------------------------------------------------------------------------

console.log("Index of c in s2 is: ", s2.indexOf("e")) // --> It will pick first index of passed element
console.log("Last index of c in s2 is: ", s2.lastIndexOf("e")) // --> It will pick last index of passed element
console.log("--------------------------------\n");
// ----------------------------------------------------------------------------------------------------------------------

console.log("Character as 3rd index in s1: ",s1.charAt(1))
console.log("Character as 3rd index in s1: ",s1[1]) // --> Direct access
console.log("--------------------------------\n");
// ----------------------------------------------------------------------------------------------------------------------

let s3 = "slicing string"
console.log("Slicing of s3 from 0th index:",s3.slice(0)) // i to end
console.log("Slicing of s3 from 2nd index:",s3.slice(2)) // i to end
console.log("Slicing of s3 from 2nd index till 9th index:",s3.slice(2,10)) // i to j-1
console.log("--------------------------------\n");
// ----------------------------------------------------------------------------------------------------------------------

let s4 = "Tejas is pro coder"
// suppose i want to store this word in arr like below
let arr1 = ["Tejas", "is", "pro", "coder"]
let arr2 = s4.split(" ") // --> s4 is splitted on the basis of " " (space)
console.log(arr2)
for (const element of arr2) {
  console.log(element)
}
console.log("--------------------------------\n");
// ----------------------------------------------------------------------------------------------------------------------