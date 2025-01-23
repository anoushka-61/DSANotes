const fact = (n)=>{
if(n=== 1)  return n;
return n*fact(n-1)
}

let n =6;

console.log(fact(n))