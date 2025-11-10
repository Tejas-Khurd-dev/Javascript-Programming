/* 
varf is Function-scoped, not globally scoped by default.
If you declare var inside a function, it is scoped to that function.
If declared outside any function, then it becomes global.
var is also hoisted and initialized with undefined. --> meaning
{
console.log(a)
var a = 10 
}
so above code output is undefined
It does not respect block scope (e.g., inside if, for, { }). 




let is Block-scoped — limited to { }.
Hoisted but not initialized, so accessing before declaration gives a ReferenceError.
--> meaning
{
console.log(a)
let a = 10 
}
so above code output gives a ReferenceError
Safer for modern JavaScript.
*/

var a = 4
console.log(a)
a = 5
console.log(a)
console.log("--------------------------------\n")
// ----------------------------------------------------------------------------------------------------------------------

const b = 4
console.log(b)
// a = 5 // --> will give error as now b has become constant
console.log(b)
console.log("--------------------------------\n")
// ----------------------------------------------------------------------------------------------------------------------

let a = 8
console.log(a)
a = 7
console.log(a)
console.log("--------------------------------\n")
// ----------------------------------------------------------------------------------------------------------------------
