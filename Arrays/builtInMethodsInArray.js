const nums = [5, 3, 1, 4, 2];

// sort()
const asc = nums.sort(); // -> will not work for negative numbers
console.log("sort asc:", asc, "\n");

// reverse()
const rev = nums.reverse();
console.log("reverse:", rev);

// slice()
// array.slice(startIndex, endIndexNotIncluded)
const part = nums.slice(1, 4);
console.log("slice:", part);

// concat()
// array.concat(array2, array3, ...)
const merged = nums.concat([6, 7]);
console.log("concat:", merged);