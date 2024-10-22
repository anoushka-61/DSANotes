
//Sum to exact target
const SumPair =(array, target)=>{
  const arrayMap = new Map();
  for(i=0;i<array.length;i++){
    complement = target-array[i]
    if(arrayMap.has(complement)){
        return [arrayMap.get(complement),i]
    }
    
    arrayMap.set(array[i],i)
  }
return [];
}

console.log(SumPair([10, 22, 28, 29, 30, 40], 52))

//sum closest to target
const closestPair =(array,target)=>{
    let closestPair = [];
    let closestDiff = Infinity;
    
    const arrayMap = new Map();
    
    for (let i = 0; i < array.length; i++) {

      // Check if any previous number would sum close to the target with the current number
      for (const [key, index] of arrayMap) {
        const currentDiff = Math.abs(target - (key + array[i]));
    
        if (currentDiff < closestDiff) {
          closestDiff = currentDiff;
          closestPair = [index, i];
        }
      }
    
      arrayMap.set(array[i], i);
    }
    
    return closestPair;
}
console.log(closestPair([10, 22, 28, 29, 30, 40], 52))
