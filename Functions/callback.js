function product(a,b,c){
  return a*b*c
}

function fun(x,y){ 
  return x(2,5,3)-y
}

console.log(fun(product,10))