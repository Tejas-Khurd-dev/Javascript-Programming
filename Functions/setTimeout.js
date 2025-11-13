// setTimeout(code, delaySeconds*1000)

function hello(){
  console.log("hello")
}

setTimeout(hello, 3*1000) // --> First I run hello but because of delay mello will be printed first and here hello and mello are the callback functions

setTimeout(function (){ // --> can also pass function directly and no need to give it a name
  console.log("mello")
}, 2*1000) 