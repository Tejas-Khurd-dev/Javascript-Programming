console.log(Math.random()) // --> Generate real random number between 0 and 1 (excluding 0 and 1) (0,1)

// wap to generate a random number between [0,9] (including 0 and 9)
console.log(Math.floor(Math.random()*10)) // --> [0,10)

// wap to generate a random number between [0,10] (including 0 and 10)
console.log(Math.floor(Math.random()*11)) // --> [0,11)

// wap to generate a random number between [-10,10] (including -10 and 10)
console.log(Math.floor(Math.random()*21) - 10) // --> [0,21) - 10 = [-10, 11)

if(Math.random() < 0.5) console.log("hello")
else console.log("by")