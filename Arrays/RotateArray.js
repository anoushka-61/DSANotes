
//left rotate
const RotateArray = (array,k)=>{
return array.slice(k).concat(array.slice(0,k))
}

console.log(RotateArray([1, 2, 3, 4, 5, 6],2))

//Right rotate

const RightRotateArray = (array,k)=>{
    return array.slice(-k).concat(array.slice(0,-k))
    }
    
console.log(RightRotateArray([1, 2, 3, 4, 5, 6],2))