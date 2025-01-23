
//left rotate
var rotate = function(nums, k) {
    
    return nums.slice(k).concat(nums.slice(0,k))
};

console.log(rotate([1, 2, 3, 4, 5, 6,7],4))

//Right rotate

const RightRotateArray = (array,k)=>{
    return array.slice(-k).concat(array.slice(0,-k))
    }
    
console.log(RightRotateArray([1, 2, 3, 4, 5, 6],2))