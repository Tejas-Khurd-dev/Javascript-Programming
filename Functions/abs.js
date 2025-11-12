function eqn(a, b){
  return Math.abs(a**3) * b**3
}

eqnAnswer = eqn(-6, 5)
console.log(eqnAnswer)
console.log("--------------------------------\n")
// ----------------------------------------------------------------------------------------------------------------------

eqnAnswer = eqn(-6, "tr")
console.log(eqnAnswer)